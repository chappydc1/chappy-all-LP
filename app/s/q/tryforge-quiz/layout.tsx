import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Take This 1-Minute Quiz to Claim Your Discount! | Forge",
}

export default function TryforgeQuizLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return <>{children}</>
}
