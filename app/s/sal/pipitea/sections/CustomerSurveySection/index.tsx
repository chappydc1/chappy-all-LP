import { SurveyStat } from "./components/SurveyStat";

export const CustomerSurveySection = () => {
  return (
    <section
      className="items-center bg-no-repeat box-border caret-transparent flex flex-col justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center px-[15px] py-[45px]"
    >
      <div
        className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full bg-center md:flex-row"
      >
        <div
          className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full"
        >
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="text-black text-[27.0583px] box-border caret-transparent leading-[32.47px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full md:text-[35px] md:leading-[42px]"
            >
              <div
                className="text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] w-full md:text-[35px] md:leading-[42px]"
              >
                <p
                  className="text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px]"
                >
                  <strong
                    className="text-[27.0583px] font-bold box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px]"
                  >
                    Real Feedback from Hibiscus Tea Customers with Kidney
                    Concerns
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="text-black text-lg box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full mt-[25px]"
            >
              <div
                className="box-border caret-transparent outline-[3px] w-full"
              >
                <p
                  className="box-border caret-transparent outline-[3px]"
                >
                  <strong
                    className="font-bold box-border caret-transparent outline-[3px]"
                  >
                    In a recent customer survey, users reported:
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <div
                className="items-start box-border caret-transparent flex flex-col flex-wrap min-h-[auto] min-w-[auto] mt-10 md:flex-row"
              >
                <div
                  className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto"
                >
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <SurveyStat
                        firstPercentage="76%"
                        firstDescription="reported feeling more confident  about their kidney health within the first month of daily use.*"
                        secondPercentage="74%"
                        secondDescription="noticed stable or improved eGFR at checkups.*"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-10 min-h-[auto] min-w-10 outline-[3px] w-10"
                >
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <div
                        className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-[30px]"
                      >
                        <div
                          className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto"
                >
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <SurveyStat
                        firstPercentage="67%"
                        firstDescription="say their doctors commented positively on their numbers.*"
                        secondPercentage="64%"
                        secondDescription="report feeling less stressed and anxious about their kidney health overall.*"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="text-black text-[15px] box-border caret-transparent leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full mt-10"
            >
              <div
                className="box-border caret-transparent outline-[3px] w-full"
              >
                <p
                  className="box-border caret-transparent outline-[3px]"
                >
                  <strong
                    className="font-bold box-border caret-transparent outline-[3px]"
                  >
                    *Results based on a voluntary, self-reported customer survey
                    conducted by PiPi Tea in 2025. Individual results may vary.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
