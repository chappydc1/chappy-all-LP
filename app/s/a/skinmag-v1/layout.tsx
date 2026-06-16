import type { ReactNode } from "react";

export const metadata = {
  title: "The Skin Magazine",
  description: "Skincare discoveries for women who want real results.",
};

export default function SkinmagLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
