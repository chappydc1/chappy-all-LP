"use client";
import { useState, useEffect } from "react";

type NavbarProps = {
  adv: {
    brand: string;
    links: { label: string; href: string }[];
  };
  media: {
    logo: string;
    icons: { nav: string; dropdown: string };
  };
};

export function ShilajitNavbar({ adv, media }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      <div className="items-center bg-stone-900 flex w-full h-[62px]">
        <div className="relative items-center flex h-[62px] w-full pl-5 md:justify-between md:max-w-screen-lg md:min-w-[1024px] md:mx-auto md:pl-0">
          {/* Logo */}
          <div className="items-center flex animate-fade-in">
            <a href="/" className="text-sky-500/80 items-center flex justify-center pb-1.5">
              <img alt={adv.brand} src={media.logo} className="h-[45px] w-[35px] mr-1.5 mt-[5px] md:w-[45px]" />
            </a>
            <a href="/" className="items-start flex flex-col w-auto mr-2.5 md:w-[220px]">
              <div className="text-white text-xl font-semibold leading-[23px] max-w-[150px] text-left ml-2.5 md:text-[22px]">
                {adv.brand}
              </div>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center h-[45px] w-[744px]">
            <div className="flex items-center h-[45px] justify-end max-w-[700px] min-w-[700px]">
              <img src={media.icons.nav} alt="Categories" className="h-[17px] w-4 mr-[30px] opacity-80 cursor-pointer" />
              <div className="text-white text-base font-bold flex items-center gap-[7px] h-[19px] w-[78px] mr-[50px] cursor-pointer">
                {adv.links[0].label}
                <img src={media.icons.dropdown} alt="" className="block h-3 w-[13px] mt-[3px]" />
              </div>
              <div className="text-white text-base font-bold flex items-center h-[19px] w-[78px]">
                <a href={adv.links[1].href} className="text-white text-base font-bold">
                  {adv.links[1].label}
                </a>
              </div>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto mr-4 flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 w-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileOpen(false)}
        style={{ background: "rgba(0,0,0,0.4)" }}
      />

      {/* Mobile drawer */}
      <div className={`fixed top-[62px] left-0 right-0 z-50 bg-stone-900 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col px-5 py-4 gap-4">
          {adv.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white text-base font-bold py-2 border-b border-stone-700 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
