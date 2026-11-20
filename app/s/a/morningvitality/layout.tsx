import type { Metadata } from "next";
import "./globals.css";
import advData from "./copy.json";

export const metadata: Metadata = {
  title: advData.seo.title,
  description: advData.seo.description,
  icons: { icon: "/lp-images-files-videos-fonts/favicons/morningvitality.svg" },
};

export default function MorningvitalityMorningVitalityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
