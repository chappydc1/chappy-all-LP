"use client";

import { useState, useEffect } from "react";
import { HeaderLogo } from "../Header/components/HeaderLogo";

export const Header = ({ logoSrc }: { logoSrc: string }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`forbes-header animate-slide-down ${scrolled ? "forbes-header--scrolled" : ""}`}>
      <div className="forbes-header__inner">
        <HeaderLogo logoSrc={logoSrc} />
      </div>
    </header>
  );
};
