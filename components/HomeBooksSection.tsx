import Image from "next/image";
import Link from "next/link";
import { getAmazonUrlsForLocale } from "@/lib/amazon";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

interface HomeBooksSectionProps {
  locale: Locale;
}

const btnPrimary =
  "inline-flex justify-center items-center min-h-[44px] px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 text-sm font-semibold tracking-wide hover:from-gold-400 hover:to-gold-500 transition-all shadow-md shadow-gold-900/20";
const btnGhost =
  "inline-flex justify-center items-center min-h-[44px] px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/[0.06] hover:border-gold-400/35 transition-all";
export default function HomeBooksSection({ locale }: HomeBooksSectionProps) {
  const t = getTranslations(locale);
  const labels = t.home.booksSection;
  const book = t.book;
  const amazon = getAmazonUrlsForLocale(locale);
  const hasAnyLink = Boolean(amazon.us || amazon.fr);

  return (
    <section
      className="relative isolate overflow-hidden home-section-y border-t border-white/[0.06] px-4 sm:px-6 lg:px-8"
      aria-labelledby="home-books-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950 via-[#060a14] to-navy-950" />
      <div className="pointer-events-none absolute inset-0 bg-home-grid opacity-50" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <header className="mb-8 text-center md:mb-9">
          <h2
            id="home-books-heading"
            className="font-serif text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            {labels.label}
          </h2>
        </header>

        <div className="flex flex-col items-center gap-8 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-7 md:flex-row md:items-stretch md:gap-10 md:p-9 lg:gap-12 lg:p-10">
          <div className="flex shrink-0 justify-center md:w-[min(100%,220px)]">
            <div className="golden-glow w-full max-w-[220px] overflow-hidden rounded-xl shadow-2xl shadow-black/40 md:max-w-[240px]">
              <Image
                src="/images/book-cover.jpg"
                alt={book.coverImageAlt}
                width={240}
                height={312}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-center text-center md:max-w-none md:text-left">
            <h3 className="font-serif text-xl font-semibold leading-snug text-white sm:text-2xl">
              {book.title}
            </h3>
            <p className="mt-2 text-base italic text-gray-400">{book.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">{labels.crossLanguageNote}</p>

            {hasAnyLink ? (
              <div
                className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
                role="group"
                aria-label={labels.buyAmazonUs}
              >
                {amazon.us ? (
                  <a href={amazon.us} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                    {labels.buyAmazonUs}
                  </a>
                ) : null}
                {amazon.fr ? (
                  <a href={amazon.fr} target="_blank" rel="noopener noreferrer" className={btnGhost}>
                    {labels.buyAmazonFr}
                  </a>
                ) : null}
              </div>
            ) : (
              <p className="mt-8 text-center text-sm tracking-wide text-gold-500/70 md:text-left">
                {labels.linksSoon}
              </p>
            )}

            <div className="mt-8">
              <Link
                href={`/${locale}/book`}
                className="text-sm font-medium text-gold-400/90 underline decoration-gold-500/30 underline-offset-4 transition-colors hover:text-gold-300 hover:decoration-gold-400/50"
              >
                {labels.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
