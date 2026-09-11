import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/lp-images-files-videos-fonts/favicons/getokinawatonic.svg" },
};

export default function GetokinawatonicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
