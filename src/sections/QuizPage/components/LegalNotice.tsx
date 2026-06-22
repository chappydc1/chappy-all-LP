import React from "react"
type Legal = {
  intro: string
  action: string
  connector: string
  terms: { label: string; url: string }
  privacy: { label: string; url: string }
  reviewText: string
}

export function LegalNotice({ legal }: { legal: Legal }): React.JSX.Element {
  return (
    <div className="relative box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px] text-center w-full mx-auto px-2.5 md:w-[800px] md:px-0">
        <div className="box-border caret-transparent outline-[3px] pt-[5px] pb-5">
          <p className="text-neutral-950 box-border caret-transparent leading-[21.6px] outline-[3px] my-4 font-inter">
            {legal.intro}
            <strong className="font-bold box-border caret-transparent outline-[3px]">
              {legal.action}
            </strong>
            {legal.connector}
            <a href={legal.terms.url} className="text-black box-border caret-transparent outline-[3px]">
              <u className="box-border caret-transparent outline-[3px] underline">
                <strong className="font-bold box-border caret-transparent outline-[3px]">
                  {legal.terms.label}
                </strong>
              </u>
            </a>
            {" | "}
            <a href={legal.privacy.url} className="text-black box-border caret-transparent outline-[3px]">
              <u className="box-border caret-transparent outline-[3px] underline">
                <strong className="font-bold box-border caret-transparent outline-[3px]">
                  {legal.privacy.label}
                </strong>
              </u>
            </a>
          </p>
          <p className="text-neutral-950 box-border caret-transparent leading-[21.6px] outline-[3px] my-4 font-inter">
            {legal.reviewText}
          </p>
        </div>
      </div>
    </div>
  )
}
