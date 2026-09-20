import React from "react"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata = {
  title: "Lymphoria Quiz",
  description: "Personalized wellness quiz",
}

export default function LymphoriaQuizLayout({ children }: { children: ReactNode }): React.JSX.Element {
  return (
    <div className="text-neutral-950 text-base not-italic normal-nums font-normal bg-white flex flex-col min-h-screen font-roboto">
      {children}
    </div>
  )
}
