import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getTranslations } from "@/lib/i18n";
import { academyVideos } from "@/lib/academy-videos";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  return { title: t.academy.metaTitle, description: t.academy.metaDescription };
}

function VimeoEmbed({ vimeoId, title }: { vimeoId: string; title: string }) {
  return (
    <div className="aspect-video w-full rounded-xl overflow-hidden bg-white/5">
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`}
        className="w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  );
}

function VideoCard({ entry }: { entry: (typeof academyVideos)[0] }) {
  const content = (
    <div className="border-glow rounded-xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30 group">
      {entry.vimeoId ? (
        <VimeoEmbed vimeoId={entry.vimeoId} title={entry.topic} />
      ) : (
        <div className="aspect-video w-full bg-navy-800 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-3 text-gold-400 group-hover:bg-gold-500/20 transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-gray-400 text-sm">{entry.topic}</p>
            {entry.duration && <p className="text-gray-500 text-xs mt-1">{entry.duration}</p>}
          </div>
        </div>
      )}
      <div className="p-4">
        <h3 className="font-serif font-bold text-white mb-1">{entry.topic}</h3>
        <p className="text-gray-400 text-sm">{entry.description}</p>
      </div>
    </div>
  );

  if (entry.url) {
    return (
      <a href={entry.url} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }
  return content;
}

export default async function AcademyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = getTranslations(l);

  return (
    <>
      <section className="pt-nav-lg pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold-500/[0.04] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">{t.academy.heroLabel}</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.academy.title}
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">{t.academy.subtitle}</p>
        </div>
      </section>

      {/* DAP Protocol — coming soon + waitlist */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="border-glow rounded-2xl p-8 sm:p-10 bg-white/[0.02] mb-16">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-semibold rounded-full">
                {t.academy.dapBadge}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">{t.academy.dapTitle}</h2>
            <p className="text-gray-400 leading-relaxed mb-0">{t.academy.dapBody}</p>
          </div>

          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">{t.academy.waitlistTitle}</h2>
            <p className="text-gray-400 mb-8">{t.academy.waitlistDesc}</p>
            <div className="max-w-md mx-auto">
              <LeadCaptureForm
                source="academy-dap-waitlist"
                interest={["academy-dap-waitlist"]}
                submitLabel={t.academy.waitlistCta}
                locale={l}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video library — Insights preview */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">{t.academy.insightsPreviewTitle}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">{t.academy.insightsPreviewSubtitle}</p>
            <Link
              href={`/${l}/resources`}
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm transition-colors"
            >
              {t.academy.insightsLink}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="text-center mb-12">
            <h3 className="font-serif text-xl font-bold text-white mb-2">{t.academy.videoLibraryTitle}</h3>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">{t.academy.videoLibrarySubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {academyVideos.map((entry) => (
              <VideoCard key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
