import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlycoCept – Reverse Type 2 Diabetes Naturally",
  description:
    "Harvard-trained physician Dr. William Li reveals the natural honey blend helping thousands reverse type 2 diabetes in 21 days.",
};

export default function DiabetesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
