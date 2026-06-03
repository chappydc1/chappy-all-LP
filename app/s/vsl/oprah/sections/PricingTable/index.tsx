import { PricingCard } from "../PricingTable/components/PricingCard";
import { MobilePricingCards } from "../PricingTable/components/MobilePricingCards";
import { FAQSection } from "../FAQSection";
import { GuaranteeSection } from "../GuaranteeSection";

export type PricingTableProps = {
  showFullContent?: boolean;
};

const onePackHref = "https://go.gutrenewalformula.com/products/emma-1-pack-grf-er-vslrmb/?_raclid=9a1a687b-c0c6-4856-8ff8-e09031df5b2d&ad_id=269813";
const threePackHref = "https://go.gutrenewalformula.com/products/emma-3-pack-grf-er-vslrmb/?_raclid=9a1a687b-c0c6-4856-8ff8-e09031df5b2d&ad_id=269813";
const sixPackHref = "https://go.gutrenewalformula.com/products/emma-6-pack-grf-er-vslrmb/?_raclid=9a1a687b-c0c6-4856-8ff8-e09031df5b2d&ad_id=269813";

const PricingCards = () => (
  <div className="bg-[#fff4bf] box-border border-y border-[#eadf9d]">
    <div className="box-border max-w-[1360px] m-auto px-4 py-10 md:py-16">
      <div className="box-border hidden max-w-[1180px] w-full m-auto md:block">
        <div className="items-end box-border flex flex-wrap justify-center -mx-3 py-6">
          <PricingCard
            outerClassName="px-3 rounded-sm delay-100 md:pt-16"
            headerClassName=""
            contentClassName="bg-white"
            title="STARTER"
            supplyText="30 Day Supply"
            supplyBottleText="(1 Bottle)"
            bottleImageSrc="/vsl/oprah/media/emma-bottle-1.webp"
            bottleImageClassName="w-[234px]"
            price="$59"
            originalPrice="$99"
            ctaHref={onePackHref}
          />
          <PricingCard
            outerClassName="px-3 delay-200"
            headerClassName=""
            contentClassName="bg-[linear-gradient(rgb(255,247,218),rgb(255,255,255))]"
            bottleImageSrc="/vsl/oprah/media/emma-bottle-6.webp"
            bottleImageClassName="w-[360px]"
            price="$39"
            originalPrice="$594"
            ctaHref={sixPackHref}
            showBiggestDiscount
            showLeanBellyRecipes
            isBestValue
          />
          <PricingCard
            outerClassName="px-3 rounded-sm delay-300 md:pt-10"
            headerClassName=""
            contentClassName="bg-white rounded-b-sm"
            title="DOCTOR&#39;S CHOICE"
            supplyText="90 Day Supply"
            supplyBottleText="(3 Bottles)"
            bottleImageSrc="/vsl/oprah/media/emma-bottle-3.webp"
            bottleImageClassName="w-[302px]"
            price="$49"
            originalPrice="$297"
            ctaHref={threePackHref}
            showLeanBellyRecipes
          />
        </div>
      </div>
      <MobilePricingCards
        headerImageSrc="/vsl/oprah/media/Header.webp"
        bottleSixImageSrc="/vsl/oprah/media/emma-bottle-6.webp"
        bottleThreeImageSrc="/vsl/oprah/media/emma-bottle-3.webp"
        bottleOneImageSrc="/vsl/oprah/media/emma-bottle-1.webp"
        checkImageSrc="/vsl/oprah/media/check-Copy.webp"
        ctaImageSrc="/vsl/oprah/media/CTA.webp"
        paymentMethodImageSrc="/vsl/oprah/media/paymentmethod.webp"
        sixPackHref={sixPackHref}
        threePackHref={threePackHref}
        onePackHref={onePackHref}
        sixPackPricePerBottle="$39"
        threePackPricePerBottle="$49"
        onePackPricePerBottle="$59"
        sixPackOriginalPrice="$594"
        sixPackDiscountedPrice="$234"
        threePackOriginalPrice="$297"
        threePackDiscountedPrice="$147"
        onePackOriginalPrice="$99"
        onePackDiscountedPrice="$59"
      />
    </div>
  </div>
);

export const PricingTable = (props: PricingTableProps) => {
  const { showFullContent = false } = props;

  if (!showFullContent) {
    return <PricingCards />;
  }

  return (
    <div className="box-border w-full">
      <PricingCards />
      <GuaranteeSection />
      <PricingCards />
      <FAQSection />
    </div>
  );
};
