import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reclaim Your Energy & Focus After 40 | Spartan",
  description:
    "NMN clinically shown to restore cellular NAD+ levels — reversing the energy, focus, and recovery decline men over 40 can't outwork. Get 50% off today.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
