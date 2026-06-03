type FooterNewsletterProps = {
  headline: string;
  subtext: string;
  emailPlaceholder: string;
  ctaLabel: string;
  disclaimer: string;
};

export function FooterNewsletter({ headline, subtext, emailPlaceholder, ctaLabel, disclaimer }: FooterNewsletterProps) {
  return (
    <div className="box-border caret-transparent flex basis-auto shrink min-h-[auto] min-w-[auto] outline-[3px] w-full pb-0 px-0 md:basis-[400px] md:shrink-0 md:pb-4 md:px-4">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="caret-transparent leading-[normal] outline-[3px] bg-[position:0px_0px]">
            <form className="bg-stone-800 bg-no-repeat box-border caret-transparent flex basis-[0%] grow max-w-[450px] outline-[3px] w-full bg-[position:0px_50%] mx-auto pr-[5px] rounded-sm">
              <div className="caret-transparent flex flex-col justify-center min-h-[200px] outline-[3px] w-full bg-[position:0px_0px]">
                <div className="relative items-stretch caret-transparent flex outline-[3px] bg-[position:0px_0px]">
                  <div className="relative caret-transparent flex basis-0 grow shrink-0 justify-start outline-[3px] bg-[position:0px_0px] px-1.5">
                    <div className="text-black caret-transparent outline-[3px] w-full bg-[position:0px_0px]">
                      <h2 className="relative text-5xl font-bold box-border caret-transparent leading-[48px] outline-[3px] text-left -mt-2 font-arial">
                        <span className="text-stone-50 text-[32px] box-border caret-transparent leading-8 outline-[3px] font-mulish">
                          <span className="font-black box-border caret-transparent outline-[3px]">
                            {headline}
                          </span>
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="relative items-stretch caret-transparent flex outline-[3px] bg-[position:0px_0px]">
                  <div className="relative caret-transparent flex basis-0 grow shrink-0 justify-start outline-[3px] bg-[position:0px_0px] px-1.5 py-2.5">
                    <div className="text-black caret-transparent outline-[3px] w-full bg-[position:0px_0px]">
                      <p className="text-sm box-border caret-transparent leading-[19.6px] outline-[3px] font-arial">
                        <span className="text-white text-base box-border caret-transparent leading-[22.4px] outline-[3px] font-mulish">
                          <span className="font-medium box-border caret-transparent outline-[3px]">
                            {subtext}
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative items-stretch caret-transparent flex outline-[3px] bg-[position:0px_0px]">
                  <div className="relative caret-transparent flex basis-0 grow shrink-0 justify-start outline-[3px] bg-[position:0px_0px] pl-1.5 pr-2.5 py-2.5">
                    <div className="self-end caret-transparent flex flex-col grow outline-[3px] bg-[position:0px_0px]">
                      <input
                        type="email"
                        name="email"
                        placeholder={emailPlaceholder}
                        className="text-stone-800 text-[15px] box-border caret-transparent block h-12 outline-[3px] text-left w-full border border-neutral-400 bg-[position:0px_0px] pl-4 pr-[90px] py-0 rounded-md border-solid font-mulish"
                      />
                    </div>
                  </div>
                  <div className="absolute caret-transparent flex justify-start outline-[3px] translate-y-[-30px] bg-[position:0px_0px] mx-auto py-2.5 right-3.5 top-2/4">
                    <button
                      type="button"
                      className="text-stone-900 font-bold self-end bg-stone-200 box-content caret-transparent block h-10 leading-4 outline-[3px] text-center px-2.5 py-0 rounded-md font-mulish"
                    >
                      {ctaLabel}
                    </button>
                  </div>
                </div>
                <div className="relative items-stretch caret-transparent flex outline-[3px] bg-[position:0px_0px]">
                  <div className="relative caret-transparent flex basis-0 grow shrink-0 justify-start outline-[3px] bg-[position:0px_0px] px-1.5 py-2.5">
                    <div className="text-black caret-transparent outline-[3px] w-full bg-[position:0px_0px]">
                      <p className="text-xs box-border caret-transparent leading-[16.8px] outline-[3px] font-mulish text-stone-50">
                        {disclaimer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
