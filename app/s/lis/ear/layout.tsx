import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "11 Reasons Why This Ear Wax Camera Cleaner Is Replacing Cotton Swabs in 2026",
  description:
    "See exactly what you're cleaning with the AURELUNE 1296P HD Ear Cleaner with Camera. 11+ reasons to ditch cotton swabs for good.",
  icons: { icon: "/lp-images-files-videos-fonts/favicons/ear.svg" },
};

export default function EarCleanerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-black text-base font-normal bg-white box-border tracking-normal leading-6 min-h-full overflow-hidden border-separate font-filson_pro md:overflow-visible">
      {children}
    </div>
  );
}
