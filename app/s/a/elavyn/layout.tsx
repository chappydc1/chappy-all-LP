import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Nephrologist Exposes the $73 Billion Secret the Dialysis Industry Has Been Hiding",
  description:
    "Former chronic kidney disease sufferer's husband and board-certified nephrologist exposes the kidney industry's 'ACE Inhibitor Playbook' conspiracy and the 21-day protocol that reversed his wife's 3 years of climbing creatinine.",
};

export default function ElavynLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}
