import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hike Footwear — HF Shade Barefoot Shoes",
  description:
    "Why Americans Over 50 Are Switching to These Pain-Relieving Barefoot Shoes",
};

export default function HikeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-zinc-800 text-xl font-normal bg-white font-barlow">
      {children}
    </div>
  );
}
