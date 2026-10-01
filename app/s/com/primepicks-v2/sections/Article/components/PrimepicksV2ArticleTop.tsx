import { DaysAgoDate } from "../../../components/DaysAgoDate";
import { GoldStarsIcon } from "../../../components/icons";
import type { PrimepicksV2Copy } from "../../../types";

type ArticleTopProps = {
  article: PrimepicksV2Copy["article"];
  ctaUrl: string;
  daysAgo: number;
  authorName: string;
  authorPhoto: string;
};

export function PrimepicksV2ArticleTop({
  article,
  ctaUrl,
  daysAgo,
  authorName,
  authorPhoto,
}: ArticleTopProps): JSX.Element {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-[28px] font-bold leading-[1.3] text-[#333] md:text-[42px] md:leading-[54.6px]">
        {article.title}
      </h4>
      <a
        href={ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-bold leading-[30px] text-[#0060C3] underline"
      >
        {article.limitedOfferHtml}
      </a>
      <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#636363]">
        <span className="relative -top-0.5">
          <GoldStarsIcon size={16} />
        </span>
        <p>{article.writtenByLabel}</p>
        <img
          src={authorPhoto}
          alt={authorName}
          className="h-4 w-4 rounded-full object-cover"
        />
        <p>
          {authorName}
          {` ${article.onLabel} `}
          <DaysAgoDate daysAgo={daysAgo} />
          {` ${article.category}`}
        </p>
      </div>
    </div>
  );
}
