import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Your Perfect Vitamin Formula Awaits | Gruns",
  description: "Take the 60-second Gruns quiz and discover your personalized gummy vitamin blend. Crafted to your health goals — start feeling the difference today.",
  icons: { icon: "/favicons/q-gruns.svg" },
};

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
