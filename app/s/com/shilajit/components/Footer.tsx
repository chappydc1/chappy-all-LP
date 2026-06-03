"use client";
import { useState } from "react";

type FooterProps = {
  adv: {
    brand: string;
    tagline: string;
    newsletter: {
      title: string;
      placeholder: string;
      cta: string;
      successMessage: string;
    };
    links: { label: string; href: string }[];
    copyright: string;
    advertisingDisclosure: string;
  };
  media: {
    footerBg: string;
    footerLogo: string;
  };
};

export function Footer({ adv, media }: FooterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="float-left min-h-[400px] w-full rounded-t-none md:min-h-40 md:w-[1024px] md:rounded-t-xl">
      {/* Newsletter banner */}
      <div className="relative items-center border-t-blue-100 flex flex-col h-auto w-full mt-2.5 p-5 border-t-[10px] md:flex-row md:h-[165px] md:border-t-0">
        <img
          alt="background"
          src={media.footerBg}
          className="absolute hue-rotate-[195deg] h-[220px] w-full rounded-t-none left-0 top-0 md:h-auto md:rounded-t-xl object-cover"
        />
        <div className="relative text-white text-[26.6px] font-bold leading-[35px] text-left w-full pl-0 md:text-[30.8px] md:w-[70%] md:pl-[25px]">
          {adv.newsletter.title}
        </div>
        {submitted ? (
          <div className="relative text-green-400 font-bold text-base z-10 mt-4 md:mt-0 animate-fade-in">
            ✓ {adv.newsletter.successMessage}
          </div>
        ) : (
          <div className="relative flex flex-col md:flex-row items-center gap-2 mt-[30px] md:mt-0 z-10 w-full md:w-auto">
            <div className="flex flex-col w-full md:w-auto">
              <input
                type="email"
                placeholder={adv.newsletter.placeholder}
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                className={`text-base block h-[45px] min-w-[250px] text-start w-full border border-neutral-300 mx-0 md:mx-5 pl-5 py-0 rounded-[50px] border-solid md:text-[16.8px] md:w-[230px] outline-none transition-all duration-200 focus:ring-2 focus:ring-sky-400 ${error ? "ring-2 ring-red-400" : ""}`}
              />
              {error && <span className="text-red-400 text-xs mt-1 ml-1">{error}</span>}
            </div>
            <button
              onClick={handleSubmit}
              className="text-white text-[16.8px] font-bold bg-stone-900 h-[45px] min-w-full w-1/5 z-20 px-[25px] py-[5px] rounded-[50px] md:min-w-[170px] cursor-pointer"
            >
              {adv.newsletter.cta}
            </button>
          </div>
        )}
      </div>

      {/* Footer links */}
      <div className="text-white bg-zinc-900 grid grid-cols-[1fr] px-[30px] py-5 md:grid-cols-[1fr_1fr]">
        <div className="max-w-full md:max-w-[400px]">
          <div className="items-center flex gap-x-2.5 gap-y-2.5">
            <img alt={adv.brand} src={media.footerLogo} className="w-10 mb-2.5" />
            <div className="text-lg font-bold mb-3">{adv.brand}</div>
          </div>
          <p className="text-neutral-200 leading-[21px] max-w-full text-left md:max-w-none">
            {adv.tagline}
          </p>
        </div>
        <div className="flex flex-col w-max mt-10 md:flex-row md:mt-0">
          <div className="font-bold text-left pr-10 pb-5 md:pb-0">{adv.brand}</div>
          <ul className="gap-x-5 flex flex-col list-none gap-y-2.5 text-left pl-0 md:grid md:grid-cols-[repeat(2,minmax(120px,1fr))] md:flex-row">
            {adv.links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-neutral-400 text-xs items-start border-t border-t-zinc-800 flex flex-col col-start-1 col-end-[-1] justify-between gap-y-1.5 text-left mt-10 pt-5 md:flex-row md:text-center">
          <span className="text-white font-bold block">{adv.copyright}</span>
          <span className="block">
            ⓘ Advertising Disclosure:{" "}
            <em className="italic">&quot;{adv.advertisingDisclosure}&quot;</em>
          </span>
        </div>
      </div>
    </div>
  );
}
