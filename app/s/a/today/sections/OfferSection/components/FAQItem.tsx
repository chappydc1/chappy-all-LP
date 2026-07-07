export type TodayFAQItemProps = {
  question: string;
  answer: React.ReactNode;
  linkHref?: string;
  linkText?: string;
  containerClassName?: string;
  questionWrapperClassName?: string;
  questionClassName?: string;
  answerWrapperClassName?: string;
  answerClassName?: string;
  linkClassName?: string;
  linkTextClassName?: string;
};

export const TodayFAQItem = (props: TodayFAQItemProps) => {
  return (
    <div
      className={
        props.containerClassName ||
        "box-border break-inside-avoid caret-transparent outline-[3px] mb-4 rounded-lg"
      }
    >
      <div
        className={
          props.questionWrapperClassName ||
          "items-center bg-blue-50 box-border caret-transparent flex justify-between outline-[3px] p-4 rounded-lg after:accent-auto after:box-border after:caret-transparent after:text-sky-950 after:block after:text-[28px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[42px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat"
        }
      >
        <p
          className={
            props.questionClassName ||
            "text-sky-950 text-lg font-medium box-border caret-transparent leading-[27px] outline-[3px] text-left md:text-xl md:leading-[30px]"
          }
        >
          {props.question}
        </p>
      </div>
      <div
        className={
          props.answerWrapperClassName ||
          "bg-blue-50 box-border caret-transparent max-h-0 outline-[3px] overflow-hidden px-3"
        }
      >
        <p
          className={
            props.answerClassName ||
            "text-sky-950 box-border caret-transparent outline-[3px] text-left mb-4"
          }
        >
          {props.answer}
          {props.linkHref && props.linkText ? (
            <>
              <a
                href={props.linkHref}
                className={
                  props.linkClassName ||
                  "box-border caret-transparent outline-[3px] underline"
                }
              >
                <b
                  className={
                    props.linkTextClassName ||
                    "font-bold box-border caret-transparent outline-[3px] mb-4"
                  }
                >
                  {props.linkText}
                </b>
              </a>
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
};
