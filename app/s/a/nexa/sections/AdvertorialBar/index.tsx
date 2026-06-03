import { AdvertorialContent } from "./components/AdvertorialContent";

export const AdvertorialBar = () => {
  return (
    <div className="items-stretch bg-black/0 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] px-0 py-px md:flex-nowrap md:pl-[17%] md:pr-[20%]">
      <AdvertorialContent />
    </div>
  );
};
