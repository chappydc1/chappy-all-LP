import { TopBarBrand } from "./components/TopBarBrand";
import { TrendingBadge } from "./components/TrendingBadge";

type Props = {
  copy: { trendingText: string };
  media: { flagSrc: string };
};

export const TopBar = ({ copy, media }: Props) => {
  return (
    <div className="items-stretch bg-zinc-800 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] px-2.5 py-px md:flex-nowrap md:py-2.5">
      <div className="relative box-border caret-transparent flex basis-full grow max-w-[1170px] min-h-[25px] outline-[3px] w-min mx-auto px-px md:basis-0 md:px-2.5">
        <TopBarBrand />
        <TrendingBadge flagSrc={media.flagSrc} text={copy.trendingText} />
      </div>
    </div>
  );
};
