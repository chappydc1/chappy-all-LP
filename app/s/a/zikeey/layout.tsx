import type { Metadata } from "next";
import { ZikeeyReadProgressBar } from "./components/ReadProgressBar";
import adv from "./copy.json";

export const metadata: Metadata = {
  title: adv.meta.title,
  description: adv.meta.description,
  icons: { icon: "/favicons/zikeey.svg" },
};

export default function ZikeeyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ZikeeyReadProgressBar />
      {children}
    </>
  );
}
