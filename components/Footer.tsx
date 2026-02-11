import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-navy-950 font-serif font-bold text-sm">
                  A
                </span>
              </div>
              <span className="font-serif text-xl tracking-wide text-white">
                Alignment Press
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Empowering conscious builders to prosper without compromise.
              Faith, Strategy, and the Inner Alignment That Sustains Abundance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/book", label: "The Book" },
                { href: "/about", label: "About" },
                { href: "/workshops", label: "Workshops" },
                { href: "/resources", label: "Resources" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 text-sm hover:text-gold-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@alignmentpress.com"
                  className="text-gray-400 text-sm hover:text-gold-400 transition-colors"
                >
                  hello@alignmentpress.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Alignment Press. All rights
            reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with purpose. Powered by alignment.
          </p>
        </div>
      </div>
    </footer>
  );
}
