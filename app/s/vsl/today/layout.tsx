import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Natural Blood Sugar Fix Doctors Won't Tell You | Today VSL",
  description: "Over 15,000 Americans have reversed Type 2 Diabetes with this simple home remedy for under $45. Watch the free video and reclaim your health today.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
