import copy from "./copy.json";
import links from "./links.json";
import media from "./media.json";
import { Sleeping2Article } from "./sections/Article";
import { Sleeping2FloatingCta } from "./sections/FloatingCta";
import { Sleeping2Footer } from "./sections/Footer";
import { Sleeping2Header } from "./sections/Header";
import { Sleeping2Hero } from "./sections/Hero";
import { Sleeping2ProductList } from "./sections/ProductList";

const DAYS_AGO = 2;

export default function Sleeping2Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-white [font-family:Roboto,sans-serif] text-base text-[#333]">
      <Sleeping2Header logo={media.logo} />
      <Sleeping2Hero
        hero={copy.hero}
        disclosureUrl={links.hero.disclosure}
        daysAgo={DAYS_AGO}
        authorName={copy.author.name}
        media={media}
      />
      <Sleeping2ProductList
        copy={copy}
        links={links}
        media={media}
      />
      <Sleeping2Article
        copy={copy}
        links={links}
        media={media}
        daysAgo={DAYS_AGO}
      />
      <Sleeping2FloatingCta
        floater={copy.stickyCta}
        ctaUrl={links.cta}
        productImage={media.products[0].image}
      />
      <Sleeping2Footer
        footer={copy.footer}
        linkUrls={links.footer}
        logo={media.logoWhite}
      />
    </div>
  );
}
