import React from "react"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata = {
  title: "Get Leg Swelling & Edema Relief for YOUR Type | Nooro",
  description: "Take the 1-minute personalized quiz to get your leg swelling and edema relief plan.",
}

export default function NooroQuizLayout({ children }: { children: ReactNode }): React.JSX.Element {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-100 font-arial">
      {children}
    </div>
  )
}
