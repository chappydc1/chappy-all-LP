import { useState } from "react";

import { AmalaBenefitList } from "../AmalaProductHero/components/AmalaBenefitList";
import { AmalaShippingNotice } from "../AmalaProductHero/components/AmalaShippingNotice";
import { AmalaAddToCart } from "../AmalaProductHero/components/AmalaAddToCart";
import type { AmalaProductHeroContent } from "../AmalaProductHero/types";

const IMAGE_URLS = [
  "/images/amala/42.jpg",
  "/images/amala/43.jpg",
  "/images/amala/51.jpg",
  "/images/amala/52.jpg",
  "/images/amala/53.jpg",
  "/images/amala/45.jpg",
  "/images/amala/54.jpg",
  "/images/amala/48.jpg",
];

type AmalaProductHeroProps = {
  content: AmalaProductHeroContent;
};

export const AmalaProductHero = ({ content }: AmalaProductHeroProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + IMAGE_URLS.length) % IMAGE_URLS.length);
  const next = () => setActiveIndex((i) => (i + 1) % IMAGE_URLS.length);

  return (
    <section className="items-center bg-no-repeat box-border caret-transparent flex flex-col justify-items-center w-full bg-center pt-0 pb-[45px] px-[15px] md:pt-[30px] md:pb-[60px]">
      <div className="text-zinc-800 flex flex-col max-w-[1170px] w-full md:flex-row md:gap-10">
        <div className="w-full md:w-[50%] md:shrink-0 md:sticky md:top-4 md:self-start">
          <div className="relative w-full aspect-square bg-gray-50 rounded-md overflow-hidden">
            <img
              src={IMAGE_URLS[activeIndex]}
              alt={content.imageAlt}
              className="w-full h-full object-cover"
            />
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-black/60 transition-colors text-2xl leading-none"
            >
              &#8249;
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-black/60 transition-colors text-2xl leading-none"
            >
              &#8250;
            </button>
          </div>
          <div className="flex gap-2 mt-2 overflow-x-hidden flex-wrap">
            {IMAGE_URLS.map((url, index) => (
              <button
                key={url}
                onClick={() => setActiveIndex(index)}
                className={`shrink-0 w-14 h-14 rounded border-2 overflow-hidden transition-all ${index === activeIndex ? "border-gray-800 opacity-100" : "border-gray-200 opacity-60 hover:opacity-80"}`}
              >
                <img src={url} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:flex-1 mt-5 md:mt-0 text-left">
          <p
            className="text-[13.0583px] leading-[15.67px] text-black md:text-base md:leading-[19.2px]
              before:bg-[url('/images/amala/1733321557-4_5_star-2x-1-.png.webp')]
              before:bg-no-repeat before:bg-contain before:inline-block before:h-[19px] before:w-[75px]
              before:align-middle before:mr-2.5 md:before:w-[85px] md:before:mr-3"
          >
            <strong className="font-bold">{content.ratingText}</strong>
          </p>

          <h1 className="text-[25.0583px] font-bold leading-[30.07px] text-black mt-[15px] md:text-[35px] md:leading-[42px]">
            {content.headline}
          </h1>

          <div className="border-t border-neutral-200 mt-5"></div>

          <div className="text-black text-[16.0583px] leading-[24.0875px] mt-5 md:text-base md:leading-6 space-y-4">
            {content.descriptionParagraphs.map((paragraph, index) => (
              <p key={`hero-description-${index}`} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>

          <AmalaBenefitList benefits={content.benefits} />

          <div className="border-t border-neutral-200 mt-5"></div>

          <AmalaShippingNotice />
          <AmalaAddToCart content={content} />
        </div>
      </div>
    </section>
  );
};
