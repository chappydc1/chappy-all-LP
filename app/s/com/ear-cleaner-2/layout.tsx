import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Ear Cleaners with Camera of 2026",
  description:
    "Stop cleaning your ears blind. Expert-tested ear cleaners with camera, with scores, pros & cons. Compare the top picks and grab the best deal today.",
  icons: { icon: "/lp-images-files-videos-fonts/favicons/primepicks.svg" },
};

export default function EarCleaner2Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
