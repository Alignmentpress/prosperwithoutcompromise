import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

const localePrefix = new RegExp(`^/(${locales.join("|")})(/|$)`);

function getPreferredLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && locales.includes(cookie as Locale)) return cookie as Locale;
  const accept = request.headers.get("accept-language");
  if (accept?.toLowerCase().startsWith("fr")) return "fr";
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip API, static files, and Next.js internals
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.includes(".") ||
    pathname.startsWith("/images/")
  ) {
    return NextResponse.next();
  }

  const hasLocale = localePrefix.test(pathname);

  if (hasLocale) {
    return NextResponse.next();
  }

  // Root: redirect to preferred locale
  if (pathname === "/") {
    const locale = getPreferredLocale(request);
    const res = NextResponse.redirect(new URL(`/${locale}`, request.url));
    res.cookies.set("NEXT_LOCALE", locale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }

  // Legacy routes without locale: redirect to /locale/...
  const segment = pathname.split("/")[1];
  const knownPaths = ["book", "about", "workshops", "resources", "contact", "academy", "coaching"];
  if (knownPaths.includes(segment)) {
    const locale = getPreferredLocale(request);
    // /workshops -> /coaching
    const targetPath = segment === "workshops" ? pathname.replace("/workshops", "/coaching") : pathname;
    return NextResponse.redirect(new URL(`/${locale}${targetPath}`, request.url));
  }

  // Legacy /locale/workshops -> /locale/coaching
  const pathWithLocale = pathname.match(/^\/(en|fr)\/workshops(\/|$)/);
  if (pathWithLocale) {
    const locale = pathWithLocale[1];
    const rest = pathname.slice(pathWithLocale[0].length);
    return NextResponse.redirect(new URL(`/${locale}/coaching${rest}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
