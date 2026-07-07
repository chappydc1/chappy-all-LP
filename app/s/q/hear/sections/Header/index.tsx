import { HearHeaderMarker } from "../Header/components/HeaderMarker";
import { HearHeaderBrand } from "../Header/components/HeaderBrand";

export const HearHeader = () => {
  return (
    <header className="relative caret-transparent outline-[3px] py-[15px] md:py-[30px]">
      <HearHeaderMarker />
      <HearHeaderBrand />
    </header>
  );
};
