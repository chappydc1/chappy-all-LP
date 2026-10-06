"use client";

import { useScrollReveal } from "../../../../../hooks/useScrollReveal";

export type EarCleanerReasonCardProps = {
  imageSrc: string;
  imageAlt: string;
  badgeText: string;
  heading: string;
  descriptionHtml: string;
  linkText?: string;
};

export const EarCleanerReasonCard = (props: EarCleanerReasonCardProps): JSX.Element => {
  const cardRef = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={cardRef}
      className="scroll-reveal relative items-center box-border gap-x-12 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto_auto] min-h-[auto] min-w-[auto] gap-y-6 w-full md:grid-cols-[0.75fr_1fr] md:grid-rows-[auto_auto] md:gap-y-4 md:w-auto"
    >
      <div className="box-border col-end-[span_1] col-start-[span_1] row-end-[span_2] row-start-[span_2] min-h-[auto] min-w-[auto]">
        <div className="relative box-border flex flex-col w-full overflow-hidden rounded-lg">
          <div className="relative box-border aspect-square max-w-full w-full mb-[52px] overflow-hidden rounded-t-[15px] md:max-w-[310px]">
            <img
              src={props.imageSrc}
              alt={props.imageAlt}
              loading="lazy"
              className="box-border h-full w-full object-cover"
            />
          </div>
          <div className="absolute text-white text-xl font-bold items-center bg-indigo-900 box-border flex h-[52px] justify-center tracking-[-0.2px] leading-[30px] w-full px-2 text-center bottom-[0%] inset-x-[0%]">
            <p className="box-border min-h-[auto] min-w-[auto]">{props.badgeText}</p>
          </div>
        </div>
      </div>
      <h2 className="relative text-[28px] font-bold self-end box-border tracking-[-0.8px] leading-[33.6px] min-h-[auto] min-w-[auto] -order-last md:order-none">
        {props.heading}
      </h2>
      <div className="items-start box-border gap-x-6 flex flex-col justify-center min-h-[auto] min-w-[auto] gap-y-6 md:gap-x-8 md:gap-y-8">
        <div
          className="text-[18.4px] self-start box-border tracking-[-0.368px] leading-[27.6px] min-h-[auto] min-w-[auto]"
          dangerouslySetInnerHTML={{ __html: props.descriptionHtml }}
        />
        {props.linkText && (
          <div className="items-center box-border gap-x-1 flex justify-start min-h-[auto] min-w-[auto] gap-y-1 group">
            <p className="text-lg font-bold box-border leading-[27px] min-h-[auto] min-w-[auto] transition-transform duration-200 group-hover:translate-x-1">
              👉
            </p>
            <a
              href="#offer"
              className="text-lg font-bold box-border block leading-[27px] min-h-[auto] min-w-[auto] underline underline-offset-2 decoration-indigo-900/40 hover:decoration-indigo-900 transition-all duration-200 hover:text-indigo-900"
            >
              {props.linkText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
