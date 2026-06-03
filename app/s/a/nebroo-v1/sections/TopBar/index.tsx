"use client";

import React, { createContext, useContext } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type VideoSource =
  | { format: "wistia"; id: string; layout?: "standard" | "alternate" }
  | { format: "mp4"; src: string };

type BodySection =
  | { type: "paragraph"; html: string }
  | { type: "heading"; text: string; extraClass?: string }
  | { type: "video"; mediaKey: string; containerClass?: string }
  | { type: "image"; mediaKey: string; className?: string }
  | { type: "cta" }
  | { type: "reviews" }
  | { type: "as-seen-on" }
  | { type: "disclaimer"; text: string };

type Review = {
  avatarKey: string;
  name: string;
  title: string;
  location: string;
  body: string;
};

type CommentReply = {
  avatarKey: string;
  name: string;
  text: string;
  likeCount: number;
  timeAgo: string;
  showLikeIcon: boolean;
};

type Comment = {
  avatarKey: string;
  name: string;
  text: string;
  likeCount: number;
  timeAgo: string;
  showLikeIcon: boolean;
  replies?: CommentReply[];
};

type FooterLink = { label: string; href: string };

export type AdvContent = {
  ctaUrl: string;
  meta: { title: string };
  topBanner: { trendingText: string };
  alert: { label: string; text: string };
  breadcrumb: string;
  headline: string;
  headlineBold: string;
  subheadline: { highlighted: string; rest: string };
  sidebar: { heading: string[]; ctaLine1: string; ctaLine2: string };
  ctaButton: { line1: string; line2: string };
  stickyBar: { text: string };
  bodySections: BodySection[];
  reviews: Review[];
  comments: Comment[];
  footer: {
    disclosure: string;
    copyright: string;
    links: FooterLink[];
    phone: string;
    email: string;
    address: string;
  };
};

export type AdvMedia = {
  flagIcon: string;
  sidebarProductImage: string;
  sidebarArrowIcon: string;
  starsImage: string;
  paymentMethods: string;
  asSeenOnDesktop: string;
  asSeenOnMobile: string;
  videos: Record<string, VideoSource>;
  images: Record<string, string>;
  reviewAvatars: Record<string, string>;
  commentAvatars: Record<string, string>;
};

// ─── Context ──────────────────────────────────────────────────────────────────

type AdvertorialData = { content: AdvContent; media: AdvMedia };
const AdvertorialContext = createContext<AdvertorialData | null>(null);

function useAdvertorialData(): AdvertorialData {
  const ctx = useContext(AdvertorialContext);
  if (!ctx) throw new Error("TopBar advertorial data is missing.");
  return ctx;
}

// ─── VideoPlayer ──────────────────────────────────────────────────────────────

function VideoPlayer({
  mediaKey,
  containerClass = "",
}: {
  mediaKey: string;
  containerClass?: string;
}): React.JSX.Element {
  const { media } = useAdvertorialData();
  const source = media.videos[mediaKey];

  if (!source) return <></>;

  return (
    <div className={`w-full ${containerClass}`}>
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        {source.format === "wistia" ? (
          <iframe
            src={`https://fast.wistia.net/embed/iframe/${source.id}?autoPlay=true&muted=1&videoFoam=true`}
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
            title={`Video ${mediaKey}`}
          />
        ) : (
          <video
            src={source.src}
            autoPlay
            muted
            playsInline
            loop
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

// ─── CtaButton ────────────────────────────────────────────────────────────────

function CtaButton(): React.JSX.Element {
  const { content } = useAdvertorialData();
  return (
    <a
      href={content.ctaUrl}
      className="text-slate-50 text-xl font-bold bg-green-700 shadow-[rgba(0,0,0,0.19)_0px_4px_7px_1px] inline-block tracking-[0.02px] leading-6 max-w-full text-center w-full px-2.5 py-[15px] rounded font-montserrat md:text-3xl md:leading-9 md:px-10"
    >
      {content.ctaButton.line1}
      <br />
      {content.ctaButton.line2}
    </a>
  );
}

// ─── ReviewCard ───────────────────────────────────────────────────────────────

function ReviewCard({ review }: { review: Review }): React.JSX.Element {
  const { media } = useAdvertorialData();
  const avatarSrc = media.reviewAvatars[review.avatarKey] ?? "";

  return (
    <div className="p-px mt-6">
      <div className="flex items-center w-full mt-[30px]">
        {avatarSrc && (
          <img
            src={avatarSrc}
            alt={review.name}
            className="max-w-full w-[60px] mr-2.5"
          />
        )}
        <div className="text-[17px] font-medium leading-[25.5px] p-px font-montserrat">
          <b className="font-bold">{review.name}</b>
        </div>
      </div>
      <div className="flex items-center w-full mt-2.5">
        <div className="text-[19px] font-bold leading-[28.5px] p-px font-montserrat text-left">
          <img
            src={media.starsImage}
            alt="5 stars"
            className="inline max-w-full w-[100px] mr-2.5"
          />
          <span>{review.title}</span>
        </div>
      </div>
      <div className="text-zinc-800 text-[17px] leading-[27px] text-left mt-2.5 font-montserrat p-px">
        {review.location}
      </div>
      <div className="text-amber-700 text-[17px] font-bold leading-[25.5px] text-left mt-[5px] font-montserrat p-px md:text-[19px] md:leading-[28.5px]">
        Verified Purchase
      </div>
      <div className="text-zinc-800 text-[17px] leading-[27px] text-left mt-[15px] font-montserrat p-px">
        {review.body}
      </div>
    </div>
  );
}

// ─── CommentItem ──────────────────────────────────────────────────────────────

function CommentItem({ comment }: { comment: Comment }): React.JSX.Element {
  const { media } = useAdvertorialData();
  const avatarSrc = media.commentAvatars[comment.avatarKey] ?? "";

  return (
    <li className="items-start flex mt-2.5">
      <img
        src={avatarSrc}
        alt={comment.name}
        className="float-left h-12 max-w-[95%] w-[50px] mr-2 mt-[5px]"
      />
      <div className="min-h-[auto] min-w-[auto] ml-2.5 font-helvetica">
        <h3 className="text-indigo-800 font-bold leading-[16.8px] mb-1">
          {comment.name}
        </h3>
        <p className="text-black mb-[3px]">{comment.text}</p>
        <div className="h-[25px]">
          <p className="text-xs leading-[18px] mb-4">
            <span className="text-indigo-800">Like</span>
            {" · "}
            <span className="text-indigo-800">Reply</span>
            {" · "}
            {comment.showLikeIcon && (
              <img
                src="https://ucarecdn.com/6f24fed0-64b8-4e56-9fdd-c76e61fae250/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="like"
                className="relative inline h-[15px] max-w-[95%] w-[13px] bottom-[3px]"
              />
            )}
            <span className="text-black">{comment.likeCount}</span>
            {" · "}
            <span className="text-black">{comment.timeAgo}</span>
          </p>
        </div>
        {comment.replies && comment.replies.length > 0 && (
          <ul className="list-none pl-0 border-l border-gray-300">
            {comment.replies.map((reply, i) => {
              const replyAvatar = media.commentAvatars[reply.avatarKey] ?? "";
              return (
                <li key={i} className="items-start flex border-dotted border-gray-300">
                  <img
                    src={replyAvatar}
                    alt={reply.name}
                    className="float-left h-9 max-w-[95%] w-10 mr-2 mt-[5px]"
                  />
                  <div className="min-h-[auto] min-w-[auto] ml-2.5">
                    <h3 className="text-indigo-800 font-bold leading-[16.8px] mb-1">
                      {reply.name}
                    </h3>
                    <p className="text-black mb-[3px]">{reply.text}</p>
                    <div className="h-[25px]">
                      <p className="text-xs leading-[18px] mb-4">
                        <span className="text-indigo-800">Like</span>
                        {" · "}
                        <span className="text-indigo-800">Reply</span>
                        {" · "}
                        {reply.showLikeIcon && (
                          <img
                            src="https://ucarecdn.com/6f24fed0-64b8-4e56-9fdd-c76e61fae250/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                            alt="like"
                            className="relative inline h-[15px] max-w-[95%] w-[13px] bottom-[3px]"
                          />
                        )}
                        <span className="text-black">{reply.likeCount}</span>
                        {" · "}
                        <span className="text-black">{reply.timeAgo}</span>
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </li>
  );
}

// ─── TopBanner ────────────────────────────────────────────────────────────────

function TopBanner(): React.JSX.Element {
  const { content, media } = useAdvertorialData();
  return (
    <div className="items-stretch bg-zinc-800 flex flex-wrap justify-start max-w-full px-2.5 py-px md:flex-nowrap md:py-2.5">
      <div className="relative flex basis-0 grow max-w-[1170px] min-h-[25px] w-full mx-auto px-px md:px-[15px]">
        <div className="self-center flex justify-start min-h-[auto] min-w-[auto] w-[30%] px-px py-3">
          <div className="text-white font-bold leading-4 min-h-[auto] min-w-[auto] px-px py-2.5 font-montserrat">
            <div className="text-left"></div>
          </div>
        </div>
        <div className="items-center self-center flex justify-end min-h-[auto] min-w-[auto] w-full px-px py-3 md:[align-items:normal] md:self-auto">
          <img
            src={media.flagIcon}
            alt="US flag"
            className="max-w-full min-h-[auto] min-w-[auto] w-10 md:w-[50px]"
          />
          <div className="text-white text-[13px] font-bold leading-[13px] min-h-[auto] min-w-[auto] pl-2.5 pr-px py-2.5 font-montserrat md:text-base md:leading-4 md:pl-5">
            {content.topBanner.trendingText}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Alert Box ────────────────────────────────────────────────────────────────

function AlertBox(): React.JSX.Element {
  const { content } = useAdvertorialData();
  return (
    <div className="pt-8 pb-4">
      <div className="bg-[#fdfad9] border-[1.5px] border-[rgb(221,221,166)] text-zinc-800 text-[18px] leading-[27px] text-left p-4 font-montserrat md:text-[23px] md:leading-[34.5px]">
        <b className="text-red-600">{content.alert.label}</b>{" "}
        {content.alert.text}
      </div>
    </div>
  );
}

// ─── BodySection renderer ─────────────────────────────────────────────────────

function RenderBodySection({
  section,
  idx,
}: {
  section: BodySection;
  idx: number;
}): React.JSX.Element {
  const { content, media } = useAdvertorialData();

  switch (section.type) {
    case "paragraph":
      return (
        <div
          key={idx}
          className="text-zinc-800 text-[17px] leading-[25.5px] text-left mt-[15px] px-px py-2.5 font-montserrat"
          dangerouslySetInnerHTML={{ __html: section.html }}
        />
      );

    case "heading":
      return (
        <div
          key={idx}
          className={`text-zinc-800 text-[26px] font-extrabold leading-8 text-left px-px py-[5px] font-montserrat md:text-[33px] md:leading-[46.2px] ${section.extraClass ?? "mt-[30px]"}`}
        >
          {section.text}
        </div>
      );

    case "video":
      return (
        <VideoPlayer
          key={idx}
          mediaKey={section.mediaKey}
          containerClass={section.containerClass}
        />
      );

    case "image": {
      const src = media.images[section.mediaKey] ?? "";
      return (
        <img
          key={idx}
          src={src}
          alt=""
          className={`inline max-w-full ${section.className ?? ""}`}
        />
      );
    }

    case "cta":
      return (
        <div key={idx} className="mt-4">
          <CtaButton />
        </div>
      );

    case "disclaimer":
      return (
        <div
          key={idx}
          className="text-neutral-500 text-sm leading-[21px] text-left mt-[15px] pt-2.5 px-px font-montserrat"
        >
          {section.text}
        </div>
      );

    case "reviews":
      return (
        <div key={idx}>
          {content.reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      );

    case "as-seen-on":
      return (
        <div key={idx}>
          <div className="text-zinc-800 text-[33px] leading-[27px] text-left mt-[50px] p-px font-montserrat">
            <b className="text-[26px] font-bold md:text-[32px]">As Seen On:</b>
          </div>
          <div className="hidden w-full py-3 md:block">
            <img
              src={media.asSeenOnDesktop}
              alt="As Seen On"
              className="shadow-[rgb(202,202,202)_1px_0px_5px_0px] hidden max-w-full w-full mt-2.5 px-2.5 py-3 md:inline"
            />
          </div>
          <div className="block w-full px-0 py-3 md:hidden">
            <img
              src={media.asSeenOnMobile}
              alt="As Seen On"
              className="shadow-[rgb(202,202,202)_1px_0px_5px_0px] inline max-w-full w-full mt-0 px-2.5 py-3"
            />
          </div>
          <div className="text-zinc-500 text-sm leading-[27px] text-left p-px font-montserrat">
            <span>&quot;Paid Advertisements&quot;</span>
          </div>
        </div>
      );

    default:
      return <></>;
  }
}

// ─── ArticleContent ───────────────────────────────────────────────────────────

function ArticleContent(): React.JSX.Element {
  const { content, media } = useAdvertorialData();

  return (
    <div className="items-stretch flex flex-wrap justify-start max-w-full mt-1.5 md:flex-nowrap md:mt-5">
      <div className="relative basis-full grow max-w-full min-h-[25px] w-full pb-[58px] md:basis-9/12">
        <div className="text-zinc-400 font-medium hidden leading-4 text-left px-px font-montserrat md:block">
          {content.breadcrumb}
        </div>
        <div className="text-[26px] font-medium leading-9 text-left mt-px p-px font-montserrat md:text-[40px] md:leading-[48px] md:mt-5">
          <span className="text-[26px] leading-9 md:text-[40px] md:leading-[48px]">
            {content.headline.replace(content.headlineBold, "").trim()}{" "}
            <b className="text-[26px] font-bold leading-9 md:text-[40px] md:leading-[48px]">
              {content.headlineBold}
            </b>
          </span>
        </div>
        <div className="text-zinc-800 text-lg font-bold leading-7 text-left mt-[5px] mb-px pt-[5px] pb-px px-px font-montserrat md:text-[22px] md:leading-9 md:mb-[5px] md:pb-[5px]">
          <span className="text-lg leading-7 md:text-[22px] md:leading-9">
            <span className="text-lg bg-yellow-400 leading-7 md:text-[22px] md:leading-9">
              {content.subheadline.highlighted}
            </span>
            {content.subheadline.rest}
          </span>
        </div>
        {content.bodySections.map((section, idx) => (
          <RenderBodySection key={idx} section={section} idx={idx} />
        ))}
      </div>

      <div className="relative items-center hidden basis-full flex-col grow justify-start max-w-full min-h-[25px] w-full md:flex md:basis-3/12">
        <div className="items-start block h-full justify-start min-h-0 min-w-0 w-full px-px py-3 md:flex md:min-h-[auto] md:min-w-[auto] md:px-2.5">
          <div className="bg-zinc-100 min-h-0 min-w-0 w-full mt-2.5 p-2.5 rounded-[1px] text-center top-[50px] md:min-h-[auto] md:min-w-[auto]">
            <div className="text-blue-400 text-xl font-bold hidden mt-[5px] font-montserrat md:block">
              {content.sidebar.heading.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
            <img
              src={media.sidebarProductImage}
              alt="Nebroo hearing aid"
              className="hidden basis-[0%] shrink-0 max-w-full w-[90%] mt-2.5 mb-[15px] rounded-[1px] md:inline md:w-[200px]"
            />
            <a
              href={content.ctaUrl}
              className="text-blue-700 items-center self-center bg-yellow-400 hidden justify-center max-w-full text-center w-[95%] border-amber-600 pl-5 pr-2.5 py-2.5 rounded-[5px] border-b-4 border-solid font-helvetica md:block"
            >
              <h1
                className="text-zinc-800 text-[19px] font-bold items-center self-center flex justify-center leading-[22.8px] mb-px pl-2.5 font-montserrat"
                style={{
                  backgroundImage: `url('${media.sidebarArrowIcon}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              >
                {content.sidebar.ctaLine1}
                <br />
                {content.sidebar.ctaLine2}
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── CommentsSection ──────────────────────────────────────────────────────────

function CommentsSection(): React.JSX.Element {
  const { content } = useAdvertorialData();

  return (
    <div className="items-stretch flex flex-wrap justify-start max-w-full min-h-full p-2.5 md:flex-nowrap">
      <div className="relative bg-white basis-0 grow min-h-[25px] w-full px-0 py-2.5 md:px-[15px]">
        <div>
          <div className="text-black font-montserrat">
            <span>
              <b className="text-lg font-bold leading-[27px]">Comments</b>
            </span>
          </div>
        </div>
        <div className="bg-white mx-2.5">
          <div className="items-stretch flex flex-col w-full mx-auto pl-0 pr-2.5 py-2.5 md:pl-px">
            <input
              type="text"
              placeholder="Add a comment ..."
              className="text-black items-center block min-h-[auto] min-w-[auto] text-start w-full border-neutral-200 p-5 border-solid font-montserrat border"
            />
          </div>
        </div>
        <div className="relative mb-[15px] top-2.5 md:mb-[-150px] md:top-auto">
          <ul className="pl-0 font-montserrat list-none">
            {content.comments.map((comment, i) => (
              <CommentItem key={i} comment={comment} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer(): React.JSX.Element {
  const { content, media } = useAdvertorialData();
  const { footer } = content;

  return (
    <div className="items-stretch bg-white flex flex-wrap justify-center max-w-full border-zinc-500 mt-[100px] px-2.5 py-3 border-t border-solid md:flex-nowrap md:mt-[265px]">
      <div className="flex flex-col items-center text-center basis-0 grow min-h-[25px] w-full px-[7px] py-2.5 md:px-2.5">
        <div className="text-neutral-500 leading-5 text-center mt-2.5 p-2.5 font-montserrat">
          <b className="font-bold">MEDICAL &amp; HEALTH DISCLOSURE</b>
          {footer.disclosure.replace("MEDICAL & HEALTH DISCLOSURE:", "").replace("MEDICAL & HEALTH DISCLOSURE", "")}
        </div>
        <div className="text-neutral-500 text-xs leading-[22px] text-center mt-[15px] px-px py-2.5 font-montserrat md:text-base md:px-2.5">
          {footer.copyright}
          <div className="text-blue-700 text-xs text-center md:text-base">
            {footer.links.map((link, i) => (
              <React.Fragment key={link.href}>
                {i > 0 && " - "}
                <a href={link.href} className="text-blue-700 text-xs md:text-base">
                  <u className="underline">{link.label}</u>
                </a>
              </React.Fragment>
            ))}
          </div>
          <div className="text-xs flex justify-center md:text-base">
            <a href={`tel:${footer.phone}`} className="text-blue-700 text-xs text-center md:text-base">
              {footer.phone}
            </a>
            <div className="text-xs ml-[5px] md:text-base">
              <a href={`mailto:${footer.email}`} className="text-blue-600 text-xs md:text-base">
                <strong className="text-blue-700 font-bold">{footer.email}</strong>
              </a>
            </div>
          </div>
        </div>
        <div className="text-neutral-500 text-center w-full px-2.5">
          <div className="text-[13px] leading-[19.5px] mb-[5px] font-montserrat">
            {footer.address}
          </div>
          <img
            alt="Payment Methods"
            src={media.paymentMethods}
            className="inline max-w-[95%] w-[280px]"
          />
        </div>
      </div>
    </div>
  );
}

// ─── StickyCtaBar ─────────────────────────────────────────────────────────────

function StickyCtaBar(): React.JSX.Element {
  const { content } = useAdvertorialData();
  return (
    <div className="sticky items-stretch bg-zinc-400 flex flex-wrap justify-center max-w-full z-10 px-2.5 py-[15px] bottom-0 md:flex-nowrap">
      <div className="relative items-center flex basis-0 flex-row-reverse grow justify-center max-w-[1200px] min-h-[25px] w-full">
        <a
          href={content.ctaUrl}
          className="text-slate-50 text-[22px] font-bold bg-green-700 shadow-[rgba(0,0,0,0.19)_0px_4px_7px_1px] block tracking-[0.02px] leading-[30px] max-w-full min-h-[auto] min-w-[auto] text-center p-2.5 rounded font-montserrat md:text-2xl md:leading-10 md:px-10 md:py-[25px]"
        >
          {content.stickyBar.text}
        </a>
      </div>
    </div>
  );
}

// ─── TopBar (main export) ─────────────────────────────────────────────────────

export function TopBar({
  content,
  media,
}: {
  content: AdvContent;
  media: AdvMedia;
}): React.JSX.Element {
  return (
    <AdvertorialContext.Provider value={{ content, media }}>
      <div className="text-neutral-800 text-base font-normal bg-white">
        <TopBanner />
        <div className="max-w-[1170px] mx-auto w-full px-5">
          <AlertBox />
          <ArticleContent />
          <CommentsSection />
          <Footer />
        </div>
        <StickyCtaBar />
      </div>
    </AdvertorialContext.Provider>
  );
}
