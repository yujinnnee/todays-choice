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
  const context = vm.createContext({ window: {}, document: { head, createElement: node } });
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
  vm.runInContext(fs.readFileSync(file, "utf8") + '\nthis.data = testData;', context);
  vm.runInContext(runner, context);
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
  assert.equal((html.match(/src="analytics.js"/g) || []).length, 1);
  assert.ok(html.indexOf('src="analytics.js"') < html.indexOf("</head>"));
}
console.log(`PASS: GA4 configuration, ${pages.length} pages, ${dataFiles.length} test flows, restart and share events`);
