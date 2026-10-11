import type { Metadata, Viewport } from "next";
import {
  Fraunces,
  Inter,
  Noto_Sans_Devanagari,
  Noto_Sans_Gujarati,
  Noto_Serif_Devanagari,
  Noto_Serif_Gujarati,
} from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const devaSans = Noto_Sans_Devanagari({ subsets: ["devanagari"], weight: ["400", "500", "600"], variable: "--font-deva-sans", display: "swap" });
const devaSerif = Noto_Serif_Devanagari({ subsets: ["devanagari"], weight: ["500", "600"], variable: "--font-deva-serif", display: "swap" });
const gujSans = Noto_Sans_Gujarati({ subsets: ["gujarati"], weight: ["400", "500", "600"], variable: "--font-guj-sans", display: "swap" });
const gujSerif = Noto_Serif_Gujarati({ subsets: ["gujarati"], weight: ["500", "600"], variable: "--font-guj-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
};

export const viewport: Viewport = { themeColor: "#7B4A12" };

const fonts = [sans, display, devaSans, devaSerif, gujSans, gujSerif].map((f) => f.variable).join(" ");

// Each language page sets its own lang on <main>; the document default is English.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={fonts}>
      <body>{children}</body>
    </html>
  );
}
