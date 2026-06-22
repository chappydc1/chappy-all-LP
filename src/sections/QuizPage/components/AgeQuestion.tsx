import React from "react"
export type AgeQuestionProps = {
  showOptions: boolean
  outerVariantClassName: string
  innerVariantClassName: string
  questionText: string
  emphasizedText: string
  options: string[]
}

export function AgeQuestion(props: AgeQuestionProps): React.JSX.Element {
  return (
    <div className="relative box-border caret-transparent outline-[3px]">
      <div
        className={`box-border caret-transparent outline-[3px] w-full mx-auto px-2.5 md:px-0 ${props.outerVariantClassName}`}
      >
        <div
          className={`box-border caret-transparent outline-[3px] ${props.innerVariantClassName}`}
        >
          {props.showOptions ? (
            <div className="relative box-border caret-transparent outline-[3px]">
              <div className="box-border caret-transparent justify-center outline-[3px]">
                <div className="box-border caret-transparent flex flex-wrap justify-center outline-[3px]">
                  {props.options.map((option, index) => (
                    <div
                      className="box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] pb-2.5"
                      key={`${option}-${index}`}
                    >
                      <label className="text-neutral-950 text-[14.4px] box-border caret-transparent leading-[18.72px] outline-[3px] font-inter">
                        <div className="relative items-center bg-emerald-300 box-border caret-transparent flex h-full outline-[3px] border border-emerald-300 mx-2.5 p-[21.6px] rounded-2xl border-solid">
                          <div className="text-[0px] box-border caret-transparent leading-[0px] min-h-[auto] min-w-[auto] order-2 outline-[3px] ml-5">
                            <span className="relative bg-white shadow-[rgb(152,152,152)_0px_0px_0px_1px] box-border caret-transparent inline-block shrink-0 h-[18px] outline-[3px] w-[18px] rounded-[20px] border-2 border-solid border-white md:h-5 md:w-5"></span>
                          </div>
                          <div className="box-border caret-transparent flex basis-[0%] flex-col grow justify-center min-h-[auto] min-w-[auto] order-1 outline-[3px] text-left overflow-hidden">
                            <div className="text-white text-2xl font-semibold box-border caret-transparent leading-[26.4px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-center text-ellipsis overflow-hidden py-0.5">
                              {option}
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <h4 className="text-neutral-600 text-[22px] box-border caret-transparent leading-[29.7px] outline-[3px] font-inter md:text-[19px] md:leading-[25.65px]">
              {props.questionText}{" "}
              <strong className="text-[22px] font-bold box-border caret-transparent leading-[29.7px] outline-[3px] md:text-[19px] md:leading-[25.65px]">
                {props.emphasizedText}
              </strong>
            </h4>
          )}
        </div>
      </div>
    </div>
  )
}
