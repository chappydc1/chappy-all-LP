import type { Metadata } from "next";
import copy from "./copy.json";
import media from "./media.json";

export const metadata: Metadata = {
  title: copy.seo.title,
  description: copy.seo.description,
  icons: { icon: media.seo.favicon },
};

export default function NebrooV2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
