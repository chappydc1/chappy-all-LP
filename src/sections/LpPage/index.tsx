"use client";

import { useState, useEffect } from "react";

type Reason = {
  title: string;
  paragraphs: string[];
};

type TestimonialItem = {
  authorName: string;
  rating: number;
  text: string;
};

type FooterLink = { label: string; href: string };

type AdvJson = {
  ctaUrl: string;
  announcement: string;
  headline: string;
  author: { name: string; date: string };
  reasons: Reason[];
  offer: {
    badge: string;
    giftLine: string;
    discountLabel: string;
    urgencyLine: string;
    stockLine: string;
    ctaText: string;
    dealEndingLabel: string;
    sellOutRisk: string;
    shippingLine: string;
    guaranteeLine: string;
  };
  stickyBar: {
    scrollingText: string;
    productName: string;
    ctaText: string;
  };
  testimonials: { heading: string; items: TestimonialItem[] };
  footer: {
    brandTitle: string;
    brandDescription: string;
    supportLinks: FooterLink[];
    copyright: string;
    poweredBy: string;
    poweredByUrl: string;
    links: FooterLink[];
  };
  disclosure: string;
};

type MediaJson = {
  navLogo: string;
  footerLogo: string;
  headerBanner: string;
  authorImage: string;
  offerCtaImage: string;
  offerProductImage: string;
  stickyBarProductImage: string;
  testimonialImages: string[];
  starFull: string;
  starHalf: string;
  reasonImages: string[];
};

export function LpPage({ adv, media }: { adv: AdvJson; media: MediaJson }) {
  const [secs, setSecs] = useState(14 * 60 + 59);

  useEffect(() => {
    const id = setInterval(() => setSecs((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const hh = String(Math.floor(secs / 3600)).padStart(2, "0");
  const mm = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");

  const testimonials = adv.testimonials.items;

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-alexandria">
      {/* Sticky logo bar */}
      <div className="sticky top-0 z-20 bg-teal-900 flex justify-center items-center px-4 py-3 border-b border-white/10">
        <img src={media.navLogo} alt="Sophie's Natural Health Guide" className="h-10 object-contain" />
      </div>


      <main className="max-w-[1024px] mx-auto px-4 md:px-5">
        {/* Headline */}
        <h1 className="font-alexandria font-semibold text-2xl md:text-[42px] md:leading-[50px] text-neutral-800 text-left mt-4 mb-4 md:mb-6">
          {adv.headline}
        </h1>

        {/* Author byline */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={media.authorImage}
            alt={adv.author.name}
            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full object-cover"
          />
          <div>
            <p className="font-alexandria text-sm md:text-base text-neutral-800 font-semibold">
              By <strong>{adv.author.name}</strong>
            </p>
            <p className="font-alexandria text-sm md:text-base text-neutral-400">
              {adv.author.date}
            </p>
          </div>
        </div>

        {/* Reasons */}
        <div>
          {adv.reasons.map((reason, i) => (
            <ReasonCard
              key={i}
              reason={reason}
              imageSrc={media.reasonImages[i] ?? media.reasonImages[0]}
            />
          ))}
        </div>

        {/* Offer card — after all 10 reasons */}
        <OfferCard
          offer={adv.offer}
          ctaUrl={adv.ctaUrl}
          productImageSrc={media.offerProductImage}
          hh={hh}
          mm={mm}
          ss={ss}
        />

        {/* Testimonials — 3 columns */}
        <section className="mt-12 mb-8">
          <h2 className="font-alexandria font-bold text-2xl md:text-[32px] text-neutral-900 text-center mb-10">
            {adv.testimonials.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <TestimonialCard
                key={i}
                item={item}
                avatarSrc={media.testimonialImages[i] ?? media.testimonialImages[0]}
                starFull={media.starFull}
                starHalf={media.starHalf}
              />
            ))}
          </div>
        </section>

        {/* Disclosure */}
        <section className="mt-8 mb-6 pt-6">
          <div className="font-alexandria font-normal text-[14px] md:text-[16px] leading-[130%] text-[#575757] whitespace-pre-line">
            {adv.disclosure}
          </div>
        </section>
      </main>

      {/* Sticky bottom CTA bar */}
      <StickyBar
        stickyBar={adv.stickyBar}
        ctaUrl={adv.ctaUrl}
        productImageSrc={media.stickyBarProductImage}
      />
    </div>
  );
}

function ReasonCard({
  reason,
  imageSrc,
}: {
  reason: Reason;
  imageSrc: string;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start py-8 md:py-10 border-b border-neutral-100 last:border-0">
      <div className="w-full md:w-1/2 shrink-0">
        <img src={imageSrc} alt="" className="w-full rounded-lg object-cover md:aspect-[4/3]" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="font-alexandria font-bold text-[22px] leading-[28px] md:text-[26px] md:leading-[32px] text-neutral-800 mb-3 md:mb-4">
          {reason.title}
        </h2>
        <div className="space-y-3">
          {reason.paragraphs.map((p, j) => (
            <p key={j} className="font-alexandria text-base md:text-[17px] leading-6 md:leading-7 text-neutral-700">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function OfferCard({
  offer,
  ctaUrl,
  productImageSrc,
  hh,
  mm,
  ss,
}: {
  offer: AdvJson["offer"];
  ctaUrl: string;
  productImageSrc: string;
  hh: string;
  mm: string;
  ss: string;
}) {
  return (
    <div className="my-10 rounded-2xl overflow-hidden bg-[#e8ebd0] p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
        {/* Left: white card with red top strip */}
        <div className="bg-white rounded-xl overflow-hidden border border-neutral-200 flex flex-col">
          {/* Red top strip */}
          <div className="bg-red-600 text-white text-center font-bold text-sm md:text-base py-2.5 px-4 tracking-wide">
            {offer.badge}
          </div>
          <div className="p-6 md:p-8 flex flex-col gap-4 flex-1">
            <p className="text-teal-800 font-bold text-sm tracking-wide text-center">{offer.giftLine}</p>
            <h2 className="font-alexandria font-extrabold text-2xl md:text-[28px] text-neutral-900 leading-tight text-center">
              <span className="text-teal-800">{offer.discountLabel}</span>{" "}
              {offer.urgencyLine}
            </h2>
            <p className="text-neutral-500 text-sm text-center">{offer.stockLine}</p>
            <a
              href={ctaUrl}
              className="block bg-teal-800 text-white font-extrabold text-xl md:text-2xl py-4 rounded-xl hover:bg-teal-700 transition-colors text-center tracking-wide"
            >
              {offer.ctaText}
            </a>
            <p className="font-bold text-sm text-neutral-800 text-center">
              {offer.dealEndingLabel}{" "}
              <span className="font-mono font-bold text-neutral-900">
                {hh} &nbsp;&nbsp; {mm} &nbsp;&nbsp; {ss}
              </span>
            </p>
            <div className="flex justify-center gap-3 text-sm flex-wrap">
              <span className="border border-neutral-300 rounded-lg px-4 py-1.5 text-neutral-700">
                Sell-out Risk: <strong className="text-red-600">{offer.sellOutRisk}</strong>
              </span>
              <span className="text-neutral-400 self-center">|</span>
              <span className="border border-neutral-300 rounded-lg px-4 py-1.5 text-neutral-700">
                <strong>FREE</strong> shipping
              </span>
            </div>
            <p className="text-sm text-neutral-500 text-center">{offer.guaranteeLine}</p>
          </div>
        </div>
        {/* Right: product image (image has its own bg) */}
        <div className="flex items-center justify-center rounded-xl overflow-hidden">
          <img src={productImageSrc} alt="" className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  item,
  avatarSrc,
  starFull,
  starHalf,
}: {
  item: TestimonialItem;
  avatarSrc: string;
  starFull: string;
  starHalf: string;
}) {
  return (
    <div className="flex flex-col gap-4 p-2">
      {/* Avatar + stars + name row */}
      <div className="flex items-center gap-3">
        <img
          src={avatarSrc}
          alt={item.authorName}
          className="w-12 h-12 rounded-full object-cover shrink-0"
        />
        <div>
          <div className="flex gap-0.5 mb-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <img key={i} src={i < item.rating ? starFull : starHalf} alt="" className="w-4 h-4" />
            ))}
          </div>
          <p className="font-alexandria font-bold text-[14px] md:text-[16px] leading-[130%] text-neutral-900">{item.authorName}</p>
        </div>
      </div>
      {/* Review text */}
      <p className="font-alexandria font-normal text-[14px] md:text-[16px] leading-[130%] text-[#575757]">
        &ldquo;{item.text}&rdquo;
      </p>
    </div>
  );
}

function StickyBar({
  stickyBar,
  ctaUrl,
  productImageSrc,
}: {
  stickyBar: AdvJson["stickyBar"];
  ctaUrl: string;
  productImageSrc: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    function onScroll() {
      const currentY = window.scrollY;
      setVisible(currentY < lastY && currentY > 200);
      lastY = currentY;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-neutral-200 shadow-lg transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1024px] mx-auto px-4 py-3 gap-3">
        <div className="flex items-center gap-3">
          <img src={productImageSrc} alt="" className="h-12 w-12 object-contain rounded" />
          <span className="text-sm font-semibold text-neutral-800 hidden sm:block">
            {stickyBar.productName}
          </span>
        </div>
        <a
          href={ctaUrl}
          className="bg-teal-900 text-white font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-teal-800 transition-colors shrink-0"
        >
          {stickyBar.ctaText}
        </a>
      </div>
    </div>
  );
}

