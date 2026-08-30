import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Domine, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import copy from "./copy.json";

const domine = Domine({
  subsets: ["latin"],
  variable: "--font-domine",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
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
