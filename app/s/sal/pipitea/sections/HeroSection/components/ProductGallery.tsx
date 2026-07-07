"use client"

export type PipiteaProductGalleryProps = {
  images: string[]
  currentImage: number
  onImageChange: (index: number) => void
  variant: "main" | "thumbnails"
}

export const PipiteaProductGallery = ({
  images,
  currentImage,
  onImageChange,
  variant,
}: PipiteaProductGalleryProps): JSX.Element => {
  if (variant === "thumbnails") {
    return (
      <div className="flex flex-wrap gap-1.5 mt-2 mx-[15px] md:mx-auto justify-center">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => onImageChange(index)}
            className={`shrink-0 rounded-[5px] border-2 border-solid transition-opacity ${
              index === currentImage
                ? "border-pink-950 opacity-100"
                : "border-zinc-300 opacity-60"
            }`}
          >
            <img
              src={image}
              alt=""
              className="w-[49px] md:w-[68px] rounded-[5px] block object-cover"
            />
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden mx-auto w-full max-w-[565px]">
      <img
        src={images[currentImage]}
        alt=""
        className="w-full object-contain block"
      />
      <button
        aria-label="Next slide"
        onClick={() => onImageChange((currentImage + 1) % images.length)}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 flex items-center justify-center rounded-full z-10 text-2xl leading-none"
      >
        ›
      </button>
      <button
        aria-label="Previous slide"
        onClick={() =>
          onImageChange((currentImage - 1 + images.length) % images.length)
        }
        className={`absolute left-2.5 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 flex items-center justify-center rounded-full z-10 text-2xl leading-none transition-opacity ${
          currentImage === 0 ? "opacity-35 pointer-events-none" : "opacity-100"
        }`}
      >
        ‹
      </button>
    </div>
  )
}
