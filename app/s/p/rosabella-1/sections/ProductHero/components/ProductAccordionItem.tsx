export type ProductAccordionItemProps = {
  title: string;
  collapsedIconSrc?: string;
  expandedIconSrc?: string;
  children: React.ReactNode;
};

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-3.5 h-3.5 fill-current"
    aria-hidden="true"
  >
    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
  </svg>
);

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-3.5 h-3.5 fill-current"
    aria-hidden="true"
  >
    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
  </svg>
);

export const ProductAccordionItem = (props: ProductAccordionItemProps) => {
  return (
    <details className="box-border caret-transparent outline-[3px] group">
      <summary className="box-border caret-transparent list-none outline-[3px]">
        <div className="items-center box-border caret-transparent flex outline-[3px] p-5 rounded-b-[5px] md:px-[18px] md:py-[27px]">
          <div className="text-black text-base font-semibold box-border caret-transparent basis-[0%] grow-[9.9] tracking-[-0.4px] leading-[20.8px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-xl md:leading-[26px]">
            {props.title}
          </div>
          <div className="box-border caret-transparent basis-[0%] grow-[0.1] min-h-[auto] min-w-[auto] outline-[3px] ml-2.5 -mr-0.5 text-black">
            <div className="box-border caret-transparent flex group-open:hidden outline-[3px]">
              <PlusIcon />
            </div>
            <div className="box-border caret-transparent hidden group-open:flex outline-[3px]">
              <MinusIcon />
            </div>
          </div>
        </div>
      </summary>
      <div className="box-border caret-transparent outline-[3px] text-left mt-0 pb-5 px-5 md:-mt-3 md:pb-[27px] md:px-[18px]">
        {props.children}
      </div>
    </details>
  );
};
