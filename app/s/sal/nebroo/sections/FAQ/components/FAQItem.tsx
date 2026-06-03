"use client";
import { useState } from "react";

export type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
};

export const FAQItem = (props: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="box-border caret-transparent m-2.5 px-0 py-[5px] md:px-[5px]">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="w-full text-left focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 rounded-[5px]"
            aria-expanded={open}
          >
            <div className={`items-center bg-sky-100 box-border caret-transparent flex border p-[3px] rounded-[5px] border-solid transition-colors duration-200 ${open ? "border-slate-500 bg-sky-200" : "border-zinc-300 "}`}>
              <div className="text-[17px] box-border caret-transparent basis-[0%] grow-[9.9] leading-[25.5px] min-h-[auto] min-w-[auto] text-left pl-[5px] font-montserrat">
                <b className="font-bold box-border caret-transparent">
                  {props.question}
                </b>
              </div>
              <div className="box-border caret-transparent basis-[0%] grow-[0.1] min-h-[auto] min-w-[auto] p-[5px] flex items-center justify-center">
                <span
                  className={`inline-block w-4 h-4 transition-transform duration-300 text-slate-600 font-bold text-lg leading-none ${open ? "rotate-45" : "rotate-0"}`}
                >
                  +
                </span>
              </div>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="box-border caret-transparent text-left px-2.5 py-[5px]">
              <div className="text-[17px] box-border caret-transparent leading-[26px] mt-[15px] font-montserrat">
                {props.answer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
