import { useScrollReveal } from "../../hooks/useScrollReveal";

export const MediaBlock = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div className="caret-transparent max-w-[1040px] mx-auto px-5 md:px-8" ref={ref}>
      <div className="reveal caret-transparent mb-10">
        <div className="relative caret-transparent before:accent-auto before:bg-sky-600 before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-1.5 before:border-separate before:left-0 before:top-0 before:font-source_sans_3 overflow-hidden">
          <picture className="caret-transparent block overflow-hidden">
            <img
              alt="horizon hearing aids"
              src="/images/hear/ha-25-desk.jpg"
              className="caret-transparent align-baseline w-full transition-transform duration-700 hover:scale-[1.01]"
            />
          </picture>
          <div className="caret-transparent pl-5 pr-[13px] pt-[13px] md:pl-[35px]">
            <p className="text-xl caret-transparent leading-[26px] md:text-[22px] md:leading-[37.4px]">
              Horizon IX hearing aids combine powerful German technology with a
              tiny design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
