import { ForbesHeader } from "./sections/Header";
import { ForbesMain } from "./sections/Main";
import { ForbesFooter } from "./sections/Footer";
import { ForbesStickyBar } from "./components/ForbesStickyBar";
import type { Metadata } from "next";

import adv from "./copy.json";
import links from "./links.json";
import media from "./media.json";

export const metadata: Metadata = {
  title: adv.seo.title,
  description: adv.seo.description,
};

export default function ForbesPage() {
  return (
    <div className="text-black text-base font-normal font-euclidcircularb bg-white flex flex-col min-h-screen overflow-x-hidden">
      <ForbesHeader logoSrc={media.logos.header} />
      <div className="pt-[50px]">
        <ForbesMain
          heroBgSrc={media.hero.background}
          heading={adv.hero.headline}
          subheading={adv.hero.subheadline}
          date={adv.hero.date}
          products={adv.productRankings}
          productLinks={links.productRankings}
          productImages={media.products}
          articleMedia={{ howItWorks: media.article.howItWorks }}
          ui={media.ui}
          articles={{
            disclaimer: adv.disclaimer,
            discovery: adv.discovery,
            methodology: adv.methodology,
            mechanism: adv.mechanism,
            benefits: adv.benefits,
            offer: adv.offer,
          }}
          medviUrl={links.productRankings[0]}
          remedyUrl={links.productRankings[1]}
          offerUrl={links.offer}
        />
      </div>
      <ForbesFooter
        logoSrc={media.logos.footer}
        disclaimer={adv.footer.disclaimer}
        copyright={adv.footer.copyright}
      />
      <ForbesStickyBar
        visitUrl={links.stickyCta}
        logoSrc={media.products.medviStickyBar}
        promo={adv.stickyCta.promo}
        ctaText={adv.stickyCta.ctaText}
        ctaSubtext={adv.stickyCta.ctaSubtext}
        score={adv.stickyCta.score}
        scoreLabel={adv.stickyCta.scoreLabel}
        rightArrowSrc={media.ui.rightArrow}
        starEmptySrc={media.ui.starEmpty}
        starFullSrc={media.ui.starFull}
      />
    </div>
  );
}
