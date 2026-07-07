export const OprahVideoSection = () => {
  return (
    <div className="relative self-center box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-[89%]">
      <div className="box-border caret-transparent block w-full mx-auto">
        <div
          className="relative bg-neutral-800 box-border caret-transparent z-[5] pt-[56.25%]"
          style={{
            boxShadow: "rgb(51,51,51) 0px 0px 160px 0px inset, 0 8px 40px rgba(0,0,0,0.35)",
          }}
        >
          <div className="absolute items-center box-border caret-transparent flex h-full justify-center opacity-[0.035] translate-x-[-50.0%] translate-y-[-50.0%] w-full z-[1] left-2/4 top-2/4">
            <img
              src="/images/oprah/icon-1.svg"
              alt="Icon"
              className="box-border caret-transparent h-4/5 align-baseline w-4/5"
            />
          </div>
          <div className="absolute text-white text-2xl items-center box-border caret-transparent flex flex-col h-full justify-center leading-9 w-full z-10 left-0 top-0">
            <a
              href="#"
              className="text-pink-600 box-border caret-transparent block min-h-[auto] min-w-[auto] transition-colors duration-200 hover:text-slate-400"
              onClick={(e) => e.preventDefault()}
            >
              <p className="text-stone-300 text-[13.44px] box-border caret-transparent leading-[20.16px] text-center z-10 mb-[14.4px] font-helvetica md:text-[29.568px] md:leading-[44.352px]">
                Video not found, contact the support of
                <span className="text-red-500 text-[13.44px] font-bold box-border caret-transparent leading-[20.16px] md:text-[29.568px] md:leading-[44.352px]">
                  {" "}VTurb{" "}
                </span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
