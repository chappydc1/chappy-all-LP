type TopPickProps = {
  copy: {
    eyebrow: string;
    headline: string;
    rating: string;
    intro: string;
    points: { title: string; text: string }[];
    testimonial: { quote: string; author: string };
    offer: string;
    ctaText: string;
    guarantee: string;
    note: string;
  };
  ctaUrl: string;
  imageSrc: string;
  checkIcon: string;
  starFull: string;
};

export function SleepingTopPick({ copy, ctaUrl, imageSrc, checkIcon, starFull }: TopPickProps): React.JSX.Element {
  return (
    <section className="text-left mt-10 mx-2.5 rounded-lg border-2 border-amber-400 bg-amber-50/40 p-4 lg:p-8">
      <span className="inline-block bg-amber-400 text-black text-sm font-bold uppercase px-3 py-1 rounded">
        {copy.eyebrow}
      </span>
      <h2 className="text-[22.4px] font-extrabold leading-7 mt-3 lg:text-[32px] lg:leading-[41px]">
        {copy.headline}
      </h2>
      <div className="flex items-center gap-2 mt-2">
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => (
            <img
              key={i}
              src={starFull}
              alt=""
              className="h-4 w-4"
            />
          ))}
        </div>
        <span className="text-sm font-semibold text-slate-700">{copy.rating}</span>
      </div>
      <div className="flex flex-col gap-6 mt-5 lg:flex-row lg:items-start">
        <img
          src={imageSrc}
          alt="AURELUNE Cloud ergonomic pillow supporting a sleeper's neck"
          className="w-full rounded-lg lg:w-[380px] lg:flex-shrink-0"
        />
        <div className="flex-1">
          <p className="text-[15.4px] font-light leading-[25.2px] lg:text-[17px] lg:leading-[28px]">
            {copy.intro}
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {copy.points.map((point) => (
              <li key={point.title} className="flex items-start">
                <img
                  src={checkIcon}
                  alt=""
                  className="h-[26px] w-[26px] flex-shrink-0"
                />
                <div className="pl-1.5 text-sm leading-5 lg:text-base lg:leading-6">
                  <b className="font-bold">{point.title}:</b> {point.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <blockquote className="mt-6 border-l-4 border-amber-400 bg-white px-4 py-3 italic text-stone-600 lg:text-[17px]">
        &ldquo;{copy.testimonial.quote}&rdquo;
        <footer className="mt-1.5 not-italic text-sm font-bold text-slate-700">— {copy.testimonial.author}</footer>
      </blockquote>
      <div className="mt-6 flex flex-col items-center text-center">
        <p className="text-base font-bold text-red-600 lg:text-lg">{copy.offer}</p>
        <a
          href={ctaUrl}
          className="mt-2.5 block w-full rounded-lg bg-blue-500 py-3 text-lg font-bold text-white no-underline hover:bg-blue-600 lg:w-[420px]"
        >
          {copy.ctaText} →
        </a>
        <p className="mt-2.5 text-sm font-semibold text-emerald-700">✓ {copy.guarantee}</p>
        <p className="mt-2 max-w-[560px] text-xs text-stone-500">{copy.note}</p>
      </div>
    </section>
  );
}
