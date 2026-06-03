import { DiabetesShippingNotice } from "../../SalesPage/components/ShippingNotice";
import { DiabetesPackageCard } from "../../SalesPage/components/PackageCard";

export type DiabetesPackageSectionCard = {
  containerVariant: string;
  href: string;
  title?: string;
  linkVariant: string;
  cardVariant: string;
  badgeVariant: string;
  badgeText: string;
  packageTitle: string;
  supplyText: string;
  bottleImageSrc: string;
  bottleImageAlt?: string;
  bottleImageVariant: string;
  price: string;
  savingsText: string;
  savingsVariant: string;
  discountText: string;
  discountVariant: string;
  guaranteeText: string;
  guaranteeVariant: string;
  cardsImageSrc: string;
  totalOriginalPrice: string;
  totalPrice: string;
  shippingText: string;
  freeShippingText?: string;
  freeShippingVariant?: string;
};

export type DiabetesPackageSectionProps = {
  shippingImageSrc: string;
  shippingImageAlt: string;
  shippingText: string;
  highlightedText: string;
  orderText: string;
  recommendationText: string;
  cards: DiabetesPackageSectionCard[];
};

export const DiabetesPackageSection = (props: DiabetesPackageSectionProps) => {
  return (
    <section className="relative box-border caret-transparent outline-[3px] pb-6">
      <div className="box-border caret-transparent max-w-none outline-[3px] w-full mx-auto px-3 md:max-w-[1140px]">
        <DiabetesShippingNotice
          imageSrc={props.shippingImageSrc}
          imageAlt={props.shippingImageAlt}
          shippingText={props.shippingText}
          highlightedText={props.highlightedText}
          orderText={props.orderText}
          recommendationText={props.recommendationText}
        />
      </div>
      <div className="box-border caret-transparent max-w-none outline-[3px] w-full mx-auto px-3 md:max-w-[1140px]">
        <div className="items-center box-border caret-transparent flex flex-wrap outline-[3px] -mx-3">
          {props.cards.map((card) => (
            <DiabetesPackageCard
              key={`${card.href}-${card.packageTitle}`}
              containerVariant={card.containerVariant}
              href={card.href}
              title={card.title}
              linkVariant={card.linkVariant}
              cardVariant={card.cardVariant}
              badgeVariant={card.badgeVariant}
              badgeText={card.badgeText}
              packageTitle={card.packageTitle}
              supplyText={card.supplyText}
              bottleImageSrc={card.bottleImageSrc}
              bottleImageAlt={card.bottleImageAlt}
              bottleImageVariant={card.bottleImageVariant}
              price={card.price}
              savingsText={card.savingsText}
              savingsVariant={card.savingsVariant}
              discountText={card.discountText}
              discountVariant={card.discountVariant}
              guaranteeText={card.guaranteeText}
              guaranteeVariant={card.guaranteeVariant}
              cardsImageSrc={card.cardsImageSrc}
              totalOriginalPrice={card.totalOriginalPrice}
              totalPrice={card.totalPrice}
              shippingText={card.shippingText}
              freeShippingText={card.freeShippingText}
              freeShippingVariant={card.freeShippingVariant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
