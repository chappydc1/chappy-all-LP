import type { Metadata } from "next";
import { ReadProgressBar } from "./components/ReadProgressBar";
import adv from "./adv.json";

export const metadata: Metadata = {
  title: adv.meta.title,
  description: adv.meta.description,
};

export default function ZikeeyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReadProgressBar />
      {children}
    </>
  );
}
