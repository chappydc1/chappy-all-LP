type PromoBarProps = {
  text: string;
  cta: { label: string; href: string };
};

export function KachavaPromoBar({ text, cta }: PromoBarProps) {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
      <div className="relative items-center bg-sky-600 box-border caret-transparent flex min-h-[41px] outline-[3px] z-[2] px-0 py-1 top-0 md:px-5">
        <div className="text-white box-border caret-transparent gap-x-[15px] h-full max-w-[1366px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full mx-auto">
          <div className="relative text-xs box-border caret-transparent flex col-start-2 h-full leading-4 max-w-max outline-[3px] mx-auto px-[30px]">
            <div className="relative items-center box-border caret-transparent flex h-full justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full px-4">
              <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-none md:rounded-lg">
                <div className="items-center box-border caret-transparent flex h-full outline-[3px]">
                  <div className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-xs items-center box-border caret-transparent flex h-full justify-center leading-4 outline-[3px] w-full md:text-sm md:leading-5">
                      <p className="text-xs box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-6">
                        {text}{" "}
                        <a
                          href={cta.href}
                          className="text-xs box-border caret-transparent leading-[13.92px] outline-[3px] underline md:text-base md:leading-[18.56px] hover:no-underline"
                        >
                          <span className="text-stone-50 text-xs box-border caret-transparent leading-4 outline-[3px] md:text-base md:leading-6">
                            <strong className="text-xs font-bold box-border caret-transparent leading-4 outline-[3px] md:text-base md:leading-6">
                              {cta.label}
                            </strong>
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
