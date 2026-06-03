import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sciatic Nerve Pain for Dummies: Why It Happens (And What May Help)",
  description: "Top MD reveals why sciatic nerve pain persists and what may actually provide relief.",
};

export default function MorningVitalityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
