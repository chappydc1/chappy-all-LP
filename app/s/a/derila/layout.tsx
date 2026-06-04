import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wake Up Refreshed With No Tension Headaches | Derila",
  description:
    "Derila's memory foam pillow is designed for over-50s to sleep deeper, stop restless nights, and wake pain-free every morning. Try it risk-free today.",
  icons: { icon: "/favicons/derila.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
