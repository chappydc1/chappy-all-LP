export const FeaturedImage = () => {
  return (
    <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full mx-auto px-4">
      <div className="bg-white border border-zinc-200 box-border caret-transparent flex flex-wrap gap-x-6 gap-y-2 justify-center max-w-[820px] outline-[3px] text-center w-full px-5 py-4">
        <span className="text-zinc-500 text-xs font-bold tracking-[1px] uppercase">
          Reader interest featured in
        </span>
        <span className="text-zinc-800 text-sm font-extrabold uppercase">
          Wellness
        </span>
        <span className="text-zinc-800 text-sm font-extrabold uppercase">
          Health Watch
        </span>
        <span className="text-zinc-800 text-sm font-extrabold uppercase">
          Morning Brief
        </span>
      </div>
    </div>
  );
};
