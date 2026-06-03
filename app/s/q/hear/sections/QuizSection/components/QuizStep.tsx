"use client";

import { useState } from "react";

export type QuizStepOption = {
  label: React.ReactNode;
  value?: string;
  itemClassName?: string;
  labelClassName?: string;
  leadingSpanClassName?: string;
  textClassName?: string;
  note?: React.ReactNode;
};

export type QuizStepInput = {
  name: string;
  type: string;
  placeholder: string;
  className: string;
};

export type QuizStepProps = {
  question?: React.ReactNode;
  subtitle?: string;
  options?: QuizStepOption[];
  rootClassName?: string;
  innerClassName?: string;
  formClassName?: string;
  questionWrapperClassName?: string;
  questionTextClassName?: string;
  optionsWrapperClassName?: string;
  optionsInnerClassName?: string;
  includeCheckboxInputs?: string;
  input?: QuizStepInput;
  buttonText?: string;
  buttonClassName?: string;
  salutation?: boolean;
  auxiliaryContent?: React.ReactNode;
  consentContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  loading?: boolean;
  onSelect?: () => void;
};

export const QuizStep = (props: QuizStepProps) => {
  const { onSelect } = props;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [inputHasValue, setInputHasValue] = useState(false);

  const handleOptionClick = (index: number) => {
    setSelectedIndex(index);
    setTimeout(() => onSelect?.(), 300);
  };

  const isActive = selectedIndex !== null || inputHasValue;

  const activeButtonClassName =
    "text-white text-xl font-bold bg-sky-700 caret-transparent flex justify-center leading-[normal] outline-[3px] text-center w-full border-sky-700 px-[25px] py-5 rounded-[15px] border-2 font-arial cursor-pointer transition-colors";
  const inactiveButtonClassName =
    "text-black/20 text-xl font-bold bg-slate-200 caret-transparent flex justify-center leading-[normal] outline-[3px] text-center w-full border-slate-200 px-[25px] py-5 rounded-[15px] border-2 font-arial";
  const rootClassName =
    props.rootClassName ??
    "box-border caret-transparent outline-[3px] inline-block align-top invisible w-full px-[25px]";
  const innerClassName =
    props.innerClassName ?? "box-border caret-transparent outline-[3px]";
  const formClassName =
    props.formClassName ?? "box-border caret-transparent outline-[3px]";
  const questionWrapperClassName =
    props.questionWrapperClassName ??
    "box-border caret-transparent outline-[3px] mb-[35px] pt-[25px]";
  const questionTextClassName =
    props.questionTextClassName ??
    "box-border caret-transparent inline-block outline-[3px]";
  const optionsWrapperClassName =
    props.optionsWrapperClassName ??
    "box-border caret-transparent outline-[3px]";
  const optionsInnerClassName =
    props.optionsInnerClassName ?? "box-border caret-transparent outline-[3px]";

  if (props.loading) {
    return (
      <div className={rootClassName}>
        <div className={innerClassName}>
          <form className={formClassName}>
            <div className="box-border caret-transparent outline-[3px]">
              <span className="box-border caret-transparent outline-[3px]">
                <div className="box-border caret-transparent outline-[3px]">
                  <br className="box-border caret-transparent outline-[3px]" />
                  <br className="box-border caret-transparent outline-[3px]" />
                  <div className="box-border caret-transparent outline-[3px] py-[60px]">
                    <div className="box-border caret-transparent h-[50px] outline-[3px] w-[50px] mx-auto"></div>
                  </div>
                </div>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (props.input) {
    return (
      <div className={rootClassName}>
        <div className={innerClassName}>
          <div className={questionWrapperClassName}>
            <div className="text-[26px] box-border caret-transparent tracking-[0.5px] leading-[29.9px] outline-[3px] text-center">
              <span className={questionTextClassName}>{props.question}</span>
            </div>
          </div>
          <form className={formClassName}>
            <div
              className={
                props.formClassName ===
                "box-border caret-transparent outline-[3px] flex flex-col"
                  ? "box-border caret-transparent outline-[3px] min-h-[auto] min-w-[auto] order-1"
                  : "box-border caret-transparent outline-[3px]"
              }
            >
              {props.salutation ? (
                <div className="relative box-border caret-transparent outline-[3px] text-center">
                  <label className="box-border caret-transparent inline-block outline-[3px] mr-[30px] mb-2">
                    <span className="box-border caret-transparent inline-block outline-[3px] mr-[3px]">
                      <input
                        type="radio"
                        name="Salutation"
                        value="Mr."
                        className="text-black text-[13.3333px] bg-transparent box-border caret-transparent h-[19px] leading-[normal] outline-[3px] text-start w-[19px] overflow-visible p-0 font-arial"
                      />
                      <span className="text-2xl font-thin box-border caret-transparent leading-[34.2857px] outline-[3px] ml-2.5">
                        Mr.
                      </span>
                    </span>
                  </label>
                  <label className="box-border caret-transparent inline-block outline-[3px] mr-2 mb-2">
                    <span className="box-border caret-transparent inline-block outline-[3px] mr-[3px]">
                      <input
                        type="radio"
                        name="Salutation"
                        value="Ms."
                        className="text-black text-[13.3333px] bg-transparent box-border caret-transparent h-[19px] leading-[normal] outline-[3px] text-start w-[19px] overflow-visible p-0 font-arial"
                      />
                      <span className="text-2xl font-thin box-border caret-transparent leading-[34.2857px] outline-[3px] ml-2.5">
                        Ms.
                      </span>
                    </span>
                  </label>
                </div>
              ) : null}
              <div
                className={
                  props.salutation
                    ? "relative box-border caret-transparent outline-[3px]"
                    : "relative box-border caret-transparent outline-[3px]"
                }
              >
                <input
                  name={props.input.name}
                  type={props.input.type}
                  placeholder={props.input.placeholder}
                  className={props.input.className}
                  onChange={(e) => setInputHasValue(e.target.value.trim().length > 0)}
                />
              </div>
              {props.auxiliaryContent}
            </div>
            {props.consentContent}
            {props.footerContent}
            <button
              type="button"
              onClick={onSelect}
              className={props.buttonClassName ?? (isActive ? activeButtonClassName : inactiveButtonClassName)}
            >
              {props.buttonText ?? "Next"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={rootClassName}>
      <div className={innerClassName}>
        <form className={formClassName}>
          <div className={questionWrapperClassName}>
            <div className="text-[26px] box-border caret-transparent tracking-[0.5px] leading-[29.9px] outline-[3px] text-center">
              <span className={questionTextClassName}>{props.question}</span>
            </div>
            {props.subtitle ? (
              <span className="text-neutral-700 box-border caret-transparent hidden outline-[3px] my-[3px]">
                {props.subtitle}
              </span>
            ) : null}
          </div>
          {props.auxiliaryContent}
          <div className={optionsWrapperClassName}>
            <div className={optionsInnerClassName}>
              {(props.options ?? []).map((option, index) => (
                <div
                  key={index}
                  className={
                    option.itemClassName ??
                    "relative box-border caret-transparent inline-block outline-[3px] align-top w-full mb-[11px]"
                  }
                >
                  <label
                    onClick={(e) => { e.preventDefault(); handleOptionClick(index); }}
                    className={
                      option.labelClassName ??
                      (selectedIndex === index
                        ? "text-white text-xl font-bold bg-sky-700 box-border caret-transparent block leading-[26px] outline-[3px] border-sky-700 overflow-hidden pl-[25px] pr-[30px] py-5 rounded-[15px] border-2 border-solid font-open_sans cursor-pointer"
                        : "text-black text-xl font-bold bg-sky-50 box-border caret-transparent block leading-[26px] outline-[3px] border-sky-700/50 overflow-hidden pl-[25px] pr-[30px] py-5 rounded-[15px] border-2 border-solid font-open_sans hover:bg-white cursor-pointer")
                    }
                  >
                    <span
                      className={
                        option.leadingSpanClassName ??
                        "box-border caret-transparent outline-[3px]"
                      }
                    >
                      {props.includeCheckboxInputs ? (
                        <span className="relative box-border caret-transparent hidden outline-[3px]">
                          <input
                            name={props.includeCheckboxInputs}
                            type="checkbox"
                            value={option.value ?? ""}
                            className="relative appearance-none text-neutral-600 text-[22px] font-normal bg-zinc-50 box-border caret-transparent block h-[70px] leading-[28.6px] outline-[3px] w-full border-neutral-300 overflow-visible mb-[35px] px-[25px] py-5 rounded-[15px] border-solid top-0 font-arial"
                          />
                        </span>
                      ) : null}
                    </span>
                    <span
                      className={
                        option.textClassName ??
                        "box-border caret-transparent inline-block leading-[30px] outline-[3px] align-top"
                      }
                    >
                      {option.label}
                    </span>
                  </label>
                  {option.note}
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
