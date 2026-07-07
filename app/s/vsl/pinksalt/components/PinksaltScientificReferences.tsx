export type PinksaltScientificReferencesProps = {
  showTitle?: boolean;
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const PinksaltScientificReferences = ({
  showTitle = false,
  title = "Scientific References",
  imageSrc,
  imageAlt = "",
}: PinksaltScientificReferencesProps) => {
  return (
    <div className="relative gap-x-5 max-w-full min-h-[auto] gap-y-5 text-center">
      {showTitle && (
        <h2 className="text-black text-[21px] font-semibold leading-[21px] font-poppins md:text-[43px] md:leading-[43px]">
          {title}
        </h2>
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          sizes="(max-width: 750px) 100vw, 750px"
          className="aspect-[auto_750_/_123] inline-block max-w-full w-[750px]"
        />
      )}
    </div>
  );
};
