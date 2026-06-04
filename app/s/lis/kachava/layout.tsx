import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "9 Reasons People Love This Superfood Shake | Ka'Chava",
  description:
    "Ka'Chava packs 85+ superfoods into one delicious meal replacement shake. Discover why health-conscious people are making the switch. Try it today.",
  icons: { icon: "/favicons/kachava.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
