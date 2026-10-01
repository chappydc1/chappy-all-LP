import type { Metadata } from "next";
import localFont from "next/font/local";
import "./saphire.css";

const libreBaskerville = localFont({
  src: [
    { path: "../../../../public/lp-images-files-videos-fonts/fonts/google/LibreBaskerville-latin-variable.woff2", weight: "400" },
    { path: "../../../../public/lp-images-files-videos-fonts/fonts/google/LibreBaskerville-latin-variable.woff2", weight: "700" },
  ],
  adjustFontFallback: "Times New Roman",
  variable: "--font-baskerville",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Parents with ADHD Kids Ditching Vyvanse & Concerta After Discovering This Natural Alternative",
  description:
    "Saphire Happy Chews combine saffron extract to support focus, mood, and sleep without the stimulant crash — the natural ADHD alternative 18,000 parents have already switched to.",
  icons: { icon: "/lp-images-files-videos-fonts/favicons/saphire.svg" },
};

export default function SaphireLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${libreBaskerville.variable} bg-white font-montserrat text-[#1c1d1f]`}>
      {children}
    </div>
  );
}
