export type ProductCardProps = {
  outerClassName: string;
  headerClassName: string;
  titleClassName: string;
  title: string;
  brandName: string;
  imageUrl: string;
  reviewScore: string;
  ratingImageUrl: string;
  ratingImageAlt: string;
  ratingLabel: string;
  customerReviewCount: string;
  visitSiteUrl: string;
  pros: string[];
  cons: string[];
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div
      className={`bg-white shadow-[rgba(0,0,0,0.07)_0px_2px_25px_0px] box-border caret-transparent overflow-hidden rounded-[10px] ${props.outerClassName}`}
    >
      <div className="items-center bg-slate-800 box-border caret-transparent flex px-4 py-2 md:py-4">
        <div
          className={`text-white items-center box-border caret-transparent flex flex-wrap ${props.headerClassName}`}
        >
          <div
            className={`text-lg font-bold box-border caret-transparent leading-5 md:text-2xl ${props.headerClassName}`}
          >
            {props.title}
          </div>
          <div
            className={`items-center box-border caret-transparent flex ${props.headerClassName}`}
          >
            <span
              className={`bg-white box-border caret-transparent block h-full w-px mx-1 py-2 md:mx-4 md:py-3 ${props.headerClassName}`}
            ></span>
            <div
              className={`box-border caret-transparent ${props.headerClassName}`}
            >
              <span className="text-xs font-bold box-border caret-transparent leading-5 md:text-lg">
                by
              </span>
              <span className="relative text-xs font-bold box-border caret-transparent leading-5 md:text-lg">
                {props.brandName}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white box-border caret-transparent">
        <div className="box-border caret-transparent pt-4 pb-6 px-4 md:pt-6">
          <div className="box-border caret-transparent flex flex-col md:flex-row">
            {/* Image column */}
            <div
              className={`border-b-zinc-100 border-r-zinc-100 box-border caret-transparent ${props.titleClassName} w-full pr-0 pb-6 border-r-0 border-b border-solid md:w-3/12 md:pr-4 md:pb-0 md:border-b-black md:border-b-0 md:border-r`}
            >
              {/* Desktop image */}
              <div className="box-border caret-transparent hidden w-full md:block">
                <img
                  src={props.imageUrl}
                  alt="PrimePicks.Review"
                  className="aspect-[auto_220_/_220] box-border caret-transparent max-w-full w-full md:max-w-[218px]"
                />
              </div>
              {/* Mobile image + score */}
              <div className="box-border caret-transparent block md:hidden">
                <div className="box-border caret-transparent flex flex-col md:block md:flex-row">
                  <div
                    className={`items-start box-border caret-transparent flex justify-between ${props.titleClassName}`}
                  >
                    <div
                      className={`border-r-zinc-100 box-border caret-transparent flex justify-center ${props.titleClassName} w-6/12 border-r border-solid`}
                    >
                      <img
                        src={props.imageUrl}
                        alt="PrimePicks.Review mon-img-218-w"
                        className={`box-border caret-transparent max-w-full ${props.titleClassName}`}
                      />
                    </div>
                    <div
                      className={`box-border caret-transparent ${props.titleClassName} w-6/12 pl-4`}
                    >
                      <div className="text-zinc-800 text-sm font-bold box-border caret-transparent leading-[18px] text-center mb-1 md:text-base">
                        ReviewScore
                      </div>
                      <div className="text-zinc-800 text-4xl font-bold box-border caret-transparent leading-10 text-center mb-1 md:text-[40px]">
                        {props.reviewScore}
                      </div>
                      <div className="box-border caret-transparent h-[18px] text-center mb-1">
                        <img
                          src={props.ratingImageUrl}
                          alt={props.ratingImageAlt}
                          className="box-border caret-transparent h-full max-w-full w-full"
                        />
                      </div>
                      <div className="text-neutral-600 text-sm font-semibold box-border caret-transparent leading-[18px] text-center mb-1">
                        {props.ratingLabel}
                      </div>
                      <div className="text-zinc-500 text-xs box-border caret-transparent leading-4 text-center mb-0 md:mb-4">
                        {props.customerReviewCount} Customer Reviews
                      </div>
                    </div>
                  </div>
                  <div
                    className={`items-center box-border caret-transparent flex flex-col ${props.titleClassName}`}
                  >
                    <a
                      href={props.visitSiteUrl}
                      className={`relative text-white text-xl font-bold items-center bg-indigo-600 shadow-[rgb(2,26,49)_0px_2px_0px_0px] box-border caret-transparent gap-x-3 flex justify-center ${props.titleClassName} min-w-[210px] gap-y-3 text-center uppercase w-full mt-4 px-6 py-5 rounded-[15px] md:w-auto`}
                    >
                      <span
                        className={`box-border caret-transparent block ${props.titleClassName}`}
                      >
                        Visit site
                      </span>
                      <span
                        className={`box-border caret-transparent block ${props.titleClassName}`}
                      >
                        <img
                          src="/assets/primepicks/icon-1.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-3.5 w-[15px]"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Pros column */}
            <div
              className={`border-b-zinc-100 border-r-zinc-100 box-border caret-transparent ${props.titleClassName} w-full px-0 py-4 border-r-0 border-b border-solid md:w-3/12 md:px-4 md:py-0 md:border-b-black md:border-b-0 md:border-r`}
            >
              <h3 className="text-emerald-500 text-lg font-bold box-border caret-transparent leading-5 text-left uppercase mb-4">
                Pros
              </h3>
              <ul className="box-border caret-transparent flex flex-col justify-center list-none pl-0">
                {props.pros.map((pro, index) => (
                  <li
                    key={index}
                    className={`items-start box-border caret-transparent flex ${props.titleClassName} ${index < props.pros.length - 1 ? "mb-2" : ""}`}
                  >
                    <img
                      src="/assets/primepicks/fe_checked-icon.svg"
                      alt="PrimePicks.Review"
                      className={`aspect-[auto_16_/_16] box-border caret-transparent max-w-full ${props.titleClassName} w-4 mr-2`}
                    />
                    <span
                      className={`text-xs box-border caret-transparent block leading-4 ${props.titleClassName}`}
                    >
                      {pro}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons column */}
            <div
              className={`border-r-zinc-100 box-border caret-transparent ${props.titleClassName} w-full pt-4 px-0 border-r-0 border-solid md:w-3/12 md:pt-0 md:px-4 md:border-r`}
            >
              <h3 className="text-red-400 text-lg font-bold box-border caret-transparent leading-5 text-left uppercase mb-4">
                Cons
              </h3>
              <ul className="box-border caret-transparent flex flex-col justify-center list-none pl-0">
                {props.cons.map((con, index) => (
                  <li
                    key={index}
                    className={`items-start box-border caret-transparent flex ${props.titleClassName} ${index < props.cons.length - 1 ? "mb-2" : ""}`}
                  >
                    <img
                      src="/assets/primepicks/con-x.svg"
                      alt="PrimePicks.Review"
                      className={`aspect-[auto_16_/_17] box-border caret-transparent max-w-full ${props.titleClassName} w-4 mr-2`}
                    />
                    <span
                      className={`text-xs box-border caret-transparent block leading-4 ${props.titleClassName}`}
                    >
                      {con}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop score + CTA column */}
            <div
              className={`border-b-zinc-100 box-border caret-transparent hidden max-w-[234px] ${props.titleClassName} w-full pl-0 py-4 border-b border-solid md:block md:w-3/12 md:pl-4 md:py-0 md:border-b-black md:border-b-0`}
            >
              <div className="items-center box-border caret-transparent flex flex-col h-full justify-start text-center">
                <div
                  className={`text-zinc-800 text-sm font-bold box-border caret-transparent leading-[18px] ${props.titleClassName} mb-1 md:text-base`}
                >
                  ReviewScore
                </div>
                <div
                  className={`text-zinc-800 text-4xl font-bold box-border caret-transparent leading-10 ${props.titleClassName} mb-1 md:text-[40px] md:mb-2`}
                >
                  {props.reviewScore}
                </div>
                <div
                  className={`box-border caret-transparent h-[18px] ${props.titleClassName} mb-1 md:mb-2`}
                >
                  <img
                    src={props.ratingImageUrl}
                    alt={props.ratingImageAlt}
                    className={`aspect-[auto_95_/_18] box-border caret-transparent h-full max-w-full w-[95px]`}
                  />
                </div>
                <div
                  className={`text-neutral-600 text-sm font-semibold box-border caret-transparent leading-[18px] ${props.titleClassName} mb-0.5`}
                >
                  {props.ratingLabel}
                </div>
                <div
                  className={`text-zinc-500 text-xs box-border caret-transparent leading-4 ${props.titleClassName} mb-0 md:mb-4`}
                >
                  {props.customerReviewCount} Customer Reviews
                </div>
                <a
                  href={props.visitSiteUrl}
                  className={`relative text-white text-xl font-bold items-center bg-indigo-600 shadow-[rgb(2,26,49)_0px_2px_0px_0px] box-border caret-transparent gap-x-3 flex justify-center ${props.titleClassName} min-w-[210px] gap-y-3 uppercase w-full mt-3 px-6 py-5 rounded-[15px]`}
                >
                  <span
                    className={`box-border caret-transparent block ${props.titleClassName}`}
                  >
                    Visit site
                  </span>
                  <span
                    className={`box-border caret-transparent block ${props.titleClassName}`}
                  >
                    <img
                      src="/assets/primepicks/icon-1.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-3.5 w-[15px]"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
