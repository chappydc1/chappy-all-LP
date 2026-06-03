"use client";

import { SaleBanner } from "../SaleBanner";
import { HeroSection } from "../HeroSection";
import { TrustBadges } from "../TrustBadges";
import { AsSeen } from "../AsSeen";
import { ProductIntro } from "../ProductIntro";
import { VideoSection } from "../VideoSection";
import { PricingSection } from "../PricingSection";
import { InvisibleSection } from "../InvisibleSection";
import { NoisySection } from "../NoisySection";
import { ComparisonTable } from "../ComparisonTable";
import { HowToUse } from "../HowToUse";
import { Reviews } from "../Reviews";
import { OfferSection } from "../OfferSection";
import { MoneyBackGuarantee } from "../MoneyBackGuarantee";
import { SocialProof } from "../SocialProof";
import { FAQ } from "../FAQ";
import { Disclaimer } from "../Disclaimer";
import { StickyFooterCTA } from "../StickyFooterCTA";
import { useScrollReveal } from "../../hooks/useScrollReveal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AdvJson = Record<string, any>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MediaJson = Record<string, any>;

const MissedTalksSection = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <div className="items-stretch bg-sky-100 box-border caret-transparent flex flex-wrap justify-center max-w-full px-2.5 py-5 md:flex-nowrap">
      <div
        ref={ref}
        className={`relative items-stretch box-border caret-transparent block basis-full flex-col grow max-w-[1200px] min-h-[25px] w-min mx-0 py-px md:flex md:basis-0 md:mx-[10%] reveal ${visible ? "visible" : ""}`}
      >
        <div className="text-[25px] font-bold box-border caret-transparent leading-8 min-h-0 min-w-0 text-center font-montserrat md:text-4xl md:leading-[47px] md:min-h-[auto] md:min-w-[auto]">
          <div className="text-2xl box-border caret-transparent leading-[38px] md:text-4xl md:leading-[47px]">
            Don&#39;t Let Missed Talks Make You Feel Far From Your Family and
            Friends.
          </div>
        </div>
      </div>
    </div>
  );
};

export function NebrooPage({ adv, media }: { adv: AdvJson; media: MediaJson }) {
  return (
    <main className="text-neutral-800 text-base not-italic normal-nums font-normal bg-white">
      <SaleBanner />
      <HeroSection />
      <TrustBadges />
      <AsSeen />
      <ProductIntro />
      <VideoSection />
      <PricingSection />
      <InvisibleSection />
      <NoisySection />
      <ComparisonTable />
      <HowToUse />
      <Reviews />
      <MissedTalksSection />
      <OfferSection />
      <MoneyBackGuarantee />
      <SocialProof />
      <FAQ />
      <Disclaimer />
      <StickyFooterCTA />
    </main>
  );
}
