export type OfferBannerProps = {
  title: string;
  timerText: string;
  breakClassName: string;
};

export const GetokinawatonicOfferBanner = (props: OfferBannerProps) => {
  return (
    <div className="bg-indigo-50 box-border caret-transparent hidden outline-[3px] my-2.5 py-3.5 md:block">
      <div className="box-border caret-transparent outline-[3px] mx-0 md:ml-[-15px] md:mr-[-15px] before:accent-auto before:box-border before:caret-transparent before:text-teal-500 before:table before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.4286px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-apple_system after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-teal-500 after:table after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21.4286px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-apple_system">
        <div className="box-border caret-transparent outline-[3px] text-center">
          <h1 className="text-black text-[34px] font-bold box-border caret-transparent leading-[44.2px] outline-[3px] font-poppins">
            {props.title}
            <br className={props.breakClassName} />
          </h1>
          <span className="text-red-600 text-[34px] font-bold box-border caret-transparent leading-[48.5714px] outline-[3px] font-poppins">
            {props.timerText}
          </span>
        </div>
      </div>
    </div>
  );
};
