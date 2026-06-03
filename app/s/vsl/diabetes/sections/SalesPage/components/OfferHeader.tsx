export type DiabetesOfferHeaderProps = {
  title: string;
  bottlesRemaining: string;
};

export const DiabetesOfferHeader = (props: DiabetesOfferHeaderProps) => {
  return (
    <div className="bg-yellow-600 box-border caret-transparent outline-[3px] py-4 md:py-12">
      <div className="box-border caret-transparent max-w-none outline-[3px] w-full mx-auto px-3 md:max-w-[1140px]">
        <h2 className="text-white text-3xl font-bold box-border caret-transparent leading-9 max-w-[900px] outline-[3px] mx-auto md:text-[37px] md:leading-[44.4px]">
          {props.title}
        </h2>
        <div className="text-white box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent max-w-none outline-[3px] w-full mx-auto px-3 md:max-w-[1140px]">
            <ul className="box-border caret-transparent flex flex-wrap justify-center outline-[3px] pl-0 md:pl-8">
              <li className="relative text-sm box-border caret-transparent leading-5 list-none outline-[3px] mt-4 px-[22px] md:text-xl md:leading-7 after:accent-auto after:bg-stone-200 after:box-border after:caret-transparent after:text-white after:hidden after:text-sm after:not-italic after:normal-nums after:font-normal after:h-[18px] after:tracking-[normal] after:leading-5 after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:w-0.5 after:border-separate after:right-0 after:top-1.5 after:font-nunito_sans after:md:text-xl after:md:leading-7">
                <img
                  src="/img/hour-glass.png?hopId=5f160ca7-bd6b-4c23-b55d-9b6214111f05"
                  alt=""
                  className="text-sm box-border caret-transparent inline-block invert-[1] leading-5 mt-[-5px] max-w-[25px] outline-[3px] mr-2 md:text-xl md:leading-7"
                />
                <strong className="text-sm font-bold box-border caret-transparent leading-5 outline-[3px] md:text-xl md:leading-7">
                  GlycoCept Bottles Remaining:
                </strong>
                <span className="text-xl box-border caret-transparent inline-block leading-7 outline-[3px]">
                  {props.bottlesRemaining}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
