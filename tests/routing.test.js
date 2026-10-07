const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const catalogContext = vm.createContext({});
vm.runInContext(fs.readFileSync("test-catalog.js", "utf8") + "\nthis.catalog = TEST_CATALOG;", catalogContext);
const catalog = catalogContext.catalog;
assert.equal(new Set(catalog.map(test => test.id)).size, catalog.length);
assert.equal(new Set(catalog.map(test => test.slug)).size, catalog.length);
assert.equal(fs.readdirSync(".").filter(file => file.endsWith("-test.html")).length, 0);

async function checkLoad(id, broken = false) {
  const nodes = new Map();
  const getNode = selector => {
    if (!nodes.has(selector)) nodes.set(selector, { hidden: false, textContent: "" });
    return nodes.get(selector);
  };
  const root = { querySelector: getNode };
  let selected;
  let imports = 0;
  const context = vm.createContext({
    TEST_CATALOG: catalog, URLSearchParams, location: { search: `?id=${encodeURIComponent(id)}` },
    window: {}, document: { querySelector: () => root }, console: { error() {} },
    createTestRunner: (element, data) => { assert.equal(element, root); selected = data; },
    importTest: async path => {
      imports++;
      if (broken) throw new Error("Network failure");
      const source = fs.readFileSync(path, "utf8").replace("export default testData;", "");
      const dataContext = vm.createContext({});
      vm.runInContext(source + "\nthis.data = testData;", dataContext);
      return { default: dataContext.data };
    },
  });
  const source = fs.readFileSync("test-loader.js", "utf8").replace("await import(", "await importTest(");
  await vm.runInContext(source, context);
  return { selected, imports, context, nodes };
}

(async () => {
  for (const test of catalog) {
    const loaded = await checkLoad(test.slug);
    assert.equal(loaded.selected.id, test.id);
    assert.equal(loaded.selected.title, test.title);
    assert.equal(loaded.selected.description, test.description);
    assert.equal(loaded.selected.category, test.category);
    assert.equal(loaded.selected.url, test.url);
    assert.equal(loaded.context.document.title, `${test.title} | Today's Choice`);
    assert.equal(loaded.nodes.get('[data-role="loading"]').hidden, true);
    assert.equal((await checkLoad(String(test.id))).selected.id, test.id);
    let redirected;
    const legacyContext = vm.createContext({
      TEST_CATALOG: catalog, URL, URLSearchParams,
      location: {
        pathname: `/${test.slug}-test.html`, origin: "https://todayschoice.kr",
        search: "?utm_source=instagram&utm_medium=social", hash: "#main",
        replace: url => { redirected = new URL(url); },
      },
    });
    vm.runInContext(fs.readFileSync("legacy-redirect.js", "utf8"), legacyContext);
    assert.equal(redirected.searchParams.get("id"), test.slug);
    assert.equal(redirected.searchParams.get("utm_source"), "instagram");
    assert.equal(redirected.hash, "#main");
    const scripts = [];
    const analyticsContext = vm.createContext({
      TEST_CATALOG: catalog, URLSearchParams, window: {},
      location: { pathname: "/test.html", search: `?id=${test.slug}` },
      document: { createElement: () => ({}), head: { append: script => scripts.push(script) } },
    });
    vm.runInContext(fs.readFileSync("analytics.js", "utf8"), analyticsContext);
    const configs = analyticsContext.window.dataLayer.filter(event => event[0] === "config");
    assert.equal(configs.length, 1);
    assert.equal(configs[0][2].page_title, `${test.title} | Today's Choice`);
  }
  for (const id of ["", "missing", "../script", "https://example.com/test"]) {
    const loaded = await checkLoad(id);
    assert.equal(loaded.imports, 0);
    assert.equal(loaded.nodes.get('[data-role="load-error"]').hidden, false);
  }
  const failed = await checkLoad(catalog[0].slug, true);
  assert.equal(failed.selected, undefined);
  assert.equal(failed.nodes.get('[data-role="load-error"]').hidden, false);
  const page = fs.readFileSync("test.html", "utf8");
  assert.ok(page.includes('type="module" src="test-loader.js"'));
  assert.equal((page.match(/googlesyndication.com/g) || []).length, 1);
  assert.ok(page.includes("assets/share-cover-v3.png"));
  console.log(`PASS: ${catalog.length} slug/numeric routes, legacy redirects, page titles, unknown IDs and load failures`);
})().catch(error => { console.error(error); process.exitCode = 1; });
