"use client";
import { useState } from "react";

type FAQProps = {
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
};

export function FAQSection({ faq }: FAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="text-left p-2.5">
      <h2 className="text-xl font-bold leading-[25.7143px] decoration-sky-500/80 underline uppercase pb-2.5 md:text-[32px] md:leading-[41.1429px] md:pb-[30px]">
        {faq.title}
      </h2>
      <div className="flex flex-col gap-3">
        {faq.items.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full text-left flex items-center justify-between px-4 py-4 bg-white focus:outline-none"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <span className="text-base font-bold md:text-[18px] pr-4">Q: {item.q}</span>
              <span className={`flex-shrink-0 text-sky-500 text-xl font-bold transition-transform duration-300 ${openFaq === i ? "rotate-45" : "rotate-0"}`}>
                +
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <p className="text-[15.4px] leading-[21.9989px] px-4 pb-4 md:text-[19.6px] md:leading-[27.9986px] text-stone-600">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
