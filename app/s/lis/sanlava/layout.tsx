import type { Metadata } from "next";
import "./sanlava.css";

export const metadata: Metadata = {
  title: "10 Reasons Why This Metabolic Switch Breakthrough Is Changing How Women Over 45 Take Back Control",
  description: "Discover how Sanlava's 7-in-1 Berberine Complex helps women over 45 restore blood sugar balance, end cravings, and reclaim their energy.",
};

export default function SanlavaLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className="relative text-zinc-900 text-[13px] font-normal bg-white font-muli md:text-base">
      {children}
    </div>
  );
}
