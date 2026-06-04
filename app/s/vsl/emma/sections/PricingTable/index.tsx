import { PricingCard } from "../PricingTable/components/PricingCard";
import { MobilePricingCards } from "../PricingTable/components/MobilePricingCards";
import { FAQSection } from "../FAQSection";
import { GuaranteeSection } from "../GuaranteeSection";

export type PricingTableProps = {
  showFullContent?: boolean;
};

const PricingCards = () => (
  <div className="bg-amber-100 box-border">
    <div className="box-border max-w-[1440px] m-auto pb-6">
      <div className="box-border hidden max-w-[1200px] w-full m-auto md:block">
        <div className="items-end box-border flex flex-wrap -mx-3 py-6">
          <PricingCard
            outerClassName="px-3 rounded-sm delay-100"
            headerClassName="bg-emerald-200 text-center py-4 rounded-t-sm"
            contentClassName="bg-white"
            title="STARTER"
            supplyText="30 Day Supply"
            supplyBottleText="(1 Bottle)"
            bottleImageSrc="/images/emma/emma-bottle-1.webp"
            bottleImageClassName="w-[234px]"
            price="$59"
            originalPrice="$99"
            ctaHref="https://go.gutrenewalformula.com/products/emma-1-pack-grf-er-vslrmb/?_raclid=9a1a687b-c0c6-4856-8ff8-e09031df5b2d&ad_id=269813"
          />
          <PricingCard
            outerClassName="delay-200"
            headerClassName="rounded-sm"
            contentClassName="bg-[linear-gradient(rgb(255,247,218),rgb(255,255,255))]"
            bottleImageSrc="/images/emma/emma-bottle-6.webp"
            bottleImageClassName="w-[345px]"
            price="$39"
            originalPrice="$594"
            ctaHref="https://go.gutrenewalformula.com/products/emma-6-pack-grf-er-vslrmb/?_raclid=9a1a687b-c0c6-4856-8ff8-e09031df5b2d&ad_id=269813"
            showBiggestDiscount
            showLeanBellyRecipes
            isBestValue
          />
          <PricingCard
            outerClassName="px-3 rounded-sm delay-300"
            headerClassName="bg-emerald-200 text-center py-4 rounded-t-sm"
            contentClassName="bg-white rounded-b-sm"
            title="DOCTOR&#39;S CHOICE"
            supplyText="90 Day Supply"
            supplyBottleText="(3 Bottles)"
            bottleImageSrc="/images/emma/emma-bottle-3.webp"
            bottleImageClassName="w-[302px]"
            price="$49"
            originalPrice="$297"
            ctaHref="https://go.gutrenewalformula.com/products/emma-3-pack-grf-er-vslrmb/?_raclid=9a1a687b-c0c6-4856-8ff8-e09031df5b2d&ad_id=269813"
            showLeanBellyRecipes
          />
        </div>
      </div>
      <MobilePricingCards
        headerImageSrc="/images/emma/Header.webp"
        bottleSixImageSrc="/images/emma/emma-bottle-6.webp"
        bottleThreeImageSrc="/images/emma/emma-bottle-3.webp"
        bottleOneImageSrc="/images/emma/emma-bottle-1.webp"
        checkImageSrc="/images/emma/check-Copy.webp"
        ctaImageSrc="/images/emma/CTA.webp"
        paymentMethodImageSrc="/images/emma/paymentmethod.webp"
        sixPackHref="https://go.gutrenewalformula.com/products/emma-6-pack-grf-er-vslrmb/?_raclid=9a1a687b-c0c6-4856-8ff8-e09031df5b2d&ad_id=269813"
        threePackHref="https://go.gutrenewalformula.com/products/emma-3-pack-grf-er-vslrmb/?_raclid=9a1a687b-c0c6-4856-8ff8-e09031df5b2d&ad_id=269813"
        onePackHref="https://go.gutrenewalformula.com/products/emma-1-pack-grf-er-vslrmb/?_raclid=9a1a687b-c0c6-4856-8ff8-e09031df5b2d&ad_id=269813"
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
      {/* Second pricing block */}
      <div className="bg-amber-100 box-border">
        <div className="box-border max-w-[1440px] m-auto pb-6">
          <div className="box-border hidden max-w-[1200px] w-full m-auto md:block">
            <div className="items-end box-border flex flex-wrap -mx-3 py-6">
              <PricingCard
                outerClassName="px-3 rounded-sm delay-100"
                headerClassName="bg-emerald-200 text-center py-4 rounded-t-sm"
                contentClassName="bg-white"
                title="STARTER"
                supplyText="30 Day Supply"
                supplyBottleText="(1 Bottle)"
                bottleImageSrc="/images/emma/emma-bottle-1.webp"
                bottleImageClassName="w-[234px]"
                price="$59"
                originalPrice="$99"
                ctaHref="https://go.gutrenewalformula.com/products/emma-1-pack-grf-er-vslrmb/?_raclid=9a1a687b-c0c6-4856-8ff8-e09031df5b2d&ad_id=269813"
              />
              <PricingCard
                outerClassName="delay-200"
                headerClassName="rounded-sm"
                contentClassName="bg-[linear-gradient(rgb(255,247,218),rgb(255,255,255))]"
                bottleImageSrc="/images/emma/emma-bottle-6.webp"
                bottleImageClassName="w-[345px]"
                price="$39"
                originalPrice="$594"
                ctaHref="https://go.gutrenewalformula.com/products/emma-6-pack-grf-er-vslrmb/?_raclid=9a1a687b-c0c6-4856-8ff8-e09031df5b2d&ad_id=269813"
                showBiggestDiscount
                showLeanBellyRecipes
                isBestValue
              />
              <PricingCard
                outerClassName="px-3 rounded-sm delay-300"
                headerClassName="bg-emerald-200 text-center py-4 rounded-t-sm"
                contentClassName="bg-white rounded-b-sm"
                title="DOCTOR&#39;S CHOICE"
                supplyText="90 Day Supply"
                supplyBottleText="(3 Bottles)"
                bottleImageSrc="/images/emma/emma-bottle-3.webp"
                bottleImageClassName="w-[302px]"
                price="$49"
                originalPrice="$297"
                ctaHref="https://go.gutrenewalformula.com/products/emma-3-pack-grf-er-vslrmb/?_raclid=9a1a687b-c0c6-4856-8ff8-e09031df5b2d&ad_id=269813"
                showLeanBellyRecipes
              />
            </div>
          </div>
          <MobilePricingCards
            headerImageSrc="/images/emma/Header.webp"
            bottleSixImageSrc="/images/emma/emma-bottle-6.webp"
            bottleThreeImageSrc="/images/emma/emma-bottle-3.webp"
            bottleOneImageSrc="/images/emma/emma-bottle-1.webp"
            checkImageSrc="/images/emma/check-Copy.webp"
            ctaImageSrc="/images/emma/CTA.webp"
            paymentMethodImageSrc="/images/emma/paymentmethod.webp"
            sixPackHref="https://go.gutrenewalformula.com/products/emma-6-pack-grf-er-vslrmb/?_raclid=9a1a687b-c0c6-4856-8ff8-e09031df5b2d&ad_id=269813"
            threePackHref="https://go.gutrenewalformula.com/products/emma-3-pack-grf-er-vslrmb/?_raclid=9a1a687b-c0c6-4856-8ff8-e09031df5b2d&ad_id=269813"
            onePackHref="https://go.gutrenewalformula.com/products/emma-1-pack-grf-er-vslrmb/?_raclid=9a1a687b-c0c6-4856-8ff8-e09031df5b2d&ad_id=269813"
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
      <FAQSection />
    </div>
  );
};
