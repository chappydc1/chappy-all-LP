import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foundation That Feels Like Nothing | Jones Road Beauty",
  description: "What The Foundation gives you flawless, natural coverage for every skin tone — blends like skincare, 11,000+ 5-star reviews. Find your shade today.",
  icons: { icon: "/favicons/jones.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
