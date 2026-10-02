import type { BestToeSocksArticleBlock, BestToeSocksMedia } from "../../../types";

type ArticleBlocksProps = {
  blocks: BestToeSocksArticleBlock[];
  media: BestToeSocksMedia;
  ctaUrl: string;
};

const PARAGRAPH = "mb-6 text-base leading-[1.5] text-black md:text-lg md:leading-[27px] [&_a]:font-bold [&_a]:text-[#0060C3] [&_a]:underline [&_strong]:font-bold";

function ArticleBlock({
  block,
  media,
  ctaUrl,
}: {
  block: BestToeSocksArticleBlock;
  media: BestToeSocksMedia;
  ctaUrl: string;
}): JSX.Element {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          className={PARAGRAPH}
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );
    case "heading":
      return (
        <h2 className="my-6 text-[30px] font-bold leading-[39px] text-[#333]">
          {block.text}
        </h2>
      );
    case "ctaImage":
      return (
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 block"
        >
          <img
            src={media.images[block.media]}
            alt=""
            className="h-auto w-full"
          />
        </a>
      );
    case "numberedList":
      return (
        <div className="mb-[15px] rounded-[5px] border border-[#E0E0E0] bg-white p-2.5 md:px-[25px] md:pb-2 md:pt-[25px]">
          {block.items.map((html, index) => (
            <div
              key={html}
              className="flex"
            >
              <span className="relative top-[3px] mr-[11px] h-fit rounded-[3px] border border-[#F1F1F1] bg-[#219653] px-1 text-sm font-bold leading-[16.1px] text-white">
                {`${index + 1}.`}
              </span>
              <p
                className="relative top-px mb-[18px] text-base leading-[24.4px] text-black md:text-lg md:leading-[24.4px] [&_a]:font-bold [&_a]:text-[#0060C3] [&_a]:underline [&_strong]:font-bold"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          ))}
        </div>
      );
    case "reviews":
      return (
        <>
          {block.items.map((review) => (
            <div
              key={review.author}
              style={{ backgroundImage: `url("${media.quoteTopLeft}"), url("${media.quoteBottomRight}")` }}
              className="mb-[18.8px] rounded-[5px] border border-[#E0E0E0] bg-white bg-no-repeat p-8 [background-position:25px_25px,calc(100%-25px)_calc(100%-25px)] md:px-16 md:py-8"
            >
              <q className="text-base italic leading-[1.5] text-black [quotes:none] md:text-lg md:leading-[27px]">
                {review.quote}
              </q>
              <p className="mt-2.5 text-base font-bold italic leading-[27px] text-black md:text-lg md:leading-[27px]">
                {review.author}
              </p>
              <div
                role="img"
                aria-label="5 stars"
                style={{ backgroundImage: `url("${media.reviewStars}")` }}
                className="mt-1 h-4 w-24 bg-cover bg-[0_100%] bg-no-repeat"
              />
            </div>
          ))}
        </>
      );
  }
}

export function BestToeSocksArticleBlocks({
  blocks,
  media,
  ctaUrl,
}: ArticleBlocksProps): JSX.Element {
  return (
    <div id="product-info">
      {blocks.map((block, index) => (
        <ArticleBlock
          key={`${block.type}-${index}`}
          block={block}
          media={media}
          ctaUrl={ctaUrl}
        />
      ))}
    </div>
  );
}
