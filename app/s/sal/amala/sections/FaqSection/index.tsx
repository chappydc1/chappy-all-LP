import { FaqItem } from "../FaqSection/components/FaqItem";
import { CtaBanner } from "../../components/CtaBanner";

export const FaqSection = () => {
  return (
    <section
      className="relative items-center bg-gray-100 bg-no-repeat box-border caret-transparent flex flex-col justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center px-[15px] py-[45px] md:py-[60px]"
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
                    Frequently Asked Questions
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
                className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-10"
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
                      <FaqItem
                        question="What is PrimeCell H2?"
                        answer="PrimeCell H2 is a high-concentration molecular hydrogen tablet designed to deliver selective antioxidant protection at the cellular level. Unlike traditional antioxidants that indiscriminately neutralize all free radicals (including beneficial ones), PrimeCell H2 targets only the most cytotoxic radicals - hydroxyl radicals - while preserving your body's natural oxidative signaling. Each tablet dissolves in water to release 10+ PPM of therapeutic molecular hydrogen that crosses the blood-brain barrier, penetrates mitochondrial membranes, and activates your body's own master antioxidant production through the Nrf2 pathway."
                        rootClassName=""
                        iconSrc="/images/amala/icon-1.svg"
                        iconAlt="Icon"
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <FaqItem
                        question="Why should I take it?"
                        answer="You should take PrimeCell H2 if you're serious about reversing biological aging at the cellular level, not just managing symptoms. It's designed for people who've already optimized their diet and exercise but still experience accelerated aging, declining energy, slow recovery, or brain fog. Molecular hydrogen addresses the root cause of cellular aging - oxidative stress - in a way that no other supplement can: selective targeting, universal cellular penetration, and activation of your endogenous antioxidant systems. This is the foundational intervention that makes everything else in your longevity protocol work better."
                        rootClassName="mt-2.5"
                        iconSrc="/images/amala/icon-1.svg"
                        iconAlt="Icon"
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <FaqItem
                        question="What are the health benefits?"
                        answer="PrimeCell H2 provides selective antioxidant defense by neutralizing only cytotoxic free radicals while preserving beneficial oxidative signaling for immune function and exercise adaptation. It enhances mitochondrial function and ATP production for sustained natural energy without stimulants. Because it crosses the blood-brain barrier, it protects neurons and supports neurotransmitter production for sharp focus and memory. It reduces exercise-induced oxidative stress for faster recovery, protects skin cells from oxidative damage for visible anti-aging effects, and activates the Nrf2 pathway to upregulate your body's own production of master antioxidants like glutathione, SOD, and catalase."
                        rootClassName="mt-2.5"
                        iconSrc="/images/amala/icon-1.svg"
                        iconAlt="Icon"
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <FaqItem
                        question="What is the best time of day to take PrimeCell H2?"
                        answer="Most users take PrimeCell H2 first thing in the morning on an empty stomach for optimal absorption and all-day cellular protection. You can also take it pre-workout to reduce exercise-induced oxidative stress, or in the evening to support recovery and cellular repair during sleep. The key is consistency - taking it at the same time daily maximizes cumulative benefits. For best results, dissolve the tablet in 12-16 oz of filtered water and drink immediately after dissolution to capture the full hydrogen concentration."
                        rootClassName="mt-2.5"
                        iconSrc="/images/amala/icon-1.svg"
                        iconAlt="Icon"
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <FaqItem
                        question="How many servings in a bottle?"
                        answer="Each bottle contains 30 effervescent tablets. At the recommended dosage of one tablet daily, this provides a 30-day (1-month) supply. For advanced users or those seeking accelerated results during initial loading phases, some take two tablets daily (one morning, one evening), which provides a 15-day supply. We recommend starting with one tablet daily and tracking your biomarkers to determine your optimal dosage."
                        rootClassName="mt-2.5"
                        iconSrc="/images/amala/icon-1.svg"
                        iconAlt="Icon"
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <FaqItem
                        question="Does it contain caffeine?"
                        answer="No. PrimeCell H2 contains zero caffeine, stimulants, or artificial additives. The sustained energy you experience comes from enhanced mitochondrial function and cellular ATP production - not from stimulation. This means no jitters, no crashes, and no dependency. You're supporting your body's natural energy systems at the cellular level, which is far more sustainable than relying on external stimulants."
                        rootClassName="mt-2.5"
                        iconSrc="/images/amala/icon-1.svg"
                        iconAlt="Icon"
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <FaqItem
                        question="How do I use it properly?"
                        answer="Drop one tablet into 12-16 oz of room temperature or cool filtered water. Allow 60-90 seconds for complete dissolution (you'll see effervescence as hydrogen gas is released). Drink immediately after dissolution to capture maximum hydrogen concentration. Do not use hot water, as heat degrades hydrogen content. For best results, use within 10 minutes of dissolution. Take daily for at least 3-4 weeks to experience the full cumulative cellular protection benefits."
                        rootClassName="mt-2.5"
                        iconSrc="/images/amala/icon-1.svg"
                        iconAlt="Icon"
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <FaqItem
                        question="If I have a medical condition, can I take PrimeCell H2?"
                        answer="Molecular hydrogen has an exceptional safety profile with zero serious adverse effects reported in over 1,500 peer-reviewed studies spanning two decades. It's GRAS (Generally Recognized as Safe) by the FDA, and no drug interactions have been documented in clinical literature. However, if you have specific health conditions, take prescription medications, or are pregnant or nursing, we recommend consulting your healthcare provider before starting any new supplement. PrimeCell H2 is used safely by thousands, but informed decisions are always best."
                        rootClassName="mt-2.5"
                        iconSrc="/images/amala/icon-1.svg"
                        iconAlt="Icon"
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <FaqItem
                        question="Where is it sourced from?"
                        answer="PrimeCell H2 tablets are manufactured in the USA in an FDA-registered, GMP-certified facility under rigorous quality control standards. We use pharmaceutical-grade ingredients and conduct third-party testing for purity, hydrogen concentration verification, and contaminant screening including heavy metals and microbes. Every batch includes a Certificate of Analysis available upon request. We source only the highest quality components to ensure therapeutic hydrogen concentration in every tablet."
                        rootClassName="mt-2.5"
                        iconSrc="/images/amala/icon-1.svg"
                        iconAlt="Icon"
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <FaqItem
                        question="How long does delivery take?"
                        answer="Orders ship within 1-2 business days via priority shipping. Most domestic orders within the USA arrive within 3-5 business days. You'll receive full tracking information via email as soon as your order ships so you can monitor delivery in real-time."
                        rootClassName="mt-2.5"
                        iconSrc="/images/amala/icon-1.svg"
                        iconAlt="Icon"
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <FaqItem
                        question="How soon will I feel the effects?"
                        answer="Many users notice improved mental clarity, better sleep quality, or reduced brain fog within the first 3-7 days as molecular hydrogen begins protecting neurons and supporting neurotransmitter balance. By weeks 2-3, most report sustained energy improvements and faster workout recovery. Visible anti-aging effects and significant biomarker improvements typically appear around weeks 8-12 with consistent daily use. This isn't a stimulant that kicks in immediately - it's cellular optimization that compounds over time. Track both subjective feelings and objective biomarkers like labs, HRV, and recovery metrics for the full picture."
                        rootClassName="mt-2.5"
                        iconSrc="/images/amala/icon-1.svg"
                        iconAlt="Icon"
                      />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <FaqItem
                        question="Is there a money-back guarantee?"
                        answer="Yes. Your order is protected by our 90-day results guarantee. If you don't experience measurable improvements in energy, recovery, mental clarity, or visible signs of biological age reversal, simply reach out within 90 days for a full refund. No questions asked, no hassle. We're this confident because molecular hydrogen is backed by 1,500+ peer-reviewed studies. Either your cells get the selective antioxidant defense they need, or you get your money back."
                        rootClassName="mt-2.5"
                        iconSrc="/images/amala/icon-1.svg"
                        iconAlt="Icon"
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
              className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <CtaBanner
                containerVariant="min-h-[auto] min-w-[auto] mt-10 md:mt-[50px]"
                sectionVariant="min-h-[auto]"
                wrapperVariant="min-w-[auto]"
                contentVariant="min-h-[auto] min-w-[auto]"
                buttonVariant="bg-gray-800 min-h-[auto] min-w-[auto]"
                innerButtonVariant="min-h-[auto] min-w-[auto]"
                mediaRowVariant=""
                mediaWrapperVariant="min-h-[auto] min-w-[auto]"
                mediaInnerVariant="min-h-[auto] min-w-[auto]"
                mediaItemVariant="min-h-[auto]"
                imageWrapperVariant="min-h-[auto] min-w-[auto]"
                imageSrc="/images/amala/20.svg"
                imageAlt=""
                imageSizes="1170px"
                imageClassName="min-h-[auto] min-w-[auto]"
                textWrapperVariant="min-h-[auto] min-w-[auto]"
                headingTag="p"
                headingText="90-Day Money Back Guarantee"
                headingClassName="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-base md:leading-6"
                ctaText="BUY NOW & SAVE"
                ctaTitle="BUY NOW & SAVE"
              />
            </div>
          </div>
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              {/* decorative overlay — no image asset available */}
            </div>
          </div>
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
