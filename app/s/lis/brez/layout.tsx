import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/lp-images-files-videos-fonts/favicons/brez.svg" },
};

export default function BrezLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
