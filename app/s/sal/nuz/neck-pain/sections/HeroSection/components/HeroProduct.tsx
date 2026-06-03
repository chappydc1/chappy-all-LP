import { content } from "../../../content";

export const HeroProduct = () => {
  return (
    <div className="relative box-border caret-transparent min-h-0 min-w-0 w-full h-full overflow-hidden">
      <div className="absolute items-center box-border caret-transparent flex justify-center w-[150px] z-[1] left-[3%] top-[4%]">
        <img
          src={content.hero.badgeImageUrl}
          alt=""
          className="box-border caret-transparent max-w-full min-h-0 min-w-0"
        />
      </div>
      <img
        src={content.hero.productImageUrl}
        alt=""
        className="absolute inset-0 box-border caret-transparent h-full w-full object-cover"
      />
    </div>
  );
};
