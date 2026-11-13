// Run from the repository root: node tests/content.test.js
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const context = {};
vm.runInNewContext(["data/content/test-catalog.js", "data/content/test-guides.js", "data/content/test-introductions.js"]
  .map(file => fs.readFileSync(file, "utf8")).join("\n") +
  ";this.catalog=TEST_CATALOG;this.guides=TEST_GUIDES;this.related=TEST_RELATED;this.introductions=TEST_INTRODUCTIONS;", context);
const { catalog, guides, related, introductions } = context;
const slugs = catalog.map(test => test.slug);
assert.deepEqual(Object.keys(guides).sort(), [...slugs].sort());
assert.deepEqual(Object.keys(related).sort(), [...slugs].sort());
const normalize = text => text.replace(/[\s\p{P}\p{S}]/gu, "");
const paragraphs = new Set(), sentences = new Set(), headings = new Set();
const passages = [];
let shortest = Infinity, longest = 0;
for (const test of catalog) {
  const items = guides[test.slug];
  assert.equal(items.length, 3, test.slug);
  const length = items.reduce((sum, item) => sum + item[1].length, 0);
  shortest = Math.min(shortest, length); longest = Math.max(longest, length);
  assert.ok(length >= 300 && length <= 600, `${test.slug}: ${length} characters`);
  const dataContext = {};
  vm.runInNewContext(fs.readFileSync(`data/tests/${test.slug}-data.js`, "utf8").replace("export default testData;", "") + ";this.data=testData;", dataContext);
  const existing = dataContext.data.results.map(result => normalize(result.description));
  for (const [heading, paragraph] of items) {
    assert.ok(heading && paragraph);
    assert.ok(!headings.has(heading), `Repeated heading: ${heading}`);
    headings.add(heading);
    const normalized = normalize(paragraph);
    assert.ok(!paragraphs.has(normalized), `Repeated paragraph: ${test.slug}`);
    paragraphs.add(normalized);
    assert.ok(!existing.some(description => description.includes(normalized)), `Copied result: ${test.slug}`);
    assert.ok(!introductions[test.slug].some(intro => normalize(intro).includes(normalized)), `Copied introduction: ${test.slug}`);
    const parts = paragraph.split(/(?<=[.!?])\s+/).filter(Boolean);
    assert.ok(parts.length >= 2 && parts.length <= 4, `${test.slug}: sentence count`);
    for (const sentence of parts) {
      const key = normalize(sentence);
      assert.ok(!sentences.has(key), `Repeated sentence: ${sentence}`);
      assert.ok(!existing.some(description => description.includes(key)), `Reused result sentence: ${test.slug}: ${sentence}`);
      sentences.add(key);
    }
    assert.doesNotMatch(paragraph, /심리학적으로|연구 결과에 따르면|이 유형은 실제로|당신의 심리 상태|성격 장애|애착 장애|정신 건강 진단|자신을 이해하는 데 도움이 될 수 있습니다|사람마다 다를 수 있습니다|상황에 따라 달라질 수 있습니다|좋은 관계를 만들어갈 수 있습니다/);
    passages.push({ slug: test.slug, text: normalized });
  }
  assert.equal(related[test.slug].length, 3);
  assert.equal(new Set(related[test.slug]).size, 3);
  assert.ok(related[test.slug].every(slug => slug !== test.slug && slugs.includes(slug)), `Invalid recommendation: ${test.slug}`);
}
// Character shingles also catch near copies with slightly different word endings.
function shingles(text) {
  return new Set(Array.from({ length: Math.max(0, text.length - 4) }, (_, i) => text.slice(i, i + 5)));
}
let closest = { similarity: 0 };
const sets = passages.map(passage => shingles(passage.text));
for (let i = 0; i < passages.length; i++) {
  for (let j = i + 1; j < passages.length; j++) {
    if (passages[i].slug === passages[j].slug) continue;
    const intersection = [...sets[i]].filter(part => sets[j].has(part)).length;
    const similarity = intersection / (sets[i].size + sets[j].size - intersection);
    if (similarity > closest.similarity) closest = { similarity, a: passages[i].slug, b: passages[j].slug };
  }
}
assert.ok(closest.similarity < 0.45, `Near duplicate: ${JSON.stringify(closest)}`);
const home = fs.readFileSync("index.html", "utf8");
const curation = home.match(/<section class="container test-curation"[\s\S]*?(?=<section class="container test-section category-section")/)[0];
assert.equal((curation.match(/class="curation-group"/g) || []).length, 3);
const links = [...curation.matchAll(/<a href="([^"]+)">([^<]+)<\/a>/g)];
assert.equal(links.length, 12);
for (const [, href, title] of links) assert.ok(catalog.some(test => test.url === href && test.title === title));
assert.equal(new Set(links.map(link => link[1])).size, 12);
console.log(`PASS: ${catalog.length} guides, ${paragraphs.size} unique paragraphs, ${sentences.size} unique sentences, ${shortest}–${longest} characters per guide`);
console.log(`PASS: ${catalog.length * 3} curated recommendations; 3 home groups, 12 existing links`);
console.log(`Highest cross-test paragraph similarity (5-character Jaccard): ${(closest.similarity * 100).toFixed(1)}% (${closest.a}, ${closest.b})`);
