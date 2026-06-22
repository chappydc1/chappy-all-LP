import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TryBello Hair Helper Spray | Dr. Yolanda Holmes",
  description:
    "Board-certified dermatologist reveals the real cause of female hair loss after 40 — and the 60-second daily ritual to fix it.",
};

export default function TrybelloLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
