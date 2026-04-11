import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccessGate from "@/components/AccessGate";
import SetLocaleLang from "@/components/SetLocaleLang";
import { getTranslations } from "@/lib/i18n";
import { locales, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alignmentpress.com";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const t = getTranslations(l).home;
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t.metaTitle,
      template: "%s | Alignment Press",
    },
    description: t.metaDescription,
    keywords:
      l === "fr"
        ? ["Leadership", "Alignement", "Prospérité", "Stratégie", "Foi", "Kevin Adou"]
        : ["Leadership", "Alignment", "Prosperity", "Strategy", "Faith", "Kevin Adou"],
    openGraph: {
      locale: l === "fr" ? "fr_FR" : "en_US",
      siteName: "Alignment Press",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const isComingSoon = process.env.NEXT_PUBLIC_SITE_MODE === "coming-soon";

  return (
    <>
      <SetLocaleLang locale={locale as Locale} />
      {isComingSoon ? (
        <main className="min-h-screen">{children}</main>
      ) : (
        <AccessGate>
          <Navbar locale={locale as Locale} />
          <main className="min-h-screen">{children}</main>
          <Footer locale={locale as Locale} />
        </AccessGate>
      )}
    </>
  );
}
