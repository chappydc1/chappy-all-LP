"use client";

import { useState } from "react";

export type FAQAccordionProps = {
  question: string;
  contentType: "shipping" | "text";
  textContent?: React.ReactNode;
  shippingDate?: string;
  shippingCountdown?: string;
  shippingFrom?: string;
  shippingIconUrl?: string;
};

export const FAQAccordion = (props: FAQAccordionProps) => {
  const [open, setOpen] = useState(false);
  const shippingIcon =
    props.shippingIconUrl ?? "/images/shipping-fast.svg";

  return (
    <div className="box-border caret-transparent border-b border-neutral-300/70 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="items-center box-border caret-transparent flex justify-between max-w-full w-full px-0 py-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition-colors duration-150"
        aria-expanded={open}
      >
        <div className="text-sky-950 text-base font-bold box-border caret-transparent leading-[22px] md:text-base md:leading-6">
          {props.question}
        </div>
        <span
          className="inline-flex flex-shrink-0 items-center justify-center w-6 h-6 ml-4 text-sky-950 transition-transform duration-300 ease-in-out"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div
        className="box-border caret-transparent w-full overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "500px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="box-border caret-transparent pb-2 pt-1">
          {props.contentType === "shipping" ? (
            <div className="box-border caret-transparent mb-[5px] pb-[5px] md:mb-0 md:pb-0">
              <div className="box-border caret-transparent flex mt-0.5 mb-1 md:my-2">
                <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                  <img src={shippingIcon} alt="" className="box-border caret-transparent inline-block max-w-full w-[18px] md:w-[22px]" />
                </div>
                <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                  <div className="text-black text-[15px] font-semibold box-border caret-transparent leading-6 ml-2 md:text-base">
                    Shipping &amp; Delivery
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent">
                <div className="text-zinc-600 text-sm box-border caret-transparent leading-[22px] mb-1 md:text-gray-800 md:text-base md:leading-6 md:mb-2.5">
                  Ships by{" "}
                  <strong className="text-black text-sm font-bold box-border caret-transparent leading-[22px] md:text-gray-800 md:text-base md:leading-6">
                    {props.shippingDate}
                  </strong>{" "}
                  Order within{" "}
                  <strong className="text-lime-700 text-sm font-bold box-border caret-transparent leading-[22px] md:text-base md:leading-6">
                    {props.shippingCountdown}
                  </strong>
                </div>
                <div className="text-zinc-600 text-[13.5px] box-border caret-transparent leading-[22px] mb-1 md:text-gray-800 md:text-base md:leading-6 md:mb-2.5">
                  Ships from{" "}
                  <span className="text-black text-[13.5px] font-medium box-border caret-transparent leading-[22px] md:text-gray-800 md:text-base md:leading-6">
                    {props.shippingFrom}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-black text-sm box-border caret-transparent leading-[21px] mb-2.5 md:text-slate-700 md:text-base md:leading-6">
              {props.textContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
