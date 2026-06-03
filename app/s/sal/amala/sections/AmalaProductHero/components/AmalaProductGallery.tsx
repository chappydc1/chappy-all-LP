import { useState } from "react";

export type AmalaProductGalleryProps = {
  mode: string;
  containerClassName?: string;
  innerClassName?: string;
  slidesClassName?: string;
  slideClassName?: string;
  textClassName?: string;
  highlightClassName?: string;
  primaryMessage?: string;
  secondaryMessage?: string;
  secondaryHighlightText?: string;
  secondarySuffixText?: string;
  imageUrls?: string[];
  imageAlt?: string;
  firstImageClassName?: string;
  imageClassName?: string;
};

export const AmalaProductGallery = (props: AmalaProductGalleryProps) => {
  const isMessageMode = props.mode === "messages";
  const imageUrls = props.imageUrls ?? [];
  const [activeIndex, setActiveIndex] = useState(0);

  if (isMessageMode) {
    return (
      <div className={`relative box-border overflow-hidden ${props.containerClassName ?? ""}`.trim()}>
        <div className={`relative flex h-full w-full ${props.innerClassName ?? ""}`.trim()}>
          <div role="group" aria-label="1 / 2" className={`relative shrink-0 h-full w-[345px] md:w-[400px] ${props.slidesClassName ?? ""}`.trim()}>
            <div className={`text-white text-xs font-semibold tracking-[0.5px] leading-normal text-center uppercase md:text-sm ${props.textClassName ?? ""}`.trim()}>
              {props.primaryMessage ?? "90-DAY 100% MONEYBACK GUARANTEE"}
            </div>
          </div>
          <div role="group" aria-label="2 / 2" className={`relative shrink-0 h-full w-[345px] md:w-[400px] ${props.slidesClassName ?? ""}`.trim()}>
            <div className={`text-white text-xs font-semibold tracking-[0.5px] leading-normal text-center uppercase md:text-sm ${props.textClassName ?? ""}`.trim()}>
              {props.secondaryMessage ?? "Free shipping On all orders over "}
              <span className={`text-xs md:text-sm ${props.highlightClassName ?? ""}`.trim()}>
                {props.secondaryHighlightText ?? "$50"}
              </span>
              {props.secondarySuffixText ?? "+"}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (imageUrls.length === 0) return null;

  const prev = () => setActiveIndex((i) => (i - 1 + imageUrls.length) % imageUrls.length);
  const next = () => setActiveIndex((i) => (i + 1) % imageUrls.length);

  return (
    <div className={`relative overflow-hidden rounded-md ${props.containerClassName ?? ""}`.trim()}>
      {/* Main Image */}
      <div className="relative w-full aspect-square bg-gray-50">
        <img
          src={imageUrls[activeIndex]}
          alt={props.imageAlt ?? ""}
          className="w-full h-full object-cover"
        />
        {/* Prev button */}
        {imageUrls.length > 1 && (
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-black/60 transition-colors"
          >
            &#8249;
          </button>
        )}
        {/* Next button */}
        {imageUrls.length > 1 && (
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-black/60 transition-colors"
          >
            &#8250;
          </button>
        )}
      </div>
      {/* Thumbnails */}
      <div className="flex gap-2 mt-2 px-1 overflow-x-hidden flex-wrap">
        {imageUrls.map((url, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`shrink-0 w-14 h-14 rounded border-2 overflow-hidden transition-all ${index === activeIndex ? "border-gray-800 opacity-100" : "border-transparent opacity-60 hover:opacity-80"}`}
          >
            <img src={url} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};
