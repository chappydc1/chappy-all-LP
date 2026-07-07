import type { Metadata } from "next";
import copy from "./copy.json";
import "./globals.css";

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  icons: { icon: "/favicons/healthinsider-gynocologist.svg" },
};

export default function HealthinsiderGynocologistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
