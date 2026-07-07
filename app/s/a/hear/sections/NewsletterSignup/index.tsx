import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const HearNewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const ref = useScrollReveal<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  return (
    <div className="bg-blue-950 caret-transparent py-[30px]" ref={ref}>
      <div className="caret-transparent max-w-[1180px] mx-auto px-5 md:px-8">
        <div className="reveal caret-transparent mb-[30px]">
          <div className="caret-transparent gap-x-2.5 flex flex-col justify-between gap-y-2.5 md:flex-row">
            <img
              src="/images/hear/hearcom-logo.svg"
              alt="hearcom logo"
              className="caret-transparent max-w-[130px] min-h-[auto] min-w-[auto] align-baseline mb-[30px] pb-0 md:max-w-[200px] md:mb-0 md:pb-5"
            />
            <div className="[align-items:normal] caret-transparent gap-x-[normal] block min-h-[auto] min-w-[auto] gap-y-[normal] md:items-center md:gap-x-10 md:flex md:gap-y-10">
              <div className="caret-transparent min-h-0 min-w-0 text-left mr-0 mb-5 md:min-h-[auto] md:min-w-[auto] md:text-start md:mr-2.5">
                <p className="text-neutral-300 caret-transparent leading-[20.8px] text-left capitalize mb-1 md:text-start">
                  Curious about{" "}
                  <span className="caret-transparent text-left md:text-start">
                    hearing aids?
                  </span>
                </p>
                <p className="text-neutral-300 text-sm caret-transparent leading-[18.2px] text-left md:text-start">
                  Get your{" "}
                  <span className="italic font-bold caret-transparent text-left md:text-start">
                    free guide
                  </span>
                  {" "}today:
                </p>
              </div>
              <div className="caret-transparent max-w-[375px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                {status === "success" ? (
                  <div className="text-green-400 text-lg font-semibold py-4 animate-fade-in">
                    ✅ Your free guide is on the way!
                  </div>
                ) : (
                  <form
                    className="relative caret-transparent flex justify-normal max-w-full mb-[5px] md:justify-center md:max-w-none"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                      placeholder="Enter your email address"
                      className={`text-[17px] caret-auto block max-w-[50%] min-h-[auto] min-w-[auto] text-ellipsis w-auto px-[22px] py-[15px] rounded-l-[13px] border-r-0 border-b border-l border-t font-arial md:max-w-none md:w-full outline-none transition-colors duration-200 focus:ring-2 focus:ring-sky-400
                        ${status === "error" ? "border-red-400 border-b-red-400 border-l-red-400 border-t-red-400" : "border-b-neutral-300 border-l-neutral-300 border-t-neutral-300 border-r-black"}`}
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className={`relative text-white text-lg font-semibold bg-sky-600 caret-transparent block min-h-[auto] min-w-[91px] text-center text-nowrap border border-neutral-300 p-[15px] rounded-r-[13px] md:min-w-[auto] transition-all duration-200 cursor-pointer
                        ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-sky-700 active:scale-95"}`}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2 justify-center">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                          </svg>
                          Sending
                        </span>
                      ) : (
                        <span className="caret-transparent text-nowrap">Subscribe</span>
                      )}
                    </button>
                  </form>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm mt-1 animate-fade-in">
                    Please enter a valid email address.
                  </p>
                )}
                <p className="text-stone-300 text-[11px] caret-transparent leading-[14.3px] mt-1">
                  By signing up to receive our guide, you&#39;ll be opted in{" "}
                  <span className="caret-transparent">
                    to receive marketing emails from hear.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-1 caret-transparent mb-[30px]">
          <p className="text-white caret-transparent leading-[20.8px]">
            hear.com is the nation&#39;s most trusted hearing aid company,
            empowering people with cutting-edge technology and expert advice
            since 2012. As the #1 global leader in online hearing care, hear.com
            has over 540,000 happy customers and counting.
          </p>
        </div>
        <div className="reveal reveal-delay-2 caret-transparent mb-2.5">
          <p className="text-stone-300 text-xs caret-transparent leading-[15.6px]">
            1 Bluetooth technology is only available with the behind-the-ear
            Horizon Go IX model, which sits discreetly behind the ear.
          </p>
        </div>
        <div className="reveal reveal-delay-3 caret-transparent mb-2.5">
          <p className="text-stone-300 text-xs caret-transparent leading-[15.6px]">
            2 Jensen, Niels Søgaard, Barinder Samra, Homayoun Kamkar Parsi,
            Sascha Bilert, and Brian Taylor. &ldquo;Signia White Paper: Power The
            Conversation with Signia Integrated Xperience.&rdquo; Signia Pro, December
            4, 2023.
            https://www.signia-pro.com/en-gb/blog/global/2023-09-power-the-conversation-with-signia-integrated-xperience/.
          </p>
        </div>
        <div className="reveal reveal-delay-4 caret-transparent mb-2.5">
          <footer className="text-neutral-300 caret-transparent flex flex-wrap gap-x-1 gap-y-1">
            {[
              { label: "Imprint", href: "#" },
              { label: "Privacy Policy", href: "#" },
              { label: "Do Not Sell My Personal Information", href: "#" },
              { label: "HIPAA Notice of Privacy Practices", href: "#" },
              { label: "AdChoices", href: "#" },
              { label: "Terms & Conditions", href: "#" },
            ].map((link, i, arr) => (
              <span key={link.label} className="inline-flex items-center gap-1">
                <a
                  href={link.href}
                  className="text-stone-300 text-xs caret-transparent hover:text-white transition-colors duration-200 underline-offset-2 hover:underline"
                >
                  {link.label}
                </a>
                {i < arr.length - 1 && <span className="text-stone-500 text-xs">|</span>}
              </span>
            ))}
          </footer>
        </div>
        <p className="text-stone-300 text-xs caret-transparent leading-[15.6px]">
          © <span className="caret-transparent">2026</span>
          {" "}All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
