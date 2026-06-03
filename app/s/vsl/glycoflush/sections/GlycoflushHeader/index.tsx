import { GlycoflushTopNav } from "../GlycoflushHeader/components/GlycoflushTopNav";

export const GlycoflushHeader = () => {
  return (
    <div className="relative bg-red-800 bg-[url('https://cnbanetworks.com/glycoflush-36cad7c7-6174-46ca-a980-7acc87e61ad5/assets/img/show-header-cbsnews-60minutes-3200-scaled-1.webp')] bg-no-repeat box-border caret-transparent flex flex-col max-w-full outline-[3px] w-full bg-[position:50%_top] mx-auto">
      <GlycoflushTopNav />
    </div>
  );
};
