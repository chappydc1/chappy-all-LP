"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { content } from "../../content";
import type { TrustpilotReview } from "../../types";

const TP_GREEN = "#00b67a";
const TP_ORANGE = "#ff8622";

const ratingColor = (rating: number) => {
  if (rating >= 5) return TP_GREEN;
  if (rating === 4) return "#73cf11";
  if (rating === 3) return "#ffce00";
  if (rating === 2) return TP_ORANGE;
  return "#ff3722";
};

const TrustpilotLogo = ({ width = 86 }: { width?: number }) => (
  <span style={{ display: "inline-block", width, lineHeight: 0, verticalAlign: "middle" }}>
    <span style={{ position: "relative", display: "block", width: "100%", paddingBottom: "24.6031746031746%" }}>
      <svg
        role="img"
        viewBox="0 0 126 31"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0 }}
      >
        <title>Trustpilot</title>
        <path
          fill="#191919"
          d="M33.074774 11.07005H45.81806v2.364196h-5.010656v13.290316h-2.755306V13.434246h-4.988435V11.07005h.01111zm12.198892 4.319629h2.355341v2.187433h.04444c.077771-.309334.222203-.60762.433295-.894859.211092-.287239.466624-.56343.766597-.79543.299972-.243048.633276-.430858.999909-.585525.366633-.14362.744377-.220953 1.12212-.220953.288863 0 .499955.011047.611056.022095.1111.011048.222202.033143.344413.04419v2.408387c-.177762-.033143-.355523-.055238-.544395-.077333-.188872-.022096-.366633-.033143-.544395-.033143-.422184 0-.822148.08838-1.199891.254096-.377744.165714-.699936.41981-.977689.740192-.277753.331429-.499955.729144-.666606 1.21524-.166652.486097-.244422 1.03848-.244422 1.668195v5.39125h-2.510883V15.38968h.01111zm18.220567 11.334883H61.02779v-1.579813h-.04444c-.311083.574477-.766597 1.02743-1.377653 1.369908-.611055.342477-1.233221.51924-1.866497.51924-1.499864 0-2.588654-.364573-3.25526-1.104765-.666606-.740193-.999909-1.856005-.999909-3.347437V15.38968h2.510883v6.948968c0 .994288.188872 1.701337.577725 2.1101.377744.408763.922139.618668 1.610965.618668.533285 0 .96658-.077333 1.322102-.243048.355524-.165714.644386-.37562.855478-.65181.222202-.265144.377744-.596574.477735-.972194.09999-.37562.144431-.784382.144431-1.226288v-6.573349h2.510883v11.323836zm4.27739-3.634675c.07777.729144.355522 1.237336.833257 1.535623.488844.287238 1.06657.441905 1.744286.441905.233312 0 .499954-.022095.799927-.055238.299973-.033143.588836-.110476.844368-.209905.266642-.099429.477734-.254096.655496-.452954.166652-.198857.244422-.452953.233312-.773335-.01111-.320381-.133321-.585525-.355523-.784382-.222202-.209906-.499955-.364573-.844368-.497144-.344413-.121525-.733267-.232-1.17767-.320382-.444405-.088381-.888809-.18781-1.344323-.287239-.466624-.099429-.922138-.232-1.355432-.37562-.433294-.14362-.822148-.342477-1.166561-.596573-.344413-.243048-.622166-.56343-.822148-.950097-.211092-.386668-.311083-.861716-.311083-1.436194 0-.618668.155542-1.12686.455515-1.54667.299972-.41981.688826-.75124 1.14434-1.005336.466624-.254095.97769-.430858 1.544304-.541334.566615-.099429 1.11101-.154667 1.622075-.154667.588836 0 1.15545.066286 1.688736.18781.533285.121524 1.02213.320381 1.455423.60762.433294.276191.788817.640764 1.07768 1.08267.288863.441905.466624.98324.544395 1.612955h-2.621984c-.122211-.596572-.388854-1.005335-.822148-1.204193-.433294-.209905-.933248-.309334-1.488753-.309334-.177762 0-.388854.011048-.633276.04419-.244422.033144-.466624.088382-.688826.165715-.211092.077334-.388854.198858-.544395.353525-.144432.154667-.222203.353525-.222203.60762 0 .309335.111101.552383.322193.740193.211092.18781.488845.342477.833258.475048.344413.121524.733267.232 1.177671.320382.444404.088381.899918.18781 1.366542.287239.455515.099429.899919.232 1.344323.37562.444404.14362.833257.342477 1.17767.596573.344414.254095.622166.56343.833258.93905.211092.37562.322193.850668.322193 1.40305 0 .673906-.155541 1.237336-.466624 1.712385-.311083.464001-.711047.850669-1.199891 1.137907-.488845.28724-1.04435.508192-1.644295.640764-.599946.132572-1.199891.198857-1.788727.198857-.722156 0-1.388762-.077333-1.999818-.243048-.611056-.165714-1.14434-.408763-1.588745-.729144-.444404-.33143-.799927-.740192-1.05546-1.226289-.255532-.486096-.388853-1.071621-.411073-1.745528h2.533103v-.022095zm8.288135-7.700208h1.899828v-3.402675h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155542.486096.07777.132572.199981.232.366633.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.13332-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222zm8.454788 0h2.377562V16.9253h.04444c.355523-.662858.844368-1.12686 1.477644-1.414098.633276-.287239 1.310992-.430858 2.055369-.430858.899918 0 1.677625.154667 2.344231.475048.666606.309335 1.222111.740193 1.666515 1.292575.444405.552382.766597 1.193145.9888 1.92229.222202.729145.333303 1.513527.333303 2.3421 0 .762288-.099991 1.50248-.299973 2.20953-.199982.718096-.499955 1.347812-.899918 1.900194-.399964.552383-.911029.98324-1.533194 1.31467-.622166.33143-1.344323.497144-2.18869.497144-.366634 0-.733267-.033143-1.0999-.099429-.366634-.066286-.722157-.176762-1.05546-.320381-.333303-.14362-.655496-.33143-.933249-.56343-.288863-.232-.522175-.497144-.722157-.79543h-.04444v5.656393h-2.510883V15.38968zm8.77698 5.67849c0-.508193-.06666-1.005337-.199981-1.491433-.133321-.486096-.333303-.905907-.599946-1.281527-.266642-.37562-.599945-.673906-.988799-.894859-.399963-.220953-.855478-.342477-1.366542-.342477-1.05546 0-1.855387.364572-2.388672 1.093717-.533285.729144-.799928 1.701337-.799928 2.916578 0 .574478.066661 1.104764.211092 1.59086.144432.486097.344414.905908.633276 1.259432.277753.353525.611056.629716.99991.828574.388853.209905.844367.309334 1.355432.309334.577725 0 1.05546-.121524 1.455423-.353525.399964-.232.722157-.541335.97769-.905907.255531-.37562.444403-.79543.555504-1.270479.099991-.475049.155542-.961145.155542-1.458289zm4.432931-9.99812h2.510883v2.364197h-2.510883V11.07005zm0 4.31963h2.510883v11.334883h-2.510883V15.389679zm4.755124-4.31963h2.510883v15.654513h-2.510883V11.07005zm10.210184 15.963847c-.911029 0-1.722066-.154667-2.433113-.452953-.711046-.298287-1.310992-.718097-1.810946-1.237337-.488845-.530287-.866588-1.160002-1.12212-1.889147-.255533-.729144-.388854-1.535622-.388854-2.408386 0-.861716.133321-1.657147.388853-2.386291.255533-.729145.633276-1.35886 1.12212-1.889148.488845-.530287 1.0999-.93905 1.810947-1.237336.711047-.298286 1.522084-.452953 2.433113-.452953.911028 0 1.722066.154667 2.433112.452953.711047.298287 1.310992.718097 1.810947 1.237336.488844.530287.866588 1.160003 1.12212 1.889148.255532.729144.388854 1.524575.388854 2.38629 0 .872765-.133322 1.679243-.388854 2.408387-.255532.729145-.633276 1.35886-1.12212 1.889147-.488845.530287-1.0999.93905-1.810947 1.237337-.711046.298286-1.522084.452953-2.433112.452953zm0-1.977528c.555505 0 1.04435-.121524 1.455423-.353525.411074-.232.744377-.541335 1.01102-.916954.266642-.37562.455513-.806478.588835-1.281527.12221-.475049.188872-.961145.188872-1.45829 0-.486096-.066661-.961144-.188872-1.44724-.122211-.486097-.322193-.905907-.588836-1.281527-.266642-.37562-.599945-.673907-1.011019-.905907-.411074-.232-.899918-.353525-1.455423-.353525-.555505 0-1.04435.121524-1.455424.353525-.411073.232-.744376.541334-1.011019.905907-.266642.37562-.455514.79543-.588835 1.281526-.122211.486097-.188872.961145-.188872 1.447242 0 .497144.06666.98324.188872 1.458289.12221.475049.322193.905907.588835 1.281527.266643.37562.599946.684954 1.01102.916954.411073.243048.899918.353525 1.455423.353525zm6.4883-9.66669h1.899827v-3.402674h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155541.486096.077771.132572.199982.232.366634.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.133321-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222z"
        />
        <path
          fill="#00B67A"
          d="M30.141707 11.07005H18.63164L15.076408.177071l-3.566342 10.892977L0 11.059002l9.321376 6.739063-3.566343 10.88193 9.321375-6.728016 9.310266 6.728016-3.555233-10.88193 9.310266-6.728016z"
        />
        <path
          fill="#005128"
          d="M21.631369 20.26169l-.799928-2.463625-5.755033 4.153914z"
        />
      </svg>
    </span>
  </span>
);

const TP_CANVAS_PATHS = [
  "M0 46.330002h46.375586V0H0z",
  "M51.24816 46.330002h46.375587V0H51.248161z",
  "M102.532209 46.330002h46.375586V0h-46.375586z",
  "M153.815458 46.330002h46.375586V0h-46.375586z",
  "M205.064416 46.330002h46.375587V0h-46.375587z",
];
const TP_HALF_PATHS = [
  "M0 46.330002h23.187793V0H0z",
  "M51.24816 46.330002h23.187793V0H51.248161z",
  "M102.532209 46.330002h23.187793V0h-23.187793z",
  "M153.815458 46.330002h23.187793V0h-23.187793z",
  "M205.064416 46.330002h23.187793V0h-23.187793z",
];
const TP_SHAPE_PATHS = [
  "M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z",
  "M74.990978 31.32991L81.150908 30 84 39l-9.660206-7.202786L64.30279 39l3.895636-11.840666L58 19.841466h12.605577L74.499595 8l3.895637 11.841466H91L74.990978 31.329909z",
  "M142.066994 19.711433L115.763298 38.80065l3.838215-11.797827-10.047304-7.291391h12.418975l3.837418-11.798624 3.837417 11.798624h12.418975zM125.81156 31.510075l7.183595-1.509576 2.862113 8.800152-10.045708-7.290576z",
  "M193.348355 19.711433L167.045457 38.80065l3.837417-11.797827-10.047303-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418974zM177.09292 31.510075l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z",
  "M244.597022 19.711433l-26.3029 19.089218 3.837419-11.797827-10.047304-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418975zm-16.255436 11.798642l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z",
];

const TrustpilotRatingStars = ({
  rating,
  width = 200,
}: {
  rating: number;
  width?: number;
}) => {
  const fillColor = ratingColor(Math.round(rating));
  const fullCount = Math.floor(rating);
  const fractional = rating - fullCount;
  const hasHalf = fractional >= 0.25 && fractional < 0.75;
  const fillNext = fractional >= 0.75 ? 1 : 0;

  return (
    <div
      className="tp-rating-stars"
      style={{ width, lineHeight: 0, ["--tp-fill" as string]: fillColor } as React.CSSProperties}
      aria-label={`${rating} out of 5 stars`}
    >
      <div style={{ position: "relative", height: 0, width: "100%", paddingBottom: "18.326693227091635%" }}>
        <svg
          role="img"
          viewBox="0 0 251 46"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0 }}
        >
          <title>{rating} out of 5 star rating on Trustpilot</title>
          {[0, 1, 2, 3, 4].map((i) => {
            const fullyFilled = i < fullCount + fillNext;
            const halfFilled = !fullyFilled && i === fullCount && hasHalf;
            return (
              <g key={i} className="tp-star">
                <path
                  d={TP_CANVAS_PATHS[i]}
                  className={fullyFilled ? "tp-star__canvas" : "tp-star__canvas--empty"}
                  style={{ fill: fullyFilled ? "var(--tp-fill)" : "#dcdce6" }}
                />
                {halfFilled && (
                  <path
                    d={TP_HALF_PATHS[i]}
                    className="tp-star__canvas--half"
                    style={{ fill: "var(--tp-fill)" }}
                  />
                )}
                <path d={TP_SHAPE_PATHS[i]} fill="#fff" />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

const ReviewCard = ({ review }: { review: TrustpilotReview }) => {
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const [overflows, setOverflows] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const prevDisplay = el.style.webkitLineClamp;
    el.style.webkitLineClamp = "5";
    const overflowing = el.scrollHeight > el.clientHeight + 1;
    el.style.webkitLineClamp = prevDisplay;
    setOverflows(overflowing);
  }, [review.body]);

  const showFade = overflows && !expanded;
  const showToggle = overflows;

  return (
    <article className="bg-white rounded-[4px] p-4 flex flex-col gap-1 font-proxima_nova">
      <TrustpilotRatingStars rating={review.rating} width={120} />
      <header className="flex items-baseline" style={{ fontSize: 0, lineHeight: 0 }}>
        <span
          style={{
            color: "rgb(99, 99, 99)",
            display: "block",
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: "12px",
            fontWeight: 700,
            lineHeight: "14.4px",
            margin: 0,
            padding: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            verticalAlign: "baseline",
            maxWidth: "75%",
          }}
        >
          {review.name},
        </span>
        <span
          style={{
            color: "rgb(99, 99, 99)",
            display: "block",
            flexShrink: 0,
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "14.4px",
            marginLeft: "4px",
            verticalAlign: "baseline",
          }}
        >
          {review.daysAgo}
        </span>
      </header>
      <h3
        style={{
          color: "rgb(25, 25, 25)",
          display: "block",
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "14px",
          fontWeight: 700,
          lineHeight: "18px",
          margin: 0,
          padding: 0,
          verticalAlign: "baseline",
        }}
      >
        {review.title}
      </h3>
      <div style={{ position: "relative" }}>
        <p
          ref={bodyRef}
          className={expanded ? "" : "line-clamp-5"}
          style={{
            color: "rgb(25, 25, 25)",
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "18px",
            margin: 0,
            padding: 0,
            verticalAlign: "baseline",
          }}
        >
          {review.body}
        </p>
        {showFade && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 28,
              background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)",
              pointerEvents: "none",
            }}
          />
        )}
      </div>
      {showToggle && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="self-center"
          style={{
            background: "transparent",
            border: 0,
            color: "#019541",
            cursor: "pointer",
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: 13,
            fontWeight: 700,
            lineHeight: "18px",
            margin: "4px 0 0",
            padding: 0,
            textDecoration: "underline",
          }}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
      {review.reply && (
        <div className="mt-1 rounded-[4px] bg-neutral-100 px-3 py-2">
          <div className="text-[13px] flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[#00b67a]">
              <polyline points="9 14 4 9 9 4" />
              <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
            </svg>
            <span className="font-bold text-[#1a1d36]">Reply from {review.reply.from}</span>
            <span className="text-[#5a6171] ml-auto">{review.reply.daysAgo}</span>
          </div>
          <a
            href="#"
            style={{
              color: "#019541",
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: 13,
              fontWeight: 700,
              lineHeight: "18px",
              margin: "4px 0 0",
              padding: 0,
              textDecoration: "underline",
              display: "inline-block",
            }}
          >
            Read more
          </a>
        </div>
      )}
    </article>
  );
};

type Props = {
  reviews?: TrustpilotReview[];
  heading?: ReactNode;
  ratingLabel?: string;
  ratingValue?: string;
  totalReviews?: number | string;
};

export const TrustpilotReviews = ({
  reviews = content.trustpilot.reviews,
  heading,
  ratingLabel = content.trustpilot.ratingLabel,
  ratingValue = content.trustpilot.ratingValue,
  totalReviews = content.trustpilot.totalReviews,
}: Props) => {
  const tp = content.trustpilot;
  return (
    <section className="bg-stone-100 box-border caret-transparent px-5 py-12 md:py-16">
      <div className="box-border caret-transparent max-w-screen-xl w-full mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2
            className="font-proxima_nova text-center font-extrabold mx-auto text-[28px] leading-[34px] md:text-[45px] md:leading-[50px]"
            style={{
              color: "rgb(41, 74, 89)",
              margin: "0 auto 10px",
              padding: 0,
            }}
          >
            {heading ?? (
              <>
                {tp.headingPrefix}{" "}
                <span className="md:block" style={{ color: "rgb(61, 90, 128)" }}>
                  {tp.headingHighlight}
                </span>
              </>
            )}
          </h2>
        </div>

        <div className="flex flex-col items-center mb-10 md:mb-12 gap-2">
          <div className="flex items-center gap-2">
            <span
              className="cursor-pointer"
              style={{
                color: "rgb(25, 25, 25)",
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "24px",
                margin: 0,
                padding: 0,
                display: "inline",
                textAlign: "center",
              }}
            >
              {ratingLabel}
            </span>
            <TrustpilotRatingStars rating={parseFloat(ratingValue)} width={140} />
          </div>
          <span
            style={{
              alignItems: "center",
              color: "rgb(25, 25, 25)",
              cursor: "pointer",
              display: "inline-flex",
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 400,
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 400, lineHeight: "20px", whiteSpace: "pre" }}>Rated </span>
            <span
              style={{
                color: "rgb(25, 25, 25)",
                cursor: "pointer",
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: 14,
                fontWeight: 600,
                lineHeight: "18px",
                textAlign: "center",
                verticalAlign: "baseline",
                margin: 0,
                padding: 0,
              }}
            >
              {ratingValue}
            </span>
            <span style={{ fontSize: 14, fontWeight: 400, lineHeight: "20px", whiteSpace: "pre" }}> / 5 based on </span>
            <a
              href={tp.trustpilotReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tp-reviews-link"
              style={{
                color: "rgb(25, 25, 25)",
                cursor: "pointer",
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: 14,
                fontWeight: 500,
                lineHeight: "18px",
                textAlign: "center",
                textDecoration: "underline solid rgb(25, 25, 25)",
                verticalAlign: "baseline",
                margin: 0,
                padding: 0,
              }}
            >
              {totalReviews} reviews
            </a>
            <span style={{ fontSize: 14, lineHeight: "20px", whiteSpace: "pre" }}> on</span>
            <span style={{ display: "inline-flex", alignItems: "center", marginLeft: 2 }}>
              <TrustpilotLogo width={86} />
            </span>
          </span>
        </div>

        <p
          style={{
            color: "rgb(114, 114, 115)",
            display: "block",
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "13px",
            margin: "16px 0",
            padding: 0,
            verticalAlign: "baseline",
          }}
        >
          {tp.showingLabel}
        </p>

        <div
          className="h-[500px] overflow-y-auto pr-3 font-proxima_nova"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(41,74,89,0.23) rgba(255,255,255,0)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-2">
            {reviews.map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
