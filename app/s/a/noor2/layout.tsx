import type { Metadata } from "next";
import copy from "./copy.json";

export const metadata: Metadata = {
  title: copy.seo.title,
  description: copy.seo.description,
};

export default function Noor2Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}
