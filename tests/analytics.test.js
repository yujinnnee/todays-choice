const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

function node() {
  return {
    dataset: {}, children: [], handlers: {},
    addEventListener(name, handler) { this.handlers[name] = handler; },
    setAttribute() {}, focus() {},
    replaceChildren() { this.children = []; },
    append(...children) { this.children.push(...children); },
  };
}

const analytics = fs.readFileSync("analytics.js", "utf8");
for (const realId of [false, true]) {
  const head = node();
  const context = vm.createContext({ window: {}, document: { head, createElement: node }, URLSearchParams, location: { search: "", pathname: "/index.html" } });
  const source = analytics.replace(/const GA4_MEASUREMENT_ID = "[^"]+";/,
    `const GA4_MEASUREMENT_ID = "${realId ? "G-TEST123456" : "G-XXXXXXXXXX"}";`);
  vm.runInContext(source, context);
  assert.equal(head.children.length, realId ? 1 : 0);
  const configs = context.window.dataLayer.filter(item => item[0] === "config");
  assert.equal(configs.length, realId ? 1 : 0);
  if (realId) {
    assert.equal(head.children[0].async, true);
    assert.ok(head.children[0].src.endsWith("G-TEST123456"));
  }
  context.window.gtag = () => { throw new Error("Analytics unavailable"); };
  assert.doesNotThrow(() => vm.runInContext('trackTestEvent("test_start", {id: 1, title: "Test", category: "Fun"})', context));
}

const runner = fs.readFileSync("test-runner.js", "utf8");
const dataFiles = fs.readdirSync(".").filter(file => file.endsWith("-data.js"));
for (const file of dataFiles) {
  const roles = new Map();
  const root = {
    querySelectorAll() { return []; },
    querySelector(selector) {
      const name = selector.match(/data-role="([^"]+)"/)?.[1] || "focus";
      if (!roles.has(name)) roles.set(name, node());
      return roles.get(name);
    },
  };
  const events = [];
  const context = vm.createContext({
    document: { querySelector: () => root, createElement: node },
    trackTestEvent: (name, data, extra) => events.push({ name, data, extra }),
  });
  vm.runInContext(fs.readFileSync(file, "utf8").replace("export default testData;", "") + '\nthis.data = testData;', context);
  vm.runInContext(runner + '\ncreateTestRunner(document.querySelector("[data-test-runner]"), testData);', context);
  const click = name => roles.get(name).handlers.click();
  const count = name => events.filter(event => event.name === name).length;
  assert.equal(count("test_view"), 1);
  click("start");
  click("back");
  click("start");
  assert.equal(count("test_start"), 1);
  for (let index = 0; index < context.data.questions.length; index++) {
    const answer = roles.get("answers").children[0];
    answer.handlers.click();
    answer.handlers.click(); // A detached button must not submit twice.
  }
  assert.equal(count("test_complete"), 1);
  const result = events.find(event => event.name === "test_complete").extra;
  assert.equal(result.result_title, roles.get("result-title").textContent);
  assert.ok(Number.isFinite(result.result_score));
  click("restart");
  click("start");
  for (let index = 0; index < context.data.questions.length; index++) roles.get("answers").children[3].handlers.click();
  assert.equal(count("test_start"), 2);
  assert.equal(count("test_complete"), 2);
  if (file === "hidden-strength-data.js") {
    const j = "judgment", a = "action", r = "resilience", c = "connection", p = "persistence";
    const mappings = [[j,a,r,c,p], [j,r,p,c,a], [a,j,p,c,r], [p,j,r,c,a], [j,a,c,r,p], [j,a,r,c,p], [j,a,c,r,p], [j,a,r,c,p], [j,a,r,c,p], [j,a,r,c,p], [j,a,r,c,p], [j,a,r,c,p], [j,a,r,c,p], [j,a,r,c,p]];
    assert.equal(context.data.questions.length, 14);
    context.data.questions.forEach((question, index) => {
      assert.equal(JSON.stringify(question.answers.map(answer => answer.stat)), JSON.stringify(mappings[index]));
    });
    const scenarios = [
      ...[j,a,r,c,p].map(stat => ({ stats: Array(14).fill(stat), winner: stat, score: 14 })),
      { stats: [j,j,j,j,j,j,j,a,a,a,a,a,a,a], winner: a, score: 7 },
      { stats: [j,j,j,j,j,j,a,a,a,a,a,a,c,p], winner: a, score: 6 },
    ];
    for (const scenario of scenarios) {
      click("restart");
      click("start");
      scenario.stats.forEach((stat, index) => roles.get("answers").children[mappings[index].indexOf(stat)].handlers.click());
      const result = events.filter(event => event.name === "test_complete").at(-1).extra;
      assert.equal(result.result_stat, scenario.winner);
      assert.equal(result.result_score, scenario.score);
      assert.equal(result.question_count, 14);
    }
  }
  if (file === "workplace-image-data.js") {
    const r = "reliable", f = "friendly", s = "skilled", o = "organized", i = "independent";
    const mappings = [[o,f,s,r,i], [i,f,o,r,s], [r,f,i,s,o], [f,o,i,s,r], [o,i,r,s,f], [f,r,s,i,o], [o,r,s,f,i], [f,o,s,r,i], [i,f,r,s,o], [r,f,s,o,i], [s,o,r,f,i], [f,i,o,r,s], [i,r,s,f,o], [o,f,r,s,i], [o,r,s,f,i]];
    assert.equal(context.data.questions.length, 15);
    context.data.questions.forEach((question, index) => {
      assert.equal(JSON.stringify(question.answers.map(answer => answer.stat)), JSON.stringify(mappings[index]));
    });
    const scenarios = [
      ...[r,f,s,o,i].map(stat => ({ stats: Array(15).fill(stat), winner: stat, score: 15 })),
      { stats: [r,f,s,o,i,r,f,s,o,i,r,f,s,o,i], winner: i, score: 3 },
      { stats: [r,r,r,r,r,r,r,f,f,f,f,f,f,f,i], winner: f, score: 7 },
    ];
    for (const scenario of scenarios) {
      click("restart");
      click("start");
      scenario.stats.forEach((stat, index) => roles.get("answers").children[mappings[index].indexOf(stat)].handlers.click());
      const result = events.filter(event => event.name === "test_complete").at(-1).extra;
      assert.equal(result.result_stat, scenario.winner);
      assert.equal(result.result_score, scenario.score);
    }
  }
  if (["animal-personality-data.js", "stress-change-data.js"].includes(file)) {
    assert.equal(context.data.questions.length, 15);
    context.data.questions.forEach(question => assert.equal(question.answers.length, 5));
    const scenarios = [
      ...[0,1,2,3,4].map(choice => ({ choices: Array(15).fill(choice), winner: choice, score: 15 })),
      { choices: [0,1,2,3,4,0,1,2,3,4,0,1,2,3,4], winner: 4, score: 3 },
      { choices: [0,0,0,0,0,0,0,1,1,1,1,1,1,1,4], winner: 1, score: 7 },
    ];
    for (const scenario of scenarios) {
      click("restart");
      click("start");
      roles.get("answers").children[4].handlers.click();
      click("back");
      scenario.choices.forEach(choice => roles.get("answers").children[choice].handlers.click());
      const result = events.filter(event => event.name === "test_complete").at(-1).extra;
      assert.equal(result.result_stat, context.data.stats[scenario.winner].id);
      assert.equal(result.result_score, scenario.score);
      assert.equal(result.question_count, 15);
    }
  }
  if (file === "relationship-fatigue-data.js") {
    assert.equal(context.data.questions.length, 15);
    const cases = [[15,0,0], [26,24,0], [27,27,1], [37,49,1], [38,51,2], [48,73,2], [49,76,3], [60,100,3]];
    for (const [total, percentage, resultIndex] of cases) {
      click("restart");
      click("start");
      let extra = total - 15;
      for (let index = 0; index < 15; index++) {
        const choice = Math.min(3, extra);
        extra -= choice;
        roles.get("answers").children[choice].handlers.click();
      }
      const result = events.filter(event => event.name === "test_complete").at(-1).extra;
      assert.equal(result.result_score, total);
      assert.equal(result.result_percentage, percentage);
      assert.equal(result.result_title, context.data.results[resultIndex].title);
      assert.equal(roles.get("result-metric").textContent, `인간관계 피로도 ${percentage}%`);
    }
  }
  if (file === "million-followers-data.js") {
    const results = events.filter(event => event.name === "test_complete");
    assert.equal(results[0].extra.result_percentage, 25);
    assert.equal(results[1].extra.result_percentage, 100);
  }
  if (["married-partner-data.js", "hidden-romance-data.js"].includes(file)) {
    assert.equal(context.data.questions.length, 13);
    const scenarios = [
      ...[0, 1, 2, 3].map(choice => ({ choices: Array(13).fill(choice), winner: choice, score: 13 })),
      { choices: [0,0,0,0,0,0,1,1,1,1,1,1,2], winner: 1, score: 6 },
    ];
    for (const scenario of scenarios) {
      click("restart");
      click("start");
      scenario.choices.forEach(choice => roles.get("answers").children[choice].handlers.click());
      const result = events.filter(event => event.name === "test_complete").at(-1).extra;
      assert.equal(result.result_stat, context.data.stats[scenario.winner].id);
      assert.equal(result.result_score, scenario.score);
      assert.equal(result.question_count, 13);
    }
  }
  if (file === "compatible-partner-data.js") {
    const f = "friend", a = "affectionate", i = "independent", d = "direct";
    const mappings = [[f,a,i,d], [a,i,f,d], [d,f,a,i], [a,d,f,i], [i,a,f,d], [d,i,f,a], [f,a,i,d], [i,a,f,d], [i,f,a,d], [d,f,a,i], [i,f,a,d], [i,a,f,d]];
    assert.equal(context.data.questions.length, 12);
    context.data.questions.forEach((question, index) => {
      assert.equal(JSON.stringify(question.answers.map(answer => answer.stat)), JSON.stringify(mappings[index]));
    });
    const selections = [
      ...[f, a, i, d].map(stat => ({ stats: Array(12).fill(stat), winner: stat, score: 12 })),
      { stats: [f,a,i,d,f,a,i,d,f,a,i,d], winner: d, score: 3 },
    ];
    for (const selection of selections) {
      click("restart");
      click("start");
      selection.stats.forEach((stat, index) => roles.get("answers").children[mappings[index].indexOf(stat)].handlers.click());
      const result = events.filter(event => event.name === "test_complete").at(-1).extra;
      assert.equal(result.result_stat, selection.winner);
      assert.equal(result.result_score, selection.score);
    }
  }
  if (["falling-in-love-data.js", "breakup-data.js"].includes(file)) {
    assert.equal(context.data.questions.length, 12);
    const statIds = context.data.stats.map(stat => stat.id);
    const scenarios = [
      { choices: Array(12).fill(0), winner: statIds[0] },
      { choices: Array(12).fill(1), winner: statIds[1] },
      { choices: Array(12).fill(2), winner: statIds[2] },
      { choices: Array(12).fill(3), winner: statIds[3] },
      { choices: [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3], winner: statIds[3] },
      // The final answer is not tied for first; use the latest tied answer.
      { choices: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 3], winner: statIds[1] },
    ];
    for (const scenario of scenarios) {
      click("restart");
      click("start");
      // Revising an answer must replace it rather than add another point.
      roles.get("answers").children[3].handlers.click();
      click("back");
      for (const choice of scenario.choices) roles.get("answers").children[choice].handlers.click();
      const result = events.filter(event => event.name === "test_complete").at(-1).extra;
      assert.equal(result.result_stat, scenario.winner);
      assert.equal(roles.get("result-type").textContent, context.data.stats.find(stat => stat.id === scenario.winner).title);
      assert.equal(result.question_count, 12);
      assert.equal(result.result_score, Math.max(...[0, 1, 2, 3].map(choice => scenario.choices.filter(item => item === choice).length)));
    }
  }
}

const shareButton = node();
const shareEvents = [];
let shares = 0;
const shareContext = vm.createContext({
  window: { Kakao: true },
  Kakao: { isInitialized: () => true, Share: { sendDefault: () => { shares++; } } },
  location: { protocol: "https:" }, URL, console,
  testData: { id: 1, title: "Test", description: "Subtitle", category: "Fun", url: "test.html" },
  trackTestEvent: (...args) => shareEvents.push(args),
  document: { querySelector: selector => selector === "#kakao-share-button" ? shareButton : node() },
});
vm.runInContext(fs.readFileSync("script.js", "utf8").split("// The complete category list")[0], shareContext);
shareButton.handlers.click();
assert.equal(shares, 1);
assert.equal(shareEvents[0][0], "test_share");
assert.equal(shareEvents[0][2].method, "kakao");

const pages = fs.readdirSync(".").filter(file => file.endsWith(".html"));
for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  assert.equal((html.match(/src="\/?analytics.js"/g) || []).length, 1);
  assert.ok(html.search(/src="\/?analytics.js"/) < html.indexOf("</head>"));
}
console.log(`PASS: GA4 configuration, ${pages.length} pages, ${dataFiles.length} test flows, restart and share events`);
