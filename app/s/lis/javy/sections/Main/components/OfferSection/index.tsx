"use client";

import { useScrollReveal } from "../../../../hooks/useScrollReveal";
import { JavyOfferCard } from "../../../Main/components/OfferSection/components/OfferCard";

export const JavyOfferSection = () => {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const cardRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="offer" className="bg-yellow-50 box-border">
      <div className="box-border px-4 md:px-10">
        <div className="box-border max-w-screen-md w-full mx-auto">
          <div className="box-border gap-x-12 flex flex-col gap-y-12 pt-12 pb-8 md:pb-20">
            <div
              ref={headingRef}
              className="scroll-reveal items-center box-border flex flex-col justify-center max-w-[360px] min-h-[auto] min-w-[auto] text-center mx-auto md:max-w-[610px]"
            >
              <h2 className="relative text-[28px] font-bold box-border tracking-[-0.8px] leading-[33.6px] min-h-[auto] min-w-[auto]">
                Reaching #11 means one thing: you&#39;re truly serious about a
                better morning coffee routine.
                <br className="box-border" />
              </h2>
              <div className="box-border min-h-[auto] min-w-[auto] pb-5 md:pb-4"></div>
              <div className="text-[18.4px] box-border tracking-[-0.368px] leading-[27.6px] min-h-[auto] min-w-[auto]">
                ✨ We don&#39;t hand these out every day… consider this an exclusive
                Javvy hookup, just for you.
                <br className="box-border" />
              </div>
            </div>
            <div
              ref={cardRef}
              className="scroll-reveal relative items-center box-border flex flex-col min-h-[auto] min-w-[auto] border mx-auto border-dashed w-full"
            >
              <div className="box-border min-h-[auto] min-w-[auto] text-center w-full">
                <div className="items-center box-border flex flex-col justify-center max-w-[1168px]">
                  <JavyOfferCard />
                </div>
              </div>
              <div className="absolute items-center box-border flex h-10 justify-center w-[90%] mx-auto -top-6 inset-x-[0%] md:w-4/5">
                <div className="text-[18.75px] font-black items-center bg-indigo-900 box-border flex h-10 justify-center leading-[28.125px] min-h-[auto] min-w-[auto] uppercase px-4 py-2 rounded-[10px] md:text-2xl md:leading-9 animate-wiggle">
                  <p className="text-white text-[15px] box-border leading-[22.5px] min-h-[auto] min-w-[auto] md:text-[22px] md:leading-[33px]">
                    🌼 SPRING SPECIAL 🌸
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
