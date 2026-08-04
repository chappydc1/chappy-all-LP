export const TrendingBadge = () => {
  return (
    <div className="items-center self-center box-border caret-transparent flex justify-end min-h-[auto] min-w-[auto] outline-[3px] w-full px-px py-3 md:[align-items:normal] md:self-auto">
      <img
        title=""
        src="https://c.animaapp.com/mrj44hg5QubImt/assets/1711366759829_bitmap.png"
        alt=""
        className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-10 md:w-[50px]"
      />
      <div className="text-white text-[13px] font-bold box-border caret-transparent leading-[13px] min-h-[auto] min-w-[auto] outline-[3px] pl-2.5 pr-px py-2.5 font-montserrat md:text-base md:leading-4 md:pl-5">
        Trending in the US
      </div>
    </div>
  );
};
