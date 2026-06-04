import { GlycoflushTopNav } from "../GlycoflushHeader/components/GlycoflushTopNav";

export const GlycoflushHeader = () => {
  return (
    <div className="relative bg-red-800 bg-[url('/images/glycoflush/show-header-cbsnews-60minutes-3200-scaled-1.webp')] bg-no-repeat box-border caret-transparent flex flex-col max-w-full outline-[3px] w-full bg-[position:50%_top] mx-auto">
      <GlycoflushTopNav />
    </div>
  );
};
