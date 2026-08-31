export const MenoHeroMedia = () => {
  return (
    <div className="relative box-border caret-transparent grow-0 max-w-none min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden mb-5 rounded-bl rounded-br rounded-tl rounded-tr md:grow md:max-w-[540px] md:mb-0">
      <picture className="box-border caret-transparent outline-[3px]">
        <img
          src="/lp-images-files-videos-fonts/lis/gruns/images/lora-drop.png"
          alt="Woman smiling and eating Grüns Superfoods Greens Gummies outdoors"
          className="aspect-[auto_400_/_313] box-border caret-transparent h-auto max-w-full object-[53.906%_16.309%] outline-[3px] w-full md:h-[422px] md:w-[540px]"
        />
      </picture>
      <div className="box-border caret-transparent outline-[3px]">
        <iframe
          src="https://app.thefrontrowhealth.com/api/widgets?presentation_type=sticker&product_id=987"
          className="absolute box-border caret-transparent h-[78px] outline-[3px] origin-[0px_-5%] w-[448px] z-[3] scale-[0.8] left-0 bottom-0 md:scale-75"
        ></iframe>
      </div>
    </div>
  );
};
