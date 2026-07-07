export type RejuvacareFaqItemProps = {
  question: string;
  answer: string;
  summaryVariant: string;
  answerContainerVariant: string;
  firstIconWrapperClassName: string;
  secondIconWrapperClassName: string;
  iconVariant: string;
};

export const RejuvacareFaqItem = (props: RejuvacareFaqItemProps) => {
  return (
    <div className="box-border caret-transparent outline-[3px] mx-px my-2.5 px-px py-[5px]">
      <div className="box-border caret-transparent outline-[3px]">
        <details className="box-border caret-transparent outline-[3px]">
          <summary
            className={`bg-white box-border caret-transparent list-item list-inside outline-[3px] rounded-[5px] ${props.summaryVariant}`}
          >
            <div className="items-center box-border caret-transparent flex outline-[3px] border-zinc-300 p-[5px] border-b border-solid">
              <div className="text-[19px] box-border caret-transparent basis-[0%] grow-[9.9] leading-[28.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left pl-[5px] font-montserrat md:text-lg">
                {props.question}
              </div>
              <div className="box-border caret-transparent basis-[0%] grow-[0.1] min-h-[auto] min-w-[auto] outline-[3px] p-[5px]">
                <div className={props.firstIconWrapperClassName}>
                  <i
                    className={`font-black box-border caret-transparent inline-block leading-4 outline-[3px] font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-inside before:outline-[3px] before:pointer-events-auto before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free ${props.iconVariant}`}
                  ></i>
                </div>
                <div className={props.secondIconWrapperClassName}>
                  <i
                    className={`font-black box-border caret-transparent inline-block leading-4 outline-[3px] font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-inside before:outline-[3px] before:pointer-events-auto before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free ${props.iconVariant}`}
                  ></i>
                </div>
              </div>
            </div>
          </summary>
          <div
            className={`box-border caret-transparent outline-[3px] text-left px-2.5 py-[5px] ${props.answerContainerVariant}`}
          >
            <div className="text-neutral-900 box-border caret-transparent outline-[3px] mt-2.5 pr-0 font-montserrat md:pr-40">
              {props.answer}
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};
