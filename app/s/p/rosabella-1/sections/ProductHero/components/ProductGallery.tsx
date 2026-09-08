import { MainProductCarousel } from "./MainProductCarousel"

export const ProductGallery = () => {
  return (
    <div className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:max-w-[calc(48.5%_-_35px)]">
      <div className="box-border caret-transparent outline-[3px] w-full pl-5 md:pl-0">
        <MainProductCarousel />
      </div>
    </div>
  );
};
