"use client";

import { useEffect, useState } from "react";

export const GetokinawatonicStickyCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => setVisible(true);
    window.addEventListener("vsl-cta-show", show);
    return () => window.removeEventListener("vsl-cta-show", show);
  }, []);

  if (!visible) return null;

  const scrollToOffer = () => {
    document
      .getElementById("productarea")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed box-border caret-transparent outline-[3px] text-center w-full z-[8001] bottom-[27px]">
      <button
        onClick={scrollToOffer}
        className="text-white text-[11px] bg-red-600 shadow-[rgba(232,76,61,0.7)_0px_0px_0px_0px] box-border caret-transparent leading-[15.7143px] outline-[3px] border-yellow-400 p-2.5 rounded-[20px] border-4 border-solid font-poppins md:text-[23px] md:leading-[32.8571px] md:p-3.5 hover:outline-0 cursor-pointer"
      >
        Get Started With The Okinawa Tonic Now!
      </button>
    </div>
  );
};
