"use strict";

(() => {
  const selectedId = new URLSearchParams(location.search).get("id");
  const test = TEST_CATALOG.find(item => item.slug === selectedId || String(item.id) === selectedId);
  const meta = (attribute, name, value) => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, name);
      document.head.append(element);
    }
    element.setAttribute("content", value);
  };
  window.markTestSeoError = () => {
    meta("name", "robots", "noindex, follow");
    document.querySelector('link[rel="canonical"]')?.remove();
    document.querySelector("#test-webpage-schema")?.remove();
  };
  if (!test) {
    document.title = "테스트를 찾을 수 없어요 | 오늘의 초이스";
    window.markTestSeoError();
    return;
  }

  const url = new URL(test.url, "https://todayschoice.kr/").href;
  const description = `${test.title} ${TEST_SEO_DESCRIPTIONS[test.slug] || test.description}`;
  document.title = `${test.title} | 오늘의 초이스 심리테스트`;
  meta("name", "description", description);
  meta("name", "robots", "index, follow");
  meta("property", "og:title", test.title);
  meta("property", "og:description", description);
  meta("property", "og:url", url);
  meta("name", "twitter:title", test.title);
  meta("name", "twitter:description", description);

  // The shared HTML cannot carry a fixed canonical: each valid ID has its own URL.
  const canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
  canonical.setAttribute("rel", "canonical");
  canonical.setAttribute("href", url);
  document.head.append(canonical);
  const schema = document.querySelector("#test-webpage-schema") || document.createElement("script");
  schema.id = "test-webpage-schema";
  schema.type = "application/ld+json";
  schema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: test.title,
    description,
    url,
    inLanguage: "ko",
    isPartOf: { "@type": "WebSite", name: "오늘의 초이스", url: "https://todayschoice.kr/" },
  });
  document.head.append(schema);
})();
