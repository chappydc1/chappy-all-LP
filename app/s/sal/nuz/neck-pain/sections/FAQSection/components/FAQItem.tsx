"use client";

import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
};

export const NuzFAQItem = ({ question, answer }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b-slate-600 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent min-h-[auto] min-w-[auto] border-b-2">
      <button
        onClick={() => setOpen(!open)}
        className="items-center box-border caret-transparent flex justify-between max-w-full w-full px-5 py-[15px] text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition-colors duration-150 hover:bg-black/[0.02]"
        aria-expanded={open}
      >
        <h3 className="text-black text-[17px] font-semibold box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] text-left md:text-[22px] md:leading-[35px]">
          {question}
        </h3>
        <div
          className="relative items-center box-border caret-transparent flex h-[30px] justify-center min-h-[30px] min-w-[30px] w-[30px] ml-10 rounded-[50px] md:ml-[60px] flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <div className="absolute bg-black box-border caret-transparent h-0.5 w-[38%] rounded-[20px]"></div>
          <div className="absolute bg-black box-border caret-transparent h-[38%] w-0.5 rounded-[20px]"></div>
        </div>
      </button>
      <div
        className="box-border caret-transparent overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "400px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="box-border caret-transparent pb-5 px-5">
          <p className="text-neutral-900/90 text-base box-border caret-transparent leading-[26px] text-left md:leading-[25.6px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};
