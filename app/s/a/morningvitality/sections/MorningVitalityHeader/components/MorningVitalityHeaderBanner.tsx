import advData from "../../../adv.json";

export const MorningvitalityMorningVitalityHeaderBanner = () => {
  return (
    <div className="text-white text-xs bg-neutral-700 box-border caret-transparent leading-[17.1429px] outline-[3px] text-center bg-[position:0px_0px] mx-auto p-[5px]">
      {advData.header.label}
    </div>
  );
};
