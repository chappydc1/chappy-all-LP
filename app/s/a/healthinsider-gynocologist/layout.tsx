import type { Metadata } from "next";
import copy from "./copy.json";
import "./globals.css";

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
