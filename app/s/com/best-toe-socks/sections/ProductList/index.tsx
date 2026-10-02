"use client";

import { useState } from "react";

import { ChevronDownIcon } from "../../components/icons";
import type { BestToeSocksCopy, BestToeSocksMedia } from "../../types";
import { BestToeSocksProductCard } from "./components/BestToeSocksProductCard";
import { BestToeSocksPromoCard } from "./components/BestToeSocksPromoCard";

const INITIAL_VISIBLE_PRODUCTS = 3;

type ProductListProps = {
  copy: BestToeSocksCopy;
  media: BestToeSocksMedia;
};

export function BestToeSocksProductList({ copy, media }: ProductListProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const visibleProducts = expanded
    ? copy.products
    : copy.products.slice(0, INITIAL_VISIBLE_PRODUCTS);

  return (
    <div className="mx-auto max-w-[1032px] px-4 pt-3 md:pt-0">
      <div className="flex flex-col gap-6 text-sm leading-[1.5] text-[#636363] md:text-lg md:leading-6 [&_a]:font-bold [&_a]:text-[#0060C3] [&_a]:underline">
        {copy.hero.introParagraphs.map((html) => (
          <p
            key={html}
            className="hidden md:block"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ))}
        {copy.hero.introMobileParagraphs.map((html) => (
          <p
            key={html}
            className="md:hidden"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ))}
      </div>

      {visibleProducts.map((product, index) => (
        <BestToeSocksProductCard
          key={product.name}
          product={product}
          productMedia={media.products[index]}
          badgeSrc={media.smarterChoiceBadge}
          labels={copy.labels}
        />
      ))}

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        className="mb-8 mt-14 flex w-full flex-col md:mb-12 md:mt-16"
      >
        <span className="relative block h-px w-full bg-[#E0E0E0]">
          <span className="absolute -top-[22px] left-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-[#F9F9F9] shadow-[0_0_0_1px_#E0E0E0]">
            <ChevronDownIcon className={expanded ? "rotate-180" : ""} />
          </span>
        </span>
        <span className="mt-12 block w-full text-center text-lg leading-[normal] text-[#4F4F4F]">
          {expanded ? copy.toggle.less : copy.toggle.more}
        </span>
      </button>

      <BestToeSocksPromoCard
        promo={copy.promoCard}
        product={copy.products[0]}
        productMedia={media.products[0]}
      />
    </div>
  );
}
