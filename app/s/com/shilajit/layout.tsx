import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/favicons/shilajit.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
