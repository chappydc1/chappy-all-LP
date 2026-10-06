"use client";

import { useState, useEffect } from "react";
import copy from "../../copy.json";
import media from "../../media.json";
import { EarCleanerSpinWheel } from "./components/EarCleanerSpinWheel";

export const EarCleanerSpinWheelModal = () => {
  const { title, badge, badge_emoji } = copy.spin_wheel_modal;
  const { brand_logo, icon_close } = media.images;
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reveal = () => {
      setOpen(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    };

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      if (window.scrollY / maxScroll >= 0.65) {
        window.removeEventListener("scroll", onScroll);
        reveal();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 350);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Spin to win popup"
      aria-modal="true"
      className={`fixed h-full leading-[normal] w-full z-[2147483647] inset-0 transition-opacity duration-350 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative text-indigo-950 box-border h-full leading-[19.2px] w-full font-figtree flex items-start justify-center p-4 overflow-y-auto">
        <div
          className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto my-auto overflow-hidden transition-all duration-350 ${visible ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            aria-label="Close popup"
            className="absolute z-20 right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors duration-200 cursor-pointer"
          >
            <img src={icon_close.src} alt={icon_close.alt} className="h-5 w-5" />
          </button>

          <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-8">
            <img src={brand_logo.src} alt={brand_logo.alt} className="w-[150px] mb-2" />
            <div className="w-full max-w-[440px]">
              <p className="text-2xl md:text-[36px] leading-tight text-center font-alia_kefir md:leading-[43px]">
                {title}
              </p>
            </div>
            <div className="text-indigo-950 text-lg font-black text-center leading-6">
              <p>
                {badge_emoji} <strong>{badge}</strong> {badge_emoji}
              </p>
            </div>
            <div className="mt-2 w-full flex justify-center">
              <EarCleanerSpinWheel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
