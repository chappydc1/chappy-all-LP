export type FeatureCardProps = {
  title: string;
  description: string;
  iconSrc: string;
};

export const FeatureCard = ({ title, description, iconSrc }: FeatureCardProps) => {
  return (
    <div className="border border-sky-950 rounded-md bg-white px-4 py-3 flex items-center gap-3">
      <div className="flex-1 min-w-0">
        <div className="text-sky-950 font-bold text-base md:text-lg leading-snug">
          {title}
        </div>
        <p className="text-sky-950 text-sm leading-snug mt-1 m-0">
          {description}
        </p>
      </div>
      <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-slate-200/60 flex items-center justify-center">
        <img src={iconSrc} alt="" className="w-9 h-9 md:w-10 md:h-10" />
      </div>
    </div>
  );
};
