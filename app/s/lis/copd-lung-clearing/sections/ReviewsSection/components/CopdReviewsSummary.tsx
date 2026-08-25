import { CopdReviewItem } from "./CopdReviewItem";
import copy from "../../../copy.json";

export const CopdReviewsSummary = () => {
  const { reviews } = copy;
  return (
    <div className="relative text-base box-border caret-transparent leading-[25.6px] max-w-[1200px] outline-[3px] mx-auto px-4 py-8">
      <div
        role="tablist"
        className="box-border caret-transparent flex justify-center outline-[3px] mb-6 border-b-black/10 border-b border-solid md:justify-normal"
      >
        <div
          role="tab"
          className="text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full border-green-700 px-[11.2px] py-[7px] border-b-2 border-solid md:w-[150px]"
        >
          {reviews.tabs[0]}
        </div>
        <div
          role="tab"
          className="text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full px-[11.2px] py-[7px] border-b-transparent border-b-2 border-solid md:w-[150px]"
        >
          {reviews.tabs[1]}
        </div>
      </div>
      <div className="relative box-border caret-transparent outline-[3px]">
        <div className="items-center box-border caret-transparent gap-x-12 flex flex-wrap outline-[3px] gap-y-4 mb-4 md:flex-nowrap">
          <div className="items-center box-border caret-transparent gap-x-4 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 w-full md:gap-x-8 md:w-auto">
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-center">
              <div className="text-5xl box-border caret-transparent leading-[48px] outline-[3px] mb-2">
                {reviews.overallRating}
              </div>
              <div
                aria-label={`${reviews.overallRating} stars`}
                role="img"
                className="items-center box-border caret-transparent flex outline-[3px] mb-2"
              >
                <div className="relative items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px]">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="box-border caret-transparent h-[27px] min-h-[auto] min-w-[auto] outline-[3px] w-[27px] p-[3px]">
                        <img src="/images/gruns/icon-25.svg" alt="Star" className="box-border caret-transparent outline-[3px] m-auto" />
                      </div>
                    ))}
                  </div>
                  <div className="absolute items-center box-border caret-transparent flex h-full outline-[3px] w-[96%] overflow-hidden left-0 top-0">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="box-border caret-transparent shrink-0 h-[27px] min-h-[auto] min-w-[auto] outline-[3px] w-[27px] p-[3px]">
                        <img src="/images/gruns/icon-26.svg" alt="Star filled" className="box-border caret-transparent outline-[3px] m-auto" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px]">
                {reviews.totalReviews} reviews
              </div>
            </div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full md:w-[250px]">
              {[
                { stars: 5, pct: "86%" },
                { stars: 4, pct: "9%" },
                { stars: 3, pct: "3%" },
                { stars: 2, pct: "1%" },
                { stars: 1, pct: "1%" },
              ].map(({ stars, pct }) => (
                <div
                  key={stars}
                  role="button"
                  className="items-center box-border caret-transparent flex leading-5 outline-[3px] my-0.5"
                >
                  <div className="text-sm box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-3 mr-2">
                    {stars}
                  </div>
                  <div className="bg-black/10 box-border caret-transparent h-2 min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden rounded-sm">
                    <div className={`bg-green-700 box-border caret-transparent h-full outline-[3px] rounded-l-sm`} style={{ width: pct }}>
                       
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/10 box-border caret-transparent h-px outline-[3px]">
         
      </div>
      <div className="relative box-border caret-transparent leading-6 outline-[3px] pt-8">
        {reviews.items.map((item, i) => (
          <div key={i}>
            <CopdReviewItem
              avatarLabel={item.username}
              avatarInitials={item.avatarInitials}
              username={item.username}
              timeAgo={item.timeAgo}
              title={item.title}
              body={item.body}
              productUrl="https://loraritual.com/products/somara-liquid-complex"
              productName={item.productName}
            />
            {i < reviews.items.length - 1 && (
              <div className="bg-black/10 box-border caret-transparent h-px outline-[3px] mb-8"> </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
