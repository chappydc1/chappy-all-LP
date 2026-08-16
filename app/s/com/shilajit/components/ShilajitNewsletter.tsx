"use client";
import { useState } from "react";

type NewsletterProps = {
  copy: {
    title: string;
    subtitle: string;
    placeholder: string;
    cta: string;
    successMessage: string;
  };
};

export function ShilajitNewsletter({ copy }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="items-center bg-stone-900 flex flex-col justify-center w-full mt-10 p-2.5 rounded-none md:p-5 md:rounded-xl">
      <div className="relative items-center flex flex-col h-full justify-center w-full pt-[15px] pb-[30px] px-5 rounded-[10px] md:pb-[15px] md:px-[100px]">
        <div className="relative text-white text-[28px] font-bold leading-[36.4px] max-w-[220px] mt-[5px] mb-2.5 md:leading-7 md:max-w-none">
          {copy.title}
        </div>
        <div className="text-white text-[15.4px] leading-[20.482px] max-w-[300px] mt-[5px] mb-5 md:max-w-none">
          {copy.subtitle}
        </div>
        {submitted ? (
          <div className="text-green-400 font-bold text-lg py-4">
            ✓ {copy.successMessage}
          </div>
        ) : (
          <div className="items-center flex flex-col justify-center w-full md:flex-row gap-2.5">
            <div className="flex flex-col items-center w-full md:w-auto">
              <input
                type="email"
                placeholder={copy.placeholder}
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                className={`text-base block h-10 text-center w-[300px] px-4 rounded-[45px] md:text-sm md:text-left md:w-[250px] md:pl-5 outline-none transition-all duration-200 focus:ring-2 focus:ring-sky-400 ${error ? "ring-2 ring-red-400" : ""}`}
              />
              {error && <span className="text-red-400 text-xs mt-1">{error}</span>}
            </div>
            <button
              onClick={handleSubmit}
              className="text-white text-[15.4px] font-light bg-sky-500 h-10 w-[300px] ml-0 px-[25px] py-[5px] rounded-[45px] md:w-40 md:ml-2.5 cursor-pointer"
            >
              {copy.cta}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
