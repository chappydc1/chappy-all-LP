import { content } from "../../../content";

type ReviewCardProps = {
  name: string;
  daysAgo: string;
  review: string;
};

export const ReviewCard = ({ name, daysAgo, review }: ReviewCardProps) => {
  const t = content.testimonials;
  return (
    <div className="items-stretch bg-white box-border caret-transparent flex flex-col justify-start min-h-[auto] min-w-[auto] md:flex-row transition-shadow duration-200 hover:shadow-md">
      <div className="border-b-gray-200 border-l-gray-800 border-r-gray-200 border-t-gray-800 box-border caret-transparent min-h-[auto] min-w-[auto] w-full p-3.5 border-r-0 border-b md:border-b-gray-800 md:w-3/12 md:p-5 md:border-b-0 md:border-r">
        <div className="border-b-gray-200 border-l-gray-800 border-r-gray-800 border-t-gray-800 box-border caret-transparent mb-3.5 pb-3.5 border-b">
          <div className="text-neutral-600 box-border caret-transparent leading-[22px]">{name}</div>
          <div className="items-center box-border caret-transparent flex justify-start mt-[7px]">
            <img src={t.shieldCheckIconUrl} alt="" className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] w-5" />
            <div className="text-emerald-600 box-border caret-transparent leading-[22px] min-h-[auto] min-w-[auto] text-left ml-2">{t.verifiedBuyer}</div>
          </div>
        </div>
        <div className="text-neutral-600 box-border caret-transparent leading-[22px]">
          <span className="text-emerald-600 box-border caret-transparent mr-0.5 font-fa_solid_900"></span>
          {t.iRecommend}
        </div>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-full px-3.5 py-5 md:w-9/12 md:px-5">
        <div className="box-border caret-transparent flex justify-between mb-3.5">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <img key={i} src={t.starIconUrl} alt="★" className="box-border caret-transparent inline-block max-w-full w-[25px] px-px" />
            ))}
          </div>
          <div className="text-neutral-500 box-border caret-transparent leading-[22px] min-h-[auto] min-w-[auto]">{daysAgo}</div>
        </div>
        <div className="text-neutral-600 box-border caret-transparent leading-[22px]">{review}</div>
      </div>
    </div>
  );
};
