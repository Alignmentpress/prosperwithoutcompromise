import Image from "next/image";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";

const chapters = [
  { number: 1, titleKey: "ch1" as const, descKey: "ch1desc" as const },
  { number: 2, titleKey: "ch2" as const, descKey: "ch2desc" as const },
  { number: 3, titleKey: "ch3" as const, descKey: "ch3desc" as const },
  { number: 4, titleKey: "ch4" as const, descKey: "ch4desc" as const },
  { number: 5, titleKey: "ch5" as const, descKey: "ch5desc" as const },
  { number: 6, titleKey: "ch6" as const, descKey: "ch6desc" as const },
];

const chapterContent: Record<Locale, Record<string, string>> = {
  en: {
    ch1: "Intention: The Source Before Strategy",
    ch1desc: "Everything begins within. Before the first action, before strategy, there is an invisible impulse: intention. It determines the direction and quality of everything we build.",
    ch2: "Vision: The D.A.P. Compass",
    ch2desc: "After intention comes vision — structured around Desire, Love, and Potential. When these three dimensions align, vision becomes a clear heading and embodied mission.",
    ch3: "Strategy: The A.M.T. Framework",
    ch3desc: "Give form to your vision. Structure long- and short-term objectives through proven frameworks. Planning is the design of the channel through which abundance can flow.",
    ch4: "The Blueprint: Aligning Plan with Purpose",
    ch4desc: "Build a concrete, actionable plan that bridges divine intention with worldly execution. Unite meaning, performance, and responsibility.",
    ch5: "Faith: The Spiritual Engine",
    ch5desc: "The discipline of attention that refuses to feed doubt. Once the plan is drawn, faith is what animates it. To believe is to inhabit your future before it manifests.",
    ch6: "Action: The Final Seal",
    ch6desc: "Action is the signal sent to heaven that you are ready to receive. By embodying convictions through consistent, concrete steps, you move from theory to harvest.",
  },
  fr: {
    ch1: "Intention : La source avant la stratégie",
    ch1desc: "Tout commence à l'intérieur. Avant la première action, avant la stratégie, il y a une impulsion invisible : l'intention. Elle détermine la direction et la qualité de tout ce que nous construisons.",
    ch2: "Vision : Le compas D.A.P.",
    ch2desc: "Après l'intention vient la vision — structurée autour du Désir, de l'Amour et du Potentiel. Quand ces trois dimensions s'alignent, la vision devient un cap clair et une mission incarnée.",
    ch3: "Stratégie : Le cadre A.M.T.",
    ch3desc: "Donnez forme à votre vision. Structurez les objectifs à long et court terme grâce à des cadres éprouvés. La planification est le canal par lequel l'abondance peut circuler.",
    ch4: "Le plan : Aligner le plan et la finalité",
    ch4desc: "Construisez un plan concret et actionnable qui relie l'intention divine à l'exécution terrestre. Unissez sens, performance et responsabilité.",
    ch5: "Foi : Le moteur spirituel",
    ch5desc: "La discipline de l'attention qui refuse d'alimenter le doute. Une fois le plan tracé, la foi l'anime. Croire, c'est habiter votre avenir avant qu'il ne se manifeste.",
    ch6: "Action : Le sceau final",
    ch6desc: "L'action est le signal envoyé au ciel que vous êtes prêt à recevoir. En incarnant vos convictions par des étapes concrètes et constantes, vous passez de la théorie à la moisson.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  return {
    title: t.book.metaTitle,
    description: t.book.metaDescription,
  };
}

export default async function BookPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = getTranslations(l);
  const content = chapterContent[l];

  return (
    <>
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold-500/[0.04] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">{t.book.heroLabel}</p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t.book.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-gradient-gold">{t.book.title.split(" ").slice(-1)[0]}</span>
              </h1>
              <p className="text-gray-300 text-xl mb-2 italic">{t.book.subtitle}</p>
              <p className="text-gray-400 text-base mb-8">{t.book.byAuthor}</p>
              <p className="text-gray-300 leading-relaxed mb-8">{t.book.intro}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href="#"
                  className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20"
                >
                  {t.book.buyAmazon}
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border border-white/10 text-white rounded-lg hover:bg-white/5 hover:border-gold-400/30 transition-all duration-300"
                >
                  {t.book.buyDigital}
                </a>
              </div>
              <p className="text-gray-500 text-sm">{t.book.availableFormats}</p>
            </div>

            <div className="flex justify-center">
              <div className="golden-glow rounded-2xl overflow-hidden">
                <Image
                  src="/images/book-cover.jpg"
                  alt="Prosper Without Compromise book cover"
                  width={400}
                  height={520}
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-8">{t.book.keyPromiseTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.book.keyPromiseItems.map((item, i) => (
              <div key={i} className="border-glow rounded-lg p-5 bg-white/[0.02] text-left">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300 text-sm">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500/[0.03] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">{t.book.insideTitle}</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">{t.book.chapterTitle}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.book.chapterIntro}</p>
          </div>

          <div className="space-y-4">
            {chapters.map((ch) => (
              <div
                key={ch.number}
                className="group border-glow rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <span className="text-gold-400 font-serif font-bold">{ch.number}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white mb-2">{content[ch.titleKey]}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{content[ch.descKey]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">{t.book.ctaTitle}</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">{t.book.ctaDesc}</p>
          <div className="max-w-md mx-auto">
            <LeadCaptureForm source="book-page" compact />
          </div>
        </div>
      </section>
    </>
  );
}
