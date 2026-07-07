export type MorningvitalityMorningVitalitySidebarProps = {
  variantClass: string;
};

export const MorningvitalityMorningVitalitySidebar = (props: MorningvitalityMorningVitalitySidebarProps) => {
  return (
    <div
      className={`relative box-border caret-transparent float-none min-h-px outline-[3px] w-auto bg-[position:0px_0px] px-[15px] md:float-left ${props.variantClass}`}
    ></div>
  );
};
