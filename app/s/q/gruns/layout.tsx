import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Your Perfect Vitamin Formula Awaits | Gruns",
  description: "Take the 60-second Gruns quiz and discover your personalized gummy vitamin blend. Crafted to your health goals — start feeling the difference today.",
  icons: { icon: "/lp-images-files-videos-fonts/favicons/q-gruns.svg" },
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

export default function GrunsQuizChappy2Layout({ children }: { children: ReactNode }) {
  return (
    <div className={`${openSans.variable} font-[family-name:var(--font-open-sans)]`}>
      {children}
    </div>
  );
}
