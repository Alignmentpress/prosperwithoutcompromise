import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

const localePrefix = new RegExp(`^/(${locales.join("|")})(/|$)`);

function getPreferredLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && locales.includes(cookie as Locale)) return cookie as Locale;
  const accept = request.headers.get("accept-language");
  if (accept?.toLowerCase().startsWith("fr")) return "fr";
  return defaultLocale;
}

function adminEmails(): string[] {
  const raw = process.env.CMS_ADMIN_EMAILS ?? "";
  return raw
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

function isCmsAdmin(email: string | undefined): boolean {
  const list = adminEmails();
  if (!list.length) return false;
  return Boolean(email && list.includes(email.trim().toLowerCase()));
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.includes(".") ||
    pathname.startsWith("/images/")
  ) {
    return NextResponse.next();
  }

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  let userEmail: string | undefined;

  if (url && anon) {
    const supabase = createServerClient(url, anon, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        },
      },
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
      if (!user) {
        const redirect = NextResponse.redirect(new URL("/admin/login", request.url));
        response.cookies.getAll().forEach((c) => redirect.cookies.set(c.name, c.value));
        return redirect;
      }
      if (!isCmsAdmin(user.email)) {
        const redirect = NextResponse.redirect(new URL("/admin/login?error=forbidden", request.url));
        response.cookies.getAll().forEach((c) => redirect.cookies.set(c.name, c.value));
        return redirect;
      }
    }

    if (pathname === "/admin/login" && user && isCmsAdmin(user.email)) {
      const redirect = NextResponse.redirect(new URL("/admin", request.url));
      response.cookies.getAll().forEach((c) => redirect.cookies.set(c.name, c.value));
      return redirect;
    }
  } else if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  const hasLocale = localePrefix.test(pathname);

  function copyCookiesTo(dest: NextResponse) {
    response.cookies.getAll().forEach((c) => dest.cookies.set(c.name, c.value));
  }

  if (hasLocale) {
    return response;
  }

  if (pathname === "/") {
    const locale = getPreferredLocale(request);
    const redirect = NextResponse.redirect(new URL(`/${locale}`, request.url));
    copyCookiesTo(redirect);
    redirect.cookies.set("NEXT_LOCALE", locale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return redirect;
  }

  const segment = pathname.split("/")[1];
  const knownPaths = ["book", "about", "workshops", "resources", "contact", "academy", "coaching"];
  if (knownPaths.includes(segment)) {
    const locale = getPreferredLocale(request);
    const targetPath = segment === "workshops" ? pathname.replace("/workshops", "/coaching") : pathname;
    const redirect = NextResponse.redirect(new URL(`/${locale}${targetPath}`, request.url));
    copyCookiesTo(redirect);
    return redirect;
  }

  const pathWithLocale = pathname.match(/^\/(en|fr)\/workshops(\/|$)/);
  if (pathWithLocale) {
    const loc = pathWithLocale[1];
    const rest = pathname.slice(pathWithLocale[0].length);
    const redirect = NextResponse.redirect(new URL(`/${loc}/coaching${rest}`, request.url));
    copyCookiesTo(redirect);
    return redirect;
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
