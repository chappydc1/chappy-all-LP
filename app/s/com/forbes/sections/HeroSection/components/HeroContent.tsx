type HeroContentProps = {
  heading: string;
  subheading: string;
  date: string;
};

export const ForbesHeroContent = ({
  heading,
  subheading,
  date,
}: HeroContentProps) => {

  return (
    <div className="relative flex flex-col shrink-0 max-w-[900px] mx-auto">
      {/* Heading */}
      <div className="relative flex flex-col shrink-0 min-h-[auto] min-w-[auto] animate-fade-in">
        <span className="text-zinc-700 text-sm block leading-5 min-h-[auto] min-w-[auto]">
          <h1 className="text-black text-[28px] font-bold leading-tight mb-1 md:text-neutral-800 md:text-5xl md:leading-[58px] md:mb-2">
            {heading}
          </h1>
          <p className="mt-1 md:mt-2">
            <strong className="font-bold">{subheading}</strong>
          </p>
        </span>
      </div>

      {/* Date */}
      <div className="relative flex flex-col shrink-0 min-h-[auto] min-w-[auto] animate-fade-in [animation-delay:0.15s]">
        <div className="text-gray-500 text-xs leading-[18px] min-h-[auto] min-w-[auto] text-left md:text-right">
          {date}
        </div>
      </div>

    </div>
  );
};
