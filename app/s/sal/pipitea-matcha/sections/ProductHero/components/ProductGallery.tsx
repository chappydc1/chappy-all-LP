"use client"
import { useState } from "react"

const SLIDES = [
  "https://c.animaapp.com/mq0c6l4mp0WBgi/assets/1762549232000_Slider01.webp",
  "https://c.animaapp.com/mq0c6l4mp0WBgi/assets/1762549242945_Slider2.webp",
  "https://c.animaapp.com/mq0c6l4mp0WBgi/assets/1762904386311_Img3.webp",
  "https://c.animaapp.com/mq0c6l4mp0WBgi/assets/1762549280191_Slider4.webp",
  "https://c.animaapp.com/mq0c6l4mp0WBgi/assets/1762549291500_Slider5.webp",
  "https://c.animaapp.com/mq0c6l4mp0WBgi/assets/1762549300087_Slider6.webp",
  "https://c.animaapp.com/mq0c6l4mp0WBgi/assets/1762549311151_Slider07.webp",
  "https://c.animaapp.com/mq0c6l4mp0WBgi/assets/1762549253225_Slider03.webp",
]

export const PipiteaMatchaProductGallery = (): JSX.Element => {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i === 0 ? SLIDES.length - 1 : i - 1))
  const next = () => setActive((i) => (i === SLIDES.length - 1 ? 0 : i + 1))

  return (
    <div className="sticky flex flex-col items-center w-full z-10 top-2.5">
      <div className="relative w-full overflow-hidden">
        <img
          src={SLIDES[active]}
          alt=""
          className="w-full max-w-full block"
        />
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white z-10"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white z-10"
        >
          ›
        </button>
      </div>

      <div className="flex gap-2.5 mt-2 px-[15px] md:px-0 w-full overflow-x-auto">
        {SLIDES.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="shrink-0 focus:outline-none"
          >
            <img
              src={src}
              alt=""
              className={`w-[49px] md:w-[72px] rounded-[5px] border-2 transition-opacity ${
                i === active
                  ? "border-zinc-700 opacity-100"
                  : "border-zinc-300 opacity-60"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="hidden md:flex w-full mt-[25px] border border-zinc-700 rounded-lg p-[15px]">
        <div className="flex flex-col w-full">
          <img
            src="https://c.animaapp.com/mq0c6l4mp0WBgi/assets/28.webp"
            alt=""
            className="w-[95px] object-scale-down"
          />
          <p className="text-black text-[15px] leading-[22.5px] text-left mt-3">
            &quot;I&apos;ve been dealing with constant bloating and digestive issues for years. I tried probiotics, digestive enzymes, even cut out half the foods I love. Nothing worked long-term. Since starting Ceremonial Matcha, my gut feels so much better.&quot;
          </p>
          <div className="flex items-center justify-between mt-[15px]">
            <div className="flex items-center gap-2">
              <img
                src="https://c.animaapp.com/mq0c6l4mp0WBgi/assets/29.webp"
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <strong className="text-black text-sm">— Cynthia R., United States</strong>
            </div>
            <div className="flex items-center gap-1.5">
              <img
                src="https://c.animaapp.com/mq0c6l4mp0WBgi/assets/10.svg"
                alt=""
                className="w-4 h-4"
              />
              <strong className="text-black text-sm">Verified Customer</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
