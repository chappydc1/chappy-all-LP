"use client";

import { useAdvertorialData } from "../VitalityDigestTopBar/context";
import { VitalityDigestCtaButton } from "../components/VitalityDigestCtaButton";

export const VitalityDigestStickyCtaBar = (): React.ReactElement => {
  const { content } = useAdvertorialData();

  return (
    <section className="items-center bg-black/30 flex flex-col justify-items-center relative w-full p-2.5 sticky bottom-0 z-10">
      <div className="flex flex-col max-w-[1170px] w-full">
        <VitalityDigestCtaButton
          href={content.ctaUrl}
          className="border-b-[3px] border-green-700 font-bold tracking-[0.44px] leading-[22px] text-[22px] m-[5px]"
        >
          {content.stickyBar.ctaText}
        </VitalityDigestCtaButton>
      </div>
    </section>
  );
};
