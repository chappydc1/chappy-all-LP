import { content } from "../../../content";

export const NuzGuaranteeCard = () => {
  const gc = content.hero.guaranteeCard;
  return (
    <div className="items-center bg-stone-200/40 box-border caret-transparent gap-x-[15px] hidden justify-center gap-y-[15px] border border-slate-300 mt-5 mb-2.5 px-2.5 py-[5px] rounded-bl rounded-br rounded-tl rounded-tr border-solid md:bg-transparent md:gap-x-[normal] md:gap-y-[normal] md:border-gray-800 md:my-4 md:p-0 md:rounded-none md:border-0 md:border-none">
      <div className="box-border caret-transparent w-1/5 md:w-[30%]">
        <img
          src={gc.imageUrl}
          alt=""
          className="box-border caret-transparent inline-block max-w-full w-[115px]"
        />
      </div>
      <div className="box-border caret-transparent w-[78%] md:w-[70%]">
        <div className="text-base font-bold box-border caret-transparent leading-6 md:text-lg md:font-normal md:leading-[27px]">
          {gc.title}
        </div>
        <div className="box-border caret-transparent w-full pt-0.5"></div>
        <div className="text-black text-[14.32px] font-medium box-border caret-transparent leading-[20.048px] md:text-gray-800">
          {gc.body}
        </div>
      </div>
    </div>
  );
};
