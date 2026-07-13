import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Ancient Spice \"Blue Zones\" Use To Out-Live The West",
  description: "Top MD reveals the Okinawan spice behind Blue Zone longevity and how Nutrissa Saffron Gummies bring it to your daily routine.",
  icons: { icon: "/favicons/vitalitydigest.svg" },
};

export default function VitalitydigestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
