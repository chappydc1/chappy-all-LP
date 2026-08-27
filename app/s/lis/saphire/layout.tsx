import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./saphire.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Parents with ADHD Kids Ditching Vyvanse & Concerta After Discovering This Natural Alternative",
  description:
    "Saphire Happy Chews combine saffron extract to support focus, mood, and sleep without the stimulant crash — the natural ADHD alternative 18,000 parents have already switched to.",
  icons: { icon: "/favicons/saphire.svg" },
};

export default function SaphireLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${libreBaskerville.variable} bg-white font-montserrat text-[#1c1d1f]`}>
      {children}
    </div>
  );
}
