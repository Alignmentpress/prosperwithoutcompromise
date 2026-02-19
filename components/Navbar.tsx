"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const navLinkKeys = [
  { path: "", key: "home" as const },
  { path: "book", key: "books" as const },
  { path: "academy", key: "academy" as const },
  { path: "coaching", key: "coaching" as const },
  { path: "about", key: "about" as const },
  { path: "contact", key: "contact" as const },
] as const;

interface NavbarProps {
  locale: Locale;
}

export default function Navbar({ locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = getTranslations(locale);

  const base = `/${locale}`;
  const navLinks = navLinkKeys.map(({ path, key }) => ({
    href: path ? `${base}/${path}` : base,
    label: t.nav[key],
  }));

  // Switch to other locale, keeping same path (e.g. /en/coaching -> /fr/coaching)
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, "$1") || "";
  const otherLocale: Locale = locale === "en" ? "fr" : "en";
  const switchHref = `/${otherLocale}${pathWithoutLocale}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href={base} className="flex items-center gap-3 group">
            <Logo size="sm" />
            <span className="font-serif text-xl tracking-wide text-white group-hover:text-gold-400 transition-colors">
              Alignment Press
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? "text-gold-400 bg-gold-400/10"
                    : "text-gray-300 hover:text-gold-400 hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={switchHref}
              className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-gold-400 transition-colors"
              aria-label={locale === "en" ? "Switch to French" : "Passer en anglais"}
            >
              {locale === "en" ? "FR" : "EN"}
            </Link>
            <Link
              href={`/${locale}/coaching`}
              className="px-5 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 text-sm font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20"
            >
              {t.nav.bookASession}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-gold-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-navy-900/95 backdrop-blur-xl border-b border-white/5">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  pathname === link.href ? "text-gold-400 bg-gold-400/10" : "text-gray-300 hover:text-gold-400 hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={switchHref}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-400 hover:text-gold-400"
            >
              {locale === "en" ? "FR" : "EN"}
            </Link>
            <div className="pt-4">
              <Link
                href={`/${locale}/coaching`}
                onClick={() => setIsOpen(false)}
                className="block text-center px-5 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-lg"
              >
                {t.nav.bookASession}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
