import { NexaAdvertorialContent } from "./components/NexaAdvertorialContent";

export const NexaAdvertorialBar = () => {
  return (
    <div className="items-stretch bg-black/0 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] px-0 py-px md:flex-nowrap md:pl-[17%] md:pr-[20%]">
      <NexaAdvertorialContent />
    </div>
  );
};
