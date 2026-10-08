const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const catalogContext = vm.createContext({});
vm.runInContext(fs.readFileSync("test-catalog.js", "utf8") + "\nthis.catalog = TEST_CATALOG;", catalogContext);
const catalog = catalogContext.catalog;
const source = fs.readFileSync("test-seo.js", "utf8");
const descriptions = fs.readFileSync("seo-descriptions.js", "utf8");

function render(search) {
  const elements = [];
  const document = {
    title: "",
    head: { append(element) { if (!elements.includes(element)) elements.push(element); } },
    createElement(tag) {
      return {
        tag, attributes: {},
        setAttribute(name, value) { this.attributes[name] = value; },
        remove() { const index = elements.indexOf(this); if (index !== -1) elements.splice(index, 1); },
      };
    },
    querySelector(selector) {
      if (selector.startsWith("#")) return elements.find(element => element.id === selector.slice(1));
      const match = selector.match(/^(\w+)\[(\w+)="([^"]+)"\]$/);
      return elements.find(element => element.tag === match[1] && element.attributes[match[2]] === match[3]);
    },
  };
  const context = vm.createContext({ TEST_CATALOG: catalog, URL, URLSearchParams, location: { search }, window: {}, document });
  vm.runInContext(descriptions, context);
  vm.runInContext(source, context);
  return { context, document, elements };
}
const titleSet = new Set(), descriptionSet = new Set();
for (const test of catalog) {
  for (const id of [test.slug, String(test.id)]) {
    const { context, document, elements } = render(`?id=${id}&utm_source=instagram#result`);
    const canonical = `https://todayschoice.kr/${test.url}`;
    const description = document.querySelector('meta[name="description"]').attributes.content;
    assert.equal(document.title, `${test.title} | 오늘의 초이스 심리테스트`);
    assert.ok(description.startsWith(test.title + " "));
    assert.ok(description.length > test.title.length + 25);
    assert.equal(document.querySelector('meta[name="robots"]').attributes.content, "index, follow");
    assert.equal(document.querySelector('link[rel="canonical"]').attributes.href, canonical);
    assert.equal(document.querySelector('meta[property="og:title"]').attributes.content, test.title);
    assert.equal(document.querySelector('meta[property="og:description"]').attributes.content, description);
    assert.equal(document.querySelector('meta[property="og:url"]').attributes.content, canonical);
    assert.equal(document.querySelector('meta[name="twitter:title"]').attributes.content, test.title);
    const schema = JSON.parse(document.querySelector("#test-webpage-schema").textContent);
    assert.equal(schema["@type"], "WebPage");
    assert.equal(schema.name, test.title);
    assert.equal(schema.url, canonical);
    titleSet.add(document.title); descriptionSet.add(description);
    vm.runInContext(source, context);
    assert.equal(elements.filter(element => element.attributes.rel === "canonical").length, 1);
    assert.equal(elements.filter(element => element.id === "test-webpage-schema").length, 1);
    context.window.markTestSeoError();
    assert.equal(document.querySelector('meta[name="robots"]').attributes.content, "noindex, follow");
    assert.equal(document.querySelector('link[rel="canonical"]'), undefined);
    assert.equal(document.querySelector("#test-webpage-schema"), undefined);
  }
}
assert.equal(titleSet.size, catalog.length);
assert.equal(descriptionSet.size, catalog.length);
for (const id of ["", "unknown", "../script", "https://example.com/"]) {
  const { document } = render(`?id=${encodeURIComponent(id)}`);
  assert.equal(document.querySelector('meta[name="robots"]').attributes.content, "noindex, follow");
  assert.equal(document.querySelector('link[rel="canonical"]'), undefined);
}
const main = fs.readFileSync("index.html", "utf8");
assert.equal((main.match(/<h1\b/g) || []).length, 1);
for (const name of ["description", "keywords", "robots", "twitter:card", "twitter:title", "twitter:description"]) {
  assert.equal((main.match(new RegExp(`<meta name="${name}"`, "g")) || []).length, 1);
}
assert.ok(main.includes('<title>오늘의 초이스 | 무료 심리테스트, 연애·성격 테스트</title>'));
assert.equal((main.match(/rel="canonical"/g) || []).length, 1);
assert.ok(main.includes('rel="canonical" href="https://todayschoice.kr/"'));
const siteSchema = JSON.parse(main.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.equal(siteSchema["@type"], "WebSite");
assert.equal(siteSchema.alternateName, "Today's Choice");
const grid = main.match(/<div class="card-grid" id="category-grid">([\s\S]*?)<\/div>(?=\s*<p class="category-empty")/)[1];
assert.equal((grid.match(/<a class="test-card"/g) || []).length, catalog.length);
for (const test of catalog) {
  assert.ok(grid.includes(`href="${test.url}"`));
  assert.ok(grid.includes(`<h3>${test.title}</h3>`));
}
const sitemap = fs.readFileSync("sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.deepEqual(urls, ["https://todayschoice.kr/", ...catalog.map(test => `https://todayschoice.kr/${test.url}`)]);
assert.ok(!urls.some(url => /404|naver|-test\.html|localhost/.test(url)));
assert.equal(fs.readFileSync("robots.txt", "utf8").replace(/\r\n/g, "\n"), "User-agent: *\nAllow: /\n\nSitemap: https://todayschoice.kr/sitemap.xml\n");
const detail = fs.readFileSync("test.html", "utf8");
assert.equal((detail.match(/<h1\b/g) || []).length, 1);
assert.ok(!/<meta name="robots" content="noindex/.test(detail));
assert.ok(!/rel="canonical"/.test(detail)); // Query-specific canonical is added once by test-seo.js.
assert.ok(fs.readFileSync("404.html", "utf8").includes('<meta name="robots" content="noindex, follow">'));
console.log(`PASS: ${catalog.length} unique test metadata sets, aliases, error exclusion, static links, schemas, and ${urls.length} sitemap URLs`);
