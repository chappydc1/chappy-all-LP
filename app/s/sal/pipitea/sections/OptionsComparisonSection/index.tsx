import { PipiteaComparisonHeader } from "./components/ComparisonHeader";
import { PipiteaComparisonRow } from "./components/ComparisonRow";
import { PipiteaSectionCta } from "../../components/SectionCta";

export const PipiteaOptionsComparisonSection = () => {
  return (
    <section
      className="relative items-center bg-pink-500/10 bg-no-repeat box-border caret-transparent flex flex-col justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center px-[15px] py-[45px] md:pt-[60px] md:pb-20"
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
              className="text-black text-[27.0583px] box-border caret-transparent leading-[32.47px] max-w-[800px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full md:text-[35px] md:leading-[42px]"
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
                    Why Hibiscus Tea Beats Other Kidney Support Options
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <img
                src="https://c.animaapp.com/mq03tlhwPsu7gY/assets/26.svg"
                alt=""
                title=""
                className="absolute box-border caret-transparent max-w-full outline-[3px] w-full top-0 md:top-[-45px]"
              />
            </div>
          </div>
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <img
                src="https://c.animaapp.com/mq03tlhwPsu7gY/assets/27.svg"
                alt=""
                title=""
                className="absolute box-border caret-transparent max-w-full outline-[3px] w-full bottom-0 md:bottom-[-45px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1000px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full bg-center md:flex-row"
      >
        <div
          className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full"
        >
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <div
                className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] border-zinc-700 mt-[100px] rounded-[10px] border-[3px] border-solid md:mt-[190px]"
              >
                <div
                  className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                >
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <PipiteaComparisonHeader />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <PipiteaComparisonRow
                        rootVariant="w-full border-neutral-400/50 border-b"
                        leftColumnVariant="w-full"
                        contentColumnVariant="h-[110px] md:h-[100px] md:w-[100px]"
                        contentInnerVariant="text-white"
                        contentText="No prescription required"
                        contentTextClassName=""
                        renderContentTextWrapper={false}
                        rightColumnVariant="w-[711px]"
                        rightImageSrc="https://c.animaapp.com/mq03tlhwPsu7gY/assets/13.svg"
                        rightPreTextClassName=""
                        rightContent="Medications require doctor visits and ongoing prescriptions"
                        rightContentClassName="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-center"
                        renderRightContentInnerWrapper={true}
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <PipiteaComparisonRow
                        rootVariant="border-neutral-400/50 border-b"
                        leftColumnVariant=""
                        contentColumnVariant="h-[110px] md:h-[100px] md:w-2/5"
                        contentInnerVariant="text-white"
                        contentText="No side effects to worry about"
                        contentTextClassName=""
                        renderContentTextWrapper={false}
                        rightColumnVariant=""
                        rightImageSrc="https://c.animaapp.com/mq03tlhwPsu7gY/assets/13.svg"
                        rightPreTextClassName="text-center md:text-start"
                        rightContent="Fatigue, dizziness, frequent urination common with meds"
                        rightContentClassName="text-[10px] box-border caret-transparent leading-[15px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-sm md:leading-[21px] md:text-start"
                        renderRightContentInnerWrapper={true}
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <PipiteaComparisonRow
                        rootVariant="border-neutral-400/50 border-b"
                        leftColumnVariant=""
                        contentColumnVariant="h-[110px] md:h-[100px] md:w-2/5"
                        contentInnerVariant="text-white"
                        contentText="Genuinely delicious, tart-cranberry flavor"
                        contentTextClassName=""
                        renderContentTextWrapper={true}
                        rightColumnVariant=""
                        rightImageSrc="https://c.animaapp.com/mq03tlhwPsu7gY/assets/13.svg"
                        rightPreTextClassName="text-center md:text-start"
                        rightContent="Pills taste like nothing; medications can cause taste changes"
                        rightContentClassName="text-[10px] box-border caret-transparent leading-[15px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-sm md:leading-[21px] md:text-start"
                        renderRightContentInnerWrapper={true}
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <PipiteaComparisonRow
                        rootVariant="border-neutral-400/50 border-b"
                        leftColumnVariant=""
                        contentColumnVariant="h-[110px] md:h-[100px] md:w-2/5"
                        contentInnerVariant="text-white"
                        contentText="100+ clinical studies on kidney support benefits"
                        contentTextClassName="font-medium"
                        renderContentTextWrapper={true}
                        rightColumnVariant=""
                        rightImageSrc="https://c.animaapp.com/mq03tlhwPsu7gY/assets/alert-triangle-yellow-512.png"
                        rightPreTextClassName=""
                        rightContent="Many supplements lack robust kidney research"
                        rightContentClassName="text-[10px] box-border caret-transparent leading-[15px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-sm md:leading-[21px]"
                        renderRightContentInnerWrapper={false}
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <PipiteaComparisonRow
                        rootVariant="border-neutral-400/50 border-b"
                        leftColumnVariant=""
                        contentColumnVariant="h-[110px] md:h-[100px] md:w-2/5"
                        contentInnerVariant="text-white"
                        contentText="Centuries of safe traditional use"
                        contentTextClassName=""
                        renderContentTextWrapper={false}
                        rightColumnVariant=""
                        rightImageSrc="https://c.animaapp.com/mq03tlhwPsu7gY/assets/alert-triangle-yellow-512.png"
                        rightPreTextClassName=""
                        rightContent="Many kidney supplements are relatively new"
                        rightContentClassName="text-[10px] box-border caret-transparent leading-[15px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-sm md:leading-[21px]"
                        renderRightContentInnerWrapper={false}
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <PipiteaComparisonRow
                        rootVariant="border-neutral-400/50 border-b"
                        leftColumnVariant=""
                        contentColumnVariant="h-[110px] md:h-[100px] md:w-2/5"
                        contentInnerVariant="text-white"
                        contentText="Supports multiple areas (eGFR, creatinine, circulation, antioxidants)"
                        contentTextClassName=""
                        renderContentTextWrapper={true}
                        rightColumnVariant=""
                        rightImageSrc="https://c.animaapp.com/mq03tlhwPsu7gY/assets/alert-triangle-yellow-512.png"
                        rightPreTextClassName=""
                        rightContent="Most options are single-purpose"
                        rightContentClassName="text-[10px] box-border caret-transparent leading-[15px] outline-[3px] text-center md:text-sm md:leading-[21px]"
                        renderRightContentInnerWrapper={false}
                      />
                      <PipiteaComparisonRow
                        rootVariant="border-neutral-400/50 border-b"
                        leftColumnVariant=""
                        contentColumnVariant="h-[110px] md:h-[100px] md:w-2/5"
                        contentInnerVariant=""
                        contentText="Results you can feel AND verify at checkups"
                        contentTextClassName="text-white"
                        renderContentTextWrapper={false}
                        rightColumnVariant=""
                        rightImageSrc="https://c.animaapp.com/mq03tlhwPsu7gY/assets/alert-triangle-yellow-512.png"
                        rightPreTextClassName=""
                        rightContent="Many supplements show no measurable change"
                        rightContentClassName="text-[10px] box-border caret-transparent leading-[15px] outline-[3px] text-center md:text-sm md:leading-[21px]"
                        renderRightContentInnerWrapper={false}
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <PipiteaComparisonRow
                        rootVariant=""
                        leftColumnVariant=""
                        contentColumnVariant="h-[140px] mb-[-15px] pb-[15px] rounded-b-[10px] md:mb-[-25px] md:w-2/5 md:pb-10"
                        contentInnerVariant="text-white"
                        contentText="Easy daily ritual you'll actually stick with"
                        contentTextClassName=""
                        renderContentTextWrapper={false}
                        rightColumnVariant=""
                        rightImageSrc="https://c.animaapp.com/mq03tlhwPsu7gY/assets/13.svg"
                        rightPreTextClassName=""
                        rightContent="Pills get forgotten; restrictive diets get abandoned"
                        rightContentClassName="text-[10px] box-border caret-transparent leading-[15px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-sm md:leading-[21px]"
                        renderRightContentInnerWrapper={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <div
                className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-[50px] md:mt-[70px]"
              >
                <div
                  className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                >
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="items-stretch box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <PipiteaSectionCta
                        title="BUY NOW & SAVE "
                        text="BUY NOW & SAVE"
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <div
                        className="items-center box-border caret-transparent flex flex-wrap justify-center min-h-[auto] min-w-[auto] mt-5"
                      >
                        <div
                          className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]"
                        >
                          <div
                            className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                          >
                            <div
                              className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                            >
                              <img
                                src="https://c.animaapp.com/mq03tlhwPsu7gY/assets/29.svg"
                                alt=""
                                title=""
                                className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-4"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]"
                        >
                          <div
                            className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                          >
                            <div
                              className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full ml-2.5 md:text-base md:leading-6"
                            >
                              <div
                                className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-base md:leading-6"
                              >
                                <p
                                  className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-base md:leading-6"
                                >
                                  <span className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-base md:leading-6">
                                    90-Day Money Back Guarantee
                                  </span>
                                  <br className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-base md:leading-6" />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
