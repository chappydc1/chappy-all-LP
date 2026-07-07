type HeadlineSectionProps = {
  bold?: string;
  intro?: string;
  highlight?: string;
  middle?: string;
  badge?: string;
};

export const PinksaltHeadlineSection = ({
  bold = "NO OZEMPIC... Just 4 Ingredients!",
  intro = "This is the",
  highlight = "new recipe",
  middle = "celebrities are using to drop up to",
  badge = "14 pounds in just 10 days!",
}: HeadlineSectionProps) => {
  return (
    <div className="relative gap-x-5 max-w-full min-h-[auto] gap-y-5 text-center mt-0 md:mt-[35px]">
      <h2 className="text-black text-base font-semibold leading-[30.4px] font-poppins md:text-xl md:leading-[34px]">
        <b className="text-base font-black leading-[30.4px] md:text-xl md:leading-[34px]">
          {bold}
        </b>
        <br />
        {intro}{" "}
        <span className="text-red-600">{highlight}</span>
        {" "}{middle}{" "}
        <span className="text-white bg-red-600 px-1.5 py-0.5 rounded">
          {badge}
        </span>
      </h2>
    </div>
  );
};
