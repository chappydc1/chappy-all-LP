export type PrimepicksScoreCategory = {
  label: string;
  score: number;
  barClassName: string;
  isLast?: boolean;
};

export type PrimepicksSidebarScorePanelProps =
  | {
      variant: "review";
      score: string;
      starsImageUrl: string;
      rating: string;
      reviewCount: string;
    }
  | {
      variant: "breakdown";
      categories: PrimepicksScoreCategory[];
    };

export const PrimepicksSidebarScorePanel = (props: PrimepicksSidebarScorePanelProps) => {
  if (props.variant === "review") {
    return (
      <div className="box-border caret-transparent flex flex-col min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto] items-center bg-white w-full border border-neutral-200 p-2 rounded-[10px] border-solid">
        <h4 className="text-zinc-800 font-bold box-border caret-transparent leading-[18px] min-h-0 min-w-0 font-open_sans md:min-h-[auto] md:min-w-[auto]">
          Review Score
        </h4>
        <h3 className="text-zinc-800 text-[32px] font-bold box-border caret-transparent leading-[38px] min-h-0 min-w-0 font-roboto md:min-h-[auto] md:min-w-[auto]">
          {props.score}
        </h3>
        <img
          src={props.starsImageUrl}
          alt="Stars Rating"
          className="aspect-[auto_98_/_18] box-border caret-transparent max-w-full min-h-0 min-w-0 w-[98px] md:min-h-[auto] md:min-w-[auto]"
        />
        <span className="text-neutral-600 text-sm font-semibold box-border caret-transparent block leading-[18px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          {props.rating}
        </span>
        <span className="text-zinc-500 text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 mt-0.5 md:min-h-[auto] md:min-w-[auto]">
          {props.reviewCount}
        </span>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent flex flex-col min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto] mb-2">
      {props.categories.map((category, index) => (
        <div key={index}>
          <div className="box-border caret-transparent flex justify-between min-h-0 min-w-0 mb-1 md:min-h-[auto] md:min-w-[auto]">
            <span className="text-zinc-800 text-xs font-semibold box-border caret-transparent block leading-3 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              {category.label}
            </span>
            <span className="text-zinc-800 text-xs font-bold box-border caret-transparent block leading-3 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              {category.score}
            </span>
          </div>
          <div
            className={
              category.isLast
                ? "relative bg-neutral-200 box-border caret-transparent h-3 min-h-0 min-w-0 w-full mr-5 rounded-sm md:min-h-[auto] md:min-w-[auto]"
                : "relative bg-neutral-200 box-border caret-transparent h-3 min-h-0 min-w-0 w-full mr-5 mb-2 rounded-sm md:min-h-[auto] md:min-w-[auto]"
            }
          >
            <div className={category.barClassName}></div>
          </div>
        </div>
      ))}
    </div>
  );
};
