import copy from "./copy.json";
import links from "./links.json";
import media from "./media.json";
import { BestToeSocksArticle } from "./sections/Article";
import { BestToeSocksFloatingCta } from "./sections/FloatingCta";
import { BestToeSocksFooter } from "./sections/Footer";
import { BestToeSocksHeader } from "./sections/Header";
import { BestToeSocksHero } from "./sections/Hero";
import { BestToeSocksProductList } from "./sections/ProductList";

const DAYS_AGO = 2;

export default function BestToeSocksPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white [font-family:Roboto,sans-serif] text-base text-[#333]">
      <BestToeSocksHeader logo={media.logo} />
      <BestToeSocksHero
        hero={copy.hero}
        disclosureUrl={links.hero.disclosure}
        daysAgo={DAYS_AGO}
        authorName={copy.author.name}
        media={media}
      />
      <BestToeSocksProductList
        copy={copy}
        links={links}
        media={media}
      />
      <BestToeSocksArticle
        copy={copy}
        links={links}
        media={media}
        daysAgo={DAYS_AGO}
      />
      <BestToeSocksFloatingCta
        floater={copy.stickyCta}
        ctaUrl={links.cta}
        productImage={media.products[0].image}
      />
      <BestToeSocksFooter
        footer={copy.footer}
        linkUrls={links.footer}
        logo={media.logoWhite}
      />
    </div>
  );
}
