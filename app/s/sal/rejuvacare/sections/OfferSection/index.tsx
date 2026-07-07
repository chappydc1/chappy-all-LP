import { RejuvacareProductGallery } from "../OfferSection/components/ProductGallery";
import { RejuvacareOfferDetails } from "../OfferSection/components/OfferDetails";

export const RejuvacareOfferSection = () => {
  return (
    <div className="items-stretch bg-neutral-100 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] md:flex-nowrap">
      <div className="relative items-start bg-white box-border caret-transparent block basis-px flex-col grow justify-center max-w-[1400px] min-h-[25px] outline-[3px] w-min m-auto pt-0 pb-2.5 px-0 md:flex md:flex-row md:px-[100px] md:py-10">
        <RejuvacareProductGallery />
        <div className="items-stretch box-border caret-transparent hidden flex-wrap justify-start outline-[3px] md:flex-nowrap"></div>
        <div className="items-stretch box-border caret-transparent hidden flex-wrap justify-start outline-[3px] md:flex-nowrap"></div>
        <RejuvacareOfferDetails />
      </div>
    </div>
  );
};
