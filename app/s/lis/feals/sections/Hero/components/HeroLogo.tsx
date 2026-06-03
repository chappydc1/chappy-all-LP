export const HeroLogo = () => {
  return (
    <div className="relative items-center self-stretch bg-stone-50 box-border caret-transparent flex shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] py-2">
      <picture className="items-center box-border caret-transparent flex shrink-0 object-contain outline-[3px] overflow-x-auto overflow-y-hidden w-[90px]">
        <img
          src="https://c.animaapp.com/mpkdzooupOfzIE/assets/43.svg"
          className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-contain outline-[3px] align-baseline"
        />
      </picture>
    </div>
  );
};
