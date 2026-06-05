export type ProductGalleryProps = {
  outerVariantClassName: string;
  innerVariantClassName: string;
  slideVariantClassName: string;
  firstImageVariantClassName: string;
  imageVariantClassName: string;
  showNavigation: boolean;
};

export const ProductGallery = (props: ProductGalleryProps) => {
  const images = [
    "https://c.animaapp.com/mq03tlhwPsu7gY/assets/1771737765843_pipi.webp",
    "https://c.animaapp.com/mq03tlhwPsu7gY/assets/1771737780393_hb.webp",
    "https://c.animaapp.com/mq03tlhwPsu7gY/assets/1771739264478_hb_.webp",
    "https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765556673445_slider04.webp",
    "https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765556684482_slider05.webp",
    "https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765556693972_slider06.webp",
    "https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765556705254_slider07.webp",
    "https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765556715092_slider08.webp",
  ];

  return (
    <div
      className={`relative box-border caret-transparent list-none outline-[3px] z-[1] overflow-hidden ${props.outerVariantClassName}`}
    >
      <div
        className={`relative caret-transparent flex h-full outline-[3px] w-full z-[1] ${props.innerVariantClassName}`}
      >
        {images.map((image, index) => (
          <div
            key={image}
            role="group"
            aria-label={`${index + 1} / 8`}
            className={`relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] mr-2.5 ${props.slideVariantClassName}`}
          >
            <img
              src={image}
              title=""
              alt=""
              className={`box-border caret-transparent inline max-w-full outline-[3px] ${
                index === 0
                  ? props.firstImageVariantClassName
                  : props.imageVariantClassName
              }`}
            />
          </div>
        ))}
      </div>
      {props.showNavigation ? (
        <>
          <div
            role="button"
            aria-label="Next slide"
            className="absolute text-white items-center bg-black/40 box-border caret-transparent flex h-10 justify-center leading-[14px] mt-[-22px] outline-[3px] w-10 z-10 rounded-[50%] right-2.5 top-2/4 after:accent-auto after:box-border after:caret-transparent after:text-white after:block after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[15px] after:list-outside after:list-none after:min-h-[auto] after:min-w-[auto] after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-swiper_icons"
          ></div>
          <div
            role="button"
            aria-label="Previous slide"
            className="absolute text-white items-center bg-black/40 box-border caret-transparent hidden h-10 justify-center leading-[14px] mt-[-22px] opacity-35 outline-[3px] pointer-events-none w-10 z-10 rounded-[50%] left-2.5 top-2/4 after:accent-auto after:box-border after:caret-transparent after:text-white after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[15px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-none after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-swiper_icons"
          ></div>
        </>
      ) : null}
    </div>
  );
};
