export type CarouselControlsProps = {
  onPrev: () => void;
  onNext: () => void;
  currentPage: number;
  totalPages: number;
};

export const CarouselControls = ({ onPrev, onNext, currentPage, totalPages }: CarouselControlsProps) => {
  return (
    <div className="box-border caret-transparent outline-[3px] mt-10">
      <div className="items-center box-border caret-transparent flex justify-center outline-[3px] text-center w-full z-10 left-0 bottom-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            role="button"
            aria-label={`Go to slide ${i + 1}`}
            className={[
              'bg-transparent box-content caret-black inline h-auto min-h-0 min-w-0 outline-0 w-auto md:aspect-auto md:bg-pink-600 md:box-border md:caret-transparent md:block md:h-0.5 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[78px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]',
              i !== currentPage ? 'opacity-100 md:opacity-20' : '',
            ].join(' ')}
          />
        ))}
      </div>
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-row-reverse justify-center outline-[3px] gap-y-4 mt-6 md:mt-5">
        <button
          type="button"
          aria-label="Next slide"
          onClick={onNext}
          disabled={currentPage >= totalPages - 1}
          className="text-blue-600 items-center box-border caret-transparent flex h-7 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-7 z-10 border rounded-[50%] border-solid right-1 top-2/4 disabled:opacity-30 cursor-pointer"
        >
          <img
            src="/lp-images-files-videos-fonts/p/rosabella-1/icon-11.svg"
            alt="Icon"
            className="box-border caret-transparent h-4 object-contain outline-[3px] pointer-events-none w-4"
          />
        </button>
        <button
          type="button"
          aria-label="Previous slide"
          onClick={onPrev}
          disabled={currentPage <= 0}
          className="text-blue-600 items-center box-border caret-transparent flex h-7 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-7 z-10 border rounded-[50%] border-solid left-1 top-2/4 disabled:opacity-30 cursor-pointer"
        >
          <img
            src="/lp-images-files-videos-fonts/p/rosabella-1/icon-12.svg"
            alt="Icon"
            className="box-border caret-transparent h-4 object-contain outline-[3px] w-4 -scale-100"
          />
        </button>
      </div>
    </div>
  );
};
