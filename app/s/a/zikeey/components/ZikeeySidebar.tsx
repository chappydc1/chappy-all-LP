"use client";

import { useState, useEffect } from "react";
import adv from "../copy.json";
import media from "../media.json";

export function ZikeeySidebar() {
  const [isSticky, setIsSticky] = useState(false);
  const { productName, productUrl, sidebar } = adv.article;

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside className="hidden md:block basis-0 grow max-w-[300px] min-w-[240px] mx-auto p-2.5">
      <div className={`${isSticky ? "md:sticky md:top-[72px]" : ""} border border-gray-200 p-5 rounded transition-shadow duration-300 hover:shadow-lg`}>
        <img
          src={media.sidebar}
          alt={productName}
          className="max-w-full align-baseline mx-auto rounded"
        />
        <p className="text-neutral-800 text-[22px] tracking-[-1px] leading-[35.2px] text-center mb-2.5 mt-3">
          <a href={productUrl} className="text-teal-600 font-bold transition-colors duration-150 hover:text-teal-700">
            {productName}
          </a>
        </p>
        <p className="text-neutral-800 text-[20px] tracking-[-0.5px] leading-[32px] text-center mb-2.5">
          <i><b>{sidebar.tagline}</b></i>
        </p>
        <a
          href={sidebar.buttonUrl}
          className="text-white text-sm font-extrabold bg-teal-600 block text-center mt-5 p-[15px] rounded-[10px] transition-all duration-200 hover:bg-teal-700 active:scale-95 select-none"
        >
          <span className="inline-flex items-center gap-1">
            {sidebar.buttonText}
            <span>→</span>
          </span>
        </a>
      </div>
    </aside>
  );
}
