import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Pillows for Side Sleepers of 2026",
  description:
    "Waking up with a stiff neck, sore shoulder or numb arm? We tested the top side sleeper pillows. Expert-tested picks with scores, pros & cons. See our #1 pick.",
  icons: { icon: "/lp-images-files-videos-fonts/favicons/primepicks.svg" },
};

export default function Sleeping2Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
