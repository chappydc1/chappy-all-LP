export type HowToUseStepProps = {
  stepNumber: string;
  wistiaId: string;
  description: React.ReactNode;
  descriptionClassName?: string;
};

export const HowToUseStep = (props: HowToUseStepProps) => {
  return (
    <div className="box-border caret-transparent min-h-0 min-w-0 w-full px-px py-3 font-montserrat md:min-h-[auto] md:min-w-[auto] md:px-2.5">
      <div className="text-slate-500 text-4xl font-bold box-border caret-transparent leading-9 text-center p-2.5 font-montserrat">
        {props.stepNumber}
      </div>
      <div className="relative w-full" style={{ paddingTop: "95.2%" }}>
        <iframe
          src={`https://fast.wistia.net/embed/iframe/${props.wistiaId}?seo=false&videoFoam=true`}
          title={`How To Use Step ${props.stepNumber}`}
          allow="autoplay; fullscreen"
          allowFullScreen
          frameBorder="0"
          scrolling="no"
          className="absolute inset-0 w-full h-full rounded-[9.5px]"
        />
      </div>
      <div className={`text-[17px] box-border caret-transparent leading-[25px] text-left pt-2.5 pb-px px-2.5 font-montserrat md:leading-[26px] ${props.descriptionClassName || ""}`}>
        {props.description}
      </div>
    </div>
  );
};
