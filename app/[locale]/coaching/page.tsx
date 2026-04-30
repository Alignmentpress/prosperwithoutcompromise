import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import CoachingBookingFlow from "@/components/CoachingBookingFlow";
import LeadCaptureForm from "@/components/LeadCaptureForm";

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

  const hero = (
    <section className="pt-nav-lg pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-gold-500/[0.04] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">{t.coaching.heroLabel}</p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="text-gradient-gold">{t.coaching.title}</span>
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">{t.coaching.subtitle}</p>
      </div>
    </section>
  );

  const tiers = (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="border-glow rounded-2xl p-8 sm:p-10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-semibold rounded-full">
                {t.coaching.executiveDuration}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">{t.coaching.executiveTitle}</h3>
            <p className="text-gray-400 leading-relaxed">{t.coaching.executiveDesc}</p>
          </div>

          <div className="border-glow rounded-2xl p-8 sm:p-10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-semibold rounded-full">
                {t.coaching.corporateDuration}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">{t.coaching.corporateTitle}</h3>
            <p className="text-gray-400 leading-relaxed">{t.coaching.corporateDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );

  const coachingLeadCapture = (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/[0.05] blur-3xl" />
      <div className="relative z-10 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center shadow-2xl shadow-navy-950/40 sm:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-400">{t.coaching.leadEyebrow}</p>
        <h2 className="mb-4 font-serif text-3xl font-bold text-white sm:text-4xl">{t.coaching.leadTitle}</h2>
        <p className="mx-auto mb-8 max-w-xl text-gray-400">{t.coaching.leadDesc}</p>
        <div className="mx-auto max-w-md">
          <LeadCaptureForm
            source="coaching-page"
            interest={["coaching", l]}
            submitLabel={t.coaching.leadCta}
            compact
            locale={l}
          />
        </div>
      </div>
    </section>
  );

  return (
    <CoachingBookingFlow
      locale={l}
      calendlyUrl={calendlyUrl}
      hero={hero}
      tiers={tiers}
      coachingLeadCapture={coachingLeadCapture}
    />
  );
}
