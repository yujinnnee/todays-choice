// Run after adding a test: node scripts/build-seo.js
// GitHub Pages serves these checked-in files directly; no runtime framework is used.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root, "data/content/test-catalog.js"), "utf8") + "\nthis.catalog = TEST_CATALOG;", context);
const catalog = context.catalog;
vm.runInContext(fs.readFileSync(path.join(root, "data/content/thinking-tests.js"), "utf8") + "\nthis.thinking = THINKING_TESTS;", context);
const thinking = context.thinking;
const thinkingIds = new Set();
for (const test of thinking) {
  if (!/^[a-z0-9-]+$/.test(test.id) || thinkingIds.has(test.id)) throw Error('Invalid or duplicate thinking ID');
  thinkingIds.add(test.id);
  if (!["수리", "논리", "추리", "공간지각", "규칙찾기"].includes(test.category)) throw Error('Unknown thinking category');
  if (!Number.isInteger(test.difficulty) || test.difficulty < 1 || test.difficulty > 5) throw Error('Invalid difficulty');
  if (![test.title, test.question, test.explanation].every(value => typeof value === 'string' && value.trim())) throw Error('Incomplete thinking problem');
  if (!Array.isArray(test.choices) || test.choices.length !== 4 || new Set(test.choices).size !== 4 || !test.choices.every(value => typeof value === 'string' && value.trim())) throw Error('Invalid choices');
  if (!Number.isInteger(test.answer) || test.answer < 0 || test.answer >= test.choices.length) throw Error('Invalid answer index');
  if (test.image && (!fs.existsSync(path.join(root, test.image)) || !test.imageAlt)) throw Error('Missing problem image or imageAlt');
}
const escape = value => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const categories = { "연애/결혼": "love", "연애·결혼": "love", "성격": "personality", "재미": "fun", "친구·인간관계·사회생활": "relationship" };
const seen = new Set();
const cards = catalog.map(test => {
  const category = categories[test.category];
  if (!category || seen.has(test.slug)) throw Error(`Invalid catalog entry: ${test.slug}`);
  seen.add(test.slug);
  if (!fs.existsSync(path.join(root, `data/tests/${test.slug}-data.js`))) throw Error(`Missing test data: ${test.slug}`);
  if (test.url !== `test.html?id=${test.slug}`) throw Error(`Unexpected test URL: ${test.url}`);
  return `        <a class="test-card" href="${escape(test.url)}" data-test="${test.id}" data-category="${category}">
          <span class="eyebrow">${escape(test.category)}</span>
          <h3>${escape(test.title)}</h3>
          <p>${escape(test.description)}</p>
          <div class="card-bottom"><span class="circle-arrow"><svg class="icon" aria-hidden="true"><use href="#icon-arrow"/></svg></span></div>
        </a>`;
}).join("\n");
const indexPath = path.join(root, "psychology.html");
const index = fs.readFileSync(indexPath, "utf8");
const grid = /<div class="card-grid" id="category-grid">[\s\S]*?<\/div>(?=\s*<p class="category-empty")/;
if (!grid.test(index)) throw Error("Psychology test grid not found");
fs.writeFileSync(indexPath, index.replace(grid, `<div class="card-grid" id="category-grid">\n${cards}\n      </div>`));
const informationPages = ["about.html", "privacy.html", "terms.html", "contact.html", "disclaimer.html"];
for (const page of informationPages) {
  if (!fs.existsSync(path.join(root, page))) throw Error(`Missing information page: ${page}`);
}
const urls = [
  "https://todayschoice.kr/",
  ...["psychology.html", "thinking.html"].map(page => new URL(page, "https://todayschoice.kr/").href),
  ...informationPages.map(page => new URL(page, "https://todayschoice.kr/").href),
  ...thinking.map(test => new URL(`thinking-detail.html?id=${encodeURIComponent(test.id)}`, "https://todayschoice.kr/").href),
  ...catalog.map(test => new URL(test.url, "https://todayschoice.kr/").href),
];
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(url => `  <url>\n    <loc>${escape(url)}</loc>\n  </url>`).join("\n") + "\n</urlset>\n";
const sitemapPath = path.join(root, "sitemap.xml");
if (!fs.existsSync(sitemapPath) || fs.readFileSync(sitemapPath, "utf8").replace(/\r\n/g, "\n") !== sitemap) fs.writeFileSync(sitemapPath, sitemap);
console.log(`Updated ${catalog.length} static test links; sitemap contains ${urls.length} URLs.`);
