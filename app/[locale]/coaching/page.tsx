import Link from "next/link";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  return { title: t.coaching.metaTitle, description: t.coaching.metaDescription };
}

function getCalendlyUrl(): string | null {
  return process.env.NEXT_PUBLIC_CALENDLY_DISCOVERY_URL ?? null;
}

export default async function CoachingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = getTranslations(l);
  const calendlyUrl = getCalendlyUrl();

  return (
    <>
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-gold-500/[0.04] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">{t.coaching.heroLabel}</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-gradient-gold">{t.coaching.title}</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-8">{t.coaching.subtitle}</p>
          {calendlyUrl && (
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20"
            >
              {t.coaching.bookDiscovery}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="space-y-8">
            {/* Executive Coaching */}
            <div className="border-glow rounded-2xl p-8 sm:p-10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-semibold rounded-full">
                  {t.coaching.executiveDuration}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">{t.coaching.executiveTitle}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{t.coaching.executiveDesc}</p>
              {calendlyUrl && (
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm transition-colors"
                >
                  {t.coaching.bookDiscovery}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>

            {/* Corporate Training */}
            <div className="border-glow rounded-2xl p-8 sm:p-10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-semibold rounded-full">
                  {t.coaching.corporateDuration}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">{t.coaching.corporateTitle}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{t.coaching.corporateDesc}</p>
              {calendlyUrl && (
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm transition-colors"
                >
                  {t.coaching.inquire}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Calendly inline embed */}
      {calendlyUrl && (
        <section className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-navy-950" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">{t.coaching.bookDiscovery}</h2>
              <p className="text-gray-400">Choose a time that works for you.</p>
            </div>
            <CalendlyEmbed url={calendlyUrl} />
          </div>
        </section>
      )}

      {!calendlyUrl && (
        <section className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-navy-950" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <p className="text-gray-400">
              Booking will be available soon. Contact us at{" "}
              <a href="mailto:kevin@alignmentpress.com" className="text-gold-400 hover:underline">
                kevin@alignmentpress.com
              </a>{" "}
              to inquire.
            </p>
            <Link
              href={`/${l}/contact`}
              className="inline-block mt-6 px-6 py-3 border border-white/10 text-white rounded-lg hover:bg-white/5 hover:border-gold-400/30 transition-all duration-300"
            >
              {t.nav.contact}
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
