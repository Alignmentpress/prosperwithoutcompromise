import Link from "next/link";
import Logo from "@/components/Logo";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const footerLinkKeys = [
  { path: "book", key: "books" as const },
  { path: "academy", key: "academy" as const },
  { path: "coaching", key: "coaching" as const },
  { path: "about", key: "about" as const },
  { path: "contact", key: "contact" as const },
] as const;

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale);
  const base = `/${locale}`;

  const links = footerLinkKeys.map(({ path, key }) => ({
    href: `${base}/${path}`,
    label: t.nav[key],
  }));

  const otherLocale: Locale = locale === "en" ? "fr" : "en";
  const switchHref = `/${otherLocale}`;

  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href={base} className="flex items-center gap-3 mb-4">
              <Logo size="sm" />
              <span className="font-serif text-xl tracking-wide text-white">Alignment Press</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{t.footer.brandDesc}</p>
          </div>

          <div>
            <h4 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
              {t.footer.navigate}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-gold-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={switchHref} className="text-gray-400 text-sm hover:text-gold-400 transition-colors">
                  {locale === "en" ? "FR" : "EN"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
              {t.footer.connect}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href={`${base}/contact`} className="text-gray-400 text-sm hover:text-gold-400 transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <a href="mailto:kevin@alignmentpress.com" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">
                  kevin@alignmentpress.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Alignment Press. {t.footer.copyright}
          </p>
          <p className="text-gray-600 text-xs">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
