"use client";
import { useState, useEffect } from "react";

export type HeroCTAProps = {
  variant: "button" | "note";
  buttonTitle?: string;
  buttonText?: React.ReactNode;
  noteLabel?: string;
  noteText?: string;
};

export const HeroCTA = (props: HeroCTAProps) => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((p) => !p);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  if (props.variant === "button") {
    return (
      <button
        title={props.buttonTitle}
        type="button"
        className={`relative text-white text-xl font-bold items-stretch bg-slate-500 shadow-[rgba(37,42,50,0.32)_0px_1px_4px_1px] caret-transparent block basis-[0%] flex-col shrink-0 justify-start tracking-[0.4px] max-w-full text-center align-middle w-[96%] mt-0 mb-2.5 mx-auto px-2.5 py-5 rounded font-montserrat md:w-full md:mt-px md:px-[30px] transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 ${pulse ? "bg-slate-600 shadow-[rgba(37,42,50,0.5)_0px_3px_10px_2px]" : "bg-slate-500 shadow-[rgba(37,42,50,0.32)_0px_1px_4px_1px]"}`}
        style={{ cursor: "pointer" }}
      >
        {props.buttonText}
      </button>
    );
  }

  return (
    <div className="box-border caret-transparent w-full px-px py-[5px]">
      <div className="text-zinc-800 text-[17px] box-border caret-transparent leading-[27px] p-px font-montserrat text-center">
        <b className="font-bold box-border caret-transparent">
          <u className="box-border caret-transparent underline">
            {props.noteLabel}
          </u>
          <span className="text-green-600 box-border caret-transparent">
            {props.noteText}
          </span>
        </b>
      </div>
    </div>
  );
};
