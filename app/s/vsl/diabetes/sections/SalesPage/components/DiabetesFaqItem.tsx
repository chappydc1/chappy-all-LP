export type DiabetesFaqItemProps = {
  question: string;
  answer: string;
  answerContainerClassName: string;
};

export const DiabetesFaqItem = (props: DiabetesFaqItemProps) => {
  return (
    <div className="text-neutral-800 bg-white box-border caret-transparent outline-[3px] mb-1 rounded-lg">
      <h2 className="text-[24.575px] font-medium box-border caret-transparent leading-[29.49px] outline-[3px] md:text-[32px] md:leading-[38.4px]">
        <button
          type="button"
          className="relative font-bold items-center bg-white caret-transparent flex leading-[19.2px] outline-[3px] text-left w-full px-5 py-3 rounded-bl rounded-br rounded-tl rounded-tr after:accent-auto after:bg-[url(data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2016%2016%27%20fill=%27%23212529%27%3e%3cpath%20fill-rule=%27evenodd%27%20d=%27M1.646%204.646a.5.5%200%200%201%20.708%200L8%2010.293l5.646-5.647a.5.5%200%200%201%20.708.708l-6%206a.5.5%200%200%201-.708%200l-6-6a.5.5%200%200%201%200-.708z%27/%3e%3c/svg%3e)] after:bg-no-repeat after:bg-size-[20px] after:box-border after:caret-transparent after:text-neutral-800 after:block after:shrink-0 after:text-base after:not-italic after:normal-nums after:font-bold after:h-5 after:tracking-[normal] after:leading-[19.2px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-5 after:ml-auto after:border-separate after:font-nunito_sans"
        >
          {props.question}
        </button>
      </h2>
      <div className={props.answerContainerClassName}>
        <div className="box-border caret-transparent outline-[3px] pt-4 pb-6 px-5">
          {props.answer}
        </div>
      </div>
    </div>
  );
};
