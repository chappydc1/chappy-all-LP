"use client";

import { useState } from "react";

export type FAQItemProps = {
  number: number;
  question: string;
  answer: React.ReactNode;
  liClassName: string;
  headerClassName: string;
};

export const FAQItem = (props: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={`border-b-zinc-900 border-l-neutral-800 border-r-neutral-800 box-border p-5 ${props.liClassName} reveal`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left"
        aria-expanded={open}
      >
        <div className={`relative items-start box-border flex ${props.headerClassName}`}>
          <span className="absolute text-emerald-800 text-xl font-bold box-border block leading-[22px] top-[-3px]">
            {props.number}.
          </span>
          <span className="text-emerald-800 text-lg font-semibold box-border block leading-[19.8px] max-w-[700px] w-full mr-6 pl-[25px] font-myriad_pro hover:text-emerald-600 transition-colors duration-200">
            {props.question}
          </span>
          <span className="text-emerald-800 box-border block ml-auto flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${open ? "max-h-[3000px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}
        style={{ transition: "max-height 0.4s ease, opacity 0.35s ease, margin-top 0.3s ease" }}
      >
        <div className="relative box-border px-[26px]">
          {props.answer}
        </div>
      </div>
    </li>
  );
};
