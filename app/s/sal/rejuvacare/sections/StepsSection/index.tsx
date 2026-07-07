import { RejuvacareStepCard } from "./components/RejuvacareStepCard";

export const RejuvacareStepsSection = () => {
  return (
    <div className="items-stretch bg-neutral-100 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] md:flex-nowrap">
      <div className="relative items-start bg-sky-100 box-border caret-transparent basis-px grow justify-start max-w-[1400px] min-h-[25px] outline-[3px] w-min m-auto pt-[30px] pb-5 px-[15px] md:items-center md:justify-center md:pt-[50px] md:pb-10 md:px-[100px]">
        <div className="box-border caret-transparent outline-[3px] w-full px-0 md:px-2.5">
          <div className="text-[23px] font-bold box-border caret-transparent leading-[33px] outline-[3px] text-center px-2.5 font-montserrat md:text-[33px] md:leading-[46.2px] md:px-0">
            3 Simple Steps To Relieve Knee Pain At Home
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex flex-col justify-around outline-[3px] w-full pt-0 px-0 md:items-start md:flex-row md:pt-3 md:px-2.5">
          <RejuvacareStepCard
            stepText="Step 1"
            videoSrc="https://cdn.shopify.com/videos/c/o/v/0a5c5afde7a84890b9c720405d2d4c69.mp4"
            description="Turn your device on and select the heat and massage intensity you desire"
            poster=""
          />
          <RejuvacareStepCard
            stepText="Step 2"
            videoSrc="https://cdn.shopify.com/videos/c/o/v/028808b4b66741908bb0440183ebf397.mp4"
            description="Allow RejuvaKnee to work its magic for 15-30 minutes"
          />
          <RejuvacareStepCard
            stepText="Step 3"
            videoSrc="https://cdn.shopify.com/videos/c/o/v/8102ace2a7714cb1aa9f83ee2598582f.mp4"
            description="Enjoy pain-free knees and get back to living your life to its fullest!"
          />
        </div>
      </div>
    </div>
  );
};
