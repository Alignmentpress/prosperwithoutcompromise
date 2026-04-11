import ComingSoon from "@/components/ComingSoon";
import Image from "next/image";
import Link from "next/link";
import HomeBooksSection from "@/components/HomeBooksSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";

const isComingSoon = process.env.NEXT_PUBLIC_SITE_MODE === "coming-soon";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const t = getTranslations(l).home;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = getTranslations(l);
  const ql = t.home.quickLinks;

  if (isComingSoon) {
    return <ComingSoon locale={l} />;
  }

  return (
    <>
      {/* Hero */}
      <section className="relative isolate z-0 min-h-[min(88dvh,760px)] flex items-center overflow-hidden pt-nav">
        <div className="absolute inset-0 bg-[#050816]" />
        <div className="absolute inset-0 bg-home-grid opacity-70" />
        <div className="absolute inset-0 bg-home-radial pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,rgba(201,168,76,0.11),transparent_50%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05),transparent_72%)] pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6 animate-fade-in-up text-center lg:text-left">
              <p className="text-gold-500/90 text-[11px] font-semibold uppercase tracking-[0.28em] mb-5">
                {t.home.hero.byline}
              </p>
              <h1 className="font-serif text-[2.125rem] sm:text-5xl lg:text-[3.15rem] font-semibold text-white leading-[1.1] tracking-tight mb-5">
                <span className="block sm:inline">{t.home.hero.titleLine1}</span>{" "}
                <span className="text-gradient-gold">{t.home.hero.titleLine2}</span>
              </h1>
              <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg lg:mx-0">
                {t.home.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href={`/${l}/alignment-test`}
                  className="inline-flex justify-center items-center min-h-[48px] px-8 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 text-sm font-semibold tracking-wide shadow-md shadow-gold-900/25 hover:from-gold-400 hover:to-gold-500 transition-all"
                >
                  {t.home.hero.ctaAlignment}
                </Link>
                <Link
                  href={`/${l}/book`}
                  className="inline-flex justify-center items-center min-h-[48px] px-8 rounded-full border border-white/18 text-white/95 text-sm font-medium hover:bg-white/[0.05] hover:border-gold-400/25 transition-all"
                >
                  {t.home.hero.ctaBooks}
                </Link>
              </div>
              <p className="mt-6 text-center lg:text-left">
                <Link
                  href={`/${l}/academy`}
                  className="text-sm text-gold-500/85 hover:text-gold-400 font-medium border-b border-gold-500/25 hover:border-gold-400/50 transition-colors pb-0.5"
                >
                  {t.home.hero.ctaVideos}
                </Link>
                <span className="text-white/25 mx-2" aria-hidden>
                  ·
                </span>
                <Link
                  href={`/${l}/resources`}
                  className="text-sm text-gray-500 hover:text-gold-400/90 transition-colors"
                >
                  {t.home.quickLinks.insights}
                </Link>
              </p>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end animate-fade-in-up animate-delay-200">
              <div className="relative w-full max-w-[min(100%,420px)]">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/5 to-transparent rounded-3xl blur-2xl" />
                <div className="relative golden-glow rounded-2xl overflow-hidden ring-1 ring-white/[0.06]">
                  <Image
                    src="/images/book-stack.jpg"
                    alt={t.home.hero.heroImageAlt}
                    width={480}
                    height={580}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision + why — single panel (less vertical gap) */}
      <section className="home-section-y relative isolate z-0 overflow-hidden border-t border-white/[0.06] px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[#050816]" />
        <div className="pointer-events-none absolute inset-0 bg-home-grid opacity-45" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] md:p-9 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
              <div className="text-center lg:text-left">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-500/90">
                  {t.home.vision.label}
                </p>
                <p className="mb-4 font-serif text-xl italic leading-snug text-gold-300/95 sm:text-2xl md:text-[1.6rem]">
                  {t.home.vision.title}
                </p>
                <p className="mx-auto max-w-prose text-base leading-[1.75] text-gray-400 sm:text-[1.05rem] lg:mx-0">
                  {t.home.vision.body}
                </p>
              </div>
              <div className="border-t border-white/[0.06] pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 lg:border-white/[0.06]">
                <h2 className="mb-3 font-serif text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl md:text-[1.75rem]">
                  {t.home.why.title}
                </h2>
                <p className="mx-auto max-w-prose text-base leading-relaxed text-gray-400 sm:text-[1.05rem] lg:mx-0">
                  {t.home.why.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeBooksSection locale={l} />

      {/* Pathways + framework — one continuous band */}
      <section className="home-section-y relative isolate z-0 overflow-hidden border-t border-white/[0.06] px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#060a14] to-navy-950" />
        <div className="pointer-events-none absolute inset-0 bg-home-grid opacity-40" />
        <div className="relative z-10 mx-auto w-full max-w-6xl space-y-10 md:space-y-11">
          <header className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-500/85">{ql.eyebrow}</p>
            <p className="text-sm leading-relaxed text-gray-400 sm:text-[0.95rem]">{t.home.pathways.intro}</p>
          </header>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {(
              [
                { href: `/${l}/book`, p: t.home.pillars.read },
                { href: `/${l}/academy`, p: t.home.pillars.learn },
                { href: `/${l}/coaching`, p: t.home.pillars.evolve },
              ] as const
            ).map(({ href, p }) => (
              <article
                key={p.title}
                className="group flex flex-col border border-white/[0.09] rounded-xl p-6 md:p-7 bg-gradient-to-b from-white/[0.05] to-white/[0.01] hover:border-gold-500/25 hover:from-white/[0.07] transition-all duration-300"
              >
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold-500/65">{p.subtitle}</p>
                <h3 className="mb-4 flex-1 font-serif text-lg font-semibold leading-snug text-white sm:text-xl">
                  {p.title}
                </h3>
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 text-gold-400 text-sm font-medium group-hover:text-gold-300 transition-colors"
                >
                  {p.cta}
                  <span aria-hidden className="translate-x-0 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>

          <p className="text-center">
            <Link
              href={`/${l}/resources`}
              className="text-sm text-gray-500 hover:text-gold-400/90 transition-colors"
            >
              {ql.insights}
            </Link>
          </p>

          <div className="border-t border-white/[0.08] pt-10 md:pt-11">
            <header className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-500/85">
                {t.home.fourPillars.eyebrow}
              </p>
              <h2 className="mb-3 font-serif text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {t.home.fourPillars.title}
              </h2>
              <p className="text-sm leading-relaxed text-gray-500">{t.home.fourPillars.intro}</p>
            </header>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
              {t.bookShowcase.pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-5 hover:border-gold-500/20 transition-colors"
                >
                  <span className="text-gold-600/50 font-mono text-[11px] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2.5 mb-1.5 font-serif text-base font-semibold text-white">{pillar.title}</h3>
                  <p className="text-sm leading-snug text-gray-500">{pillar.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-9">
              <Link
                href={`/${l}/book`}
                className="inline-flex justify-center items-center min-h-[46px] px-7 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 text-sm font-semibold tracking-wide shadow-md shadow-gold-900/20 hover:from-gold-400 hover:to-gold-500 transition-all"
              >
                {t.bookShowcase.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote — flagship band: taller + larger type than other homepage sections */}
      <section
        className="relative isolate z-0 flex min-h-[min(58vh,680px)] flex-col justify-center overflow-hidden border-t border-white/10 px-4 py-24 sm:px-6 md:min-h-[min(52vh,620px)] md:py-32 lg:min-h-[min(50vh,720px)] lg:px-8 lg:py-40"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#070b14] to-navy-950" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_45%,rgba(201,168,76,0.12),transparent_65%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_100%,rgba(201,168,76,0.06),transparent_55%)]" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-3 text-center sm:px-4">
          <svg
            className="mx-auto mb-8 h-11 w-11 fill-current text-gold-500/35 sm:mb-10 md:h-14 md:w-14 md:mb-12"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="mb-8 font-serif text-[1.35rem] font-normal leading-[1.45] text-white/95 sm:text-2xl md:mb-10 md:text-3xl md:leading-[1.4] lg:text-[2.125rem] lg:leading-[1.35]">
            {t.home.quote.text}
          </blockquote>
          <p className="text-base font-medium tracking-wide text-gold-400/95 md:text-lg">{t.home.quote.author}</p>
          <p className="mt-2 text-sm text-gray-500 md:text-base">{t.home.quote.from}</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="home-section-y relative isolate z-0 overflow-hidden border-t border-white/[0.06] px-4 pb-16 sm:px-6 md:pb-20 lg:px-8">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="pointer-events-none absolute inset-0 bg-home-grid opacity-30" />
        <div className="relative z-10 mx-auto max-w-xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-500/90">
            {t.common.stayConnected}
          </p>
          <h2 className="mb-3 font-serif text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {t.home.footerCta.title}
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-gray-500">
            {t.home.footerCta.newsletterDesc}
          </p>
          <div className="mx-auto max-w-md">
            <LeadCaptureForm source="homepage-footer" compact locale={l} />
          </div>
        </div>
      </section>
    </>
  );
}
