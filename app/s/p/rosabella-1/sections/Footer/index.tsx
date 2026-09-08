import { FooterBrand } from "./components/FooterBrand"

export const Footer = () => {
  return (
    <div className="items-stretch bg-stone-200 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] px-5 py-[30px] md:flex-nowrap md:py-10">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <FooterBrand />
      </div>
    </div>
  );
};
