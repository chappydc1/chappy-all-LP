export type GetokinawatonicBonusesSectionProps = {
  content?: React.ReactNode;
};

export const GetokinawatonicBonusesSection = (props: GetokinawatonicBonusesSectionProps) => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.5)_0px_0px_10px_0px] box-border caret-transparent outline-[3px] my-[30px] p-[25px] rounded-[5px]">
      {props.content}
    </div>
  );
};
