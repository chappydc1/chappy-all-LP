export const SetupSection = () => {
  return (
    <div className="items-stretch bg-neutral-100 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] md:flex-nowrap">
      <div className="relative items-center bg-emerald-500 box-border caret-transparent block basis-px flex-col grow justify-center max-w-[1400px] min-h-[25px] outline-[3px] w-min m-auto pt-0 pb-5 px-2.5 md:flex md:flex-row md:pl-[30px] md:pr-[100px] md:py-[50px]">
        <div className="static bg-white box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] w-2/5 z-auto ml-px px-[25px] py-5 rounded-[15px] right-auto md:relative md:block md:min-h-[auto] md:min-w-[auto] md:right-[-100px] md:z-[1]">
          <div className="text-neutral-900 text-[23px] font-bold box-border caret-transparent leading-[33px] outline-[3px] text-left font-montserrat md:text-[33px] md:leading-[42px]">
            Finish setting up in 30 seconds
          </div>
          <div className="box-border caret-transparent outline-[3px] text-left mt-5 p-px font-montserrat">
            The best part about RejuvaKnee Massager is that it’s so simple to
            use. There are no annoying cords - simply charge your device using
            the plug and cable that come in your kit.
          </div>
        </div>
        <div className="relative bg-white box-border caret-transparent block outline-[3px] w-full z-0 ml-px mt-px pt-5 pb-8 px-[25px] rounded-[15px] top-[30px] md:static md:hidden md:w-2/5 md:z-auto md:mt-0 md:pb-5 md:top-auto">
          <div className="text-neutral-900 text-[23px] font-bold box-border caret-transparent leading-[33px] outline-[3px] text-left pr-5 font-montserrat md:text-[33px] md:leading-[42px] md:pr-0">
            Finish setting up within 30 seconds
          </div>
          <div className="box-border caret-transparent outline-[3px] text-left mt-5 p-px font-montserrat">
            The best part about RejuvaKnee Massager is that it’s so simple to
            use. There are no annoying cords - simply charge your device using
            the plug and cable that come in your kit.
          </div>
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full px-2.5 py-3 md:min-h-[auto] md:min-w-[auto]">
          <div className="box-border caret-transparent outline-[3px] rounded-[15px]">
            <video
              src="https://cdn.shopify.com/videos/c/o/v/f3561b42fa794e4abd7e94375cf2f506.mp4"
              controls
              poster="https://c.animaapp.com/mpy7eadgYZFUdm/assets/43.jpg"
              className="relative box-border caret-transparent inline max-w-full outline-[3px] align-baseline w-full rounded-[10px] md:rounded-[15px]"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};
