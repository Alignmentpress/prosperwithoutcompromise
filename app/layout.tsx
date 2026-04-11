import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import "./globals.css";

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
  icons: {
    icon: "/images/Alignment%20-Press%20Logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-navy-950 text-foreground`}
      >
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}
