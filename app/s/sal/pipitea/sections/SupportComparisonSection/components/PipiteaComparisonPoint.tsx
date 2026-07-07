export type PipiteaComparisonPointProps = {
  title: string;
  description: string;
};

export const PipiteaComparisonPoint = (props: PipiteaComparisonPointProps) => {
  return (
    <div
      className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
    >
      <div
        className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[25px] pl-5 md:text-lg md:leading-[27px] md:pl-[25px]"
      >
        <div
          className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]"
        >
          <p
            className="text-[16.0583px] items-baseline box-border caret-transparent flex leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px] before:accent-auto before:bg-pink-950 before:box-border before:caret-transparent before:text-black before:block before:text-[16.0583px] before:not-italic before:normal-nums before:font-normal before:h-2.5 before:tracking-[normal] before:leading-[24.0875px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-2.5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:translate-y-[-1.4px] before:visible before:w-2.5 before:mr-[15px] before:rounded-[50%] before:border-separate before:font-libre_franklin before:md:text-lg before:md:leading-[27px]"
          >
            <b className="text-[16.0583px] font-bold box-border caret-transparent block leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] md:text-lg md:leading-[27px]">
              {props.title}{" "}
              <span className="text-[16.0583px] font-normal box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]">
                {props.description}
              </span>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};
