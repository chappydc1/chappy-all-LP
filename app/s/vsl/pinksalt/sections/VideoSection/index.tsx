"use client";

type VideoSectionProps = {
  iconSrc?: string;
  errorText?: string;
  brand?: string;
};

export const PinksaltVideoSection = ({
  iconSrc = "/images/pinksalt/icon-1.svg",
  errorText = "Video not found, contact the support of",
  brand = "VTurb",
}: VideoSectionProps) => {
  return (
    <div className="relative self-center gap-x-5 max-w-full min-h-[auto] gap-y-5 w-[89%]">
      <div className="block w-full mx-auto">
        <div
          className="relative bg-neutral-800 z-[5] pt-[56.25%]"
          style={{
            boxShadow: "rgb(51,51,51) 0px 0px 160px 0px inset, 0 8px 40px rgba(0,0,0,0.35)",
          }}
        >
          <div className="absolute items-center flex h-full justify-center opacity-[0.035] translate-x-[-50%] translate-y-[-50%] w-full z-[1] left-2/4 top-2/4">
            <img src={iconSrc} alt="Icon" className="h-4/5 w-4/5" />
          </div>
          <div className="absolute text-white text-2xl items-center flex flex-col h-full justify-center leading-9 w-full z-10 left-0 top-0">
            <a
              href="#"
              className="text-pink-600 block transition-colors duration-200 hover:text-slate-400"
              onClick={(e) => e.preventDefault()}
            >
              <p className="text-stone-300 text-[13.44px] leading-[20.16px] text-center z-10 mb-[14.4px] font-helvetica md:text-[29.568px] md:leading-[44.352px]">
                {errorText}
                <span className="text-red-500 font-bold"> {brand} </span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
