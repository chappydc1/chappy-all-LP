import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Running Toe Socks of 2026",
  description:
    "Stop running blisters for good. Expert-tested running toe socks with scores, pros & cons. Compare the top picks and grab the best deal today.",
  icons: { icon: "/lp-images-files-videos-fonts/favicons/primepicks.svg" },
};

export default function BestToeSocksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
