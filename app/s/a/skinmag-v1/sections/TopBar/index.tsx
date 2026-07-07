"use client";

import React, { createContext, useContext } from "react";

// ---------- helpers --------------------------------------------------------

function renderMd(text: string): string {
  return text
    .replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>");
}

// ---------- types ----------------------------------------------------------

export type SkinmagV1ArticleSection =
  | { type: "paragraphs"; paragraphs: string[] }
  | { type: "heading"; text: string }
  | { type: "image"; mediaKey: string }
  | { type: "cta" };

type Comment = {
  author: string;
  content: string;
  meta: string;
  hasLikeIcon?: boolean;
  attachmentKey?: string;
  replies?: {
    author: string;
    mention?: string;
    content: string;
    meta: string;
  }[];
};

export type SkinmagV1AdvertorialContent = {
  meta: {
    ctaUrl: string;
    productName: string;
    currentDate: string;
    restockDate: string;
  };
  header: { siteTitle: string };
  article: {
    breadcrumb: string;
    exclusiveBadge: string;
    headline: string;
    dateLabel: string;
    timeLabel: string;
    authorName: string;
    authorRole: string;
    ctaText: string;
    readerOffer: string;
    inventoryWarning: string;
    articleSections: SkinmagV1ArticleSection[];
  };
  sidebar: {
    blurb1: string;
    blurb2: string;
    blurb3: string;
    testimonials: { name: string; text: string }[];
  };
  offer: {
    limitedTimeLabel: string;
    claimNow: string;
    noteText: string;
    stockStatus: string;
    ctaLabel: string;
    newCustomerDeal: string;
    dealText: string;
    suppliesDate: string;
  };
  stockUpdate: { status: string; label: string; date: string };
  comments: Comment[];
  footer: {
    references: string[];
    disclaimers: string[];
    links: { label: string; href: string }[];
    copyright: string;
  };
};

export type SkinmagV1AdvertorialMedia = {
  icons: Record<string, string>;
  logos: Record<string, string>;
  article: Record<string, string>;
  product: Record<string, string>;
  sidebar: Record<string, string>;
  comments: Record<string, string>;
};

type AdvertorialData = {
  content: SkinmagV1AdvertorialContent;
  media: SkinmagV1AdvertorialMedia;
};

// ---------- context --------------------------------------------------------

const AdvertorialContext = createContext<AdvertorialData | null>(null);

function useAdvertorialData(): AdvertorialData {
  const ctx = useContext(AdvertorialContext);
  if (!ctx) throw new Error("TopBar advertorial data is missing.");
  return ctx;
}

function resolveMedia(media: SkinmagV1AdvertorialMedia, key: string): string {
  const parts = key.split(".");
  if (parts.length !== 2) return "";
  const section = media[parts[0] as keyof SkinmagV1AdvertorialMedia] as
    | Record<string, string>
    | undefined;
  return section?.[parts[1]] ?? "";
}

// ---------- Header ---------------------------------------------------------

function SiteHeader(): React.JSX.Element {
  const { content } = useAdvertorialData();
  return (
    <div className="items-stretch bg-blue-600 box-border flex flex-wrap justify-center max-w-full md:flex-nowrap">
      <div className="relative box-border basis-full grow max-w-[1170px] min-h-[25px] w-min px-[15px] md:basis-0">
        <div className="items-center box-border flex justify-center w-full my-2.5 text-center md:justify-between md:text-left">
          <div className="text-white text-[23px] font-black leading-[32.2px] text-center font-georgia md:text-[28px] md:leading-[39.2px]">
            {content.header.siteTitle}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Article CTA block ---------------------------------------------

function ArticleCta(): React.JSX.Element {
  const { content, media } = useAdvertorialData();
  const imgSrc = resolveMedia(media, "article.ctaButton");
  return (
    <div className="items-center box-border flex flex-col justify-center w-full">
      <a
        href={content.meta.ctaUrl}
        title="Route Next"
        className="text-blue-700 items-center bg-sky-600 box-border flex justify-center max-w-full w-[600px] px-2.5 py-3 rounded-[10px]"
      >
        {imgSrc && (
          <img
            src={imgSrc}
            alt=""
            className="max-w-full w-[25px] md:w-10"
          />
        )}
        <div className="text-white text-[22px] font-bold leading-[30.8px] ml-0 p-px md:text-2xl md:font-semibold md:leading-[31.2px] md:ml-[5px]">
          {content.article.ctaText}
        </div>
      </a>
      <a
        href={content.meta.ctaUrl}
        className="box-border block max-w-full text-center"
      >
        {imgSrc && (
          <img
            src={imgSrc}
            alt=""
            className="inline max-w-[550px] w-full border-sky-600 mt-[30px] border-t-[5px] border-solid"
          />
        )}
      </a>
      <a
        href={content.meta.ctaUrl}
        title="Route Next"
        className="text-blue-700 items-center bg-sky-600 box-border flex justify-center max-w-full w-[600px] mt-[30px] px-2.5 py-3 rounded-[10px]"
      >
        {imgSrc && (
          <img
            src={imgSrc}
            alt=""
            className="max-w-full w-[25px] md:w-10"
          />
        )}
        <div className="text-white text-[22px] font-bold leading-[30.8px] ml-0 p-px md:text-2xl md:font-semibold md:leading-[31.2px] md:ml-[5px]">
          {content.article.ctaText}
        </div>
      </a>
      <div className="bg-yellow-100 min-h-[auto] w-full mt-5 px-2.5 py-3 rounded-[3px]">
        <div className="text-neutral-800 leading-7">
          <i>
            <b>
              <span>{content.meta.currentDate}</span>
              {" Update: "}
            </b>
            Due to recent high demand and media coverage, {content.meta.productName} supplies are running extremely low. As of today it&apos;s still in stock, but if you miss out it won&apos;t be back in stock until{" "}
            <span>{content.meta.restockDate}</span>.
          </i>
        </div>
      </div>
    </div>
  );
}

// ---------- Article section renderer ---------------------------------------

function ArticleSections(): React.JSX.Element {
  const { content, media } = useAdvertorialData();

  return (
    <>
      {content.article.articleSections.map((section, i) => {
        if (section.type === "heading") {
          return (
            <div
              key={i}
              className="text-[34px] font-bold leading-[44.2px] mt-[25px] mb-5 font-open_sans"
            >
              {section.text}
            </div>
          );
        }

        if (section.type === "image") {
          const src = resolveMedia(media, section.mediaKey);
          if (!src) return null;
          return (
            <img
              key={i}
              src={src}
              alt=""
              className="border-t-blue-600 inline max-w-full w-full my-0 border-t-[5px] md:my-5"
            />
          );
        }

        if (section.type === "cta") {
          return <ArticleCta key={i} />;
        }

        if (section.type === "paragraphs") {
          return (
            <div key={i} className="article-body">
              {section.paragraphs.map((p, j) => (
                <div
                  key={j}
                  className="font-open_sans my-5"
                  dangerouslySetInnerHTML={{ __html: renderMd(p) }}
                />
              ))}
            </div>
          );
        }

        return null;
      })}
    </>
  );
}

// ---------- As Seen On logos -----------------------------------------------

function AsSeenOn(): React.JSX.Element {
  const { media } = useAdvertorialData();
  const logos = [
    { key: "nbc", alt: "NBC Logo" },
    { key: "cbs", alt: "CBS Logo" },
    { key: "fox", alt: "Fox News Logo" },
    { key: "aol", alt: "AOL Logo" },
    { key: "usaToday", alt: "USA Today Logo" },
    { key: "yahoo", alt: "Yahoo News Logo" },
  ] as const;

  return (
    <div className="items-center box-border block flex-col mt-2.5 mb-5 md:hidden md:mb-0">
      <div className="text-neutral-500 text-sm font-bold leading-[18.2px] text-center mt-px mb-2.5">
        <i>AS SEEN ON</i>
      </div>
      <div className="box-border gap-x-2.5 grid grid-cols-[repeat(6,1fr)] justify-items-center w-full gap-y-2.5">
        {logos.map(({ key, alt }) => (
          <div
            key={key}
            className="items-center box-border flex justify-center"
          >
            <img
              alt={alt}
              src={media.logos[key]}
              className="max-w-full object-contain w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Author meta ----------------------------------------------------

function AuthorMeta(): React.JSX.Element {
  const { content, media } = useAdvertorialData();
  return (
    <div className="items-center border-b-zinc-300 border-t-zinc-300 box-border flex justify-between w-full mt-1.5 mb-2.5 px-px py-[5px] border-b border-t md:mb-0 md:py-2">
      <div className="text-xs leading-[15.6px] font-roboto md:text-sm md:leading-[18.2px]">
        By&nbsp;
        <b className="text-xs font-bold leading-[15.6px] md:text-sm md:leading-[18.2px]">
          {content.article.authorName}
        </b>
        <div className="text-xs leading-[15.6px] md:text-sm md:leading-[18.2px]">
          {content.article.authorRole}
        </div>
      </div>
      <div className="items-center flex mt-px">
        <img
          alt="Facebook"
          src={media.icons.facebook}
          className="h-[22px] max-w-full w-[22px] mx-0.5 md:h-[35px] md:w-[35px]"
        />
      </div>
    </div>
  );
}

// ---------- Article --------------------------------------------------------

function Article(): React.JSX.Element {
  const { content, media } = useAdvertorialData();
  return (
    <div className="text-xl bg-white box-border basis-full grow leading-[30px] w-full pt-2.5 pb-10 px-[15px] md:basis-[70%]">
      {/* Breadcrumb */}
      <div className="text-blue-600 text-lg font-bold leading-[23.4px] mt-5 md:text-xl md:leading-[26px]">
        {content.article.breadcrumb}
      </div>

      {/* Headline */}
      <div className="text-[26px] font-bold leading-[33.8px] mt-5 pt-2.5 pb-[5px] font-roboto">
        <span className="text-white bg-red-600 mr-2.5 px-2 py-0.5">
          {content.article.exclusiveBadge}
        </span>
        {content.article.headline}
      </div>

      {/* Date / views */}
      <div className="items-center box-border flex w-full py-2.5">
        <img
          alt=""
          src={media.icons.calendar}
          className="aspect-square max-w-full w-3.5 mr-2"
        />
        <div className="text-slate-500 text-xs leading-[16.8px] font-roboto md:text-base md:leading-[22.4px]">
          <span className="text-xs leading-[16.8px] md:text-base md:leading-[22.4px]">
            {content.article.dateLabel}
          </span>
          {" | "}{content.article.timeLabel}
        </div>
      </div>

      <AuthorMeta />

      {/* Hero image */}
      <img
        alt=""
        src={media.article.hero}
        className="aspect-[auto_789_/_433] border-t-blue-600 inline max-w-full w-full my-0 border-t-[5px] md:mt-[15px] md:mb-[30px]"
      />

      <AsSeenOn />

      {/* Article body */}
      <ArticleSections />

      {/* Comments header */}
      <div className="text-[22px] font-bold leading-[30.8px] mt-5 md:text-2xl md:leading-[33.6px] md:mt-7">
        COMMENTS
      </div>

      <CommentsSection />

      <hr className="text-zinc-500 bg-black h-0 max-w-full w-full border-gray-200 overflow-visible mt-[30px] mb-[15px] border-solid" />
    </div>
  );
}

// ---------- Comments -------------------------------------------------------

function CommentRow({
  comment,
  avatarSrc,
  likeIconSrc,
}: {
  comment: Comment;
  avatarSrc: string;
  likeIconSrc: string;
}): React.JSX.Element {
  const { media } = useAdvertorialData();
  return (
    <div className="items-start box-border flex w-full mt-5">
      <img
        alt=""
        src={avatarSrc}
        className="max-w-full w-[50px]"
      />
      <div className="box-border flex flex-col w-full px-2.5 py-px">
        <div className="text-indigo-800 text-sm font-bold leading-[19.6px] ml-px">
          {comment.author}
        </div>
        <div
          className="text-base leading-[22.4px] mt-1"
          dangerouslySetInnerHTML={{ __html: renderMd(comment.content) }}
        />
        {comment.attachmentKey && (
          <img
            alt=""
            src={resolveMedia(media, comment.attachmentKey)}
            className="max-w-full w-[400px] mt-2.5"
          />
        )}
        <div className="items-center box-border flex w-full mt-1 p-px">
          <div className="text-slate-500 text-sm leading-[19.6px] ml-px mt-px">
            Like · Reply ·{" "}
          </div>
          {comment.hasLikeIcon && (
            <img
              alt=""
              src={likeIconSrc}
              className="max-w-full w-[13px] ml-2 mr-1"
            />
          )}
          <div className="text-zinc-400 text-sm leading-[19.6px] ml-px mt-px">
            {comment.meta}
          </div>
        </div>
        {comment.replies?.map((reply, idx) => (
          <div
            key={idx}
            className="items-start box-border flex w-full mt-5"
          >
            <img
              alt=""
              src={avatarSrc}
              className="max-w-full w-[50px]"
            />
            <div className="box-border flex flex-col w-full px-2.5 py-px">
              <div className="text-indigo-800 text-sm font-bold leading-[19.6px] ml-px">
                {reply.author}
              </div>
              <div className="text-base leading-[22.4px] mt-1">
                {reply.mention && (
                  <span className="text-blue-800 font-semibold">
                    {reply.mention}{" "}
                  </span>
                )}
                {reply.content}
              </div>
              <div className="items-center box-border flex w-full mt-1 p-px">
                <div className="text-slate-500 text-sm leading-[19.6px] ml-px mt-px">
                  Like · Reply ·{" "}
                </div>
                <div className="text-zinc-400 text-sm leading-[19.6px] ml-px mt-px">
                  {reply.meta}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommentsSection(): React.JSX.Element {
  const { content, media } = useAdvertorialData();
  const avatarSrc = media.comments.defaultAvatar;
  const likeIconSrc = media.icons.like;

  return (
    <div className="box-border w-full mt-[30px]">
      <div className="bg-neutral-100 mt-[-5px] text-center border border-neutral-200 mb-5 px-4 py-3 rounded-lg border-solid">
        <span className="text-neutral-400 text-sm leading-[21px]">
          Commenting has been turned off for this post.
        </span>
      </div>
      {content.comments.map((comment, i) => (
        <CommentRow
          key={i}
          comment={comment}
          avatarSrc={avatarSrc}
          likeIconSrc={likeIconSrc}
        />
      ))}
    </div>
  );
}

// ---------- Sidebar --------------------------------------------------------

function Sidebar(): React.JSX.Element {
  const { content, media } = useAdvertorialData();
  return (
    <div className="box-border basis-[30%] grow min-h-[25px] pl-2.5">
      <div className="bg-white box-border w-full pt-[5px] pb-[25px] px-2.5">
        <div className="text-xl leading-7 mt-[30px]">{content.sidebar.blurb1}</div>
        <img
          alt=""
          src={media.sidebar.award}
          className="aspect-[321_/_241] inline max-w-full w-[321px] mt-[30px]"
        />
        <div className="text-xl leading-7 mt-[30px]">{content.sidebar.blurb2}</div>
        <img
          alt=""
          src={media.sidebar.product}
          className="inline max-w-full w-full mt-[30px]"
        />
        <div className="text-xl leading-7 mt-[30px]">{content.sidebar.blurb3}</div>
        <img
          alt=""
          src={media.sidebar.clinicalTrials}
          className="aspect-[321_/_212] inline max-w-full w-full mt-[30px]"
        />
        {content.sidebar.testimonials.map((t, i) => (
          <div key={i} className="text-xl leading-7 mt-[30px]">
            <div>
              <b>{t.name}</b>
            </div>
            <div>
              <b>
                <br />
              </b>
            </div>
            <i>{t.text}</i>
          </div>
        ))}
        <img
          alt=""
          src={media.sidebar.testimonial1}
          className="inline max-w-full w-full mt-[30px]"
        />
      </div>
    </div>
  );
}

// ---------- Main layout ----------------------------------------------------

function MainLayout(): React.JSX.Element {
  return (
    <div className="items-stretch box-border flex flex-wrap justify-center max-w-full mt-0 font-open_sans md:flex-nowrap md:mt-[30px]">
      <div className="relative box-border basis-full grow max-w-[1170px] min-h-[25px] w-min md:basis-0">
        <div className="items-stretch box-border flex flex-wrap justify-start md:flex-nowrap">
          <Article />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

// ---------- Offer section --------------------------------------------------

function OfferSection(): React.JSX.Element {
  const { content, media } = useAdvertorialData();
  const o = content.offer;
  return (
    <div className="items-stretch box-border hidden flex-wrap justify-center max-w-full font-open_sans md:flex-nowrap">
      <div className="relative bg-white box-border basis-full grow max-w-[1170px] min-h-[25px] w-min px-[15px] md:basis-0 md:px-[30px]">
        <div className="text-lg font-bold box-border block leading-[25.2px] mt-[30px] md:hidden">
          {o.limitedTimeLabel}
          <br />
        </div>
        <div className="text-sky-900 text-sm font-bold leading-[19.6px] text-center mt-2.5">
          {o.claimNow}
        </div>
        <div className="text-xl leading-7 mt-5">
          <span className="bg-yellow-400">
            <i>{o.noteText}</i>
            <br />
          </span>
        </div>
        <div className="box-border w-full">
          <div className="text-xl bg-green-50 leading-7 border mt-5 px-2 py-[5px] border-dotted">
            √<b> Stock Update: </b>
            <span className="text-sky-900">{o.stockStatus}</span>: LIMITED Discounted Supply AVAILABLE as of:
            <b> {o.suppliesDate}</b>
          </div>
        </div>
        {/* Offer card */}
        <div className="box-border w-full pt-[30px]">
          <div className="items-center bg-green-50 box-border flex flex-col justify-center w-full border pb-[25px] px-[15px] border-dotted md:flex-row md:justify-normal">
            <img
              alt=""
              src={media.product.jar}
              className="max-w-full w-[300px] mt-[25px] md:w-[400px]"
            />
            <div className="box-border basis-[0%] grow text-center px-2.5 md:text-left">
              <div className="items-center box-border flex justify-center max-w-full text-center mt-[25px] mb-[15px] md:text-left">
                <img
                  alt=""
                  src={media.icons.redTick}
                  className="h-[25px] max-w-full text-center md:text-left"
                />
                <div className="text-sky-900 text-lg font-bold leading-[25.2px]">
                  {o.newCustomerDeal}
                </div>
              </div>
              <a
                href={content.meta.ctaUrl}
                className="text-white text-2xl font-bold bg-green-500 inline-block leading-[31.2px] max-w-full text-center px-5 py-[15px] rounded-[10px] md:text-3xl md:leading-[39px]"
              >
                {o.ctaLabel}
              </a>
              <div className="box-border flex-wrap justify-center max-w-full text-center mt-[15px] md:text-left">
                <div className="text-sm font-bold leading-[19.6px] text-center">
                  LIMITED Discounted Supply AVAILABLE as of:
                  <br />
                </div>
                <div className="text-sm font-bold leading-[19.6px] text-center">
                  {o.suppliesDate}
                </div>
              </div>
              <div className="text-xl leading-7 mt-2.5">
                <span className="bg-yellow-400">
                  {" Secure Your "}
                  <b>
                    <span className="text-sky-900">Exclusive Deal</span>
                  </b>
                  {" With "}
                  <b>2 FREE GIFTS!</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Stock update bar -----------------------------------------------

function StockUpdateBar(): React.JSX.Element {
  const { content } = useAdvertorialData();
  const s = content.stockUpdate;
  return (
    <div className="items-stretch box-border hidden flex-wrap justify-center max-w-full font-open_sans md:flex-nowrap">
      <div className="relative bg-white box-border basis-full grow max-w-[1170px] min-h-[25px] w-min px-[15px] md:basis-0 md:px-[30px]">
        <div className="bg-yellow-100 box-border w-full mt-5 px-2.5 py-3 rounded-[3px]">
          <div className="text-xl leading-[29px] p-px">
            <i>
              <b>
                Stock Update: {s.status}. {s.label}{" "}
                <span>{s.date}</span>
              </b>
              <br />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Footer ---------------------------------------------------------

function Footer(): React.JSX.Element {
  const { content } = useAdvertorialData();
  const f = content.footer;
  return (
    <div className="items-stretch box-border flex flex-wrap justify-center max-w-full pb-10 font-open_sans md:flex-nowrap">
      <div className="relative box-border basis-full grow max-w-[1170px] min-h-[25px] w-min px-[15px] md:basis-0">
        <div className="text-xs leading-[16.8px] mt-20 md:text-lg md:leading-[25.2px]">
          REFERENCES:
        </div>
        <div className="text-xs break-all mt-2.5 md:text-base md:leading-[22.4px]">
          {f.references.map((ref, i) => (
            <span key={i}>
              {i + 1}. {ref}
              <br />
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="items-center box-border flex flex-wrap justify-center mt-5 gap-x-4">
          {f.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-blue-600 text-sm underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Legal disclaimers */}
        {f.disclaimers.map((d, i) => (
          <div
            key={i}
            className="text-xs leading-[16.8px] mt-3 md:text-sm md:leading-[19.6px]"
          >
            {d}
          </div>
        ))}

        <div className="text-xs leading-[16.8px] mt-4 text-center">
          {f.copyright}
        </div>
      </div>
    </div>
  );
}

// ---------- Sticky CTA -----------------------------------------------------

function StickyCta(): React.JSX.Element {
  const { content } = useAdvertorialData();
  return (
    <div className="relative items-stretch bg-neutral-300 box-border flex flex-wrap justify-center max-w-full text-center w-full font-open_sans md:flex-nowrap">
      <div className="relative box-border basis-full grow max-w-[850px] min-h-[25px] w-min md:basis-0">
        <div className="box-border w-full py-1.5 md:py-2.5">
          <a
            href={content.meta.ctaUrl}
            title="Route Next Sticky"
            className="text-white text-2xl font-bold bg-stone-500 inline-block leading-[31.2px] max-w-full text-center w-[350px] px-2.5 py-3 rounded-[10px]"
          >
            Try {content.meta.productName} Today &gt;&gt;
          </a>
        </div>
      </div>
    </div>
  );
}

// ---------- TopBar (exported root) ----------------------------------------

export function SkinmagV1TopBar({
  content,
  media,
}: {
  content: SkinmagV1AdvertorialContent;
  media: SkinmagV1AdvertorialMedia;
}): React.JSX.Element {
  return (
    <AdvertorialContext.Provider value={{ content, media }}>
      <div className="text-black text-base font-normal bg-stone-100 h-full tracking-[normal] leading-6 list-outside list-disc overscroll-x-none overscroll-y-none text-left">
        <SiteHeader />
        <MainLayout />
        <OfferSection />
        <StockUpdateBar />
        <Footer />
        <StickyCta />
      </div>
    </AdvertorialContext.Provider>
  );
}
