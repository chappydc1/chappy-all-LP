import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restore Energy, Focus & Metabolism in 2025 | Rosabella",
  description:
    "Rosabella Moringa naturally lowers cortisol to fight fatigue, brain fog, and slow metabolism. Join thousands of women feeling the difference. Get 50% off today.",
  icons: { icon: "/favicons/rosabella.svg" },
};

export default function RosabellaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
