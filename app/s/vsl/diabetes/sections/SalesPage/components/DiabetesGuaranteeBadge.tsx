export type DiabetesGuaranteeBadgeProps = {
  imageUrl: string;
  alt: string;
};

export const DiabetesGuaranteeBadge = (props: DiabetesGuaranteeBadgeProps) => {
  return (
    <div className="box-border caret-transparent shrink-0 max-w-full outline-[3px] w-full px-3 md:w-3/12">
      <figure className="box-border caret-transparent outline-[3px]">
        <img
          src={props.imageUrl}
          alt={props.alt}
          className="box-border caret-transparent inline max-w-[200px] outline-[3px] mb-4"
        />
      </figure>
    </div>
  );
};
