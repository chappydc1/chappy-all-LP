import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/favicons/nexa.svg" },
};

export default function NexaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
