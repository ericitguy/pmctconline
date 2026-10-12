import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pmctconline.com"),
  title: {
    default: "PMCTC — Passion for Mother and Child Training Centre | Vocational Training for Single Mothers in Ghana",
    template: "%s | PMCTC",
  },
  description:
    "Passion for Mother and Child Training Centre (PMCTC) equips single mothers in Ghana with vocational training, emotional support, childcare and faith-based guidance — so mothers and children can thrive.",
  keywords: [
    "Passion for Mother and Child Training Centre",
    "PMCTC Ghana",
    "vocational training for women in Ghana",
    "support for single mothers in Ghana",
    "catering and fashion training Ghana",
    "hairdressing and cosmetology training",
    "women's empowerment Ghana",
    "childcare support for mothers",
    "nonprofit donations Ghana",
  ],
  openGraph: {
    siteName: "PMCTC — Passion for Mother and Child Training Centre",
    type: "website",
    locale: "en_GH",
    images: [{ url: "/photos/pmctc-34.jpg", width: 1280, height: 720, alt: "PMCTC mothers and children" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-ivory font-sans text-charcoal antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-forest focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
