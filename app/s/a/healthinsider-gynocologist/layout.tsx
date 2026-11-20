import type { Metadata } from "next";
import copy from "./copy.json";
import "./globals.css";

export const metadata: Metadata = {
  title: copy.seo.title,
  description: copy.seo.description,
  icons: { icon: "/lp-images-files-videos-fonts/favicons/healthinsider-gynocologist.svg" },
};

export default function HealthinsiderGynocologistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
