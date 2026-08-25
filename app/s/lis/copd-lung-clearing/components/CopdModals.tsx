export type CopdModalsProps = {
  variant: string;
};

export const CopdModals = (props: CopdModalsProps) => {
  if (props.variant === "truemed") {
    return (
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px] fixed hidden z-[1000001] inset-0 font-source_sans_pro">
          <div className="box-border caret-transparent outline-[3px] absolute items-center bg-neutral-700/50 flex flex-col shrink-0 h-full w-full z-[999] overflow-hidden left-0 top-0">
            <div className="box-border caret-transparent outline-[3px] flex flex-col h-full justify-center max-w-[560px] min-h-[1000px] min-w-[375px] w-full md:min-h-[800px] md:min-w-0">
              <div className="box-border caret-transparent outline-[3px] relative items-stretch bg-white border-l-slate-100 border-r-slate-100 border-t-slate-100 flex shrink-0 h-[60px] justify-start w-full z-0 mt-0 pl-6 rounded-t-[10px] border-l border-r border-t border-solid md:mt-2.5">
                <div className="items-center box-border caret-transparent flex flex-col justify-center outline-[3px]">
                  <img
                    src="/images/gruns/truemed-navy.svg"
                    alt="Truemed logo"
                    className="box-border caret-transparent max-w-full outline-[3px] w-[150px]"
                  />
                </div>
                <button
                  aria-label="Close Truemed modal"
                  className="absolute bg-transparent caret-transparent block shrink-0 h-5 outline-[3px] text-center w-5 m-5 p-0 right-0 top-0"
                >
                  <div className="relative items-stretch box-border caret-transparent flex flex-col shrink-0 h-5 outline-[3px] w-5 z-0">
                    <img
                      src="/images/gruns/icon-38.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-5 outline-[3px] w-5"
                    />
                  </div>
                </button>
              </div>
              <div className="box-border caret-transparent outline-[3px] items-stretch bg-neutral-100 flex flex-col h-full w-full overflow-auto rounded-b-[10px] md:h-[600px]">
                <div className="items-center bg-neutral-700/50 box-border caret-transparent flex justify-center outline-[3px]">
                  <img
                    src="/images/gruns/icon-39.svg"
                    alt="Icon"
                    className="absolute box-border caret-transparent h-[50px] ml-[-25px] mt-[-25px] outline-[3px] w-[50px] z-[2] left-2/4 top-2/4"
                  />
                </div>
                <div className="items-center box-border caret-transparent hidden justify-center outline-[3px] text-center">
                  <p className="text-stone-950 text-base box-border caret-transparent leading-5 outline-[3px]">
                    {" "}
                    There was an error loading the Truemed widget. Please try
                    again soon or contact us at{" "}
                    <a
                      href="mailto://support@truemed.com?subject=Truemed%20widget%20help&body=Hi%20there%2C%0D%0A%0D%0AI%20attempted%20to%20use%20Truemed%20and%20experienced%20a%20problem.%20Help!%0D%0A%0D%0A"
                      className="text-blue-700 box-border caret-transparent outline-[3px]"
                    >
                      support@truemed.com
                    </a>
                    .{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "hark") {
    return (
      <div className="box-border caret-transparent outline-[3px] fixed backdrop-blur bg-[linear-gradient(135deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.45)_100%)] hidden h-[1000px] w-screen z-[2147483647] left-0 top-0">
        <div
          role="dialog"
          aria-label="Hark Support Widget"
          className="box-border caret-transparent outline-[3px] absolute bg-gray-200 shadow-[rgba(0,0,0,0.25)_0px_25px_50px_-12px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(255,255,255,0.05)_0px_0px_0px_1px] max-h-none min-h-[1000px] overflow-x-hidden overflow-y-auto w-screen rounded-none left-0 top-0 md:max-h-[968px] md:min-h-0 md:overflow-y-hidden md:w-[480px] md:rounded-2xl md:left-2/4 md:top-2/4"
        >
          <iframe
            role="application"
            title="Hark Support Widget"
            className="bg-white box-border caret-transparent h-auto min-h-[980px] outline-[3px] w-full rounded-none md:h-[680px] md:min-h-0 md:rounded-2xl"
          ></iframe>
          <button
            type="button"
            aria-label="Close dialog"
            className="absolute caret-transparent outline-[3px] text-center p-0 items-center bg-white shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.05)_0px_4px_6px_-2px,rgba(0,0,0,0.05)_0px_0px_0px_1px] flex h-8 justify-center w-8 z-[1] rounded-[50%] right-[15px] top-[15px]"
          >
            <img
              src="/images/gruns/icon-44.svg"
              alt="Icon"
              className="box-border caret-transparent outline-[3px] h-[18px] opacity-70 w-[18px]"
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      role="dialog"
      className="box-border caret-transparent outline-[3px] fixed items-center bg-[oklab(0_0_0_/_0.6)] hidden h-full justify-center pointer-events-none w-full z-[200] left-0 top-0"
    >
      <div className="box-border caret-transparent outline-[3px] relative bg-white flex flex-col max-h-[750px] overflow-hidden m-5 px-5 py-[34px] rounded-xl md:m-40 md:p-8">
        <button className="absolute caret-transparent outline-[3px] text-center p-0 bg-transparent block shrink-0 h-5 w-5 right-2 top-2">
          <img
            src="/images/gruns/icon-17.svg"
            alt="Icon"
            className="box-border caret-transparent outline-[3px]"
          />
        </button>
        <div className="box-border caret-transparent outline-[3px] overflow-auto">
          <div className="box-border caret-transparent outline-[3px]">
            <div className="box-border caret-transparent hidden max-h-[900px] max-w-[900px] outline-[3px] overflow-scroll md:block">
              <img
                src="/images/gruns/61.webp"
                className="aspect-[auto_2500_/_2500] box-border caret-transparent max-w-full outline-[3px] w-[2500px]"
              />
            </div>
            <div className="box-border caret-transparent block max-h-[840px] outline-[3px] overflow-scroll md:hidden">
              <img
                src="/images/gruns/53.webp"
                className="aspect-[auto_1250_/_5000] box-border caret-transparent max-w-full outline-[3px] w-[1250px]"
              />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent hidden outline-[3px] overflow-auto">
          <div className="box-border caret-transparent outline-[3px]">
            <div className="box-border caret-transparent hidden max-h-[900px] max-w-[900px] outline-[3px] overflow-scroll md:block">
              <img
                src="/images/gruns/57.webp"
                className="aspect-[auto_2500_/_2500] box-border caret-transparent max-w-full outline-[3px] w-[2500px]"
              />
            </div>
            <div className="box-border caret-transparent block max-h-[840px] outline-[3px] overflow-scroll md:hidden">
              <img
                src="/images/gruns/62.webp"
                className="aspect-[auto_1250_/_5000] box-border caret-transparent max-w-full outline-[3px] w-[1250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
