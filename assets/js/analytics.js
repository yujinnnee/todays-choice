"use strict";

// Replace this value with the measurement ID of your GA4 web data stream.
const GA4_MEASUREMENT_ID = "G-JGQJWYPHNL";

window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
window.gtag("js", new Date());

// Keep the placeholder inactive until a real measurement ID is supplied.
if (GA4_MEASUREMENT_ID !== "G-XXXXXXXXXX" && /^G-[A-Z0-9]+$/.test(GA4_MEASUREMENT_ID)) {
  const googleTag = document.createElement("script");
  googleTag.async = true;
  googleTag.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.append(googleTag);
  const selectedId = new URLSearchParams(location.search).get("id");
  const currentTest = typeof TEST_CATALOG !== "undefined" && /\/test\.html$/.test(location.pathname)
    ? TEST_CATALOG.find((test) => test.slug === selectedId || String(test.id) === selectedId)
    : null;
  window.gtag("config", GA4_MEASUREMENT_ID, currentTest
    ? { page_title: `${currentTest.title} | Today's Choice` }
    : {});
}

function trackTestEvent(eventName, data, extra = {}) {
  try {
    window.gtag("event", eventName, {
      test_id: String(data.id),
      test_title: data.title,
      test_category: data.category,
      ...extra,
    });
  } catch (error) {
    // Analytics must never interrupt the test or sharing controls.
  }
}
