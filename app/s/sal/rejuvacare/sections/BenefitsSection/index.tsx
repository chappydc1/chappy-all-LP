import { RejuvacareBenefitCard } from "./components/RejuvacareBenefitCard";

export const RejuvacareBenefitsSection = () => {
  return (
    <div className="relative items-center self-center bg-neutral-100 box-border caret-transparent flex flex-wrap justify-center max-w-full outline-[3px] z-10 md:flex-nowrap">
      <div className="relative bg-sky-100 box-border caret-transparent flex basis-full flex-col grow max-w-[1400px] min-h-[25px] outline-[3px] w-min m-auto pt-[30px] pb-10 px-2.5 md:basis-0 md:px-[100px] md:py-[50px]">
        <div className="text-neutral-900 text-[33px] font-bold box-border caret-transparent leading-[42.9px] min-h-[auto] min-w-[auto] outline-[3px] text-center p-px font-montserrat">
          <div className="text-2xl box-border caret-transparent leading-[30px] outline-[3px] text-center md:text-[33px] md:leading-[42.9px] md:text-left">
            <span className="text-[23px] box-border caret-transparent leading-[29.9px] outline-[3px] text-center md:text-[33px] md:leading-[42.9px]"></span>
            <div className="box-border caret-transparent hidden leading-[30px] outline-[3px] text-center p-px md:block md:leading-[42.9px]">
              Experience Immediate Relief From Stabbing Knee Pain
              <div className="box-border caret-transparent leading-[30px] outline-[3px] md:leading-[42.9px]">
                Without Invasive Surgeries or Endless Painkillers
              </div>
            </div>
            <div className="text-2xl box-border caret-transparent block leading-8 outline-[3px] text-center px-2.5 py-px md:text-[33px] md:hidden md:leading-[42.9px] md:px-px">
              Fast, Effective Relief From Knee Pain, Stiffness, And Swelling
              That
              <u className="text-2xl box-border caret-transparent leading-8 outline-[3px] underline md:text-[33px] md:leading-[42.9px]">
                Lasts All Day
              </u>
            </div>
          </div>
        </div>
        <div className="items-stretch box-border caret-transparent flex flex-col justify-around min-h-[auto] min-w-[auto] outline-[3px] w-full mt-[25px] md:flex-row">
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full px-2.5 py-0 md:flex-row md:py-3">
            <RejuvacareBenefitCard
              containerVariant="mr-0 md:mr-5"
              videoSrc="https://cdn.shopify.com/videos/c/o/v/81e3c0d379624f50a5d7a349f3dd6267.mp4"
              title="Reduces Knee Pain"
              description="Provides fast Relief From Knee Pain"
            />
            <RejuvacareBenefitCard
              containerVariant="mr-0 mt-5 md:mr-px md:mt-0"
              videoSrc="https://cdn.shopify.com/videos/c/o/v/3c556bec4f5743f0955e6aca32c9aa3c.mp4"
              title="Boosts Blood Flow"
              description="Improves Blood Flow Around Your Knees"
            />
          </div>
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full px-2.5 py-0 md:flex-row md:py-3">
            <RejuvacareBenefitCard
              containerVariant="mr-0 mt-5 md:mr-5 md:mt-0"
              videoSrc="https://cdn.shopify.com/videos/c/o/v/d3d483217eb94477922a2d9c28e346a5.mp4"
              title="Proven Technology"
              description='Uses Advanced "Triple Method" Technology'
            />
            <RejuvacareBenefitCard
              containerVariant="mt-5 md:mt-0"
              videoSrc="https://cdn.shopify.com/videos/c/o/v/6899745ed0404345968da3d24306a44d.mp4"
              title="Trusted By Over 100,000+ People"
              description={
                <div className="box-border caret-transparent outline-[3px]">
                  Your own in-home Physiotherapist
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
