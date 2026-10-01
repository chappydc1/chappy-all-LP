import type { CSSProperties } from "react";

import { DaysAgoDate } from "../../components/DaysAgoDate";
import { CheckCircleIcon } from "../../components/icons";
import type { PrimepicksV2Copy, PrimepicksV2Media } from "../../types";

type HeroProps = {
  hero: PrimepicksV2Copy["hero"];
  daysAgo: number;
  authorName: string;
  media: PrimepicksV2Media;
};

export function PrimepicksV2Hero({
  hero,
  daysAgo,
  authorName,
  media,
}: HeroProps): JSX.Element {
  const backgrounds = {
    "--pp-hero-mobile": `url("${media.heroMobile}")`,
    "--pp-hero-desktop": `url("${media.heroDesktop}")`,
  } as CSSProperties;

  return (
    <section
      style={backgrounds}
      className="flex flex-col items-center justify-center gap-4 bg-cover bg-center p-2.5 text-center md:mb-5 md:px-0 [background-image:linear-gradient(rgba(6,6,6,0.5),rgba(6,6,6,0.5)),var(--pp-hero-mobile)] md:py-5 md:[background-image:linear-gradient(rgba(6,6,6,0.5),rgba(6,6,6,0.5)),var(--pp-hero-desktop)]"
    >
      <h1 className="px-3 text-[28px] font-bold leading-[1.3] text-white md:px-0 md:text-[40px] md:leading-[52px]">
        {hero.heading}
      </h1>
      <div className="flex flex-col justify-center gap-1 rounded-[15px] border-2 border-[#DFDFDF] bg-white px-4 py-1.5 text-center md:px-6 md:py-3">
        <h4 className="text-sm font-bold leading-[1.3] text-[#333] md:text-lg md:leading-[23.4px]">
          {hero.testedLabel}
        </h4>
        <div className="flex items-center justify-center gap-1 md:gap-1.5">
          <img
            src={media.socialPeople}
            alt=""
            className="h-4 w-auto"
          />
          <img
            src={media.ratingStarsSmall}
            alt="5 stars"
            className="h-4 w-auto"
          />
        </div>
        <p className="text-[10px] leading-[1.3] text-[#636363] md:text-sm md:leading-[21px]">
          {hero.consumerLabel}
        </p>
      </div>
      <div className="flex max-w-[400px] flex-wrap items-center justify-center gap-1.5 px-4 text-xs leading-4 text-[#DFDFDF] md:max-w-none md:px-0 md:text-sm md:leading-[18px]">
        <CheckCircleIcon />
        <div>
          {hero.lastUpdatedLabel}
          {" "}
          <DaysAgoDate daysAgo={daysAgo} />
          {" | "}
          <a
            href={hero.disclosureUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#DFDFDF] no-underline"
          >
            {hero.disclosureLabel}
          </a>
          <span className="hidden md:inline">{" |"}</span>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <img
            src={media.authorPhoto}
            alt={authorName}
            className="h-4 w-4 object-cover"
          />
          <span>
            {hero.writtenByLabel}
            {" "}
            {authorName}
          </span>
          <img
            src={media.flagUs}
            alt="United States"
            className="h-3.5 w-[22px]"
          />
        </div>
      </div>
    </section>
  );
}
