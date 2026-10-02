import copy from "./copy.json";
import media from "./media.json";
import { BestToeSocksArticle } from "./sections/Article";
import { BestToeSocksFloatingCta } from "./sections/FloatingCta";
import { BestToeSocksFooter } from "./sections/Footer";
import { BestToeSocksHeader } from "./sections/Header";
import { BestToeSocksHero } from "./sections/Hero";
import { BestToeSocksProductList } from "./sections/ProductList";

export default function BestToeSocksPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white [font-family:Roboto,sans-serif] text-base text-[#333]">
      <BestToeSocksHeader logo={media.logo} />
      <BestToeSocksHero
        hero={copy.hero}
        daysAgo={copy.daysAgo}
        authorName={copy.author.name}
        media={media}
      />
      <BestToeSocksProductList
        copy={copy}
        media={media}
      />
      <BestToeSocksArticle
        copy={copy}
        media={media}
      />
      <BestToeSocksFloatingCta
        floater={copy.floater}
        ctaUrl={copy.ctaUrl}
        productImage={media.products[0].image}
      />
      <BestToeSocksFooter
        footer={copy.footer}
        logo={media.logoWhite}
      />
    </div>
  );
}
