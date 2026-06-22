import React from "react"
type TitleData = { desktop: string; mobile: string[] }

export type QuizTitleProps = {
  variantClassName: string
  isSplitTitle: boolean
  title: TitleData
  subtitle: string
}

export function QuizTitle(props: QuizTitleProps): React.JSX.Element {
  return (
    <div
      className={`relative box-border caret-transparent outline-[3px] ${props.variantClassName}`}
    >
      <div className="box-border caret-transparent outline-[3px] text-center w-full mx-auto px-2.5 md:w-[800px] md:px-0">
        <div className="box-border caret-transparent outline-[3px] pb-[5px]">
          {props.isSplitTitle ? (
            <>
              {props.title.mobile.map((part, i) => (
                <h1
                  key={i}
                  className="text-neutral-950 text-[38px] font-semibold box-border caret-transparent leading-[51.3px] outline-[3px] font-inter md:text-[40px] md:leading-[54px]"
                >
                  <strong className="text-[38px] font-black box-border caret-transparent leading-[51.3px] outline-[3px] md:text-[40px] md:leading-[54px]">
                    {part}
                  </strong>
                </h1>
              ))}
            </>
          ) : (
            <h2 className="text-neutral-950 text-[23px] font-bold box-border caret-transparent leading-[31.05px] outline-[3px] font-inter md:text-[28px] md:leading-[37.8px]">
              <strong className="text-[23px] font-black box-border caret-transparent leading-[31.05px] outline-[3px] md:text-[28px] md:leading-[37.8px]">
                {props.title.desktop}
              </strong>
            </h2>
          )}
          <h5 className="text-zinc-400 text-[11px] box-border caret-transparent leading-[11px] outline-[3px] font-inter md:text-[13px] md:leading-[13px]">
            <br />
          </h5>
          <h5 className="text-zinc-400 text-[11px] box-border caret-transparent leading-[11px] outline-[3px] font-inter md:text-[13px] md:leading-[13px]">
            <span>{props.subtitle}</span>
          </h5>
        </div>
      </div>
    </div>
  )
}
