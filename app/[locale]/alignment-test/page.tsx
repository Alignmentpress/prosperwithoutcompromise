import AlignmentTestForm from "@/components/AlignmentTestForm";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale).alignmentTest;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function AlignmentTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = getTranslations(l).alignmentTest;

  return (
    <section className="pt-nav-lg pb-24 px-4 relative overflow-hidden min-h-[80vh]">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute top-32 right-1/4 w-[500px] h-[500px] bg-gold-500/[0.04] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">{t.heroLabel}</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          {t.title}
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">{t.subtitle}</p>
        <AlignmentTestForm locale={l} />
      </div>
    </section>
  );
}
