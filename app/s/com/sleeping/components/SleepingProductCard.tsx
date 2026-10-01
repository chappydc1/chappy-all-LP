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

export function SleepingProductCard(props: ProductCardProps) {
  const starIcons = Array.from({ length: 5 }, (_, i) =>
    i < Math.floor(props.stars) ? props.starFull : props.starHalf
  );

  return (
    <div className={props.wrapperClassName ?? ""}>
      <div className={`relative bg-white shadow-[rgba(0,0,0,0.2)_0px_4px_15px_0px] flex flex-col justify-between mt-[30px] mx-2.5 rounded-lg md:justify-normal ${props.featured ? "ring-2 ring-amber-400" : ""}`}>
        <div className="flex min-h-[auto] md:min-h-[30px]">
          <div className="absolute text-[17px] font-bold items-center bg-white flex h-7 justify-center leading-[14px] w-7 z-10 rounded-[20px] left-0.5 top-0.5 shadow-sm">
            {props.rank}
          </div>
          {props.badge && (
            <div className="flex h-fit ml-[35px] md:ml-[50px]">
              <span className="bg-amber-400 text-base font-bold leading-[30px] min-w-40 px-4 text-center whitespace-nowrap">
                {props.badge}
              </span>
            </div>
          )}
        </div>

        <div className="block mb-0 pt-0 md:flex md:items-center md:justify-between md:w-full md:mb-2.5 md:pt-[5px]">
          <div className="ml-0 md:ml-[30px]">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="inline h-40 w-40 object-fill rounded-none md:max-h-40 md:max-w-40 md:object-scale-down md:rounded-lg"
            />
          </div>

          <div className="max-w-none w-auto mx-0 md:max-w-[350px] md:w-[350px] md:ml-5">
            <div className="text-center md:text-left">
              <h3 className="text-black text-lg font-bold block leading-[23.1429px] text-center md:text-neutral-800 md:text-left">
                <a href={props.ctaUrl ?? "#"} className="hover:underline text-inherit">
                  {props.name}
                </a>
              </h3>
            </div>
            <div className="text-left ml-0 md:-ml-1 md:pt-1.5">
              {props.features.map((feat, i) => (
                <div key={i} className="flex items-start mt-0 md:mt-1">
                  <img src={props.checkIcon} alt="" className="inline h-[26px] w-[26px] flex-shrink-0" />
                  <div className="text-sm leading-5 mt-[3px] pl-[5px] md:text-base">
                    {feat}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-transparent h-auto md:bg-blue-500/10 md:flex md:h-[130px] md:items-center md:justify-center md:min-w-[120px] md:rounded-[10px]">
            <div className="block md:flex md:flex-col md:justify-evenly md:items-center">
              <span className="text-sm inline md:text-[30.8px] md:font-bold md:block">{props.score}</span>
              <div className="text-sm my-0 md:my-1">
                {starIcons.map((src, i) => (
                  <img key={i} src={src} alt="star" className="inline h-4 w-4" />
                ))}
              </div>
              <p className="text-sm block leading-[19.999px] md:hidden">{props.reviewCount}</p>
            </div>
          </div>

          <div className="block h-auto p-0 md:flex md:flex-col md:h-[165px] md:items-center md:justify-center md:min-w-[270px] md:p-2.5">
            {props.boughtBadge && (
              <p className="text-zinc-500 mb-3.5">{props.boughtBadge}</p>
            )}
            <a href={props.ctaUrl ?? "#"} className="inline w-auto no-underline md:block md:w-full">
              <button className="text-black text-[13.3333px] bg-zinc-100 h-auto w-auto p-0 rounded-none border-2 border-black md:text-white md:text-base md:font-bold md:bg-blue-500 md:h-10 md:w-full md:rounded-lg md:border-0 cursor-pointer">
                {props.cta}
              </button>
            </a>
            {!props.hideAmazonBadge && (
              <div className="mt-0 md:-mt-2.5">
                <img
                  alt="available at amazon"
                  src={props.amazonBadge}
                  className="inline h-[22.6px] w-[140px] mt-[25px]"
                />
              </div>
            )}
          </div>

          {props.discountText && (
            <p className="static text-sm leading-[19.999px] md:absolute md:text-base md:right-[-11px] md:z-10 md:top-[15px]">
              <span className="text-black text-sm bg-transparent inline md:relative md:text-white md:text-[20px] md:leading-6 md:bg-[#ff4747] md:inline-block md:min-w-[85px] md:px-5 md:py-2.5">
                <strong className="font-extrabold">{props.discountText}</strong>
                <span className="hidden md:block absolute right-0 top-full w-0 h-0 border-t-[11px] border-t-[#b21f1f] border-r-[11px] border-r-transparent" />
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
