import { FeatureList, RatingBars, TrustScore, VisitButton } from "../../../components/widgets";
import type { PrimepicksV2Copy, PrimepicksV2Product, PrimepicksV2ProductMedia } from "../../../types";

type SidebarProps = {
  product: PrimepicksV2Product;
  productMedia: PrimepicksV2ProductMedia;
  labels: PrimepicksV2Copy["labels"];
};

export function PrimepicksV2Sidebar({
  product,
  productMedia,
  labels,
}: SidebarProps): JSX.Element {
  return (
    <aside className="sticky top-0 hidden w-[298px] shrink-0 self-start rounded-[5px] border border-[#E0E0E0] bg-[#FAFAFA] min-[1032px]:block">
      <section className="p-4">
        <div className="mb-4 rounded-[5px] border border-[#E0E0E0] bg-white p-2">
          <TrustScore
            trust={product.trust}
            starsSrc={productMedia.ratingStars}
          />
        </div>
        <div className="mb-4">
          <RatingBars ratings={product.ratings} />
        </div>
        <div className="mb-4">
          <FeatureList
            items={product.pros}
            kind="pros"
            heading={labels.pros}
            itemClassName="text-base leading-[19px]"
          />
        </div>
        <div className="mb-4">
          <FeatureList
            items={product.cons}
            kind="cons"
            heading={labels.cons}
            itemClassName="text-base leading-[19px]"
          />
        </div>
        <VisitButton
          href={product.url}
          label={product.buttonText}
        />
      </section>
    </aside>
  );
}
