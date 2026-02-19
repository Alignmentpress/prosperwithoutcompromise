"use client";

/**
 * Inline Calendly embed. Pass the full Calendly event URL (e.g. from NEXT_PUBLIC_CALENDLY_DISCOVERY_URL).
 * Calendly supports ?embed=true for inline display.
 */
export default function CalendlyEmbed({ url }: { url: string }) {
  const embedUrl = url.includes("?") ? `${url}&embed=true` : `${url}?embed=true`;
  return (
    <div className="border-glow rounded-2xl overflow-hidden bg-white/[0.02]">
      <iframe
        src={embedUrl}
        className="w-full min-h-[700px] h-[700px] sm:min-h-[800px] sm:h-[800px]"
        frameBorder="0"
        allowFullScreen
        allow="encrypted-media"
        title="Book a discovery call"
      />
    </div>
  );
}
