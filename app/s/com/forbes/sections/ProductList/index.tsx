"use client";

import { ForbesProductItem } from "./components/ForbesProductItem";

type Product = {
  name: string;
  score: string;
  scoreLabel: string;
  badgeText?: string;
  features: string[];
  visitLabel: string;
};

type ArticleData = {
  disclaimer: string;
  discovery: { headline: string; body: string[] };
  methodology: {
    headline: string;
    intro: string;
    criteria: { label: string; text: string }[];
    closing: string;
    medviNote: string;
    remedyNote: string;
  };
  mechanism: { headline: string; body: string[] };
  benefits: {
    headline: string;
    items: { emoji: string; label: string; text: string }[];
    closing: string;
  };
  offer: { headline: string; subheadline: string; ctaText: string; ctaSubtext: string };
};

type ProductImages = Record<string, string>;

type ProductListProps = {
  products: Product[];
  productLinks: string[];
  productImages: ProductImages;
  articleMedia: { howItWorks: string };
  ui: { trophyPrimary: string; trophyHealth: string };
  articles: ArticleData;
  medviUrl: string;
  remedyUrl: string;
  offerUrl: string;
};

const SCORE_WIDTH_CLASSES: Record<string, string> = {
  "9.9": "md:w-[99%]",
  "9.7": "md:w-[97%]",
  "9.6": "md:w-[96%]",
  "9.4": "md:w-[94%]",
  "9.1": "md:w-[91%]",
  "9.0": "md:w-[90%]",
};

const PRODUCT_IMAGE_KEYS = [
  "medvi", "remedyMeds", "noom", "hers", "hims", "sprout", "ivim", "eden",
] as const;

/* Article text styles */
const articleProse = "text-[var(--color-neutral-800)] text-base leading-normal md:text-xl md:leading-[26px]";
const h3Style = "text-[var(--color-fg-heading)] text-[18.72px] font-bold leading-normal mb-[14.4px] md:text-2xl md:leading-[26px] font-euclidcircularb";

export const ForbesProductList = ({
  products, productLinks, productImages, articleMedia, ui, articles, medviUrl, remedyUrl, offerUrl,
}: ProductListProps) => {
  return (
    <div className="relative flex flex-col shrink-0 mt-1 pb-1">
      <div className="max-w-[967px] w-full mx-auto px-[15px]">
        <div className="relative flex flex-col shrink-0">

          {/* ── Product list ── */}
          <div className="relative flex flex-col shrink-0 mt-4 mx-auto w-full">
            <ul className="list-none pl-0 w-full">
              {products.map((product, index) => (
                <ForbesProductItem
                  key={index}
                  rank={index + 1}
                  imageSrc={productImages[PRODUCT_IMAGE_KEYS[index]] ?? ""}
                  imageAlt={product.name}
                  score={product.score}
                  scoreLabel={product.scoreLabel}
                  scoreClass={SCORE_WIDTH_CLASSES[product.score] ?? ""}
                  features={product.features}
                  visitUrl={productLinks[index]}
                  visitLabel={product.visitLabel}
                  isBest={index === 0}
                  badgeText={product.badgeText}
                  badgeTrophySrc={index === 0 ? ui.trophyPrimary : ui.trophyHealth}
                />
              ))}
            </ul>
          </div>

          {/* ── Disclaimer ── */}
          <div className="mt-2 text-[var(--color-neutral-800)] text-xs leading-4" style={{ fontFamily: "var(--font-family-serif)" }}>
            <p><em>{articles.disclaimer}</em></p>
          </div>

          {/* ── GLP-1s Accessible + Evaluation ── */}
          <div className="mt-6" style={{ fontFamily: "var(--font-family-serif)" }}>
            <h3 className={h3Style}>{articles.discovery.headline}</h3>
            {articles.discovery.body.map((para, i) => (
              <p key={i} className={`${articleProse} my-4`}>{para}</p>
            ))}

            <h3 className={`${h3Style} mt-[38px]`}>{articles.methodology.headline}</h3>
            <p className={`${articleProse} mb-4`}>{articles.methodology.intro}</p>
            <p className={`${articleProse} my-4`}>Each provider was assessed using <strong>four core criteria</strong>:</p>
            <ul className={`${articleProse} list-outside my-[25px] pl-10 md:list-inside md:pl-4`}>
              {articles.methodology.criteria.map((c, i) => (
                <li key={i} className="mb-2.5 pl-[7.5px]">
                  <strong>{c.label}</strong>{" "}{c.text}
                </li>
              ))}
            </ul>
            <p className={`${articleProse} my-4`}>{articles.methodology.closing}</p>
            <p className={`${articleProse} my-4`}>
              <a href={medviUrl} className="text-[var(--color-primary-700)] hover:underline transition-colors" target="_blank" rel="noopener noreferrer">MEDVi</a>{" "}
              <span>{articles.methodology.medviNote}</span>
            </p>
            <p className={`${articleProse} mt-4`}>
              <a href={remedyUrl} className="text-[var(--color-primary-700)] hover:underline transition-colors" target="_blank" rel="noopener noreferrer">Remedy Meds</a>{" "}
              <span>{articles.methodology.remedyNote}</span>
            </p>
          </div>

          {/* ── How it works + image ── */}
          <div className="relative flex flex-col shrink-0">
            <div className="items-stretch flex flex-col h-full md:flex-row">
              <div className="w-full md:w-[calc(50%-10px)]" style={{ fontFamily: "var(--font-family-serif)" }}>
                <div className="mt-6 mb-4">
                  <h3 className={h3Style}><strong>{articles.mechanism.headline}</strong></h3>
                  {articles.mechanism.body.map((para, i) => (
                    <p key={i} className={`${articleProse} ${i === 0 ? "mb-4" : "mt-4"}`}>{para}</p>
                  ))}
                </div>
              </div>
              <div className="w-full ml-0 md:w-[calc(50%-10px)] md:ml-5">
                <div className="relative flex flex-col shrink-0 max-w-[626px] min-h-5 min-w-5 w-full overflow-hidden mt-8 mb-auto mx-auto rounded-2xl md:max-w-[396px]">
                  <img
                    role="presentation"
                    src={articleMedia.howItWorks}
                    sizes="(max-width: 638px) 93vw, (max-width: 998px) 40vw, 29vw"
                    className="absolute h-full max-w-full object-contain w-full left-0 top-0"
                    alt=""
                  />
                  <div className="pointer-events-none w-full pt-[60%]" />
                </div>
              </div>
            </div>
          </div>

          {/* ── What it does ── */}
          <div className="mt-6" style={{ fontFamily: "var(--font-family-serif)" }}>
            <h3 className={h3Style}><strong>{articles.benefits.headline}</strong></h3>
            {articles.benefits.items.map((point, i) => (
              <p key={i} className={`${articleProse} ${i === 0 ? "mb-4" : i === articles.benefits.items.length - 1 ? "mt-4" : "my-4"}`}>
                {point.emoji} <strong>{point.label}</strong>{" "}{point.text}
              </p>
            ))}
          </div>

          {/* ── Weekly injection ── */}
          <div className="mt-2" style={{ fontFamily: "var(--font-family-serif)" }}>
            <p className={articleProse}><strong>{articles.benefits.closing}</strong></p>
          </div>

          {/* ── Inline CTA card ── */}
          <div className="mt-4 mb-[19px]">
            <div
              className="text-white text-sm leading-[21px] w-full rounded border border-[var(--color-neutral-200)] relative transition-shadow duration-300 hover:shadow-[rgba(24,28,71,0.12)_0px_6px_24px_0px]"
              style={{ backgroundColor: "var(--wui-global-color-primary)", boxShadow: "var(--box-shadow-4dp)" }}
            >
              <div className="relative flex gap-8 px-[34px] py-[30px]">
                <div className="flex flex-col grow justify-center pl-2">
                  <h3 className="text-[28px] font-bold leading-10">{articles.offer.headline}</h3>
                  <p className="text-lg leading-[27px] mt-2">{articles.offer.subheadline}</p>
                </div>
                <div className="flex flex-col justify-center gap-4 w-[220px]">
                  <span className="inline-flex flex-col w-full">
                    <a
                      href={offerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-primary-700)] font-semibold bg-[var(--color-primary-50)] flex items-center justify-center gap-2 leading-6 min-h-10 border border-[var(--color-primary-700)] px-4 py-3 rounded transition-all duration-200 hover:bg-white hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]"
                    >
                      <span>{articles.offer.ctaText}</span>
                    </a>
                    <span className="text-xs font-medium block leading-4 text-center pt-2">
                      {articles.offer.ctaSubtext}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
