import { ScratchModalClose } from "./ScratchModalClose";
import { ScratchPrizeCard } from "./ScratchPrizeCard";

export const ScratchModalContent = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="items-center bg-transparent bg-[url('https://files.alia-prod.com/desktopbgmin21380beb8da5188c.webp-1754589668126')] bg-cover box-border caret-transparent flex flex-row h-full justify-center outline-[3px] w-full bg-[position:93%_50%] p-4 md:[align-items:normal] md:bg-white md:flex-col md:bg-[position:50%_top] md:p-0">
      <ScratchModalClose onClose={onClose} />
      <div className="[align-items:normal] box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal min-h-0 min-w-0 outline-0 gap-y-[normal] w-auto z-auto pb-0 md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-6 md:flex md:flex-col md:h-full md:justify-center md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-6 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[1] md:[mask-position:0%] md:bg-left-top md:pb-8 md:scroll-m-0 md:scroll-p-[auto]">
        <img
          src="https://c.animaapp.com/yNHRUeS-CJuG-mcvwTd3-Q/assets/javvylogoblueyellowsparkles.svg-1753727812740.svg"
          alt="Logo"
          className="box-content caret-black max-w-none min-h-0 min-w-0 outline-0 w-auto mb-0 md:aspect-auto md:box-border md:caret-transparent md:max-w-full md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[120px] md:[mask-position:0%] md:bg-left-top md:mb-2 md:scroll-m-0 md:scroll-p-[auto]"
        />
        <div className="box-content caret-black min-h-0 min-w-0 outline-0 md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="text-base box-content caret-black leading-[normal] outline-0 text-start font-times md:text-[56px] md:aspect-auto md:box-border md:caret-transparent md:leading-[61.6px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-alia_kefir">
            <p className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              Try your luck
            </p>
          </div>
          <div className="text-base font-normal box-content caret-black leading-[normal] outline-0 text-start md:text-[22px] md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[26.4px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <p className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              Scratch below to see what you win
            </p>
          </div>
        </div>
        <ScratchPrizeCard />
      </div>
    </div>
  );
};
