import { DiabetesGuaranteeBadge } from "./DiabetesGuaranteeBadge";
import { DiabetesGuaranteeContent } from "./DiabetesGuaranteeContent";

export type DiabetesGuaranteeSectionProps = {
  imageUrl: string;
  alt: string;
};

export const DiabetesGuaranteeSection = (props: DiabetesGuaranteeSectionProps) => {
  return (
    <section className="relative text-white bg-[linear-gradient(90deg,rgb(179,170,129),rgb(189,153,41))] box-border caret-transparent outline-[3px] py-12">
      <div className="relative box-border caret-transparent max-w-[1100px] outline-[3px] w-full mx-auto px-3">
        <div className="items-center box-border caret-transparent flex flex-wrap justify-center outline-[3px] -mx-3">
          <DiabetesGuaranteeBadge imageUrl={props.imageUrl} alt={props.alt} />
          <DiabetesGuaranteeContent />
        </div>
      </div>
    </section>
  );
};
