"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { GATE_STORAGE_KEY } from "@/lib/gate";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const LAUNCH_DATE = new Date("2026-02-18T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    isLive: false,
  };
}

function localeFromPath(pathname: string | null): Locale {
  if (pathname?.startsWith("/fr")) return "fr";
  return "en";
}

export default function CountdownGate() {
  const pathname = usePathname();
  const locale = useMemo(() => localeFromPath(pathname), [pathname]);
  const t = getTranslations(locale);
  const lc = t.leadCapture;
  const cg = t.countdownGate;

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (timeLeft.isLive) return;
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [timeLeft.isLive]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          email,
          source: "launch-gate",
          interest: ["book"],
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(cg.thankYou);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(GATE_STORAGE_KEY, "true");
        }
        setTimeout(() => {
          window.location.href = "/";
        }, 2500);
      } else {
        setStatus("error");
        setMessage(data.error || lc.errorGeneric);
      }
    } catch {
      setStatus("error");
      setMessage(lc.connectionError);
    }
  };

  const box = "border-glow rounded-xl px-6 py-4 bg-white/[0.03] min-w-[80px]";
  const label = "text-gold-400 font-semibold text-2xl sm:text-3xl tabular-nums";
  const sub = "text-gray-500 text-xs uppercase tracking-wider mt-1";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-[200vw] bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto w-full text-center">
        <div className="flex items-center justify-center gap-3 mb-8 min-w-0">
          <Logo size="md" />
          <span className="font-serif text-2xl tracking-wide text-white truncate">Alignment Press</span>
        </div>

        <div className="mb-8">
          <div className="golden-glow inline-block rounded-xl overflow-hidden max-w-full">
            <Image
              src="/images/book-cover.jpg"
              alt="Prosper Without Compromise by Kevin Adou"
              width={220}
              height={290}
              className="rounded-xl max-w-full h-auto"
              priority
            />
          </div>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
          <span className="text-gradient-gold">{t.book.title}</span>
        </h1>
        <p className="text-gray-400 text-base mb-8">{cg.launchLine}</p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className={box}>
            <div className={label}>{String(timeLeft.days).padStart(2, "0")}</div>
            <div className={sub}>{cg.days}</div>
          </div>
          <div className={box}>
            <div className={label}>{String(timeLeft.hours).padStart(2, "0")}</div>
            <div className={sub}>{cg.hours}</div>
          </div>
          <div className={box}>
            <div className={label}>{String(timeLeft.minutes).padStart(2, "0")}</div>
            <div className={sub}>{cg.minutes}</div>
          </div>
          <div className={box}>
            <div className={label}>{String(timeLeft.seconds).padStart(2, "0")}</div>
            <div className={sub}>{cg.seconds}</div>
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">{cg.intro}</p>

        {status === "success" ? (
          <div className="py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 mb-4">
              <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gold-400 font-semibold text-lg">{message}</p>
            <p className="text-gray-500 text-sm mt-1">{cg.redirecting}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder={lc.firstNamePlaceholder}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              autoComplete="given-name"
              className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:border-gold-400 focus:bg-white/[0.07]"
            />
            <input
              type="email"
              placeholder={lc.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:border-gold-400 focus:bg-white/[0.07]"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full min-h-[44px] py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 text-sm shadow-lg shadow-gold-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {cg.subscribing}
                </span>
              ) : (
                cg.getEarlyAccess
              )}
            </button>
            {status === "error" && <p className="text-red-400 text-sm text-center">{message}</p>}
            <p className="text-gray-500 text-xs">{lc.disclaimer}</p>
          </form>
        )}
      </div>
    </div>
  );
}
