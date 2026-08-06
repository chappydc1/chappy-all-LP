import type { Metadata } from "next";
import copy from "./copy.json";

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  icons: { icon: copy.meta.faviconPath },
};

export default function NebrooV2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
