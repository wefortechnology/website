/**
 * Google Analytics 4 event tracking.
 *
 * GA4 is loaded in src/app/layout.tsx via <GoogleAnalytics> when NEXT_PUBLIC_GA_ID
 * is set, and Google Tag Manager via <GoogleTagManager> when NEXT_PUBLIC_GTM_ID is set.
 * Events go to gtag (GA4 direct) when it exists; otherwise they are pushed to the
 * GTM dataLayer as { event: name, ...params } so GTM "Custom Event" triggers can
 * forward them. If neither is loaded (e.g. local dev) this does nothing.
 *
 * Events used on the site (all appear under Reports → Engagement → Events in GA4):
 *   generate_lead   – enquiry form submitted successfully
 *   whatsapp_click  – any WhatsApp link/button clicked
 *   phone_click     – any tel: link clicked
 *   email_click     – any mailto: link clicked
 *   cta_click       – "Get a Free Consultation" / other primary CTAs clicked
 */
export type LeadEvent =
  | "generate_lead"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "cta_click";

type Gtag = (command: "event", eventName: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(name: LeadEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...params });
  }
}
