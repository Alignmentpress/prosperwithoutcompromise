/** Client-only helpers for GA4 and Meta Pixel (scripts loaded in RootLayout). */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function sendGtagEvent(eventName: string, params?: Record<string, string | undefined>): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const cleaned = Object.fromEntries(
    Object.entries(params ?? {}).filter(([, v]) => v !== undefined && v !== ""),
  ) as Record<string, string>;
  window.gtag("event", eventName, cleaned);
}

function sendFbqCustom(eventName: string, params?: Record<string, string | undefined>): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  const cleaned = Object.fromEntries(
    Object.entries(params ?? {}).filter(([, v]) => v !== undefined && v !== ""),
  ) as Record<string, string>;
  window.fbq("trackCustom", eventName, cleaned);
}

/** Newsletter / lead forms — includes interest tags for segmentation in GA4. */
export function trackLead(source: string, options?: { interest?: string[] }): void {
  if (typeof window === "undefined") return;

  const interestTags = options?.interest?.filter(Boolean).join(",") || undefined;

  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", {
      content_name: source,
      ...(interestTags ? { content_category: interestTags } : {}),
    });
  }

  sendGtagEvent("generate_lead", {
    lead_source: source,
    interest_tags: interestTags,
  });
}

/** Outbound click to Amazon (book purchase intent). */
export function trackAmazonClick(params: {
  placement: string;
  marketplace?: "us" | "fr";
  locale?: string;
}): void {
  sendGtagEvent("amazon_outbound_click", {
    placement: params.placement,
    marketplace: params.marketplace,
    locale: params.locale,
  });
  sendFbqCustom("AmazonClick", {
    placement: params.placement,
    marketplace: params.marketplace,
    locale: params.locale,
  });
}

/** Academy: user opens a Short on YouTube. */
export function trackAcademyYouTubeClick(params: { video_id: string; locale: string }): void {
  sendGtagEvent("academy_youtube_click", {
    video_id: params.video_id,
    locale: params.locale,
  });
  sendFbqCustom("AcademyYouTubeClick", {
    video_id: params.video_id,
    locale: params.locale,
  });
}

/** Internal CTA (e.g. deep link to book page). */
export function trackCtaClick(params: { cta_id: string; link_url: string; locale?: string }): void {
  sendGtagEvent("cta_click", {
    cta_id: params.cta_id,
    link_url: params.link_url,
    locale: params.locale,
  });
  sendFbqCustom("CTAClick", {
    cta_id: params.cta_id,
    link_url: params.link_url,
    locale: params.locale,
  });
}

/** Coaching: Calendly embed is shown (after gate / unlock). */
export function trackCoachingCalendlyView(params: { locale: string }): void {
  sendGtagEvent("coaching_calendly_view", { locale: params.locale });
  sendFbqCustom("CoachingCalendlyView", { locale: params.locale });
}
