import { RatingSummary } from "./components/RatingSummary";
import { ReviewCard } from "./components/ReviewCard";
import { SectionCta } from "../../components/SectionCta";

export const CustomerReviewsSection = () => {
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
                    What Our Customers Say About Us
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
       
        className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[790px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full bg-center mt-10 md:flex-row md:mt-[50px]"
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
              <RatingSummary />
            </div>
          </div>
        </div>
      </div>
      <div
       
        className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full bg-center mt-[50px] md:flex-row"
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
               
                className="items-start box-border caret-transparent flex flex-col flex-wrap min-h-[auto] min-w-[auto] mx-[15px] md:flex-row md:mx-0"
              >
                <ReviewCard
                  firstName="Gloria M. - Portland, OR "
                  firstReview={`"My husband was the skeptic. 'It's just tea,' he said. Well, 'just tea' brought his eGFR up noticeably over three months. His doctor was impressed enough to hold off on starting medication. He's not skeptical anymore - he's the one reminding ME to make a fresh pitcher every morning."`}
                  secondName="Marlene C. - Denver, CO"
                  secondReview={`"My doctor had me on the edge of prescribing kidney medication. She gave me 3 months to try to bring my numbers up naturally. I went all-in on hibiscus tea, 3 cups a day. Came back at 3 months and my eGFR was in the normal range for the first time in years. No medication needed. She told me to keep doing whatever I'm doing."`}
                  secondNameClassName=""
                  secondReviewClassName=""
                />
                <div
                 
                  className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[30px] min-h-[auto] min-w-[30px] outline-[3px] w-[30px]"
                >
                  <div
                   
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                     
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <div
                       
                        className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-5"
                      >
                        <div
                         
                          className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <ReviewCard
                  firstName="Deborah F."
                  firstReview={`"I was really trying to avoid kidney medication. The side effects scared me, and I didn't want to be on pills for the rest of my life. My sister told me about hibiscus tea and I figured I had nothing to lose. Three months later, my numbers are solidly normal. My doctor is happy, I'm relieved, and I didn't have to go down the medication road. Yet, at least."`}
                  secondName="Eugene W."
                  secondReview={`"I'm 68 and my kidney function had been creeping down for years. I'd tried fish oil, CoQ10, magnesium, nothing made a real difference. Hibiscus tea is the first thing that actually moved the needle. My eGFR readings are up, my doctor is happy, and I actually enjoy drinking it. That last part matters more than you'd think."`}
                  secondNameClassName=""
                  secondReviewClassName=""
                />
                <div
                 
                  className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[30px] min-h-[auto] min-w-[30px] outline-[3px] w-[30px]"
                >
                  <div
                   
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                     
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <div
                       
                        className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-5"
                      >
                        <div
                         
                          className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <ReviewCard
                  firstName="Gloria M. — Portland, OR "
                  firstReview={`"My husband was the skeptic. 'It's just tea,' he said. Well, 'just tea' brought his eGFR up noticeably over three months. His doctor was impressed enough to hold off on starting medication. He's not skeptical anymore - he's the one reminding ME to make a fresh pitcher every morning."`}
                  secondName="Marlene C. — Denver, CO"
                  secondReview={`"My doctor had me on the edge of prescribing kidney medication. She gave me 3 months to try to bring my numbers up naturally. I went all-in on hibiscus tea, 3 cups a day. Came back at 3 months and my eGFR was in the normal range for the first time in years. No medication needed. She told me to keep doing whatever I'm doing."`}
                  secondNameClassName=""
                  secondReviewClassName=""
                />
                <div
                 
                  className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[30px] min-h-[auto] min-w-[30px] outline-[3px] w-[30px]"
                >
                  <div
                   
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                     
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <div
                       
                        className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-5"
                      >
                        <div
                         
                          className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <ReviewCard
                  firstName="Raymond T."
                  firstReview={`"I'm a numbers guy. I track my eGFR twice a week and have for years. Started hibiscus tea and kept tracking. Within 6 weeks, I could see a clear upward trend in my readings. Not dramatic, but consistent and measurable. At my 3-month checkup, my doctor noticed too. That's not placebo, that's data."`}
                  secondName="Beverly N."
                  secondReview={`"The stress of worrying about my kidney function was probably making it worse. Now I feel like I'm actually doing something about it every day. My numbers have improved, yes, but honestly the peace of mind might be the biggest benefit. I go to checkups feeling confident instead of anxious. That's huge."`}
                  secondNameClassName="md:text-[17px] md:leading-[25.5px]"
                  secondReviewClassName="text-[17.4583px] leading-[26.1875px]"
                />
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
                        title="BUY NOW & SAVE"
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
                                src=""
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
