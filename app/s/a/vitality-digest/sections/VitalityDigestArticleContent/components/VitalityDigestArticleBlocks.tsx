import { VitalityDigestHtmlParagraphs } from "../../components/VitalityDigestHtmlParagraphs";
import { VitalityDigestCtaButton } from "../../components/VitalityDigestCtaButton";
import type {
  AdvertorialContent,
  AdvertorialMedia,
} from "../../VitalityDigestTopBar/context";

export type VitalityDigestArticleBlocksProps = {
  blocks: AdvertorialContent["article"];
  media: AdvertorialMedia;
  ctaUrl: string;
  ctaText: string;
};

export const VitalityDigestArticleBlocks = ({
  blocks,
  media,
  ctaUrl,
  ctaText,
}: VitalityDigestArticleBlocksProps): React.ReactElement => {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <p
              key={index}
              className="text-black text-[26px] leading-[31.2px] font-bold text-center w-full pt-[5px] pb-2.5 px-2.5 md:text-[34px] md:leading-[40.8px] md:text-left"
              dangerouslySetInnerHTML={{ __html: block.text }}
            />
          );
        }

        if (block.type === "paragraphs") {
          return (
            <VitalityDigestHtmlParagraphs
              key={index}
              paragraphs={block.items}
              className="text-zinc-800 text-xl leading-[30px] w-full pt-[5px] pb-2.5 px-2.5"
            />
          );
        }

        if (block.type === "image") {
          return (
            <div key={index} className="flex flex-col items-center w-full m-2.5">
              <img
                alt=""
                src={media[block.mediaKey]}
                className="max-h-full w-full max-w-[443px] rounded-[10px]"
              />
            </div>
          );
        }

        return (
          <VitalityDigestCtaButton key={index} href={ctaUrl}>
            {ctaText}
          </VitalityDigestCtaButton>
        );
      })}
    </>
  );
};
