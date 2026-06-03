type HeroSectionProps = {
  headline: string;
  subheadline: string;
  imageSrc: string;
  imageAlt: string;
};

export function HeroSection({ headline, subheadline, imageSrc, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative bg-red-100 box-border caret-transparent outline-[3px]">
      <div className="relative text-stone-800 [align-items:normal] box-border caret-transparent gap-x-0 flex flex-col-reverse outline-[3px] gap-y-0 z-[1] md:items-center md:flex-row">
        <div className="box-border caret-transparent basis-full grow min-h-[auto] min-w-[auto] outline-[3px] w-full p-5 md:basis-6/12 md:px-20 md:py-8">
          <div className="box-border caret-transparent max-w-[354px] outline-[3px] text-left w-full mx-auto md:max-w-screen-md">
            <h1 className="text-4xl font-extrabold box-border caret-transparent leading-10 outline-[3px] mb-2.5 md:text-[56px] md:leading-[68px] md:mb-6">
              {headline}
            </h1>
            <p className="text-base box-border caret-transparent leading-6 outline-[3px] md:text-lg md:leading-7">
              {subheadline}
            </p>
          </div>
        </div>
        <div className="box-border caret-transparent basis-full grow min-h-[auto] min-w-[auto] outline-[3px] w-full md:basis-6/12">
          <div className="box-border caret-transparent contents outline-[3px]">
            <picture className="box-border caret-transparent outline-[3px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageSrc}
                alt={imageAlt}
                className="aspect-[auto_420_/_420] box-border caret-transparent max-w-full outline-[3px] w-full"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
