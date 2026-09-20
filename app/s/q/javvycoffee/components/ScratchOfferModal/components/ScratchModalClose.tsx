export const ScratchModalClose = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="static box-content caret-black outline-0 z-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-20 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-4 md:top-4">
      <div
        role="button"
        aria-label="Close popup"
        onClick={onClose}
        className="cursor-pointer text-black text-base box-content caret-black leading-[normal] outline-0 md:text-black/60 md:text-[28px] md:aspect-auto md:box-border md:caret-transparent md:leading-[33.6px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
      >
        <div className="box-content caret-black block flex-row justify-normal outline-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:justify-center md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <img
            src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/icon-9.svg"
            alt="Icon"
            className="box-content caret-black h-auto outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:h-7 md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
          />
        </div>
      </div>
    </div>
  );
};
