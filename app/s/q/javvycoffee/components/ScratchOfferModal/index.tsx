"use client";

import { useState } from "react";
import { ScratchModalContent } from "./components/ScratchModalContent";

export const ScratchOfferModal = () => {
  const [visible, setVisible] = useState(false);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Promotional popup"
      className="fixed caret-transparent h-full leading-[normal] outline-[3px] w-full z-[2147483647] inset-0 font-times_new_roman"
    >
      <div className="text-indigo-950 box-border caret-transparent h-full leading-[19.2px] outline-[3px] w-full font-figtree">
        <ScratchModalContent onClose={() => setVisible(false)} />
      </div>
    </div>
  );
};
