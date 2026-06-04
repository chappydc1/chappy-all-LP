import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anima Project",
  description: "VSL Landing Page",
  icons: { icon: "/favicons/oprah.svg" },
};

export default function OprahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
