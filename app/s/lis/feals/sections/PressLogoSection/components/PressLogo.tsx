export type PressLogoProps = {
  imageUrl: string;
};

export const PressLogo = (props: PressLogoProps) => {
  return (
    <div className="relative items-center self-stretch box-border caret-transparent flex shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] w-20 md:w-auto">
      <picture className="items-center box-border caret-transparent flex basis-0 grow h-6 min-w-[auto] object-contain outline-[3px] overflow-x-auto overflow-y-hidden md:basis-auto md:min-w-0">
        <img
          src={props.imageUrl}
          className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-contain outline-[3px] align-baseline"
        />
      </picture>
    </div>
  );
};
