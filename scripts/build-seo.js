// Run after adding a test: node scripts/build-seo.js
// GitHub Pages serves these checked-in files directly; no runtime framework is used.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root, "test-catalog.js"), "utf8") + "\nthis.catalog = TEST_CATALOG;", context);
const catalog = context.catalog;
const escape = value => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const categories = { "연애/결혼": "love", "연애·결혼": "love", "성격": "personality", "재미": "fun", "친구·인간관계·사회생활": "relationship" };
const icons = { love: "heart", personality: "leaf", fun: "star", relationship: "people" };
const seen = new Set();
const cards = catalog.map(test => {
  const category = categories[test.category];
  if (!category || seen.has(test.slug)) throw Error(`Invalid catalog entry: ${test.slug}`);
  seen.add(test.slug);
  if (!fs.existsSync(path.join(root, `${test.slug}-data.js`))) throw Error(`Missing test data: ${test.slug}`);
  if (test.url !== `test.html?id=${test.slug}`) throw Error(`Unexpected test URL: ${test.url}`);
  return `        <a class="test-card" href="${escape(test.url)}" data-test="${test.id}" data-category="${category}">
          <span class="icon-tile"><svg class="icon" aria-hidden="true"><use href="#icon-${icons[category]}"/></svg></span>
          <h3>${escape(test.title)}</h3>
          <p>${escape(test.description)}</p>
          <div class="card-bottom"><span class="circle-arrow"><svg class="icon" aria-hidden="true"><use href="#icon-arrow"/></svg></span></div>
        </a>`;
}).join("\n");
const indexPath = path.join(root, "index.html");
const index = fs.readFileSync(indexPath, "utf8");
const grid = /<div class="card-grid" id="category-grid">[\s\S]*?<\/div>(?=\s*<p class="category-empty")/;
if (!grid.test(index)) throw Error("Main test grid not found");
fs.writeFileSync(indexPath, index.replace(grid, `<div class="card-grid" id="category-grid">\n${cards}\n      </div>`));
const urls = ["https://todayschoice.kr/", ...catalog.map(test => new URL(test.url, "https://todayschoice.kr/").href)];
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(url => `  <url>\n    <loc>${escape(url)}</loc>\n  </url>`).join("\n") + "\n</urlset>\n";
const sitemapPath = path.join(root, "sitemap.xml");
if (!fs.existsSync(sitemapPath) || fs.readFileSync(sitemapPath, "utf8").replace(/\r\n/g, "\n") !== sitemap) fs.writeFileSync(sitemapPath, sitemap);
console.log(`Updated ${catalog.length} static test links; sitemap contains ${urls.length} URLs.`);
