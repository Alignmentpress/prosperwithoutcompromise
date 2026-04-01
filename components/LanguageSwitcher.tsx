"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

/** Path after locale prefix, always starting with / or empty (home). */
function pathAfterLocale(pathname: string): string {
  const rest = pathname.replace(/^\/[a-z]{2}(\/|$)/, "$1") || "";
  return rest.startsWith("/") ? rest : rest ? `/${rest}` : "";
}

interface LanguageSwitcherProps {
  locale: Locale;
  variant?: "nav" | "footer";
  onNavigate?: () => void;
}

export default function LanguageSwitcher({ locale, variant = "nav", onNavigate }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const suffix = pathAfterLocale(pathname);

  const hrefFor = (l: Locale) => `/${l}${suffix}`;

  const shellClass =
    variant === "nav"
      ? "inline-flex rounded-lg border border-white/10 bg-navy-900/90 p-0.5 shadow-inner"
      : "inline-flex rounded-md border border-white/10 bg-navy-900/70 p-0.5";

  const linkClass = (active: boolean) =>
    variant === "nav"
      ? active
        ? "min-w-[2.25rem] text-center rounded-md px-2 py-1.5 text-xs font-semibold bg-gold-400/15 text-gold-400 shadow-sm"
        : "min-w-[2.25rem] text-center rounded-md px-2 py-1.5 text-xs font-medium text-gray-400 hover:text-gold-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400/60"
      : active
        ? "min-w-[2rem] text-center rounded px-2 py-1 text-xs font-semibold bg-gold-400/15 text-gold-400"
        : "min-w-[2rem] text-center rounded px-2 py-1 text-xs font-medium text-gray-400 hover:text-gold-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400/60";

  return (
    <div
      role="group"
      aria-label={locale === "en" ? "Choose language" : "Choisir la langue"}
      className={shellClass}
    >
      {locales.map((l) => (
        <Link
          key={l}
          href={hrefFor(l)}
          hrefLang={l}
          className={linkClass(locale === l)}
          aria-current={locale === l ? "page" : undefined}
          onClick={onNavigate}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
