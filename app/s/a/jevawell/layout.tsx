import type { Metadata } from "next";
import adv from "./copy.json";

export const metadata: Metadata = {
  title: adv.seo.title,
  description: adv.seo.description,
  icons: { icon: "/lp-images-files-videos-fonts/favicons/jevawell.svg" },
};

export default function JevawellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
