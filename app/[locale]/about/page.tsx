import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  return { title: t.about.metaTitle, description: t.about.metaDescription };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = getTranslations(l);

  return (
    <>
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gold-500/[0.04] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">{t.about.heroLabel}</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Kevin <span className="text-gradient-gold">{t.about.title.split(" ")[1]}</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">{t.about.tagline}</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/10 border-2 border-gold-400/20 flex items-center justify-center">
              <span className="font-serif text-6xl text-gold-400 font-bold">KA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            {t.about.bio.map((p, i) => (
              <p key={i} className={i === 1 ? "text-lg" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">{t.about.convictionsTitle}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.about.convictionsIntro}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.about.convictions.map((value, i) => (
              <div
                key={i}
                className="border-glow rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30"
              >
                <h3 className="font-serif text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.04)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-8">{t.about.missionTitle}</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">{t.about.mission1}</p>
          <p className="text-gray-400 leading-relaxed mb-10">{t.about.mission2}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${l}/book`}
              className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20"
            >
              {t.about.readBook}
            </Link>
            <Link
              href={`/${l}/contact`}
              className="px-6 py-3 border border-white/10 text-white rounded-lg hover:bg-white/5 hover:border-gold-400/30 transition-all duration-300"
            >
              {t.about.getInTouch}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">{t.about.stayConnected}</p>
          <h2 className="font-serif text-3xl font-bold text-white mb-4">{t.about.followJourney}</h2>
          <p className="text-gray-400 mb-8">{t.about.followDesc}</p>
          <div className="max-w-md mx-auto">
            <LeadCaptureForm source="about-page" compact />
          </div>
        </div>
      </section>
    </>
  );
}
