import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinically Designed Neck Pain Relief | Nuzzle Neck Pain",
  description:
    "Meet Nuzzle — the clinically designed device that targets neck, shoulder, and back pain at the source. Feel relief fast and reclaim your comfort. Try it today.",
  icons: { icon: "/favicons/nuz-neck-pain.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
