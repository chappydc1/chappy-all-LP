"use client";

import { useAdvertorialData } from "../VitalityDigestTopBar/context";
import { VitalityDigestHtmlParagraphs } from "../components/VitalityDigestHtmlParagraphs";
import { VitalityDigestCtaButton } from "../components/VitalityDigestCtaButton";
import { VitalityDigestArticleBlocks } from "./components/VitalityDigestArticleBlocks";
import { VitalityDigestCommentsSection } from "../VitalityDigestCommentsSection";

export const VitalityDigestArticleContent = (): React.ReactElement => {
  const { content, media } = useAdvertorialData();
  const { intro, article, faq, ctaUrl, ctaText } = content;

  return (
    <section className="items-center flex flex-col justify-items-center relative w-full px-2.5">
      <div className="flex flex-col max-w-[1170px] relative w-full">
        <div className="items-center flex justify-center w-full">
          <div className="flex flex-col w-full">
            <div className="shadow-[rgb(155,155,155)_0px_0px_5px_3px] flex flex-col w-full mt-2.5 rounded-[10px]">
              <div className="flex flex-col items-center w-full mt-5 mb-2.5 mx-2.5">
                <img
                  alt=""
                  src={media.introImageDesktop}
                  className="hidden md:block max-h-full w-full max-w-[814px] rounded-[5px]"
                />
                <img
                  alt=""
                  src={media.introImageMobile}
                  className="block md:hidden max-h-full w-full max-w-[369px] rounded-[5px]"
                />
              </div>

              <div className="bg-yellow-100 text-zinc-800 text-base leading-6 w-full mx-2.5 p-2.5 md:text-xl md:leading-[30px]">
                <p className="italic font-bold m-0">{intro.quote}</p>
              </div>

              <VitalityDigestHtmlParagraphs
                paragraphs={intro.paragraphs}
                className="text-zinc-800 text-xl leading-[30px] w-full pt-[5px] pb-2.5 px-2.5"
              />

              <VitalityDigestArticleBlocks
                blocks={article}
                media={media}
                ctaUrl={ctaUrl}
                ctaText={ctaText}
              />

              <p className="text-black text-[26px] leading-[31.2px] font-bold w-full pt-[5px] pb-2.5 px-2.5 md:text-[34px] md:leading-[40.8px]">
                {faq.heading}
              </p>
              <VitalityDigestHtmlParagraphs
                paragraphs={faq.paragraphs}
                className="text-zinc-800 text-xl leading-[30px] w-full pt-[5px] pb-2.5 px-2.5"
              />

              <div className="flex flex-col items-center w-full m-2.5">
                <img
                  alt=""
                  src={media.productImageCombined}
                  className="max-h-full w-full max-w-[448px] rounded-[10px]"
                />
              </div>
              <VitalityDigestCtaButton href={ctaUrl}>{ctaText}</VitalityDigestCtaButton>

              <VitalityDigestCommentsSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
