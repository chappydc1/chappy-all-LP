export const AlertBanner = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5">
      <div className="items-center box-border caret-transparent flex justify-center text-center w-full">
        <div className="bg-black/40 shadow-[rgba(0,0,0,0.2)_0px_4px_25px_0px] box-border caret-transparent min-h-[auto] min-w-[auto] px-5 py-3 rounded-[10px]">
          <span className="text-white text-lg font-semibold box-border caret-transparent leading-[25.2px] font-fredoka">
            This video is causing a stir in
            <span className="text-black bg-white box-border caret-transparent inline-block px-1.5 rounded-bl rounded-br rounded-tl rounded-tr">
              Boardman
            </span>
            {" "}— watch before it&#39;s taken down
          </span>
        </div>
      </div>
    </div>
  );
};
