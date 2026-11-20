import { BoughtPill, DealPill, FeatureList, RatingBars, TrustScore, VisitButton } from "../../../components/widgets";
import type { BestToeSocksCopy, BestToeSocksProduct, BestToeSocksProductMedia } from "../../../types";

type ProductCardProps = {
  product: BestToeSocksProduct;
  href: string;
  featured: boolean;
  productMedia: BestToeSocksProductMedia;
  badgeSrc: string;
  labels: BestToeSocksCopy["ui"];
};

const DIVIDER = <div className="my-4 h-px bg-[#E9E9E9]" />;

export function BestToeSocksProductCard({
  product,
  href,
  featured,
  productMedia,
  badgeSrc,
  labels,
}: ProductCardProps): JSX.Element {
  const variant = featured ? "primary" : "secondary";
  const frame = featured
    ? "border-4 border-[#234E78] shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
    : "border border-[#E0E0E0]";
  const productImage = (
    <img
      src={productMedia.image}
      alt={product.name}
      className="h-auto w-full"
    />
  );

  return (
    <section className={`mt-[23px] rounded-[5px] bg-white min-[993px]:mt-[45px] ${frame}`}>
      <div className="relative flex flex-col items-start border-b border-[#E9E9E9] px-4 py-2 min-[993px]:flex-row min-[993px]:items-center min-[993px]:py-4 min-[993px]:pr-6">
        <h4 className="text-xl font-bold leading-5 text-[#333] min-[993px]:text-2xl min-[993px]:leading-[31.2px]">
          {product.name}
        </h4>
        <div className="mx-4 hidden h-6 w-px bg-[#333] min-[993px]:block" />
        <h4
          className="mt-1 text-sm font-bold leading-[normal] text-[#333] min-[993px]:mt-0 min-[993px]:text-2xl min-[993px]:leading-[31.2px] [&_a]:text-[#0060C3] [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: product.subtitleHtml }}
        />
        {featured && (
          <img
            src={badgeSrc}
            alt="Smarter choice #1"
            className="absolute -top-[18px] right-2 z-10 h-[72px] w-[82px] bg-white object-contain min-[993px]:-top-[29px] min-[993px]:right-4 min-[993px]:h-[100px] min-[993px]:w-[100px]"
          />
        )}
      </div>

      <div className="hidden grid-cols-[repeat(4,auto)] px-4 py-6 min-[993px]:grid">
        <div className="flex flex-col justify-between border-r border-[#F2F2F2] pr-4">
          <div className="mx-auto w-full max-w-[168px]">{productImage}</div>
          <RatingBars ratings={product.ratings} />
        </div>
        <div className="border-r border-[#F2F2F2] px-4">
          <FeatureList
            items={product.pros}
            kind="pros"
            heading={labels.pros}
          />
        </div>
        <div className="border-r border-[#F2F2F2] px-4">
          <FeatureList
            items={product.cons}
            kind="cons"
            heading={labels.cons}
          />
        </div>
        <div className="pl-4">
          <TrustScore
            trust={product.trust}
            starsSrc={productMedia.ratingStars}
            className="mb-4"
          />
          {product.deal && <DealPill text={product.deal} className="mb-3" />}
          <VisitButton
            href={href}
            label={product.buttonText}
            variant={variant}
          />
          {product.boughtThisWeek && <BoughtPill text={product.boughtThisWeek} className="mt-[22px]" />}
        </div>
      </div>

      <div className="grid px-4 pb-6 pt-4 min-[993px]:hidden">
        <div className="flex items-center justify-evenly">
          <div className="flex max-w-[120px] items-center justify-center">{productImage}</div>
          <div className="mx-[7px] h-[120px] w-px bg-[#E9E9E9]" />
          <TrustScore
            trust={product.trust}
            starsSrc={productMedia.ratingStars}
          />
        </div>
        {featured && (
          <div className="mt-4">
            {product.deal && <DealPill text={product.deal} className="mb-2" />}
            <VisitButton
              href={href}
              label={product.buttonText}
              variant={variant}
            />
            {product.boughtThisWeek && <BoughtPill text={product.boughtThisWeek} className="mt-[18px]" />}
          </div>
        )}
        {DIVIDER}
        <RatingBars ratings={product.ratings} />
        {DIVIDER}
        <FeatureList
          items={product.pros}
          kind="pros"
          heading={labels.pros}
          itemClassName="text-sm leading-4"
        />
        {DIVIDER}
        <FeatureList
          items={product.cons}
          kind="cons"
          heading={labels.cons}
          itemClassName="text-sm leading-4"
        />
        {DIVIDER}
        <VisitButton
          href={href}
          label={product.buttonText}
          variant={variant}
        />
        {featured && (
          <a
            href="#product-info"
            className="mt-[15px] text-center font-bold leading-6 text-[#0060C3] underline"
          >
            {labels.readFullReview}
          </a>
        )}
      </div>
    </section>
  );
}
