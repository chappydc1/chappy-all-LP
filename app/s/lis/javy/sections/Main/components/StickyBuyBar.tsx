"use client";

import { useState, useEffect } from "react";

export const StickyBuyBar = () => {
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    setPressed(true);
    setTimeout(() => setPressed(false), 600);
  };

  return (
    <div
      className={`fixed bg-white box-border block w-full pt-4 pb-2 bottom-0 left-0 right-0 z-50 shadow-[0_-4px_24px_rgba(0,0,0,0.10)] transition-transform duration-500 ease-in-out md:hidden ${visible ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="box-border px-4">
        <div className="box-border max-w-[864px] w-full mx-auto">
          <div className="box-border flex flex-col bottom-0">
            <a
              href="#offer"
              role="button"
              onClick={handleClick}
              className={`relative text-white font-bold items-center bg-indigo-950 box-border flex justify-center max-w-full min-h-[68px] min-w-[auto] text-center w-full overflow-hidden px-8 py-4 rounded-lg border-0 border-none border-transparent transition-all duration-150 active:scale-[0.97] ${pressed ? "bg-indigo-800 scale-[0.97]" : "hover:bg-indigo-800"}`}
              style={{ touchAction: "manipulation" }}
            >
              <div className="font-black box-border tracking-[0.176px] min-h-[auto] min-w-[auto]">
                YES, GET 58% OFF
              </div>
              <div className="absolute items-center box-border flex-col h-6 justify-center w-6 right-6">
                <img
                  src="/images/javy/icon-1.svg"
                  alt="Arrow"
                  className="box-border inline h-full align-baseline w-full"
                />
              </div>
            </a>
            <div className="items-center box-border gap-x-1.5 flex justify-center min-h-[auto] min-w-[auto] gap-y-1.5 w-full mt-2">
              <div className="box-border h-[18px] min-h-[auto] min-w-[auto] w-[18px]">
                <img
                  src="/images/javy/icon-4.svg"
                  alt=""
                  className="box-border inline h-full align-baseline w-full"
                />
              </div>
              <p className="text-xs font-bold box-border leading-[18px] min-h-[auto] min-w-[auto] text-left uppercase mr-[18px]">
                SPRING DISCOUNT ACTIVE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
