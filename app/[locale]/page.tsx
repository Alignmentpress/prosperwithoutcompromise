import ComingSoon from "@/components/ComingSoon";
import Image from "next/image";
import Link from "next/link";
import BookShowcase from "@/components/BookShowcase";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const isComingSoon = process.env.NEXT_PUBLIC_SITE_MODE === "coming-soon";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = getTranslations(l);

  if (isComingSoon) {
    return <ComingSoon />;
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-gold-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-500/[0.03] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-6">
                {t.home.hero.byline}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1] whitespace-pre-line">
                {t.home.hero.titleLine1}{" "}
                <span className="text-gradient-gold">{t.home.hero.titleLine2}</span>
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
                {t.home.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${l}/book`}
                  className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20 text-base"
                >
                  {t.home.hero.ctaBook}
                </Link>
                <Link
                  href={`/${l}/academy`}
                  className="px-8 py-4 border border-white/10 text-white rounded-lg hover:bg-white/5 hover:border-gold-400/30 transition-all duration-300 text-base"
                >
                  {t.home.hero.ctaVideos}
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-fade-in-up animate-delay-200">
              <div className="relative">
                <div className="golden-glow rounded-2xl">
                  <Image
                    src="/images/book-stack.jpg"
                    alt="Prosper Without Compromise by Kevin Adou"
                    width={480}
                    height={580}
                    className="rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookShowcase locale={l} />

      {/* Three Pillars */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href={`/${l}/book`}
              className="group border-glow rounded-xl p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4 text-gold-400 group-hover:bg-gold-500/20 transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.747 5.754 18 7.5 18s3.332.747 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.747 18.247 18 16.5 18c-1.746 0-3.332.747-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-1">{t.home.pillars.read.title}</h3>
              <p className="text-gold-400/70 text-sm italic mb-4">{t.home.pillars.read.subtitle}</p>
              <span className="text-gold-400 font-semibold text-sm group-hover:text-gold-300 transition-colors">
                {t.home.pillars.read.cta} →
              </span>
            </Link>

            <Link
              href={`/${l}/academy`}
              className="group border-glow rounded-xl p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4 text-gold-400 group-hover:bg-gold-500/20 transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.747 5.754 18 7.5 18s3.332.747 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.747 18.247 18 16.5 18c-1.746 0-3.332.747-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-1">{t.home.pillars.learn.title}</h3>
              <p className="text-gold-400/70 text-sm italic mb-4">{t.home.pillars.learn.subtitle}</p>
              <span className="text-gold-400 font-semibold text-sm group-hover:text-gold-300 transition-colors">
                {t.home.pillars.learn.cta} →
              </span>
            </Link>

            <Link
              href={`/${l}/coaching`}
              className="group border-glow rounded-xl p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4 text-gold-400 group-hover:bg-gold-500/20 transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-1">{t.home.pillars.evolve.title}</h3>
              <p className="text-gold-400/70 text-sm italic mb-4">{t.home.pillars.evolve.subtitle}</p>
              <span className="text-gold-400 font-semibold text-sm group-hover:text-gold-300 transition-colors">
                {t.home.pillars.evolve.cta} →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.05)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            {t.home.why.title}
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            {t.home.why.body}
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.05)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 text-gold-500/30 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-relaxed mb-8">
            {t.home.quote.text}
          </blockquote>
          <p className="text-gold-400 font-semibold">{t.home.quote.author}</p>
          <p className="text-gray-500 text-sm mt-1">{t.home.quote.from}</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
            {t.common.stayConnected}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.home.footerCta.title}
          </h2>
          <p className="text-gray-400 text-base mb-8 max-w-md mx-auto">
            {t.home.footerCta.newsletterDesc}
          </p>
          <div className="max-w-md mx-auto">
            <LeadCaptureForm source="homepage-footer" compact />
          </div>
        </div>
      </section>
    </>
  );
}
