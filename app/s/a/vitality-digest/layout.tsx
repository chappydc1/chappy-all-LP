import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'The Ancient Spice "Blue Zones" Use To Out-Live The West | VitalityDigest',
  description:
    "Bruce Krautz, M.D. reveals the Okinawan spice behind Blue Zone longevity, and how Nutrissa Saffron Gummies bring it to your daily routine.",
};

export default function VitalityDigestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
