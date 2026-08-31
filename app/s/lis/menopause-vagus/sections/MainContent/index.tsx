import { MenoHero } from "../Hero";
import { MenoBenefitSection } from "../BenefitSection";
import { MenoTestimonialsSection } from "../TestimonialsSection";
import { MenoReviewsSection } from "../ReviewsSection";
import copy from "../../copy.json";

// Image configs are layout-specific and stay here; text comes from copy.json
const benefitImageConfigs = [
  {
    mediaLayoutClassName:
      "box-border caret-transparent gap-x-2 grid col-end-[image] col-start-[image] row-end-[image] row-start-[image] grid-cols-[repeat(1,minmax(0px,1fr))] h-60 min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-4 md:min-h-[440px] md:mb-0",
    primaryImageUrl: "/images/gruns/118.jpg",
    primaryImageAlt: "Four quadrants showing lemons, mushrooms, vegetables, and berries.",
    primaryImageClassName:
      "aspect-[auto_645_/_516] box-border caret-transparent h-60 max-w-full min-h-0 object-cover object-[50.0638%_50.0814%] outline-[3px] w-full overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr md:h-full md:min-h-[440px]",
  },
  {
    mediaLayoutClassName: "grid-cols-[repeat(2,minmax(0px,1fr))]",
    primaryImageUrl: "/lp-images-files-videos-fonts/lis/gruns/images/showing-bottle-lora.png",
    primaryImageAlt: "Woman showing a Meno liquid drops bottle",
    primaryImageClassName: "aspect-[auto_300_/_420] object-[49.121%_39.746%]",
    secondaryImageUrl: "/images/gruns/135.png",
    secondaryImageAlt: "",
    secondaryImageClassName: "object-[49.414%_52.148%]",
  },
  {
    mediaLayoutClassName: "grid-cols-[repeat(1,minmax(0px,1fr))]",
    primaryImageUrl: "/images/gruns/5.webp",
    primaryImageAlt: "Woman practicing yoga on a sandy beach at sunset",
    primaryImageClassName: "aspect-[auto_645_/_645] object-[68.9072%_4.518%]",
  },
  {
    mediaLayoutClassName: "grid-cols-[repeat(1,minmax(0px,1fr))]",
    primaryImageUrl: "/images/gruns/4.webp",
    primaryImageAlt: "",
    primaryImageClassName: "aspect-[auto_645_/_645] object-[49.414%_66.406%]",
  },
  {
    mediaLayoutClassName: "grid-cols-[repeat(1,minmax(0px,1fr))]",
    primaryImageUrl: "/lp-images-files-videos-fonts/lis/gruns/images/girl-chair.png",
    primaryImageAlt: "Woman relaxing in a wicker chair with a kiwi eye mask, holding a Grüns package",
    primaryImageClassName: "aspect-[auto_645_/_645] object-[65.6451%_49.0844%]",
  },
  {
    mediaLayoutClassName: "grid-cols-[repeat(2,minmax(0px,1fr))]",
    primaryImageUrl: "/lp-images-files-videos-fonts/lis/gruns/images/girl1.png",
    primaryImageAlt: "Woman smiling and holding a Grüns packet with kale",
    primaryImageClassName: "aspect-[auto_300_/_420] object-[52.93%_50%]",
    secondaryImageUrl: "/lp-images-files-videos-fonts/lis/gruns/images/guy1.png",
    secondaryImageAlt: "Man smiling and holding a Grüns packet",
    secondaryImageClassName: "object-[52.93%_37.207%]",
  },
];

export const MenoMainContent = () => {
  return (
    <main
      role="main"
      className="box-border caret-transparent w-full max-w-screen-xl outline-[3px] overflow-x-clip mx-auto"
    >
      <MenoHero />
      {copy.benefits.map((benefit, i) => (
        <MenoBenefitSection
          key={benefit.number}
          category={benefit.category}
          number={benefit.number}
          title={benefit.title}
          description={benefit.description}
          {...benefitImageConfigs[i]}
        />
      ))}
      <section
        id="offers"
        className="bg-white box-border caret-transparent outline-[3px] p-5 md:py-10"
      >
        <div className="box-border caret-transparent max-w-[420px] outline-[3px] mx-auto">
          <a
            href={copy.hero.cta.href}
            className="text-white text-lg font-semibold items-center bg-green-700 box-border caret-transparent flex h-14 justify-center tracking-[-0.54px] leading-[28.8px] outline-[3px] w-full px-8 rounded-[3.35544e+07px]"
          >
            {copy.hero.cta.primary}
          </a>
        </div>
      </section>
      <MenoTestimonialsSection />
      <MenoReviewsSection />
    </main>
  );
};
