"use client";

import { useState, useEffect } from "react";
import { QuizStep } from "./components/QuizStep";
import { AnalysisStep } from "./components/AnalysisStep";
import { RecommendationStep } from "./components/RecommendationStep";

export const QuizSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number>>({});

  const advance = () => setCurrentStep((s) => s + 1);
  const selectOption = (stepIndex: number, optionIndex: number) =>
    setSelectedOptions((prev) => ({ ...prev, [stepIndex]: optionIndex }));

  useEffect(() => {
    if (currentStep === 9) {
      const timer = setTimeout(() => setCurrentStep(10), 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <section className="relative items-stretch bg-white bg-[linear-gradient(rgb(224,250,250),rgb(255,246,238))] box-border caret-transparent flex flex-col h-full justify-start min-h-[1000px] outline-[3px]">
      <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full z-[999] px-4 md:px-10">
        <div className="items-start box-border caret-transparent flex justify-center max-w-screen-lg outline-[3px] w-full mx-auto">
          <div className="box-border caret-transparent min-h-[auto] min-w-full outline-[3px] w-full md:min-w-[1080px]">
            <div className="relative items-stretch box-border caret-transparent gap-x-4 flex flex-col h-full justify-start max-w-full min-w-full outline-[3px] gap-y-4 w-full md:max-w-none md:min-w-[1080px]">
              <QuizStep
                rootVariant="min-h-[auto] pb-24"
                progressStep={1}
                isActive={currentStep === 0}
                onContinue={advance}
                selectedOptionIndex={selectedOptions[0]}
                onOptionSelect={(i) => selectOption(0, i)}
                headerClassName="items-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px]"
                headerContent={
                  <div className="text-2xl font-bold box-border caret-transparent tracking-[-0.16px] leading-[28.8px] min-h-[auto] min-w-[auto] outline-[3px] px-4 md:text-[28px] md:leading-[33.6px] md:px-0">
                    Where do you currently get your coffee from?
                  </div>
                }
                subheaderContent="(select your favorite)"
                subheaderClassName="text-lg box-border caret-transparent leading-[27px] max-w-[480px] min-h-[auto] min-w-[auto] outline-[3px] mt-1 md:mt-2.5"
                showHeaderSpacer={true}
                headerSpacerClassName="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] before:accent-auto before:caret-transparent before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-filson_pro after:accent-auto after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-filson_pro"
                optionsWrapperClassName="box-border caret-transparent gap-x-1.5 grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto_auto_auto] max-h-[290px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 w-full md:gap-x-3 md:max-h-[420px] md:gap-y-3 after:accent-auto after:caret-transparent after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:pb-[100%] after:border-separate after:font-filson_pro"
                options={[
                  {
                    label: "Starbucks",
                    imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/6765a1519edd9107ae8066c4_quiz-logo-starbucks.png",
                    imageAlt: "",
                    imageSizes: "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 min-w-[auto] outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    imageClassName: "text-[13.6px] box-border caret-transparent h-[52px] leading-[20.4px] max-w-[120px] min-h-[auto] min-w-[auto] object-contain outline-[3px] md:text-base md:h-[60px] md:leading-6 md:max-w-full",
                    labelClassName: "text-[13.6px] box-border caret-transparent hidden leading-[20.4px] outline-[3px] md:text-base md:leading-6",
                  },
                  {
                    label: "Dunkin'",
                    imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/6765a15227ef2fc9fb2b82fb_quiz-logo-dunkin.png",
                    imageAlt: "",
                    imageSizes: "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 min-w-[auto] outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    imageClassName: "text-[13.6px] box-border caret-transparent h-[52px] leading-[20.4px] max-w-[120px] min-h-[auto] min-w-[auto] object-contain outline-[3px] md:text-base md:h-[60px] md:leading-6 md:max-w-full",
                    labelClassName: "text-[13.6px] box-border caret-transparent hidden leading-[20.4px] outline-[3px] md:text-base md:leading-6",
                  },
                  {
                    label: "Dutch Bros",
                    imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/6765a151865c823e3c2e67ee_quiz-logo-dutchbros.png",
                    imageAlt: "",
                    imageSizes: "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 min-w-[auto] outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    imageClassName: "text-[13.6px] box-border caret-transparent h-[52px] leading-[20.4px] max-w-[120px] min-h-[auto] min-w-[auto] object-contain outline-[3px] md:text-base md:h-[60px] md:leading-6 md:max-w-full",
                    labelClassName: "text-[13.6px] box-border caret-transparent hidden leading-[20.4px] outline-[3px] md:text-base md:leading-6",
                  },
                  {
                    label: "Tim Hortons",
                    imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/6765a1519edd9107ae8066c1_quiz-logo-timehortons.png",
                    imageAlt: "",
                    imageSizes: "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 min-w-[auto] outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    imageClassName: "text-[13.6px] box-border caret-transparent h-[52px] leading-[20.4px] max-w-[120px] min-h-[auto] min-w-[auto] object-contain outline-[3px] md:text-base md:h-[60px] md:leading-6 md:max-w-full",
                    labelClassName: "text-[13.6px] box-border caret-transparent hidden leading-[20.4px] outline-[3px] md:text-base md:leading-6",
                  },
                  {
                    label: "Caribou",
                    imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/6765a151dfd0b0bad0ae2381_quiz-logo-caribou.png",
                    imageAlt: "",
                    imageSizes: "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 min-w-[auto] outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    imageClassName: "text-[13.6px] box-border caret-transparent h-[52px] leading-[20.4px] max-w-[120px] min-h-[auto] min-w-[auto] object-contain outline-[3px] md:text-base md:h-[60px] md:leading-6 md:max-w-full",
                    labelClassName: "text-[13.6px] box-border caret-transparent hidden leading-[20.4px] outline-[3px] md:text-base md:leading-6",
                  },
                  {
                    label: "McCafe",
                    imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/6914abe403c1ee31a6d52d69_mccafe-logo.svg",
                    imageAlt: "",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 min-w-[auto] outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    imageClassName: "text-[13.6px] box-border caret-transparent h-[52px] leading-[20.4px] max-w-[120px] min-h-[auto] min-w-[auto] object-contain outline-[3px] md:text-base md:h-[60px] md:leading-6 md:max-w-full",
                    labelClassName: "text-[13.6px] box-border caret-transparent hidden leading-[20.4px] outline-[3px] md:text-base md:leading-6",
                  },
                  {
                    label: "Peet's Coffee",
                    imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/6765a1514af6bc6dea9557fe_quiz-logo-peetscoffee.png",
                    imageAlt: "",
                    imageSizes: "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 min-w-[auto] outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    imageClassName: "text-[13.6px] box-border caret-transparent h-[52px] leading-[20.4px] max-w-[120px] min-h-[auto] min-w-[auto] object-contain outline-[3px] md:text-base md:h-[60px] md:leading-6 md:max-w-full",
                    labelClassName: "text-[13.6px] box-border caret-transparent hidden leading-[20.4px] outline-[3px] md:text-base md:leading-6",
                  },
                  {
                    label: "Other / None",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 min-w-[auto] outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-6",
                  },
                ]}
                footerClassName="items-center box-border caret-transparent gap-x-2 flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 md:gap-x-2.5 md:gap-y-2.5"
                footerInnerClassName=""
                showTrustpilot={false}
                showBackButton={false}
                ctaClassName="relative text-stone-300 font-bold items-center bg-gray-50 box-border caret-transparent gap-x-3 flex shrink-0 justify-center max-w-[290px] min-h-[61.6px] min-w-[auto] outline-[3px] pointer-events-none w-full overflow-hidden mx-auto px-8 py-4 rounded-lg border-2 border-solid border-transparent md:shrink md:max-w-[360px] md:mx-0 hover:outline-0"
                ctaTextClassName="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] md:shrink"
                ctaText="CONTINUE"
                skipHref="/q/pc84"
                skipClassName="text-indigo-950 text-[12.8px] font-bold items-center box-border caret-transparent gap-x-1.5 hidden justify-center tracking-[0.2px] leading-[19.2px] max-w-full outline-[3px] gap-y-1.5 uppercase w-full z-[99] mt-0.5 mx-auto py-0.5 rounded-[10px] md:text-base md:gap-x-[3px] md:leading-6 md:gap-y-[3px] md:z-auto md:mt-1 hover:outline-0"
                skipTextClassName="text-[12.8px] box-border caret-transparent leading-[19.2px] outline-[3px] underline md:text-base md:leading-6"
                skipText="Skip quiz and get 58% off PROTEIN COFFEE"
              />
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex-col h-full justify-start max-w-full min-w-full outline-[3px] gap-y-4 w-full md:max-w-none md:min-w-[1080px]">
              <QuizStep
                rootVariant="min-h-0 pb-24"
                progressStep={2}
                isActive={currentStep === 1}
                onContinue={advance}
                selectedOptionIndex={selectedOptions[1]}
                onOptionSelect={(i) => selectOption(1, i)}
                headerClassName="items-center box-border caret-transparent flex flex-col justify-center outline-[3px]"
                headerContent={
                  <div className="text-2xl font-bold box-border caret-transparent tracking-[-0.16px] leading-[28.8px] outline-[3px] px-4 md:text-[28px] md:leading-[33.6px] md:px-0">
                    <strong className="text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] md:text-[28px] md:leading-[33.6px]">
                      Which of these protein products do you use?
                    </strong>
                  </div>
                }
                optionsWrapperClassName="box-border caret-transparent gap-x-3 grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto_auto_auto] max-h-[420px] outline-[3px] gap-y-3 after:accent-auto after:caret-transparent after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:pb-[100%] after:border-separate after:font-filson_pro"
                options={[
                  {
                    label: "OWYN",
                    imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/6764603ce1878cfa4360d786_owyn-png.webp",
                    imageAlt: "",
                    imageSizes: "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] max-w-[100px] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    imageClassName: "text-[13.6px] box-border caret-transparent h-[52px] leading-[20.4px] max-w-[74px] object-contain outline-[3px] md:text-base md:h-[60px] md:leading-6 md:max-w-full",
                    labelClassName: "text-[13.6px] box-border caret-transparent hidden leading-[20.4px] outline-[3px] md:text-base md:leading-6",
                  },
                  {
                    label: "Premier Protein",
                    imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/676306396e7f0d6b3d99b09a_premier-protein.webp",
                    imageAlt: "",
                    imageSizes: "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    imageClassName: "text-[13.6px] box-border caret-transparent h-[52px] leading-[20.4px] max-w-[74px] object-contain outline-[3px] md:text-base md:h-[60px] md:leading-6 md:max-w-full",
                    labelClassName: "text-[13.6px] box-border caret-transparent hidden leading-[20.4px] outline-[3px] md:text-base md:leading-6",
                  },
                  {
                    label: "Fairlife",
                    imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/67645e788234053b263df70e_fairlife-png.webp",
                    imageAlt: "",
                    imageSizes: "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    imageClassName: "text-[13.6px] box-border caret-transparent h-[52px] leading-[20.4px] max-w-[74px] object-contain outline-[3px] md:text-base md:h-[60px] md:leading-6 md:max-w-full",
                    labelClassName: "text-[13.6px] box-border caret-transparent hidden leading-[20.4px] outline-[3px] md:text-base md:leading-6",
                  },
                  {
                    label: "Orgain",
                    imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/67645ec124949248023a6f05_orgain-png2.webp",
                    imageAlt: "",
                    imageSizes: "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] max-w-[100px] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    imageClassName: "text-[13.6px] box-border caret-transparent h-[52px] leading-[20.4px] max-w-[74px] object-contain outline-[3px] md:text-base md:h-[60px] md:leading-6 md:max-w-full",
                    labelClassName: "text-[13.6px] box-border caret-transparent hidden leading-[20.4px] outline-[3px] md:text-base md:leading-6",
                  },
                  {
                    label: "Vital Proteins",
                    imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/6a5115db03c69808478ebb9f_logo-vital.webp",
                    imageAlt: "",
                    imageSizes: "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    imageClassName: "text-[13.6px] box-border caret-transparent h-[52px] leading-[20.4px] max-w-[74px] object-contain outline-[3px] md:text-base md:h-[60px] md:leading-6 md:max-w-full",
                    labelClassName: "text-[13.6px] box-border caret-transparent hidden leading-[20.4px] outline-[3px] md:text-base md:leading-6",
                  },
                  {
                    label: "Alani Nu",
                    imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/6a676720642394244a1d9467_alani-protein.webp",
                    imageAlt: "",
                    imageSizes: "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    imageClassName: "text-[13.6px] box-border caret-transparent h-[52px] leading-[20.4px] max-w-[74px] object-contain outline-[3px] md:text-base md:h-[60px] md:leading-6 md:max-w-full",
                    labelClassName: "text-[13.6px] box-border caret-transparent hidden leading-[20.4px] outline-[3px] md:text-base md:leading-6",
                  },
                  {
                    label: "Pure Protein",
                    imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/6914ae72d8cd1661b267a387_premiumprotein-logo.webp",
                    imageAlt: "",
                    imageSizes: "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    imageClassName: "text-[13.6px] box-border caret-transparent h-[52px] leading-[20.4px] max-w-[74px] object-contain outline-[3px] md:text-base md:h-[60px] md:leading-6 md:max-w-full",
                    labelClassName: "text-[13.6px] box-border caret-transparent hidden leading-[20.4px] outline-[3px] md:text-base md:leading-6",
                  },
                  {
                    label: "Other / None",
                    buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-[20.4px] min-h-16 outline-[3px] w-full border overflow-hidden px-4 py-[6.4px] rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-24 md:px-8 md:py-4",
                    contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6",
                    labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] md:text-base md:leading-6",
                  },
                ]}
                footerClassName="fixed bg-white box-border caret-transparent gap-x-2 flex flex-col outline-[3px] gap-y-2 z-[5] px-4 py-2 bottom-[0%] inset-x-[0%] md:static md:bg-transparent md:gap-x-4 md:gap-y-4 md:z-auto md:p-0 md:bottom-auto md:inset-x-auto"
                footerInnerClassName="relative box-border caret-transparent gap-x-4 flex max-h-[61.6px] max-w-[85%] outline-[3px] gap-y-4 w-full z-[5] ml-auto md:static md:max-w-none md:w-auto md:z-auto md:ml-0"
                showBackButton={true}
                ctaClassName="relative text-stone-300 font-bold items-center bg-gray-50 box-border caret-transparent gap-x-3 flex shrink-0 justify-center max-w-full min-h-[61.6px] outline-[3px] pointer-events-none w-full overflow-hidden mx-auto px-8 py-4 rounded-lg border-2 border-solid border-transparent md:shrink md:mx-0 hover:outline-0"
                ctaTextClassName="box-border caret-transparent shrink-0 outline-[3px] md:shrink"
                ctaText="NEXT"
                skipHref="/q/pc84"
                skipClassName="text-indigo-950 text-[12.8px] font-bold items-center box-border caret-transparent gap-x-1.5 hidden justify-center tracking-[0.2px] leading-[19.2px] max-w-full outline-[3px] gap-y-1.5 uppercase w-full z-[99] mt-0.5 mx-auto py-0.5 rounded-[10px] md:text-base md:gap-x-[3px] md:leading-6 md:gap-y-[3px] md:z-auto md:mt-1 hover:outline-0"
                skipTextClassName="text-[12.8px] box-border caret-transparent leading-[19.2px] outline-[3px] underline md:text-base md:leading-6"
                skipText="Skip quiz and get 58% off PROTEIN COFFEE"
              />
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex-col h-full justify-start max-w-full min-w-full outline-[3px] gap-y-4 w-full md:max-w-none md:min-w-[1080px]">
              <QuizStep
                rootVariant="min-h-0 pb-24"
                progressStep={3}
                isActive={currentStep === 2}
                onContinue={advance}
                selectedOptionIndex={selectedOptions[2]}
                onOptionSelect={(i) => selectOption(2, i)}
                headerClassName="items-center box-border caret-transparent flex flex-col justify-center outline-[3px]"
                headerContent={
                  <div className="text-2xl font-bold box-border caret-transparent tracking-[-0.16px] leading-[28.8px] outline-[3px] px-4 md:text-[28px] md:leading-[33.6px] md:px-0">
                    <strong className="text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] md:text-[28px] md:leading-[33.6px]">
                      What are your primary health and fitness goals going into 2026?
                      <br className="text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] md:text-[28px] md:leading-[33.6px]" />
                    </strong>
                  </div>
                }
                showHeaderSpacer={true}
                headerSpacerClassName="absolute bg-[linear-gradient(0deg,rgb(241,247,244)_17%,rgba(241,247,244,0))] box-border caret-transparent h-[50px] outline-[3px] pointer-events-none bottom-[0%] inset-x-[0%]"
                optionsWrapperClassName="box-border caret-transparent gap-x-2 flex flex-col outline-[3px] gap-y-2 md:gap-x-[11px] md:gap-y-[11px]"
                options={[
                  { label: "Weight Loss", imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/669927ac87db1cba3aa00dfb_weight-loss.svg", imageAlt: "", buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6", imageClassName: "text-[13.6px] box-border caret-transparent h-[26px] leading-[20.4px] max-w-full outline-[3px] w-[30px] md:text-base md:h-[30px] md:leading-6", labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] md:text-base md:leading-6", showCheckbox: true },
                  { label: "Energy & Focus", imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/669927aca46b1df2e02f26f5_energy-levels.svg", imageAlt: "", buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6", imageClassName: "text-[13.6px] box-border caret-transparent h-[26px] leading-[20.4px] max-w-full outline-[3px] w-[30px] md:text-base md:h-[30px] md:leading-6", labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] md:text-base md:leading-6", showCheckbox: true },
                  { label: "Muscle Growth", imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/669927ac99d74ce43b71228c_muscle-growth.svg", imageAlt: "", buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6", imageClassName: "text-[13.6px] box-border caret-transparent h-[26px] leading-[20.4px] max-w-full outline-[3px] w-[30px] md:text-base md:h-[30px] md:leading-6", labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] md:text-base md:leading-6", showCheckbox: true },
                  { label: "Anti-Aging", imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/669927ac03ab0142356f4f64_anti-aging.svg", imageAlt: "", buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6", imageClassName: "text-[13.6px] box-border caret-transparent h-[26px] leading-[20.4px] max-w-full outline-[3px] w-[30px] md:text-base md:h-[30px] md:leading-6", labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] md:text-base md:leading-6", showCheckbox: true },
                  { label: "Gut Health", imageUrl: "https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/67acbc991cfe7fb398a15c61_gut-health.svg", imageAlt: "", buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6", imageClassName: "text-[13.6px] box-border caret-transparent h-[26px] leading-[20.4px] max-w-full outline-[3px] w-[30px] md:text-base md:h-[30px] md:leading-6", labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] md:text-base md:leading-6", showCheckbox: true },
                ]}
                footerClassName="fixed bg-white box-border caret-transparent gap-x-2 flex flex-col outline-[3px] gap-y-2 z-[5] px-4 py-2 bottom-[0%] inset-x-[0%] md:static md:bg-transparent md:gap-x-4 md:gap-y-4 md:z-auto md:p-0 md:bottom-auto md:inset-x-auto"
                footerInnerClassName="relative box-border caret-transparent gap-x-4 flex max-h-[61.6px] max-w-[85%] outline-[3px] gap-y-4 w-full z-[5] ml-auto md:static md:max-w-none md:w-auto md:z-auto md:ml-0"
                showTrustpilot={false}
                showBackButton={true}
                ctaClassName="relative text-stone-300 font-bold items-center bg-gray-50 box-border caret-transparent gap-x-3 flex shrink-0 justify-center max-w-full min-h-[61.6px] outline-[3px] pointer-events-none w-full overflow-hidden mx-auto px-8 py-4 rounded-lg border-2 border-solid border-transparent md:shrink md:mx-0 hover:outline-0"
                ctaTextClassName="box-border caret-transparent shrink-0 outline-[3px] md:shrink"
                ctaText="NEXT"
                skipHref="/q/pc84"
                skipClassName="text-indigo-950 text-[12.8px] font-bold items-center box-border caret-transparent gap-x-1.5 hidden justify-center tracking-[0.2px] leading-[19.2px] max-w-full outline-[3px] gap-y-1.5 uppercase w-full z-[99] mt-0.5 mx-auto py-0.5 rounded-[10px] md:text-base md:gap-x-[3px] md:leading-6 md:gap-y-[3px] md:z-auto md:mt-1 hover:outline-0"
                skipTextClassName="text-[12.8px] box-border caret-transparent leading-[19.2px] outline-[3px] underline md:text-base md:leading-6"
                skipText="Skip quiz and get 58% off PROTEIN COFFEE"
              />
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex-col h-full justify-start max-w-full min-w-full outline-[3px] gap-y-4 w-full md:max-w-none md:min-w-[1080px]">
              <QuizStep
                rootVariant="min-h-0 pb-24"
                progressStep={4}
                isActive={currentStep === 3}
                onContinue={advance}
                selectedOptionIndex={selectedOptions[3]}
                onOptionSelect={(i) => selectOption(3, i)}
                headerClassName="items-center box-border caret-transparent flex flex-col justify-center outline-[3px]"
                headerContent={
                  <div className="text-2xl font-bold box-border caret-transparent tracking-[-0.16px] leading-[28.8px] outline-[3px] px-4 md:text-[28px] md:leading-[33.6px] md:px-0">
                    <strong className="text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] md:text-[28px] md:leading-[33.6px]">
                      On average, how many coffee beverages do you drink daily?
                      <br className="text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] md:text-[28px] md:leading-[33.6px]" />
                    </strong>
                  </div>
                }
                showHeaderSpacer={true}
                headerSpacerClassName="absolute bg-[linear-gradient(0deg,rgb(241,247,244)_17%,rgba(241,247,244,0))] box-border caret-transparent h-[50px] outline-[3px] pointer-events-none bottom-[0%] inset-x-[0%]"
                optionsWrapperClassName="box-border caret-transparent gap-x-2 flex flex-col outline-[3px] gap-y-2 md:gap-x-[11px] md:gap-y-[11px]"
                options={[
                  { label: "1 Drink", emoji: "😌", buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6", labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] md:text-base md:leading-6", showCheckbox: true },
                  { label: "2 Drinks", emoji: "🏃", buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6", labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] md:text-base md:leading-6", showCheckbox: true },
                  { label: "3+ Drinks", emoji: "⚡", buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6", labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] md:text-base md:leading-6", showCheckbox: true },
                ]}
                bottomContent={
                  <p className="text-[15px] italic box-border caret-transparent leading-[22.5px] max-w-[400px] outline-[3px] mt-2.5 mx-auto md:text-base md:leading-6">
                    Imagine effortlessly{" "}
                    <strong className="text-[15px] font-bold box-border caret-transparent leading-[22.5px] outline-[3px] md:text-base md:leading-6">hitting your protein goals </strong>
                    with each delicious sip!
                  </p>
                }
                footerClassName="fixed bg-white box-border caret-transparent gap-x-2 flex flex-col outline-[3px] gap-y-2 z-[5] px-4 py-2 bottom-[0%] inset-x-[0%] md:static md:bg-transparent md:gap-x-4 md:gap-y-4 md:z-auto md:p-0 md:bottom-auto md:inset-x-auto"
                footerInnerClassName="relative box-border caret-transparent gap-x-4 flex max-h-[61.6px] max-w-[85%] outline-[3px] gap-y-4 w-full z-[5] ml-auto md:static md:max-w-none md:w-auto md:z-auto md:ml-0"
                showTrustpilot={false}
                showBackButton={true}
                ctaClassName="relative text-stone-300 font-bold items-center bg-gray-50 box-border caret-transparent gap-x-3 flex shrink-0 justify-center max-w-full min-h-[61.6px] outline-[3px] pointer-events-none w-full overflow-hidden mx-auto px-8 py-4 rounded-lg border-2 border-solid border-transparent md:shrink md:mx-0 hover:outline-0"
                ctaTextClassName="box-border caret-transparent shrink-0 outline-[3px] md:shrink"
                ctaText="NEXT"
                skipHref="/q/pc84"
                skipClassName="text-indigo-950 text-[12.8px] font-bold items-center box-border caret-transparent gap-x-1.5 hidden justify-center tracking-[0.2px] leading-[19.2px] max-w-full outline-[3px] gap-y-1.5 uppercase w-full z-[99] mt-0.5 mx-auto py-0.5 rounded-[10px] md:text-base md:gap-x-[3px] md:leading-6 md:gap-y-[3px] md:z-auto md:mt-1 hover:outline-0"
                skipTextClassName="text-[12.8px] box-border caret-transparent leading-[19.2px] outline-[3px] underline md:text-base md:leading-6"
                skipText="Skip quiz and get 58% off PROTEIN COFFEE"
              />
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex-col h-full justify-start max-w-full min-w-full outline-[3px] gap-y-4 w-full md:max-w-none md:min-w-[1080px]">
              <QuizStep
                rootVariant="min-h-0 pb-32"
                progressStep={5}
                isActive={currentStep === 4}
                onContinue={advance}
                selectedOptionIndex={selectedOptions[4]}
                onOptionSelect={(i) => selectOption(4, i)}
                headerClassName="items-center box-border caret-transparent flex flex-col justify-center outline-[3px]"
                headerContent={
                  <div className="text-2xl font-bold box-border caret-transparent tracking-[-0.16px] leading-[28.8px] outline-[3px] px-4 md:text-[28px] md:leading-[33.6px] md:px-0">
                    How much protein per drink would help you reach your goals?
                  </div>
                }
                showHeaderSpacer={true}
                headerSpacerClassName="absolute bg-[linear-gradient(0deg,rgb(241,247,244)_17%,rgba(241,247,244,0))] box-border caret-transparent h-[50px] outline-[3px] pointer-events-none bottom-[0%] inset-x-[0%]"
                optionsWrapperClassName="box-border caret-transparent gap-x-2 flex flex-col outline-[3px] gap-y-2 md:gap-x-[11px] md:gap-y-[11px]"
                options={[
                  { label: (<><strong className="font-bold box-border caret-transparent outline-[3px]">10g protein </strong>(1 scoop - a great daily boost)</>), buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex basis-[0%] grow justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:basis-auto md:grow-0 md:leading-6", labelClassName: "text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-left", showCheckbox: true },
                  { label: (<><strong className="font-bold box-border caret-transparent outline-[3px]">15g protein</strong>{" "}(1.5 scoop - enhanced support &amp; taste)</>), buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex basis-[0%] grow justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:basis-auto md:grow-0 md:leading-6", labelClassName: "text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-left", showCheckbox: true },
                  { label: (<><strong className="font-bold box-border caret-transparent outline-[3px]">20g protein</strong>{" "}(2 scoops - for best results)</>), buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex basis-[0%] grow justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:basis-auto md:grow-0 md:leading-6", labelClassName: "text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-left", showCheckbox: true },
                ]}
                bottomContent={
                  <p className="text-[15px] italic box-border caret-transparent leading-[22.5px] outline-[3px] mt-2.5 mx-auto md:text-base md:leading-6">
                    Customize your protein punch! More scoops mean{" "}
                    <strong className="text-[15px] font-bold box-border caret-transparent leading-[22.5px] outline-[3px] md:text-base md:leading-6">more fuel to crush your cravings and power through your day.</strong>{" "}
                    Many find 2 scoops per drink best for taste and satiety.
                  </p>
                }
                footerClassName="fixed bg-white box-border caret-transparent gap-x-2 flex flex-col outline-[3px] gap-y-2 z-[5] px-4 py-2 bottom-[0%] inset-x-[0%] md:static md:bg-transparent md:gap-x-4 md:gap-y-4 md:z-auto md:p-0 md:bottom-auto md:inset-x-auto"
                footerInnerClassName="relative box-border caret-transparent gap-x-4 flex max-h-[61.6px] max-w-[85%] outline-[3px] gap-y-4 w-full z-[5] ml-auto md:static md:max-w-none md:w-auto md:z-auto md:ml-0"
                showBackButton={true}
                ctaClassName="relative text-stone-300 font-bold items-center bg-gray-50 box-border caret-transparent gap-x-3 flex shrink-0 justify-center max-w-full min-h-[61.6px] outline-[3px] pointer-events-none w-full overflow-hidden mx-auto px-8 py-4 rounded-lg border-2 border-solid border-transparent md:shrink md:mx-0 hover:outline-0"
                ctaTextClassName="box-border caret-transparent shrink-0 outline-[3px] md:shrink"
                ctaText="NEXT"
                skipHref="/q/pc84"
                skipClassName="text-indigo-950 text-[12.8px] font-bold items-center box-border caret-transparent gap-x-1.5 hidden justify-center tracking-[0.2px] leading-[19.2px] max-w-full outline-[3px] gap-y-1.5 uppercase w-full z-[99] mt-0.5 mx-auto py-0.5 rounded-[10px] md:text-base md:gap-x-[3px] md:leading-6 md:gap-y-[3px] md:z-auto md:mt-1 hover:outline-0"
                skipTextClassName="text-[12.8px] box-border caret-transparent leading-[19.2px] outline-[3px] underline md:text-base md:leading-6"
                skipText="Skip quiz and get 58% off PROTEIN COFFEE"
              />
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex-col h-full justify-start max-w-full min-w-full outline-[3px] gap-y-4 w-full md:max-w-none md:min-w-[1080px]">
              <QuizStep
                rootVariant="min-h-0 pb-24"
                progressStep={6}
                isActive={currentStep === 5}
                onContinue={advance}
                selectedOptionIndex={selectedOptions[5]}
                onOptionSelect={(i) => selectOption(5, i)}
                headerClassName="items-center box-border caret-transparent flex basis-[0%] flex-col grow justify-center min-h-0 outline-[3px] pt-0.5 md:basis-auto md:grow-0 md:min-h-[520px] md:pt-0"
                headerContent={
                  <>
                    <div className="items-center box-border caret-transparent flex flex-col justify-center outline-[3px] md:[align-items:normal] md:block md:flex-row md:justify-normal">
                      <div className="items-center box-border caret-transparent gap-x-1.5 flex flex-col justify-center outline-[3px] gap-y-1.5 md:[align-items:normal] md:justify-normal">
                        <p className="text-base box-border caret-transparent leading-6 max-w-[480px] outline-[3px] mt-1.5 md:text-lg md:leading-[27px] md:mt-2.5">🤔 Have you ever wondered...</p>
                        <div className="text-[20.625px] font-bold box-border caret-transparent tracking-[-0.16px] leading-[24.75px] outline-[3px] md:text-[32px] md:leading-[38.4px]">What&apos;s REALLY in Your Coffee Drinks and Protein Shakes?</div>
                      </div>
                      <p className="text-base box-border caret-transparent leading-6 max-w-[480px] outline-[3px] mt-1.5 md:text-lg md:leading-[27px] md:mt-2.5">Many popular ones are packed with...</p>
                      <div className="items-center box-border caret-transparent gap-x-1.5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto_auto] justify-center outline-[3px] gap-y-1.5 w-full my-[15px] md:gap-x-2 md:gap-y-2 md:w-auto md:mt-5 md:mb-0">
                        {[["📈","high sugar..."],["😱","high calories..."],["🧪","fake flavors..."],["💩","artificial additives..."],["😩","and cheap incomplete proteins."]].map(([icon, text]) => (
                          <div key={text} className="text-red-700 text-lg font-medium items-center bg-transparent box-border caret-transparent gap-x-2 flex h-full justify-center leading-[21.6px] outline-[3px] gap-y-2 px-[15px] rounded-lg md:gap-x-3 md:gap-y-3">
                            <p className="text-[22px] box-border caret-transparent leading-[26.4px] outline-[3px] md:text-[32px] md:leading-[38.4px]">{icon}</p>
                            <p className="text-base font-bold box-border caret-transparent leading-[19.2px] outline-[3px] md:text-[22px] md:leading-[26.4px]">{text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="box-border caret-transparent gap-x-0 flex flex-col outline-[3px] gap-y-0 mt-4 md:gap-x-1 md:gap-y-1 md:mt-[22px]">
                      <p className="text-base font-bold box-border caret-transparent leading-6 max-w-[330px] outline-[3px] md:text-xl md:leading-[30px] md:max-w-[400px]">But don&apos;t worry! We have a solution.</p>
                      <p className="text-base box-border caret-transparent leading-6 outline-[3px] mt-1.5 md:text-lg md:leading-[27px]">Hit next to see if it&apos;s right for you...</p>
                    </div>
                    <div className="box-border caret-transparent outline-[3px]"></div>
                  </>
                }
                footerClassName="fixed bg-white box-border caret-transparent gap-x-2 flex flex-col outline-[3px] gap-y-2 z-[5] px-4 py-2 bottom-[0%] inset-x-[0%] md:static md:bg-transparent md:gap-x-4 md:gap-y-4 md:z-auto md:p-0 md:bottom-auto md:inset-x-auto"
                footerInnerClassName="relative box-border caret-transparent gap-x-4 flex max-h-[61.6px] max-w-[85%] outline-[3px] gap-y-4 w-full z-[5] ml-auto md:static md:max-w-none md:w-auto md:z-auto md:ml-0"
                showBackButton={true}
                ctaClassName="relative text-stone-300 font-bold items-center bg-gray-50 box-border caret-transparent gap-x-3 flex shrink-0 justify-center max-w-full min-h-[61.6px] outline-[3px] pointer-events-none w-full overflow-hidden mx-auto px-8 py-4 rounded-lg border-2 border-solid border-transparent md:shrink md:mx-0 hover:outline-0"
                ctaTextClassName="box-border caret-transparent shrink-0 outline-[3px] md:shrink"
                ctaText="NEXT"
                skipHref="/q/pc84"
                skipClassName="text-indigo-950 text-[12.8px] font-bold items-center box-border caret-transparent gap-x-1.5 hidden justify-center tracking-[0.2px] leading-[19.2px] max-w-full outline-[3px] gap-y-1.5 uppercase w-full z-[99] mt-0.5 mx-auto py-0.5 rounded-[10px] md:text-base md:gap-x-[3px] md:leading-6 md:gap-y-[3px] md:z-auto md:mt-1 hover:outline-0"
                skipTextClassName="text-[12.8px] box-border caret-transparent leading-[19.2px] outline-[3px] underline md:text-base md:leading-6"
                skipText="Skip quiz and get 58% off PROTEIN COFFEE"
              />
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex-col h-full justify-start max-w-full min-w-full outline-[3px] gap-y-4 w-full md:max-w-none md:min-w-[1080px]">
              <QuizStep
                rootVariant="min-h-0 pb-24"
                progressStep={7}
                isActive={currentStep === 6}
                onContinue={advance}
                selectedOptionIndex={selectedOptions[6]}
                onOptionSelect={(i) => selectOption(6, i)}
                headerClassName="items-center box-border caret-transparent flex flex-col justify-start min-h-0 outline-[3px]"
                headerContent={
                  <div className="text-2xl font-bold box-border caret-transparent tracking-[-0.16px] leading-[28.8px] outline-[3px] px-4 md:text-[26.4px] md:leading-[31.68px] md:px-0">
                    Would you swap your favorite coffee for a protein-packed alternative that{" "}
                    <span className="text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] underline md:text-[26.4px] md:leading-[31.68px]">tastes just as great?</span>
                  </div>
                }
                subheaderContent="(if not better 😋)"
                subheaderClassName="text-lg box-border caret-transparent leading-[27px] max-w-[480px] outline-[3px] mt-2.5"
                showHeaderSpacer={true}
                headerSpacerClassName="box-border caret-transparent outline-[3px]"
                optionsWrapperClassName="box-border caret-transparent gap-x-2 flex flex-col outline-[3px] gap-y-2 w-full mt-6 md:gap-x-[11px] md:gap-y-[11px]"
                options={[
                  { label: "YES!", emoji: "✅", buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6", labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] md:text-base md:leading-6", showCheckbox: true },
                  { label: "No, I love my unhealthy habits", emoji: "‼️", buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6", labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] md:text-base md:leading-6", showCheckbox: true },
                  { label: "I'm not sure", emoji: "🤔", buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6", labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] md:text-base md:leading-6", showCheckbox: true },
                ]}
                footerClassName="fixed bg-white box-border caret-transparent gap-x-2 flex flex-col outline-[3px] gap-y-2 z-[5] px-4 py-2 bottom-[0%] inset-x-[0%] md:static md:bg-transparent md:gap-x-4 md:gap-y-4 md:z-auto md:p-0 md:bottom-auto md:inset-x-auto"
                footerInnerClassName="relative box-border caret-transparent gap-x-4 flex max-h-[61.6px] max-w-[85%] outline-[3px] gap-y-4 w-full z-[5] ml-auto md:static md:max-w-none md:w-auto md:z-auto md:ml-0"
                showBackButton={true}
                ctaClassName="relative text-stone-300 font-bold items-center bg-gray-50 box-border caret-transparent gap-x-3 flex shrink-0 justify-center max-w-full min-h-[61.6px] outline-[3px] pointer-events-none w-full overflow-hidden mx-auto px-8 py-4 rounded-lg border-2 border-solid border-transparent md:shrink md:mx-0 hover:outline-0"
                ctaTextClassName="box-border caret-transparent shrink-0 outline-[3px] md:shrink"
                ctaText="NEXT"
                skipClassName="text-indigo-950 text-[12.8px] font-bold items-center box-border caret-transparent gap-x-1.5 hidden justify-center tracking-[0.2px] leading-[19.2px] max-w-full outline-[3px] gap-y-1.5 uppercase w-full z-[99] mt-0.5 mx-auto py-0.5 rounded-[10px] md:text-base md:gap-x-[3px] md:leading-6 md:gap-y-[3px] md:z-auto md:mt-1 hover:outline-0"
                skipTextClassName="text-[12.8px] box-border caret-transparent leading-[19.2px] outline-[3px] underline md:text-base md:leading-6"
                skipHref="/q/pc84"
                skipText="Skip quiz and get 58% off PROTEIN COFFEE"
              />
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex-col h-full justify-start max-w-full min-w-full outline-[3px] gap-y-4 w-full md:max-w-none md:min-w-[1080px]">
              <QuizStep
                rootVariant="min-h-0 pb-24"
                progressStep={8}
                isActive={currentStep === 7}
                onContinue={advance}
                selectedOptionIndex={selectedOptions[7]}
                onOptionSelect={(i) => selectOption(7, i)}
                headerClassName="items-center box-border caret-transparent flex flex-col justify-start min-h-0 outline-[3px]"
                headerContent={
                  <div className="text-2xl font-bold box-border caret-transparent tracking-[-0.16px] leading-[28.8px] outline-[3px] px-4 md:text-[26.4px] md:leading-[31.68px] md:px-0">
                    It costs $1,000&apos;s extra to buy protein and coffee separately — Are you ready to spend less and get more with an all-in-one coffee?
                  </div>
                }
                showHeaderSpacer={true}
                headerSpacerClassName="box-border caret-transparent outline-[3px]"
                optionsWrapperClassName="box-border caret-transparent gap-x-2 flex flex-col outline-[3px] gap-y-2 w-full mt-6 md:gap-x-[11px] md:gap-y-[11px]"
                options={[
                  { label: "YES!", emoji: "✅", buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6", labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] md:text-base md:leading-6", showCheckbox: true },
                  { label: "No, I love overpaying for coffee", emoji: "‼️", buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6", labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] md:text-base md:leading-6", showCheckbox: true },
                  { label: "I'm not sure", emoji: "🤔", buttonClassName: "relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full border overflow-hidden px-4 py-3 rounded-lg border-solid border-black/20 md:text-base md:leading-6 md:min-h-[61.6px] md:px-8 md:py-4", contentClassName: "text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6", labelClassName: "text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] md:text-base md:leading-6", showCheckbox: true },
                ]}
                footerClassName="fixed bg-white box-border caret-transparent gap-x-2 flex flex-col outline-[3px] gap-y-2 z-[5] px-4 py-2 bottom-[0%] inset-x-[0%] md:static md:bg-transparent md:gap-x-4 md:gap-y-4 md:z-auto md:p-0 md:bottom-auto md:inset-x-auto"
                footerInnerClassName="relative box-border caret-transparent gap-x-4 flex max-h-[61.6px] max-w-[85%] outline-[3px] gap-y-4 w-full z-[5] ml-auto md:static md:max-w-none md:w-auto md:z-auto md:ml-0"
                showBackButton={true}
                ctaClassName="relative text-stone-300 font-bold items-center bg-gray-50 box-border caret-transparent gap-x-3 flex shrink-0 justify-center max-w-full min-h-[61.6px] outline-[3px] pointer-events-none w-full overflow-hidden mx-auto px-8 py-4 rounded-lg border-2 border-solid border-transparent md:shrink md:mx-0 hover:outline-0"
                ctaTextClassName="box-border caret-transparent shrink-0 outline-[3px] md:shrink"
                ctaText="NEXT"
                skipClassName="text-indigo-950 text-[12.8px] font-bold items-center box-border caret-transparent gap-x-1.5 hidden justify-center tracking-[0.2px] leading-[19.2px] max-w-full outline-[3px] gap-y-1.5 uppercase w-full z-[99] mt-0.5 mx-auto py-0.5 rounded-[10px] md:text-base md:gap-x-[3px] md:leading-6 md:gap-y-[3px] md:z-auto md:mt-1 hover:outline-0"
                skipTextClassName="text-[12.8px] box-border caret-transparent leading-[19.2px] outline-[3px] underline md:text-base md:leading-6"
                skipHref="/q/pc84"
                skipText="Skip quiz and get 58% off PROTEIN COFFEE"
              />
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex-col h-full justify-start max-w-full min-w-full outline-[3px] gap-y-4 w-full md:max-w-none md:min-w-[1080px]">
              <QuizStep
                rootVariant="min-h-0 pb-12"
                progressStep={9}
                isActive={currentStep === 8}
                onContinue={advance}
                selectedOptionIndex={selectedOptions[8]}
                onOptionSelect={(i) => selectOption(8, i)}
                headerClassName="items-center box-border caret-transparent flex flex-col justify-start min-h-0 outline-[3px]"
                headerContent={
                  <>
                    <div className="text-2xl font-bold box-border caret-transparent tracking-[-0.16px] leading-[28.8px] outline-[3px] px-4 md:text-[26.4px] md:leading-[31.68px] md:px-0">
                      🎉Great News — Your
                      <br className="text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] md:text-[26.4px] md:leading-[31.68px]" />
                      Personalized Offer Is Ready
                    </div>
                    <div className="box-border caret-transparent outline-[3px]"></div>
                    <p className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] mt-4 md:text-base md:leading-6">
                      Based on your quiz answers, we&apos;ve matched you with the{" "}
                      <strong className="text-[15px] font-bold box-border caret-transparent leading-[22.5px] outline-[3px] md:text-base md:leading-6">Javvy Protein Coffee bundles</strong>{" "}
                      that best fit your goals.
                      <br /><br />
                      <strong className="text-[15px] font-bold box-border caret-transparent leading-[22.5px] outline-[3px] md:text-base md:leading-6">Before we unlock your exclusive offer,</strong>{" "}
                      we simply ask that you agree to the following:
                    </p>
                    <div className="box-border caret-transparent gap-x-2 flex flex-col outline-[3px] gap-y-2 w-full mt-6 md:gap-x-[11px] md:gap-y-[11px]">
                      <div className="relative text-[13.6px] items-center bg-white shadow-[rgba(7,31,87,0)_0px_0px_0px_0px,rgba(7,31,87,0.08)_0px_1px_0.2px_0px,rgba(7,31,87,0.09)_0px_2px_1.8px_0px,rgba(7,31,87,0.1)_0px_6px_9.7px_0px] box-border caret-transparent gap-x-3 flex justify-start leading-[20.4px] min-h-14 outline-[3px] w-full overflow-hidden px-4 py-5 rounded-3xl md:text-base md:leading-6 md:min-h-[61.6px] md:p-6">
                        <div className="text-[13.6px] items-start box-border caret-transparent gap-x-2.5 flex flex-col justify-center leading-[20.4px] outline-[3px] gap-y-2.5 w-full md:text-base md:gap-x-3 md:leading-6 md:gap-y-3">
                          {[
                            "If you love Javvy, you'll consider sharing it with friends or family who could benefit too.",
                            "You'll prepare it as directed and experiment with a few different recipes to find your favorite drink.",
                            "Because this is a promotional offer, we can't guarantee how long it will remain available.",
                            <>You&apos;ll give Javvy an honest try with at least <strong className="text-[12.96px] font-bold box-border caret-transparent leading-[19.44px] outline-[3px] md:text-base md:leading-6">2 or more flavors</strong>.</>,
                          ].map((text, i) => (
                            <div key={i}>
                              {i > 0 && <div className="text-[13.6px] box-border caret-transparent leading-[20.4px] outline-[3px] w-full border border-gray-100 border-solid md:text-base md:leading-6"></div>}
                              <div className="text-[13.6px] items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[20.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-6">
                                <div className="text-[0px] items-center aspect-square box-border caret-transparent flex h-[18px] justify-between leading-[0px] outline-[3px] w-[18px] rounded-bl rounded-br rounded-tl rounded-tr md:h-7 md:w-7">
                                  <img src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/6a5a8494c5b219d2a7fe2783_green-checkmark.svg" alt="" className="box-border caret-transparent max-w-full outline-[3px]" />
                                </div>
                                <p className="text-zinc-800 text-[12.96px] box-border caret-transparent leading-[19.44px] outline-[3px] text-left md:text-base md:leading-6">{text}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                }
                bottomContent={
                  <div className="items-center box-border caret-transparent flex basis-[0%] grow justify-center outline-[3px] w-full mt-5 md:mt-6">
                    <div className="box-border caret-transparent basis-[0%] grow outline-[3px] border border-neutral-300 border-solid"></div>
                    <p className="font-bold box-border caret-transparent tracking-[1px] outline-[3px] uppercase w-2/5 md:w-[30%]">If you agree</p>
                    <div className="box-border caret-transparent basis-[0%] grow outline-[3px] border border-neutral-300 border-solid"></div>
                  </div>
                }
                footerClassName="bg-transparent box-border caret-transparent gap-x-3 flex flex-col outline-[3px] gap-y-3 z-[5] pb-2 bottom-[0%] inset-x-[0%] md:bg-transparent md:z-auto md:pb-0 md:bottom-auto md:inset-x-auto"
                footerInnerClassName="relative box-border caret-transparent gap-x-4 flex max-h-[61.6px] max-w-[400px] outline-[3px] gap-y-4 w-full z-[5] md:static md:max-w-none md:w-auto md:z-auto"
                ctaClassName="relative text-stone-300 font-bold items-center bg-gray-50 box-border caret-transparent gap-x-3 flex shrink-0 justify-center max-w-full min-h-[61.6px] outline-[3px] pointer-events-none w-full overflow-hidden px-0 py-4 rounded-lg border-2 border-solid border-transparent md:shrink md:px-8 hover:outline-0"
                ctaTextClassName="box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2"
                ctaText="Yes — Unlock My Personalized Offer"
                skipClassName="text-indigo-950 text-[12.8px] font-bold items-center box-border caret-transparent gap-x-1.5 flex justify-center tracking-[0.2px] leading-[19.2px] max-w-full outline-[3px] gap-y-1.5 uppercase w-full z-[99] mt-0.5 mx-auto py-0.5 rounded-[10px] md:text-base md:gap-x-[3px] md:leading-6 md:gap-y-[3px] md:z-auto md:mt-0 hover:outline-0"
                skipTextClassName="text-[12.8px] box-border caret-transparent leading-[19.2px] outline-[3px] underline normal-case md:text-base md:leading-6"
                skipHref="/q/pc84"
                skipText="No thanks, I'll pass."
              />
            </div>
            {currentStep === 9 && <AnalysisStep />}
            {currentStep === 10 && <RecommendationStep />}
          </div>
        </div>
      </div>
    </section>
  );
};
