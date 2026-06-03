import { Header } from "./sections/Header";
import { Main } from "./sections/Main";
import { Footer } from "./sections/Footer";
import { StickyBar } from "./components/StickyBar";
import type { Metadata } from "next";

import adv from "./adv.json";
import media from "./media.json";

export const metadata: Metadata = {
  title: adv.meta.title,
  description: adv.meta.description,
};

export default function ForbesPage() {
  return (
    <div className="text-black text-base font-normal font-euclidcircularb bg-white flex flex-col min-h-screen overflow-x-hidden">
      <Header logoSrc={media.logos.header} />
      <div className="pt-[50px]">
        <Main
          heroBgSrc={media.hero.background}
          heading={adv.hero.heading}
          subheading={adv.hero.subheading}
          date={adv.hero.date}
          products={adv.products}
          productImages={media.products}
          articleMedia={{ howItWorks: media.article.howItWorks }}
          ui={media.ui}
          articles={adv.articles}
          medviUrl={adv.products[0].visitUrl}
          remedyUrl={adv.products[1].visitUrl}
        />
      </div>
      <Footer
        logoSrc={media.logos.footer}
        disclaimer={adv.footer.disclaimer}
        copyright={adv.footer.copyright}
      />
      <StickyBar
        visitUrl={adv.stickyBar.visitUrl}
        logoSrc={media.products.medviStickyBar}
        promo={adv.stickyBar.promo}
        ctaText={adv.stickyBar.ctaText}
        ctaSubtext={adv.stickyBar.ctaSubtext}
        score={adv.stickyBar.score}
        scoreLabel={adv.stickyBar.scoreLabel}
        rightArrowSrc={media.ui.rightArrow}
        starEmptySrc={media.ui.starEmpty}
        starFullSrc={media.ui.starFull}
      />
    </div>
  );
}
