import { BoughtPill, DealPill, TrustScore, VisitButton } from "../../../components/widgets";
import type { Sleeping2Copy, Sleeping2Product, Sleeping2ProductMedia } from "../../../types";

type PromoCardProps = {
  promo: Sleeping2Copy["topPick"];
  product: Sleeping2Product;
  href: string;
  productMedia: Sleeping2ProductMedia;
};

export function Sleeping2PromoCard({
  promo,
  product,
  href,
  productMedia,
}: PromoCardProps): JSX.Element {
  const score = (
    <TrustScore
      trust={product.trust}
      starsSrc={productMedia.ratingStars}
    />
  );

  return (
    <section className="mt-[23px] rounded-[5px] border-4 border-[#234E78] bg-white min-[993px]:mt-[45px]">
      <div className="grid px-4 pb-6 pt-4 min-[993px]:grid-cols-[240px_1fr_240px] min-[993px]:px-6 min-[993px]:py-8">
        <div className="hidden items-center justify-center border-r border-[#F2F2F2] pr-4 min-[993px]:flex">
          <img
            src={productMedia.image}
            alt={product.name}
            className="h-auto w-full"
          />
        </div>
        <div className="min-[993px]:hidden">{score}</div>
        <div className="my-4 flex flex-col justify-start gap-6 min-[993px]:my-0 min-[993px]:border-r min-[993px]:border-[#F2F2F2] min-[993px]:px-4">
          <div className="text-center text-2xl font-bold leading-[31.2px] text-[#333] min-[993px]:text-left">
            {promo.headline}
          </div>
          <div className="flex flex-col gap-[21px] text-sm leading-[21px] text-[#636363] min-[993px]:gap-[18px] min-[993px]:leading-[18px] [&_a]:font-bold [&_a]:text-[#0060C3] [&_a]:underline">
            {promo.body.map((html) => (
              <p
                key={html}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-[993px]:pl-4">
          <div className="mb-4 hidden min-[993px]:block">{score}</div>
          {product.deal && <DealPill text={product.deal} className="mb-2 min-[993px]:mb-3" />}
          <VisitButton
            href={href}
            label={product.buttonText}
          />
          {product.boughtThisWeek && <BoughtPill text={product.boughtThisWeek} className="mt-[18px] min-[993px]:mt-[22px]" />}
        </div>
      </div>
    </section>
  );
}
