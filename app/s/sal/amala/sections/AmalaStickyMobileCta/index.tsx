import { OFFER_SECTION_HREF } from "../../config/links";

export const AmalaStickyMobileCta = () => {
  return (
    <section
      className="items-center bg-white bg-no-repeat box-border caret-transparent flex flex-col justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full fixed bottom-0 left-0 right-0 z-10 border-neutral-400/50 bg-center px-[15px] py-[9px] border-t md:hidden md:min-h-0 md:min-w-0"
    >
      <div
        className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full bg-center md:flex-row md:min-h-0 md:min-w-0"
      >
        <div
          className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full md:min-h-0 md:min-w-0"
        >
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="items-stretch box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full md:min-h-0 md:min-w-0"
            >
              <a
                href={OFFER_SECTION_HREF}
                title="UNLOCK THE POWER OF PRIMECELL H2"
                className="relative cursor-pointer text-white text-[15px] font-bold self-center bg-gray-800 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent flex flex-col tracking-[0.3px] leading-[22.95px] max-w-[565px] min-h-[auto] min-w-[auto] text-center align-middle w-full px-2.5 py-3 rounded-[30px] md:text-zinc-800 md:text-lg md:bg-zinc-700 md:tracking-[0.36px] md:leading-[27.54px] md:min-h-0 md:min-w-0"
              >
                <div
                  className="text-white text-[15px] box-border caret-transparent tracking-[0.3px] leading-[22.95px] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none md:text-zinc-800 md:text-lg md:tracking-[0.36px] md:leading-[27.54px] md:min-h-0 md:min-w-0"
                >
                  <p
                    className="text-white text-[15px] box-border caret-transparent tracking-[0.3px] leading-[22.95px] outline-[3px] md:text-zinc-800 md:text-lg md:tracking-[0.36px] md:leading-[27.54px]"
                  >
                    UNLOCK THE POWER OF PRIMECELL H2
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
