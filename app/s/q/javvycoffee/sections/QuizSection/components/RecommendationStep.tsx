"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export const RecommendationStep = () => {
  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.4 },
      colors: ["#292552", "#f59e0b", "#ffffff", "#e0fafa"],
    });
  }, []);

  return (
    <div className="relative items-center box-border caret-transparent gap-x-4 flex-col h-full justify-start max-w-full min-w-full outline-[3px] gap-y-4 w-full md:max-w-none md:min-w-[1080px]">
      <div className="items-stretch box-border caret-transparent gap-x-4 flex flex-col justify-start max-w-full min-w-full outline-[3px] gap-y-4 text-center w-full mx-auto pt-20 pb-0 md:max-w-[920px] md:min-w-[920px] md:pt-32 md:pb-8">
        <div className="items-stretch box-border caret-transparent gap-x-4 flex flex-col max-w-full outline-[3px] gap-y-4 w-full mx-auto md:gap-x-6 md:max-w-[480px] md:gap-y-6">
          <div className="items-center box-border caret-transparent flex flex-col justify-center outline-[3px]">
            <div className="text-sm font-bold bg-amber-500 box-border caret-transparent leading-[21px] outline-[3px] mb-3 px-3 py-1.5 rounded-xl md:text-base md:leading-6">
              <p className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-base md:leading-6">
                Your Personalized Recommendation
              </p>
            </div>
            <div className="text-2xl font-bold box-border caret-transparent tracking-[-0.16px] leading-[26.4px] max-w-[480px] outline-[3px] capitalize mb-1 md:text-[32px] md:leading-[35.2px] md:max-w-none">
              This Protein Coffee Is Making Your Summer Goals Easy In 2026
            </div>
            <p className="text-[14.0625px] box-border caret-transparent leading-[21.0938px] max-w-[380px] outline-[3px] mt-1.5 mb-2.5 md:text-lg md:leading-[27px] md:max-w-none">
              Instantly get on track for your{" "}
              <strong className="text-[14.0625px] font-bold box-border caret-transparent leading-[21.0938px] outline-[3px] md:text-lg md:leading-[27px]">
                health and fitness goals
              </strong>
              without missing out on delicious coffee!
            </p>
            <img
              src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/6847359f8fa6b6177d5283fe_v3-pc-quiz-results-img.webp"
              sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px"
              alt=""
              className="box-border caret-transparent max-w-full outline-[3px] mt-1.5 mb-2.5"
            />
            <div className="box-border caret-transparent gap-x-5 flex outline-[3px] gap-y-5 w-full md:w-auto">
              <div className="items-center box-border caret-transparent gap-x-2.5 flex flex-col justify-center outline-[3px] gap-y-2.5">
                <img
                  src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/6790ea1d4e38263d513d10f3_zerosugar.png"
                  alt=""
                  sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px"
                  className="box-border caret-transparent h-[60px] max-w-full outline-[3px] w-[60px] md:h-[75px] md:w-[75px]"
                />
                <p className="text-[15px] font-medium box-border caret-transparent leading-[19.5px] max-w-[100px] min-w-0 outline-[3px] md:leading-[22.5px] md:max-w-[120px] md:min-w-[100px]">
                  No Added Sugar
                </p>
              </div>
              <div className="items-center box-border caret-transparent gap-x-2.5 flex flex-col justify-center outline-[3px] gap-y-2.5">
                <img
                  src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/6790e9a3083e3c22b3d508c9_lowcalorie.svg"
                  alt=""
                  className="box-border caret-transparent h-[60px] max-w-full outline-[3px] w-[60px] md:h-[75px] md:w-[75px]"
                />
                <p className="text-[15px] font-medium box-border caret-transparent leading-[19.5px] max-w-[100px] min-w-0 outline-[3px] md:leading-[22.5px] md:max-w-[120px] md:min-w-[100px]">
                  Guilt-Free
                </p>
              </div>
              <div className="items-center box-border caret-transparent gap-x-2.5 flex flex-col justify-center outline-[3px] gap-y-2.5">
                <img
                  src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/67ab8207fad95080665cd8d4_protein.webp"
                  alt=""
                  sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px"
                  className="box-border caret-transparent h-[60px] max-w-full outline-[3px] w-[60px] md:h-[75px] md:w-[75px]"
                />
                <p className="text-[15px] font-medium box-border caret-transparent leading-[19.5px] max-w-[100px] min-w-0 outline-[3px] md:leading-[22.5px] md:max-w-[120px] md:min-w-[100px]">
                  High Protein
                </p>
              </div>
              <div className="items-center box-border caret-transparent gap-x-2.5 flex flex-col justify-center outline-[3px] gap-y-2.5">
                <img
                  src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/67abac827f39233706721739_coffee.webp"
                  alt=""
                  sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px"
                  className="box-border caret-transparent h-[60px] max-w-full outline-[3px] w-[60px] md:h-[75px] md:w-[75px]"
                />
                <p className="text-[15px] font-medium box-border caret-transparent leading-[19.5px] max-w-[100px] min-w-0 outline-[3px] md:leading-[22.5px] md:max-w-[120px] md:min-w-[100px]">
                  Real Coffee
                </p>
              </div>
            </div>
            <div className="box-border caret-transparent flex max-w-[540px] outline-[3px] w-full my-4 md:max-w-none"></div>
            <div className="relative text-base bg-yellow-50 box-border caret-transparent leading-6 outline-[3px] text-left w-full border border-indigo-950 -mt-2.5 mb-2 pl-10 pr-4 pt-2 pb-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-dashed md:text-[17px] md:leading-[25.5px]">
              <p className="text-base box-border caret-transparent leading-6 outline-[3px] md:text-[17px] md:leading-[25.5px]">
                <span className="text-rose-700 text-base box-border caret-transparent leading-6 outline-[3px] md:text-[17px] md:leading-[25.5px]">
                  <strong className="text-base font-bold box-border caret-transparent leading-6 outline-[3px] md:text-[17px] md:leading-[25.5px]">
                    LIMITED TIME ONLY:
                  </strong>
                </span>{" "}
                Make the switch to healthier, more convenient coffee{" "}
                <strong className="text-base font-bold box-border caret-transparent leading-6 outline-[3px] md:text-[17px] md:leading-[25.5px]">
                  today at an internet-only price.
                </strong>{" "}
                <em className="text-base italic box-border caret-transparent leading-6 outline-[3px] md:text-[17px] md:leading-[25.5px]">
                  Up to 58% Off with 4 FREE Gifts for new customers.
                </em>
              </p>
              <img
                src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/676315655c56b53296403877_today-only-badge.svg"
                alt=""
                className="absolute text-base box-border caret-transparent left-[-2%] leading-6 max-w-full outline-[3px] top-[-10%] w-8 md:text-[17px] md:left-[-4%] md:leading-[25.5px] md:w-[50px]"
              />
            </div>
            <div className="box-border caret-transparent gap-x-1.5 hidden flex-col outline-[3px] gap-y-1.5 w-full md:flex">
              <div className="bg-[linear-gradient(to_top,rgb(255,255,255),rgba(255,255,255,0))] box-border caret-transparent gap-x-2.5 flex flex-col outline-[3px] gap-y-2.5 z-[5] md:bg-none md:z-auto">
                <a
                  href="/q/pc84"
                  role="button"
                  className="relative text-white font-bold items-center bg-indigo-950 box-border caret-transparent gap-x-3 flex justify-center max-w-full min-h-[68px] outline-[3px] w-full overflow-hidden p-4 rounded-lg border-2 border-solid border-transparent md:px-8 hover:outline-0"
                >
                  <div className="font-black box-border caret-transparent outline-[3px]">
                    <div className="box-border caret-transparent outline-[3px] pointer-events-none">
                      GET 58% OFF
                    </div>
                  </div>
                </a>
              </div>
              <div className="items-center box-border caret-transparent gap-x-1.5 flex justify-center outline-[3px] gap-y-1.5 w-full mt-2 md:mt-0">
                <div className="box-border caret-transparent h-[18px] outline-[3px] w-[18px] md:h-6 md:w-6">
                  <img
                    src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/icon-4.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-full outline-[3px] align-baseline w-full"
                  />
                </div>
                <p className="text-xs font-bold box-border caret-transparent leading-[18px] outline-[3px] text-left uppercase mr-[18px] md:text-sm md:leading-[21px] md:text-center md:mr-0">
                  FALL SPECIAL DISCOUNT ACTIVE
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bg-white box-border caret-transparent block max-w-[375px] outline-[3px] w-[110%] z-[9999] -mx-4 pt-4 pb-2 bottom-0 md:static md:bg-orange-50 md:hidden md:max-w-none md:w-auto md:z-auto md:mx-0 md:pb-4 md:bottom-auto">
          <div className="box-border caret-transparent outline-[3px] px-4 md:px-10">
            <div className="box-border caret-transparent max-w-[864px] outline-[3px] w-full mx-auto">
              <div className="sticky box-border caret-transparent flex flex-col outline-[3px] bottom-0">
                <a
                  href="/q/pc84"
                  role="button"
                  className="relative text-white font-bold items-center bg-indigo-950 box-border caret-transparent gap-x-3 flex justify-center max-w-full min-h-[68px] outline-[3px] w-full overflow-hidden px-8 py-4 rounded-lg border-0 border-none border-transparent md:border-2 md:border-solid hover:outline-0"
                >
                  <div className="font-black box-border caret-transparent outline-[3px]">
                    <div className="box-border caret-transparent outline-[3px] pointer-events-none">
                      GET 58% OFF
                    </div>
                  </div>
                  <div className="absolute items-center box-border caret-transparent flex-col h-6 justify-center outline-[3px] w-6 right-6">
                    <img
                      src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/icon-5.svg"
                      alt="Icon"
                      className="box-border caret-transparent inline h-full outline-[3px] align-baseline w-full"
                    />
                  </div>
                </a>
                <div className="items-center box-border caret-transparent gap-x-1.5 flex justify-center outline-[3px] gap-y-1.5 w-full mt-2 md:mt-0">
                  <div className="box-border caret-transparent h-[18px] outline-[3px] w-[18px] md:h-6 md:w-6">
                    <img
                      src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/icon-8.svg"
                      alt="Icon"
                      className="box-border caret-transparent inline h-full outline-[3px] align-baseline w-full"
                    />
                  </div>
                  <p className="text-xs font-bold box-border caret-transparent leading-[18px] outline-[3px] text-left uppercase mr-[18px] md:text-sm md:leading-[21px] md:text-center md:mr-0">
                    FALL SPECIAL DISCOUNT ACTIVE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
