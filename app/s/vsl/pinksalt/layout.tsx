import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/lp-images-files-videos-fonts/favicons/pinksalt.svg" },
};

export default function PinksaltLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
