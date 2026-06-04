import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Healthy Blood Sugar Naturally | GlycoFlush",
  description:
    "GlycoFlush helps flush out blood sugar spikes and support healthy glucose levels. Claim your discounted supply today while stocks last.",
  icons: { icon: "/favicons/glycoflush.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
