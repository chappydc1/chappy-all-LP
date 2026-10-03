import copy from "./copy.json";
import links from "./links.json";
import media from "./media.json";
import { PrimepicksV2Article } from "./sections/Article";
import { PrimepicksV2FloatingCta } from "./sections/FloatingCta";
import { PrimepicksV2Footer } from "./sections/Footer";
import { PrimepicksV2Header } from "./sections/Header";
import { PrimepicksV2Hero } from "./sections/Hero";
import { PrimepicksV2ProductList } from "./sections/ProductList";

const DAYS_AGO = 2;

export default function PrimepicksV2Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-white [font-family:Roboto,sans-serif] text-base text-[#333]">
      <PrimepicksV2Header logo={media.logo} />
      <PrimepicksV2Hero
        hero={copy.hero}
        disclosureUrl={links.hero.disclosure}
        daysAgo={DAYS_AGO}
        authorName={copy.author.name}
        media={media}
      />
      <PrimepicksV2ProductList
        copy={copy}
        links={links}
        media={media}
      />
      <PrimepicksV2Article
        copy={copy}
        links={links}
        media={media}
        daysAgo={DAYS_AGO}
      />
      <PrimepicksV2FloatingCta
        floater={copy.stickyCta}
        ctaUrl={links.cta}
        productImage={media.products[0].image}
      />
      <PrimepicksV2Footer
        footer={copy.footer}
        linkUrls={links.footer}
        logo={media.logoWhite}
      />
    </div>
  );
}
