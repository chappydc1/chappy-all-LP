"use client";

import Image from "next/image";
import { useAdvertorialData } from "../../TopBar/context";
import { CtaButton } from "../../../components/CtaButton";
import { useCountdown } from "../../../hooks/useCountdown";

export function FinalCta() {
  const { content, media } = useAdvertorialData();
  const { finalCta } = content;
  const timer = useCountdown(finalCta.timerStartSeconds);

  return (
    <section className="bg-white px-4 py-7 text-center md:px-5 md:py-10">
      <div className="mx-auto max-w-[800px]">
        <p className="mb-1.5 text-[13px] font-bold uppercase tracking-[1.5px] text-[#888]">
          {finalCta.label}
        </p>
        <h2 className="mb-2 text-[26px] font-black leading-[1.2] text-black md:text-[32px]">
          {finalCta.headline}
        </h2>
        <p className="mx-auto mb-[18px] max-w-[500px] text-sm leading-[1.4] text-[#555]">
          {finalCta.sub}
        </p>

        <div className="mx-auto mb-5 flex max-w-[750px] flex-col overflow-hidden rounded-xl bg-adv-navy md:flex-row md:rounded-2xl">
          <div className="flex flex-1 flex-col items-center justify-center bg-adv-navy px-5 pb-2.5 pt-5 md:p-6">
            <Image
              src={media.finalCtaProductImage}
              alt="Saphire Happy Chews"
              width={260}
              height={260}
              className="h-auto w-full max-w-[220px] rounded-lg md:max-w-[260px]"
            />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center bg-white px-4 pb-6 pt-5 text-center md:px-6 md:py-[30px]">
            <p className="mb-1.5 text-[13px] font-bold uppercase tracking-[1.5px] text-[#999]">
              {finalCta.offerLabel}
            </p>
            <h3 className="mb-2 text-[22px] font-black leading-[1.2] text-black md:text-[26px]">
              {finalCta.headline}
            </h3>
            <p className="mb-3.5 text-[13px] leading-[1.4] text-[#555] md:text-sm">
              {finalCta.sub}
            </p>
            <div className="my-2.5 mb-3.5">
              <span className="mr-2 text-lg text-[#999] line-through">{finalCta.priceOld}</span>
              <span className="text-[28px] font-black text-adv-orange md:text-[34px]">
                {finalCta.priceNew}
              </span>
            </div>
            <CtaButton href={media.ctaUrl} className="mb-3.5">
              {finalCta.buttonLabel}
            </CtaButton>
            <div className="text-center text-[13px] font-bold leading-[1.6] text-black md:text-sm">
              {finalCta.timerLabel}{" "}
              <span className="text-adv-red [font-variant-numeric:tabular-nums]">{timer}</span>
              <br />
              BOTTLES LEFT: <span className="text-adv-red">{finalCta.bottlesLeft}</span>
            </div>
            <p className="mt-1 text-center text-[13px] font-bold leading-[1.6] text-black md:text-sm">
              Sell-Out Risk: <span className="text-adv-red">{finalCta.sellOutRisk}</span> |{" "}
              <strong>{finalCta.shipping}</strong>
            </p>
            <p
              className="mt-3 text-xs leading-[1.4] text-[#777]"
              dangerouslySetInnerHTML={{ __html: finalCta.guarantee }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
