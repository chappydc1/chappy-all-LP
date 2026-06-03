import { ComparisonTable } from "../ComparisonSection/components/ComparisonTable";

export const ComparisonSection = () => {
  return (
    <div className="items-stretch bg-neutral-100 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] md:flex-nowrap">
      <div className="relative items-center bg-white box-border caret-transparent block basis-px flex-col grow justify-center max-w-[1400px] min-h-[25px] outline-[3px] w-min m-auto pt-[30px] pb-2.5 px-[15px] md:flex md:pt-[50px] md:px-[100px]">
        <div className="items-center box-border caret-transparent flex flex-col justify-center min-h-0 min-w-0 outline-[3px] w-auto pt-px px-0 md:min-h-[auto] md:min-w-[auto] md:w-full md:px-2.5">
          <div className="text-neutral-500 text-[19px] font-bold box-border caret-transparent leading-[23.16px] min-h-[auto] min-w-[auto] outline-[3px] text-center font-montserrat md:text-left"></div>
          <div className="text-neutral-500 text-[19px] font-bold box-border caret-transparent leading-[28.5px] min-h-[auto] min-w-[auto] outline-[3px] text-center font-montserrat md:text-xl md:leading-[30px]">
            What makes the
            <span className="text-emerald-500 text-[19px] box-border caret-transparent leading-[28.5px] outline-[3px] text-center md:text-xl md:leading-[30px]">
              RejuvaKnee
            </span>
            massager special?
          </div>
          <div className="text-[23px] font-bold box-border caret-transparent leading-[33px] min-h-[auto] min-w-[auto] outline-[3px] text-center mt-5 font-montserrat md:text-[33px] md:leading-[42px]">
            &quot;The RejuvaKnee &#39;Triple Method&#39; Massager Just
            Works&quot;
          </div>
          <ComparisonTable />
          <div className="text-[23px] font-bold box-border caret-transparent leading-[32.2px] min-h-[auto] min-w-[auto] outline-[3px] text-center mt-6 font-montserrat md:text-[33px] md:leading-[46.2px] md:text-left md:mt-8"></div>
        </div>
      </div>
    </div>
  );
};
