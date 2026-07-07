import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

type State = { name: string; imgSrc: string };

const STATES: State[] = [
  { name: "Oregon", imgSrc: "/images/hear/oregon-yellow.svg" },
  { name: "Georgia", imgSrc: "/images/hear/georgia-red.svg" },
  { name: "Alaska", imgSrc: "/images/hear/alaska-lightblue.svg" },
  { name: "Connecticut", imgSrc: "/images/hear/connecticut-lightgreen.svg" },
  { name: "Michigan", imgSrc: "/images/hear/michigan-blue.svg" },
  { name: "Arkansas", imgSrc: "/images/hear/arkansas-green.svg" },
];

const reviews = [
  {
    title: "Great product, great service",
    body: "This is my first experience with hearing aids and I have to say that with hear.com it has been a breeze",
    author: "Jeanne DiPrima, US 🇺🇸",
  },
  {
    title: "I am amazed at how well I hear now",
    body: "The audiologist was great, and the whole experience was simple. I wish I hadn't waited so long to get hearing aids!",
    author: "Ernest Hiscox, US 🇺🇸",
  },
  {
    title: "A company that cares",
    body: "I found the level of care to be exceptional. I am hearing so much more clearly.",
    author: "Bill Ditto, US 🇺🇸",
  },
];

export const HearStateSelector = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div className="caret-transparent max-w-[830px] mx-auto px-5 md:px-8" ref={ref}>
      <div className="caret-transparent mb-[60px]">
        <div className="reveal caret-transparent mb-[30px] md:mb-10">
          <h1 className="text-[32px] font-bold caret-transparent leading-[41.6px] font-archivo md:text-4xl md:leading-[46.8px]">
            Where can I get Horizon IX?
          </h1>
        </div>
        <div className="reveal reveal-delay-1 caret-transparent mb-[30px]">
          <p className="text-[26px] caret-transparent leading-[39px]">
            As of <span className="caret-transparent">March 2026</span>,
            hear.com has partnered with over 2,000 specialists to ensure{" "}
            <strong className="font-bold caret-transparent">
              Horizon IX devices are available across the U.S.
            </strong>
          </p>
        </div>
        <div className="reveal reveal-delay-2 caret-transparent mb-[30px]">
          <p className="text-[26px] caret-transparent leading-[39px]">
            Now, Americans everywhere can experience{" "}
            <mark className="font-bold bg-orange-200 caret-transparent">
              effortless hearing in any situation
            </mark>
            — from crowded restaurants to cherished family gatherings—all with a
            device so discreet and comfortable, you&#39;ll completely forget
            you&#39;re wearing it.
          </p>
        </div>
        <div className="reveal reveal-delay-3 caret-transparent mb-[30px]">
          <p className="text-[26px] caret-transparent leading-[39px]">
            Most people who try Horizon IX report the same thing:{" "}
            <strong className="font-bold caret-transparent">
              &ldquo;I wish I had done this sooner.&rdquo;
            </strong>
            {" "}And their friends and family always agree. So do yourself a favor
            and don&#39;t wait.
          </p>
        </div>
        <div className="reveal reveal-delay-4 caret-transparent mb-10">
          <p className="text-[26px] caret-transparent leading-[39px]">
            <span className="caret-transparent">Click</span>
            {" "}on your state below to check if you qualify for a{" "}
            <strong className="font-bold caret-transparent">
              45-day no-risk trial
            </strong>
            {" "}today.
          </p>
        </div>

        {/* State Selector Box */}
        <div className="reveal caret-transparent mb-[30px] md:mb-10">
          <div className="caret-transparent mb-[30px] md:mb-[35px]">
            <div className="bg-sky-50 caret-transparent -mx-5 px-5 py-[30px] md:mx-0 md:px-[55px] md:py-10">
              <div className="caret-transparent mb-5">
                <p className="text-[26px] font-bold caret-transparent leading-[39px] font-archivo md:text-3xl md:leading-[45px]">
                  <span className="text-[26px] caret-transparent leading-[39px] md:text-3xl md:leading-[45px]">
                    Click
                  </span>
                  {" "}on the state you live in:
                </p>
              </div>

              {/* Success message */}
              {selected && (
                <div className="mb-5 px-4 py-3 bg-green-50 border border-green-300 rounded-lg text-green-800 text-xl animate-fade-in">
                  ✅ <strong>{selected}</strong> is available! You may qualify for a 45-day no-risk trial.
                  <a
                    href="#"
                    className="block mt-2 text-sky-600 font-bold underline hover:text-sky-800 transition-colors"
                  >
                    Check your eligibility →
                  </a>
                </div>
              )}

              <div className="caret-transparent mb-5">
                <div className="caret-transparent grid grid-cols-2 gap-2.5 md:grid-cols-3">
                  {STATES.map((s) => (
                    <button
                      key={s.name}
                      onClick={() => setSelected(s.name)}
                      className={`items-center bg-white caret-transparent flex justify-between border p-[7px] rounded-[10px] border-solid transition-all duration-200 cursor-pointer
                        ${selected === s.name
                          ? "border-amber-500 bg-amber-100 shadow-md"
                          : "border-blue-300 hover:bg-amber-400 hover:border-amber-400 hover:shadow-sm"
                        }`}
                    >
                      <img
                        src={s.imgSrc}
                        alt={`${s.name} state`}
                        className="caret-transparent min-h-[auto] min-w-[auto] align-baseline"
                      />
                      <p className="text-[20px] md:text-[25px] caret-transparent grow min-h-[auto] min-w-[auto] text-left font-archivo">
                        {s.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
              <a
                href="#"
                className="text-[22px] font-bold caret-transparent block text-center underline hover:text-sky-600 transition-colors duration-200"
              >
                Don&#39;t see your state?{" "}
                <span className="caret-transparent">Click</span>
                {" "}here{" "}
                <img
                  src="/images/hear/double-arrow.svg"
                  alt=""
                  className="caret-transparent inline align-baseline"
                />
              </a>
            </div>
          </div>
          <div className="caret-transparent mb-10">
            <picture className="caret-transparent">
              <img
                src="/images/hear/trust-logos-new-desk.png"
                alt="happy customers"
                className="caret-transparent align-baseline w-full"
              />
            </picture>
          </div>
        </div>

        <div className="reveal caret-transparent mb-[30px]">
          <div className="bg-neutral-400 caret-transparent h-px"></div>
        </div>
        <div className="reveal caret-transparent mb-[25px]">
          <h1 className="text-[32px] font-bold caret-transparent leading-[41.6px] font-archivo md:text-4xl md:leading-[46.8px]">
            Join 540,000 happy customers who trust hear.com
          </h1>
        </div>
        <div className="reveal reveal-delay-1 caret-transparent mb-[30px] md:mb-10">
          <p className="text-[26px] caret-transparent leading-[39px]">
            <mark className="font-bold bg-orange-200 caret-transparent">
              Over 540,000 wearers
            </mark>
            {" "}can&#39;t be wrong. Here&#39;s what they have to say:
          </p>
        </div>

        {/* Reviews */}
        <div className="caret-transparent">
          {reviews.map((review, index) => (
            <div key={index} className="caret-transparent">
              <div className={`reveal reveal-delay-${index + 1} caret-transparent`}>
                <div className="items-baseline caret-transparent gap-x-2.5 flex flex-wrap gap-y-2.5 mb-5">
                  <p className="text-[26px] font-bold caret-transparent leading-[33.8px] min-h-[auto] min-w-[auto]">
                    {review.title}
                  </p>
                  <img
                    src="/images/hear/stars.svg"
                    alt="5 stars"
                    className="caret-transparent max-w-[100px] min-h-[auto] min-w-[auto] align-baseline w-full"
                  />
                </div>
                <div className="caret-transparent mb-5">
                  <p className="text-[26px] caret-transparent leading-[39px]">
                    {review.body}
                  </p>
                </div>
                <div className="caret-transparent mb-[30px]">
                  <p className="text-xl caret-transparent leading-[26px]">
                    {review.author} |{" "}
                    <strong className="font-bold caret-transparent">
                      Verified Buyer
                    </strong>
                  </p>
                </div>
              </div>
              {index < reviews.length - 1 && (
                <div className="caret-transparent mb-[30px]">
                  <div className="bg-neutral-400 caret-transparent h-px"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
