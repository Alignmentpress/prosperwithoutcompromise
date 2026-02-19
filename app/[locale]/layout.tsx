import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccessGate from "@/components/AccessGate";
import SetLocaleLang from "@/components/SetLocaleLang";
import { locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
