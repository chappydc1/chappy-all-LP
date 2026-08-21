export type LoraReviewItemProps = {
  avatarLabel: string;
  avatarInitials: string;
  username: string;
  timeAgo: string;
  title: string;
  body: string;
  previewImageUrl?: string;
  productUrl: string;
  productName: string;
};

export const LoraReviewItem = (props: LoraReviewItemProps) => {
  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-col outline-[3px] gap-y-4 pb-8 md:flex-row">
      <div className="box-border caret-transparent max-w-full min-h-[auto] min-w-[220px] outline-[3px] md:max-w-[220px]">
        <div className="items-center box-border caret-transparent flex outline-[3px]">
          <div
            role="img"
            aria-label={`${props.avatarLabel} avatar`}
            className="items-center box-border caret-transparent flex h-[46px] min-h-[auto] min-w-[46px] outline-[3px] w-[46px] border mr-2 p-[3px] rounded-[50%] border-solid border-black/10"
          >
            <div className="text-sm font-bold items-center bg-gray-200 box-border caret-transparent flex h-full justify-center leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] w-full rounded-[50%] font-arial">
              {props.avatarInitials}
            </div>
          </div>
          <div className="box-border caret-transparent leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px]">
            <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2">
              <div className="box-border caret-transparent max-w-[149.28px] min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                {props.username}
              </div>
              <div
                role="img"
                aria-label="This customer received a perk in exchange for their honest review."
                className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"
              >
                <div className="box-border caret-transparent outline-[3px]">
                  <img
                    src="/images/gruns/icon-27.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-3 outline-[3px] w-3"
                  />
                </div>
              </div>
            </div>
            <div
              role="img"
              aria-label="Purchase verified by Junip"
              className="box-border caret-transparent inline-block outline-[3px]"
            >
              <div className="text-sm items-center box-border caret-transparent flex leading-[14px] outline-[3px] mt-1">
                <div className="items-start box-border caret-transparent flex h-3.5 min-h-[auto] min-w-[auto] outline-[3px] w-3.5">
                  <img
                    src="/images/gruns/icon-28.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
                  />
                </div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] ml-1">
                  Verified buyer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
        <div className="items-center box-border caret-transparent flex justify-between outline-[3px] mb-4">
          <div
            aria-label="5 stars"
            role="img"
            className="items-center box-border caret-transparent flex ml-[-3px] min-h-[auto] min-w-[auto] outline-[3px]"
          >
            <div className="relative items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px]">
              <div className="items-center box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1">
                <div className="box-border caret-transparent h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                  <img
                    src="/images/gruns/icon-25.svg"
                    alt="Icon"
                    className="box-border caret-transparent outline-[3px] m-auto"
                  />
                </div>
                <div className="box-border caret-transparent h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                  <img
                    src="/images/gruns/icon-25.svg"
                    alt="Icon"
                    className="box-border caret-transparent outline-[3px] m-auto"
                  />
                </div>
                <div className="box-border caret-transparent h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                  <img
                    src="/images/gruns/icon-25.svg"
                    alt="Icon"
                    className="box-border caret-transparent outline-[3px] m-auto"
                  />
                </div>
                <div className="box-border caret-transparent h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                  <img
                    src="/images/gruns/icon-25.svg"
                    alt="Icon"
                    className="box-border caret-transparent outline-[3px] m-auto"
                  />
                </div>
                <div className="box-border caret-transparent h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                  <img
                    src="/images/gruns/icon-25.svg"
                    alt="Icon"
                    className="box-border caret-transparent outline-[3px] m-auto"
                  />
                </div>
              </div>
              <div className="absolute items-center box-border caret-transparent gap-x-1 flex h-full outline-[3px] gap-y-1 w-full overflow-hidden left-0 top-0">
                <div className="box-border caret-transparent shrink-0 h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                  <img
                    src="/images/gruns/icon-26.svg"
                    alt="Icon"
                    className="box-border caret-transparent outline-[3px] m-auto"
                  />
                </div>
                <div className="box-border caret-transparent shrink-0 h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                  <img
                    src="/images/gruns/icon-26.svg"
                    alt="Icon"
                    className="box-border caret-transparent outline-[3px] m-auto"
                  />
                </div>
                <div className="box-border caret-transparent shrink-0 h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                  <img
                    src="/images/gruns/icon-26.svg"
                    alt="Icon"
                    className="box-border caret-transparent outline-[3px] m-auto"
                  />
                </div>
                <div className="box-border caret-transparent shrink-0 h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                  <img
                    src="/images/gruns/icon-26.svg"
                    alt="Icon"
                    className="box-border caret-transparent outline-[3px] m-auto"
                  />
                </div>
                <div className="box-border caret-transparent shrink-0 h-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                  <img
                    src="/images/gruns/icon-26.svg"
                    alt="Icon"
                    className="box-border caret-transparent outline-[3px] m-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
            <div className="text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] opacity-80 outline-[3px] text-nowrap">
              {props.timeAgo}
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-4 flex flex-col justify-between outline-[3px] gap-y-4 md:flex-row">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <div
              role="heading"
              className="text-lg font-semibold box-border caret-transparent leading-[27px] outline-[3px] mb-2"
            >
              {props.title}
            </div>
            <div className="box-border caret-transparent outline-[3px]">
              <span className="box-border caret-transparent outline-[3px]">
                {props.body}
              </span>
            </div>
          </div>
        </div>
        {props.previewImageUrl ? (
          <div className="box-border caret-transparent outline-[3px] mt-4 gap-x-4 flex flex-wrap gap-y-4">
            <div
              role="button"
              aria-label={`Preview image for ${props.title}`}
              className="relative box-border caret-transparent h-16 min-h-[auto] min-w-[auto] outline-[3px] w-16 md:h-24 md:w-24"
            >
              <img
                src={props.previewImageUrl}
                alt={`Preview image for ${props.title}`}
                className="box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full"
              />
            </div>
          </div>
        ) : null}
        <div className="box-border caret-transparent outline-[3px] text-sm leading-[21px] mt-4">
          Review for
          <a
            href={props.productUrl}
            className="box-border caret-transparent outline-[3px]"
          >
            {props.productName}
          </a>
        </div>
        <div className="box-border caret-transparent gap-x-4 flex outline-[3px] gap-y-4 mt-6">
          <div className="text-sm items-center box-border caret-transparent flex leading-[14px] min-h-[auto] min-w-[auto] outline-[3px]">
            <div className="items-center bg-[url('/images/gruns/4402299c7b701bcfc128.svg">
               
            </div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              Would recommend
            </div>
          </div>
          <div className="text-sm box-border caret-transparent gap-x-2 flex leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 ml-auto">
            <div className="box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]">
              Helpful
            </div>
            <div
              aria-label="Up vote review action - 0"
              role="button"
              className="box-border caret-transparent gap-x-1 flex h-3.5 min-h-[auto] min-w-[auto] outline-[3px] gap-y-1"
            >
              <div className="items-end box-border caret-transparent flex h-3.5 min-h-[auto] min-w-[auto] outline-[3px] w-3.5">
                <img
                  src="/images/gruns/icon-29.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
                />
              </div>
            </div>
            <div className="bg-black/10 box-border caret-transparent h-3.5 min-h-[auto] min-w-[auto] outline-[3px] w-px">
               
            </div>
            <div
              aria-label="Down vote review action - 0"
              role="button"
              className="box-border caret-transparent gap-x-1 flex h-3.5 min-h-[auto] min-w-[auto] outline-[3px] gap-y-1"
            >
              <div className="items-end box-border caret-transparent flex h-3.5 min-h-[auto] min-w-[auto] outline-[3px] w-3.5">
                <img
                  src="/images/gruns/icon-30.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
