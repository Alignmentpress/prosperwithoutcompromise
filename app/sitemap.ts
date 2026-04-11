import type { MetadataRoute } from "next";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alignmentpress.com";

/** Public [locale] routes (no trailing slash before path segment). */
const routes = [
  "",
  "/about",
  "/academy",
  "/alignment-test",
  "/book",
  "/coaching",
  "/contact",
  "/resources",
] as const;

function localizedPath(locale: Locale, route: (typeof routes)[number]): string {
  return route === "" ? `/${locale}` : `/${locale}${route}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = `${siteUrl}${localizedPath(locale, route)}`;
    }
    return {
      url: `${siteUrl}${localizedPath(defaultLocale, route)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          ...languages,
          "x-default": `${siteUrl}${localizedPath(defaultLocale, route)}`,
        },
      },
    };
  });
}
