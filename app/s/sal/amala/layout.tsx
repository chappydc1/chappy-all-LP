import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "PrimeCell H2 — Cellular Energy & Anti-Aging Support | Amala",
  description:
    "PrimeCell H2 molecular hydrogen tablets help restore cellular balance, support energy production, and defend against oxidative stress. Trusted by 45,000+ customers.",
  icons: { icon: "/lp-images-files-videos-fonts/favicons/amala.svg" },
};

const libreFranklin = localFont({
  src: "../../../../public/lp-images-files-videos-fonts/fonts/google/LibreFranklin-latin-variable.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-libre-franklin",
});

const poppins = localFont({
  src: [
    { path: "../../../../public/lp-images-files-videos-fonts/fonts/google/Poppins-400-latin.woff2", weight: "400" },
    { path: "../../../../public/lp-images-files-videos-fonts/fonts/google/Poppins-500-latin.woff2", weight: "500" },
    { path: "../../../../public/lp-images-files-videos-fonts/fonts/google/Poppins-600-latin.woff2", weight: "600" },
    { path: "../../../../public/lp-images-files-videos-fonts/fonts/google/Poppins-700-latin.woff2", weight: "700" },
  ],
  display: "swap",
  variable: "--font-poppins",
});

export default function AmalaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${libreFranklin.className} ${libreFranklin.variable} ${poppins.variable}`}>
      {children}
    </div>
  );
}
