export const AnalysisStep = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex-col h-full justify-start max-w-full min-h-[1000px] min-w-full outline-[3px] gap-y-4 w-full md:max-w-none md:min-w-[1080px]">
      <div className="items-stretch box-border caret-transparent gap-x-6 flex flex-col h-auto justify-start max-w-full min-h-0 min-w-full outline-[3px] gap-y-6 text-center w-full mx-auto pt-[88px] pb-24 md:gap-x-8 md:h-[1000px] md:max-w-[520px] md:min-h-[1000px] md:min-w-[520px] md:gap-y-8 md:pt-32 md:pb-8">
        <div className="items-center box-border caret-transparent gap-x-5 flex flex-col justify-center min-h-[520px] outline-[3px] gap-y-5">
          <div className="items-stretch box-border caret-transparent gap-x-2 flex flex-col outline-[3px] gap-y-2 w-full">
            <div className="relative bg-white box-border caret-transparent hidden h-[15px] outline-[3px] overflow-hidden rounded-[100px]">
              <div className="absolute bg-indigo-950 box-border caret-transparent outline-[3px] w-[0%] inset-[0%]"></div>
            </div>
            <div className="text-2xl font-bold box-border caret-transparent tracking-[-0.16px] leading-[31.2px] outline-[3px] capitalize px-4 md:leading-9 md:px-0">
              Analyzing your answers...
            </div>
          </div>
          <div className="relative h-20 w-20 mx-auto md:h-[100px] md:w-[100px]">
            <div className="h-full w-full rounded-full border-[3px] border-indigo-950/10 border-t-indigo-950 animate-spin" />
          </div>
          <div className="box-border caret-transparent hidden outline-[3px] w-full">
            <div className="relative box-border caret-transparent flex outline-[3px] w-full overflow-hidden pt-[100%] rounded-lg">
              <div className="absolute box-border caret-transparent h-full object-contain outline-[3px] w-full overflow-hidden rounded-lg inset-[0%] before:accent-auto before:caret-transparent before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-filson_pro after:accent-auto after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-filson_pro">
                <video
                  muted
                  autoPlay
                  loop
                  playsInline
                  poster="https://cloud.javycoffee.com/quiz/quiz-video.webp"
                  className="box-border caret-transparent inline-block h-full outline-[3px] align-baseline w-full"
                >
                  <source
                    src="https://cloud.javycoffee.com/videos/quiz/quiz-video.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://cloud.javycoffee.com/videos/quiz/quiz-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
