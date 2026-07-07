"use client";
import { NebrooFAQItem } from "./components/NebrooFAQItem";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const NebrooFAQ = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <div id="faq" className="items-stretch box-border caret-transparent flex flex-wrap justify-center max-w-full px-2 py-5 md:flex-nowrap md:px-2.5">
      <div ref={ref} className="relative items-stretch box-border caret-transparent block basis-full flex-col grow max-w-[1200px] min-h-[25px] w-min mx-0 px-px md:flex md:basis-0 md:mx-auto md:px-0">
        <div className={`text-[25px] font-bold box-border caret-transparent leading-8 min-h-0 min-w-0 text-center font-montserrat md:text-4xl md:leading-[47px] md:min-h-[auto] md:min-w-[auto] reveal ${visible ? "visible" : ""}`}>
          Have a Question?
          <div className="text-[25px] box-border caret-transparent leading-8 md:text-4xl md:leading-[47px]">
            We Can Help!
          </div>
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 py-[5px] md:min-h-[auto] md:min-w-[auto]">
          <NebrooFAQItem
            question="Do I need to take a hearing test before buying?"
            answer={
              <>
                No, you do not have to take a hearing test before purchasing.
                <div>
                  <br />
                </div>
                <div>
                  Our hearing aids are developed to work for Americans that
                  suffer from mild to moderate hearing loss. With our volume
                  controls and different sized ear domes included with your
                  order, you can rest assured that your Nebroo PRO 2.0 Hearing
                  Aids will fit comfortably, and give you the results you need,
                  without having to see an audiologist or take a hearing test.
                </div>
              </>
            }
          />
          <NebrooFAQItem
            question="Do I need a prescription before purchasing?"
            answer="No. There is no prescription needed for purchasing the Nebroo PRO 2.0 Hearing Aids. Anyone with perceived mild to moderate hearing loss can order them, as long as they are at least 18 years old."
          />
          <NebrooFAQItem
            question="What if it doesn't work for me?"
            answer={
              <div className="box-border caret-transparent">
                Our device comes with a{" "}
                <b className="font-bold box-border caret-transparent">
                  120-Day Money Back Guarantee
                </b>
                <b className="font-bold box-border caret-transparent">.</b>{" "}
                We're incredibly confident that our device is going to improve
                your mild to moderate hearing loss issues, but if they don't,
                please contact info@nebroo.com within 120 days of receiving the
                product and we will issue you a refund.
              </div>
            }
          />
          <NebrooFAQItem
            question="Are Nebroo PRO 2.0 Hearing Aids Visible?"
            answer={
              <div className="box-border caret-transparent">
                <ul className="box-border caret-transparent list-none pl-0">
                  <li className="box-border caret-transparent">
                    No. Our Nebroo PRO 2.0 Hearing Aids are a CIC model
                    (Completely-In-Canal) and they are nearly invisible.
                  </li>
                </ul>
              </div>
            }
          />
          <NebrooFAQItem
            question="How long will Shipping take?"
            answer={
              <div className="box-border caret-transparent">
                Our warehouse ships out orders within 1 business day from when
                the order is placed. For the shipping It can take anywhere from
                7 to 12 business days for the order to arrive.
              </div>
            }
          />
          <NebrooFAQItem
            question="Will they fall out of my ears?"
            answer={
              <div className="box-border caret-transparent">
                No! Our hearing aids fit snugly into your ears, meaning they'll
                comfortably stay in place all day long.
              </div>
            }
          />
          <NebrooFAQItem
            question="Will they fit me? "
            answer={
              <div className="box-border caret-transparent">
                Our hearing aids have been designed to fit virtually any ear.
                They come with 10 sizes of ear domes so that you can find the
                perfect size for you, even if you have a very large or small ear
                canal.
                <div className="box-border caret-transparent">
                  <br className="box-border caret-transparent" />
                </div>
                <div className="box-border caret-transparent">
                  But what if they still don't fit? In that case, you're covered
                  by our 120-Day Money-Back Guarantee.
                </div>
              </div>
            }
          />
          <NebrooFAQItem
            question={`Do you offer
					a warranty? `}
            answer={
              <>
                <div className="box-border caret-transparent">
                  On top of our
                  <b className="font-bold box-border caret-transparent">
                    120-Day Money-Back Guarantee
                  </b>
                  , we include a
                  <b className="font-bold box-border caret-transparent">
                    FREE 1 Year Warranty
                  </b>
                  on all orders. Even though our hearing aids are made to last
                  for years, we want our customers to have the best experience
                  possible and feel safe when they purchase from us. This means
                  that If your hearing aid breaks or encounters any issues due
                  to a manufacturing defect within one year from the date of
                  purchase, we’ve got you covered.
                </div>
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent">
                    <br className="box-border caret-transparent" />
                  </div>
                  <div className="box-border caret-transparent">
                    If your product gets damaged within 1 year of placing your
                    order, simply reach out to{" "}
                    <b className="font-bold box-border caret-transparent">
                      info@nebroo.com
                    </b>
                    {" "}and{" "}
                    <b className="font-bold box-border caret-transparent">
                      we will send you a replacement.
                    </b>
                  </div>
                </div>
              </>
            }
          />
          <NebrooFAQItem
            question={`What’s the size and
					  dimension of these hearing aids?  
					`}
            answer={
              <div className="bg-white box-border caret-transparent">
                Great question! They’re 0.79 inches long by 0.51 inches wide,
                making them one of the smallest hearing aids available. You’ll
                also get 10 different sizes of ear domes with your order to make
                sure our hearing aids fit you perfectly, even with a small or
                large ear canal!
              </div>
            }
          />
          <NebrooFAQItem
            question="I have more questions, how can I contact you?"
            answer={
              <>
                We&apos;re more than happy to answer any questions you may have
                over email at info@nebroo.com or you can simply call us at this
                number:
                <b className="font-bold box-border caret-transparent">
                  +1 (512) 645-1495
                </b>
              </>
            }
          />
          <NebrooFAQItem
            question="What is included with the Nebroo PRO 2.0 Hearing Aids"
            answer={
              <>
                <div className="box-border caret-transparent">
                  1 Pair of Nebroo PRO 2.0 Hearing Aids (2 hearing aids, one for
                  each ear)
                  <div className="box-border caret-transparent">
                    1 Charging Cable (USBC)
                  </div>
                  <div className="box-border caret-transparent">
                    1 Cleaning Brush
                  </div>
                  <div className="box-border caret-transparent">
                    10 Ear Domes pairs in Different Sizes
                  </div>
                  <div className="box-border caret-transparent">
                    1 Pair of Wax Guards
                  </div>
                  <div className="box-border caret-transparent">
                    <a
                      title=""
                      href="https://offer.nebroo.com/user-manual-2-0"
                      className="text-blue-600 box-border caret-transparent max-w-full text-center"
                    >
                      User Manual
                    </a>
                  </div>
                </div>
                <a
                  title="User Manual"
                  href="https://offer.nebroo.com/user-manual-2-0"
                  className="text-blue-700 box-border caret-transparent max-w-full text-center"
                />
              </>
            }
          />
          <NebrooFAQItem
            question="How long does it take to recharge?"
            answer="Charging time is approximately 3-4 hours, and the case has the capacity to recharge the hearing aids about 3 times before having to charge it again."
          />
          <NebrooFAQItem
            question="Is this covered by insurance?"
            answer={
              <div className="box-border caret-transparent">
                No, the Nebroo hearing aids are not covered by insurance
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};
