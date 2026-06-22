import React from "react"
import { DesktopHeader } from "@/sections/Header/components/DesktopHeader"

type Media = {
  logo: { src: string; alt: string }
  menuIcon: { src: string; alt: string }
}

export function Header({ media }: { media: Media }): React.JSX.Element {
  return (
    <header className="sticky bg-white box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] z-[6] top-0">
      <DesktopHeader media={media} />
    </header>
  )
}
