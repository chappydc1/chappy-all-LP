import { RejuvacareBenefitList } from "./RejuvacareBenefitList";
import { RejuvacareCallToAction } from "./RejuvacareCallToAction";
import { RejuvacareDoctorReview } from "../../../components/RejuvacareDoctorReview";

export const RejuvacareHeroContent = () => {
  return (
    <div className="items-start self-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full mt-0 pt-2.5 pb-0 px-[15px] md:items-center md:w-[70%] md:mt-2.5 md:pl-[90px] md:pr-[30px] md:pt-px md:pb-3">
      <div className="text-stone-700 text-[40px] font-extrabold box-border caret-transparent leading-[48px] min-h-[auto] min-w-[auto] outline-[3px] text-left p-px font-montserrat md:text-[53px] md:leading-[63.6px]">
        <div className="text-[40px] box-border caret-transparent leading-[48px] outline-[3px] md:text-[53px] md:leading-[63.6px]">
          <span className="text-[40px] box-border caret-transparent leading-[48px] outline-[3px] md:text-[53px] md:leading-[63.6px]"></span>
        </div>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full"></div>
      <div className="text-[32px] font-bold box-border caret-transparent leading-[48px] min-h-[auto] min-w-[auto] outline-[3px] mt-[15px] font-helvetica"></div>
      <div className="text-[28px] font-bold box-border caret-transparent hidden basis-[0%] shrink-0 leading-9 min-h-0 min-w-0 outline-[3px] text-left mb-[15px] rounded-[1px] font-montserrat md:text-[34px] md:block md:leading-[46px] md:min-h-[auto] md:min-w-[auto]">
        <span className="text-red-700 text-[28px] box-border caret-transparent leading-9 outline-[3px] md:text-[34px] md:leading-[46px]">
          Avoid Knee Surgery: 
        </span>
        This Simple Device Rebuilds Joints From Home In Just 15-Minutes Per Day
      </div>
      <div className="text-[28px] font-bold box-border caret-transparent block basis-[0%] shrink-0 leading-9 min-h-[auto] min-w-[auto] outline-[3px] text-left mb-[15px] rounded-[1px] font-montserrat md:text-[34px] md:hidden md:leading-[46px] md:min-h-0 md:min-w-0">
        <span className="text-red-700 text-[28px] box-border caret-transparent leading-9 outline-[3px] md:text-[34px] md:leading-[46px]">
          Avoid Knee Surgery: 
        </span>
        This Simple Device Rebuilds Joints From Home In Just 15-Minutes Per Day
        ⏰
      </div>
      <div className="text-stone-700 text-[22px] font-semibold box-border caret-transparent leading-[30.8px] min-h-[auto] min-w-[auto] outline-[3px] text-left mt-0 p-px font-montserrat md:text-[26px] md:leading-[36.4px] md:mt-px">
        <div className="text-[22px] box-border caret-transparent leading-[30.8px] outline-[3px] md:text-[26px] md:leading-[36.4px]">
          <div className="text-neutral-900 text-[23px] font-bold box-border caret-transparent basis-[0%] shrink-0 leading-[32.2px] outline-[3px] pr-0 rounded-[1px] md:text-[33px] md:leading-[46.2px] md:pr-5"></div>
        </div>
      </div>
      <RejuvacareBenefitList
        containerVariant="items-start md:items-center"
        imageVariant="mt-[7px]"
        contentVariant=""
        textContainerVariant=""
        textWrapperClassName=""
        text="Fast Relief From Stiff, Painful, Swollen Knees"
        hasNestedText={false}
      />
      <RejuvacareBenefitList
        containerVariant="items-start md:items-center"
        imageVariant="mt-[9px]"
        contentVariant=""
        textContainerVariant=""
        textWrapperClassName=""
        text="Improves Blood Flow And Promotes Healing"
        hasNestedText={false}
      />
      <RejuvacareBenefitList
        containerVariant="items-center"
        imageVariant="mt-1.5"
        contentVariant=""
        textContainerVariant="text-[17px] md:text-base"
        textWrapperClassName=""
        text="Relieves Knee Pain, Bone-on-Bone Arthritis"
        hasNestedText={true}
      />
      <RejuvacareBenefitList
        containerVariant="items-start md:items-center"
        imageVariant="mt-1.5"
        contentVariant="items-center flex pt-px md:[align-items:normal] md:block md:pt-0"
        textContainerVariant="text-[17px] min-h-[auto] min-w-[auto] md:text-base md:min-h-0 md:min-w-0"
        textWrapperClassName="box-border caret-transparent outline-[3px] mt-px md:mt-0"
        text="Extension Straps To Fit All Knee Sizes"
        hasNestedText={true}
      />
      <RejuvacareCallToAction />
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
        <i className="text-[17px] italic box-border caret-transparent leading-[25.5px] outline-[3px] font-montserrat md:text-base md:leading-6">
          <b className="text-[17px] font-bold box-border caret-transparent leading-[25.5px] outline-[3px] md:text-base md:leading-6">
            Note:
          </b>
          Not Available on Amazon or eBay
        </i>
      </div>
      <RejuvacareDoctorReview
        containerVariant="bg-white min-h-[auto] min-w-[auto] rounded-[10px] md:rounded-[5px]"
        badgeVariant="leading-[19.2px]"
      />
      <div className="bg-white bg-[url('/images/rejuvacare/1713781536653_1713532949416_2_1_.png"></div>
    </div>
  );
};
