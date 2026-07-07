import { HearHeaderMarker } from "./components/HearHeaderMarker";
import { HearHeaderBrand } from "./components/HearHeaderBrand";

export const HearHeader = () => {
  return (
    <header className="relative caret-transparent outline-[3px] py-[15px] md:py-[30px]">
      <HearHeaderMarker />
      <HearHeaderBrand />
    </header>
  );
};
