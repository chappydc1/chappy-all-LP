export type SplitTextProps = {
  containerVariant: string;
  title: string;
  children: React.ReactNode;
};

export const SplitText = (props: SplitTextProps) => {
  return (
    <div
      className={`self-center box-border caret-transparent flex flex-col outline-[3px] w-full md:pr-2.5 ${props.containerVariant}`}
    >
      <div className="text-stone-700 text-[32px] font-extrabold box-border caret-transparent leading-[38.4px] min-h-[auto] min-w-[auto] outline-[3px] text-left p-px font-open_sans md:text-[40px] md:leading-[48px]">
        <div className="text-neutral-900 text-[23px] font-bold box-border caret-transparent hidden leading-[33px] outline-[3px] font-montserrat md:text-[33px] md:block md:leading-[42px]">
          {props.title}
        </div>
      </div>
      {props.children}
    </div>
  );
};
