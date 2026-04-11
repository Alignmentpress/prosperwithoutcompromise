import type { Locale } from "@/lib/i18n";

/** Amazon store URLs for the book edition that matches the site locale (one title, two marketplaces). */
export function getAmazonUrlsForLocale(locale: Locale): { us: string; fr: string } {
  if (locale === "fr") {
    return {
      us: process.env.NEXT_PUBLIC_AMAZON_FR_EDITION_US ?? "",
      fr: process.env.NEXT_PUBLIC_AMAZON_FR_EDITION_FR ?? "",
    };
  }
  return {
    us: process.env.NEXT_PUBLIC_AMAZON_EN_EDITION_US ?? "",
    fr: process.env.NEXT_PUBLIC_AMAZON_EN_EDITION_FR ?? "",
  };
}
