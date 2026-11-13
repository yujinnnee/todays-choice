"use strict";

// GitHub Pages serves 404.html for old individual test URLs.
const legacyMatch = location.pathname.match(/^\/([a-z0-9-]+)-test\.html$/);
const legacyTest = legacyMatch && TEST_CATALOG.find((test) => test.slug === legacyMatch[1]);
if (legacyTest) {
  const next = new URL(legacyTest.url, location.origin);
  const previousParams = new URLSearchParams(location.search);
  previousParams.delete("id");
  previousParams.forEach((value, key) => next.searchParams.append(key, value));
  next.hash = location.hash;
  location.replace(next.href);
}
