import React from "react";

export type QuizStepOption = {
  label: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  imageSizes?: string;
  emoji?: string;
  buttonClassName: string;
  contentClassName: string;
  imageClassName?: string;
  labelClassName: string;
  showCheckbox?: boolean;
};

export type QuizStepProps = {
  rootVariant: string;
  progressStep: number;
  headerClassName: string;
  headerContent: React.ReactNode;
  subheaderContent?: React.ReactNode;
  subheaderClassName?: string;
  showHeaderSpacer?: boolean;
  headerSpacerClassName?: string;
  options?: QuizStepOption[];
  optionsWrapperClassName?: string;
  bottomContent?: React.ReactNode;
  footerClassName: string;
  footerInnerClassName: string;
  showTrustpilot?: boolean;
  showBackButton?: boolean;
  ctaClassName: string;
  ctaTextClassName: string;
  ctaText: string;
  skipClassName: string;
  skipTextClassName: string;
  skipHref: string;
  skipText: string;
  selectedOptionIndex?: number;
  onOptionSelect?: (index: number) => void;
  onContinue?: () => void;
  isActive?: boolean;
};

export const QuizStep = (props: QuizStepProps) => {
  if (props.isActive === false) return null;
  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const isFirstVariant = props.rootVariant === "min-h-[auto] pb-24";
  const hasSelection = props.selectedOptionIndex !== undefined;
  const canContinue = !props.options || props.options.length === 0 || hasSelection;

  return (
    <div
      className={`items-stretch box-border caret-transparent gap-x-6 flex flex-col h-auto justify-start max-w-full min-w-full outline-[3px] gap-y-6 text-center w-full mx-auto pt-20 md:gap-x-8 md:h-[1000px] md:max-w-[520px] md:min-h-[1000px] md:min-w-[520px] md:gap-y-8 md:pt-32 md:pb-8 ${props.rootVariant}`}
    >
      <div
        className={
          isFirstVariant
            ? "items-stretch box-border caret-transparent gap-x-4 flex flex-col max-w-full outline-[3px] gap-y-4 w-full mx-auto md:gap-x-6 md:max-w-[480px] md:gap-y-6 min-h-[auto] min-w-[auto]"
            : "items-stretch box-border caret-transparent gap-x-4 flex flex-col max-w-full outline-[3px] gap-y-4 w-full mx-auto md:gap-x-6 md:max-w-[480px] md:gap-y-6"
        }
      >
        <div
          className={
            isFirstVariant
              ? "items-center box-border caret-transparent flex justify-center max-w-[90%] outline-[3px] mx-auto md:max-w-none md:mx-0 min-h-[auto] min-w-[auto]"
              : "items-center box-border caret-transparent flex justify-center max-w-[90%] outline-[3px] mx-auto md:max-w-none md:mx-0"
          }
        >
          <div
            className={
              isFirstVariant
                ? "relative text-white text-[9.6px] font-medium items-center bg-indigo-900 box-border caret-transparent flex h-2.5 justify-center leading-[9.6px] outline-[3px] w-2.5 z-[1] border border-indigo-900 -mx-1 rounded-[40px] border-solid md:text-[11.2px] md:h-3.5 md:leading-[16.8px] md:w-3.5 md:border-2 min-h-[auto] min-w-[auto] shrink-0"
                : "relative text-white text-[9.6px] font-medium items-center bg-indigo-900 box-border caret-transparent flex h-2.5 justify-center leading-[9.6px] outline-[3px] w-2.5 z-[1] border border-indigo-900 -mx-1 rounded-[40px] border-solid md:text-[11.2px] md:h-3.5 md:leading-[16.8px] md:w-3.5 md:border-2 shrink-0"
            }
          />

          {steps.map((step) => (
            <React.Fragment key={step}>
              <div
                className={
                  step <= props.progressStep
                    ? isFirstVariant
                      ? "box-border caret-transparent basis-[0%] grow h-[5px] outline-[3px] bg-indigo-900 min-h-[auto] min-w-[auto]"
                      : "box-border caret-transparent basis-[0%] grow h-[5px] outline-[3px] bg-indigo-900"
                    : isFirstVariant
                      ? "bg-indigo-950/10 box-border caret-transparent basis-[0%] grow h-[5px] outline-[3px] min-h-[auto] min-w-[auto]"
                      : "bg-indigo-950/10 box-border caret-transparent basis-[0%] grow h-[5px] outline-[3px]"
                }
              />
              <div
                className={
                  step <= props.progressStep
                    ? isFirstVariant
                      ? "relative text-[9.6px] font-medium items-center box-border caret-transparent flex h-4 justify-center leading-[9.6px] outline-[3px] w-4 z-[1] border border-indigo-900 -mx-1 rounded-[40px] border-solid md:text-[11.2px] md:h-[18px] md:leading-[16.8px] md:w-[18px] md:border-2 text-white bg-indigo-900 min-h-[auto] min-w-[auto] shrink-0"
                      : "relative text-[9.6px] font-medium items-center box-border caret-transparent flex h-4 justify-center leading-[9.6px] outline-[3px] w-4 z-[1] border border-indigo-900 -mx-1 rounded-[40px] border-solid md:text-[11.2px] md:h-[18px] md:leading-[16.8px] md:w-[18px] md:border-2 text-white bg-indigo-900 shrink-0"
                    : isFirstVariant
                      ? "relative text-[9.6px] font-medium items-center box-border caret-transparent flex h-4 justify-center leading-[9.6px] outline-[3px] w-4 z-[1] border border-indigo-900 -mx-1 rounded-[40px] border-solid md:text-[11.2px] md:h-[18px] md:leading-[16.8px] md:w-[18px] md:border-2 text-indigo-950 bg-white min-h-[auto] min-w-[auto] shrink-0"
                      : "relative text-[9.6px] font-medium items-center box-border caret-transparent flex h-4 justify-center leading-[9.6px] outline-[3px] w-4 z-[1] border border-indigo-900 -mx-1 rounded-[40px] border-solid md:text-[11.2px] md:h-[18px] md:leading-[16.8px] md:w-[18px] md:border-2 text-indigo-950 bg-white shrink-0"
                }
              >
                <p
                  className={
                    isFirstVariant
                      ? "text-[9.6px] box-border caret-transparent leading-[9.6px] outline-[3px] md:text-[11.2px] md:leading-[16.8px] min-h-[auto] min-w-[auto]"
                      : "text-[9.6px] box-border caret-transparent leading-[9.6px] outline-[3px] md:text-[11.2px] md:leading-[16.8px]"
                  }
                >
                  {step}
                </p>
              </div>
            </React.Fragment>
          ))}

          <div
            className={
              isFirstVariant
                ? "bg-indigo-950/10 box-border caret-transparent basis-[0%] grow h-[5px] outline-[3px] min-h-[auto] min-w-[auto]"
                : "bg-indigo-950/10 box-border caret-transparent basis-[0%] grow h-[5px] outline-[3px]"
            }
          />
          <div
            className={
              isFirstVariant
                ? "box-border caret-transparent outline-[3px] min-h-[auto] min-w-[auto] shrink-0"
                : "box-border caret-transparent outline-[3px] shrink-0"
            }
          >
            <p className="text-2xl box-border caret-transparent leading-6 outline-[3px] -ml-3 md:text-[27.2px] md:leading-[27.2px]">
              🎉
            </p>
          </div>
        </div>

        <div className={props.headerClassName}>
          {props.headerContent}
          {props.subheaderContent ? (
            <p className={props.subheaderClassName}>{props.subheaderContent}</p>
          ) : null}
          {props.showHeaderSpacer ? (
            <div className={props.headerSpacerClassName}></div>
          ) : null}
        </div>

        {props.options && props.options.length > 0 ? (
          <div className={props.optionsWrapperClassName}>
            {props.options.map((option, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => props.onOptionSelect?.(index)}
                onKeyDown={(e) => e.key === "Enter" && props.onOptionSelect?.(index)}
                className={`${option.buttonClassName} cursor-pointer transition-all${
                  props.selectedOptionIndex === index
                    ? " !border-indigo-900 !border-2 !shadow-none !bg-[#fff5e3]"
                    : ""
                }`}
              >
                <div
                  className={
                    isFirstVariant
                      ? "text-[13.6px] items-center box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] outline-[3px] gap-y-3 md:text-base md:leading-6 min-h-[auto] min-w-[auto]"
                      : "text-[13.6px] items-center box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] outline-[3px] gap-y-3 md:text-base md:leading-6"
                  }
                >
                  {option.showCheckbox ? (
                    <div className={`text-[13.6px] items-center aspect-square box-border caret-transparent flex h-[18px] justify-between leading-[20.4px] outline-[3px] w-[18px] rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid shrink-0 md:text-base md:h-[22px] md:leading-6 md:w-[22px]${props.selectedOptionIndex === index ? " !bg-indigo-900 !border-indigo-900" : ""}`}>
                      <img
                        src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/66992bd5eb12c8d2e155f663_checkbox.svg"
                        alt=""
                        className={`text-[13.6px] box-border caret-transparent leading-[20.4px] max-w-full outline-[3px] rounded-[1px] md:text-base md:leading-6${props.selectedOptionIndex === index ? "" : " hidden"}`}
                      />
                    </div>
                  ) : null}
                  <div className={option.contentClassName}>
                    {option.imageUrl ? (
                      <img
                        src={option.imageUrl}
                        alt={option.imageAlt ?? ""}
                        sizes={option.imageSizes}
                        className={option.imageClassName}
                      />
                    ) : null}
                    {option.emoji ? (
                      <p className="text-[20.08px] box-border caret-transparent leading-[30.12px] outline-[3px]">
                        {option.emoji}
                      </p>
                    ) : null}
                    <p className={option.labelClassName}>{option.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {props.bottomContent}

        <div className={props.footerClassName}>
          <div className={`w-full flex justify-center ${props.footerInnerClassName}`}>
            {props.showTrustpilot ? (
              <>
                <div className="text-[11px] font-bold box-border caret-transparent leading-[16.5px] outline-[3px] md:text-[13px] md:leading-[19.5px]">
                  Excellent
                </div>
                <img
                  src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/66952e628fb35834c3c23a27_tp-javy.svg"
                  alt=""
                  className="box-border caret-transparent inline-block h-[13.6px] max-w-full outline-[3px] md:h-4"
                />
                <div className="text-[9.6px] box-border caret-transparent leading-[14.4px] outline-[3px] md:text-xs md:leading-[18px]">
                  2,751 reviews on
                </div>
                <img
                  src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/66756a3c7e37035138f86fd5_trustpilot.png"
                  alt=""
                  sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px"
                  className="box-border caret-transparent inline-block max-w-full outline-[3px] w-[70px] md:w-20"
                />
              </>
            ) : null}
            {props.showBackButton ? (
              <a
                href="#"
                className="items-center box-border caret-transparent gap-x-3 flex justify-center max-w-full outline-[3px] overflow-hidden rounded-lg md:px-8 hover:outline-0 absolute text-base font-medium bg-transparent flex-col h-[61.6px] left-[-60px] leading-6 min-h-14 w-auto mx-auto p-4 top-[2%] bottom-[0%] md:relative md:text-xl md:bg-white md:h-auto md:leading-[30px] md:min-h-[61.6px] md:w-3/12 md:mx-0 md:left-auto md:inset-y-auto hover:bg-white hover:border-white"
              >
                <div className="box-border caret-transparent flex outline-[3px] text-base items-center flex-col h-6 justify-center leading-6 w-6 md:text-xl md:h-4 md:leading-[30px] md:w-4">
                  <img
                    src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/icon-1.svg"
                    alt="Icon"
                    className="box-border caret-transparent outline-[3px] text-base h-full leading-6 align-baseline w-full md:text-xl md:leading-[30px]"
                  />
                </div>
              </a>
            ) : null}
            <button
              type="button"
              onClick={canContinue ? props.onContinue : undefined}
              className={`${props.ctaClassName} cursor-pointer${canContinue ? " !bg-indigo-900 !text-white !pointer-events-auto" : ""}`}
            >
              <div className={props.ctaTextClassName}>{props.ctaText}</div>
              <img
                src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/66993189c6b06eb8bd22a60e_white-arrow.svg"
                alt=""
                className="absolute box-border caret-transparent max-w-full outline-[3px] right-[10%]"
              />
            </button>
          </div>
          <a href={props.skipHref} className={props.skipClassName}>
            <p className="box-border caret-transparent outline-[3px] text-[17.6px] leading-[26.4px] md:text-[19.2px] md:leading-[28.8px]">
              👉
            </p>
            <p className={props.skipTextClassName}>{props.skipText}</p>
          </a>
        </div>
      </div>
    </div>
  );
};
