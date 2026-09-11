import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/lp-images-files-videos-fonts/favicons/feals.svg" },
};

export default function FealsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
