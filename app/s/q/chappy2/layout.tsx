import { Open_Sans } from "next/font/google";
import type { ReactNode } from "react";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-open-sans",
});

export default function QuizChappy2Layout({ children }: { children: ReactNode }) {
  return (
    <div className={`${openSans.variable} font-[family-name:var(--font-open-sans)]`}>
      {children}
    </div>
  );
}
