import React from "react"
import { ContinueButton } from "@/sections/StickyFooter/components/ContinueButton"

type AdvContent = { continueButton: string }

export function Footer({ content }: { content: AdvContent }): React.JSX.Element {
  return (
    <footer className="relative box-border caret-transparent outline-[3px] text-center w-full">
      <div className="box-border caret-transparent hidden outline-[3px]">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent outline-[3px]">
            <div className="relative box-border caret-transparent basis-0 grow max-w-full outline-[3px]">
              <div className="box-border caret-transparent outline-[3px] w-full mx-auto px-2.5 md:w-[1200px] md:px-0">
                <ContinueButton label={content.continueButton} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
