import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Near-Invisible In-Canal Hearing Aids, 70% Off | Nebroo",
  description: "Nebroo CIC hearing aids sit completely inside your ear canal — discreet, powerful, and now 70% off. Reclaim clear hearing and stop missing out. Order today.",
  icons: { icon: "/favicons/nebroo-v1.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
