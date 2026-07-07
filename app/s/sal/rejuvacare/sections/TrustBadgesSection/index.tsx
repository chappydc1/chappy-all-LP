import { RejuvacareTrustBadge } from "../TrustBadgesSection/components/TrustBadge";

export const RejuvacareTrustBadgesSection = () => {
  return (
    <div className="items-stretch bg-neutral-100 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] md:flex-nowrap">
      <div className="relative items-start bg-sky-100 box-border caret-transparent block basis-px grow justify-start max-w-[1400px] min-h-[25px] outline-[3px] w-min m-auto px-0 py-5 md:items-center md:flex md:justify-center md:px-[100px] md:py-[50px]">
        <RejuvacareTrustBadge
          containerVariant="mx-px md:mx-0 md:px-10"
          imageSrc="/images/rejuvacare/1722844015319_90_day_guarantee.webp"
          title="90-Day Money Back Guarantee"
          description="If you’re not absolutely thrilled with the results, we don’t want your money. No hassles, no questions asked."
        />
        <RejuvacareTrustBadge
          containerVariant="mt-2.5 md:mt-0 md:px-10"
          imageSrc="/images/rejuvacare/1722844006854_free_shipping.webp"
          title="Free, Tracked Shipping"
          description="We provide fast free shipping and handling from US Warehouse on all orders."
        />
        <RejuvacareTrustBadge
          containerVariant="mt-2.5 md:mt-0 md:px-7"
          imageSrc="/images/rejuvacare/1722843985659_guaranteed_high_quality.webp"
          title="Guaranteed High Quality"
          description="RejuvaKnee Massagers are made of high quality materials. Enjoy consistent, trouble-free performance for a long time."
        />
      </div>
    </div>
  );
};
