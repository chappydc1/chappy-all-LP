import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/lp-images-files-videos-fonts/favicons/nexa.svg" },
};

export default function NexaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
