import Link from "next/link"

import type { AdvContent } from "@/sections/ForgeQuizPage/types"

export type ConsentTextProps = {
  content: AdvContent["consent"]
}

export const ConsentText = ({ content }: ConsentTextProps) => {
  return (
    <div className="relative box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px] text-center w-[min(400px,100%)] mx-auto px-2.5 md:px-0">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent outline-[3px] pt-2.5">
            <h5 className="text-zinc-400 text-[11px] box-border caret-transparent leading-[11px] outline-[3px] md:text-[13px] md:leading-[13px]">
              {content.prefix}
              <Link
                href={content.termsHref}
                className="text-blue-700 text-[11px] box-border caret-transparent leading-[11px] outline-[3px] underline md:text-[13px] md:leading-[13px]"
              >
                {content.termsLabel}
              </Link>
              {content.middle}
              <Link
                href={content.privacyHref}
                className="text-blue-700 text-[11px] box-border caret-transparent leading-[11px] outline-[3px] underline md:text-[13px] md:leading-[13px]"
              >
                {content.privacyLabel}
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}
