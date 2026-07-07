import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/favicons/feals.svg" },
};

export default function FealsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
