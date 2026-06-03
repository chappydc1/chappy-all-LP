import { GetokinawatonicProductCard } from "../../GetokinawatonicSalesSection/components/GetokinawatonicProductCard";

export type GetokinawatonicProductPricingSectionProps = {
  firstCardContainerVariantClass: string;
  firstCardTitle: string;
  firstCardSupplyText: string;
  firstCardProductImageUrl: string;
  firstCardProductImageAlt: string;
  firstCardPriceContainerVariantClass: string;
  firstCardPricePerBottle: string;
  firstCardHref: string;
  firstCardButtonImageVariantClass: string;
  firstCardOriginalPrice: string;
  firstCardTotalPrice: string;
  firstCardGuaranteeText: string;
  firstCardPaymentImageUrl: string;
  firstCardPaymentImageAlt: string;

  secondCardContainerVariantClass: string;
  secondCardTitle: string;
  secondCardSupplyText: string;
  secondCardProductImageUrl: string;
  secondCardProductImageAlt: string;
  secondCardPriceContainerVariantClass: string;
  secondCardPricePerBottle: string;
  secondCardPromoImageUrl: string;
  secondCardPromoImageAlt: string;
  secondCardHref: string;
  secondCardButtonImageVariantClass: string;
  secondCardOriginalPrice: string;
  secondCardTotalPrice: string;
  secondCardGuaranteeText: string;
  secondCardPaymentImageUrl: string;
  secondCardPaymentImageAlt: string;

  thirdCardContainerVariantClass: string;
  thirdCardTitle: string;
  thirdCardSupplyText: string;
  thirdCardProductImageUrl: string;
  thirdCardProductImageAlt: string;
  thirdCardPriceContainerVariantClass: string;
  thirdCardPricePerBottle: string;
  thirdCardPromoImageUrl: string;
  thirdCardPromoImageAlt: string;
  thirdCardHref: string;
  thirdCardButtonImageVariantClass: string;
  thirdCardOriginalPrice: string;
  thirdCardTotalPrice: string;
  thirdCardGuaranteeText: string;
  thirdCardPaymentImageUrl: string;
  thirdCardPaymentImageAlt: string;
};

export const GetokinawatonicProductPricingSection = (props: GetokinawatonicProductPricingSectionProps) => {
  return (
    <div className="box-border caret-transparent hidden outline-[3px] my-[8%] md:block">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px] mx-0 md:ml-[-15px] md:mr-[-15px] before:accent-auto before:box-border before:caret-transparent before:text-teal-500 before:table before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.4286px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-apple_system after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-teal-500 after:table after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21.4286px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-apple_system">
          <div className="relative box-border caret-transparent float-none min-h-px outline-[3px] w-auto px-[15px] md:float-left md:w-[33.3333%]">
            <GetokinawatonicProductCard
              containerVariantClass={props.firstCardContainerVariantClass}
              title={props.firstCardTitle}
              supplyText={props.firstCardSupplyText}
              productImageUrl={props.firstCardProductImageUrl}
              productImageAlt={props.firstCardProductImageAlt}
              priceContainerVariantClass={
                props.firstCardPriceContainerVariantClass
              }
              pricePerBottle={props.firstCardPricePerBottle}
              href={props.firstCardHref}
              buttonImageVariantClass={props.firstCardButtonImageVariantClass}
              originalPrice={props.firstCardOriginalPrice}
              totalPrice={props.firstCardTotalPrice}
              guaranteeText={props.firstCardGuaranteeText}
              paymentImageUrl={props.firstCardPaymentImageUrl}
              paymentImageAlt={props.firstCardPaymentImageAlt}
            />
          </div>
          <div className="relative box-border caret-transparent float-none min-h-px outline-[3px] w-auto px-[15px] md:float-left md:w-[33.3333%]">
            <GetokinawatonicProductCard
              containerVariantClass={props.secondCardContainerVariantClass}
              title={props.secondCardTitle}
              supplyText={props.secondCardSupplyText}
              productImageUrl={props.secondCardProductImageUrl}
              productImageAlt={props.secondCardProductImageAlt}
              priceContainerVariantClass={
                props.secondCardPriceContainerVariantClass
              }
              pricePerBottle={props.secondCardPricePerBottle}
              promoImageUrl={props.secondCardPromoImageUrl}
              promoImageAlt={props.secondCardPromoImageAlt}
              href={props.secondCardHref}
              buttonImageVariantClass={props.secondCardButtonImageVariantClass}
              originalPrice={props.secondCardOriginalPrice}
              totalPrice={props.secondCardTotalPrice}
              guaranteeText={props.secondCardGuaranteeText}
              paymentImageUrl={props.secondCardPaymentImageUrl}
              paymentImageAlt={props.secondCardPaymentImageAlt}
            />
          </div>
          <div className="relative box-border caret-transparent float-none min-h-px outline-[3px] w-auto px-[15px] md:float-left md:w-[33.3333%]">
            <GetokinawatonicProductCard
              containerVariantClass={props.thirdCardContainerVariantClass}
              title={props.thirdCardTitle}
              supplyText={props.thirdCardSupplyText}
              productImageUrl={props.thirdCardProductImageUrl}
              productImageAlt={props.thirdCardProductImageAlt}
              priceContainerVariantClass={
                props.thirdCardPriceContainerVariantClass
              }
              pricePerBottle={props.thirdCardPricePerBottle}
              promoImageUrl={props.thirdCardPromoImageUrl}
              promoImageAlt={props.thirdCardPromoImageAlt}
              href={props.thirdCardHref}
              buttonImageVariantClass={props.thirdCardButtonImageVariantClass}
              originalPrice={props.thirdCardOriginalPrice}
              totalPrice={props.thirdCardTotalPrice}
              guaranteeText={props.thirdCardGuaranteeText}
              paymentImageUrl={props.thirdCardPaymentImageUrl}
              paymentImageAlt={props.thirdCardPaymentImageAlt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
