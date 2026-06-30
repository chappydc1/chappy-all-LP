"use client";


export type AdvertorialContent = {
  ctaUrl: string;
  alert: {
    label: string;
    text: string;
  };
  advertorialBar: {
    label: string;
    trendingText: string;
  };
  header: {
    breadcrumb: string;
    titleIntro: string;
    titleBold: string;
    introHighlighted: string;
    introText: string;
    ratingsText: string;
    authorName: string;
    dateText: string;
  };
  article: {
    conditions: string[];
    intro: string | string[];
    sections: Array<{
      type: string;
      text?: string;
      html?: string;
      icon?: string;
      items?: string[];
    }>;
    checkoutUpdate: {
      label: string;
      date: string;
      productName: string;
      offerText: string;
      location: string;
      noteLabel: string;
      noteText: string;
    };
    guarantees: {
      guaranteeText: string;
      checkoutText: string;
      returnsText: string;
      shippingText: string;
    };
    cta: {
      title: string;
      line1: string;
      line2: string;
    };
  };
  sidebar: {
    offerText: string;
    ctaTitle: string;
    ctaLine1: string;
    ctaLine2: string;
    reviewsTitle: string;
    ratingText: string;
    ratingsCountText: string;
    ratingBreakdown: Array<{ label: string; percentage: string }>;
    featureTitle: string;
    featureItems: Array<{ label: string; rating: string }>;
  };
  stickyCta: string;
  footer: {
    disclaimer: string;
    copyright: string;
    links: Array<{ label: string; href: string }>;
  };
  comments: {
    title: string;
    items: Array<{ name: string; avatar: string; date: string; text: string }>;
  };
};

export type AdvertorialMedia = {
  alert: {
    iconSrc: string;
    iconAlt: string;
  };
  advertorialBar: {
    logoSrc: string;
    logoAlt: string;
  };
  header: {
    starsSrc: string;
    videoSrc: string;
    authorImageSrc: string;
    authorImageAlt: string;
    verifiedIconSrc: string;
    verifiedIconAlt: string;
  };
  article: {
    edemaBadImageSrc: string;
    calvesRootCauseImageSrc: string;
    secondVideoSrc: string;
    productImageSrc: string;
    guaranteeImageSrc: string;
    checkoutImageSrc: string;
    returnsImageSrc: string;
    shippingImageSrc: string;
  };
  sidebar: {
    productImageSrc: string;
    ctaBgImageSrc: string;
    starsImageSrc: string;
    ratingBreakdownImages: string[];
  };
  footer: {
    logoSrc: string;
    logoAlt: string;
  };
};

export function TopBar({
  content,
  media,
}: {
  content: AdvertorialContent;
  media: AdvertorialMedia;
}): React.ReactElement {
  return (
    <div className="text-neutral-800 text-base font-normal bg-white">
      <AdvertorialBar content={content} media={media} />
      <UpdateBanner banner={content.alert} icon={media.alert} />
      <ArticleSection content={content} media={media} />
      <CommentsSection content={content} />
      <FooterSection content={content} />
      <StickyCtaBar content={content} />
    </div>
  );
}

function AdvertorialBar({
  content,
  media,
}: {
  content: AdvertorialContent;
  media: AdvertorialMedia;
}): React.ReactElement {
  return (
    <div className="items-stretch bg-zinc-800 flex flex-wrap justify-start max-w-full px-2.5 py-px md:flex-nowrap md:py-2.5">
      <div className="relative flex basis-full grow max-w-[1170px] min-h-[25px] w-min mx-auto px-px md:basis-0 md:px-2.5">
        <div className="self-center flex justify-start w-[30%] px-px py-3">
          <div className="text-white text-sm font-bold leading-[14px] px-px py-2.5 font-montserrat">
            <span className="text-[13px] md:text-sm">{content.advertorialBar.label}</span>
          </div>
        </div>
        <div className="items-center self-center flex justify-end w-full px-px py-3">
          <img
            src={media.advertorialBar.logoSrc}
            alt={media.advertorialBar.logoAlt}
            className="max-w-full w-10 md:w-[50px]"
          />
          <div className="text-white text-[13px] font-bold leading-[13px] pl-2.5 pr-px py-2.5 font-montserrat md:text-sm md:leading-[14px] md:pl-5">
            {content.advertorialBar.trendingText}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleSection({
  content,
  media,
}: {
  content: AdvertorialContent;
  media: AdvertorialMedia;
}): React.ReactElement {
  const { header, article } = content;

  return (
    <div className="items-center self-center flex flex-wrap justify-center max-w-full pt-[5px] pb-[15px] px-[15px] md:flex-nowrap md:px-2.5">
      <div className="relative basis-full grow max-w-[1200px] min-h-[25px] w-min p-2.5 md:basis-0">
        <div className="items-start flex flex-wrap md:flex-nowrap">
          <MainArticle content={content} media={media} />
          <div className="hidden md:block md:basis-[340px] md:shrink-0">
            <Sidebar content={content} media={media} />
          </div>
        </div>
      </div>
    </div>
  );
}

function UpdateBanner({ banner, icon }: { banner: AdvertorialContent["alert"]; icon: AdvertorialMedia["alert"] }): React.ReactElement {
  return (
    <div className="flex justify-center px-[15px] pt-[15px] pb-[15px] md:px-2.5">
      <div className="w-full max-w-[1200px]">
        <div className="bg-[#fefbd9] border-2 border-[rgb(235,233,188)] rounded-[10px] text-zinc-800 text-[18px] leading-[27px] text-left p-4 font-montserrat md:text-[20px] md:leading-[30px]">
          <img src={icon.iconSrc} alt={icon.iconAlt} className="inline w-5 h-5 mr-1 align-middle" />
          <b className="text-red-600">{banner.label}</b>{" "}
          {banner.text}
        </div>
      </div>
    </div>
  );
}

function MainArticle({
  content,
  media,
}: {
  content: AdvertorialContent;
  media: AdvertorialMedia;
}): React.ReactElement {
  const { header, article } = content;

  return (
    <div className="relative basis-full grow max-w-full min-h-[25px] w-min pb-[58px] md:basis-9/12">
      <div className="text-zinc-400 text-sm font-medium leading-[14px] text-left px-px font-montserrat">
        {header.breadcrumb}
      </div>

      <div className="text-[26px] font-medium leading-9 mt-px p-px font-montserrat md:text-[38px] md:leading-[48px] md:mt-5">
        <span>{header.titleIntro}{" "}</span>
        <b className="font-extrabold">{header.titleBold}</b>
      </div>

      <div className="text-zinc-800 text-lg font-bold leading-7 text-left mt-[5px] mb-px pt-[5px] pb-px px-px font-montserrat md:text-[22px] md:leading-9 md:mb-[5px] md:pb-[5px]">
        <span className="bg-yellow-400">{header.introHighlighted}</span>
        {header.introText}
      </div>

      <div className="items-center flex justify-start w-full mb-2.5 p-px md:mb-5">
        <img src={media.header.starsSrc} alt="stars" className="max-w-full w-[100px] mr-2.5" />
        <div className="text-cyan-700 text-[15px] font-semibold leading-[18px] my-[5px] px-px py-[5px] font-montserrat">
          {header.ratingsText}
        </div>
      </div>

      <div className="relative w-full overflow-hidden px-px" style={{ paddingTop: "56.25%" }}>
        <video
          loop
          autoPlay
          playsInline
          muted
          src={media.header.videoSrc}
          className="absolute h-full max-w-full w-full left-0 inset-y-0 object-cover"
        />
      </div>

      <div className="items-center flex w-full mt-5">
        <img src={media.header.authorImageSrc} alt={media.header.authorImageAlt} className="max-w-full" />
        <div className="text-left items-center block justify-start w-full ml-2.5 md:flex">
          <div className="items-center flex ml-px mt-px md:mt-0">
            <div className="text-zinc-800 text-[15px] font-bold leading-6 font-montserrat md:text-base md:leading-[27px]">
              {header.authorName}
            </div>
            <img src={media.header.verifiedIconSrc} alt={media.header.verifiedIconAlt} className="max-w-full ml-[5px] mr-[15px]" />
          </div>
          <div className="text-zinc-600 text-[15px] leading-6 font-montserrat md:text-base md:leading-[27px]">
            <i>{header.dateText}</i>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <Sidebar content={content} media={media} />
      </div>

      {Array.isArray(article.intro)
        ? article.intro.map((line, i) => (
            <div key={i} className="text-zinc-800 text-[17px] leading-[25.5px] text-left mt-[15px] px-px py-2.5 font-open_sans">
              {line}
            </div>
          ))
        : (
            <div className="text-zinc-800 text-[17px] leading-[25.5px] text-left mt-[15px] px-px py-2.5 font-open_sans">
              {article.intro}
            </div>
          )
      }

      <ul className="text-zinc-800 text-[17px] bg-[rgb(226,244,249)] leading-[25.5px] list-none text-left my-2.5 px-[15px] py-0.5 font-open_sans">
        {article.conditions.map((condition) => (
          <li key={condition} className="p-[5px]">
            <div className="items-baseline flex p-[5px]">
              <span className="text-green-700 mr-2.5 text-lg leading-none">⊕</span>
              <b>{condition}</b>
            </div>
          </li>
        ))}
      </ul>

      {article.sections.map((section, i) => {
        if (section.type === "heading") {
          return (
            <div
              key={i}
              className="text-zinc-800 text-[26px] font-extrabold leading-8 text-left mt-[30px] px-px py-[5px] font-montserrat md:text-[33px] md:leading-[46.2px]"
            >
              {section.text}
            </div>
          );
        }
        if (section.type === "paragraph" && section.html) {
          return (
            <div
              key={i}
              className="text-zinc-800 text-[17px] leading-[25.5px] text-left mt-[15px] px-px py-2.5 font-open_sans"
              dangerouslySetInnerHTML={{ __html: section.html }}
            />
          );
        }
        if (section.type === "list" && section.items) {
          return (
            <ul key={i} className="text-zinc-800 text-[17px] bg-[rgb(226,244,249)] leading-[25.5px] list-none text-left mb-2.5 px-[15px] py-0.5 font-open_sans">
              {section.items.map((item) => (
                <li key={item} className="p-[5px]">
                  <div className="items-baseline flex p-[5px]">
                    <span className="text-green-700 mr-2.5">✓</span>
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          );
        }
        return null;
      })}

      <div className="relative w-full overflow-hidden mt-[15px]" style={{ paddingTop: "56.25%" }}>
        <video
          loop
          autoPlay
          playsInline
          muted
          src={media.article.secondVideoSrc}
          className="absolute h-full max-w-full w-full rounded-[10px] left-0 inset-y-0 object-cover"
        />
      </div>

      <img
        src={media.article.edemaBadImageSrc}
        alt=""
        className="max-w-full mt-[15px] rounded-[10px] inline"
      />

      <img
        src={media.article.calvesRootCauseImageSrc}
        alt=""
        className="max-w-full mt-[15px] rounded-[10px] inline"
      />

      <CheckoutOfferSection content={content} media={media} />
    </div>
  );
}

function CheckoutOfferSection({
  content,
  media,
}: {
  content: AdvertorialContent;
  media: AdvertorialMedia;
}): React.ReactElement {
  const { checkoutUpdate, guarantees, cta } = content.article;

  return (
    <div className="bg-[rgb(242,242,242)] mt-[10px]">
      <div className="w-full pt-[15px] pb-8 bg-[rgb(254,251,217)] px-[25px]">
        <div>
          <b className="text-lg font-bold leading-7">
            <span className="text-red-600">{checkoutUpdate.label}</span>
          </b>
          {" "}As of {checkoutUpdate.date} - The demand for {checkoutUpdate.productName} has increased
          dramatically and inventory has been flying off the shelves. Order your own for{" "}
          <b><span className="text-red-600">{checkoutUpdate.offerText}</span></b>{" "}
          before it&apos;s too late.
        </div>
        <div className="items-start flex flex-col justify-center w-full px-px py-3 md:flex-row">
          <div className="w-full p-px">
            <div className="text-zinc-800 text-lg font-medium leading-7 text-left mt-[15px] mb-px px-[5px] py-px font-montserrat">
              Lock in your order while you can to get{" "}
              <b>{checkoutUpdate.offerText}</b>{" "}to{" "}
              <b><span className="text-blue-400">{checkoutUpdate.location}</span></b>
            </div>
            <div className="text-zinc-800 text-lg font-medium leading-7 text-left mt-5 mb-px px-[5px] py-px font-montserrat">
              <b><span className="text-red-600">{checkoutUpdate.noteLabel}</span></b>
              {" "}{checkoutUpdate.noteText}
            </div>
          </div>
          <div className="flex justify-center w-full p-px md:justify-end">
            <img src={media.article.productImageSrc} alt="product" className="max-w-full w-[250px] mt-[15px] md:mt-0" />
          </div>
        </div>
      </div>

      <div className="w-full pt-[15px] pb-8 md:px-[25px]">
        <div className="flex w-full">
          <div className="items-center flex flex-col justify-center w-full p-px">
            <img src={media.article.guaranteeImageSrc} alt="guarantee" className="max-w-full w-[100px]" />
            <div className="text-zinc-800 text-[15px] font-medium leading-5 text-center mt-[15px] px-[5px] font-montserrat">
              {guarantees.guaranteeText}
            </div>
          </div>
          <div className="items-center flex flex-col justify-center w-full p-px">
            <img src={media.article.checkoutImageSrc} alt="checkout" className="max-w-full w-[100px]" />
            <div className="text-zinc-800 text-[15px] font-medium leading-5 text-center mt-[15px] px-[5px] font-montserrat">
              {guarantees.checkoutText}
            </div>
          </div>
        </div>
        <div className="flex w-full mt-2.5">
          <div className="items-center flex flex-col justify-center w-full p-px">
            <img src={media.article.returnsImageSrc} alt="returns" className="max-w-full w-[100px]" />
            <div className="text-zinc-800 text-[15px] font-medium leading-5 text-center mt-[15px] px-[5px] font-montserrat">
              {guarantees.returnsText}
            </div>
          </div>
          <div className="items-center flex flex-col justify-center w-full p-px">
            <img src={media.article.shippingImageSrc} alt="shipping" className="max-w-full w-[100px]" />
            <div className="text-zinc-800 text-[15px] font-medium leading-5 text-center mt-[15px] px-[5px] font-montserrat">
              {guarantees.shippingText}
            </div>
          </div>
        </div>
        <a
          href={content.ctaUrl}
          className="text-slate-50 text-xl font-bold bg-green-700 shadow-[rgba(0,0,0,0.19)_0px_4px_7px_1px] inline-block tracking-[0.02px] leading-6 max-w-full text-center w-full px-2.5 py-[15px] mt-5 rounded font-montserrat md:text-3xl md:leading-9 md:px-10"
        >
          {cta.line1}{" "}
          <br />
          {cta.line2}
        </a>
      </div>
    </div>
  );
}

function Sidebar({
  content,
  media,
}: {
  content: AdvertorialContent;
  media: AdvertorialMedia;
}): React.ReactElement {
  const { sidebar } = content;

  return (
    <div className="relative flex flex-col w-full md:w-auto">
      <div className="flex h-full w-full px-px py-3 md:px-2.5">
        <div className="bg-zinc-100 w-full mt-2.5 p-4 rounded text-center">
          <div className="text-blue-400 text-[22px] font-bold hidden mt-[5px] font-montserrat md:block">
            {sidebar.offerText}
          </div>

          <img
            src={media.sidebar.productImageSrc}
            alt="Nooro Massager"
            className="max-w-full hidden w-full mt-2.5 mb-4 md:inline"
          />

          <a
            href={content.ctaUrl}
            className="bg-yellow-400 hidden justify-center items-center max-w-full text-center w-full border-amber-600 px-4 py-3 rounded-[5px] border-b-4 border-solid font-montserrat md:flex"
          >
            <span className="text-zinc-800 text-[22px] font-bold leading-tight">
              ➜ {sidebar.ctaLine1}<br />{sidebar.ctaLine2}
            </span>
          </a>

          <div className="text-zinc-800 text-xl font-bold mt-[30px] px-px font-montserrat">
            {sidebar.reviewsTitle}
          </div>

          <div className="bg-white w-full py-3 mt-px px-2.5">
            <div className="items-center self-center flex justify-between w-full px-px py-3">
              <img src={media.sidebar.starsImageSrc} alt="stars" className="max-w-full w-20 mr-px" />
              <div className="text-zinc-800 text-[17px] font-bold mt-px font-montserrat">
                {sidebar.ratingText}
              </div>
            </div>
            <div className="text-zinc-400 font-semibold hidden my-[5px] font-montserrat md:block">
              {sidebar.ratingsCountText}
            </div>

            {sidebar.ratingBreakdown.map((item, i) => (
              <div key={item.label} className="flex justify-between w-full px-px py-[5px] md:justify-start">
                <div className="w-3/12">
                  <div className="text-green-700 text-[15px] font-bold mt-px font-montserrat">{item.label}</div>
                </div>
                <div className="flex justify-between w-6/12 md:justify-normal md:w-full">
                  <div className="flex p-px">
                    <img
                      src={media.sidebar.ratingBreakdownImages[i] ?? ""}
                      alt=""
                      className="items-center self-center justify-center max-w-full w-[140px] mx-px"
                    />
                  </div>
                  <div className="text-green-700 text-[15px] font-bold mt-px pr-[5px] font-montserrat">
                    {item.percentage}
                  </div>
                </div>
              </div>
            ))}

            <div className="text-zinc-800 text-xl font-bold mt-5 font-montserrat">
              {sidebar.featureTitle}
            </div>

            {sidebar.featureItems.map((item) => (
              <div key={item.label} className="flex justify-between w-full px-px py-[5px] md:justify-start">
                <div className="w-6/12">
                  <div className="text-black text-[15px] mt-px font-montserrat">{item.label}</div>
                </div>
                <div className="flex justify-center">
                  <div className="flex pl-px pr-2.5 py-px">
                    <img src={media.sidebar.starsImageSrc} alt="stars" className="items-center self-center justify-center max-w-full w-20 mx-px" />
                  </div>
                  <div className="text-black text-[15px] mt-px pr-[5px] font-montserrat">{item.rating}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CommentsSection({ content }: { content: AdvertorialContent }): React.ReactElement {
  return (
    <div className="items-stretch flex flex-wrap justify-start max-w-full p-2.5 md:flex-nowrap">
      <div className="relative basis-full grow max-w-[1170px] min-h-[25px] w-min mx-auto p-2.5 md:basis-0">
        <div className="text-zinc-800 text-base leading-[21px] text-start mt-5 mb-[115px]">
          <div className="text-base leading-4 text-center mt-2.5 p-2.5 font-open_sans font-bold">
            {content.comments.title}
          </div>
          <div className="mt-2.5">
            {content.comments.items.map((comment) => (
              <div key={comment.name} className="bg-white border border-gray-200 rounded p-4 mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold mr-3">
                    {comment.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm font-montserrat">{comment.name}</div>
                    <div className="text-gray-500 text-xs">{comment.date}</div>
                  </div>
                </div>
                <p className="text-sm font-open_sans">{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterSection({ content }: { content: AdvertorialContent }): React.ReactElement {
  return (
    <div className="items-stretch flex flex-wrap justify-start max-w-full border-gray-500 mt-10 pt-5 pb-2.5 px-2.5 border-t border-solid md:flex-nowrap">
      <div className="relative basis-full grow max-w-[1170px] min-h-[25px] w-min mx-auto md:basis-0">
        <p className="text-zinc-500 text-xs leading-relaxed mb-4 font-open_sans">
          {content.footer.disclaimer}
        </p>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="text-zinc-500 text-xs font-montserrat">{content.footer.copyright}</p>
          <div className="flex gap-4">
            {content.footer.links.map((link) => (
              <a key={link.label} href={link.href} className="text-zinc-500 text-xs underline font-montserrat hover:text-zinc-800">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StickyCtaBar({ content }: { content: AdvertorialContent }): React.ReactElement {
  return (
    <div className="sticky items-stretch bg-zinc-400 flex flex-wrap justify-center max-w-full z-10 px-5 py-[15px] bottom-0 md:flex-nowrap md:px-2.5">
      <div className="relative items-center flex basis-full flex-row-reverse grow justify-center max-w-[1200px] min-h-[25px] w-min md:basis-0">
        <a
          href={content.ctaUrl}
          className="text-slate-50 text-2xl font-bold bg-green-700 shadow-[rgba(0,0,0,0.19)_0px_4px_7px_1px] block tracking-[0.02px] leading-[30px] max-w-full text-center p-2.5 rounded font-montserrat md:leading-10 md:px-10 md:py-[25px]"
        >
          {content.stickyCta}
        </a>
      </div>
    </div>
  );
}
