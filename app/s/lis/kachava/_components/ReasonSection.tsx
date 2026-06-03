type ReasonSectionProps = {
  title: string;
  paragraphs: string[];
  cta: { label: string; href: string } | null;
  imageSrc: string;
  imageAlt: string;
  layout: "imageRight" | "imageLeft";
};

export function ReasonSection({ title, paragraphs, cta, imageSrc, imageAlt, layout }: ReasonSectionProps) {
  const isRight = layout === "imageRight";

  return (
    <section className="relative box-border caret-transparent outline-[3px] px-7 py-6 md:pt-16 md:pb-8">
      <div
        className={`relative text-stone-800 [align-items:normal] box-border caret-transparent gap-x-6 flex flex-col max-w-[1200px] outline-[3px] gap-y-6 z-[1] mx-auto md:items-center md:gap-x-16 md:gap-y-16${isRight ? " md:flex-row" : ""}`}
      >
        <div className="box-border caret-transparent gap-x-[normal] basis-full grow min-h-[auto] min-w-[auto] outline-[3px] gap-y-[normal] px-5 py-3 md:gap-x-20 md:basis-6/12 md:gap-y-20 md:px-16 md:py-28">
          <div className="box-border caret-transparent max-w-screen-md outline-[3px] text-left w-full mx-auto">
            <h2 className="text-[28px] font-bold box-border caret-transparent leading-9 outline-[3px] mb-2.5 md:text-5xl md:font-extrabold md:leading-[56px] md:mb-6">
              {title}
            </h2>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-base box-border caret-transparent leading-6 outline-[3px] md:text-lg md:leading-7">
                {p}
              </p>
            ))}
            {cta && (
              <p className="text-base box-border caret-transparent leading-6 outline-[3px] mt-4 md:text-lg md:leading-7">
                <a
                  href={cta.href}
                  aria-label="Navigate to shakes page"
                  className="text-stone-50 font-bold items-center bg-stone-800 box-border caret-transparent inline-flex justify-center min-w-[258px] outline-[3px] w-full border border-stone-800 mt-7 px-5 py-3 rounded-lg border-solid md:w-auto hover:text-stone-800 hover:bg-stone-50"
                >
                  {cta.label}
                </a>
              </p>
            )}
          </div>
        </div>
        <div className="box-border caret-transparent basis-full grow min-h-[auto] min-w-[auto] outline-[3px] md:basis-6/12">
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
