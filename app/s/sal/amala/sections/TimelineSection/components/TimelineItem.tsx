export type TimelineItemProps = {
  containerVariant: string;
  markerVariant: string;
  cardVariant: string;
  timeLabel: string;
  description: string;
  imageUrl: string;
};

export const TimelineItem = (props: TimelineItemProps) => {
  return (
    <div
      className={`relative items-start box-border caret-transparent flex flex-col flex-wrap justify-between min-h-[auto] min-w-[auto] mt-10 py-0 md:mt-0 md:py-[35px] after:accent-auto after:border-b-zinc-800 after:border-l-zinc-800 after:border-r-teal-800 after:border-t-zinc-800 after:bottom-[-38px] after:box-border after:caret-transparent after:text-zinc-800 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:ml-0 after:border-r-[3px] after:border-separate after:left-3.5 after:font-libre_franklin after:md:-ml-px after:md:left-2/4 after:md:bottom-0 ${props.containerVariant}`}
    >
      <div
        className={`absolute bg-zinc-200 box-border caret-transparent flex basis-[0%] flex-col grow h-[30px] max-w-[30px] min-w-[30px] outline-[3px] w-[30px] z-[2] border-gray-800 ml-0 mt-0 rounded-[50%] border-8 border-solid left-0 top-0 md:h-[60px] md:ml-[-30px] md:max-w-[60px] md:min-w-[60px] md:w-[60px] md:z-[1] md:mt-2.5 md:border-[15px] md:left-2/4 md:top-auto ${props.markerVariant}`}
      ></div>
      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[calc(100%_-_55px)] min-h-[auto] min-w-[calc(100%_-_55px)] outline-[3px] w-[calc(100%_-_55px)] ml-auto md:max-w-[39%] md:min-w-[39%] md:w-[39%] md:ml-0">
        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
            <div className="items-center box-border caret-transparent flex flex-wrap justify-start min-h-[auto] min-w-[auto] mt-0.5 md:justify-normal md:mt-2.5">
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]">
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mr-2.5">
                    <img
                      src={props.imageUrl}
                      alt=""
                      title=""
                      className="box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-10"
                    />
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]">
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                  <div className="text-zinc-700 text-[24.0583px] box-border caret-transparent leading-[24.0583px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full md:text-[45px] md:leading-[45px]">
                    <div className="text-[24.0583px] box-border caret-transparent leading-[24.0583px] outline-[3px] w-full md:text-[45px] md:leading-[45px]">
                      <p className="text-gray-800 text-[24.0583px] box-border caret-transparent leading-[24.0583px] outline-[3px] md:text-[45px] md:leading-[45px]">
                        {props.timeLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[calc(100%_-_55px)] min-h-[auto] min-w-[calc(100%_-_55px)] outline-[3px] w-[calc(100%_-_55px)] ml-auto md:max-w-[38.5%] md:min-w-[38.5%] md:w-[38.5%] md:ml-0">
        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
            <div
              className={`relative items-start bg-gray-100 box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] border-gray-800 mt-[15px] p-[15px] rounded-[10px] border-[3px] border-solid md:mt-0 md:p-5 after:accent-auto after:box-border after:caret-transparent after:text-zinc-800 after:hidden after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-y-transparent after:border-y-[13px] after:border-separate after:top-[22px] after:font-libre_franklin after:md:block ${props.cardVariant}`}
            >
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]">
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                  <div className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full md:text-lg md:leading-[27px]">
                    <div className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]">
                      <p className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]">
                        {props.description}
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
