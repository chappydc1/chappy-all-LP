"use client";

import { NuzFAQItem } from "./components/NuzFAQItem";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { content } from "../../content";

export const NuzFAQSection = () => {
  const f = content.faq;
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`bg-white/60 box-border caret-transparent transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="box-border caret-transparent px-5 py-12 md:px-10 md:py-20">
        <div className="box-border caret-transparent max-w-screen-xl w-full mx-auto">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent max-w-screen-lg w-full mx-auto">
              <h1 className="text-[32px] font-extrabold box-border caret-transparent tracking-[-0.8px] leading-[38.4px] text-center mt-[21.44px] md:text-5xl md:leading-[57.6px] md:mt-[32.16px]">
                {f.headingPrefix}
                <br />
                {f.headingMiddle}{" "}
                <span className="text-slate-600 text-[32px] box-border caret-transparent leading-[38.4px] md:text-5xl md:leading-[57.6px]">
                  {f.headingHighlight}
                </span>
              </h1>
            </div>
            <div className="box-border caret-transparent w-full pt-8 md:pt-16"></div>
          </div>
          <div className="items-center box-border caret-transparent flex flex-col justify-center max-w-none text-center w-full mx-auto md:max-w-[890px]">
            <div className="box-border caret-transparent gap-x-0 grid flex-col auto-cols-[1fr] grid-flow-dense grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-0 w-full md:w-[890px]">
              {f.items.map((item, i) => (
                <NuzFAQItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
