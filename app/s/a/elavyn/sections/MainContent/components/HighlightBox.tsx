export type HighlightBoxProps = {
  containerVariant: string;
  headingVariant: string;
  content: React.ReactNode;
};

export const HighlightBox = (props: HighlightBoxProps) => {
  return (
    <div
      className={`relative text-[15px] content-start bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full bg-center mx-auto my-3.5 p-2 md:text-base md:leading-[28.8px] md:w-[1200px] ${props.containerVariant}`}
    >
      <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
            <h2
              className={`text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter md:text-xl md:leading-7 ${props.headingVariant}`}
            >
              {props.content}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
