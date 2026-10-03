import type { Metadata } from "next";
import { ZikeeyReadProgressBar } from "./components/ZikeeyReadProgressBar";
import adv from "./copy.json";

export const metadata: Metadata = {
  title: adv.seo.title,
  description: adv.seo.description,
  icons: { icon: "/lp-images-files-videos-fonts/favicons/zikeey.svg" },
};

export default function ZikeeyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ZikeeyReadProgressBar />
      {children}
    </>
  );
}
