import { HeaderMarker } from "../Header/components/HeaderMarker";
import { HeaderBrand } from "../Header/components/HeaderBrand";

export const Header = () => {
  return (
    <header className="relative caret-transparent outline-[3px] py-[15px] md:py-[30px]">
      <HeaderMarker />
      <HeaderBrand />
    </header>
  );
};
