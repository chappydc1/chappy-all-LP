import { DiabetesFaqItem } from "./DiabetesFaqItem";

export const DiabetesFaqSection = () => {
  return (
    <section className="text-white bg-[linear-gradient(45deg,rgb(179,170,129),rgb(189,153,41))] box-border caret-transparent outline-[3px] py-12">
      <div className="box-border caret-transparent max-w-[1000px] outline-[3px] w-full mx-auto px-3">
        <h2 className="text-[24.575px] font-medium box-border caret-transparent leading-[29.49px] outline-[3px] mb-6 md:text-[32px] md:leading-[38.4px]">
          Frequently Asked Questions
        </h2>
        <div className="relative box-border caret-transparent outline-[3px] z-[2]">
          <DiabetesFaqItem
            question="Is Glycocept safe to use?"
            answer="Absolutely. Glycocept is made with 100% natural, plant-based ingredients, blended in clinically precise doses. It’s manufactured in a U.S.–based, FDA-verified lab that follows strict safety and quality regulations. Still, if you have any medical conditions or are taking medications, it’s always a good idea to consult your healthcare provider before starting."
            answerContainerClassName="box-border caret-transparent hidden outline-[3px]"
          />
          <DiabetesFaqItem
            question="How long will it take to see results?"
            answer="Some users notice improvements in energy, fewer sugar spikes, and reduced burning feet within the first few days. Noticeable improvements in blood sugar control often begin within the first week, and many people report significant progress within the first 10 days. For long-lasting results and full blood sugar stabilization, the full 6-month treatment is strongly recommended."
            answerContainerClassName="box-border caret-transparent hidden outline-[3px]"
          />
          <DiabetesFaqItem
            question="Is Glycocept sold on Amazon?"
            answer="No. Glycocept is only sold on this page, through the official website. Buying elsewhere may expose you to counterfeit or expired products. Always purchase directly here to ensure authenticity and guarantee coverage."
            answerContainerClassName="box-border caret-transparent hidden outline-[3px]"
          />
          <DiabetesFaqItem
            question="Will I need to follow strict diets or complicated routines?"
            answer="Not at all. Glycocept was designed for people who want to reverse type 2 diabetes naturally without complicated routines. The formula works even if you continue with your normal lifestyle. Of course, healthy habits may enhance your results, but they’re not required."
            answerContainerClassName="box-border caret-transparent hidden outline-[3px]"
          />
          <DiabetesFaqItem
            question="What if I’m older or have a slow metabolism?"
            answer="That’s totally fine. Glycocept works for men and women of all ages, including those over 60, 70, or even 80. Many older users report stabilized blood sugar, improved energy, and reduced diabetic discomfort — even after years of struggling. The formula is gentle yet powerful, regardless of age or stage."
            answerContainerClassName="box-border caret-transparent hidden outline-[3px]"
          />
          <DiabetesFaqItem
            question="Can I use Glycocept with other supplements?"
            answer="In general, yes. But since Glycocept already contains a complete, clinically tested blend for blood sugar and pancreatic support, we recommend checking with your doctor if you’re taking similar products — to avoid overlap or excessive intake."
            answerContainerClassName="box-border caret-transparent hidden outline-[3px]"
          />
          <DiabetesFaqItem
            question="How many bottles should I order?"
            answer="To unlock permanent results, we recommend the 6-bottle package. That’s the ideal duration to allow your body to eliminate the sticky pancreatic sludge, restore the GLP-1 pathway, and stabilize blood sugar long-term — maintaining the results even after you stop taking it. Plus, you’ll get exclusive bonuses and free shipping when you order today."
            answerContainerClassName="box-border caret-transparent hidden outline-[3px]"
          />
          <DiabetesFaqItem
            question="Will my results last once I stop taking Glycocept?"
            answer="Yes — as long as you complete the full 6-month treatment. Glycocept is formulated to help you maintain your results and protect your body from future blood sugar complications."
            answerContainerClassName="box-border caret-transparent hidden outline-[3px]"
          />
          <DiabetesFaqItem
            question="What if Glycocept doesn’t work for me?"
            answer="We’re so confident in Glycocept that we offer a 60-day money-back guarantee. If you're not completely satisfied — even after finishing the full treatment — just send us an email and we’ll refund every penny. And yes, you keep the bottles as a thank-you for giving it a try."
            answerContainerClassName="box-border caret-transparent hidden outline-[3px]"
          />
          <DiabetesFaqItem
            question="How fast will I receive my order?"
            answer="Most Glycocept orders are processed within 1–2 business days. Shipping usually takes 3–5 days within the U.S. Orders that include the 6-bottle package receive priority fulfillment for faster delivery."
            answerContainerClassName="box-border caret-transparent hidden outline-[3px]"
          />
          <DiabetesFaqItem
            question="What’s the best way to take Glycocept?"
            answer={`Each morning, simply take 1 capsule of Glycocept with a glass of water
before breakfast for optimal absorption and maximum blood
sugar–balancing and GLP-1–supporting effect. That’s it — no mixing, no
prepping, no hassle. Just stay consistent and let the formula do the
work for you.`}
            answerContainerClassName="box-border caret-transparent hidden outline-[3px] rounded-b-md"
          />
        </div>
      </div>
    </section>
  );
};
