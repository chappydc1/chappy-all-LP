import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";

export const metadata: Metadata = {
  title: "PrimeCell H2 — Cellular Energy & Anti-Aging Support | Amala",
  description:
    "PrimeCell H2 molecular hydrogen tablets help restore cellular balance, support energy production, and defend against oxidative stress. Trusted by 45,000+ customers.",
};

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function AmalaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={libreFranklin.className}>
      {children}
    </div>
  );
}
