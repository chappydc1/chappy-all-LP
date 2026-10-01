import localFont from "next/font/local";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Find Your Perfect Health Routine | Chappy",
  description: "Take the 2-minute Chappy quiz and get personalized supplement recommendations built around your energy, gut, and lifestyle goals. Start feeling better today.",
  icons: { icon: "/lp-images-files-videos-fonts/favicons/chappy.svg" },
};

const openSans = localFont({
  src: [
    { path: "../../../../public/lp-images-files-videos-fonts/fonts/google/OpenSans-latin-variable.woff2", weight: "400" },
    { path: "../../../../public/lp-images-files-videos-fonts/fonts/google/OpenSans-latin-variable.woff2", weight: "600" },
    { path: "../../../../public/lp-images-files-videos-fonts/fonts/google/OpenSans-latin-variable.woff2", weight: "700" },
    { path: "../../../../public/lp-images-files-videos-fonts/fonts/google/OpenSans-latin-variable.woff2", weight: "800" },
  ],
  display: "swap",
  variable: "--font-open-sans",
});

export default function ChappyQuizChappyLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${openSans.variable} font-[family-name:var(--font-open-sans)]`}>
      {children}
    </div>
  );
}
