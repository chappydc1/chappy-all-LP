"use client";

import { useEffect, useState } from "react";
import { HearLoadingStep } from "./HearLoadingStep";
import { HearQuizStep } from "./HearQuizStep";
import { HearProgressIndicator } from "./HearProgressIndicator";

const TOTAL_QUIZ_STEPS = 31; // steps 0–30; step 31 is handled as end-of-quiz

export const HearQuizViewport = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [phase, setPhase] = useState<"quiz" | "loading" | "result">("quiz");

  const next = () => {
    const nextStep = currentStep + 1;
    if (nextStep >= TOTAL_QUIZ_STEPS) {
      setPhase("loading");
    } else {
      setCurrentStep(nextStep);
    }
  };

  useEffect(() => {
    if (phase === "loading") {
      const t = setTimeout(() => setPhase("result"), 2500);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (phase === "loading") {
    return (
      <div className="relative max-w-[568px] min-h-[690px] mx-auto flex flex-col items-center justify-center gap-6 px-6 md:min-h-[640px]">
        <img
          src="/images/hear/loader-hearcom-logo.svg"
          alt="hear.com"
          className="h-[52px] w-[140px] object-contain"
        />
        <div className="relative w-full h-[70px] rounded-full overflow-hidden border-2 border-sky-700 bg-white shadow-[rgba(0,0,0,0.15)_0px_2px_10px_0px]">
          <div className="absolute inset-0 bg-blue-300 animate-[loading-bar_2.5s_ease-in-out_forwards]" />
          <div className="relative z-10 flex h-full items-center justify-center text-xl font-bold font-open_sans">
            Saving...
          </div>
        </div>
        <style>{`
          @keyframes loading-bar {
            from { transform: scaleX(0); transform-origin: left; }
            to   { transform: scaleX(1); transform-origin: left; }
          }
        `}</style>
      </div>
    );
  }

  if (phase === "result") {
    return (
      <div className="relative max-w-[568px] min-h-[690px] mx-auto flex flex-col items-center justify-center gap-8 px-6 text-center md:min-h-[640px]">
        <div className="w-20 h-20 rounded-full bg-sky-700 flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-sky-700 font-open_sans mb-2">You qualify!</h2>
          <p className="text-zinc-600 text-lg font-georgia leading-relaxed">
            Based on your answers, you qualify for a{" "}
            <strong className="text-zinc-800">no-risk hearing aid trial</strong> with hear.com.
          </p>
        </div>
        <a
          href="https://www.hear.com/"
          className="w-full max-w-[420px] bg-sky-700 hover:bg-sky-800 text-white text-xl font-bold font-open_sans py-5 px-8 rounded-[15px] transition-colors text-center block"
        >
          Claim Your Free Trial →
        </a>
        <p className="text-stone-400 text-sm font-georgia">
          No commitment required. Cancel anytime.
        </p>
      </div>
    );
  }

  return (
    <div className="relative box-border caret-transparent max-w-[568px] min-h-[690px] outline-[3px] overflow-hidden mx-auto md:min-h-[640px]">
      <div
        className="box-border caret-transparent max-h-[1025px] outline-[3px] text-nowrap transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentStep * 100}%)` }}
      >
        {/* Slide 0 */}
        <div className="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal">
          <HearLoadingStep />
          <HearQuizStep
            rootClassName="box-border caret-transparent outline-[3px] whitespace-normal"
            innerClassName="box-border caret-transparent outline-[3px]"
            question={
              <>
                <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                  Who
                </span>
                {" needs hearing aids?"}
              </>
            }
            subtitle="(Please select one answer only)"
            includeCheckboxInputs="Searching_For__c"
            onSelect={next}
            options={[
              {
                label: "Me",
                value: "self",
                labelClassName:
                  "text-black text-xl font-bold bg-sky-50 box-border caret-transparent block leading-[26px] outline-[3px] border-sky-700/50 overflow-hidden pl-[25px] pr-[30px] py-5 rounded-[15px] border-2 border-solid font-open_sans md:bg-white hover:bg-white cursor-pointer",
              },
              {
                label: "Someone else",
                value: "other",
                labelClassName:
                  "text-black text-xl font-bold bg-sky-50 box-border caret-transparent block leading-[26px] outline-[3px] border-sky-700/50 overflow-hidden pl-[25px] pr-[30px] py-5 rounded-[15px] border-2 border-solid font-open_sans hover:bg-white cursor-pointer",
              },
            ]}
          />
        </div>
        {/* Slide 1 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              Do you wear{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                hearing aids?
              </span>
            </>
          }
          options={[{ label: "Yes" }, { label: "Not yet" }]}
        />
        {/* Slide 2 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              Have you had a{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                hearing test
              </span>{" "}
              in the last{" "}
              <span className="box-border caret-transparent inline-block outline-[3px]">
                six months?
              </span>
            </>
          }
          options={[{ label: "Yes" }, { label: "No" }]}
        />
        {/* Slide 3 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              Do you have ringing in your ears{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                (tinnitus)
              </span>
              ?
            </>
          }
          options={[{ label: "Yes" }, { label: "No" }]}
        />
        {/* Slide 4 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                Why
              </span>{" "}
              are you looking for hearing aids now?
            </>
          }
          options={[
            { label: "Have an event coming up" },
            { label: "Done some research" },
            { label: "Want to stay healthy" },
            { label: "Finally have the time" },
            { label: "All of the above" },
          ]}
        />
        {/* Slide 5 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              What is{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                most important
              </span>{" "}
              for you in a new hearing solution?
            </>
          }
          options={[
            { label: "Latest high-end technology" },
            { label: "Best value for my budget" },
            { label: "Premium service" },
          ]}
        />
        {/* Slide 6 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              What are you{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                looking forward
              </span>{" "}
              to with{" "}
              <span className="box-border caret-transparent inline-block outline-[3px]">
                better hearing?
              </span>
            </>
          }
          options={[
            { label: "Effortless conversations with family and friends" },
            { label: "Better understanding at restaurants and bars" },
            { label: "Hearing clearly at church, concerts, and conferences" },
            { label: "All of the above" },
          ]}
        />
        {/* Slide 7 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                When
              </span>{" "}
              do you want to improve{" "}
              <span className="box-border caret-transparent inline-block outline-[3px]">
                your hearing?
              </span>
            </>
          }
          options={[
            { label: "As soon as possible" },
            { label: "Within the next few weeks" },
            {
              label: "I don't know",
              labelClassName:
                "text-black/30 text-xl font-bold box-border caret-transparent block leading-[26px] outline-[3px] text-center w-[230px] overflow-hidden mt-[15px] mx-auto rounded-[15px] font-open_sans cursor-pointer",
            },
          ]}
        />
        {/* Slide 8 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          formClassName="relative box-border caret-transparent outline-[3px] pb-[30px]"
          onSelect={next}
          question={
            <>
              How{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                old
              </span>{" "}
              are your{" "}
              <span className="box-border caret-transparent inline-block outline-[3px]">
                hearing aids?
              </span>
            </>
          }
          options={[
            { label: "2 years old or less" },
            { label: "3 years old" },
            { label: "4 years old" },
            { label: "5 years old or more" },
          ]}
        />
        {/* Slide 9 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              What makes you look for{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                new hearing aids
              </span>
              ?
            </>
          }
          options={[
            {
              label: (
                <>
                  <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                    Ready to upgrade
                  </span>{" "}
                  to hearing aids that give me better results
                </>
              ),
            },
            {
              label: (
                <>
                  <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                    Exploring options
                  </span>{" "}
                  to find out what is new in hearing technology
                </>
              ),
            },
          ]}
        />
        {/* Slide 10 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              Do you want an{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                audiologist
              </span>{" "}
              involved this time, for a professional fitting?
            </>
          }
          options={[
            { label: "Yes" },
            { label: "No" },
            { label: "I'm not sure" },
          ]}
        />
        {/* Slide 11 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <span className="box-border caret-transparent inline-block outline-[3px]">
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                How much
              </span>
              {" do you wear your "}
              <span className="box-border caret-transparent inline-block outline-[3px]">
                hearing aids?
              </span>
            </span>
          }
          options={[
            { label: "At least 6 hours a day" },
            { label: "Less than 6 hours a day" },
            { label: "Only in certain situations" },
            { label: "Barely ever or never" },
          ]}
        />
        {/* Slide 12 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              Do you have ringing in your ears{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                (tinnitus)
              </span>
              ?
            </>
          }
          options={[{ label: "Yes" }, { label: "No" }]}
        />
        {/* Slide 13 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              What are you{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                looking forward
              </span>{" "}
              to with{" "}
              <span className="box-border caret-transparent inline-block outline-[3px]">
                better hearing?
              </span>
            </>
          }
          options={[
            { label: "Effortless conversations with family and friends" },
            { label: "Better understanding at restaurants and bars" },
            { label: "Hearing clearly at church, concerts, and conferences" },
            { label: "All of the above" },
          ]}
        />
        {/* Slide 14 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <span className="box-border caret-transparent inline-block outline-[3px]">
              Why are you looking for{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                new{" "}
                <span className="box-border caret-transparent inline-block outline-[3px]">
                  hearing aids?
                </span>
              </span>
            </span>
          }
          options={[
            { label: "Bluetooth connectivity" },
            { label: "Rechargeable devices" },
            { label: "Better speech clarity" },
            { label: "Smaller devices" },
            { label: "All of the above" },
          ]}
        />
        {/* Slide 15 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              What is{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                most important
              </span>{" "}
              for you in a new{" "}
              <span className="box-border caret-transparent inline-block outline-[3px]">
                hearing solution?
              </span>
            </>
          }
          options={[
            { label: "Latest high-end technology" },
            { label: "Best value for my budget" },
            { label: "Premium service" },
          ]}
        />
        {/* Slide 16 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <span className="box-border caret-transparent inline-block outline-[3px]">
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                When
              </span>{" "}
              do you want new{" "}
              <span className="box-border caret-transparent inline-block outline-[3px]">
                hearing aids?
              </span>
            </span>
          }
          options={[
            { label: "As soon as possible" },
            { label: "Within the next few weeks" },
            {
              label: "I don't know",
              labelClassName:
                "text-black/30 text-xl font-bold box-border caret-transparent block leading-[26px] outline-[3px] text-center w-[230px] overflow-hidden mt-[15px] mx-auto rounded-[15px] font-open_sans cursor-pointer",
              textClassName:
                "box-border caret-transparent inline-block leading-[30px] outline-[3px] underline align-top",
            },
          ]}
        />
        {/* Slide 17 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          innerClassName="box-border caret-transparent flex-col flex-wrap outline-[3px]"
          optionsInnerClassName="box-border caret-transparent flex flex-col flex-wrap outline-[3px]"
          onSelect={next}
          question={
            <>
              Where did you hear{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                about us
              </span>
              ?
            </>
          }
          options={[
            { label: "Review or Comparison Site" },
            { label: "News Article" },
            { label: "Text Message" },
            { label: "Email or Newsletter" },
            { label: "Regular Mail (Letter)" },
            { label: "Print (Magazine, Newspaper)" },
            { label: "Podcast or Radio" },
            { label: "TV" },
            { label: "Friend or Family" },
            { label: "Social Media" },
            { label: "Other" },
          ]}
        />
        {/* Slide 18 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              {"What is your current "}
              <span className="text-sky-700 box-border caret-transparent inline-block outline-[3px]">
                employment status?
              </span>
            </>
          }
          options={[
            { label: "Employed" },
            { label: "Retired" },
            { label: "Other" },
          ]}
        />
        {/* Slide 19 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              Select{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                your credit score
              </span>{" "}
              to see if you qualify for our exclusive{" "}
              <span className="box-border caret-transparent inline-block outline-[3px]">
                financing promotion.
              </span>
            </>
          }
          options={[
            { label: "Excellent (720-850)" },
            { label: "Good (680-719)" },
            { label: "Fair (640-679)" },
            { label: "Poor (580-639)" },
            { label: "Low (300-579)" },
            {
              label: "I don't know",
              labelClassName:
                "text-black/30 text-xl font-bold box-border caret-transparent block leading-[26px] outline-[3px] text-center w-[130px] overflow-hidden mt-[15px] mx-auto rounded-[15px] font-open_sans cursor-pointer",
            },
          ]}
        />
        {/* Slide 20 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              Are you willing to{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                make a $1,500 investment
              </span>{" "}
              toward{" "}
              <span className="box-border caret-transparent inline-block outline-[3px]">
                better hearing?
              </span>
            </>
          }
          options={[
            { label: "Yes" },
            { label: "Yes, if I can finance them" },
            {
              label: "No",
              note: (
                <p className="text-stone-500 text-[13px] box-border caret-transparent leading-[18.5714px] outline-[3px] text-center mt-5">
                  *We offer financing for credit scores as low as 550
                </p>
              ),
            },
          ]}
        />
        {/* Slide 21 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question="Are you a U.S. veteran?"
          options={[{ label: "Yes" }, { label: "No" }]}
        />
        {/* Slide 22 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          formClassName="box-border caret-transparent flex flex-col outline-[3px]"
          questionWrapperClassName="box-border caret-transparent min-h-[auto] min-w-[auto] order-1 outline-[3px] mb-[35px] pt-[25px]"
          questionTextClassName="box-border caret-transparent inline-block order-3 outline-[3px]"
          onSelect={next}
          question={
            <>
              Do you also have access to{" "}
              <span className="text-sky-700 box-border caret-transparent order-3 outline-[3px]">
                hearing benefits
              </span>{" "}
              through{" "}
              <span className="box-border caret-transparent inline-block order-3 outline-[3px]">
                the VA?
              </span>
            </>
          }
          auxiliaryContent={
            <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] order-3 outline-[3px]">
              <span
                onClick={next}
                className="text-black/30 text-xl font-bold box-border caret-transparent flex justify-center leading-[28.5714px] order-3 outline-[3px] text-center underline w-[230px] mt-[30px] mx-auto font-open_sans cursor-pointer"
              >
                I don&apos;t know
              </span>
            </span>
          }
          options={[
            {
              label: "Yes",
              leadingSpanClassName:
                "box-border caret-transparent order-3 outline-[3px]",
              textClassName:
                "box-border caret-transparent inline-block leading-[30px] order-3 outline-[3px] align-top",
            },
            {
              label: "No",
              leadingSpanClassName:
                "box-border caret-transparent order-3 outline-[3px]",
              textClassName:
                "box-border caret-transparent inline-block leading-[30px] order-3 outline-[3px] align-top",
            },
          ]}
        />
        {/* Slide 23 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              What{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                type of insurance
              </span>
              {" plan  "}
              <span className="box-border caret-transparent inline-block outline-[3px]">
                do you have?
              </span>
            </>
          }
          options={[
            { label: "Employer-provided or private plan" },
            { label: "Medicare Advantage" },
            { label: "Original Medicare with Supplement or Medigap" },
            { label: "Original Medicare only" },
            { label: "Medicaid" },
            { label: "I'm not sure" },
          ]}
        />
        {/* Slide 24 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              Which{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                insurance provider
              </span>{" "}
              do you have?
            </>
          }
          options={[
            { label: "United Healthcare" },
            { label: "AARP from United Healthcare" },
            { label: "BlueCross BlueShield" },
            { label: "BlueCross BlueShield Federal" },
            { label: "Aetna" },
            { label: "Humana" },
            { label: "Cigna" },
            { label: "Kaiser Permanente" },
            { label: "Other" },
          ]}
        />
        {/* Slide 25 */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              Are you willing to make that investment toward{" "}
              <span className="box-border caret-transparent inline-block outline-[3px]">
                better hearing?
              </span>
            </>
          }
          options={[
            { label: "Yes" },
            { label: "Yes, if I can finance them" },
            {
              label: "No",
              note: (
                <p className="text-stone-500 text-[13px] box-border caret-transparent leading-[18.5714px] outline-[3px] text-center mt-5">
                  *We offer financing for credit scores as low as 550
                </p>
              ),
            },
          ]}
        />
        {/* Slide 26 — age input */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              What is your{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                age
              </span>
              ?
            </>
          }
          input={{
            name: "Precise_Age__c",
            type: "number",
            placeholder: "Enter age",
            className:
              "appearance-none text-neutral-600 text-[22px] bg-zinc-50 box-border caret-transparent block h-[70px] leading-[28.6px] outline-[3px] w-full border-neutral-300 mb-[35px] px-[25px] py-5 rounded-[15px] border-solid font-arial",
          }}
        />
        {/* Slide 27 — zip code input */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              Enter your{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                zip code
              </span>
              {"\n"} so we can locate one of our licensed partner providers near{" "}
              <span className="box-border caret-transparent inline-block outline-[3px]">
                your home.
              </span>
            </>
          }
          input={{
            name: "PostalCode",
            type: "number",
            placeholder: "Enter zip code",
            className:
              "appearance-none text-neutral-600 text-[22px] bg-zinc-50 box-border caret-transparent block h-[70px] leading-[28.6px] outline-[3px] w-full border-neutral-300 mb-[35px] px-[25px] py-5 rounded-[15px] border-solid font-arial",
          }}
        />
        {/* Slide 28 — name input */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              Enter your{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                name
              </span>
              {" to secure your trial."}
            </>
          }
          salutation
          input={{
            name: "LastName",
            type: "text",
            placeholder: "Enter full name",
            className:
              "appearance-none text-neutral-600 text-[22px] bg-zinc-50 box-border caret-transparent block h-[70px] leading-[28.6px] outline-[3px] w-full border-neutral-300 mb-[35px] px-[25px] py-5 rounded-[15px] border-solid font-arial",
          }}
        />
        {/* Slide 29 — phone input */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          onSelect={next}
          question={
            <>
              Enter your{" "}
              <span className="text-sky-700 box-border caret-transparent outline-[3px]">
                mobile phone number
              </span>{" "}
              to reserve your no-risk hearing aid trial.
            </>
          }
          formClassName="box-border caret-transparent flex flex-col outline-[3px]"
          input={{
            name: "Phone",
            type: "tel",
            placeholder: "Enter mobile phone number",
            className:
              "appearance-none text-neutral-600 text-[22px] bg-zinc-50 box-border caret-transparent block h-[70px] leading-[28.6px] outline-[3px] w-full border-neutral-300 mb-[45px] px-[25px] py-5 rounded-[15px] border-solid font-arial md:mb-[35px]",
          }}
          auxiliaryContent={
            <div className="text-stone-500 text-[10px] box-border caret-transparent clear-both leading-[11px] min-h-[auto] min-w-[auto] order-3 outline-[3px]">
              <span className="text-xs box-border caret-transparent leading-[15.6px] outline-[3px] font-open_sans">
                By clicking &quot;Submit&quot; you authorize and request hear.com, its
                affiliate hearing-aid-advice.com, &amp; their partners that
                assist in fitting &amp; supplying hearing aids to call or text
                you at the phone number you&apos;ve provided for marketing &amp;
                related purposes, including texts about third-party financing
                options. Calls &amp; texts may be made using automated dialing
                or prerecorded voice technology, and may be made throughout the
                day including after 8 p.m. or before 8 a.m. You also agree to
                our{" "}
                <a
                  href="https://www.hear.com/privacy-policy/"
                  className="box-border caret-transparent outline-[3px] underline"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://www.hear.com/terms-and-conditions/"
                  className="box-border caret-transparent outline-[3px] underline"
                >
                  Terms &amp; Conditions
                </a>
                . Your consent to receive marketing calls or texts is not a
                condition of making a hearing aid purchase with us or use of our
                services. Frequency will vary. Msg &amp; data rates may apply.
                If you don&apos;t wish to receive calls or texts from us, please
                contact us at{" "}
                <a
                  href="tel://(786)520-2456"
                  className="box-border caret-transparent outline-[3px] underline"
                >
                  (786)520-2456
                </a>
                , or reply STOP via SMS to cancel, or reply HELP via SMS for
                help, or go to{" "}
                <a
                  href="https://www.hear.com/terms-and-conditions/"
                  className="box-border caret-transparent outline-[3px] underline"
                >
                  Terms &amp; Conditions
                </a>{" "}
                for more options.
              </span>
            </div>
          }
          buttonText="Submit"
        />
        {/* Slide 30 — email input */}
        <HearQuizStep
          rootClassName="box-border caret-transparent inline-block outline-[3px] align-top w-full px-[25px] whitespace-normal"
          formClassName="box-border caret-transparent flex flex-col outline-[3px]"
          onSelect={next}
          question="Enter your email to receive your confirmation."
          input={{
            name: "Email",
            type: "email",
            placeholder: "Enter email address",
            className:
              "appearance-none text-neutral-600 text-[22px] bg-zinc-50 box-border caret-transparent block h-[70px] leading-[28.6px] outline-[3px] w-full border-neutral-300 mb-[35px] px-[25px] py-5 rounded-[15px] border-solid font-arial",
          }}
          auxiliaryContent={
            <div className="relative box-border caret-transparent outline-[3px] mb-[30px]">
              <label className="items-center box-border caret-transparent flex outline-[3px]">
                <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                  <span className="relative box-border caret-transparent outline-[3px]">
                    <input
                      name="Secondary_Opt_in__m"
                      type="checkbox"
                      value="false"
                      className="relative text-black text-[13.3333px] items-center bg-zinc-50 box-border caret-transparent inline-flex justify-center leading-[normal] outline-[3px] overflow-visible mr-2 p-0 scale-150 top-0 font-arial"
                    />
                  </span>
                </span>
                <span className="text-black text-base box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-left">
                  By checking this box you agree to our
                  <span className="text-sky-700 box-border caret-transparent outline-[3px] underline">
                    HIPAA disclosure
                  </span>
                  terms.
                </span>
              </label>
            </div>
          }
          consentContent={
            <div className="text-stone-500 text-[10px] box-border caret-transparent clear-both leading-[11px] min-h-[auto] min-w-[auto] order-3 outline-[3px]">
              <span className="text-xs box-border caret-transparent leading-[15.6px] outline-[3px] font-open_sans">
                <span className="box-border caret-transparent outline-[3px]">
                  We treat your email address and personal data as strictly
                  confidential and never pass it on to any third party.
                </span>
              </span>
            </div>
          }
          buttonText="Send Confirmation"
        />
      </div>
      <HearProgressIndicator />
    </div>
  );
};
