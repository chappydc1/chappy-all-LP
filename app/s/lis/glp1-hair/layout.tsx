import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "10 Reasons Women On GLP-1 Are Beating Hair Loss With This $39 Shampoo",
  description:
    "Nuvara Root Revival Shampoo is the #1 recommended solution for GLP-1 induced hair loss. Clinically proven botanicals. 150-day guarantee.",
  icons: { icon: "/favicons/glp1-hair.svg" },
};

export default function GLP1HairLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
