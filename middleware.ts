import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const siteMode = process.env.NEXT_PUBLIC_SITE_MODE;

  // If in coming-soon mode, redirect all non-root, non-api, non-asset routes to home
  if (siteMode === "coming-soon") {
    const { pathname } = request.nextUrl;

    // Allow root, API routes, static files, and Next.js internals
    if (
      pathname === "/" ||
      pathname.startsWith("/api") ||
      pathname.startsWith("/_next") ||
      pathname.startsWith("/images") ||
      pathname.includes(".")
    ) {
      return NextResponse.next();
    }

    // Redirect all other routes to the coming soon page (root)
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
