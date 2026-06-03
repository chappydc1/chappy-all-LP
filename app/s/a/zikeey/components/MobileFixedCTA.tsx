"use client";

import { useState, useEffect } from "react";
import adv from "../adv.json";

export function MobileFixedCTA() {
  const [visible, setVisible] = useState(false);
  const { mobileCta } = adv.article;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bg-black/80 block text-center w-full z-40 pb-[15px] px-[15px] bottom-0 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={mobileCta.buttonUrl}
        className="text-white text-sm font-extrabold bg-teal-600 block mt-3 p-[15px] rounded-[10px] transition-all duration-200 hover:bg-teal-700 active:scale-95 select-none"
      >
        <span className="inline-flex items-center justify-center gap-1">
          {mobileCta.buttonText}
          <span>→</span>
        </span>
      </a>
    </div>
  );
}
