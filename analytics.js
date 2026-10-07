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
  window.gtag("config", GA4_MEASUREMENT_ID);
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
