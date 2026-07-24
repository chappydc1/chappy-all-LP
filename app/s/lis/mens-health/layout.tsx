import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "These Super Foods are to Boost Penis Growth!",
  description:
    "Ultimapeak Performance Gummies combine Shilajit, Ashwagandha, Maca, L-Arginine, and Ginger Root to support testosterone, blood circulation, and men's performance.",
  icons: { icon: "/favicons/mens-health.svg" },
};

export default function MensHealthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative text-zinc-900 text-sm not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[22.4px] list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-figtree md:text-base md:leading-[25.6px]">
      {children}
    </div>
  );
}
