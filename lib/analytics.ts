/** Client-only helpers for GA4 and Meta Pixel (scripts loaded in layout). */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackLead(source: string): void {
  if (typeof window === "undefined") return;

  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", { content_name: source });
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      lead_source: source,
    });
  }
}
