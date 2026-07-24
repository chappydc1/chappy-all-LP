"use client";

import { useState } from "react";
import { useAdvertorialData } from "../../TopBar/context";

export function FaqAccordion() {
  const { content } = useAdvertorialData();
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-[800px] px-4 pb-[30px] pt-6 md:px-5 md:pb-5 md:pt-[30px]">
      <h2 className="mb-4 text-center font-[family-name:var(--font-baskerville)] text-2xl font-bold text-black md:mb-5 md:text-[32px]">
        Frequently Asked Questions
      </h2>
      {faq.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="cursor-pointer border-b border-[#fde8c8] py-3.5 md:py-[15px]"
            onClick={() => setOpenIndex(isOpen ? null : index)}
          >
            <div className="flex min-h-11 items-start justify-between gap-2.5 text-base font-bold text-black md:min-h-0 md:items-center md:text-lg">
              <span>{item.question}</span>
              <span className="-mt-0.5 shrink-0 text-[22px] font-light md:mt-0 md:text-2xl">
                {isOpen ? "−" : "+"}
              </span>
            </div>
            {isOpen && (
              <div className="pt-2.5 text-sm leading-[1.6] text-[#555] md:text-base">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
