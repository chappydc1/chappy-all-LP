import { useState } from "react";

import { OFFER_SECTION_HREF } from "../../../config/links";
import type {
  AmalaProductHeroAccordionItem,
  AmalaProductHeroBenefit,
  AmalaProductHeroContent,
} from "../../AmalaProductHero/types";

type AmalaAccordionItemProps = AmalaProductHeroAccordionItem;

function AmalaAccordionItem({ title, paragraphs }: AmalaAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-zinc-900/10 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black text-base font-bold box-border caret-transparent flex basis-[0%] justify-between leading-6 min-h-2.5 min-w-[auto] outline-[3px] text-left w-full py-[17px] rounded-[5px] md:text-[17px] md:leading-[25.5px] cursor-pointer"
      >
        <div className="text-base box-border caret-transparent flex basis-[0%] flex-col grow leading-6 max-w-[calc(100%_-_30px)] min-h-[auto] min-w-[auto] outline-[3px] w-fit md:text-[17px] md:leading-[25.5px]">
          {title}
        </div>
        <img
          src="/images/amala/icon-1.svg"
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
              <div className="box-border caret-transparent outline-[3px] w-full space-y-4">
                {paragraphs.map((paragraph, index) => (
                  <p key={`${title}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AmalaBenefitRows({ benefits }: { benefits: AmalaProductHeroBenefit[] }) {
  return (
    <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full gap-2.5 mt-3">
      {benefits.map((benefit) => (
        <div
          key={benefit.text}
          className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]"
        >
          <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[35px] min-h-[auto] min-w-[35px] outline-[3px] w-[35px]">
            <img
              src={
                benefit.iconSrc ||
                "/images/amala/1763702956506_1730181221_checkIcon.svg"
              }
              alt={benefit.iconAlt || ""}
              sizes="565px"
              title=""
              className="box-border caret-transparent h-[22px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[22px]"
            />
          </div>
          <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]">
            <p className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] text-left md:text-base md:leading-6">
              {benefit.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

type AmalaAddToCartProps = {
  content: Pick<
    AmalaProductHeroContent,
    "addToCartBenefits" | "accordionItems" | "ctaText" | "guarantee"
  >;
};

export const AmalaAddToCart = ({ content }: AmalaAddToCartProps) => {
  return (
    <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
      <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
        <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-5 md:mt-[25px]">
          <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]">
            <a
              href={OFFER_SECTION_HREF}
              title={content.ctaText}
              className="relative cursor-pointer text-white text-lg font-bold self-center bg-gray-800 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent flex flex-col tracking-[0.36px] leading-[27.54px] max-w-full min-h-[auto] min-w-[auto] text-center align-middle w-full px-2.5 py-3 rounded-[30px]"
            >
              {content.ctaText}
            </a>

            <AmalaBenefitRows benefits={content.addToCartBenefits} />

            <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-[25px] gap-3">
              {content.guarantee.imageSrc && (
                <img
                  src={content.guarantee.imageSrc}
                  alt={content.guarantee.imageAlt || ""}
                  sizes="86px"
                  title=""
                  className="box-border caret-transparent h-[86px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-[86px]"
                />
              )}
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px] text-left">
                <p className="text-black text-[14.0583px] box-border caret-transparent leading-[21.0875px] outline-[3px] md:text-base md:leading-6">
                  <strong className="font-bold">{content.guarantee.title}</strong>
                </p>
                <p className="text-black text-[14.0583px] box-border caret-transparent leading-[21.0875px] outline-[3px] mt-[5px] md:text-base md:leading-6">
                  {content.guarantee.description}
                </p>
              </div>
            </div>

            <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] border-zinc-900/10 mt-[25px] border-t">
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]">
                {content.accordionItems.map((item) => (
                  <AmalaAccordionItem key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
