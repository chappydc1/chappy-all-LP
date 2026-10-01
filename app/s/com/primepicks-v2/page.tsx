import copy from "./copy.json";
import media from "./media.json";
import { PrimepicksV2Article } from "./sections/Article";
import { PrimepicksV2FloatingCta } from "./sections/FloatingCta";
import { PrimepicksV2Footer } from "./sections/Footer";
import { PrimepicksV2Header } from "./sections/Header";
import { PrimepicksV2Hero } from "./sections/Hero";
import { PrimepicksV2ProductList } from "./sections/ProductList";

export default function PrimepicksV2Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-white [font-family:Roboto,sans-serif] text-base text-[#333]">
      <PrimepicksV2Header logo={media.logo} />
      <PrimepicksV2Hero
        hero={copy.hero}
        daysAgo={copy.daysAgo}
        authorName={copy.author.name}
        media={media}
      />
      <PrimepicksV2ProductList
        copy={copy}
        media={media}
      />
      <PrimepicksV2Article
        copy={copy}
        media={media}
      />
      <PrimepicksV2FloatingCta
        floater={copy.floater}
        ctaUrl={copy.ctaUrl}
        productImage={media.products[0].image}
      />
      <PrimepicksV2Footer
        footer={copy.footer}
        logo={media.logoWhite}
      />
    </div>
  );
}
