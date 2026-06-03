export const AnnouncementBar = () => {
  return (
    <div className="box-border caret-transparent hidden outline-[3px]">
      <div className="relative box-border caret-transparent outline-[3px] z-[5500] overflow-hidden">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent outline-[3px]">
            <div className="box-border caret-transparent outline-[3px]">
              <div className="text-white items-center bg-stone-400 box-border caret-transparent flex justify-between min-h-9 outline-[3px] text-center w-full">
                <div className="text-[0px] box-border caret-transparent leading-[0px] outline-[3px] w-full overflow-hidden">
                  <div className="box-border caret-transparent inline-flex outline-[3px] w-max">
                    <div className="text-[11.4px] items-center box-border caret-transparent flex tracking-[1px] leading-[16.416px] outline-[3px] uppercase">
                      <p className="box-border caret-transparent outline-[3px] text-nowrap">
                        <a
                          href="/collections/all"
                          title="Shop All"
                          className="relative box-border caret-transparent outline-[3px] text-nowrap after:accent-auto after:bottom-[-3px] after:shadow-[rgb(255,255,255)_0px_-1px_0px_0px] after:box-border after:caret-transparent after:text-white after:block after:text-[11.4px] after:not-italic after:normal-nums after:font-normal after:h-px after:tracking-[1px] after:leading-[16.416px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:uppercase after:text-nowrap after:visible after:w-full after:border-separate after:left-2/4 after:font-ll_brown_regular_web"
                        >
                          <strong className="font-bold box-border caret-transparent outline-[3px] text-nowrap">
                            Free Shipping on Subscriptions and Orders $70+
                          </strong>
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
};
