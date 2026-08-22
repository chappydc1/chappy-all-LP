import copy from "../../../copy.json";

export const LoraHeroTopBar = () => {
  const { topBar } = copy;
  return (
    <div className="bg-white box-border caret-transparent outline-[3px]">
      <div className="bg-emerald-900 box-border caret-transparent flex justify-center outline-[3px] py-2">
        <p className="text-white text-base box-border caret-transparent leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-xl md:leading-6">
          <em className="text-base font-bold box-border caret-transparent leading-[19.2px] outline-[3px] md:text-xl md:leading-6">
            {topBar.label}
          </em>
          <br className="text-base box-border caret-transparent leading-[19.2px] outline-[3px] md:text-xl md:leading-6" />
          <strong className="text-amber-400 text-base box-border caret-transparent leading-[19.2px] outline-[3px] md:text-xl md:leading-6">
            {topBar.offer}
          </strong>{" "}
          {topBar.suffix}
        </p>
      </div>
      <div className="items-center box-border caret-transparent flex justify-center outline-[3px] py-4">
        <img
          src="/lp-images-files-videos-fonts/lis/gruns/images/logo_1_new.png"
          alt="grüns logo"
          className="box-border caret-transparent outline-[3px] w-[125px]"
        />
      </div>
    </div>
  );
};
