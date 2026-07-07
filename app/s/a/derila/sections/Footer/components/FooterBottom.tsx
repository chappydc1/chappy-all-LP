import adv from "../../../copy.json";
import media from "../../../media.json";

export const FooterBottom = () => {
  const { copyright } = adv.footer;
  const { icons } = media;

  return (
    <div className="bg-white box-border caret-transparent outline-[3px]">
      <div className="items-center box-border caret-transparent flex flex-col justify-between max-w-none outline-[3px] gap-y-2 w-full mx-auto p-4 md:flex-row md:max-w-[1023px] md:px-10">
        <span className="text-black box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
          {copyright}
        </span>
        <div className="items-center box-border caret-transparent gap-x-10 flex flex-wrap justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 md:gap-x-4">
          {[icons.payment1, icons.payment2, icons.payment3, icons.payment4].map((icon, i) => (
            <span key={i} className={`box-border caret-transparent block ${i === 0 ? "h-6" : "h-5"} min-h-[auto] min-w-[auto] outline-[3px]`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={icon.src} alt={icon.alt} className="box-border caret-transparent h-full outline-[3px]" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
