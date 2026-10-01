import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Wallet Trackers of 2026",
  description:
    "Find the slimmest, longest-lasting wallet tracker. Expert-tested picks with scores, pros & cons. Compare top options and grab the best deal today.",
  icons: { icon: "/lp-images-files-videos-fonts/favicons/primepicks.svg" },
};

export default function PrimepicksV2Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
