import { useState } from "react";

import { OFFER_SECTION_HREF } from "../../../config/links";

type AccordionItemDef = {
  title: string;
  content: React.ReactNode;
};

const ACCORDION_ITEMS: AccordionItemDef[] = [
  {
    title: "The Science Behind PrimeCell H2",
    content: (
      <>
        <p>
          <strong><span className="font-normal">If you struggle with chronic fatigue, brain fog, slow recovery, visible aging, inflammation, or declining performance - oxidative stress could be the reason.</span></strong>
        </p>
        <p><br /></p>
        <p>Oxidative stress is involved in virtually every age-related decline in your body, from mitochondrial dysfunction to cellular membrane damage, DNA degradation to chronic inflammation.</p>
        <p><br /></p>
        <p>
          <b><span className="font-normal">But here's what the supplement industry won't tell you: most antioxidants can't reach the sites where oxidative damage is actually happening - inside your mitochondria, across the blood-brain barrier, deep within cellular structures.</span></b>
        </p>
        <p><br /></p>
        <p>And worse? Traditional antioxidants neutralize beneficial free radicals your body needs for muscle adaptation, immune defense, and cellular signaling.</p>
        <p><br /></p>
        <p>
          <b>PrimeCell H2{" "}<span className="font-normal">delivers molecular hydrogen - the smallest molecule in the universe - directly to the source of cellular aging. It crosses every barrier, penetrates every membrane, and selectively targets only the most damaging free radicals (hydroxyl radicals) while preserving the beneficial ones.</span></b>
        </p>
        <p><br /></p>
        <p>This is precision cellular defense. This is the foundation your expensive supplement stack has been missing.</p>
      </>
    ),
  },
  {
    title: "What Can PrimeCell H2 Help With?",
    content: (
      <>
        <p><strong>1. Chronic Fatigue &amp; Energy Crashes</strong></p>
        <p>Molecular hydrogen supports mitochondrial function and ATP production at the cellular level - so you experience sustained energy throughout the day without relying on caffeine or stimulants.*</p>
        <p><br /></p>
        <p><strong>2. Accelerated Visible Aging</strong></p>
        <p>H2 penetrates skin cells and protects against oxidative damage that causes wrinkles, age spots, and dull complexion - helping you look as vital as you feel inside.*</p>
        <p><br /></p>
        <p><strong>3. Slow Recovery &amp; Declining Performance</strong></p>
        <p>Low antioxidant defense allows exercise-induced oxidative stress to accumulate, prolonging soreness and reducing gains. PrimeCell H2 helps you recover like you did in your 20s - train harder, bounce back faster.*</p>
        <p><br /></p>
        <p><strong>4. Brain Fog &amp; Cognitive Decline</strong></p>
        <p>Molecular hydrogen is one of the only antioxidants that crosses the blood-brain barrier to protect neurons from oxidative damage - supporting sharp focus, clear memory, and mental endurance without stimulants.*</p>
        <p><br /></p>
        <p><strong>5. Chronic Inflammation &amp; Joint Pain</strong></p>
        <p>Oxidative stress drives inflammatory cascades throughout your body. H2 helps modulate inflammatory response at the cellular level - so you wake up without stiffness and move freely again.*</p>
        <p><br /></p>
        <p><strong>6. Biological Age Acceleration</strong></p>
        <p>Your cells are aging faster than your chronological age suggests. Molecular hydrogen addresses the root cause - protecting telomeres, supporting cellular repair, and activating longevity pathways for measurable biological age reversal.*</p>
      </>
    ),
  },
  {
    title: "When Will I see Results?",
    content: (
      <>
        <p>Some users notice improved mental clarity, better sleep quality, and reduced inflammation within the first few days.</p>
        <p><br /></p>
        <p>Because molecular hydrogen is the smallest molecule in the universe, it starts working at the cellular level immediately - no waiting for digestion or absorption barriers.</p>
        <p><br /></p>
        <p>With consistent daily use, most people report significant improvements in sustained energy, workout recovery, cognitive sharpness, and visible anti-aging effects within <b>3-4 weeks.</b></p>
        <p><br /></p>
        <p>Just one tablet dissolved in water each day can help you feel more energized, recover faster, think more clearly, and reverse the visible signs of cellular aging.</p>
      </>
    ),
  },
  {
    title: "How Long Until I Get It?",
    content: (
      <>
        <p>All our products are shipped from the USA. Orders are processed and shipped from our Ohio fulfillment center within 1-2 business days.</p>
        <p><br /></p>
        <p>Most customers receive their package within 3-5 business days, depending on location.</p>
        <p><br /></p>
        <p>You'll receive a tracking number as soon as your order ships.</p>
      </>
    ),
  },
  {
    title: "Who Should Take It?",
    content: (
      <>
        <p><b><span className="font-normal">PrimeCell H2 is designed for anyone committed to optimizing cellular health, reversing biological aging, and taking control of their longevity - at the molecular level.</span></b></p>
        <p><br /></p>
        <p><b>It's especially powerful for:</b></p>
        <p><br /></p>
        <p><b>Adults 35-60</b> noticing accelerated aging, declining energy, or cognitive slowdown</p>
        <p><br /></p>
        <p><b>People who've "tried everything"</b> - clean diet, exercise, expensive supplements - but still feel like they're aging too fast</p>
        <p><br /></p>
        <p><b>Professionals experiencing chronic stress</b> and oxidative damage from demanding schedules</p>
        <p><br /></p>
        <p><b>Athletes and high performers</b> who need faster recovery and sustained energy without stimulants</p>
        <p><br /></p>
        <p>It's backed by 1,500+ peer-reviewed studies, third-party tested for purity and concentration, and produces zero side effects in clinical literature - just selective cellular protection where it matters most.</p>
        <p><br /></p>
        <p><b>If you refuse to accept aging as inevitable and want to reverse it at the cellular level… this was made for you.</b></p>
      </>
    ),
  },
  {
    title: "Results or Full Refund Guarantee",
    content: (
      <p>Your order today is protected by our 90-day money-back guarantee. If you don't experience measurable improvements in energy, recovery, mental clarity, or visible signs of biological age reversal - or if your biomarkers don't reflect the cellular protection you expected - just reach out within 90 days. We'll issue a full refund of your purchase price.</p>
    ),
  },
];

function AccordionItem({ title, content }: AccordionItemDef) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="border-b-zinc-900/10 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border-b"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black text-base font-bold box-border caret-transparent flex basis-[0%] justify-between leading-6 min-h-2.5 min-w-[auto] outline-[3px] text-left w-full py-[17px] rounded-[5px] md:text-[17px] md:leading-[25.5px] cursor-pointer"
      >
        <div className="text-base box-border caret-transparent flex basis-[0%] flex-col grow leading-6 max-w-[calc(100%_-_30px)] min-h-[auto] min-w-[auto] outline-[3px] w-fit md:text-[17px] md:leading-[25.5px]">
          {title}
        </div>
        <img
          src="https://c.animaapp.com/mohkicncTG3NcI/assets/icon-1.svg"
          alt="Icon"
          className={`text-base box-border caret-transparent h-[15px] leading-6 outline-[3px] w-[15px] mx-[5px] my-auto md:text-[17px] md:leading-[25.5px] transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
        />
      </button>
      <div
        className={`box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden transition-[max-height] duration-200 ease-in-out ${isOpen ? "max-h-[2000px]" : "max-h-0"}`}
      >
        <div className="relative box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] outline-[3px] pb-5">
          <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
            <div className="text-black text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-left w-full">
              <div className="box-border caret-transparent outline-[3px] w-full">
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const AddToCart = () => {
  return (
    <div
      className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
    >
      <div
        className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
      >
        <div
          className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-5 md:mt-[25px]"
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
                <a
                  href={OFFER_SECTION_HREF}
                  title="ADD TO CART"
                  className="relative cursor-pointer text-white text-lg font-bold self-center bg-gray-800 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent flex flex-col tracking-[0.36px] leading-[27.54px] max-w-full min-h-[auto] min-w-[auto] text-center align-middle w-full px-2.5 py-3 rounded-[30px]"
                >
                  <div
                    className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none"
                  >
                    <p
                      className="box-border caret-transparent outline-[3px]"
                    >
                      ADD TO CART
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
            >
              <div
                className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
              >
                <div
                  className="items-center box-border caret-transparent flex flex-wrap justify-center min-h-[auto] min-w-[auto] mt-3"
                >
                  <div
                    className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]"
                  >
                    <div
                      className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                    >
                      <div
                        className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                      >
                        <div
                          className="items-center box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]"
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
                                  src="https://c.animaapp.com/mohkicncTG3NcI/assets/16.svg"
                                  alt=""
                                  sizes="69px"
                                  title=""
                                  className="box-border caret-transparent h-[9px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-2"
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
                                className="text-black text-[12.0583px] box-border caret-transparent leading-[18.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full ml-2 md:text-[15px] md:leading-[22.5px]"
                              >
                                <div
                                  className="text-[12.0583px] box-border caret-transparent leading-[18.0875px] outline-[3px] w-full md:text-[15px] md:leading-[22.5px]"
                                >
                                  <p
                                    className="text-[12.0583px] box-border caret-transparent leading-[18.0875px] outline-[3px] md:text-[15px] md:leading-[22.5px]"
                                  >
                                    In stock
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] min-w-5 outline-[3px] w-5"
                  ></div>
                  <div
                    className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]"
                  >
                    <div
                      className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                    >
                      <div
                        className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                      >
                        <div
                          className="items-center box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]"
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
                                  src="https://c.animaapp.com/mohkicncTG3NcI/assets/17.svg"
                                  alt=""
                                  sizes="308px"
                                  title=""
                                  className="box-border caret-transparent h-[19px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[18px]"
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
                                className="text-black text-[12.0583px] box-border caret-transparent leading-[18.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full ml-2 md:text-[15px] md:leading-[22.5px]"
                              >
                                <div
                                  className="text-[12.0583px] box-border caret-transparent leading-[18.0875px] outline-[3px] w-full md:text-[15px] md:leading-[22.5px]"
                                >
                                  <p
                                    className="text-[12.0583px] box-border caret-transparent leading-[18.0875px] outline-[3px] md:text-[15px] md:leading-[22.5px]"
                                  >
                                    Expected delivery in 3 to 6 business days
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
            <div
              className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
            >
              <div
                className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mt-4"
              >
                <img
                  src="https://c.animaapp.com/mohkicncTG3NcI/assets/22.webp"
                  alt=""
                  sizes="565px"
                  title=""
                  className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] w-full"
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
                  className="items-center bg-gray-100 box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] border border-stone-300 mt-5 p-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:mt-[25px] md:p-[18px]"
                >
                  <div
                    className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[86px] min-h-[auto] min-w-[86px] outline-[3px] w-[86px]"
                  >
                    <div
                      className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                    >
                      <div
                        className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                      >
                        <img
                          src="https://c.animaapp.com/mohkicncTG3NcI/assets/23.webp"
                          alt=""
                          sizes="86px"
                          title=""
                          className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-2.5 min-h-[auto] min-w-2.5 outline-[3px] w-2.5"
                  ></div>
                  <div
                    className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                  >
                    <div
                      className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                    >
                      <div
                        className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                      >
                        <div
                          className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]"
                        >
                          <div
                            className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                          >
                            <div
                              className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                            >
                              <div
                                className="text-black text-[14.0583px] box-border caret-transparent leading-[21.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full md:text-base md:leading-6"
                              >
                                <div
                                  className="text-[14.0583px] box-border caret-transparent leading-[21.0875px] outline-[3px] w-full md:text-base md:leading-6"
                                >
                                  <p
                                    className="text-[14.0583px] box-border caret-transparent leading-[21.0875px] outline-[3px] md:text-base md:leading-6"
                                  >
                                    <strong
                                      className="text-[14.0583px] font-bold box-border caret-transparent leading-[21.0875px] outline-[3px] md:text-base md:leading-6"
                                    >
                                      Feel Younger or It&#39;s Free!
                                    </strong>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                            >
                              <div
                                className="text-black text-[14.0583px] box-border caret-transparent leading-[21.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] md:text-base md:leading-6"
                              >
                                <div
                                  className="text-[14.0583px] box-border caret-transparent leading-[21.0875px] outline-[3px] w-full md:text-base md:leading-6"
                                >
                                  <p
                                    className="text-[14.0583px] box-border caret-transparent leading-[21.0875px] outline-[3px] md:text-base md:leading-6"
                                  >
                                    If you don&#39;t notice measurable
                                    improvements in energy, recovery, mental
                                    clarity, or visible signs of aging reversal,
                                    we&#39;ll refund you within{" "}
                                    <b className="text-[14.0583px] font-bold box-border caret-transparent leading-[21.0875px] outline-[3px] md:text-base md:leading-6">
                                      90 days
                                    </b>
                                    of the product being delivered to you.
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
            <div
              className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
            >
              <div
                className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
              >
                <div
                  className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] border-zinc-900/10 mt-[25px] border-t"
                >
                  <div
                    className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                  >
                    {ACCORDION_ITEMS.map((item) => (
                      <AccordionItem
                        key={item.title}
                        title={item.title}
                        content={item.content}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
