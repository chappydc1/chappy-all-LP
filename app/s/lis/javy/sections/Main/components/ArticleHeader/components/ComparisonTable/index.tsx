import { JavyComparisonRow } from "./components/JavyComparisonRow";

export const JavyComparisonTable = () => {
  return (
    <div className="items-start box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] w-full mt-0 md:mt-1">
      <div className="box-border caret-transparent basis-[0%] grow h-full min-h-[auto] min-w-[auto] w-3/12 pt-[27px] md:basis-auto md:grow-0 md:pt-6">
        <div className="text-xs font-medium items-center box-border caret-transparent flex justify-center leading-[18px] text-center pt-1.5 md:text-base md:leading-6 md:text-left md:pt-0">
          <div className="relative text-xs items-start bg-white border-b-stone-300 border-t-stone-300 box-border caret-transparent gap-x-1 flex flex-col justify-center leading-[14.4px] min-h-[auto] min-w-[auto] gap-y-1 text-center w-full pl-0 pt-[18px] pb-3.5 border-r-white/10 border-b border-r md:text-base md:leading-6 md:text-left md:pl-[22px] md:pt-7 md:pb-5"></div>
        </div>
        <div className="text-xs items-center border-b-stone-300 box-border caret-transparent flex h-11 justify-start leading-[18px] text-center pl-0 pr-1 py-4 border-b md:text-base md:h-[50px] md:leading-6 md:text-left md:pl-[22px] md:pr-0">
          <div className="relative text-xs items-center box-border caret-transparent gap-x-1 flex h-8 justify-start leading-[18px] min-h-[auto] min-w-[auto] gap-y-1 text-center md:static md:text-base md:gap-x-2 md:leading-6 md:gap-y-2 md:text-left">
            <p className="text-[11px] font-medium box-border caret-transparent hidden leading-[16.5px] uppercase w-4 md:text-base md:leading-6">
              1.
            </p>
            <p className="text-xs box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] text-center md:text-base md:leading-6 md:text-left">
              📋
            </p>
            <p className="text-[13px] font-medium box-border caret-transparent leading-[19.5px] min-h-[auto] min-w-[auto] text-center md:text-lg md:leading-[27px] md:text-left">
              Calories
            </p>
          </div>
        </div>
        <div className="text-xs items-center border-b-stone-300 box-border caret-transparent flex h-11 justify-start leading-[18px] text-center pl-0 pr-1 py-4 border-b md:text-base md:h-[50px] md:leading-6 md:text-left md:pl-[22px] md:pr-0">
          <div className="relative text-xs items-center box-border caret-transparent gap-x-1 flex h-8 justify-start leading-[18px] min-h-[auto] min-w-[auto] gap-y-1 text-center md:static md:text-base md:gap-x-2 md:leading-6 md:gap-y-2 md:text-left">
            <p className="text-[11px] font-medium box-border caret-transparent hidden leading-[16.5px] uppercase w-4 md:text-base md:leading-6">
              2.
            </p>
            <p className="text-xs box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] text-center md:text-base md:leading-6 md:text-left">
              💪
            </p>
            <p className="text-[13px] font-medium box-border caret-transparent leading-[19.5px] min-h-[auto] min-w-[auto] text-center md:text-lg md:leading-[27px] md:text-left">
              Protein
            </p>
          </div>
        </div>
        <div className="text-xs items-center border-b-stone-300 box-border caret-transparent flex h-11 justify-start leading-[18px] text-center pl-0 pr-1 py-4 border-b md:text-base md:h-[50px] md:leading-6 md:text-left md:pl-[22px] md:pr-0">
          <div className="relative text-xs items-center box-border caret-transparent gap-x-1 flex h-8 justify-start leading-[18px] min-h-[auto] min-w-[auto] gap-y-1 text-center md:static md:text-base md:gap-x-2 md:leading-6 md:gap-y-2 md:text-left">
            <p className="text-[11px] font-medium box-border caret-transparent hidden leading-[16.5px] uppercase w-4 md:text-base md:leading-6">
              3.
            </p>
            <p className="text-xs box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] text-center md:text-base md:leading-6 md:text-left">
              🥄
            </p>
            <p className="text-[13px] font-medium box-border caret-transparent leading-[19.5px] min-h-[auto] min-w-[auto] text-center md:text-lg md:leading-[27px] md:text-left">
              Sugar
            </p>
          </div>
        </div>
        <div className="text-xs items-center box-border caret-transparent flex h-11 justify-start leading-[18px] text-center pl-0 pr-1 py-4 md:text-base md:h-[50px] md:leading-6 md:text-left md:pl-[22px] md:pr-0">
          <div className="relative text-xs items-center box-border caret-transparent gap-x-1 flex h-8 justify-start leading-[18px] min-h-[auto] min-w-[auto] gap-y-1 text-center md:static md:text-base md:gap-x-2 md:leading-6 md:gap-y-2 md:text-left">
            <p className="text-[11px] font-medium box-border caret-transparent hidden leading-[16.5px] uppercase w-4 md:text-base md:leading-6">
              3.
            </p>
            <p className="text-xs box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] text-center md:text-base md:leading-6 md:text-left">
              💰
            </p>
            <p className="text-[13px] font-medium box-border caret-transparent leading-[19.5px] min-h-[auto] min-w-[auto] text-center md:text-lg md:leading-[27px] md:text-left">
              Price
            </p>
          </div>
        </div>
      </div>
      <JavyComparisonRow
        rowVariant="javvy"
        logoSrc="/images/javy/673f5ae58cfb1d06dd96a4e3_javvy-blu.svg"
        logoAlt=""
        calories="120cal"
        caloriesSubtext="in 2 scoops"
        protein="20g"
        proteinSubtext="in 2 scoops"
        sugar={"<1g"}
        faceIconSrc="/images/javy/67c74543a7ab85d00fb14d24_facehappy-green.svg"
        faceIconClass="text-xs box-border caret-transparent h-[22px] leading-[18px] max-w-full min-h-[auto] min-w-[auto] text-center md:text-base md:h-7 md:leading-6 md:text-left"
        col1Class="relative border-b-slate-300/60 flex-col mx-[3px] pt-3 pb-4 px-1 border-b md:mx-3"
        col2Class="relative border-b-slate-300/60 flex-col mx-[3px] pt-3 pb-4 px-1 border-b md:mx-3"
        col3Class="relative border-b-slate-300/60 mx-[3px] px-1 py-4 border-b md:mx-3"
        col4Class=""
        faceWrapperClass="relative text-xs box-border caret-transparent h-11 leading-[18px] mx-[3px] px-1 md:mx-3"
      />
      <JavyComparisonRow
        rowVariant="mainstream"
        brandName="Mainstream Coffees"
        brandNameClass="pl-1 md:pl-0"
        calories="150-400cal"
        protein="2-12g"
        sugar="20-50g"
        faceIconSrc="/images/javy/67c7454306143bacf213c118_facehappy-grey.svg"
        faceIconClass="text-[11.2px] h-5 leading-[16.8px] md:h-6 md:leading-6"
        col1Class="border-b-stone-300 pl-2 pr-1 py-4"
        col2Class="border-b-stone-300 pl-2 pr-1 py-4"
        col3Class="border-b-stone-300 pl-2 pr-1 py-4"
        col4Class=""
        faceWrapperClass="text-red-600 text-[11.2px] h-14 leading-[16.8px] pl-2 pr-1 py-4"
      />
      <JavyComparisonRow
        rowVariant="mainstream"
        brandName="Protein Drinks"
        calories="160-200cal"
        protein="20g"
        sugar="5g"
        sugarSubtext="or artificial sweeteners"
        faceIconSrc="/images/javy/67c7454306143bacf213c118_facehappy-grey.svg"
        faceIconClass="text-[11.2px] h-5 leading-[16.8px]"
        col1Class="border-b-stone-300 px-1 py-4 border-b"
        col2Class="border-b-stone-300 px-1 py-4 border-b"
        col3Class="border-b-stone-300 gap-x-0.5 flex-col gap-y-0.5 pt-3.5 pb-[18px] px-1 border-b"
        faceWrapperClass="text-red-600 text-[11.2px] h-14 leading-[16.8px] px-1"
      />
    </div>
  );
};
