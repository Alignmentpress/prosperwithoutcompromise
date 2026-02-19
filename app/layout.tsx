import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
  title: "Alignment Press | Prosper Without Compromise",
  description:
    "Discover 'Prosper Without Compromise' by Kevin Adou — Faith, Strategy, and the Inner Alignment That Sustains Abundance.",
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
        {children}
      </body>
    </html>
  );
}
