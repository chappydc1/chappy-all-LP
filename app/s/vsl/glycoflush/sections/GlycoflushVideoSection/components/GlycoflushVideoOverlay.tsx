export const GlycoflushVideoOverlay = () => {
  return (
    <div className="relative caret-transparent outline-[3px] w-full z-0 pt-[177.78%] font-times_new_roman">
      <div className="absolute text-white items-center bg-black box-border caret-transparent flex h-full justify-center outline-[3px] w-full z-[99999] left-0 top-0 font-arial">
        <div className="aspect-square bg-[radial-gradient(farthest-side,rgb(229,9,20)_94%,rgba(0,0,0,0)),conic-gradient(rgba(0,0,0,0)_30%,rgb(229,9,20))] bg-size-[8px_8px,auto] box-border caret-transparent [mask-image:radial-gradient(farthest-side,rgba(0,0,0,0)_calc(100%_-_8px),rgb(0,0,0)_0px)] outline-[3px] w-20 bg-[position:50%,0%_0%,0%] rounded-[50%]"></div>
        <div className="absolute text-lg font-semibold box-border caret-transparent outline-[3px] left-2/4 top-2/4">
          99%
        </div>
      </div>
    </div>
  );
};
