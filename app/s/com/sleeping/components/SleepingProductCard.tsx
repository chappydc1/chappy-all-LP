type ProductCardProps = {
  rank: string;
  badge?: string;
  name: string;
  features: string[];
  score: string;
  stars: number;
  reviewCount: string;
  boughtBadge?: string;
  discountText?: string;
  cta: string;
  ctaUrl?: string;
  imageSrc: string;
  imageAlt: string;
  starFull: string;
  starHalf: string;
  checkIcon: string;
  amazonBadge: string;
  hideAmazonBadge?: boolean;
  featured?: boolean;
  wrapperClassName?: string;
};

export function SleepingProductCard(props: ProductCardProps): React.JSX.Element {
  const fullStars = Math.floor(props.stars);
  const hasHalfStar = props.stars - fullStars >= 0.5;
  const starIcons = Array.from({ length: 5 }, (_, i) => {
    if (i < fullStars) {
      return { src: props.starFull, empty: false };
    }
    if (i === fullStars && hasHalfStar) {
      return { src: props.starHalf, empty: false };
    }
    return { src: props.starFull, empty: true };
  });

  return (
    <div className={props.wrapperClassName ?? ""}>
      <div className={`relative bg-white shadow-[rgba(0,0,0,0.2)_0px_4px_15px_0px] flex flex-col justify-between mt-[30px] mx-2.5 rounded-lg lg:justify-normal ${props.featured ? "ring-2 ring-amber-400" : ""}`}>
        <div className="flex min-h-[auto] lg:min-h-[30px]">
          <div className="absolute text-[17px] font-bold items-center bg-white flex h-7 justify-center leading-[14px] w-7 z-10 rounded-[20px] left-0.5 top-0.5 shadow-sm">
            {props.rank}
          </div>
          {props.badge && (
            <div className="flex h-fit ml-[35px] lg:ml-[50px]">
              <span className="bg-amber-400 text-base font-bold leading-[30px] min-w-40 px-4 text-center whitespace-nowrap">
                {props.badge}
              </span>
            </div>
          )}
        </div>

        <div className="block mb-0 pt-0 lg:flex lg:items-center lg:justify-between lg:w-full lg:mb-2.5 lg:pt-[5px]">
          <div className="ml-0 lg:ml-[30px]">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="inline h-40 w-40 object-fill rounded-none lg:max-h-40 lg:max-w-40 lg:object-scale-down lg:rounded-lg"
            />
          </div>

          <div className="max-w-none w-auto mx-0 lg:max-w-[350px] lg:w-[350px] lg:ml-5">
            <div className="text-center lg:text-left">
              <h3 className="text-black text-lg font-bold block leading-[23.1429px] text-center lg:text-neutral-800 lg:text-left">
                <a href={props.ctaUrl ?? "#"} className="hover:underline text-inherit">
                  {props.name}
                </a>
              </h3>
            </div>
            <div className="text-left ml-0 lg:-ml-1 lg:pt-1.5">
              {props.features.map((feat, i) => (
                <div key={i} className="flex items-start mt-0 lg:mt-1">
                  <img src={props.checkIcon} alt="" className="inline h-[26px] w-[26px] flex-shrink-0" />
                  <div className="text-sm leading-5 mt-[3px] pl-[5px] lg:text-base">
                    {feat}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-transparent h-auto lg:bg-blue-500/10 lg:flex lg:h-[130px] lg:items-center lg:justify-center lg:min-w-[120px] lg:rounded-[10px]">
            <div className="block lg:flex lg:flex-col lg:justify-evenly lg:items-center">
              <span className="text-sm inline lg:text-[30.8px] lg:font-bold lg:block">{props.score}</span>
              <div className="text-sm my-0 lg:my-1">
                {starIcons.map((star, i) => (
                  <img
                    key={i}
                    src={star.src}
                    alt=""
                    className={`inline h-4 w-4 ${star.empty ? "opacity-25 grayscale" : ""}`}
                  />
                ))}
              </div>
              <p className="text-sm block leading-[19.999px] lg:hidden">{props.reviewCount}</p>
            </div>
          </div>

          <div className="block h-auto p-0 lg:flex lg:flex-col lg:h-[165px] lg:items-center lg:justify-center lg:min-w-[270px] lg:p-2.5">
            {props.boughtBadge && (
              <p className="text-zinc-500 mb-3.5">{props.boughtBadge}</p>
            )}
            <a href={props.ctaUrl ?? "#"} className="inline w-auto no-underline lg:block lg:w-full">
              <button className="text-black text-[13.3333px] bg-zinc-100 h-auto w-auto p-0 rounded-none border-2 border-black lg:text-white lg:text-base lg:font-bold lg:bg-blue-500 lg:h-10 lg:w-full lg:rounded-lg lg:border-0 cursor-pointer">
                {props.cta}
              </button>
            </a>
            {!props.hideAmazonBadge && (
              <div className="mt-0 lg:-mt-2.5">
                <img
                  alt="available at amazon"
                  src={props.amazonBadge}
                  className="inline h-[22.6px] w-[140px] mt-[25px]"
                />
              </div>
            )}
          </div>

          {props.discountText && (
            <p className="static text-sm leading-[19.999px] lg:absolute lg:text-base lg:right-[-11px] lg:z-10 lg:top-[15px]">
              <span className="text-black text-sm bg-transparent inline lg:relative lg:text-white lg:text-[20px] lg:leading-6 lg:bg-[#ff4747] lg:inline-block lg:min-w-[85px] lg:px-5 lg:py-2.5">
                <strong className="font-extrabold">{props.discountText}</strong>
                <span className="hidden lg:block absolute right-0 top-full w-0 h-0 border-t-[11px] border-t-[#b21f1f] border-r-[11px] border-r-transparent" />
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
