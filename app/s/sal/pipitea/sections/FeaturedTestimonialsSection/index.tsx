import { FeaturedTestimonial } from "./components/FeaturedTestimonial";
import { SectionCta } from "../../components/SectionCta";

export const FeaturedTestimonialsSection = () => {
  return (
    <section
      className="items-center bg-no-repeat box-border caret-transparent flex flex-col justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center px-[15px] py-[45px] md:py-[60px]"
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
                    See Why This Ancient Superfood Is Loved Daily for Supporting
                    Healthy Kidney Function
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent outline-[3px] w-full px-px py-3 md:px-2.5">
            <div className="box-border caret-transparent flex flex-col outline-[3px] w-full pt-px pb-[5px] px-px md:flex-row">
              <FeaturedTestimonial
                containerVariant="mb-[5px] md:mr-[5px] md:mb-0"
                imageWrapperVariant="rounded-l-[10px]"
                desktopImageUrl="https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765669690171_testemonials_cards01_mobile.webp"
                desktopImageVariant="pl-px rounded-t-[10px] rounded-bl-[1px] md:hidden md:h-auto md:w-auto md:pl-0 md:rounded-tr-none md:rounded-bl-[10px]"
                mobileImageUrl="https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765668579515_testemonials_cards01.webp"
                mobileImageVariant="hidden pl-2.5 rounded-l-[10px] md:inline md:w-auto md:pl-0"
                contentVariant="rounded-r-[10px]"
                quote='"PiPi Tea Hibiscus Tea has become my daily ritual for my kidneys. I used to dread every doctor&#39;s appointment because of my numbers. Now I actually feel confident going in. My last two eGFR readings have been the best in years. You can really taste the quality in every sip."'
                authorName="Linda R.\u00a0"
                authorNameVariant="leading-[18px] md:leading-6"
              />
              <FeaturedTestimonial
                containerVariant="mt-[5px] md:ml-[5px] md:mt-0"
                imageWrapperVariant="rounded-l-[10px]"
                desktopImageUrl="https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765669113247_testemonials_cards02.webp"
                desktopImageVariant="hidden rounded-l-[10px] md:inline"
                mobileImageUrl="https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765669853012_testemonials_cards02_mobile.webp"
                mobileImageVariant="inline rounded-t-[10px] rounded-bl-[1px] md:hidden md:rounded-tr-none md:rounded-bl-[10px]"
                contentVariant="rounded-tr-[1px] rounded-b-[10px] md:rounded-tr-[10px] md:rounded-bl-none"
                quote='"This organic hibiscus tea has been a game-changer for my kidney function. I was borderline for years and my doctor kept warning me about medication. Three months of daily hibiscus and my numbers improved enough that she&#39;s happy to keep monitoring instead."'
                authorName="Karen W.\u00A0"
                authorNameVariant="leading-6"
              />
            </div>
            <div className="box-border caret-transparent flex flex-col outline-[3px] w-full pt-[5px] pb-px px-px md:flex-row">
              <FeaturedTestimonial
                containerVariant="mb-[5px] md:mr-[5px] md:mb-0"
                imageWrapperVariant="rounded-l-[10px]"
                desktopImageUrl="https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765669231664_testemonials_cards03.webp"
                desktopImageVariant="hidden rounded-l-[10px] md:inline"
                mobileImageUrl="https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765670346747_testemonials_cards03_mobile.webp"
                mobileImageVariant="inline rounded-t-[10px] rounded-bl-[1px] md:hidden md:rounded-tr-none md:rounded-bl-[10px]"
                contentVariant="rounded-tr-[1px] rounded-b-[10px] md:rounded-tr-[10px] md:rounded-bl-none"
                quote='"I&#39;m very skeptical of &#39;natural&#39; remedies - I&#39;ve wasted money on so many supplements that did nothing. But the research on hibiscus for kidney health is real. 4 months in, and my eGFR is consistently higher. My doctor noticed at my last checkup and asked what I did."'
                authorName="Donna P.\u00a0"
                authorNameVariant="leading-[18px] md:leading-6"
              />
              <FeaturedTestimonial
                containerVariant="mt-[5px] md:ml-[5px] md:mt-0"
                imageWrapperVariant="rounded-t-[10px] rounded-bl-none md:rounded-tr-none md:rounded-bl-[10px]"
                desktopImageUrl="https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765669332998_testemonials_cards04.webp"
                desktopImageVariant="hidden rounded-l-[10px] md:inline"
                mobileImageUrl="https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765670463306_testemonials_cards04_mobile.webp"
                mobileImageVariant="inline rounded-t-[10px] rounded-bl-none md:hidden md:rounded-tr-none md:rounded-bl-[10px]"
                contentVariant="rounded-tr-none rounded-b-[10px] md:rounded-tr-[10px] md:rounded-bl-none"
                quote='"The flavor is wonderful, and I genuinely see the difference in my numbers. I drink it hot in the morning and iced in the afternoon. It&#39;s become the easiest healthy habit I&#39;ve ever maintained - and the only one that&#39;s actually shown up in my lab results."'
                authorName="Ruth H.\u00A0"
                authorNameVariant="leading-[18px] md:leading-6"
              />
            </div>
          </div>
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          />
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <div
                className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-10 md:mt-[50px]"
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
                      <SectionCta
                        title="BUY NOW &amp; SAVE"
                        text="BUY NOW &amp; SAVE"
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
                                sizes="1170px"
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
                                  90-Day Money Back Guarantee
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
