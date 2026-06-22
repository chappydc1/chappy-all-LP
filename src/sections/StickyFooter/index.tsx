import React from "react"
import { Footer } from "@/sections/StickyFooter/components/Footer"

type AdvContent = { continueButton: string }

export function StickyFooter({ content }: { content: AdvContent }): React.JSX.Element {
  return (
    <div className="sticky bg-white border-t-neutral-900/10 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] z-[999] border-b-white border-x-white border-t bottom-0">
      <Footer content={content} />
    </div>
  )
}
