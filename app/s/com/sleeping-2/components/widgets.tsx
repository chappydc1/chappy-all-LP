import type { Sleeping2Rating, Sleeping2Trust } from "../types";
import { CheckIcon, ChevronRightIcon, CrossIcon, HeartIcon } from "./icons";

type VisitButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function VisitButton({
  href,
  label,
  variant = "primary",
  className = "",
}: VisitButtonProps): JSX.Element {
  const colors = variant === "primary"
    ? "bg-[#D2152D] hover:bg-[#E51731]"
    : "bg-[#0080F6] hover:bg-[#0085FF]";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex w-full items-center justify-center gap-3 rounded-[20px] px-6 py-[15px] text-center text-xl font-bold leading-6 text-white no-underline transition-colors ${colors} ${className}`}
    >
      {label}
      <ChevronRightIcon />
    </a>
  );
}

export function TrustScore({
  trust,
  starsSrc,
  className = "",
}: {
  trust: Sleeping2Trust;
  starsSrc: string;
  className?: string;
}): JSX.Element {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <p className="text-sm font-bold leading-[18px] text-[#333]">{trust.label}</p>
      <h4 className="text-[36px] font-bold leading-10 text-[#333]">{trust.score}</h4>
      <img
        src={starsSrc}
        alt={`${trust.score} rating`}
        className="my-1 h-[18px] w-[98px]"
      />
      <p className="mb-0.5 text-sm font-semibold leading-[18px] text-[#4F4F4F]">{trust.verdict}</p>
      <p className="text-xs leading-4 text-[#828282]">{trust.reviews}</p>
    </div>
  );
}

export function RatingBars({ ratings }: { ratings: Sleeping2Rating[] }): JSX.Element {
  return (
    <div className="grid grid-cols-[max-content_1fr_max-content] items-center gap-x-1 gap-y-1.5 text-xs font-bold leading-4 text-[#333]">
      {ratings.map((rating) => (
        <div
          key={rating.label}
          className="contents"
        >
          <div className="whitespace-nowrap uppercase">{rating.label}</div>
          <div className="h-2 min-w-[89px] overflow-hidden rounded-full bg-[#D1D1D1]">
            <div
              className="h-full bg-[#00A871]"
              style={{ width: `${Number(rating.score) * 10}%` }}
            />
          </div>
          <div className="whitespace-nowrap">
            {rating.score}
            /10
          </div>
        </div>
      ))}
    </div>
  );
}

export function DealPill({ text, className = "" }: { text: string; className?: string }): JSX.Element {
  return (
    <div className={`mx-auto flex w-fit items-center justify-center rounded-[10px] bg-[#F0DA94] px-3 py-1 ${className}`}>
      <p className="text-center text-sm font-bold leading-4 text-[#7C5A2D]">{text}</p>
    </div>
  );
}

export function BoughtPill({ text, className = "" }: { text: string; className?: string }): JSX.Element {
  return (
    <div className={`relative mx-auto flex w-fit items-center gap-1 rounded-[10px] bg-white px-3 py-2 shadow-[0_1px_10px_rgba(0,0,0,0.15)] before:absolute before:-top-1.5 before:left-1/2 before:-translate-x-1/2 before:border-x-[6px] before:border-b-[6px] before:border-x-transparent before:border-b-white before:content-[''] ${className}`}>
      <HeartIcon />
      <p className="text-xs font-semibold leading-3 text-[#4F4F4F]">{text}</p>
    </div>
  );
}

type FeatureListProps = {
  items: string[];
  kind: "pros" | "cons";
  heading: string;
  itemClassName?: string;
};

export function FeatureList({
  items,
  kind,
  heading,
  itemClassName = "text-xs leading-4",
}: FeatureListProps): JSX.Element {
  const headingColor = kind === "pros" ? "text-[#00A871]" : "text-[#D2152D]";
  return (
    <div>
      <h3 className={`mb-4 text-lg font-bold leading-5 ${headingColor}`}>{heading}</h3>
      <ul className="flex flex-col">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start [&:not(:last-child)]:mb-2"
          >
            <p className={`flex gap-2 text-[#636363] ${itemClassName}`}>
              {kind === "pros" ? <CheckIcon /> : <CrossIcon />}
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
