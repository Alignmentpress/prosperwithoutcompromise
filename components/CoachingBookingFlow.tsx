"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { trackLead } from "@/lib/analytics";

const COACHING_GATE_KEY = "alignmentpress_coaching_aligned";

interface CoachingBookingFlowProps {
  locale: Locale;
  calendlyUrl: string | null;
  hero: React.ReactNode;
  tiers: React.ReactNode;
}

export default function CoachingBookingFlow({ locale, calendlyUrl, hero, tiers }: CoachingBookingFlowProps) {
  const t = getTranslations(locale).coaching;
  const tNav = getTranslations(locale).nav;
  const [unlocked, setUnlocked] = useState(false);
  const [checking, setChecking] = useState(true);
  const [justSubmitted, setJustSubmitted] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!calendlyUrl) {
      setUnlocked(true);
      setChecking(false);
      return;
    }
    try {
      if (typeof window !== "undefined" && sessionStorage.getItem(COACHING_GATE_KEY) === "1") {
        setUnlocked(true);
      }
    } finally {
      setChecking(false);
    }
  }, [calendlyUrl]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/coaching-alignment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          email,
          locale,
          q1,
          q2,
          q3,
          q4,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Error");
        return;
      }
      sessionStorage.setItem(COACHING_GATE_KEY, "1");
      setUnlocked(true);
      setJustSubmitted(true);
      trackLead("coaching-alignment");
      setStatus("idle");
    } catch {
      setStatus("error");
      setErrorMsg("Connection error.");
    }
  };

  const ta = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-gold-400 focus:bg-white/[0.07] min-h-[88px] resize-y";

  if (checking) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold-400/30 border-t-gold-400 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      {hero}

      {calendlyUrl && !unlocked && (
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-navy-950" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-white mb-2 text-center">{t.alignmentGateTitle}</h2>
            <p className="text-gray-400 text-center mb-8">{t.alignmentGateIntro}</p>
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-400 text-sm mb-1">{t.alignmentNameLabel}</label>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-gold-400 focus:bg-white/[0.07]"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">{t.alignmentEmailLabel}</label>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-gold-400 focus:bg-white/[0.07]"
                />
              </div>
              {[
                { label: t.alignmentQ1, val: q1, set: setQ1 },
                { label: t.alignmentQ2, val: q2, set: setQ2 },
                { label: t.alignmentQ3, val: q3, set: setQ3 },
                { label: t.alignmentQ4, val: q4, set: setQ4 },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-gray-400 text-sm mb-1">{field.label}</label>
                  <textarea
                    required
                    value={field.val}
                    onChange={(e) => field.set(e.target.value)}
                    placeholder={t.alignmentPlaceholder}
                    rows={3}
                    className={ta}
                  />
                </div>
              ))}
              {status === "error" && <p className="text-red-400 text-sm text-center">{errorMsg}</p>}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full min-h-[44px] py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all disabled:opacity-50"
              >
                {status === "loading" ? t.alignmentSubmitting : t.alignmentSubmit}
              </button>
            </form>
          </div>
        </section>
      )}

      {justSubmitted && (
        <p className="text-center text-gold-400 py-2 text-sm max-w-2xl mx-auto px-4">{t.alignmentSuccess}</p>
      )}

      {unlocked && tiers}

      {unlocked && calendlyUrl && (
        <section className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-navy-950" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">{t.bookDiscovery}</h2>
              <p className="text-gray-400">{t.calendlyEmbedSubtitle}</p>
            </div>
            <CalendlyEmbed url={calendlyUrl} />
          </div>
        </section>
      )}

      {unlocked && !calendlyUrl && (
        <section className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-navy-950" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <p className="text-gray-400">
              Booking will be available soon. Contact us at{" "}
              <a href="mailto:kevin@alignmentpress.com" className="text-gold-400 hover:underline">
                kevin@alignmentpress.com
              </a>{" "}
              to inquire.
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block mt-6 px-6 py-3 border border-white/10 text-white rounded-lg hover:bg-white/5 hover:border-gold-400/30 transition-all duration-300"
            >
              {tNav.contact}
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
