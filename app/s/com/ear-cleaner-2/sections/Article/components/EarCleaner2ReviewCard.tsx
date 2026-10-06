import { BoughtPill, DealPill, RatingBars, TrustScore, VisitButton } from "../../../components/widgets";
import type { EarCleaner2Copy, EarCleaner2Product, EarCleaner2ProductMedia } from "../../../types";

type ReviewCardProps = {
  card: EarCleaner2Copy["reviewCard"];
  product: EarCleaner2Product;
  productMedia: EarCleaner2ProductMedia;
};

export function EarCleaner2ReviewCard({
  card,
  product,
  productMedia,
}: ReviewCardProps): JSX.Element {
  return (
    <section className="mb-6 grid gap-4 rounded-[5px] border-4 border-[#234E78] bg-white px-4 py-6 shadow-[0_4px_10px_rgba(0,0,0,0.2)] md:grid-cols-2 md:gap-10 md:px-6 md:py-8">
      <div>
        <div className="flex items-center justify-evenly md:mb-6 md:justify-between">
          <div className="flex max-w-[120px] items-center justify-center">
            <img
              src={productMedia.image}
              alt={product.name}
              className="h-auto w-full"
            />
          </div>
          <div className="mx-[7px] h-[120px] w-px bg-[#E9E9E9] md:hidden" />
          <TrustScore
            trust={product.trust}
            starsSrc={productMedia.ratingStars}
          />
        </div>
        <div className="hidden md:block">
          <RatingBars ratings={product.ratings} />
        </div>
      </div>
      <div>
        <h4 className="hidden text-center text-2xl font-bold leading-[31.2px] text-[#333] md:block">{card.heading}</h4>
        <p className="my-4 hidden text-sm leading-[21px] text-[#636363] md:block">{card.text}</p>
        {product.deal && <DealPill text={product.deal} className="mb-2" />}
        <VisitButton
          href={product.url}
          label={product.buttonText}
        />
        {product.boughtThisWeek && <BoughtPill text={product.boughtThisWeek} className="mt-[18px]" />}
      </div>
    </section>
  );
}
