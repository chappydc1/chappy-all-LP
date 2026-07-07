import { FealsPressLogo } from "./components/FealsPressLogo";

export const FealsPressLogoSection = () => {
  return (
    <div className="relative items-center self-stretch bg-stone-50 box-border caret-transparent gap-x-8 flex flex-col shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-8 px-2 py-8 font-montserrat md:gap-x-[30px] md:gap-y-[30px] md:pt-6 md:pb-12 md:px-8">
      <div className="items-center box-border caret-transparent contents shrink-0 justify-center min-h-0 min-w-0 outline-[3px] w-full md:flex md:min-h-[auto] md:min-w-[auto]">
        <div className="relative items-center box-border caret-transparent gap-x-6 flex shrink-0 flex-wrap grid-cols-[repeat(2,minmax(0px,1fr))] justify-center max-w-none min-h-px min-w-[auto] outline-[3px] gap-y-6 w-full md:gap-x-16 md:grid md:flex-nowrap md:grid-cols-[repeat(7,minmax(0px,1fr))] md:max-w-screen-xl md:gap-y-0">
          <FealsPressLogo imageUrl="/images/feals/53.png" />
          <FealsPressLogo imageUrl="/images/feals/55.png" />
          <FealsPressLogo imageUrl="/images/feals/50.png" />
          <FealsPressLogo imageUrl="/images/feals/51.png" />
          <FealsPressLogo imageUrl="/images/feals/56.png" />
          <FealsPressLogo imageUrl="/images/feals/52.png" />
          <FealsPressLogo imageUrl="/images/feals/54.png" />
        </div>
      </div>
    </div>
  );
};
