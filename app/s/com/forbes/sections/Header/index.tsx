"use client";

import { useState, useEffect } from "react";
import { ForbesHeaderLogo } from "./components/ForbesHeaderLogo";

export const ForbesHeader = ({ logoSrc }: { logoSrc: string }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`forbes-header animate-slide-down ${scrolled ? "forbes-header--scrolled" : ""}`}>
      <div className="forbes-header__inner">
        <ForbesHeaderLogo logoSrc={logoSrc} />
      </div>
    </header>
  );
};
