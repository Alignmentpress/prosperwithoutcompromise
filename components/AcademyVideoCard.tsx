"use client";

import { trackAcademyYouTubeClick } from "@/lib/analytics";
import type { VideoEntry } from "@/lib/academy-videos";
import type { Locale } from "@/lib/i18n";

function YouTubeShortEmbed({ youtubeId, title }: { youtubeId: string; title: string }) {
  return (
    <div className="aspect-[9/16] w-full overflow-hidden bg-navy-800">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title={title}
      />
    </div>
  );
}

export default function AcademyVideoCard({ entry, locale }: { entry: VideoEntry; locale: Locale }) {
  return (
    <div className="border-glow rounded-xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30 group">
      <YouTubeShortEmbed youtubeId={entry.youtubeId} title={entry.topic} />
      <div className="p-4">
        <h3 className="font-serif font-bold text-white mb-1 line-clamp-2">{entry.topic}</h3>
        <p className="text-gray-400 text-sm">{entry.description}</p>
        <a
          href={entry.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackAcademyYouTubeClick({ video_id: entry.youtubeId, locale })}
          className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm transition-colors mt-3"
        >
          Watch on YouTube
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
