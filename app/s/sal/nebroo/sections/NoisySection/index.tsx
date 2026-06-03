"use client";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { HsaFsaSection } from "../HsaFsaSection";

export const NoisySection = () => {
  const s1 = useScrollReveal();
  const s2 = useScrollReveal();
  const s3 = useScrollReveal();
  const s4 = useScrollReveal();
  const s5 = useScrollReveal();
  return (
    <div id="features" className="items-stretch box-border caret-transparent flex flex-wrap justify-center max-w-full px-2 py-px md:flex-nowrap md:pt-0 md:pb-5 md:px-2.5">
      <div className="relative items-stretch box-border caret-transparent basis-full grow max-w-[1200px] min-h-[25px] w-min mx-0 py-px md:basis-0 md:mx-auto md:py-0">
        <div ref={s1.ref} className={`items-center box-border caret-transparent flex flex-row flex-wrap justify-start md:flex-nowrap reveal ${s1.visible ? "visible" : ""}`}>
          <div className="box-border caret-transparent hidden basis-full grow min-h-[25px] min-w-0 pt-px pb-2.5 px-2.5 md:block md:min-w-[auto] md:pt-2.5">
            <img
              alt="Effective Also in The Noisiest Environments!.webp"
              title=""
              src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1739604908898_Effective_even_in_noisy_environments_v3.webp"
              
              className="self-center box-border caret-transparent inline max-w-full mx-auto rounded-[10px] md:self-auto"
            />
          </div>
          <div className="items-stretch box-border caret-transparent flex basis-full flex-col grow justify-center min-h-[25px] min-w-[auto] pt-5 pb-[30px] px-2.5 md:[align-items:normal] md:py-2.5">
            <div className="text-2xl font-bold box-border caret-transparent leading-[34px] min-h-[auto] min-w-[auto] text-left font-montserrat">
              Effective Even in Noisy Environments!
            </div>
            <img
              alt="Effective Also in The Noisiest Environments!.webp"
              title=""
              src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1739604908898_Effective_even_in_noisy_environments_v3.webp"
              
              className="self-center box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] mt-5 rounded-[10px] md:self-auto md:hidden md:min-h-0 md:min-w-0"
            />
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-full mt-5 md:w-auto">
              <div className="text-[17px] box-border caret-transparent leading-[25.5px] text-left font-montserrat">
                <b className="font-bold box-border caret-transparent">
                  The Nebroo PRO 2.0 Hearing Aids 
                </b>
                <b className="font-bold box-border caret-transparent">
                  technology
                </b>
                enhances voice clarity in social settings and other noisy
                environments such as restaurants, poker games, bridge nights,
                movies. The 
                <span className="box-border caret-transparent">
                  Nebroo PRO 2.0 Hearing Aids
                </span>
                <b className="font-bold box-border caret-transparent">
                  {" "}
                  can help you in virtually any social situation.
                </b>
              </div>
              <div className="box-border caret-transparent w-full mt-5">
                <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full pr-px md:flex-nowrap">
                  <div className="relative box-border caret-transparent basis-full grow max-w-full min-h-[25px] w-min md:basis-0">
                    <div className="items-start box-border caret-transparent flex flex-wrap justify-start mt-2.5 md:flex-nowrap">
                      <div className="box-border caret-transparent basis-[6.57%] grow min-h-[25px] min-w-[auto]">
                        <img
                          title=""
                          src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1729048495546_bluetick_1_.webp"
                          
                          alt=""
                          className="text-black box-border caret-transparent inline max-w-full w-[25px]"
                        />
                      </div>
                      <div className="box-border caret-transparent basis-[86.52%] grow shrink-0 min-h-[25px] min-w-[auto] md:basis-full md:shrink">
                        <div className="text-[17px] box-border caret-transparent leading-[27px] text-left p-px font-montserrat">
                          <span className="box-border caret-transparent">
                            <b className="font-bold box-border caret-transparent">
                              Enhances sound clarity
                            </b>
                            in the auditory system
                            <br className="box-border caret-transparent" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full pr-px md:flex-nowrap">
                  <div className="relative box-border caret-transparent basis-full grow max-w-full min-h-[25px] w-min md:basis-0">
                    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start md:flex-nowrap"></div>
                    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start mt-2.5 md:flex-nowrap"></div>
                    <div className="items-start box-border caret-transparent flex flex-wrap justify-start mt-2.5 md:flex-nowrap">
                      <div className="box-border caret-transparent basis-[6.57%] grow min-h-[25px] min-w-[auto]">
                        <img
                          title=""
                          src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1729048495546_bluetick_1_.webp"
                          
                          alt=""
                          className="text-black box-border caret-transparent inline max-w-full w-[25px]"
                        />
                      </div>
                      <div className="box-border caret-transparent basis-[86.52%] grow shrink-0 min-h-[25px] min-w-[auto] md:basis-full md:shrink">
                        <div className="text-[17px] box-border caret-transparent leading-[27px] text-left p-px font-montserrat">
                          <span className="box-border caret-transparent">
                            <span className="box-border caret-transparent">
                              Immediately reduces the difficulty in
                              understanding conversations,{" "}
                            </span>
                            <b className="font-bold box-border caret-transparent">
                              even in noisy environments
                            </b>
                            <br className="box-border caret-transparent" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="items-start box-border caret-transparent flex flex-wrap justify-start mt-2.5 md:flex-nowrap">
                      <div className="box-border caret-transparent basis-[6.57%] grow min-h-[25px] min-w-[auto]">
                        <img
                          title=""
                          src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1729048495546_bluetick_1_.webp"
                          
                          alt=""
                          className="text-black box-border caret-transparent inline max-w-full w-[25px]"
                        />
                      </div>
                      <div className="box-border caret-transparent basis-[86.52%] grow shrink-0 min-h-[25px] min-w-[auto] md:basis-full md:shrink">
                        <div className="text-[17px] box-border caret-transparent leading-[27px] text-left p-px font-montserrat">
                          <span className="box-border caret-transparent">
                            Helps you be more confident when talking with
                            others,{" "}
                            <b className="font-bold box-border caret-transparent">
                              imagine not having to ask people to repeat
                              themselves
                            </b>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={s2.ref} className={`items-center box-border caret-transparent flex flex-row-reverse flex-wrap justify-start mt-0 md:flex-nowrap md:mt-2.5 reveal ${s2.visible ? "visible" : ""}`}>
          <div className="items-stretch box-border caret-transparent hidden basis-full flex-col grow justify-around min-h-[25px] min-w-0 pt-px pb-2.5 px-2.5 md:[align-items:normal] md:flex md:justify-center md:min-w-[auto] md:pt-2.5">
            <img
              alt="Get Them Without a Prescription, And Without Going Trough Costly Exams.webp"
              title=""
              src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1729153792697_1712406903426_Get_Them_Without_a_Prescription_And_Without_Going_Trough_Costly_Exams.webp"
              
              className="items-end self-center box-border caret-transparent inline justify-start max-w-full min-h-0 min-w-0 mx-auto rounded-[10px] md:[align-items:normal] md:self-auto md:block md:justify-normal md:min-h-[auto] md:min-w-[auto]"
            />
          </div>
          <div className="items-center box-border caret-transparent flex basis-full flex-col grow justify-center min-h-[25px] min-w-[auto] pt-5 pb-[30px] px-2.5 md:py-2.5">
            <div className="text-2xl font-bold box-border caret-transparent leading-[34px] min-h-[auto] min-w-[auto] font-montserrat">
              <div className="box-border caret-transparent text-left">
                <div className="box-border caret-transparent">
                  Get Them Without a Prescription, And Without Going Through
                  Costly Exams
                </div>
              </div>
            </div>
            <img
              alt="Get Them Without a Prescription, And Without Going Trough Costly Exams.webp"
              title=""
              src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1729153792697_1712406903426_Get_Them_Without_a_Prescription_And_Without_Going_Trough_Costly_Exams.webp"
              
              className="items-end self-center box-border caret-transparent flex justify-start max-w-full min-h-[auto] min-w-[auto] mt-5 mx-0 rounded-[10px] md:[align-items:normal] md:self-auto md:hidden md:justify-normal md:min-h-0 md:min-w-0 md:mx-auto"
            />
            <div className="text-[17px] box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] text-left mt-5 font-montserrat md:leading-[26px]">
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                There is no prescription needed for purchasing our
                <b className="font-bold box-border caret-transparent leading-6 md:leading-[26px]">
                  Nebroo PRO 2.0 Hearing Aids.
                </b>
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                <br className="box-border caret-transparent leading-6 md:leading-[26px]" />
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                Because being an 
                <b className="font-bold box-border caret-transparent leading-6 md:leading-[26px]">
                  OTC
                </b>
                (Over the Counter) model,
                <b className="font-bold box-border caret-transparent leading-6 md:leading-[26px]">
                  {" "}
                  they do not require any prescription.
                </b>
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                <b className="font-bold box-border caret-transparent leading-6 md:leading-[26px]">
                  <br className="box-border caret-transparent leading-6 md:leading-[26px]" />
                </b>
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                Anyone with perceived mild to moderate hearing loss can order
                them, as long as they are at least 18 years old.
              </div>
            </div>
          </div>
        </div>
        <div ref={s3.ref} className={`items-center box-border caret-transparent flex flex-row flex-wrap justify-start mt-0 md:flex-nowrap md:mt-2.5 reveal ${s3.visible ? "visible" : ""}`}>
          <div className="box-border caret-transparent hidden basis-full grow min-h-[25px] min-w-0 pt-px pb-2.5 px-2.5 md:block md:min-w-[auto] md:pt-2.5">
            <img
              alt="Sound That Fits You Like Your Favourite T-Shirt.webp"
              title=""
              src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1739605028190_Sound_that_fits_v7.webp"
              
              className="self-center box-border caret-transparent inline max-w-full mx-auto rounded-[10px] md:self-auto"
            />
          </div>
          <div className="items-start box-border caret-transparent flex basis-full flex-col grow justify-center min-h-[25px] min-w-[auto] pt-5 pb-[30px] px-2.5 md:py-2.5">
            <div className="text-2xl font-bold box-border caret-transparent leading-[34px] min-h-[auto] min-w-[auto] font-montserrat">
              <div className="box-border caret-transparent text-left">
                Sound That Fits You Like Your Favorite T-Shirt
              </div>
            </div>
            <img
              alt="Sound That Fits You Like Your Favourite T-Shirt.webp"
              title=""
              src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1739605028190_Sound_that_fits_v7.webp"
              
              className="self-center box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] mt-5 mx-0 rounded-[10px] md:self-auto md:hidden md:min-h-0 md:min-w-0 md:mx-auto"
            />
            <div className="text-[17px] box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] text-left mt-5 font-montserrat md:leading-[26px]">
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                When we developed the Nebroo PRO 2.0 Hearing Aids we absolutely
                wanted them to
                <b className="font-bold box-border caret-transparent leading-6 md:leading-[26px]">
                  fit everyone
                </b>
                , especially when it comes to the sound.
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                <br className="box-border caret-transparent leading-6 md:leading-[26px]" />
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                That&#39;s why we made them
                <b className="font-bold box-border caret-transparent leading-6 md:leading-[26px]">
                  fully adjustable
                </b>
                to fit everyone&#39;s needs. 
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                <br className="box-border caret-transparent leading-6 md:leading-[26px]" />
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                You can choose between{" "}
                <b className="font-bold box-border caret-transparent leading-6 md:leading-[26px]">
                  6 different volume levels with a click of a button,{" "}
                </b>
                it&#39;s extremely simple to do and it allows you to increase or
                decrease the volume to be at the level that suits you the best,
                whenever you want. 
              </div>
            </div>
          </div>
        </div>
        <div ref={s4.ref} className={`items-center box-border caret-transparent flex flex-row-reverse flex-wrap justify-start mt-0 md:flex-nowrap md:mt-2.5 reveal ${s4.visible ? "visible" : ""}`}>
          <div className="box-border caret-transparent hidden basis-full flex-col grow justify-center min-h-[25px] min-w-0 p-2.5 md:flex md:min-w-[auto]">
            <img
              alt="20 Hours of Battery Life.webp"
              title=""
              src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1739407847287_16h_Battery.webp"
              
              className="self-center box-border caret-transparent inline max-w-full min-h-0 min-w-0 mx-auto rounded-[10px] md:self-auto md:block md:min-h-[auto] md:min-w-[auto]"
            />
          </div>
          <div className="items-start box-border caret-transparent basis-full flex-col grow justify-around min-h-[25px] min-w-[auto] pt-5 pb-[30px] px-2.5 md:py-2.5">
            <div className="text-2xl font-bold box-border caret-transparent leading-[34px] font-montserrat">
              <div className="box-border caret-transparent text-left">
                <div className="box-border caret-transparent">
                  Enjoy Clear Uninterrupted Hearing Without Having To Worry
                  About Battery.
                </div>
              </div>
            </div>
            <img
              alt="20 Hours of Battery Life.webp"
              title=""
              src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1739407847287_16h_Battery.webp"
              
              className="self-center box-border caret-transparent block justify-start max-w-full mt-5 mx-0 rounded-[10px] md:self-auto md:hidden md:justify-normal md:mx-auto"
            />
            <div className="text-[17px] box-border caret-transparent leading-6 text-left mt-5 font-montserrat md:leading-[26px]">
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                The Nebroo PRO 2.0 Hearing Aids have an
                <b className="font-bold box-border caret-transparent leading-6 md:leading-[26px]">
                  extended battery life
                </b>
                that lasts up to 16 hours on a single charge, this means that
                <b className="font-bold box-border caret-transparent leading-6 md:leading-[26px]">
                  you can use them for a full day without having to worry about
                  battery.
                </b>
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                <br className="box-border caret-transparent leading-6 md:leading-[26px]" />
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]"></div>
              <span className="bg-white box-border caret-transparent leading-6 md:leading-[26px]">
                They also come with a portable charging case that lets you
                recharge them wireless (you can recharge them without connecting
                the charging case to a power source) up to 3 times before
                running out of battery.
              </span>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                <br className="box-border caret-transparent leading-6 md:leading-[26px]" />
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                And
                <b className="font-bold box-border caret-transparent leading-6 md:leading-[26px]">
                  when the case goes out of charge, you can plug it back in
                </b>
                and in a matter of a few hours you will be able to recharge your
                hearing aids up to 3 times completely wireless again!
              </div>
            </div>
          </div>
        </div>
        <HsaFsaSection />
        <div ref={s5.ref} className={`items-center box-border caret-transparent flex flex-row-reverse flex-wrap justify-start mt-0 md:flex-nowrap md:mt-2.5 reveal ${s5.visible ? "visible" : ""}`}>
          <div className="box-border caret-transparent hidden basis-full grow min-h-[25px] min-w-0 pt-px pb-2.5 px-2.5 md:block md:min-w-[auto] md:pt-2.5">
            <img
              alt="Try It for 120 Days, 100% Risk-Free.webp"
              title=""
              src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1739604906705_Money_back_guarantee_v2.webp"
              
              className="self-center box-border caret-transparent inline max-w-full mx-auto rounded-[10px] md:self-auto"
            />
          </div>
          <div className="items-start box-border caret-transparent flex basis-full flex-col grow justify-center min-h-[25px] min-w-[auto] pt-5 pb-[30px] px-2.5 md:py-2.5">
            <div className="text-2xl font-bold box-border caret-transparent leading-[34px] min-h-[auto] min-w-[auto] font-montserrat">
              <div className="box-border caret-transparent text-left">
                120-Day Money Back Guarantee
              </div>
            </div>
            <img
              alt="Try It for 120 Days, 100% Risk-Free.webp"
              title=""
              src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1739604906705_Money_back_guarantee_v2.webp"
              
              className="self-center box-border caret-transparent block float-left max-w-full min-h-[auto] min-w-[auto] w-full mt-5 rounded-[10px] md:self-auto md:hidden md:min-h-0 md:min-w-0 md:w-auto"
            />
            <div className="text-[17px] box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] text-left mt-5 font-montserrat md:leading-[26px]">
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                Here’s the deal: We believe in this product and want you to be
                totally certain that it works for you.
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                <br className="box-border caret-transparent leading-6 md:leading-[26px]" />
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                That’s why we are offering a 
                <b className="font-bold box-border caret-transparent leading-6 md:leading-[26px]">
                  <u className="box-border caret-transparent leading-6 underline md:leading-[26px]">
                    <a
                      title=""
                      href="https://offer.nebroo.com/refund-policy"
                      className="text-neutral-800 box-border caret-transparent leading-6 max-w-full text-center md:leading-[26px]"
                    >
                      <span className="text-black box-border caret-transparent leading-6 md:leading-[26px]">
                        120-Day Money Back Guarantee.
                      </span>
                    </a>
                  </u>
                </b>
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                <br className="box-border caret-transparent leading-6 md:leading-[26px]" />
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                Simply, get yourself a Pair of{" "}
                <span className="box-border caret-transparent leading-6 md:leading-[26px]">
                  Nebroo PRO 2.0 Hearing Aids
                </span>
                today, and if you aren&#39;t satisfied with them within 
                <b className="font-bold box-border caret-transparent leading-6 md:leading-[26px]">
                  120 days,{" "}
                </b>
                <span className="box-border caret-transparent leading-6 md:leading-[26px]">
                  <b className="font-bold box-border caret-transparent leading-6 md:leading-[26px]">
                    just contact us and we will help you return your product for
                    a refund.
                  </b>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex flex-wrap justify-start mt-0 md:flex-nowrap md:mt-2.5">
          <div className="box-border caret-transparent hidden basis-full flex-col grow justify-center min-h-[25px] min-w-0 p-2.5 md:flex md:min-w-[auto]">
            <img
              alt="1 YR WARRANTY W BG.webp"
              title=""
              src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1729153931349_1712659679515_1_YR_WARRANTY_W_BG.webp"
              
              className="self-center box-border caret-transparent inline max-w-full min-h-0 min-w-0 mx-auto rounded-[10px] md:self-auto md:block md:min-h-[auto] md:min-w-[auto]"
            />
          </div>
          <div className="items-start box-border caret-transparent basis-full flex-col grow justify-around min-h-[25px] min-w-[auto] px-2.5 py-5 md:py-2.5">
            <div className="text-2xl font-bold box-border caret-transparent leading-[34px] font-montserrat">
              <div className="box-border caret-transparent text-left">
                <div className="box-border caret-transparent">
                  Enjoy Peace of Mind With 1 Full Year of Warranty
                </div>
              </div>
            </div>
            <img
              alt="1 YR WARRANTY W BG.webp"
              title=""
              src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1729153931349_1712659679515_1_YR_WARRANTY_W_BG.webp"
              
              className="self-center box-border caret-transparent block max-w-full mt-5 mx-0 rounded-[10px] md:self-auto md:hidden md:mx-auto"
            />
            <div className="text-[17px] box-border caret-transparent leading-6 text-left mt-5 font-montserrat md:leading-[26px]">
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                Your confidence in Nebroo PRO 2.0 Hearing Aids is our top
                priority.
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                <br className="box-border caret-transparent leading-6 md:leading-[26px]" />
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                That’s why every pair comes with a
                <b className="font-bold box-border caret-transparent leading-6 md:leading-[26px]">
                  one-year warranty at no extra cost.
                </b>
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                <br className="box-border caret-transparent leading-6 md:leading-[26px]" />
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                We&#39;re so confident in their durability and performance that
                if they don&#39;t meet your expectations, we&#39;re here to help
                make it right.
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                <br className="box-border caret-transparent leading-6 md:leading-[26px]" />
              </div>
              <div className="box-border caret-transparent leading-6 md:leading-[26px]">
                <b className="font-bold box-border caret-transparent leading-6 md:leading-[26px]">
                  This means your investment is protected for a full year.
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
