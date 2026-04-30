import type { Locale } from "@/lib/i18n";

export const AMAZON_AUTHOR_BOOKS_URL =
  "https://www.amazon.fr/stores/author/B0GPXFP9B2/allbooks?ingress=0&visitId=cc415b7a-4de7-4bdd-82cf-fc152fc514ce";

/** Amazon store URLs for the book edition that matches the site locale (one title, two marketplaces). */
export function getAmazonUrlsForLocale(locale: Locale): { us: string; fr: string } {
  if (locale === "fr") {
    return {
      us: process.env.NEXT_PUBLIC_AMAZON_FR_EDITION_US || AMAZON_AUTHOR_BOOKS_URL,
      fr: process.env.NEXT_PUBLIC_AMAZON_FR_EDITION_FR || AMAZON_AUTHOR_BOOKS_URL,
    };
  }
  return {
    us: process.env.NEXT_PUBLIC_AMAZON_EN_EDITION_US || AMAZON_AUTHOR_BOOKS_URL,
    fr: process.env.NEXT_PUBLIC_AMAZON_EN_EDITION_FR || AMAZON_AUTHOR_BOOKS_URL,
  };
}
