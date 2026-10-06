import copy from "./copy.json";
import media from "./media.json";
import { EarCleaner2Article } from "./sections/Article";
import { EarCleaner2FloatingCta } from "./sections/FloatingCta";
import { EarCleaner2Footer } from "./sections/Footer";
import { EarCleaner2Header } from "./sections/Header";
import { EarCleaner2Hero } from "./sections/Hero";
import { EarCleaner2ProductList } from "./sections/ProductList";

export default function EarCleaner2Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-white [font-family:Roboto,sans-serif] text-base text-[#333]">
      <EarCleaner2Header logo={media.logo} />
      <EarCleaner2Hero
        hero={copy.hero}
        daysAgo={copy.daysAgo}
        authorName={copy.author.name}
        media={media}
      />
      <EarCleaner2ProductList
        copy={copy}
        media={media}
      />
      <EarCleaner2Article
        copy={copy}
        media={media}
      />
      <EarCleaner2FloatingCta
        floater={copy.floater}
        ctaUrl={copy.ctaUrl}
        productImage={media.products[0].image}
      />
      <EarCleaner2Footer
        footer={copy.footer}
        logo={media.logoWhite}
      />
    </div>
  );
}
