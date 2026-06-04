import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steady Blood Sugar, Fewer Cravings | Today",
  description:
    "Discover the simple daily habit adults are using to support balanced blood sugar and steadier energy. Try Today's blood sugar supplement now.",
  icons: { icon: "/favicons/a-today.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
