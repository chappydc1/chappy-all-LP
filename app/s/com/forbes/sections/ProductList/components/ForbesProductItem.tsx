"use client";

export type ForbesProductItemProps = {
  rank: number;
  imageSrc: string;
  imageAlt: string;
  score: string;
  scoreLabel: string;
  scoreClass: string;
  features: string[];
  visitUrl: string;
  visitLabel: string;
  isBest?: boolean;
  badgeText?: string;
  badgeTrophySrc?: string;
};

const RatingBox = ({ score, scoreLabel, scoreClass }: { score: string; scoreLabel: string; scoreClass: string }) => (
  <div className="forbes-rating-box">
    <div className="forbes-rating-box__number">{score}</div>
    <div className="forbes-rating-box__label">
      <span>{scoreLabel}</span>
      <div className="forbes-stars">
        <div className={`forbes-stars__fill ${scoreClass}`} />
      </div>
    </div>
  </div>
);

export const ForbesProductItem = (props: ForbesProductItemProps) => {
  const cardClass = props.isBest
    ? "forbes-product-card forbes-product-card--best"
    : "forbes-product-card";

  return (
    <li className="list-none">
      <div className={`${cardClass} group md:pb-4 md:px-6`}>
        {/* Superlative badge */}
        {props.badgeText && (
          <div className="block md:flex md:items-center mb-0 md:mb-2">
            <div className={`forbes-badge my-2 ${props.isBest ? "forbes-badge--primary" : "forbes-badge--health"}`}>
              <div
                className="forbes-badge__icon"
                style={{
                  backgroundImage: `url('${props.badgeTrophySrc ?? "/images/forbes/trophy-primary.svg"}')`,
                }}
              />
              <span className="text-white text-xs font-bold leading-[18px] z-[1] relative">
                {props.badgeText}
              </span>
            </div>
          </div>
        )}

        {/* Card body */}
        <div className="block gap-[34px] md:flex">
          {/* Left: rank + logo stacked */}
          <div className="shrink-0 md:align-top">
            <div className="flex flex-col items-start w-full md:w-[141px]">
              {/* Rank */}
              <span className="text-[var(--color-neutral-900)] text-[40px] md:text-[56px] font-bold leading-none">
                {props.rank}
              </span>
              {/* Logo below rank */}
              <div className="mt-2 md:max-h-8 md:max-w-[131px] md:w-[131px]">
                <img
                  src={props.imageSrc}
                  alt={props.imageAlt}
                  className="h-auto max-w-[120px] object-contain md:h-[43px] md:max-w-[141px]"
                />
              </div>
            </div>
          </div>

          {/* Middle: features */}
          <div className="grow min-h-[auto] min-w-[auto]">
            <div className="hidden md:block my-4 mb-5 border-t border-[var(--color-neutral-200)]" />
            <ul className="pl-10 md:pl-0 list-disc md:list-none">
              {props.features.map((feature, i) => (
                <li
                  key={i}
                  className="leading-normal mb-2.5 md:relative md:flex md:items-start md:gap-3 md:leading-5"
                >
                  <div className="forbes-feature-tick" />
                  <span className="inline md:block group-hover:underline">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col shrink-0 justify-start w-full mb-4 md:w-[183px] md:items-stretch">
            {/* Score — always visible */}
            <div className="flex justify-start mb-3 gap-3">
              <div className="w-full">
                <RatingBox score={props.score} scoreLabel={props.scoreLabel} scoreClass={props.scoreClass} />
              </div>
            </div>

            {/* Visit button */}
            <a
              href={props.visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="forbes-cta mb-2"
            >
              <span className="group-hover:underline">Visit Site</span>
              <img
                src="/images/forbes/right-arrow.svg"
                className="h-6 w-6 shrink-0"
                alt=""
              />
            </a>

            <p className="text-xs leading-4 text-center w-full text-[var(--color-neutral-600)]">
              {props.visitLabel}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
