import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Spent 90 Days Investigating Lora Capsaicin Power Softgels to See If They Actually Work. Here's What I Found.",
  description: "Nebroo CIC hearing aids sit completely inside your ear canal — discreet, powerful, and now 70% off. Reclaim clear hearing and stop missing out. Order today.",
  icons: { icon: "/favicons/nebroo-v1.svg" },
};

export default function NebrooV1Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
