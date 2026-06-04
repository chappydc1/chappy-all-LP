import { Open_Sans } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Find Your Perfect Health Routine | Chappy",
  description: "Take the 2-minute Chappy quiz and get personalized supplement recommendations built around your energy, gut, and lifestyle goals. Start feeling better today.",
};

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-open-sans",
});

export default function QuizChappyLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${openSans.variable} font-[family-name:var(--font-open-sans)]`}>
      {children}
    </div>
  );
}
