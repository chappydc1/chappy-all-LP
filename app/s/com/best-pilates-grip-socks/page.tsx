import copy from "./copy.json";
import media from "./media.json";
import { BestPilatesGripSocksArticle } from "./sections/Article";
import { BestPilatesGripSocksFloatingCta } from "./sections/FloatingCta";
import { BestPilatesGripSocksFooter } from "./sections/Footer";
import { BestPilatesGripSocksHeader } from "./sections/Header";
import { BestPilatesGripSocksHero } from "./sections/Hero";
import { BestPilatesGripSocksProductList } from "./sections/ProductList";

export default function BestPilatesGripSocksPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white [font-family:Roboto,sans-serif] text-base text-[#333]">
      <BestPilatesGripSocksHeader logo={media.logo} />
      <BestPilatesGripSocksHero
        hero={copy.hero}
        daysAgo={copy.daysAgo}
        authorName={copy.author.name}
        media={media}
      />
      <BestPilatesGripSocksProductList
        copy={copy}
        media={media}
      />
      <BestPilatesGripSocksArticle
        copy={copy}
        media={media}
      />
      <BestPilatesGripSocksFloatingCta
        floater={copy.floater}
        ctaUrl={copy.ctaUrl}
        productImage={media.products[0].image}
      />
      <BestPilatesGripSocksFooter
        footer={copy.footer}
        logo={media.logoWhite}
      />
    </div>
  );
}
