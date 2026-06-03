"use client";

import { useState, useEffect } from "react";
import { SpinWheel } from "../SpinWheelModal/components/SpinWheel";

export const SpinWheelModal = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

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
      className={`fixed h-full leading-[normal] w-full z-[2147483647] inset-0 font-times_new_roman transition-opacity duration-350 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative text-indigo-950 box-border h-full leading-[19.2px] w-full font-figtree flex items-center justify-center p-4">
        <div
          className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto overflow-hidden transition-all duration-350 ${visible ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
          style={{ maxHeight: "90vh", overflowY: "auto" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close popup"
            className="absolute z-20 right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors duration-200 cursor-pointer"
          >
            <img
              src="https://c.animaapp.com/mnsfe353KCVMX6/assets/icon-5.svg"
              alt="Close"
              className="h-5 w-5"
            />
          </button>

          {/* Background image for mobile feel */}
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "url('https://c.animaapp.com/mnsfe353KCVMX6/assets/desktopbgmin21380beb8da5188c.webp-1754589668126.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
          />

          <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-8">
            <img
              src="https://c.animaapp.com/mnsfe353KCVMX6/assets/javvylogoblueyellowsparkles.svg-1753727812740.svg"
              alt="Javvy Coffee Logo"
              className="w-[110px] mb-2"
            />
            <div className="w-full max-w-[440px]">
              <p className="text-2xl md:text-[36px] leading-tight text-center font-alia_kefir md:leading-[43px]">
                Spin the Wheel to Win Up to 58% OFF
              </p>
            </div>
            <div className="text-indigo-950 text-lg font-black text-center leading-6">
              <p>🌼 <strong>SPRING SPECIAL</strong> 🌸</p>
            </div>
            <div className="mt-2 w-full flex justify-center">
              <SpinWheel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
