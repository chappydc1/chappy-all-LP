'use client';
import { useState, useRef } from 'react';

const MAIN_SLIDES = [
  { src: '/s/p/rosabella-1/98.jpg' },
  { src: '/s/p/rosabella-1/88.jpg' },
  { src: '/s/p/rosabella-1/115.png' },
  { src: '/s/p/rosabella-1/37.webp' },
  { src: '/s/p/rosabella-1/41.webp' },
  { src: '/s/p/rosabella-1/36.webp' },
  { src: '/s/p/rosabella-1/39.webp' },
  { src: '/s/p/rosabella-1/40.webp' },
  { src: '/s/p/rosabella-1/42.webp' },
  { src: '/s/p/rosabella-1/38.webp' },
];

const THUMBNAILS = [
  '/s/p/rosabella-1/4.avif',
  '/s/p/rosabella-1/5.avif',
  '/s/p/rosabella-1/6.avif',
  '/s/p/rosabella-1/11.avif',
  '/s/p/rosabella-1/9.avif',
  '/s/p/rosabella-1/10.avif',
  '/s/p/rosabella-1/12.avif',
  '/s/p/rosabella-1/13.avif',
  '/s/p/rosabella-1/14.avif',
  '/s/p/rosabella-1/15.avif',
];

const THUMB_STEP = 96;
const THUMBS_VISIBLE = 5;

export const MainProductCarousel = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (idx: number) => {
    setCurrent(Math.max(0, Math.min(MAIN_SLIDES.length - 1, idx)));
  };

  const thumbOffset = Math.max(0, current - THUMBS_VISIBLE) * THUMB_STEP;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      goTo(delta > 0 ? current + 1 : current - 1);
    }
    touchStartX.current = null;
  };

  const handleArrowKey = (e: React.KeyboardEvent, dir: 1 | -1) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goTo(current + dir);
    }
  };

  return (
    <div className="relative box-border caret-transparent outline-[3px] max-w-[307.13px] md:max-w-[566px] mx-auto">
      {/* Main slide track — supports touch swipe on mobile */}
      <div
        className="relative box-border caret-transparent list-none outline-[3px] z-[1] overflow-hidden mx-auto max-w-[307.13px] md:max-w-[566px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="relative caret-transparent flex outline-[3px] z-[1] transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${-current * 100}%)` }}
        >
          {MAIN_SLIDES.map((slide, i) => (
            <div
              key={i}
              role="group"
              aria-label={`${i + 1} / ${MAIN_SLIDES.length}`}
              className="relative box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <img
                src={slide.src}
                alt="Rosabella Organic Beetroot Capsules"
                title=""
                loading={i === 0 ? 'eager' : 'lazy'}
                className="box-border caret-transparent inline max-w-full outline-[3px] w-full aspect-square"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile prev/next arrows (always visible) */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(current - 1)}
        disabled={current === 0}
        className="absolute md:hidden text-black items-center bg-white box-border caret-transparent flex h-9 justify-center left-1 leading-4 outline-[3px] w-9 z-10 border-neutral-950 rounded-[50%] border-2 border-solid top-1/2 -translate-y-1/2 cursor-pointer disabled:opacity-30"
      >
        <img src="/lp-images-files-videos-fonts/p/rosabella-1/icon-1.svg" alt="" className="w-[7px] pointer-events-none" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(current + 1)}
        disabled={current === MAIN_SLIDES.length - 1}
        className="absolute md:hidden text-black items-center bg-white box-border caret-transparent flex h-9 justify-center right-1 leading-4 outline-[3px] w-9 z-10 border-neutral-950 rounded-[50%] border-2 border-solid top-1/2 -translate-y-1/2 cursor-pointer disabled:opacity-30"
      >
        <img src="/lp-images-files-videos-fonts/p/rosabella-1/icon-2.svg" alt="" className="w-[7px] pointer-events-none" />
      </button>

      {/* Desktop thumbnails + arrows */}
      <div className="box-border caret-transparent hidden list-none outline-[3px] z-[1] overflow-hidden mt-2 mx-auto md:block md:max-w-[566px]">
        <div
          className="relative caret-transparent flex outline-[3px] z-[1] mx-auto transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${-thumbOffset}px)` }}
        >
          {THUMBNAILS.map((src, i) => (
            <div
              key={i}
              role="button"
              aria-label={`View image ${i + 1}`}
              tabIndex={0}
              onClick={() => goTo(i)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goTo(i); } }}
              className="relative box-border caret-transparent shrink-0 h-full min-h-0 min-w-0 outline-[3px] w-[86px] mr-2.5 md:min-h-[auto] md:min-w-[auto] cursor-pointer"
            >
              <img
                src={src}
                alt={`Rosabella Organic Beetroot Capsules thumbnail ${i + 1}`}
                title=""
                loading="lazy"
                className={[
                  'aspect-[auto_220_/_220] box-border caret-transparent inline max-w-full outline-[3px] w-[220px] rounded-[5px] transition-opacity duration-200',
                  current === i
                    ? 'border-zinc-400 border-2 border-solid opacity-60'
                    : 'opacity-100',
                ].join(' ')}
              />
            </div>
          ))}
        </div>

        <div
          role="button"
          aria-label="Previous slide"
          tabIndex={0}
          onClick={() => goTo(current - 1)}
          onKeyDown={(e) => handleArrowKey(e, -1)}
          className="absolute text-black items-center bg-white box-border caret-transparent flex h-[46px] justify-center left-[-22.5px] leading-4 mt-[-22px] outline-[3px] w-[46px] z-10 border-neutral-950 rounded-[50%] border-2 border-solid bottom-[22px] cursor-pointer select-none"
        >
          <img
            src="/lp-images-files-videos-fonts/p/rosabella-1/icon-1.svg"
            alt="Icon"
            className="box-border caret-transparent h-full object-contain outline-[3px] pointer-events-none w-[9px]"
          />
        </div>

        <div
          role="button"
          aria-label="Next slide"
          tabIndex={0}
          onClick={() => goTo(current + 1)}
          onKeyDown={(e) => handleArrowKey(e, 1)}
          className="absolute text-black items-center bg-white box-border caret-transparent flex h-[46px] justify-center leading-4 mt-[-22px] outline-[3px] right-[-22.5px] w-[46px] z-10 border-neutral-950 rounded-[50%] border-2 border-solid bottom-[22px] cursor-pointer select-none"
        >
          <img
            src="/lp-images-files-videos-fonts/p/rosabella-1/icon-2.svg"
            alt="Icon"
            className="box-border caret-transparent h-full object-contain outline-[3px] pointer-events-none w-[9px]"
          />
        </div>
      </div>
    </div>
  );
};
