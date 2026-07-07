import { ElavynProductIntro } from "./ElavynProductIntro";
import { ElavynIngredientsSection } from "./ElavynIngredientsSection";
import { ElavynResultsSection } from "./ElavynResultsSection";
import { ElavynPricingSection } from "./ElavynPricingSection";
import { ElavynGuaranteeSection } from "./ElavynGuaranteeSection";
import { ElavynFinalCallToAction } from "./ElavynFinalCallToAction";

export const ElavynProductOffer = () => {
  return (
    <section className="text-[15px] box-border caret-transparent contents leading-[27px] outline-[3px] scroll-smooth font-ui_sans_serif md:text-base md:leading-[28.8px]">
      <section className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-[calc(100%_+_32px)] mx-auto md:text-base md:leading-[28.8px] md:w-full">
        <div className="relative text-[15px] content-start bg-gray-100 bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full outline-[3px] gap-y-0 w-full bg-center mx-auto pb-8 md:text-base md:leading-[28.8px]">
          <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
            <div className="relative text-[15px] content-start bg-white bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full bg-center mx-auto p-4 md:text-base md:grid-cols-[minmax(0px,9fr)_minmax(0px,3fr)] md:leading-[28.8px] md:w-3/5">
              <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                <ElavynProductIntro />
                <ElavynIngredientsSection />
                <ElavynResultsSection />
                <ElavynPricingSection
                  title="The Price That's Causing Pharmaceutical Panic"
                  mediaVariant="bg-black overflow-hidden mb-2"
                  mediaWrapperClassName=""
                  mediaContent={
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                      <video
                        title="Video"
                        preload="metadata"
                        poster=""
                        loop
                        muted
                        autoPlay
                        playsInline
                        className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
                      ></video>
                    </div>
                  }
                  introClassName="text-lg leading-[23.4px]"
                  introContent={
                    <>
                      Let me show you what "managing" kidney decline actually
                      costs Black folk in America...
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        The Standard Route:
                      </strong>
                    </>
                  }
                  listItems={[
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        Monthly nephrologist visits:{" "}
                      </strong>
                      $325 x 12 = $3,900/year
                    </>,
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        Daily ACE inhibitors
                      </strong>
                      : $180/month = $2,160/year
                    </>,
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        Potassium binders:{" "}
                      </strong>
                      $65/month = $780/year
                    </>,
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        Phosphate binders:{" "}
                      </strong>
                      $55/month = $660/year
                    </>,
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        Quarterly bloodwork monitoring:
                      </strong>{" "}
                      $275 x 4 = $1,100/year
                    </>,
                  ]}
                  outroClassName="text-lg leading-[23.4px]"
                  outroContent={
                    <>
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        Annual total: $8,600. Every year. While your numbers
                        keep declining.
                      </strong>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      The medical industry loves overloading you with as many
                      options as they can.
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      You know why?
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      You're not a patient to them. You're a subscription.
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      A recurring revenue stream that never actually gets better
                      - because getting better would mean you stop paying.
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      But here's what really terrifies them…
                    </>
                  }
                  imageBlockContent={
                    <div
                      role="presentation"
                      className="relative text-[15px] box-border caret-transparent shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center my-4 md:text-base md:leading-[28.8px]"
                    >
                      <div className="text-[15px] box-border caret-transparent flex h-full justify-center leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]">
                        <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                          <img
                            src="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773243378308_6.webp"
                            alt=""
                            className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full md:text-base md:leading-[28.8px]"
                          />
                        </picture>
                      </div>
                    </div>
                  }
                  secondaryContent={
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        Elavyn Flow+ should cost $149.
                      </strong>
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      That's what it would run you to source all six ingredients
                      individually...
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      Tracking down pharmaceutical-grade herbs from separate
                      suppliers...
                      {" "}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      In the exact concentrations and ratios that actually work.
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      But I didn't create this to keep it in my kitchen.
                    </>
                  }
                  highlightedContent={
                    <strong className="text-lg font-bold box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:text-xl md:leading-7">
                      I created Flow+ because I watched my wife sitting on the
                      edge of our bed crying over a piece of paper.
                    </strong>
                  }
                  closingContent={
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        So here's the deal:
                      </strong>
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      So the regular retail price of Flow+ is{" "}
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        $99.
                      </strong>
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      Already less than a single nephrology appointment.
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      Already less than one month of the medications that were
                      never going to fix anything anyway.
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        But that's not what you'll pay today.
                      </strong>
                    </>
                  }
                />
                <ElavynPricingSection
                  title={
                    'The 60% Off "In Your Face" To The Medical Establishment'
                  }
                  mediaVariant="shrink-0 max-w-full text-center mb-4"
                  mediaWrapperClassName=""
                  mediaContent={
                    <a
                      href="https://tryelavyn.com/pages/flow"
                      title=""
                      className="text-[15px] box-border caret-transparent flex h-full justify-center leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
                    >
                      <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <img
                          src="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/hf_20260313_104632_83b8bf74-594b-41e1-80b0-9d7e6222848e.jpg"
                          alt=""
                          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full md:text-base md:leading-[28.8px]"
                        />
                      </picture>
                    </a>
                  }
                  introClassName="text-[17px] leading-[22.1px] md:text-lg md:leading-[25.2px]"
                  introContent={
                    <>
                      Remember those cease and desist letters I mentioned?
                      <br />
                      <br />
                      Two weeks ago I found out a major pharmaceutical network
                      is now pressuring our fulfillment partners to drop us.
                      <br />
                      <br />
                      They can't discredit the results. We have 13,900 people
                      and counting.
                      <br />
                      <br />
                      They can't replicate the formula. The sourcing
                      relationships took years to build.
                      <br />
                      <br />
                      So now they're doing what powerful industries always do
                      when they can't compete on merit.
                      <br />
                      <br />
                      They're trying to make it expensive to keep going.
                      <br />
                      <br />
                      So my response is simple.
                      <br />
                      <br />
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        For the next 72 hours only, I'm releasing bottles at 60%
                        OFF.
                      </strong>
                      <br />
                      <br />
                      That's right.
                      <br />
                      <br />
                      <s className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] line-through md:text-lg md:leading-[25.2px]">
                        <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                          $99.99
                        </strong>
                      </s>
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        {" → Just $39.99"}
                      </strong>
                      <br />
                      <br />
                      You can get the same formula that's helped 13,900+ black
                      folk with declining kidney function for:
                    </>
                  }
                  listItems={[
                    "Less than ONE nephrology copay",
                    "Less than ONE week of most kidney medications",
                    "Less than ONE comprehensive metabolic panel",
                    "Less than dinner for two at Olive Garden",
                  ]}
                  outroClassName="text-[17px] leading-[22.1px] md:text-lg md:leading-[25.2px]"
                  outroContent={
                    <>
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        Why would I practically give these away?
                      </strong>
                      <br />
                      <br />
                      Because every person who gets better is living proof that
                      the system is broken.
                      <br />
                      <br />
                      Because I want 50,000 success stories flooding kidney
                      disease support groups and Facebook before Big Pharma can
                      silence us.
                      <br />
                      <br />
                      Because sometimes the best revenge against a $73 billion
                      industry is helping people actually get better.
                    </>
                  }
                />
                <ElavynPricingSection
                  title="⚠️ But Here's The Brutal Reality"
                  mediaVariant="max-w-full shrink-0 text-center mb-4"
                  mediaWrapperClassName=""
                  mediaContent={
                    <div
                      role="presentation"
                      className="text-[15px] box-border caret-transparent flex h-full justify-center leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
                    >
                      <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <img
                          src="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1752158983611_httpsassets.checkoutchamp.comFunnelassetsimages0c550aa8_bfd8_436e_b88c_baf46dcfb762afe720dc_08f0_4a93_aabf_3687735392cb1698069323_1688312587252_1_1_.pngversionId_ubVohYQ.webp"
                          alt=""
                          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full md:text-base md:leading-[28.8px]"
                        />
                      </picture>
                    </div>
                  }
                  introClassName="text-lg leading-[23.4px]"
                  introContent={
                    <>
                      This discount expires in exactly 72 hours.
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      Not a marketing gimmick.
                      {"\u00A0"}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      My lawyers charge $650/hour, and this fight with our
                      distribution partners isn't going to be cheap.
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        After 72 hours, we return to $99 per bottle.
                      </strong>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      Also - and this is critical - we only have 1,900 bottles
                      remaining at this price.
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      Our facility can only produce 380 units per week while
                      maintaining the ingredient concentrations that make Flow+
                      actually work.
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      The ONLY place to get authentic Flow+ with all six active
                      ingredients at full concentration is through our official
                      website.
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        If you're reading this, bottles are still available...
                      </strong>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      But I'm watching our inventory right now, and we're
                      averaging 54 orders per hour today.
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      Do the math.
                    </>
                  }
                />
                <ElavynGuaranteeSection />
                <ElavynFinalCallToAction
                  title="The Decision That Will Define Your Next Decade"
                  heroImageSrc="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/22.png"
                  introContent={
                    <>
                      Right now, you're standing at a fork in the road.
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        Path #1: Keep Doing What You're Doing
                      </strong>
                    </>
                  }
                  bulletItems={[
                    "Keep spending $400-800/month on medications that manage numbers but never touch the root cause.",
                    "Keep waking up every morning with fatigue that hits before you've finished your first cup of coffee.",
                    "Keep missing family events because your energy ran out by noon.",
                    "Keep eating flavorless meals that restrict everything you love — and watching your numbers decline anyway.",
                    "Keep making your nephrologist's car payments.",
                  ]}
                  closingContent={
                    <>
                      In 10 years you'll be sitting in a dialysis chair three
                      mornings a week...
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      Reading another article about another temporary
                      solution...
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      While the zombie cells in your kidney's lymphatic vessels
                      builds up another layer and another specialist tells you
                      this is just how it goes.
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      Or...
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        Path #2: Try Something That Actually Works
                      </strong>
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      Spend less than a dinner out.
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      Take a formula that's helped 13,900+ people stop the
                      decline and start reversing it.
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      Go after the ROOT CAUSE — the zombie cells that have been
                      blocking your kidney's lymphatic vessels and letting waste
                      back up day after day.
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        Wake up tomorrow ready to actually live instead of ready
                        to count your potassium and wait for your next set of
                        labs to confirm what you already dread.
                      </strong>
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      Join the movement that's terrifying a $73 billion
                      industry.
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      I think you already know which path leads to your
                      granddaughter's next birthday party.
                    </>
                  }
                />
                <ElavynFinalCallToAction
                  title="Here's Exactly What Happens Next"
                  heroImageSrc="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/hf_20260324_151906_73579d00-b30d-4628-aa51-bb67d69aa365.jpg"
                  introContent={
                    <>
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        Step 1:{" "}
                      </strong>
                      Click the button below that says{" "}
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        "CHECK AVAILABILITY"
                      </strong>
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        Step 2:{" "}
                      </strong>
                      Choose your package (Flash Sale — ends today):
                    </>
                  }
                  bulletItems={[
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        1 MONTH SUPPLY — $39{" "}
                      </strong>
                      <span className="bg-yellow-400/80 box-border caret-transparent max-w-full outline-[3px]">
                        <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                          (60% off)
                        </strong>
                      </span>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        .
                      </strong>
                      Enough to feel the difference within your first two weeks.
                    </>,
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        2 MONTH SUPPLY{" "}
                      </strong>
                      <span className="bg-yellow-400/80 box-border caret-transparent max-w-full outline-[3px]">
                        <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                          (MOST POPULAR)
                        </strong>
                      </span>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]"></strong>
                      — $62 (free shipping included). Two bottles, $31 each.
                    </>,
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        3 MONTH SUPPLY{" "}
                      </strong>
                      <span className="bg-yellow-400/80 box-border caret-transparent max-w-full outline-[3px]">
                        <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                          (BEST VALUE)
                        </strong>
                      </span>
                      <span className="bg-white/80 box-border caret-transparent max-w-full outline-[3px]"></span>
                      — $83.99 (free shipping included). Three bottles, $27
                      each. The best value we offer, and enough to guarantee
                      results.
                    </>,
                  ]}
                  closingContent={
                    <>
                      <span className="text-base box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        <i className="italic box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                          <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                            NOTE
                          </strong>
                          — Best Price Available. If you want to make sure you
                          never run out, never lose your progress, and never pay
                          full price, set up automatic refills. You instantly
                          get 20% off and we prioritize your order above
                          everything else when inventory runs low. When we get
                          another wave of orders and we sell out in 18 hours,
                          refill customers are already taken care of. You can
                          pause or cancel anytime, no questions asked.
                        </i>
                      </span>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        Step 3:
                      </strong>
                      Enter shipping info (we ship same-day if ordered before 3
                      PM EST)
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        Step 4:{" "}
                      </strong>
                      Wait 5-7 business days for delivery (most orders arrive in
                      4-5 days)
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        Step 5:{" "}
                      </strong>
                      Take 1/4 of a teaspoon as soon as you get your hands on
                      it. Don't wait.
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {"\u00A0"}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        Step 6:
                      </strong>
                      Email me your success story at dr.carter@tryelavyn.com
                      (yes, I read every one, the stories keep me going when the
                      lawyers get aggressive)
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {"\u00A0"}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      But whatever you do,{" "}
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        don't close this page thinking "maybe later."
                      </strong>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {"\u00A0"}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        There is no later when your kidneys are declining.
                      </strong>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      "Later" is another set of labs moving in the wrong
                      direction while you wait for something to change.
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      "Later" is another specialist visit that ends with "let's
                      just keep monitoring it."
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      "Later" is this discount expiring and stock selling out
                      while you "think about it" — and your eGFR drops another
                      point.
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        Your kidneys have been fighting without the right
                        support long enough.
                      </strong>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        Your family has watched you shrink from the person they
                        know long enough.
                      </strong>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        The solution is one click away.
                      </strong>
                    </>
                  }
                  showOfferSections={true}
                />
              </div>
              <div className="relative text-[15px] box-border caret-transparent hidden flex-col justify-start leading-[27px] max-w-full min-h-0 min-w-0 outline-[3px] md:text-base md:flex md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto]"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
