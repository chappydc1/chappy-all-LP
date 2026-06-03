export const DoctorProfile = () => {
  return (
    <div className="box-border caret-transparent hidden min-h-0 min-w-0 w-full pb-2.5 px-4 md:block md:min-h-[auto] md:min-w-[auto] md:w-[204.8px] md:px-0">
      <div className="box-border caret-transparent gap-x-2.5 flex flex-row gap-y-2.5 md:flex-col">
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mnsem251Wpf2gA/assets/drginasam.webp"
            className="box-border caret-transparent inline w-[81.96px] md:w-[147.2px]"
          />
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <span className="text-white text-[12.8px] font-semibold bg-red-500 box-border caret-transparent leading-[19.2px] text-nowrap px-1 rounded-sm font-myriad_pro">
            Top Gastroenterologist 2024
          </span>
          <span className="text-teal-800 text-2xl font-bold box-border caret-transparent block leading-9 underline font-myriad_pro">
            Dr. Gina Sam M.D
          </span>
        </div>
      </div>
      <p className="text-lg box-border caret-transparent leading-[27px] mb-4 font-myriad_pro md:text-[13px] md:leading-[19.5px]">
        <b className="text-lg font-bold box-border caret-transparent leading-[27px] md:text-[13px] md:leading-[19.5px]">
          Dr. Gina Sam, MD, is a leading NYC gastroenterologist and former
          director of the Mount Sinai Gastrointestinal Motility Center
        </b>
        . Over her 20-year career, Dr. Sam has specialized in treating digestive
        and metabolic disorders, founding the Institute of Gastrointestinal
        Motility Disorders and Integrative Health in New York City.{" "}
        <em className="text-lg italic box-border caret-transparent leading-[27px] md:text-[13px] md:leading-[19.5px]">
          Dr. Sam&#39;s research has positioned her at the forefront of
          understanding{" "}
          <b className="text-lg font-bold box-border caret-transparent leading-[27px] md:text-[13px] md:leading-[19.5px]">
            obesity, fatigue and other metabolic dysfunctions.
          </b>
        </em>
      </p>
    </div>
  );
};
