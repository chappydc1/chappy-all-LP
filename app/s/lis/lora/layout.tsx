import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "6 Reasons Why Grüns Is Your Gut's New Bestie",
  description:
    "Your gut is like your second brain. Grüns helps it thrive with 60+ real, nutrient-dense ingredients in a fun-sized snack pack of daily gummies.",
  icons: { icon: "/favicons/gruns.svg" },
};

export default function GrunsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-black text-xl not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-8 list-outside list-disc outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-work_sans">
      {children}
    </div>
  );
}
