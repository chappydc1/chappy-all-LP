"use client";

type CommentEntry = {
  name: string;
  avatarKey: string;
  date: string;
  text: string;
  likeCount: number;
  photoKey?: string;
  replies?: CommentEntry[];
};

type StructuralSectionEntry =
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; imageKey: string; alt: string }
  | { type: "video" }
  | { type: "cta"; line1: string; line2: string }
  | { type: "trustpilot"; score: string; reviewCountLabel: string; url: string }
  | {
      type: "testimonial";
      name: string;
      title: string;
      reviewMeta: string;
      verifiedLabel: string;
      text: string;
      helpfulText: string;
      mediaKey: string;
    }
  | { type: "asSeenOn"; label: string }
  | { type: "iconGrid" };

// Any other section is a block of prose (p1, p2, p3, ...), named after the
// direct-response beat it plays (e.g. "rootCauseReveal") instead of a
// generic "paragraph" label, so the copy is easier to navigate and edit.
type ProseSectionEntry = { type: string } & Record<string, string>;

type ArticleSectionEntry = StructuralSectionEntry | ProseSectionEntry;

const STRUCTURAL_SECTION_TYPES = new Set<StructuralSectionEntry["type"]>([
  "heading",
  "list",
  "image",
  "video",
  "cta",
  "trustpilot",
  "testimonial",
  "asSeenOn",
  "iconGrid",
]);

// A prose section's `type` is a plain string, so equality checks alone can't
// rule it out when narrowing — this guard fully separates the two branches
// so the structural members keep their literal (non-string) field types.
function isStructuralSection(section: ArticleSectionEntry): section is StructuralSectionEntry {
  return (STRUCTURAL_SECTION_TYPES as Set<string>).has(section.type);
}

export type NooroAdvertorialContent = {
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
    sections: ArticleSectionEntry[];
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
    items: CommentEntry[];
  };
};

export type NooroAdvertorialMedia = {
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
    secondVideoSrc: string;
    productImageSrc: string;
    guaranteeImageSrc: string;
    checkoutImageSrc: string;
    returnsImageSrc: string;
    shippingImageSrc: string;
    dividerBarSrc: string;
    asSeenOnImageSrc: string;
    trustpilotBannerImageSrc: string;
    images: Record<string, string>;
    testimonials: Record<string, { badgeSrc: string; starsSrc: string; photoSrcs: string[] }>;
  };
  sidebar: {
    productImageSrc: string;
    ctaBgImageSrc: string;
    starsImageSrc: string;
    ratingBreakdownImages: string[];
  };
  comments: {
    likeIconSrc: string;
    avatars: Record<string, string>;
    photos: Record<string, string>;
  };
  footer: {
    logoSrc: string;
    logoAlt: string;
    dmcaImageSrc: string;
  };
};

export function NooroTopBar({
  content,
  media,
}: {
  content: NooroAdvertorialContent;
  media: NooroAdvertorialMedia;
}): React.ReactElement {
  return (
    <div className="text-neutral-800 text-base font-normal bg-white">
      <AdvertorialBar content={content} media={media} />
      <UpdateBanner banner={content.alert} icon={media.alert} />
      <ArticleSection content={content} media={media} />
      <CommentsSection content={content} media={media} />
      <FooterSection content={content} media={media} />
      <StickyCtaBar content={content} />
    </div>
  );
}

function AdvertorialBar({
  content,
  media,
}: {
  content: NooroAdvertorialContent;
  media: NooroAdvertorialMedia;
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
  content: NooroAdvertorialContent;
  media: NooroAdvertorialMedia;
}): React.ReactElement {
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

function UpdateBanner({ banner, icon }: { banner: NooroAdvertorialContent["alert"]; icon: NooroAdvertorialMedia["alert"] }): React.ReactElement {
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

function CtaButton({
  ctaUrl,
  line1,
  line2,
}: {
  ctaUrl: string;
  line1: string;
  line2: string;
}): React.ReactElement {
  return (
    <a
      href={ctaUrl}
      className="text-slate-50 text-xl font-bold bg-green-700 shadow-[rgba(0,0,0,0.19)_0px_4px_7px_1px] inline-block tracking-[0.02px] leading-6 max-w-full text-center w-full px-2.5 py-[15px] rounded font-montserrat md:text-3xl md:leading-9 md:px-10"
    >
      {line1}{" "}
      <br />
      {line2}
    </a>
  );
}

function GuaranteeIconsGrid({
  guarantees,
  media,
}: {
  guarantees: NooroAdvertorialContent["article"]["guarantees"];
  media: NooroAdvertorialMedia["article"];
}): React.ReactElement {
  const items = [
    { src: media.guaranteeImageSrc, alt: "guarantee", label: guarantees.guaranteeText },
    { src: media.shippingImageSrc, alt: "shipping", label: guarantees.shippingText },
    { src: media.checkoutImageSrc, alt: "checkout", label: guarantees.checkoutText },
    { src: media.returnsImageSrc, alt: "returns", label: guarantees.returnsText },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-2.5 gap-y-8 w-full bg-[rgb(226,244,249)] p-[15px] rounded-[10px] md:flex md:gap-x-5">
      {items.map((item) => (
        <div key={item.label} className="items-center flex flex-col justify-center w-full p-px">
          <img src={item.src} alt={item.alt} className="max-w-full w-[100px]" />
        </div>
      ))}
    </div>
  );
}

function TrustpilotBadge({
  trustpilot,
  bannerSrc,
}: {
  trustpilot: Extract<ArticleSectionEntry, { type: "trustpilot" }>;
  bannerSrc: string;
}): React.ReactElement {
  const score = parseFloat(trustpilot.score) || 0;
  return (
    <div className="mt-[15px]">
      <a href={trustpilot.url} target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-start gap-1.5 font-open_sans">
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <polygon points="12,2 15,9 22,9 16.5,13.5 18.5,21 12,16.5 5.5,21 7.5,13.5 2,9 9,9" fill="#00b67a" />
          </svg>
          <span className="text-zinc-900 text-xl font-bold">Trustpilot</span>
        </span>
        <span className="flex gap-1">
          {[0, 1, 2, 3, 4].map((idx) => {
            const fill = Math.max(0, Math.min(1, score - idx)) * 100;
            return (
              <span key={idx} className="relative inline-block w-9 h-9 bg-[#dcdce6] rounded-[2px] overflow-hidden">
                <span className="absolute inset-0 bg-[#8a8a00]" style={{ clipPath: `inset(0 ${100 - fill}% 0 0)` }} />
                <svg viewBox="0 0 24 24" width="36" height="36" className="relative">
                  <polygon points="12,4 14.5,10 21,10 15.8,13.8 17.5,20 12,16.3 6.5,20 8.2,13.8 3,10 9.5,10" fill="#fff" />
                </svg>
              </span>
            );
          })}
        </span>
        <span className="text-sm text-zinc-700">
          TrustScore <b>{trustpilot.score}</b> | {trustpilot.reviewCountLabel}
        </span>
      </a>
      <img src={bannerSrc} alt="Trustpilot reviews" className="max-w-full mt-2.5 rounded-[10px]" />
    </div>
  );
}

function TestimonialCard({
  testimonial,
  media,
}: {
  testimonial: Extract<ArticleSectionEntry, { type: "testimonial" }>;
  media: NooroAdvertorialMedia["article"]["testimonials"][string];
}): React.ReactElement {
  return (
    <div className="mt-5 pb-4 border-b border-gray-200">
      <div className="items-center flex">
        <img src={media.badgeSrc} alt={testimonial.name} className="w-[60px] h-[60px] rounded-full mr-2.5" />
        <div className="text-zinc-800 text-[17px] font-medium font-montserrat">{testimonial.name}</div>
      </div>
      <div className="items-center flex gap-2.5 mt-[10px]">
        <img src={media.starsSrc} alt="4.5 out of 5 stars" className="w-[100px]" />
        <div className="text-zinc-800 text-[19px] font-bold font-montserrat">{testimonial.title}</div>
      </div>
      <div className="text-[rgb(47,47,47)] text-[17px] mt-[5px] leading-[1.5em] font-open_sans">{testimonial.reviewMeta}</div>
      <div className="text-[#c45500] text-[17px] font-bold mt-[5px] leading-[1.5em] font-open_sans">{testimonial.verifiedLabel}</div>
      <p className="text-[rgb(47,47,47)] text-[17px] leading-[27px] mt-[15px] font-open_sans">{testimonial.text}</p>
      <div className="flex gap-2.5 mt-3">
        {media.photoSrcs.map((src) => (
          <img key={src} src={src} alt={`Photo from ${testimonial.name}'s review`} className="w-24 h-24 object-cover rounded-[5px]" />
        ))}
      </div>
      <div className="text-[rgba(86,89,89,0.78)] text-[15px] font-medium mt-2.5 leading-[20px] font-open_sans">{testimonial.helpfulText}</div>
    </div>
  );
}

function AsSeenOnBar({ label, imageSrc }: { label: string; imageSrc: string }): React.ReactElement {
  return (
    <div className="mt-[15px] text-center">
      <div className="inline-block bg-yellow-400 text-zinc-900 text-xs font-bold italic px-1.5 py-0.5 font-montserrat">{label}</div>
      <img src={imageSrc} alt={label} className="max-w-full mt-[5px] inline" />
    </div>
  );
}

function MainArticle({
  content,
  media,
}: {
  content: NooroAdvertorialContent;
  media: NooroAdvertorialMedia;
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
        if (isStructuralSection(section)) {
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
          if (section.type === "list") {
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
          if (section.type === "image") {
            return (
              <img
                key={i}
                src={media.article.images[section.imageKey]}
                alt={section.alt}
                className="max-w-full mt-[15px] rounded-[10px] inline"
              />
            );
          }
          if (section.type === "video") {
            return (
              <div key={i} className="relative w-full overflow-hidden mt-[15px]" style={{ paddingTop: "56.25%" }}>
                <video
                  loop
                  autoPlay
                  playsInline
                  muted
                  src={media.article.secondVideoSrc}
                  className="absolute h-full max-w-full w-full rounded-[10px] left-0 inset-y-0 object-cover"
                />
              </div>
            );
          }
          if (section.type === "cta") {
            return (
              <div key={i} className="mt-[15px]">
                <CtaButton ctaUrl={content.ctaUrl} line1={section.line1} line2={section.line2} />
              </div>
            );
          }
          if (section.type === "trustpilot") {
            return <TrustpilotBadge key={i} trustpilot={section} bannerSrc={media.article.trustpilotBannerImageSrc} />;
          }
          if (section.type === "testimonial") {
            return (
              <TestimonialCard key={i} testimonial={section} media={media.article.testimonials[section.mediaKey]} />
            );
          }
          if (section.type === "asSeenOn") {
            return <AsSeenOnBar key={i} label={section.label} imageSrc={media.article.asSeenOnImageSrc} />;
          }
          if (section.type === "iconGrid") {
            return (
              <div key={i} className="mt-[15px]">
                <GuaranteeIconsGrid guarantees={content.article.guarantees} media={media.article} />
              </div>
            );
          }
        }

        // Named prose section (p1, p2, p3, ...) — anything that isn't one of
        // the structural types above.
        const lines = Object.entries(section)
          .filter(([key]) => /^p\d+$/.test(key))
          .sort(([a], [b]) => Number(a.slice(1)) - Number(b.slice(1)))
          .map(([, value]) => value);
        return (
          <div key={i} className="mt-[15px] px-px py-2.5">
            {lines.map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className="text-zinc-800 text-[17px] leading-[25.5px] text-left font-open_sans first:mt-0 mt-[15px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        );
      })}

      <CheckoutOfferSection content={content} media={media} />
    </div>
  );
}

function CheckoutOfferSection({
  content,
  media,
}: {
  content: NooroAdvertorialContent;
  media: NooroAdvertorialMedia;
}): React.ReactElement {
  const { checkoutUpdate, guarantees, cta } = content.article;

  return (
    <div className="mt-[10px]">
      <img src={media.article.dividerBarSrc} alt="" className="w-full h-3 object-cover" />
      <div className="w-full pt-[15px] pb-8 bg-yellow-50 px-[25px]">
        <div className="text-zinc-800 text-lg leading-7 font-montserrat">
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

      <div className="w-full pt-[15px] pb-8 px-[25px] bg-yellow-100">
        <GuaranteeIconsGrid guarantees={guarantees} media={media.article} />
        <CtaButton ctaUrl={content.ctaUrl} line1={cta.line1} line2={cta.line2} />
      </div>
    </div>
  );
}

function Sidebar({
  content,
  media,
}: {
  content: NooroAdvertorialContent;
  media: NooroAdvertorialMedia;
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

function CommentItem({
  comment,
  media,
  nested,
}: {
  comment: CommentEntry;
  media: NooroAdvertorialMedia["comments"];
  nested?: boolean;
}): React.ReactElement {
  const avatarSize = nested ? "w-[35px] h-[35px]" : "w-[50px] h-[50px]";

  return (
    <div className="flex items-start mt-2.5">
      <div className={`shrink-0 mr-[5px] ${avatarSize}`}>
        <img src={media.avatars[comment.avatarKey]} alt={comment.name} className={`${avatarSize} object-cover`} />
      </div>
      <div className="flex-1">
        <p className="text-indigo-800 text-[15px] font-bold font-montserrat">{comment.name}</p>
        <p className="text-black text-[15px] leading-5 font-open_sans">{comment.text}</p>
        {comment.photoKey && (
          <img src={media.photos[comment.photoKey]} alt={`Photo shared by ${comment.name}`} className="mt-2.5 w-32 rounded-[5px]" />
        )}
        <div className="flex items-center gap-1 mt-[5px] text-[13px] text-zinc-500 font-montserrat">
          <span className="text-indigo-800">Like</span>
          <span>·</span>
          <span className="text-indigo-800">Reply</span>
          <span>·</span>
          <img src={media.likeIconSrc} alt="" className="w-4 h-4 inline" />
          <span>{comment.likeCount}</span>
          <span>·</span>
          <span>{comment.date}</span>
        </div>
      </div>
    </div>
  );
}

function CommentThread({
  comment,
  media,
}: {
  comment: CommentEntry;
  media: NooroAdvertorialMedia["comments"];
}): React.ReactElement {
  return (
    <div className="mt-2.5">
      <CommentItem comment={comment} media={media} />
      {comment.replies?.map((reply, i) => (
        <div key={`${reply.name}-${i}`} className="flex mt-[5px]">
          <div className="w-[10%] shrink-0" />
          <div className="flex-1 border-l border-stone-300 pl-2.5">
            <CommentItem comment={reply} media={media} nested />
          </div>
        </div>
      ))}
    </div>
  );
}

function CommentsSection({ content, media }: { content: NooroAdvertorialContent; media: NooroAdvertorialMedia }): React.ReactElement {
  return (
    <div className="items-stretch flex flex-wrap justify-start max-w-full p-2.5 md:flex-nowrap">
      <div className="relative basis-full grow max-w-[1170px] min-h-[25px] w-min mx-auto p-2.5 md:basis-0">
        <div className="text-zinc-800 text-base leading-[21px] text-start mt-5 mb-[115px]">
          <p className="text-neutral-800 text-[15px] font-bold font-montserrat md:text-xl">
            {content.comments.title}
          </p>
          <textarea
            placeholder="Add a comment ..."
            className="block w-full min-h-[100px] mt-2.5 mb-5 px-[15px] py-[11px] rounded-md border border-neutral-300 text-gray-800 font-open_sans resize-y"
          />
          <div>
            {content.comments.items.map((comment, i) => (
              <CommentThread key={`${comment.name}-${i}`} comment={comment} media={media.comments} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterSection({ content, media }: { content: NooroAdvertorialContent; media: NooroAdvertorialMedia }): React.ReactElement {
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
        <div className="flex items-center justify-between flex-wrap gap-2 mt-4">
          <img src={media.footer.dmcaImageSrc} alt="DMCA Protected" className="h-6" />
        </div>
      </div>
    </div>
  );
}

function StickyCtaBar({ content }: { content: NooroAdvertorialContent }): React.ReactElement {
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
