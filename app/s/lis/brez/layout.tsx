import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/favicons/brez.svg" },
};

export default function BrezLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
