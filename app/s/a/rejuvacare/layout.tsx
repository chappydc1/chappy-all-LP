import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rejuvacare — Natural Joint & Mobility Relief That Works",
  description:
    "Rejuvacare targets the root cause of joint pain and stiffness with a clinically backed formula. Thousands report moving freely again. Try it risk-free today.",
};

export default function RejuvacareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
