"use client";

import { useState } from "react";

export const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative bg-white shadow-[rgba(1,1,1,0.32)_0px_0px_8px_0px] box-border h-4/5 max-h-[625px] max-w-[800px] w-[95%] rounded-[3px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="box-border">
          <h1 className="text-zinc-500 text-lg box-border h-[60px] leading-[60px] text-center overflow-hidden mb-2 pt-4 font-helvetica"></h1>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute items-center box-border flex right-[15px] top-[7px] text-zinc-500 hover:text-zinc-800 transition-colors duration-200 cursor-pointer"
            aria-label="Close modal"
          >
            close{" "}
            <img
              src="https://c.animaapp.com/mnsem251Wpf2gA/assets/icon-7.svg"
              alt="Close"
              className="box-border h-[15px] w-3.5 ml-1"
            />
          </button>
        </div>
        <div className="relative box-border h-[calc(100%_-_90px)] w-[calc(100%_-_4px)] border border-zinc-400 overflow-hidden mx-0.5 border-solid md:h-[calc(100%_-_125px)] md:w-[calc(100%_-_100px)] md:mx-[50px]">
          <iframe
            src=""
            className="absolute box-border h-full align-baseline w-full inset-0"
            title="Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
