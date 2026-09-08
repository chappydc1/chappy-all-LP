"use client";

import { useEffect, useRef, useState } from "react";

const MODES = {
  phone: { name: "phone", type: "tel", placeholder: "Phone number", label: "Phone number", toggle: "Email me instead" },
  email: { name: "email", type: "email", placeholder: "Email address", label: "Email address", toggle: "Text me instead" },
} as const;

type Mode = keyof typeof MODES;

export const FooterNewsletter = () => {
  const [mode, setMode] = useState<Mode>("phone");
  const inputRef = useRef<HTMLInputElement>(null);
  const blinkRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startBlink = () => {
    if (!inputRef.current || inputRef.current.value) return;
    if (blinkRef.current) clearInterval(blinkRef.current);
    let on = true;
    inputRef.current.placeholder = "|";
    blinkRef.current = setInterval(() => {
      on = !on;
      if (inputRef.current)
        inputRef.current.placeholder = on ? "|" : "";
    }, 530);
  };

  const stopBlink = () => {
    if (blinkRef.current) { clearInterval(blinkRef.current); blinkRef.current = null; }
    if (inputRef.current) inputRef.current.placeholder = MODES[mode].placeholder;
  };

  const handleChange = () => {
    if (!inputRef.current) return;
    if (inputRef.current.value) stopBlink();
    else startBlink();
  };

  const handleToggle = () => {
    if (blinkRef.current) { clearInterval(blinkRef.current); blinkRef.current = null; }
    const next: Mode = mode === "phone" ? "email" : "phone";
    setMode(next);
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.placeholder = MODES[next].placeholder;
    }
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.placeholder = MODES[mode].placeholder;
  }, [mode]);

  useEffect(() => {
    return () => { if (blinkRef.current) clearInterval(blinkRef.current); };
  }, []);

  const cfg = MODES[mode];

  return (
    <div className="box-border caret-transparent col-end-[span_2] col-start-[span_2] min-h-[auto] min-w-[auto] mb-10 md:col-end-[span_6] md:col-start-[span_6] md:mb-0">
      <h3 className="text-amber-400 text-2xl font-semibold box-border caret-transparent tracking-[-1.2px] leading-[28.8px] mb-4">
        Sign Up for 52% Off
      </h3>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent block h-auto md:h-[265px]">
          <div className="relative box-border caret-transparent w-full">
            <div className="box-border caret-transparent flex flex-col max-w-none w-full md:max-w-[450px]">
              <form className="box-border caret-transparent min-h-[auto] min-w-[auto] w-full">
                <input
                  name="shop_id"
                  type="hidden"
                  value="254532"
                  className="appearance-none bg-transparent box-border caret-transparent hidden p-0"
                />
                <input
                  name="keyword_id"
                  type="hidden"
                  value="336917"
                  className="appearance-none bg-transparent box-border caret-transparent hidden p-0"
                />
                <div className="box-border caret-transparent w-full px-0.5">
                  <div className="relative items-center box-border caret-transparent gap-x-1 flex justify-between w-full">
                    <input
                      ref={inputRef}
                      name={cfg.name}
                      type={cfg.type}
                      aria-label={cfg.label}
                      placeholder={cfg.placeholder}
                      onFocus={startBlink}
                      onBlur={stopBlink}
                      onChange={handleChange}
                      className="text-green-700 text-xl box-border caret-auto block h-[50px] min-h-[auto] min-w-[auto] w-full border border-green-950 px-4 py-3 border-solid focus:outline-none focus:ring-0 focus:border-green-950"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="items-center bg-amber-400 caret-transparent flex h-[52px] justify-center min-h-[auto] min-w-[auto] text-center w-[50px] border border-orange-950 p-0"
                    >
                      <span className="text-green-950 box-border caret-transparent block min-h-[auto] min-w-[auto]">
                        ➝
                      </span>
                    </button>
                  </div>
                </div>
              </form>
              <div className="items-center bg-slate-200 box-border caret-transparent gap-x-2 hidden w-full overflow-hidden mt-4 p-3 rounded-bl rounded-br rounded-tl rounded-tr md:w-fit">
                <img
                  src="/images/product/icon-29.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 w-4"
                />
                <p className="text-green-950 text-sm box-border caret-transparent tracking-[-0.28px] leading-[14px]">
                  Thanks for Subscribing! We'll send you a message shortly
                </p>
              </div>
              <iframe
                name="dummyframe"
                className="box-border caret-transparent h-0 min-h-[auto] min-w-[auto] w-0"
              ></iframe>
              <button
                type="button"
                onClick={handleToggle}
                className="text-white text-xl bg-transparent caret-transparent block min-h-[auto] min-w-[auto] text-center underline w-fit my-3 p-0"
              >
                {cfg.toggle}
              </button>
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <p className="text-white/70 text-sm box-border caret-transparent tracking-[-0.28px] leading-[22.4px] mb-5">
                  **By providing your number and clicking the button, you agree
                  to receive recurring auto-dialed marketing SMS (including cart
                  reminders; AI content; artificial or prerecorded voices) and
                  our{" "}
                  <a
                    href="/policies/terms-of-service"
                    title="Terms of Service"
                    className="box-border caret-transparent underline"
                  >
                    Terms of Service
                  </a>
                  (including arbitration). Consent is not required to purchase.
                  Msg &amp; data rates may apply. Msg frequency varies. Reply
                  HELP for help; STOP to opt-out.{" "}
                  <a
                    href="/policies/privacy-policy"
                    title="Privacy Policy"
                    className="box-border caret-transparent underline"
                  >
                    View Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
