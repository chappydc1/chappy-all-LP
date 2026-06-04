import { useState } from "react";
import { BenefitList } from "../ProductHero/components/BenefitList";
import { ShippingNotice } from "../ProductHero/components/ShippingNotice";
import { AddToCart } from "../ProductHero/components/AddToCart";

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

export const ProductHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + IMAGE_URLS.length) % IMAGE_URLS.length);
  const next = () => setActiveIndex((i) => (i + 1) % IMAGE_URLS.length);

  return (
    <section className="items-center bg-no-repeat box-border caret-transparent flex flex-col justify-items-center w-full bg-center pt-0 pb-[45px] px-[15px] md:pt-[30px] md:pb-[60px]">
      <div className="text-zinc-800 flex flex-col max-w-[1170px] w-full md:flex-row md:gap-10">

        {/* ── LEFT: Product Gallery ── */}
        <div className="w-full md:w-[50%] md:shrink-0 md:sticky md:top-4 md:self-start">
          {/* Main image */}
          <div className="relative w-full aspect-square bg-gray-50 rounded-md overflow-hidden">
            <img
              src={IMAGE_URLS[activeIndex]}
              alt="PrimeCell H2"
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
          {/* Thumbnails */}
          <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
            {IMAGE_URLS.map((url, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`shrink-0 w-14 h-14 rounded border-2 overflow-hidden transition-all ${index === activeIndex ? "border-gray-800 opacity-100" : "border-gray-200 opacity-60 hover:opacity-80"}`}
              >
                <img src={url} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Product Info ── */}
        <div className="w-full md:flex-1 mt-5 md:mt-0 text-left">
          {/* Rating */}
          <p
            className="text-[13.0583px] leading-[15.67px] text-black md:text-base md:leading-[19.2px]
              before:bg-[url('/images/amala/1733321557-4_5_star-2x-1-.png.webp')]
              before:bg-no-repeat before:bg-contain before:inline-block before:h-[19px] before:w-[75px]
              before:align-middle before:mr-2.5 md:before:w-[85px] md:before:mr-3"
          >
            <strong className="font-bold">4.9/5 based on 45,000+</strong> reviews
          </p>

          {/* Headline */}
          <h1 className="text-[25.0583px] font-bold leading-[30.07px] text-black mt-[15px] md:text-[35px] md:leading-[42px]">
            Exhausted All Day, Aging Faster Than You Should? PrimeCell H2 Protects Your Cells From The Inside Out.
          </h1>

          <div className="border-t border-neutral-200 mt-5"></div>

          {/* Description */}
          <div className="text-black text-[16.0583px] leading-[24.0875px] mt-5 md:text-base md:leading-6">
            <p>
              <b>PrimeCell H2{" "}
                <span className="font-normal">
                  is a next-generation molecular hydrogen tablet designed to selectively neutralize the most damaging free radicals in your body - at the cellular level, right where aging actually happens.
                </span>
              </b>
            </p>
            <p className="mt-4">
              Just one tablet dissolved in water daily helps restore cellular balance from within - naturally supporting energy production, oxidative defense, and biological age reversal.
            </p>
          </div>

          <BenefitList />

          <div className="border-t border-neutral-200 mt-5"></div>

          <ShippingNotice />
          <AddToCart />
        </div>
      </div>
    </section>
  );
};
