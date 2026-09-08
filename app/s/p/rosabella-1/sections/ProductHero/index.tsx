import { ProductGallery } from "./components/ProductGallery"
import { ProductPurchasePanel } from "./components/ProductPurchasePanel"

export const ProductHero = () => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] pt-5 pb-[30px] px-0 md:flex-nowrap md:px-5 md:py-[60px]">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <div className="box-border caret-transparent flex flex-col justify-between outline-[3px] w-full md:flex-row">
          <ProductGallery />
          <ProductPurchasePanel />
        </div>
      </div>
    </div>
  );
};
