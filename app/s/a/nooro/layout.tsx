import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nooro 3-in-1 Leg Massager | Dr. Jeremy Campbell",
  description:
    "Top Doctor of Physical Therapy reveals the best way to relieve edema in your legs and feet fast.",
};

export default function NooroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
