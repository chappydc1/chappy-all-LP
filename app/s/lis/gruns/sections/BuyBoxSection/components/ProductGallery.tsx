export type ProductGalleryImage = {
  src: string;
  alt: string;
  wrapperClassName: string;
  pictureClassName: string;
  imageClassName: string;
};

export type ProductGalleryThumbnail = {
  ariaLabel: string;
  buttonClassName: string;
  src: string;
  alt: string;
  imageClassName: string;
  pictureClassName?: string;
};

export type ProductGalleryProps = {
  featuredWrapperClassName: string;
  slideWrapperClassName: string;
  thumbnailsWrapperClassName: string;
  thumbnailPictureClassName: string;
  images: ProductGalleryImage[];
  thumbnails: ProductGalleryThumbnail[];
  previousIconSrc: string;
  nextIconSrc: string;
};

export const ProductGallery = (props: ProductGalleryProps) => {
  return (
    <div className="box-border caret-transparent contents outline-[3px]">
      <div className={props.featuredWrapperClassName}>
        <div className="box-border caret-transparent h-full outline-[3px] w-full overflow-hidden">
          <div className="box-border caret-transparent flex h-full outline-[3px]">
            {props.images.map((image) => (
              <div key={image.src} className={image.wrapperClassName}>
                <picture className={image.pictureClassName}>
                  <img
                    alt={image.alt}
                    src={image.src}
                    className={image.imageClassName}
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute box-border caret-transparent hidden justify-between outline-[3px] pointer-events-none z-10 top-2/4 inset-x-3">
          <button
            aria-label="Previous image"
            className="items-center bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.5)] caret-transparent flex h-10 justify-center outline-[3px] pointer-events-auto text-center w-10 p-0 rounded-[3.35544e+07px]"
          >
            <span className="box-border caret-transparent block h-[11px] outline-[3px] w-3.5">
              <img
                src={props.previousIconSrc}
                alt="Icon"
                className="box-border caret-transparent outline-[3px]"
              />
            </span>
          </button>
          <button
            aria-label="Next image"
            className="items-center bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.5)] caret-transparent flex h-10 justify-center outline-[3px] pointer-events-auto text-center w-10 p-0 rounded-[3.35544e+07px]"
          >
            <span className="box-border caret-transparent block h-[11px] outline-[3px] w-3.5">
              <img
                src={props.nextIconSrc}
                alt="Icon"
                className="box-border caret-transparent outline-[3px]"
              />
            </span>
          </button>
        </div>
      </div>
      <div className={props.thumbnailsWrapperClassName}>
        {props.thumbnails.map((thumbnail) => (
          <button
            key={`${thumbnail.ariaLabel}-${thumbnail.src}`}
            aria-label={thumbnail.ariaLabel}
            className={thumbnail.buttonClassName}
          >
            {thumbnail.pictureClassName ? (
              <picture className={thumbnail.pictureClassName}>
                <img
                  alt={thumbnail.alt}
                  src={thumbnail.src}
                  className={thumbnail.imageClassName}
                />
              </picture>
            ) : (
              <img
                src={thumbnail.src}
                alt={thumbnail.alt}
                className={thumbnail.imageClassName}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
