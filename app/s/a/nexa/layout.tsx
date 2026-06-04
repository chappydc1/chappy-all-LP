import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/favicons/nexa.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
