import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Healthy Blood Sugar Naturally | GlycoFlush",
  description:
    "GlycoFlush helps flush out blood sugar spikes and support healthy glucose levels. Claim your discounted supply today while stocks last.",
  icons: { icon: "/lp-images-files-videos-fonts/favicons/glycoflush.svg" },
};

export default function GlycoflushLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
