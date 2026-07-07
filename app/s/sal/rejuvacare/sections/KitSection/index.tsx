import { RejuvacareKitItem } from "../KitSection/components/KitItem";

export const RejuvacareKitSection = () => {
  return (
    <div className="items-stretch bg-neutral-100 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] md:flex-nowrap">
      <div className="relative items-center bg-white box-border caret-transparent block basis-px grow justify-center max-w-[1400px] min-h-[25px] outline-[3px] w-min m-auto px-0 py-5 md:flex md:px-[100px] md:py-[50px]">
        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full p-0 md:min-h-[auto] md:min-w-[auto] md:px-2.5 md:py-3">
          <img
            title=""
            src="/images/rejuvacare/1723110728696_rejuvaknee_kit_desktop2.png"
            alt=""
            className="text-black box-border caret-transparent inline h-auto max-w-full object-cover outline-[3px] w-full md:h-full md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full px-[15px] py-3 md:min-h-[auto] md:min-w-[auto] md:px-2.5">
          <div className="text-neutral-900 text-[23px] font-bold box-border caret-transparent leading-[33px] outline-[3px] text-left font-montserrat md:text-[33px] md:leading-[42px]">
            Inside The Treatment Kit
          </div>
          <RejuvacareKitItem
            rootVariant="mt-5"
            imageSrc="/images/rejuvacare/1722826373249_num_circle_1.webp"
            label="High Quality Gift Box"
            labelVariant="leading-6"
            spacerCount="0"
          />
          <RejuvacareKitItem
            rootVariant="mt-2.5"
            imageSrc="/images/rejuvacare/1722826366022_num_circle_2.webp"
            label='The RejuvaKnee "Triple Method" Massager'
            labelVariant="leading-[22px]"
            spacerCount="1"
          />
          <RejuvacareKitItem
            rootVariant="mt-2.5"
            imageSrc="/images/rejuvacare/1722826593777_num_circle_3.webp"
            label="User Guide (set up within 30 seconds)"
            labelVariant="leading-[22px]"
            spacerCount="2"
          />
          <RejuvacareKitItem
            rootVariant="mt-2.5"
            imageSrc="/images/rejuvacare/1722833788239_num_circle_4.webp"
            label="Your RejuvaKnee USB C Charger"
            labelVariant="leading-6"
            spacerCount="2"
          />
        </div>
      </div>
    </div>
  );
};
