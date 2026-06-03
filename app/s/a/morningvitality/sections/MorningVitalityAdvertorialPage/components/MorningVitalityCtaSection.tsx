export type MorningVitalityCtaSectionProps = {
  href: string;
  ctaText: string;
  imageSrc?: string;
  imageClassName?: string;
};

export const MorningVitalityCtaSection = (props: MorningVitalityCtaSectionProps) => {
  return (
    <div className="bg-slate-50 box-border caret-transparent outline-[3px] border border-stone-300 bg-[position:0px_0px] mb-5 p-5 border-solid">
      <a
        href={props.href}
        className="text-cyan-600 box-border caret-transparent outline-[3px] hover:text-cyan-800 hover:outline-0 hover:underline hover:border-cyan-800"
      >
        {props.imageSrc ? (
          <img
            src={props.imageSrc}
            className={
              props.imageClassName ||
              "box-border caret-transparent max-w-full outline-[3px] mb-[5px] mx-auto"
            }
          />
        ) : null}
      </a>
      <div className="box-border caret-transparent block outline-[3px]">
        <a
          href={props.href}
          className="text-slate-50 text-2xl font-bold bg-green-600 shadow-[rgb(99,106,123)_2.8px_2.8px_8px_2px] box-border caret-transparent inline-block tracking-[0.02px] leading-[28.8px] outline-[3px] w-[95%] mb-2.5 px-10 py-[15px] rounded-bl rounded-br rounded-tl rounded-tr font-open_sans hover:outline-0 hover:underline"
        >
          {props.ctaText}
        </a>
      </div>
    </div>
  );
};
