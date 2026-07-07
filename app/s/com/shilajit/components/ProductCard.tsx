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
  animationDelay?: string;
  imageSrc: string;
  imageAlt: string;
  starFull: string;
  starHalf: string;
  checkIcon: string;
  amazonBadge: string;
  wrapperClassName?: string;
};

export function ShilajitProductCard(props: ProductCardProps) {
  const starIcons = Array.from({ length: 5 }, (_, i) =>
    i < Math.floor(props.stars) ? props.starFull : props.starHalf
  );

  return (
    <div className={`${props.wrapperClassName ?? ""} opacity-0 animate-fade-in-up ${props.animationDelay ?? ""}`}>
      <div className="relative bg-white shadow-[rgba(0,0,0,0.2)_0px_4px_15px_0px] flex flex-col justify-between mt-[30px] mx-2.5 rounded-lg md:justify-normal">
        <div className="flex min-h-[auto] md:min-h-[30px]">
          <div className="absolute text-[17px] font-bold items-center bg-white flex h-7 justify-center leading-[14px] w-7 z-10 rounded-[20px] left-0.5 top-0.5 shadow-sm">
            {props.rank}
          </div>
          {props.badge && (
            <div className="items-center flex flex-col h-fit justify-center ml-[35px] md:ml-[50px]">
              <div className="relative bg-amber-400 h-[30px] w-40" />
              <span className="absolute text-base font-bold block">{props.badge}</span>
            </div>
          )}
        </div>

        <div className="block mb-0 pt-0 md:flex md:items-center md:justify-between md:w-full md:mb-2.5 md:pt-[5px]">
          {/* Image */}
          <div className="ml-0 md:ml-[30px]">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="inline h-40 w-40 object-fill rounded-none md:max-h-40 md:max-w-40 md:object-scale-down md:rounded-lg"
            />
          </div>

          {/* Features */}
          <div className="max-w-none w-auto mx-0 md:max-w-[350px] md:w-[350px] md:ml-5">
            <div className="text-center md:text-left">
              <h3 className="text-black text-lg font-bold block leading-[23.1429px] text-center md:text-neutral-800 md:flow-root md:max-h-[52px] md:text-left md:overflow-hidden">
                {props.name}
              </h3>
            </div>
            <div className="text-center ml-0 md:text-left md:-ml-1 md:pt-1.5">
              {props.features.map((feat, i) => (
                <div key={i} className="flex items-start justify-center text-center mt-0 md:text-left md:mt-1">
                  <img src={props.checkIcon} alt="" className="inline h-[26px] w-[26px] flex-shrink-0" />
                  <div className="text-sm flow-root leading-5 max-h-10 overflow-hidden text-ellipsis mt-[3px] pl-[5px] md:text-base">
                    {feat}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Score */}
          <div className="bg-transparent h-auto md:bg-blue-500/10 md:flex md:h-[130px] md:items-center md:justify-center md:min-w-[120px] md:rounded-[10px]">
            <div className="block md:flex md:flex-col md:justify-evenly">
              <span className="text-sm inline md:text-[30.8px] md:font-bold md:block">{props.score}</span>
              <div className="text-sm my-0 md:my-1">
                {starIcons.map((src, i) => (
                  <img key={i} src={src} alt="star" className="inline h-4 w-4" />
                ))}
              </div>
              <p className="text-sm block leading-[19.999px] md:hidden">{props.reviewCount}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="block h-auto p-0 md:flex md:flex-col md:h-[165px] md:items-center md:justify-center md:min-w-[270px] md:p-2.5">
            {props.boughtBadge && (
              <p className="text-zinc-500 mb-3.5">{props.boughtBadge}</p>
            )}
            <a className="inline w-auto no-underline md:block md:w-full">
              <button className="text-black text-[13.3333px] bg-zinc-100 h-auto w-auto p-0 rounded-none border-2 border-black md:text-white md:text-base md:font-bold md:bg-blue-500 md:h-10 md:w-full md:rounded-lg md:border-0 cursor-pointer">
                {props.cta}
              </button>
            </a>
            <div className="mt-0 md:-mt-2.5">
              <img
                alt="available at amazon"
                src={props.amazonBadge}
                className="inline h-[22.6px] w-[140px] mt-[25px]"
              />
            </div>
          </div>

          {/* Discount badge */}
          {props.discountText && (
            <p className="static text-sm leading-[19.999px] md:absolute md:text-base md:right-[-11px] md:z-10 md:top-[15px]">
              <span className="text-black text-sm bg-transparent inline md:relative md:text-white md:text-[16.8px] md:bg-red-500 md:inline-block md:min-w-[85px] md:px-[16.8px] md:py-[8.4px]">
                <strong className="font-bold">{props.discountText}</strong>
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
