import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import copy from "./copy.json";

const domine = localFont({
  src: "../../../../public/lp-images-files-videos-fonts/fonts/google/Domine-latin-variable.woff2",
  weight: "400 700",
  adjustFontFallback: "Times New Roman",
  variable: "--font-domine",
  display: "swap",
});

const playfairDisplay = localFont({
  src: "../../../../public/lp-images-files-videos-fonts/fonts/google/PlayfairDisplay-latin-variable.woff2",
  weight: "400 900",
  adjustFontFallback: "Times New Roman",
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = localFont({
  src: "../../../../public/lp-images-files-videos-fonts/fonts/google/Montserrat-latin-variable.woff2",
  weight: "100 900",
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: copy.seo.title,
  description: copy.seo.description,
};

export default function DailyHealthLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${domine.variable} ${playfairDisplay.variable} ${montserrat.variable} bg-gray-50 text-zinc-800 overflow-x-hidden`}
    >
      {children}
    </div>
  );
}
