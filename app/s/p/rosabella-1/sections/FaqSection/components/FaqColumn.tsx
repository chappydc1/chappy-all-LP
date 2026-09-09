import { FaqItem } from "./FaqItem"

export type FaqColumnItem = {
  question: string;
  answer: string;
  closedIconUrl: string;
  openIconUrl: string;
};

export type FaqColumnProps = {
  items: FaqColumnItem[];
};

export const FaqColumn = (props: FaqColumnProps) => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
      <div className="box-border caret-transparent outline-[3px] w-full">
        <div className="box-border caret-transparent outline-[3px]">
          {props.items.map((item, index) => {
            const itemClassName =
              index === 0
                ? "box-border caret-transparent outline-[3px] border border-neutral-200 rounded-sm border-solid"
                : "box-border caret-transparent outline-[3px] border border-neutral-200 mt-3 rounded-sm border-solid md:mt-[17px]";

            return (
              <div key={item.question} className={itemClassName}>
                <div className="box-border caret-transparent outline-[3px]">
                  <FaqItem
                    question={item.question}
                    answer={item.answer}
                    closedIconUrl={item.closedIconUrl}
                    openIconUrl={item.openIconUrl}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
