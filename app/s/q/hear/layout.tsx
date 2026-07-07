import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Your Perfect Hearing Aid in 2 Minutes | hear.com Quiz",
  description: "Take the free hear.com hearing quiz to discover the right hearing aid for your lifestyle. Insurance may cover it — get matched today in just minutes.",
  icons: { icon: "/favicons/q-hear.svg" },
};

export default function HearLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
