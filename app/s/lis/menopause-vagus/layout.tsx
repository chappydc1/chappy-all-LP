import type { Metadata } from "next";
import "./globals.css";
import copy from "./copy.json";

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  icons: { icon: "/favicons/lora.svg" },
};

export default function MenoLayout({
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
