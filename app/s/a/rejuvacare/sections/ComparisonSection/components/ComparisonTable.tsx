import { ComparisonRow } from "../../ComparisonSection/components/ComparisonRow";

export const ComparisonTable = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[325px] outline-[3px] w-full mt-[30px] p-0 md:w-4/5 md:px-2.5 md:py-3">
      <div className="items-center box-border caret-transparent justify-center outline-[3px] w-full md:[align-items:normal] md:justify-normal"></div>
      <div className="items-center box-border caret-transparent flex outline-[3px] border-stone-300 border-b border-solid">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-[200px] p-2.5 md:w-full">
          <div className="text-white box-border caret-transparent outline-[3px] text-right px-2.5 py-px font-montserrat">
            spacer
          </div>
        </div>
        <div className="items-stretch box-border caret-transparent flex justify-end min-h-[auto] min-w-[auto] outline-[3px] w-full md:items-center md:justify-normal">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full px-0 py-[13px] rounded-t-[15px] md:px-2.5">
            <div className="text-[10px] font-bold box-border caret-transparent leading-[15px] outline-[3px] text-center p-px font-montserrat md:text-base md:leading-6">
              <span className="text-emerald-500 text-[10px] box-border caret-transparent leading-[15px] outline-[3px] md:text-base md:leading-6">
                REJUVA
              </span>
              KNEE
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] w-full px-0 py-2.5 md:[align-items:normal] md:block md:px-2.5">
            <div className="box-border caret-transparent leading-[15px] min-h-[auto] min-w-[auto] outline-[3px] mr-px p-px font-montserrat md:leading-[22px] md:min-h-0 md:min-w-0 md:mr-0">
              <b className="text-[10px] font-bold box-border caret-transparent leading-3 outline-[3px] ml-2.5 md:text-base md:leading-[22px] md:ml-0">
                Other Brands
              </b>
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-[92px] ml-px px-[18px] py-2.5 md:[align-items:normal] md:block md:justify-normal md:w-full md:ml-0 md:px-2.5">
            <div className="box-border caret-transparent leading-[15px] min-h-[auto] min-w-[auto] outline-[3px] p-px font-montserrat md:leading-[22px] md:min-h-0 md:min-w-0">
              <b className="text-[10px] font-bold box-border caret-transparent leading-[15px] outline-[3px] md:text-base md:leading-[22px]">
                Medications
              </b>
            </div>
          </div>
        </div>
      </div>
      <ComparisonRow
        rootClassName=""
        labelContainerClassName="pl-2.5 pr-0 py-0 md:pr-2.5 md:py-2.5"
        textClassName="leading-[18px] px-2.5 py-px"
        label="Lasting pain relief"
        firstIconCellClassName=""
      />
      <ComparisonRow
        rootClassName="bg-black/0"
        labelContainerClassName="pl-2.5 pr-0 py-0 md:pr-2.5 md:py-2.5"
        textClassName="leading-[18px] px-2.5 py-px"
        label="Drug Free"
        firstIconCellClassName=""
      />
      <ComparisonRow
        rootClassName=""
        labelContainerClassName="pl-[7px] pr-0 py-1.5 md:p-2.5"
        textClassName="leading-[18px] px-2.5 py-0 md:py-px"
        label="Easy to use & carry, wireless, and fully rechargable"
        firstIconCellClassName=""
      />
      <ComparisonRow
        rootClassName="bg-black/0"
        labelContainerClassName="pl-[7px] pr-0 py-1.5 md:p-2.5"
        textClassName="leading-[18px] px-2.5 py-1.5 md:py-px"
        label="3 in 1 Technology: Compression, heat, & massage"
        firstIconCellClassName=""
      />
      <ComparisonRow
        rootClassName=""
        labelContainerClassName="pl-2.5 pr-0 py-1.5 md:pr-2.5 md:py-2.5"
        textClassName="leading-[18px] pl-1.5 pr-2.5 pt-px pb-1.5 md:pl-2.5 md:pb-px"
        label="Activates body's self-healing mechanism"
        firstIconCellClassName=""
      />
      <ComparisonRow
        rootClassName="bg-black/0"
        labelContainerClassName="pl-2.5 pr-0 py-1.5 md:pr-2.5 md:py-2.5"
        textClassName="leading-[18px] pl-1.5 pr-2.5 py-px md:pl-2.5"
        label="Reverses damage in the knee joint"
        firstIconCellClassName=""
      />
      <ComparisonRow
        rootClassName="items-center box-border caret-transparent flex outline-[3px] w-full"
        labelContainerClassName="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-[200px] pl-[5px] pr-0 py-1.5 md:w-full md:p-2.5"
        textClassName="text-sm box-border caret-transparent leading-[18px] outline-[3px] text-left px-2.5 py-0 font-montserrat md:text-base md:leading-6 md:text-right md:py-px"
        label='Addresses "Join Blockage" The Root Cause'
        firstIconCellClassName=""
      />
      <ComparisonRow
        rootClassName="items-center bg-black/0 box-border caret-transparent flex outline-[3px] w-full"
        labelContainerClassName="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-[200px] p-0 md:w-full md:p-2.5"
        textClassName="text-sm box-border caret-transparent leading-[22px] outline-[3px] text-left pl-4 pr-2.5 py-px font-montserrat md:text-base md:leading-6 md:text-right md:pl-2.5"
        label="Affordability"
        firstIconCellClassName="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full p-2.5 rounded-b-[15px]"
      />
    </div>
  );
};
