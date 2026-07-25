"use client";

import { useAdvertorialData } from "../../TopBar/context";
import { CtaButton } from "../../../components/CtaButton";
import { useCountdown } from "../../../hooks/useCountdown";

export function MidCta() {
  const { content, media } = useAdvertorialData();
  const { midCta } = content;
  const timer = useCountdown(midCta.timerStartSeconds);

  return (
    <section className="bg-white px-4 py-7 text-center md:px-5 md:py-9">
      <div className="mx-auto max-w-[800px]">
        <p
          className="mb-2 text-sm font-medium leading-[1.3] text-black [&_strong]:font-extrabold [&_strong]:text-adv-red md:mb-1 md:text-base"
          dangerouslySetInnerHTML={{ __html: midCta.headingHtml }}
        />
        <CtaButton href={media.ctaUrl} className="mb-2.5">
          {midCta.buttonLabel}
        </CtaButton>
        <div className="flex flex-wrap items-center justify-center gap-1.5 text-[15px] font-extrabold uppercase text-black md:gap-2.5 md:text-xl">
          <span>{midCta.timerLabel}</span>
          <span className="text-adv-red [font-variant-numeric:tabular-nums]">{timer}</span>
        </div>
      </div>
    </section>
  );
}
