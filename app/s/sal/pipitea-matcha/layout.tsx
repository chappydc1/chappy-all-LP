import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pipitea Matcha — Natural Wellness",
  description: "Discover Pipitea's matcha wellness products.",
  icons: { icon: "/favicons/pipitea-matcha.svg" },
}

export default function PipiteaMatchaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
