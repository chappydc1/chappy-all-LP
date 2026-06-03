import type { Metadata } from "next";
import adv from "./adv.json";

export const metadata: Metadata = {
  title: adv.meta.title,
  description: adv.meta.description,
};

export default function NebrooLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
