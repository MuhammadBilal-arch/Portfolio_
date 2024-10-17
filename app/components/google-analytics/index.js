// app/components/GoogleAnalyticsWrapper.js
"use client";  // Make only this component a client-side component

import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function GoogleAnalyticsWrapper() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <>
      {GA_MEASUREMENT_ID && <GoogleAnalytics trackPageViews gaMeasurementId={GA_MEASUREMENT_ID} />}
    </>
  );
}
