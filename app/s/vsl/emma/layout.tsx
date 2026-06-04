import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emma — Empty Your Bowels Like Clockwork",
  description:
    "Top NYC Gut Doctor reveals a simple once-daily ritual for complete bowel elimination, reduced bloating, and a trim waistline.",
  icons: { icon: "/favicons/emma.svg" },
};

export default function EmmaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
