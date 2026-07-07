type FooterBrandReviewsProps = {
  badgeSrc: string;
  starSrc: string;
  count: string;
  stars: number;
  label: string;
};

export function KachavaFooterBrandReviews({ badgeSrc, starSrc, count, stars, label }: FooterBrandReviewsProps) {
  return (
    <div className="items-start box-border caret-transparent gap-x-6 flex flex-wrap justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 md:gap-x-14 md:flex-nowrap md:gap-y-14">
      <div className="box-border caret-transparent gap-x-6 flex basis-auto shrink justify-between max-w-[380px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 w-full pl-0 md:basis-[400px] md:shrink-0 md:pl-4">
        <div className="box-border caret-transparent max-w-[158px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={badgeSrc}
            alt="Brand review badge"
            className="box-border caret-transparent inline outline-[3px]"
          />
        </div>
        <span className="text-sm items-start box-border caret-transparent gap-x-2.5 flex flex-col leading-5 min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 md:text-base md:leading-6">
          <span className="text-sm box-border caret-transparent flex leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-nowrap md:text-base md:leading-6">
            {Array.from({ length: stars }).map((_, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={starSrc}
                alt="Star"
                className={`text-sm box-border caret-transparent h-[11.712px] leading-5 outline-[3px] text-nowrap w-[12.2px] scale-125 md:text-base md:leading-6${i > 0 ? " ml-2.5" : ""}`}
              />
            ))}
          </span>
          <span className="text-sm box-border caret-transparent gap-x-[5px] flex leading-5 min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px] md:text-base md:leading-6">
            <span className="text-sm box-border caret-transparent flex leading-5 min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-6">
              {count}{" "}
            </span>
            <span className="text-sm box-border caret-transparent flex leading-5 min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-6">
              {label}
            </span>
          </span>
        </span>
      </div>
      <div className="box-border caret-transparent flex grow max-w-none min-h-[auto] min-w-[auto] outline-[3px] pr-0 md:max-w-[830px] md:pr-4">
        <div className="text-xs box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px]" />
      </div>
    </div>
  );
}
