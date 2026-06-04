import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "11 Reasons Why This High-Protein Iced Coffee is the #1 Trending Drink for Spring 2026",
  description: "Drinking Javvy Protein Coffee has 11+ life changing benefits",
  icons: { icon: "/favicons/javy.svg" },
};

export default function JavyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-black text-base font-normal bg-white box-border tracking-normal leading-6 min-h-full overflow-hidden border-separate font-filson_pro md:overflow-visible">
      {children}
    </div>
  );
}
