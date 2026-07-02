// @ts-nocheck
import adv from "../../../adv.json";
import media from "../../../media.json";

export const AuthorRow = () => {
  return (
    <div className="relative text-[15px] content-start box-border caret-transparent gap-x-1 grid grid-cols-[minmax(0px,auto)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 w-full mb-6 mx-auto md:text-base md:content-between md:gap-x-4 md:grid-cols-[minmax(0px,auto)_minmax(0px,auto)] md:justify-between md:leading-[28.8px] md:gap-y-4 md:w-[1200px]">
      <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-center leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
            <h2 className="text-neutral-900 text-[13px] font-medium bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[16.9px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter md:text-sm md:leading-[21px]">
              <strong className="text-[13px] font-bold box-border caret-transparent leading-[16.9px] max-w-full outline-[3px] md:text-sm md:leading-[21px]">
                {adv.authorRow.byline}
              </strong>
            </h2>
          </div>
        </div>
      </div>
      <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-center leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
        <div
          role="presentation"
          className="relative text-[15px] box-border caret-transparent shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px] md:text-center"
        >
          <div className="text-[15px] box-border caret-transparent flex h-full leading-[27px] max-w-full outline-[3px] text-left w-full md:text-base md:justify-center md:leading-[28.8px] md:text-center">
            <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] text-left md:text-base md:leading-[28.8px] md:text-center">
              <img
                src={media.authorRow.authorPhoto}
                alt=""
                className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] text-left w-[100px] md:text-base md:leading-[28.8px] md:text-center md:w-[150px]"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};
