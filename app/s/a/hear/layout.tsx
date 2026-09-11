import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiny German Hearing Aid Covered by Insurance | hear.com",
  description:
    "The Horizon IX by hear.com brings AI-powered clarity in a nearly invisible design. Trusted by 540,000+ Americans. Check if your insurance covers it today.",
  icons: { icon: "/lp-images-files-videos-fonts/favicons/hear.svg" },
};

export default function HearLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
