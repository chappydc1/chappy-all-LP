import copy from "../../../copy.json";

export const CopdHeroContent = () => {
  const { hero } = copy;
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-auto md:w-[540px]">
      <p className="text-base font-medium bg-orange-200 box-border caret-transparent leading-[19.2px] max-w-fit outline-[3px] underline mr-auto mb-4 px-2 py-1">
        {hero.badge}
      </p>
      <div className="box-border caret-transparent outline-[3px] mb-4">
        <h1 className="text-4xl font-medium box-border caret-transparent tracking-[-1.8px] leading-[39.6px] outline-[3px] md:text-[52px] md:tracking-[-2.6px] md:leading-[57.2px]">
          <strong className="text-green-700 text-4xl box-border caret-transparent tracking-[-1.8px] leading-[39.6px] outline-[3px] md:text-[52px] md:tracking-[-2.6px] md:leading-[57.2px]">
            {hero.heading.highlight1}
          </strong>{" "}
          {hero.heading.text}{" "}
          <strong className="text-green-700 text-4xl box-border caret-transparent tracking-[-1.8px] leading-[39.6px] outline-[3px] md:text-[52px] md:tracking-[-2.6px] md:leading-[57.2px]">
            {hero.heading.highlight2}
          </strong>
        </h1>
      </div>
      <div className="box-border caret-transparent outline-[3px] mb-5">
        <p className="text-base font-medium box-border caret-transparent leading-[25.6px] outline-[3px] md:text-lg md:leading-[28.8px]">
          {hero.subheading}
        </p>
      </div>
      <div className="box-border caret-transparent max-w-[420px] outline-[3px] mx-auto md:mx-0">
        <div className="box-border caret-transparent hidden outline-[3px]">
          <img
            src="/images/gruns/icon-8.svg"
            alt="Icon"
            className="box-border caret-transparent h-[30px] outline-[3px] w-[70px]"
          />
        </div>
        <a
          href={hero.cta.href}
          className="text-white text-lg font-semibold items-center bg-green-700 box-border caret-transparent flex h-14 justify-center tracking-[-0.54px] leading-[28.8px] outline-[3px] w-full mb-2 px-8 rounded-[3.35544e+07px]"
        >
          {hero.cta.primary}
        </a>
        <div className="items-center box-border caret-transparent gap-x-2 flex justify-center outline-[3px] gap-y-2 md:gap-x-2.5 md:justify-center md:gap-y-0">
          <div className="items-center box-border caret-transparent gap-x-0.5 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-0.5">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src="/images/gruns/icon-9.svg"
                alt="Star"
                className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
              />
            ))}
          </div>
          <div className="box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 md:gap-x-2.5 md:gap-y-2.5">
            <div className="text-xs font-medium box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[22.4px]">
              <span className="text-green-700 text-xs box-border caret-transparent leading-3 outline-[3px] md:text-sm md:leading-[22.4px]">
                {hero.socialProof.rating}
              </span>{" "}
              stars
            </div>
            <div className="text-xs font-medium box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[22.4px]">
              •
            </div>
            <div className="text-xs font-medium box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[22.4px]">
              <span className="text-green-700 text-xs box-border caret-transparent leading-3 outline-[3px] md:text-sm md:leading-[22.4px]">
                {hero.socialProof.reviews}
              </span>{" "}
              reviews
            </div>
            <div className="text-xs font-medium box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[22.4px]">
              •
            </div>
            <div className="text-xs font-medium box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[22.4px]">
              <span className="text-green-700 text-xs box-border caret-transparent leading-3 outline-[3px] md:text-sm md:leading-[22.4px]">
                {hero.socialProof.members}
              </span>{" "}
              sold
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
