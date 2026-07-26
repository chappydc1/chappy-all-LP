import { GrunsHero } from "../Hero";
import { GrunsBenefitSection } from "../BenefitSection";
import { GrunsTestimonialsSection } from "../TestimonialsSection";
import { GrunsReviewsSection } from "../ReviewsSection";

export const GrunsMainContent = () => {
  return (
    <main
      role="main"
      className="box-border caret-transparent w-full max-w-screen-xl outline-[3px] overflow-x-clip mx-auto"
    >
      <GrunsHero />
      <GrunsBenefitSection
        category="Digestion"
        number="01"
        title="Better poops (seriously)"
        description="Constipation affects about 15% of the population in the U.S. If that’s you, your gut is begging for help. Grüns delivers 6g of prebiotic fiber to get things moving—naturally. No laxatives, no guesswork. Just easier, more regular, feel-good digestion, every day."
        mediaLayoutClassName="box-border caret-transparent gap-x-2 grid col-end-[image] col-start-[image] row-end-[image] row-start-[image] grid-cols-[repeat(1,minmax(0px,1fr))] h-60 min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-4 md:min-h-[440px] md:mb-0"
        primaryImageUrl="/images/gruns/118.jpg"
        primaryImageAlt="Four quadrants showing lemons, mushrooms, vegetables, and berries."
        primaryImageClassName="aspect-[auto_645_/_516] box-border caret-transparent h-60 max-w-full min-h-0 object-cover object-[50.0638%_50.0814%] outline-[3px] w-full overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr md:h-full md:min-h-[440px]"
      />
      <GrunsBenefitSection
        category="Gut Health"
        number="02"
        title="Healthy Gut Microbiome"
        description="The trillions of bacteria in your gut control way more than you think. Grüns feeds the good ones with prebiotic fiber that help your microbiome thrive. A happy gut means less bloating, better nutrient absorption, healthy blood sugar support, fewer cravings, and support for weight management."
        mediaLayoutClassName="grid-cols-[repeat(2,minmax(0px,1fr))]"
        primaryImageUrl="/images/gruns/121.png"
        primaryImageAlt=""
        primaryImageClassName="aspect-[auto_300_/_420] object-[49.121%_39.746%]"
        secondaryImageUrl="/images/gruns/135.png"
        secondaryImageAlt=""
        secondaryImageClassName="object-[49.414%_52.148%]"
      />
      <GrunsBenefitSection
        category="Energy"
        number="03"
        title="More Energy, Better Mood"
        description="Your gut plays a major role in how you feel. With B-vitamins for steady energy and adaptogens to help regulate stress, Grüns supports your second brain—so you’re not just feeling lighter, you’re feeling better overall."
        mediaLayoutClassName="grid-cols-[repeat(1,minmax(0px,1fr))]"
        primaryImageUrl="/images/gruns/5.webp"
        primaryImageAlt="Woman practicing yoga on a sandy beach at sunset"
        primaryImageClassName="aspect-[auto_645_/_645] object-[68.9072%_4.518%]"
      />
      <GrunsBenefitSection
        category="Immunity"
        number="04"
        title="Immunity Boost"
        description="About 70% of your immune system lives in your gut. A healthy gut helps you absorb nutrients properly and defend against harmful bacteria. Grüns supports that gut-immune connection with Vitamin C, D3, Zinc, and antioxidants that help your body fight back, daily."
        mediaLayoutClassName="grid-cols-[repeat(1,minmax(0px,1fr))]"
        primaryImageUrl="/images/gruns/4.webp"
        primaryImageAlt=""
        primaryImageClassName="aspect-[auto_645_/_645] object-[49.414%_66.406%]"
      />
      <GrunsBenefitSection
        category="Benefits"
        number="05"
        title="A Healthy Habit You’ll Stick To"
        description="Let’s be honest—powders are messy, and counting pills gets old fast. Grüns is the one supplement that actually sticks. You get 20+ vitamins & minerals, organic fruits and veggies, adaptogens, prebiotics, and more—all in a little pack of gummies. No prep, no mess, no excuses."
        mediaLayoutClassName="grid-cols-[repeat(1,minmax(0px,1fr))]"
        primaryImageUrl="/images/gruns/6.webp"
        primaryImageAlt="Woman with kiwi slices on eyes holding a green Grüns packet, sitting on a wicker chair with green pillows."
        primaryImageClassName="aspect-[auto_645_/_645] object-[65.6451%_49.0844%]"
      />
      <GrunsBenefitSection
        category="Loved By Millions"
        number="06"
        title="Trusted by 1M+ customers"
        description="With over 80,000 five-star reviews and a growing subscriber base, Grüns is the top choice for those looking to fill nutrient gaps in a convenient, tasty, and fun way while boosting overall health."
        mediaLayoutClassName="grid-cols-[repeat(2,minmax(0px,1fr))]"
        primaryImageUrl="/images/gruns/7.webp"
        primaryImageAlt="Woman holding a package of Grüns and kale in a kitchen"
        primaryImageClassName="aspect-[auto_300_/_420] object-[52.93%_50%]"
        secondaryImageUrl="/images/gruns/8.webp"
        secondaryImageAlt="Man holding a green packet with of Grüns in a kitchen setting"
        secondaryImageClassName="object-[52.93%_37.207%]"
      />
      <section
        id="offers"
        className="bg-white box-border caret-transparent outline-[3px] p-5 md:py-10"
      >
        <div className="box-border caret-transparent max-w-[420px] outline-[3px] mx-auto">
          <a
            href="#offers"
            className="text-white text-lg font-semibold items-center bg-green-700 box-border caret-transparent flex h-14 justify-center tracking-[-0.54px] leading-[28.8px] outline-[3px] w-full px-8 rounded-[3.35544e+07px]"
          >
            Save 52% + Free Shipping
          </a>
        </div>
      </section>
      <GrunsTestimonialsSection />
      <GrunsReviewsSection />
    </main>
  );
};
