export type BundleOptionProps = {
  headerClassName: string;
  titleWrapperClassName: string;
  titleClassName: string;
  title: string;
  priceWrapperClassName: string;
  originalPriceWrapperClassName: string;
  originalPrice: string;
  eachPriceClassName: string;
  eachPrice: string;
  discountClassName: string;
  discountText: string;
  spacerClassName: string;
  mainKitQuantity: string;
  mainKitDescription: string;
  bonusContent: React.ReactNode;
  compactDetails: boolean;
  showViewAll: boolean;
};

export const BundleOption = (props: BundleOptionProps) => {
  return (
    <div className="bg-stone-100 box-border caret-transparent outline-[3px] w-full mt-5 rounded-[10px]">
      <div
        className={`items-center box-border caret-transparent flex flex-col justify-between outline-[3px] w-full pl-5 py-3 rounded-t-[10px] md:flex-row ${props.headerClassName}`}
      >
        <div className={props.titleWrapperClassName}>
          <div
            className={`font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-left p-px font-montserrat md:leading-6 ${props.titleClassName}`}
          >
            {props.title}
          </div>
          <img
            title=""
            src="/images/rejuvacare/1722845784568_star.svg"
            alt=""
            className="text-black box-border caret-transparent h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-5 ml-[7px]"
          />
        </div>
        <div className={props.priceWrapperClassName}>
          <div className={props.originalPriceWrapperClassName}>
            <span className="box-border caret-transparent leading-5 outline-[3px] md:leading-6">
              {props.originalPrice}
            </span>
          </div>
          <div
            className={`box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] mr-[5px] font-montserrat md:leading-6 ${props.eachPriceClassName}`}
          >
            <b className="font-bold box-border caret-transparent leading-5 outline-[3px] md:leading-6">
              <span className="box-border caret-transparent leading-5 outline-[3px] md:leading-6">
                {props.eachPrice}
              </span>
            </b>{" "}
            each
          </div>
          <div className="bg-black box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-[100px] ml-1.5 px-2.5 py-0.5 rounded-[20px]">
            <div
              className={`text-white text-[13px] font-bold box-border caret-transparent outline-[3px] p-px font-montserrat md:text-sm md:leading-[21px] ${props.discountClassName}`}
            >
              {props.discountText}
            </div>
          </div>
        </div>
        <div
          className={`box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] ml-[11px] p-px font-montserrat ${props.spacerClassName}`}
        ></div>
      </div>
      <div className="box-border caret-transparent outline-[3px] w-full border-neutral-300 pt-3 pb-[15px] px-5 rounded-b-[10px] border-b border-l border-r border-solid">
        <div className="box-border caret-transparent outline-[3px] items-start flex justify-start text-left w-full mt-2.5 md:items-center">
          <img
            title=""
            src="/images/rejuvacare/1722846383829_icon_check.webp"
            alt=""
            className="text-black box-border caret-transparent h-[25px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-[25px] ml-px mr-2.5"
          />
          <div className="box-border caret-transparent outline-[3px] leading-5 min-h-[auto] min-w-[auto] text-left p-px font-montserrat">
            <div className="box-border caret-transparent leading-6 outline-[3px] md:leading-5 text-left">
              <b className="font-bold box-border caret-transparent leading-6 outline-[3px] md:leading-5">
                {props.mainKitQuantity}
              </b>
              {props.mainKitDescription}
            </div>
            <div className="box-border caret-transparent outline-[3px] text-left"></div>
          </div>
        </div>
        {props.compactDetails ? (
          <>
            <div className="box-border caret-transparent outline-[3px] w-full mt-2.5 hidden pb-2.5">
              {props.bonusContent}
              <div className="items-center box-border caret-transparent flex justify-start outline-[3px] w-full mt-2.5">
                <img
                  title=""
                  src="/images/rejuvacare/1722846383829_icon_check.webp"
                  alt=""
                  className="text-black box-border caret-transparent h-[25px] max-w-full outline-[3px] w-[25px] ml-px mr-2.5"
                />
                <div className="box-border caret-transparent leading-5 outline-[3px] p-px font-montserrat">
                  <div className="box-border caret-transparent outline-[3px]">
                    <span className="box-border caret-transparent outline-[3px]">
                      90-Day Money Back Guarantee
                      <br className="box-border caret-transparent outline-[3px]" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="items-center box-border caret-transparent flex justify-start outline-[3px] w-full mt-2.5">
                <img
                  title=""
                  src="/images/rejuvacare/1722846383829_icon_check.webp"
                  alt=""
                  className="text-black box-border caret-transparent h-[25px] max-w-full outline-[3px] w-[25px] ml-px mr-2.5"
                />
                <div className="box-border caret-transparent leading-5 outline-[3px] p-px font-montserrat">
                  <div className="box-border caret-transparent outline-[3px]">
                    <span className="box-border caret-transparent outline-[3px] text-left">
                      Free tracked &amp; insured shipping
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {props.showViewAll ? (
              <div className="items-center box-border caret-transparent flex justify-start outline-[3px] w-full mt-[5px]">
                <a
                  title="View All"
                  className="text-zinc-800 box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center underline px-2.5 font-helvetica"
                >
                  View All
                </a>
              </div>
            ) : null}
          </>
        ) : (
          <>
            {props.bonusContent}
            <div className="items-center box-border caret-transparent flex justify-start outline-[3px] w-full mt-2.5">
              <img
                title=""
                src="/images/rejuvacare/1722846383829_icon_check.webp"
                alt=""
                className="text-black box-border caret-transparent h-[25px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[25px] ml-px mr-2.5"
              />
              <div className="box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] p-px font-montserrat">
                <div className="box-border caret-transparent outline-[3px] text-left">
                  <span className="box-border caret-transparent outline-[3px]">
                    90-Day Money Back Guarantee
                  </span>
                </div>
                <div className="box-border caret-transparent outline-[3px]"></div>
              </div>
            </div>
            <div className="items-center box-border caret-transparent flex justify-start outline-[3px] w-full mt-2.5">
              <img
                title=""
                src="/images/rejuvacare/1722846383829_icon_check.webp"
                alt=""
                className="text-black box-border caret-transparent h-[25px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[25px] ml-px mr-2.5"
              />
              <div className="box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] p-px font-montserrat">
                <div className="box-border caret-transparent outline-[3px] text-left">
                  Free tracked &amp; insured shipping
                </div>
                <div className="box-border caret-transparent outline-[3px]"></div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
