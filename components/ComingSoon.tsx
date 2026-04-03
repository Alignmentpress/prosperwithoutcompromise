import Image from "next/image";
import Logo from "@/components/Logo";
import LeadCaptureForm from "./LeadCaptureForm";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export default function ComingSoon({ locale }: { locale: Locale }) {
  const t = getTranslations(locale).comingSoon;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl max-w-[200vw]" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-12 min-w-0">
          <Logo size="md" />
          <span className="font-serif text-2xl tracking-wide text-white truncate">Alignment Press</span>
        </div>

        <div className="mb-10 relative">
          <div className="golden-glow inline-block rounded-xl overflow-hidden max-w-full">
            <Image
              src="/images/book-cover.jpg"
              alt="Prosper Without Compromise by Kevin Adou"
              width={320}
              height={420}
              className="rounded-xl max-w-full h-auto"
              priority
            />
          </div>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {t.headlineBefore}{" "}
          <span className="text-gradient-gold">{t.headlineGold}</span> {t.headlineAfter}
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl mb-2">
          <em>{t.bookLine}</em> {t.byAuthor}
        </p>

        <p className="text-gray-400 text-base max-w-md mx-auto mb-10">{t.body}</p>

        <div className="max-w-md mx-auto">
          <LeadCaptureForm source="coming-soon" compact locale={locale} />
        </div>
      </div>
    </div>
  );
}
