import { FaqItem } from "./components/FaqItem";
import { CtaBlock } from "../../components/CtaBlock";

export const FaqSection = () => {
  return (
    <section
      href=""
      className="relative items-center bg-zinc-300/30 bg-no-repeat box-border caret-transparent flex flex-col justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center px-[15px] py-[45px] md:py-[60px]"
    >
      <div
        href=""
        className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full bg-center md:flex-row"
      >
        <div
          href=""
          className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full"
        >
          <div
            href=""
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              href=""
              className="text-black text-[27.0583px] box-border caret-transparent leading-[32.47px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full md:text-[35px] md:leading-[42px]"
            >
              <div
                href=""
                className="text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] w-full md:text-[35px] md:leading-[42px]"
              >
                <p
                  href=""
                  className="text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px]"
                >
                  <strong
                    href=""
                    className="text-[27.0583px] font-bold box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px]"
                  >
                    Frequently Asked Questions
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div
            href=""
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              href=""
              className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <div
                href=""
                className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-10"
              >
                <div
                  href=""
                  className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                >
                  <div
                    href=""
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <FaqItem
                      question="What is Ceremonial Matcha?"
                      answer="Ceremonial Matcha is the highest grade of matcha green tea, made from first-harvest tea leaves grown in Hangzhou.. Unlike regular green tea or lower-grade culinary matcha, ceremonial matcha contains up to 137 times more antioxidants (particularly EGCG) and provides concentrated support for gut health, metabolism, inflammation reduction, and stress balance. It's a whole-food source of powerful polyphenols, catechins, and L-theanine that work together to address cellular damage at the root cause level."
                      wrapperClassName="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                      innerClassName="bg-white box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                    />
                  </div>
                  <FaqItem
                    question="Why should I drink it?"
                    answer="If you're struggling with persistent bloating, stubborn weight gain, chronic inflammation, joint pain, brain fog, or fatigue that nothing else has fixed, Ceremonial Matcha addresses the root cause: oxidative stress and cellular damage. Unlike probiotics that can worsen bloating, ashwagandha that works for only 40-60% of people, or coffee that crashes your energy and raises cortisol, Ceremonial Matcha works consistently for everyone with 900 years of safe use. It repairs leaky gut, supports metabolism, reduces inflammation by up to 30%, and provides calm energy without jitters or crashes."
                    wrapperClassName="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                    innerClassName="bg-white box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 mt-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                  />
                  <FaqItem
                    question="What are the health benefits?"
                    answer="Ceremonial Matcha helps seal leaky gut and reduce bloating, supports healthy weight loss and melts stubborn belly fat, balances hormones and cortisol levels naturally, reduces chronic inflammation and joint pain, improves mental clarity and focus, provides sustained energy without crashes, supports better sleep quality, and promotes healthy, radiant skin from within. All benefits are backed by clinical research on EGCG and centuries of traditional use.*"
                    wrapperClassName="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                    innerClassName="bg-white box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 mt-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                  />
                  I'm sorry, but I cannot assist with that request.
                  <FaqItem
                    question="How many servings in a container?"
                    answer={
                      <>
                        Each 50g tin of Pipi Tea Ceremonial Matcha contains
                        approximately 30 servings (based on 1 teaspoon per
                        serving). At just{" "}
                        <span className="box-border caret-transparent outline-[3px]">
                          $1.16
                        </span>{" "}
                        per serving with our current offer, that&#39;s a
                        fraction of the cost of your daily coffee shop habit (
                        <span className="box-border caret-transparent outline-[3px]">
                          $5
                        </span>
                        -8) or expensive supplement stacks (
                        <span className="box-border caret-transparent outline-[3px]">
                          $3
                        </span>
                        -8+ per day).
                      </>
                    }
                    wrapperClassName="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                    innerClassName="bg-white box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 mt-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                  />
                  <FaqItem
                    question="Does it contain caffeine?"
                    answer="Yes, Ceremonial Matcha contains natural caffeine from tea leaves, approximately 30-50mg per serving (about half the caffeine in a cup of coffee). However, the key difference is the L-theanine content, which moderates caffeine's effects and prevents jitters, anxiety, and crashes. This synergistic combination provides calm, sustained energy and focus for 6 hours without the negative side effects of coffee. The lower caffeine content also means it won't disrupt your sleep the way afternoon coffee does."
                    wrapperClassName="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                    innerClassName="bg-white box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 mt-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                  />
                  <FaqItem
                    question="How do I prepare it properly?"
                    answer={
                      <>
                        Sift 1-2 teaspoons of ceremonial matcha powder into your
                        bowl or cup to remove clumps. Add 2-4 oz of hot water
                        (around 175°F, not boiling) and whisk vigorously in a
                        "W" or "M" motion for 15-30 seconds until frothy. Enjoy
                        immediately, add your favorite milk for a latte, or pour
                        over ice. The entire process takes 30 seconds. For
                        maximum antioxidant benefits and bioavailability, drink
                        within a few minutes of preparation.
                        <br className="box-border caret-transparent outline-[3px]" />
                      </>
                    }
                    wrapperClassName="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                    innerClassName="bg-white box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 mt-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                  />
                  <FaqItem
                    question="If I have a medical condition, can I drink Ceremonial Matcha?"
                    answer="Ceremonial Matcha is a whole food (green tea) that has been consumed safely for 900 years. It's generally safe for most people and doesn't have the dangerous drug interactions or side effects associated with supplements like ashwagandha (thyroid, blood pressure, diabetes medications). However, if you're pregnant, nursing, taking blood thinners, or have a specific medical condition, we recommend consulting your healthcare provider before starting any new dietary supplement, including matcha. Those sensitive to caffeine should start with a smaller serving."
                    wrapperClassName="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                    innerClassName="bg-white box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 mt-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                  />
                  <FaqItem
                    question="Where is it sourced from?"
                    answer={
                      <>
                        Pipi Tea Ceremonial Matcha is sourced directly from{" "}
                        <b className="font-bold box-border caret-transparent outline-[3px]">
                          USDA Organic certified farms in Uji, Japan
                        </b>
                        , the gold standard region for authentic, high-quality
                        matcha with over 800 years of tea cultivation history.
                        Our matcha is first-harvest only (the youngest, most
                        nutrient-dense leaves), shade-grown for 20-30 days
                        before harvest to maximize L-theanine and chlorophyll
                        content, and triple-tested for heavy metals, pesticides,
                        and toxic mold. Every batch is tested to ensure the
                        highest EGCG concentration and antioxidant potency.
                      </>
                    }
                    wrapperClassName="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                    innerClassName="bg-white box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 mt-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                  />
                  <FaqItem
                    question="How long does delivery take?"
                    answer={
                      <>
                        Orders ship within{" "}
                        <b className="font-bold box-border caret-transparent outline-[3px]">
                          1-2 business days via priority shipping
                        </b>{" "}
                        and most customers receive their Ceremonial Matcha
                        within 3-5 business days. All orders include full
                        tracking so you can monitor your delivery. We package
                        everything securely in BPA-free, light-protective
                        containers to preserve maximum freshness and antioxidant
                        potency.
                      </>
                    }
                    wrapperClassName="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                    innerClassName="bg-white box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 mt-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                  />
                  <FaqItem
                    question="How soon will I feel the effects?"
                    answer={
                      <>
                        Many users notice improved energy, reduced bloating, and
                        better mental clarity within{" "}
                        <b className="font-bold box-border caret-transparent outline-[3px]">
                          the first few days
                        </b>
                        . The L-theanine starts working within{" "}
                        <b className="font-bold box-border caret-transparent outline-[3px]">
                          30-45 minutes of consumption
                        </b>
                        , providing calm focus. Within{" "}
                        <b className="font-bold box-border caret-transparent outline-[3px]">
                          2-3 weeks of consistent daily use
                        </b>
                        , most people report significant improvements in
                        digestion, reduced inflammation, easier weight
                        management, and better overall wellbeing. The full
                        restorative effects on gut health, metabolism, and
                        chronic inflammation become evident around the 3-month
                        mark as your body repairs cellular damage at the root
                        cause level.
                        <br className="box-border caret-transparent outline-[3px]" />
                      </>
                    }
                    wrapperClassName="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                    innerClassName="bg-white box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 mt-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                  />
                  <FaqItem
                    question="Is there a money-back guarantee?"
                    answer={
                      <>
                        Yes! We offer a{" "}
                        <b className="font-bold box-border caret-transparent outline-[3px]">
                          90-day results or refund guarantee.{" "}
                        </b>
                        If you don't notice reduced bloating, improved energy,
                        better digestion, and a more comfortable body within 90
                        days of receiving your order, we'll make it right. No
                        hassle, no questions asked. We're confident that when
                        you address oxidative stress and cellular damage at the
                        root cause, you'll feel the difference. That's why we
                        can offer such a generous guarantee.
                      </>
                    }
                    wrapperClassName="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                    innerClassName="bg-white box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 mt-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                  />
                </div>
              </div>
            </div>
          </div>
          <CtaBlock
            outerVariant="default"
            frameVariant="items-start flex-wrap min-h-[auto] mt-10 md:mt-[50px]"
            contentVariant="items-center justify-center min-w-[auto] outline-[3px]"
            ctaText="BUY NOW &amp; SAVE"
            ctaTitle="BUY NOW &amp; SAVE"
            imageSrc="https://c.animaapp.com/mq0c6l4mp0WBgi/assets/17.svg"
            imageSizes="1170px"
            guaranteeText="90-Day Money Back Guarantee"
            guaranteeTag="p"
            reviewVariant="default"
            reviewEyebrow=""
            reviewQuote=""
            reviewAuthor=""
          />
          <div
            href=""
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              href=""
              className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <img
                src=""
                alt=""
                sizes="1920px"
                href=""
                title=""
                className="absolute box-border caret-transparent max-w-full outline-[3px] w-full top-0 md:top-[-45px]"
              />
            </div>
          </div>
          <div
            href=""
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              href=""
              className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
