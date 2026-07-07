import type { Metadata } from "next";
import adv from "./copy.json";

export const metadata: Metadata = {
  title: adv.meta.title,
  description: adv.meta.description,
  icons: { icon: "/favicons/jevawell.svg" },
};

export default function JevawellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
