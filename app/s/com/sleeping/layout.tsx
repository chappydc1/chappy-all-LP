import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/lp-images-files-videos-fonts/favicons/sleeping.svg" },
};

export default function SleepingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
