export type ArticleBodyProps = {
  variant?: string;
  children?: React.ReactNode;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageTitle?: string;
  imageClassName?: string;
  thumbnailSrc?: string;
  videoSrc?: string;
  linkTitle?: string;
  linkText?: React.ReactNode;
  avatarSrc?: string;
  authorName?: string;
  starsSrc?: string;
  quote?: string;
  reviewMeta?: string;
  reviewText?: string;
};

export const ArticleBody = (props: ArticleBodyProps) => {
  if (props.variant === "image") {
    return (
      <img
        title={props.imageTitle ?? ""}
        src={props.imageSrc}
        alt={props.imageAlt ?? ""}
        className={
          props.imageClassName ??
          "text-black box-border caret-transparent inline max-w-full outline-[3px] w-full border border-zinc-400 rounded-[20px] border-solid"
        }
      />
    );
  }

  if (props.variant === "video") {
    return (
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px] relative bg-black hidden w-full overflow-hidden">
          <img
            src={props.thumbnailSrc}
            alt=""
            className="box-border caret-transparent max-w-full outline-[3px] w-full"
          />
          <div className="box-border caret-transparent outline-[3px] absolute items-center bg-black/40 flex justify-center inset-0">
            <div className="relative box-border caret-transparent h-[60px] outline-[3px] w-[60px]">
              <div className="absolute box-border caret-transparent h-[60px] outline-[3px] w-[60px] rounded-[50%] border-[3px] border-solid border-white/20"></div>
              <div className="absolute box-border caret-transparent h-[60px] outline-[3px] w-[60px] rounded-[50%] border-t-white border-b-transparent border-x-transparent border-[3px] border-solid"></div>
            </div>
          </div>
        </div>
        <video
          playsInline
          autoPlay
          muted
          loop
          preload="auto"
          src={props.videoSrc}
          className="bg-black box-border caret-transparent max-w-full outline-[3px] align-baseline w-full"
        ></video>
      </div>
    );
  }

  if (props.variant === "link") {
    return (
      <a
        title={props.linkTitle ?? "Get Nebroo 1"}
        href="https://offer.nebroo.com/"
        className="text-slate-50 text-xl font-bold bg-green-700 shadow-[rgba(0,0,0,0.19)_0px_4px_7px_1px] box-border caret-transparent inline-block tracking-[0.02px] leading-6 max-w-full outline-[3px] text-center w-full px-2.5 py-[15px] rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:text-3xl md:leading-9 md:px-10 hover:bg-green-600"
      >
        {props.linkText ?? (
          <>
            GET 70% OFF Nebroo{" "}
            <br className="text-xl box-border caret-transparent leading-6 outline-[3px] md:text-3xl md:leading-9" />
            Hearing Aids Now!
          </>
        )}
      </a>
    );
  }

  if (props.variant === "author") {
    return (
      <div className="box-border caret-transparent outline-[3px] items-center self-center flex w-full mt-[30px] p-px">
        <img
          title=""
          src={props.avatarSrc}
          alt=""
          className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[60px] mr-2.5"
        />
        <div className="box-border caret-transparent outline-[3px] text-[17px] font-medium leading-[25.5px] min-h-[auto] min-w-[auto] p-px font-montserrat">
          <b className="font-bold box-border caret-transparent outline-[3px]">
            {props.authorName}
          </b>
        </div>
      </div>
    );
  }

  if (props.variant === "rating") {
    return (
      <div className="box-border caret-transparent outline-[3px] text-[19px] font-bold leading-[28.5px] p-px font-montserrat">
        <div className="box-border caret-transparent outline-[3px] text-left">
          <img
            title=""
            src={props.starsSrc}
            alt=""
            className={
              props.imageClassName ??
              "box-border caret-transparent max-w-full outline-[3px] text-black inline w-[100px] mr-2.5"
            }
          />
          <span className="box-border caret-transparent outline-[3px]">
            {props.quote}
          </span>
        </div>
      </div>
    );
  }

  if (props.variant === "reviewMeta") {
    return (
      <div className="box-border caret-transparent outline-[3px] text-zinc-800 text-[17px] leading-[27px] text-left mt-2.5 p-px font-montserrat">
        {props.reviewMeta}
      </div>
    );
  }

  if (props.variant === "verifiedPurchase") {
    return (
      <div className="box-border caret-transparent outline-[3px] text-amber-700 text-[17px] font-bold leading-[25.5px] text-left mt-[5px] p-px font-montserrat md:text-[19px] md:leading-[28.5px]">
        Verified Purchase
        <div className="box-border caret-transparent outline-[3px] text-[17px] leading-[25.5px] md:text-[19px] md:leading-[28.5px]"></div>
      </div>
    );
  }

  if (props.variant === "reviewText") {
    return (
      <div className="box-border caret-transparent outline-[3px] text-zinc-800 text-[17px] leading-[27px] text-left mt-[15px] p-px font-montserrat">
        {props.reviewText}
      </div>
    );
  }

  if (props.variant === "spacer") {
    return (
      <div
        className={
          props.className ??
          "box-border caret-transparent outline-[3px] block w-full px-0 py-3 md:hidden md:px-2.5"
        }
      ></div>
    );
  }

  if (props.variant === "section") {
    return (
      <section className="bg-zinc-100 box-border caret-transparent outline-[3px]"></section>
    );
  }

  return (
    <div
      className={
        props.className ??
        "box-border caret-transparent outline-[3px] text-zinc-800 text-[17px] leading-[25.5px] text-left mt-[15px] px-px py-2.5 font-montserrat"
      }
    >
      {props.children}
    </div>
  );
};
