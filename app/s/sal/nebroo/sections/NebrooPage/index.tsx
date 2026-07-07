"use client";

import { NebrooSaleBanner } from "../SaleBanner";
import { NebrooHeroSection } from "../HeroSection";
import { NebrooTrustBadges } from "../TrustBadges";
import { NebrooAsSeen } from "../AsSeen";
import { NebrooProductIntro } from "../ProductIntro";
import { NebrooVideoSection } from "../VideoSection";
import { NebrooPricingSection } from "../PricingSection";
import { NebrooInvisibleSection } from "../InvisibleSection";
import { NebrooNoisySection } from "../NoisySection";
import { NebrooComparisonTable } from "../ComparisonTable";
import { NebrooHowToUse } from "../HowToUse";
import { NebrooReviews } from "../Reviews";
import { NebrooOfferSection } from "../OfferSection";
import { NebrooMoneyBackGuarantee } from "../MoneyBackGuarantee";
import { NebrooSocialProof } from "../SocialProof";
import { NebrooFAQ } from "../FAQ";
import { NebrooDisclaimer } from "../Disclaimer";
import { NebrooStickyFooterCTA } from "../StickyFooterCTA";
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
      <NebrooSaleBanner />
      <NebrooHeroSection />
      <NebrooTrustBadges />
      <NebrooAsSeen />
      <NebrooProductIntro />
      <NebrooVideoSection />
      <NebrooPricingSection />
      <NebrooInvisibleSection />
      <NebrooNoisySection />
      <NebrooComparisonTable />
      <NebrooHowToUse />
      <NebrooReviews />
      <MissedTalksSection />
      <NebrooOfferSection />
      <NebrooMoneyBackGuarantee />
      <NebrooSocialProof />
      <NebrooFAQ />
      <NebrooDisclaimer />
      <NebrooStickyFooterCTA />
    </main>
  );
}
