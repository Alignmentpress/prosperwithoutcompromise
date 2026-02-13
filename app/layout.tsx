import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccessGate from "@/components/AccessGate";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alignment Press | Prosper Without Compromise",
  description:
    "Discover 'Prosper Without Compromise' by Kevin Adou — Faith, Strategy, and the Inner Alignment That Sustains Abundance. A book for conscious builders ready to align purpose with prosperity.",
  keywords: [
    "Prosper Without Compromise",
    "Kevin Adou",
    "faith and business",
    "alignment",
    "abundance",
    "prosperity",
    "personal development",
    "spiritual growth",
  ],
  openGraph: {
    title: "Alignment Press | Prosper Without Compromise by Kevin Adou",
    description:
      "Faith, Strategy, and the Inner Alignment That Sustains Abundance",
    type: "website",
    images: ["/images/book-cover.jpg"],
  },
};

const isComingSoon = process.env.NEXT_PUBLIC_SITE_MODE === "coming-soon";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-navy-950 text-foreground`}
      >
        {isComingSoon ? (
          <main className="min-h-screen">{children}</main>
        ) : (
          <AccessGate>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </AccessGate>
        )}
      </body>
    </html>
  );
}
