"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const navLinkKeys = [
  { path: "", key: "home" as const },
  { path: "book", key: "books" as const },
  { path: "resources", key: "resources" as const },
  { path: "academy", key: "academy" as const },
  { path: "coaching", key: "coaching" as const },
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

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-xl border-b border-white/5 pt-[env(safe-area-inset-top)]"
      aria-label="Main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-20">
          <Link href={base} className="flex items-center gap-3 group min-w-0">
            <Logo size="sm" alt={t.common.logoAlt} />
            <span className="font-serif text-xl tracking-wide text-white group-hover:text-gold-400 transition-colors truncate">
              Alignment Press
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 flex-wrap justify-end">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? "text-gold-400 bg-gold-400/10"
                    : "text-gray-300 hover:text-gold-400 hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/coaching`}
              className="px-4 xl:px-5 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 text-sm font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20 whitespace-nowrap"
            >
              {t.nav.bookASession}
            </Link>
            <LanguageSwitcher locale={locale} variant="nav" />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            className="lg:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 -mr-2 text-gray-300 hover:text-gold-400 transition-colors rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400/60"
            aria-expanded={isOpen}
            aria-controls="site-mobile-nav"
            aria-label={t.nav.toggleMenuAria}
          >
            <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
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
        <div
          id="site-mobile-nav"
          className="lg:hidden bg-navy-900/95 backdrop-blur-xl border-b border-white/5 max-h-[min(70vh,calc(100dvh-env(safe-area-inset-top)-5rem))] overflow-y-auto"
        >
          <div className="px-4 py-6 space-y-2 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
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
            <div className="pt-4">
              <Link
                href={`/${locale}/coaching`}
                onClick={() => setIsOpen(false)}
                className="block text-center min-h-[44px] px-5 py-3 leading-normal bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-lg"
              >
                {t.nav.bookASession}
              </Link>
            </div>
            <div className="px-4 py-3 flex justify-center">
              <LanguageSwitcher locale={locale} variant="nav" onNavigate={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
