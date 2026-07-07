type FloatingActionButtonProps = {
  chatOpenSrc: string;
  chatCloseSrc: string;
};

export function KachavaFloatingActionButton({ chatOpenSrc, chatCloseSrc }: FloatingActionButtonProps) {
  return (
    <div className="fixed box-border caret-transparent h-16 outline-[3px] w-16 z-10 right-4 bottom-4">
      <button
        aria-label="Open live chat"
        className="relative items-center bg-emerald-300 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(36,36,36,0.1)_0px_8px_16px_0px,rgba(36,36,36,0.04)_0px_1px_4px_0px] caret-transparent inline-flex h-full justify-center outline-[3px] text-center w-full overflow-hidden p-0 rounded-full"
      >
        <div className="absolute items-center box-border caret-transparent flex h-full justify-center outline-[3px] w-full left-0 top-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={chatOpenSrc}
            alt="Open live chat"
            className="box-border caret-transparent h-3/5 outline-[3px] w-3/5"
          />
        </div>
        <div className="absolute items-center box-border caret-transparent flex h-full justify-center outline-[3px] w-full left-0 top-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={chatCloseSrc}
            alt="Close live chat"
            className="box-border caret-transparent h-4 outline-[3px] w-4"
          />
        </div>
      </button>
    </div>
  );
}
