import { content } from "../../../content";

export const ShippingInfo = () => {
  const badges = content.hero.shippingBadges;
  return (
    <div className="items-center box-border caret-transparent flex justify-center my-[15px] md:my-[17px]">
      {badges.map((b, i) => (
        <div
          key={i}
          className={`items-baseline box-border caret-transparent flex justify-center min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto] md:mx-[17px] ${i === 0 ? "ml-0 mr-2.5" : "ml-2.5 mr-0"}`}
        >
          <div className="box-border caret-transparent min-h-0 min-w-0 mr-2.5 md:min-h-[auto] md:min-w-[auto]">
            <img
              src={b.icon}
              alt=""
              className="box-border caret-transparent inline-block max-w-full w-[18px] md:w-[22px]"
            />
          </div>
          <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
            <div className="text-gray-800 text-[10px] font-semibold box-border caret-transparent leading-[13px] md:text-xs md:leading-[18px]">
              {b.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
