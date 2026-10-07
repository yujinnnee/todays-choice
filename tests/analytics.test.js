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
  if (file === "mental-recovery-data.js") {
    const scores = [[3,2,4,1], [4,2,3,1], [2,4,1,3], [4,1,3,2], [2,4,3,1], [4,1,3,2], [4,2,3,1], [4,1,3,2], [4,3,2,1], [4,3,2,1], [4,3,1,2], [4,2,3,1], [4,3,2,1], [4,3,1,2], [4,3,2,1]];
    assert.equal(context.data.category, "성격");
    assert.equal(context.data.questions.length, 15);
    context.data.questions.forEach((question, index) => {
      assert.equal(JSON.stringify(question.answers.map(answer => answer.score)), JSON.stringify(scores[index]));
    });
    for (let total = 15; total <= 60; total++) {
      click("restart");
      click("start");
      let remaining = total - 15;
      for (let index = 0; index < 15; index++) {
        const extra = Math.min(3, remaining);
        remaining -= extra;
        roles.get("answers").children[scores[index].indexOf(1 + extra)].handlers.click();
      }
      const result = events.filter(event => event.name === "test_complete").at(-1).extra;
      const expected = total >= 51 ? 0 : total >= 39 ? 1 : total >= 27 ? 2 : 3;
      assert.equal(result.result_score, total);
      assert.equal(result.max_score, 60);
      assert.equal(result.result_title, context.data.results[expected].title);
      assert.equal(result.question_count, 15);
    }
  }
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
  if (["year-off-data.js", "overseas-move-data.js"].includes(file)) {
    const isMove = file === "overseas-move-data.js";
    const types = isMove ? ["adventure", "practical", "relationships", "stability", "exploration"] : ["travel", "growth", "rest", "connection", "adventure"];
    assert.equal(context.data.category, "재미");
    assert.equal(context.data.questions.length, 15);
    const orders = new Set();
    context.data.questions.forEach(question => {
      assert.equal(question.answers.length, 5);
      const stats = question.answers.map(answer => answer.stat);
      assert.equal(JSON.stringify([...stats].sort()), JSON.stringify([...types].sort()));
      orders.add(stats.join(","));
      question.answers.forEach(answer => assert.equal(answer.score, 1));
    });
    assert.equal(orders.size, 15);
    for (const stat of types) assert.equal(context.data.questions.filter(q => q.answers[0].stat === stat).length, 3);
    if (isMove) {
      assert.equal(context.data.questions[0].answers.find(answer => answer.stat === "practical").text, "일단 조건부터 자세히 알아본다");
      assert.equal(context.data.questions[0].answers.find(answer => answer.stat === "adventure").text, "설레면서 바로 가고 싶다는 생각부터 든다");
      assert.equal(context.data.questions[1].answers.find(answer => answer.stat === "exploration").text, "직접 가서 분위기를 먼저 경험해보고 싶다");
      assert.equal(context.data.questions[1].answers.find(answer => answer.stat === "stability").text, "익숙하지 않은 곳이라 부담이 커진다");
    } else {
      assert.equal(context.data.questions[1].answers.find(answer => answer.stat === "growth").text, "새로운 운동이나 취미를 제대로 시작할 것 같다");
      assert.equal(context.data.questions[1].answers.find(answer => answer.stat === "rest").text, "늦잠 자고 먹고 싶은 걸 먹으며 푹 쉴 것 같다");
    }
    const scenarios = [
      ...types.map(stat => ({ stats: Array(15).fill(stat), winner: stat, score: 15 })),
      { stats: [...types, ...types, ...types], winner: types[4], score: 3 },
      { stats: [...Array(7).fill(types[0]), ...Array(7).fill(types[1]), types[2]], winner: types[1], score: 7 },
    ];
    for (const scenario of scenarios) {
      click("restart");
      click("start");
      roles.get("answers").children[0].handlers.click();
      click("back");
      scenario.stats.forEach((stat, index) => {
        const choice = context.data.questions[index].answers.findIndex(answer => answer.stat === stat);
        roles.get("answers").children[choice].handlers.click();
      });
      const result = events.filter(event => event.name === "test_complete").at(-1).extra;
      assert.equal(result.result_stat, scenario.winner);
      assert.equal(result.result_score, scenario.score);
      assert.equal(result.question_count, 15);
      assert.equal(result.result_title, context.data.results.find(item => item.stat === scenario.winner).title);
    }
  }
  if (["friend-romance-distance-data.js", "romance-priorities-data.js"].includes(file)) {
    const isPriorities = file === "romance-priorities-data.js";
    const [u,d,h,s,c] = isPriorities ? ["trust", "affection", "communication", "freedom", "future"] : ["understanding", "direct", "hurt", "distance", "cool"];
    const mappings = isPriorities
      ? [[u,h,d,s,c], [c,u,s,h,d], [u,d,c,h,s], [u,s,d,c,h], [u,d,s,h,c], [u,h,d,s,c], [u,d,c,s,h], [h,s,u,c,d], [u,s,d,h,c], [c,u,s,d,h], [h,u,s,d,c], [u,d,h,c,s], [h,c,s,u,d], [u,d,h,s,c], [u,d,h,s,c]]
      : [[u,d,h,s,c], [h,c,s,d,u], [d,c,h,s,u], [h,u,d,s,c], [u,c,s,h,d], [c,u,d,h,s], [s,c,h,d,u], [u,d,h,s,c], [u,h,c,d,s], [s,u,d,c,h], [d,c,h,u,s], [c,d,s,u,h], [d,u,c,s,h], [s,d,h,u,c], [c,h,d,u,s]];
    assert.equal(context.data.category, isPriorities ? "연애·결혼" : "친구·인간관계·사회생활");
    assert.equal(context.data.questions.length, 15);
    context.data.questions.forEach((question, index) => {
      assert.equal(JSON.stringify(question.answers.map(answer => answer.stat)), JSON.stringify(mappings[index]));
      question.answers.forEach(answer => assert.equal(answer.score, 1));
    });
    const scenarios = [
      ...[u,d,h,s,c].map(stat => ({ stats: Array(15).fill(stat), winner: stat, score: 15 })),
      { stats: [u,d,h,s,c,u,d,h,s,c,u,d,h,s,c], winner: c, score: 3 },
      { stats: [...Array(7).fill(u), ...Array(7).fill(d), h], winner: d, score: 7 },
    ];
    for (const scenario of scenarios) {
      click("restart");
      click("start");
      roles.get("answers").children[4].handlers.click();
      click("back");
      scenario.stats.forEach((stat, index) => roles.get("answers").children[mappings[index].indexOf(stat)].handlers.click());
      const result = events.filter(event => event.name === "test_complete").at(-1).extra;
      assert.equal(result.result_stat, scenario.winner);
      assert.equal(result.result_score, scenario.score);
      assert.equal(result.question_count, 15);
      assert.equal(result.result_title, context.data.results.find(item => item.stat === scenario.winner).title);
    }
  }
  if (file === "variety-character-data.js") {
    const c = "center", r = "reaction", b = "brain", a = "chaos", q = "quiet";
    const mappings = [[r,c,q,b,a], [b,r,q,a,c], [b,r,q,a,c], [b,c,a,r,q], [c,r,b,a,q], [b,r,c,q,a], [c,r,a,q,b], [b,a,c,r,q], [c,r,q,b,a], [b,r,c,a,q], [b,r,c,q,a], [c,r,b,a,q], [a,b,r,c,q], [c,r,b,a,q], [c,r,b,a,q]];
    assert.equal(context.data.category, "재미");
    assert.equal(context.data.questions.length, 15);
    context.data.questions.forEach((question, index) => {
      assert.equal(JSON.stringify(question.answers.map(answer => answer.stat)), JSON.stringify(mappings[index]));
      question.answers.forEach(answer => assert.equal(answer.score, 1));
    });
    const scenarios = [
      ...[c,r,b,a,q].map(stat => ({ stats: Array(15).fill(stat), winner: stat, score: 15 })),
      { stats: [c,r,b,a,q,c,r,b,a,q,c,r,b,a,q], winner: q, score: 3 },
      { stats: [c,c,c,c,c,c,c,r,r,r,r,r,r,r,q], winner: r, score: 7 },
    ];
    for (const scenario of scenarios) {
      click("restart");
      click("start");
      scenario.stats.forEach((stat, index) => roles.get("answers").children[mappings[index].indexOf(stat)].handlers.click());
      const result = events.filter(event => event.name === "test_complete").at(-1).extra;
      assert.equal(result.result_stat, scenario.winner);
      assert.equal(result.result_score, scenario.score);
      assert.equal(result.question_count, 15);
      assert.equal(roles.get("result-title").textContent, context.data.results.find(item => item.stat === scenario.winner).title);
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
  if (["animal-personality-data.js", "stress-change-data.js", "romance-behavior-data.js"].includes(file)) {
    if (file === "romance-behavior-data.js") {
      assert.equal(context.data.category, "연애·결혼");
      const types = ["caring", "contact", "together", "thoughtful", "responsive"];
      context.data.questions.forEach(question => {
        assert.equal(JSON.stringify(question.answers.map(answer => answer.stat)), JSON.stringify(types));
        question.answers.forEach(answer => assert.equal(answer.score, 1));
      });
    }
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
  if (["mood-swings-data.js", "long-term-love-data.js"].includes(file)) {
    const isLongTerm = file === "long-term-love-data.js";
    assert.equal(context.data.category, isLongTerm ? "연애·결혼" : "성격");
    assert.equal(context.data.questions.length, 15);
    const orders = new Set();
    context.data.questions.forEach(question => {
      const scores = question.answers.map(answer => answer.score);
      assert.equal(JSON.stringify([...scores].sort()), "[1,2,3,4]");
      orders.add(scores.join(","));
    });
    assert.equal(orders.size, 15);
    const lowest = ["금방 다시 평소 기분으로 돌아온다", "별일 아니라고 생각하고 넘긴다", "기분은 좋지만 평소랑 크게 다르지 않다", "새로운 계획을 세우면 그만이라고 생각한다", "거의 눈치채지 못한다", "아침부터 저녁까지 크게 비슷하다", "아쉽지만 바로 다른 일을 찾는다", "고맙긴 하지만 기분 변화는 크지 않다", "필요한 부분만 듣고 넘긴다", "평소와 크게 다르지 않다", "비슷한 기분이 계속 이어진다", "감정과 할 일을 분리해서 하는 편이다", "바로 이야기하거나 혼자 금방 정리한다", "주변에서 크게 차이를 느끼기 어렵다", "기분은 변해도 금방 중심을 찾는 편이다"];
    if (!isLongTerm) {
      context.data.questions.forEach((question, index) => {
        assert.equal(question.answers.find(answer => answer.score === 1).text, lowest[index]);
      });
    } else {
      const highest = ["편안해지는 과정도 연애의 일부라고 생각한다", "익숙한 데이트도 편하고 좋다", "나와 맞춰갈 수 있는 부분인지 먼저 본다", "감정이 가라앉은 뒤 해결할 수 있는 문제인지 생각한다", "익숙하고 편한 사이가 되는 것도 좋을 것 같다", "서로 다를 수 있다는 걸 인정하는 편이다", "상황이 나아질 때까지 서로의 생활을 존중한다", "관계에도 그런 시기가 있다고 생각하고 방법을 찾아본다", "시간이 지나도 서로 존중하는 것", "내가 감당할 수 있는 범위에서 옆을 지킨다", "서로 각자의 시간이 있는 게 오히려 오래가는 데 좋다고 생각한다", "대화를 통해 맞출 수 있는 부분부터 찾아본다", "재미보다 편안함과 신뢰도 중요한 것 같다", "둘이 해결할 방법을 먼저 찾는다", "오랜 시간이 지나도 서로 가장 편한 사람인 관계"];
      context.data.questions.forEach((question, index) => {
        assert.equal(question.answers.find(answer => answer.score === 4).text, highest[index]);
      });
      assert.equal(context.data.questions[2].answers.find(answer => answer.text === "웬만한 단점은 서로 있는 거라고 생각한다").score, 2);
      assert.equal(context.data.questions[0].answers.find(answer => answer.text === "함께하는 방식에 변화를 주면 된다고 생각한다").score, 3);
    }
    for (let total = 15; total <= 60; total++) {
      click("restart");
      click("start");
      let remaining = total - 15;
      for (let index = 0; index < 15; index++) {
        const extra = Math.min(3, remaining);
        remaining -= extra;
        const choice = context.data.questions[index].answers.findIndex(answer => answer.score === 1 + extra);
        roles.get("answers").children[choice].handlers.click();
      }
      const result = events.filter(event => event.name === "test_complete").at(-1).extra;
      const percentage = Math.round((total - 15) / 45 * 100);
      const expected = percentage <= 24 ? 0 : percentage <= 49 ? 1 : percentage <= 74 ? 2 : 3;
      assert.equal(result.result_score, total);
      assert.equal(result.max_score, 60);
      assert.equal(result.result_percentage, percentage);
      assert.equal(result.result_title, context.data.results[expected].title);
      assert.equal(roles.get("result-metric").textContent, `${isLongTerm ? "장기연애 체질" : "감정 기복"} ${percentage}%`);
      assert.equal(result.question_count, 15);
    }
  }
  if (file === "sociability-data.js") {
    const scores = [[3,4,1,2], [4,3,2,1], [2,4,1,3], [4,3,2,1], [4,3,2,1], [1,2,4,3], [1,2,3,4], [2,4,3,1], [4,3,1,2], [4,3,2,1], [1,2,3,4], [3,4,1,2], [4,3,2,1], [3,4,2,1], [4,3,2,1]];
    assert.equal(context.data.category, "친구·인간관계·사회생활");
    assert.equal(context.data.questions.length, 15);
    context.data.questions.forEach((question, index) => {
      assert.equal(JSON.stringify(question.answers.map(answer => answer.score)), JSON.stringify(scores[index]));
    });
    for (let total = 15; total <= 60; total++) {
      click("restart");
      click("start");
      let remaining = total - 15;
      for (let index = 0; index < 15; index++) {
        const extra = Math.min(3, remaining);
        remaining -= extra;
        roles.get("answers").children[scores[index].indexOf(1 + extra)].handlers.click();
      }
      const result = events.filter(event => event.name === "test_complete").at(-1).extra;
      const percentage = Math.round((total - 15) / 45 * 100);
      const expected = percentage <= 24 ? 0 : percentage <= 49 ? 1 : percentage <= 74 ? 2 : 3;
      assert.equal(result.result_score, total);
      assert.equal(result.max_score, 60);
      assert.equal(result.result_percentage, percentage);
      assert.equal(result.result_title, context.data.results[expected].title);
      assert.equal(roles.get("result-metric").textContent, `사회성 ${percentage}%`);
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
