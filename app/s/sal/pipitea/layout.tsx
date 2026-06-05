import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipitea — Natural Wellness",
  description: "Discover Pipitea's natural wellness products.",
  icons: { icon: "/favicons/pipitea.svg" },
};

export default function PipiteaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
