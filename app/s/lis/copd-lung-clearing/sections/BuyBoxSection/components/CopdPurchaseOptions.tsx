export type CopdPurchaseOptionsProps = {
  variant: string;
  title: string;
  actionText?: string;
  iconUrl?: string;
  flavorPrimaryLabel?: string;
  flavorSecondaryLabel?: string;
  flavorPrimaryDescription?: string;
  flavorSecondaryDescription?: string;
  flavorPrimaryImageUrl?: string;
  flavorSecondaryImageUrl?: string;
  flavorPrimaryImageAlt?: string;
  flavorSecondaryImageAlt?: string;
  flavorBadgeText?: string;
  modalCloseIconUrl?: string;
  modalImageOneUrl?: string;
  modalImageTwoUrl?: string;
  modalImageThreeUrl?: string;
  modalImageFourUrl?: string;
  radioName?: string;
  savingsText?: string;
  hiddenProductId?: string;
  hiddenSellingPlan?: string;
  sugarPrimaryLabel?: string;
  sugarSecondaryLabel?: string;
  subscribePrice?: string;
  subscribeComparePrice?: string;
  subscribeDailyPrice?: string;
  oneTimePrice?: string;
  oneTimeComparePrice?: string;
  oneTimeDailyPrice?: string;
  discountSavings?: string;
  submitText?: string;
};

export const CopdPurchaseOptions = (props: CopdPurchaseOptionsProps) => {
  const iconUrl =
    props.iconUrl ?? "/images/gruns/icon-16.svg";
  const modalCloseIconUrl =
    props.modalCloseIconUrl ??
    "/images/gruns/icon-17.svg";
  const sugarPrimaryLabel = props.sugarPrimaryLabel ?? "Low Sugar";
  const sugarSecondaryLabel = props.sugarSecondaryLabel ?? "Sugar-Free";

  if (props.variant === "flavor") {
    return (
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px] mb-6 pt-6 border-t border-solid">
          <div className="box-border caret-transparent outline-[3px] items-baseline flex justify-between">
            <div className="box-border caret-transparent outline-[3px] min-h-[auto] min-w-[auto]">
              <h3 className="text-base font-bold box-border caret-transparent inline-block leading-[25.6px] outline-[3px] md:text-xl md:leading-8">
                {props.title}
              </h3>
              <div className="box-border caret-transparent inline-block outline-[3px]">
                <span className="text-base font-medium box-border caret-transparent inline-block leading-[25.6px] outline-[3px] md:text-xl md:leading-8">
                  {props.flavorPrimaryLabel}
                </span>
                <span className="text-base font-medium box-border caret-transparent hidden leading-[25.6px] outline-[3px] md:text-xl md:leading-8">
                  {props.flavorSecondaryLabel}
                </span>
              </div>
            </div>
            <button className="items-center bg-transparent caret-transparent gap-x-0.5 hidden justify-start outline-[3px] gap-y-0.5 text-center p-0 border-b border-black text-base font-medium leading-[19.2px]">
              {props.actionText}{" "}
              <img
                src={iconUrl}
                alt="Icon"
                className="box-border caret-transparent inline-block h-4 outline-[3px] w-4"
              />
            </button>
          </div>
          <div className="box-border caret-transparent outline-[3px] mt-1 mb-5">
            <span className="text-base italic font-medium box-border caret-transparent inline-block leading-[19.2px] outline-[3px]">
              {props.flavorPrimaryDescription}
            </span>
            <span className="text-base italic font-medium box-border caret-transparent hidden leading-[19.2px] outline-[3px]">
              {props.flavorSecondaryDescription}
            </span>
          </div>
          <div className="box-border caret-transparent outline-[3px] items-start gap-x-4 flex justify-start gap-y-4">
            <a
              href="#"
              className="relative items-center box-border caret-transparent gap-x-2.5 flex flex-col justify-start max-w-[110px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5"
            >
              <div className="relative bg-neutral-200 box-border caret-transparent h-[88px] min-h-[auto] min-w-[auto] outline-[3px] w-[88px] z-0 border overflow-clip rounded-[88px] border-solid">
                <img
                  src={props.flavorPrimaryImageUrl}
                  alt={props.flavorPrimaryImageAlt}
                  className="absolute aspect-[auto_108_/_108] box-border caret-transparent h-[108px] max-w-full min-w-[108px] outline-[3px] w-[108px] -left-2.5 top-0"
                />
              </div>
              <span className="text-base font-semibold box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center">
                {props.flavorPrimaryLabel}
              </span>
            </a>
            <a
              href="#"
              className="relative items-center box-border caret-transparent gap-x-2.5 flex flex-col justify-start max-w-[110px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5"
            >
              <div className="relative bg-white box-border caret-transparent h-[88px] min-h-[auto] min-w-[auto] outline-[3px] w-[88px] z-0 border overflow-clip rounded-[88px] border-solid">
                <img
                  src={props.flavorSecondaryImageUrl}
                  alt={props.flavorSecondaryImageAlt}
                  className="absolute aspect-[auto_108_/_108] box-border caret-transparent h-[108px] max-w-full min-w-[108px] outline-[3px] w-[108px] -left-2.5 top-0"
                />
              </div>
              <div className="absolute box-border caret-transparent outline-[3px] text-center -top-1">
                <div className="text-sm bg-amber-400 box-border caret-transparent leading-[14px] outline-[3px] uppercase px-2 py-0.5 rounded-sm">
                  {props.flavorBadgeText}
                </div>
              </div>
              <span className="text-base box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center">
                {props.flavorSecondaryLabel}
              </span>
            </a>
          </div>
          <div className="fixed items-center box-border caret-transparent hidden h-full justify-center outline-[3px] pointer-events-none w-full left-0 top-0">
            <div className="relative bg-white box-border caret-transparent outline-[3px] m-5 px-5 py-[34px] rounded-xl md:m-40 md:p-8">
              <button className="absolute bg-transparent caret-transparent block shrink-0 h-5 outline-[3px] text-center w-5 p-0 right-2 top-2">
                <img
                  src={modalCloseIconUrl}
                  alt="Icon"
                  className="box-border caret-transparent outline-[3px]"
                />
              </button>
              <div className="box-border caret-transparent outline-[3px]">
                <div className="box-border caret-transparent outline-[3px]">
                  <div className="box-border caret-transparent outline-[3px]">
                    <img
                      src={props.modalImageOneUrl}
                      className="aspect-[auto_2400_/_1098] box-border caret-transparent max-w-full outline-[3px] w-[2400px]"
                    />
                  </div>
                  <div className="box-border caret-transparent block outline-[3px] md:hidden">
                    <img
                      src={props.modalImageTwoUrl}
                      className="aspect-[auto_1200_/_2013] box-border caret-transparent max-w-full outline-[3px] w-[1200px]"
                    />
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent hidden outline-[3px]">
                <div className="box-border caret-transparent outline-[3px]">
                  <div className="box-border caret-transparent outline-[3px]">
                    <img
                      src={props.modalImageThreeUrl}
                      className="aspect-[auto_1632_/_746] box-border caret-transparent max-w-full outline-[3px] w-[1632px]"
                    />
                  </div>
                  <div className="box-border caret-transparent block outline-[3px] md:hidden">
                    <img
                      src={props.modalImageFourUrl}
                      className="aspect-[auto_652_/_1032] box-border caret-transparent max-w-full outline-[3px] w-[652px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "sugar") {
    return (
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px] mb-6 pt-6 border-t border-solid">
          <div className="box-border caret-transparent outline-[3px] items-baseline flex justify-between mb-4">
            <div className="box-border caret-transparent outline-[3px] min-h-[auto] min-w-[auto]">
              <h3 className="text-base font-bold box-border caret-transparent inline-block leading-[25.6px] outline-[3px] md:text-xl md:leading-8">
                {props.title}
              </h3>
            </div>
            <button className="items-center bg-transparent caret-transparent gap-x-0.5 hidden justify-start outline-[3px] gap-y-0.5 text-center p-0 border-b border-black leading-5">
              {props.actionText}{" "}
              <img
                src={iconUrl}
                alt="Icon"
                className="box-border caret-transparent inline-block h-4 outline-[3px] w-4"
              />
            </button>
          </div>
          <div className="box-border caret-transparent outline-[3px] items-center gap-x-4 flex justify-start gap-y-4">
            <div className="box-border caret-transparent outline-[3px] items-center gap-x-4 flex justify-start min-h-[auto] min-w-[auto] gap-y-4 w-full">
              <button className="text-base font-bold bg-neutral-200 caret-transparent block leading-4 max-w-none min-h-[auto] min-w-[auto] outline-[3px] text-center w-full border p-3 rounded-lg border-black md:max-w-[164px]">
                {sugarPrimaryLabel}
              </button>
              <button className="text-base bg-white caret-transparent block leading-4 max-w-none min-h-[auto] min-w-[auto] outline-[3px] text-center w-full border p-3 rounded-lg border-black md:max-w-[164px]">
                {sugarSecondaryLabel}
              </button>
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 hidden justify-start outline-[3px] gap-y-4 w-full">
              <button className="text-base font-bold bg-rose-100 caret-transparent leading-4 max-w-none outline-[3px] text-center w-full border p-3 rounded-lg border-black md:max-w-[164px]">
                {sugarPrimaryLabel}
              </button>
              <button className="text-base bg-white caret-transparent leading-4 max-w-none outline-[3px] text-center w-full border p-3 rounded-lg border-black md:max-w-[164px]">
                {sugarSecondaryLabel}
              </button>
            </div>
          </div>
          <div className="fixed items-center box-border caret-transparent hidden h-full justify-center outline-[3px] pointer-events-none w-full left-0 top-0">
            <div className="relative bg-white box-border caret-transparent outline-[3px] m-5 px-5 py-[34px] rounded-xl md:m-40 md:p-8">
              <button className="absolute bg-transparent caret-transparent block shrink-0 h-5 outline-[3px] text-center w-5 p-0 right-2 top-2">
                <img
                  src={modalCloseIconUrl}
                  alt="Icon"
                  className="box-border caret-transparent outline-[3px]"
                />
              </button>
              <div className="box-border caret-transparent outline-[3px]">
                <div className="box-border caret-transparent outline-[3px]">
                  <div className="box-border caret-transparent outline-[3px]">
                    <img
                      src={props.modalImageOneUrl}
                      className="box-border caret-transparent max-w-full outline-[3px]"
                    />
                  </div>
                  <div className="box-border caret-transparent block outline-[3px] md:hidden">
                    <img
                      src={props.modalImageTwoUrl}
                      className="box-border caret-transparent max-w-full outline-[3px]"
                    />
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent hidden outline-[3px]">
                <div className="box-border caret-transparent outline-[3px]">
                  <div className="box-border caret-transparent outline-[3px]">
                    <img
                      src={props.modalImageThreeUrl}
                      className="box-border caret-transparent max-w-full outline-[3px]"
                    />
                  </div>
                  <div className="box-border caret-transparent block outline-[3px] md:hidden">
                    <img
                      src={props.modalImageFourUrl}
                      className="box-border caret-transparent max-w-full outline-[3px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "quantity") {
    return (
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px] mb-6 pt-6 border-t border-solid">
          <div className="box-border caret-transparent outline-[3px] items-center gap-x-4 flex justify-start gap-y-4 mb-4">
            <div className="box-border caret-transparent outline-[3px] min-h-[auto] min-w-[auto]">
              <h3 className="text-base font-bold box-border caret-transparent inline-block leading-[25.6px] outline-[3px] md:text-xl md:leading-8">
                {props.title}
              </h3>
            </div>
            <span className="text-green-950 text-sm font-medium items-center box-border caret-transparent gap-x-1 flex leading-[16.8px] min-h-[auto] min-w-[auto] opacity-50 outline-[3px] gap-y-1 border border-green-950 px-2 py-1 rounded-bl rounded-br rounded-tl rounded-tr border-dashed">
              <span className="box-border caret-transparent block h-4 min-h-[auto] min-w-[auto] outline-[3px] w-4">
                <img
                  src="/images/gruns/icon-18.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 outline-[3px] w-4"
                />
              </span>
              <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                {props.savingsText}
              </span>
            </span>
          </div>
          <div className="box-border caret-transparent outline-[3px]">
            <fieldset className="bg-white box-border caret-transparent outline-[3px] w-full border overflow-hidden p-[5px] rounded-[3.35544e+07px] border-solid border-black">
              <legend className="absolute box-border caret-transparent h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px px-0">
                {props.title}
              </legend>
              <div className="box-border caret-transparent flex outline-[3px] w-full">
                <input
                  type="radio"
                  name={props.radioName}
                  value="1"
                  className="absolute bg-transparent box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px p-0"
                />
                <label className="text-lg font-semibold bg-neutral-200 box-border caret-transparent block basis-[0%] grow tracking-[-0.9px] leading-[21.6px] min-h-[auto] min-w-[auto] outline-[3px] text-center border border-neutral-900 px-4 py-2 rounded-[3.35544e+07px] border-solid">
                  1
                </label>
                <input
                  type="radio"
                  name={props.radioName}
                  value="2"
                  className="absolute bg-transparent box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px p-0"
                />
                <label className="text-lg font-semibold box-border caret-transparent block basis-[0%] grow tracking-[-0.9px] leading-[21.6px] min-h-[auto] min-w-[auto] outline-[3px] text-center border px-4 py-2 rounded-[3.35544e+07px] border-solid border-white">
                  2
                </label>
              </div>
            </fieldset>
            <fieldset className="box-border caret-transparent outline-[3px] bg-white hidden w-full border overflow-hidden p-[5px] rounded-[3.35544e+07px] border-solid border-black">
              <legend className="absolute box-border caret-transparent h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px px-0">
                {props.title}
              </legend>
              <div className="box-border caret-transparent flex outline-[3px] w-full">
                <input
                  type="radio"
                  name={props.radioName}
                  value="1"
                  className="absolute bg-transparent box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px p-0"
                />
                <label className="text-lg font-semibold bg-rose-100 box-border caret-transparent block basis-[0%] grow tracking-[-0.9px] leading-[21.6px] outline-[3px] text-center border border-neutral-900 px-4 py-2 rounded-[3.35544e+07px] border-solid">
                  1
                </label>
                <input
                  type="radio"
                  name={props.radioName}
                  value="2"
                  className="absolute bg-transparent box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px p-0"
                />
                <label className="text-lg font-semibold box-border caret-transparent block basis-[0%] grow tracking-[-0.9px] leading-[21.6px] outline-[3px] text-center border px-4 py-2 rounded-[3.35544e+07px] border-solid border-white">
                  2
                </label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="bg-white box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent outline-[3px]">
            <h3 className="text-base font-bold box-border caret-transparent inline-block leading-[25.6px] outline-[3px] md:text-xl md:leading-8">
              {props.title}
            </h3>
          </div>
          <form className="box-border caret-transparent outline-[3px]">
            <input
              type="hidden"
              name="id"
              value={props.hiddenProductId}
              className="appearance-none bg-transparent box-border caret-transparent hidden outline-[3px] p-0"
            />
            <input
              type="hidden"
              name="selling_plan"
              value={props.hiddenSellingPlan}
              className="appearance-none bg-transparent box-border caret-transparent hidden outline-[3px] p-0"
            />
            <div className="box-border caret-transparent hidden outline-[3px] mb-6">
              <span className="text-[lab(47.7841_-0.393182_-10.0268)] text-sm font-medium box-border caret-transparent block leading-5 outline-[3px] mb-2">
                Sugar:
              </span>
              <div className="box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2">
                <button
                  type="button"
                  className="text-white text-sm font-medium bg-black caret-transparent block basis-[0%] grow leading-5 outline-[3px] text-center px-4 py-3 rounded-md border-2 border-black"
                >
                  {sugarPrimaryLabel}
                </button>
                <button
                  type="button"
                  className="text-sm font-medium bg-white caret-transparent block basis-[0%] grow leading-5 outline-[3px] text-center border-[lab(91.6229_-0.159115_-2.26791)] px-4 py-3 rounded-md border-2"
                >
                  {sugarSecondaryLabel}
                </button>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[3px] mb-5 md:mb-6">
              <ul className="box-border caret-transparent gap-x-4 flex flex-col list-none outline-[3px] gap-y-4 pl-0 pt-4 md:gap-x-5 md:gap-y-5">
                <li className="relative box-border caret-transparent outline-[3px] min-h-[auto] min-w-[auto]">
                  <button
                    type="button"
                    className="bg-neutral-200 caret-transparent outline-[3px] text-left w-full border border-emerald-900 overflow-clip p-0 rounded-lg"
                  >
                    <div className="text-amber-400 text-xs font-bold bg-emerald-900 box-border caret-transparent leading-3 outline-[3px] text-center uppercase w-full p-1.5 md:text-sm md:leading-[22.4px]">
                      <span className="text-xs box-border caret-transparent leading-3 outline-[3px] md:text-sm md:leading-[22.4px]">
                        Most Popular: Get 49% Off
                      </span>
                      <span className="text-xs box-border caret-transparent hidden leading-3 outline-[3px] md:text-sm md:leading-[22.4px]">
                        Most Popular: Get 52% Off
                      </span>
                    </div>
                    <div className="items-start box-border caret-transparent flex justify-start outline-[3px] w-full pt-3 px-3 md:pt-4 md:px-4">
                      <span className="relative box-border caret-transparent block shrink-0 h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px] border border-emerald-900 mr-1.5 mt-0 rounded-[3.35544e+07px] border-solid md:mt-[3px] after:accent-auto after:bg-emerald-900 after:box-border after:caret-transparent after:text-black after:block after:text-xl after:not-italic after:normal-nums after:font-normal after:h-2.5 after:tracking-[normal] after:leading-8 after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:translate-x-[-5px] after:translate-y-[-5px] after:visible after:w-2.5 after:rounded-[50%] after:border-separate after:left-2/4 after:top-2/4 after:font-work_sans"></span>
                      <div className="items-start box-border caret-transparent gap-x-1 flex flex-col grow min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 md:gap-x-2 md:gap-y-2">
                        <span className="text-lg font-bold box-border caret-transparent block leading-[21.6px] min-h-[auto] min-w-[auto] outline-[3px] md:text-xl md:leading-6">
                          Subscribe &amp; Save
                        </span>
                        <span className="text-sm font-medium box-border caret-transparent block leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px]">
                          28 packs each 4 weeks
                        </span>
                      </div>
                      <div className="items-end box-border caret-transparent gap-x-1 flex flex-col shrink-0 min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 text-right ml-auto md:gap-x-2 md:gap-y-2">
                        <div className="items-center box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1">
                          <span className="text-lg font-bold box-border caret-transparent block leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] md:text-xl md:leading-5">
                            {props.subscribePrice}
                          </span>
                          <span className="box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px]">
                            <span className="text-[lab(35.6337_-1.58697_-10.8425)] text-sm font-bold box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] line-through">
                              {props.subscribeComparePrice}
                            </span>
                          </span>
                        </div>
                        <span className="text-xs font-medium box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {props.subscribeDailyPrice}
                        </span>
                      </div>
                    </div>
                    <div className="box-border caret-transparent h-[115px] outline-[3px] overflow-hidden ml-6 md:h-[119px]">
                      <div className="box-border caret-transparent outline-[3px] pt-2 pb-3 md:pb-4">
                        <ul className="items-start box-border caret-transparent gap-x-2 flex flex-col justify-start outline-[3px] gap-y-2 pl-0">
                          <li className="box-border caret-transparent outline-[3px] min-h-[auto] min-w-[auto] py-0.5">
                            <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                              <span className="box-border caret-transparent block h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                                <img
                                  src="/images/gruns/35.svg"
                                  alt="FAST & FREE Shipping On First Order"
                                  className="aspect-[auto_48_/_48] box-border caret-transparent max-w-full outline-[3px] w-12"
                                />
                              </span>
                              <span className="text-sm font-medium box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px]">
                                FAST &amp; FREE Shipping On First Order
                              </span>
                            </div>
                          </li>
                          <li className="box-border caret-transparent outline-[3px] min-h-[auto] min-w-[auto] py-0.5">
                            <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                              <span className="box-border caret-transparent block h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                                <img
                                  src="/images/gruns/35.svg"
                                  alt="Pause Or Cancel Any Time"
                                  className="aspect-[auto_48_/_48] box-border caret-transparent max-w-full outline-[3px] w-12"
                                />
                              </span>
                              <span className="text-sm font-medium box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px]">
                                Pause Or Cancel Any Time
                              </span>
                            </div>
                          </li>
                          <li className="box-border caret-transparent outline-[3px] min-h-[auto] min-w-[auto] py-0.5">
                            <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                              <span className="box-border caret-transparent block h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                                <img
                                  src="/images/gruns/35.svg"
                                  alt="30-Day Money-Back Guarantee"
                                  className="aspect-[auto_48_/_48] box-border caret-transparent max-w-full outline-[3px] w-12"
                                />
                              </span>
                              <span className="text-sm font-medium box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px]">
                                30-Day Money-Back Guarantee
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </button>
                </li>
                <li className="relative box-border caret-transparent outline-[3px] min-h-[auto] min-w-[auto]">
                  <button
                    type="button"
                    className="bg-white caret-transparent outline-[3px] text-left w-full border p-3 rounded-lg border-black md:p-4"
                  >
                    <div className="items-start box-border caret-transparent flex justify-start outline-[3px] w-full">
                      <span className="relative box-border caret-transparent block shrink-0 h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px] border mr-1.5 mt-0 rounded-[3.35544e+07px] border-solid md:mt-[3px]"></span>
                      <div className="items-start box-border caret-transparent gap-x-0.5 flex flex-col grow min-h-[auto] min-w-[auto] outline-[3px] gap-y-0.5">
                        <span className="text-lg font-bold box-border caret-transparent block leading-[21.6px] min-h-[auto] min-w-[auto] outline-[3px]">
                          One Time Purchase
                        </span>
                        <span className="text-sm font-medium box-border caret-transparent block leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px]">
                          28 packs delivered once
                        </span>
                      </div>
                      <div className="items-end box-border caret-transparent flex flex-col shrink-0 min-h-[auto] min-w-[auto] outline-[3px] text-right ml-auto">
                        <div className="box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1">
                          <span className="text-lg font-bold box-border caret-transparent block leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] md:text-xl md:leading-5">
                            {props.oneTimePrice}
                          </span>
                          <span className="box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px]">
                            <span className="text-[lab(35.6337_-1.58697_-10.8425)] text-sm font-bold box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] line-through">
                              {props.oneTimeComparePrice}
                            </span>
                          </span>
                        </div>
                        <span className="text-xs font-medium box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {props.oneTimeDailyPrice}
                        </span>
                      </div>
                    </div>
                    <div className="box-border caret-transparent h-0 outline-[3px] overflow-hidden ml-6">
                      <div className="box-border caret-transparent outline-[3px] pt-2">
                        <ul className="items-start box-border caret-transparent gap-x-3 flex justify-start outline-[3px] gap-y-3 pl-0">
                          <li className="box-border caret-transparent outline-[3px] min-h-[auto] min-w-[auto] py-0.5">
                            <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                              <span className="box-border caret-transparent block h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                                <img
                                  src="/images/gruns/33.svg"
                                  alt="No Free Shipping"
                                  className="aspect-[auto_48_/_48] box-border caret-transparent max-w-full outline-[3px] w-12"
                                />
                              </span>
                              <span className="text-sm font-medium box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px]">
                                No Free Shipping
                              </span>
                            </div>
                          </li>
                          <li className="box-border caret-transparent outline-[3px] min-h-[auto] min-w-[auto] py-0.5">
                            <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                              <span className="box-border caret-transparent block h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                                <img
                                  src="/images/gruns/33.svg"
                                  alt="Discount on first order only"
                                  className="aspect-[auto_48_/_48] box-border caret-transparent max-w-full outline-[3px] w-12"
                                />
                              </span>
                              <span className="text-sm font-medium box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px]">
                                Discount on first order only
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            <div className="items-stretch box-border caret-transparent gap-x-3 flex outline-[3px] gap-y-3 mt-3 mb-6">
              <button
                type="submit"
                className="text-white text-lg font-semibold items-center bg-green-700 caret-transparent gap-x-1.5 flex grow h-14 justify-center leading-7 min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 text-center border px-2 py-0 rounded-[3.35544e+07px] border-black"
              >
                <span className="box-border caret-transparent block tracking-[-0.54px] min-h-[auto] min-w-[auto] outline-[3px]">
                  {props.submitText}
                </span>
              </button>
            </div>
            <div className="bg-amber-100 box-border caret-transparent inline-block h-[35px] outline-[3px] text-center w-full overflow-hidden mb-6 p-2 rounded-lg">
              <div className="box-border caret-transparent flex flex-col outline-[3px]">
                <span className="text-base font-medium box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px]">
                  Limited Time Discount Auto-Applied ✅
                </span>
                <span className="text-base font-medium box-border caret-transparent hidden leading-[25.6px] outline-[3px]">
                  You&#39;re saving{" "}
                  <span className="box-border caret-transparent outline-[3px]">
                    {props.discountSavings}
                  </span>{" "}
                  on this order
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
