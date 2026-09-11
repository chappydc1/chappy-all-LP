import type { Metadata } from "next";
import adv from "./copy.json";

export const metadata: Metadata = {
  title: adv.meta.title,
  description: adv.meta.description,
  icons: { icon: "/lp-images-files-videos-fonts/favicons/nebroo.svg" },
};

export default function NebrooLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
