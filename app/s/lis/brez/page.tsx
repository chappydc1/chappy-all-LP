/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import adv from "./adv.json";
import media from "./media.json";

export const metadata = {
  title: adv.meta.title,
  description: adv.meta.description,
};

export default function BrezLandingPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ── Announcement Bar ── */}
      <a href={adv.announcement.href} className="bg-lime-200 block w-full py-2.5">
        <div className="max-w-[1400px] mx-auto px-[15px] md:px-[50px]">
          <p className="text-[10px] font-light tracking-[1px] leading-[13px] text-center">
            {adv.announcement.text}
          </p>
        </div>
      </a>

      {/* ── Hero ── */}
      {/*
        Use plain <img> to drive container height (matches original Anima pattern).
        Content overlaid absolutely. Works on both mobile and desktop viewports.
      */}

      {/* MOBILE hero — visible below md */}
      <section className="relative md:hidden">
        {/* BG image drives height */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={media.hero.bg}
          alt=""
          className="block w-full h-auto"
        />
        {/* Content overlay — top */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5 w-[323px] z-10">
          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={media.logo.svg} alt="BRĒZ" className="w-[74px] h-auto mb-5" />
          {/* Stars */}
          <div className="flex items-center gap-2.5">
            <span className="text-yellow-500 text-[15px]">★★★★★</span>
            <span className="text-[15px] font-light leading-5">6,500+ Happy Customers</span>
          </div>
          {/* Headline */}
          <h1 className="text-[29px] font-light tracking-[-2px] leading-8 text-center">
            {adv.hero.headline}
          </h1>
          {/* Badge pills */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-[5px] bg-white rounded-[50px] border-2 border-solid p-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={media.hero.canBadge} alt="" className="w-[18px] h-[18px] object-contain" />
              <span className="text-xs font-light">500,000+ Cans sold</span>
            </div>
            <div className="flex items-center gap-[5px] bg-white rounded-[50px] border-2 border-solid p-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={media.hero.alcoholFreeBadge} alt="" className="w-[18px] h-[18px] object-contain" />
              <span className="text-xs font-light">Alcohol-Free</span>
            </div>
          </div>
        </div>
        {/* CTA — pinned near bottom */}
        <div className="absolute bottom-[120px] left-1/2 -translate-x-1/2 z-10">
          <a href={adv.hero.ctaHref}
            className="flex items-center justify-center gap-2.5 bg-lime-200 rounded-[65px] border-2 border-solid px-8 py-2.5 w-[315px]">
            <span className="text-base font-light tracking-[-1px]">Try Now</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={media.hero.ctaArrow} alt="" className="w-4 h-4 object-contain" />
          </a>
        </div>
        {/* AS SEEN IN */}
        <AsSeenIn />
      </section>

      {/* DESKTOP hero — visible at md+ */}
      <section className="relative hidden md:block">
        {/* BG image drives height */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={media.hero.bg}
          alt=""
          className="block w-full h-auto"
        />
        {/* Content overlay — left column */}
        <div className="absolute left-[120px] top-[100px] flex flex-col gap-5 max-w-[600px] z-10">
          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={media.logo.svg} alt="BRĒZ" className="w-[200px] h-auto mb-10" />
          {/* Stars */}
          <div className="flex items-center gap-2.5">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-lg font-light">6,500+ Happy Customers</span>
          </div>
          {/* Headline */}
          <h1 className="text-5xl font-light tracking-[-2px] leading-[52px]">
            {adv.hero.headline}
          </h1>
          {/* Badge pills */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-[5px] bg-white rounded-[10px] px-[30px] py-2.5 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={media.hero.canBadge} alt="" className="w-6 h-6 object-contain" />
              <span className="text-lg font-light">1.5 Million Cans Sold</span>
            </div>
            <div className="flex items-center gap-[5px] bg-white rounded-[10px] px-[30px] py-2.5 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={media.hero.alcoholFreeBadge} alt="" className="w-6 h-6 object-contain" />
              <span className="text-lg font-light">Alcohol-Free</span>
            </div>
          </div>
          {/* CTA */}
          <a href={adv.hero.ctaHref}
            className="flex items-center justify-center gap-2.5 bg-lime-200 rounded-[65px] border-2 border-solid px-8 py-5 max-w-[520px] w-full">
            <span className="text-xl font-light tracking-[-1px]">Try Now</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={media.hero.ctaArrow} alt="" className="w-5 h-5 object-contain" />
          </a>
        </div>
        {/* AS SEEN IN — pinned to bottom */}
        <div className="absolute left-0 bottom-[50px] z-10 w-full">
          <AsSeenIn />
        </div>
      </section>

      {/* ── Benefits Bar ── */}
      <div className="flex items-center justify-center w-full bg-lime-200 py-[25px]">
        <div className="grid grid-cols-3 gap-5 max-w-[343px] md:flex md:gap-[90px] md:max-w-full">
          {adv.hero.benefitItems.map((item) => {
            const m = media.benefits.find((b) => b.id === item.id);
            if (!m) return null;
            return (
              <div key={item.id} className="flex flex-col items-center gap-[5px]">
                <Image src={m.src} alt={m.alt} width={40} height={40} className="object-contain" />
                <p className="text-base font-light leading-5 text-center md:text-xl md:leading-6">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Reviews ── */}
      <section className="flex flex-col items-center w-full bg-lime-200 py-10 md:py-[60px]">
        <div className="flex flex-col items-center gap-2.5 max-w-[700px] md:max-w-[820px] w-full mb-10">
          <h2 className="text-xl font-light leading-[26px] text-center md:text-[40px] md:leading-[54px]">
            {adv.reviews.sectionTitle}
          </h2>
          <div className="flex items-center gap-2.5">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-lg font-light">{adv.reviews.ratingLabel}</span>
          </div>
        </div>
        <div className="flex gap-5 overflow-x-auto w-full px-5 md:px-[60px] pb-3">
          {adv.reviews.items.map((review) => {
            const rm = media.reviews.find((r) => r.id === review.reviewerImageId);
            return (
              <div key={review.id} className="flex-shrink-0 bg-white rounded-[15px] p-[15px] w-[320px] md:w-[550px]">
                <div className="flex gap-[15px]">
                  {rm && (
                    <Image src={rm.src} alt={rm.alt} width={90} height={90}
                      className="object-cover rounded-lg flex-shrink-0 self-start" />
                  )}
                  <div className="flex flex-col gap-2.5 flex-1">
                    <p className="text-xl font-light leading-[26px]">{review.title}</p>
                    <p className="text-base font-light leading-[22px] md:text-lg md:leading-[23px]">{review.body}</p>
                    <p className="text-sm font-light md:text-lg">{review.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 6 Reasons ── */}
      <section className="flex flex-col items-center px-[25px] py-[50px] md:px-8 md:py-24">
        <div className="flex flex-col gap-10 md:gap-[50px] max-w-[1150px] w-full">
          {adv.reasons.map((reason) => {
            const rm = media.reasons.find((r) => r.id === reason.id);
            if (!rm || (!reason.title && !reason.description)) return null;
            return (
              <div key={reason.id} className="flex flex-col gap-[30px] md:flex-row md:items-center">
                <div className="flex-1">
                  <Image src={rm.mainImage} alt={reason.title ?? "BRĒZ"} width={600} height={400}
                    className="rounded-xl object-cover w-full h-auto" />
                </div>
                <div className="flex flex-col gap-5 flex-1">
                  {rm.iconImage && (
                    <Image src={rm.iconImage} alt="" width={50} height={50} className="object-contain" />
                  )}
                  {reason.title && (
                    <h2 className="text-2xl font-light tracking-[0.4px] leading-[30px] md:text-[43px] md:leading-[48px]">
                      {reason.title}
                    </h2>
                  )}
                  {reason.description && (
                    <p className="text-sm font-light leading-5 md:text-[17px] md:leading-[22px]">
                      {reason.description}
                    </p>
                  )}
                  {reason.showCta && reason.ctaHref && reason.ctaText && (
                    <a href={reason.ctaHref}
                      className="inline-flex items-center bg-lime-200 text-black font-light text-base px-8 py-3 rounded-[10px] hover:bg-lime-300 transition-colors w-fit md:text-xl">
                      {reason.ctaText}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative flex flex-col items-center w-full">
        <div className="relative w-full" style={{ minHeight: 500 }}>
          <Image src={media.cta.productImage} alt="BRĒZ product" fill
            className="object-cover object-center" />
          <div className="absolute inset-0 flex items-end justify-center pb-5 z-10
                          md:items-center md:justify-end md:pb-0 md:pr-[60px]">
            <div className="flex flex-col items-center gap-5 max-w-[344px] w-full
                            md:items-start md:max-w-[690px]">
              <h2 className="text-[23px] font-light leading-[30px] text-center
                             md:text-5xl md:leading-[54px] md:text-start">
                {adv.cta.headline}
              </h2>
              <p className="text-[13px] font-light leading-5 text-center
                            md:text-[21px] md:leading-[26px] md:text-start">
                {adv.cta.body}
              </p>
              <a href={adv.cta.ctaHref}
                className="bg-lime-200 text-black font-light text-base px-8 py-3 rounded-[10px] hover:bg-lime-300 transition-colors md:text-xl">
                {adv.cta.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ── AS SEEN IN infinite marquee slider ── */
const PRESS_LOGOS = [
  { src: "/images/brez/003_logo-1.png", alt: "Vogue" },
  { src: "/images/brez/004_logo-3.png", alt: "Cosmopolitan" },
  { src: "/images/brez/005_logo-2.png", alt: "Poppdus" },
];

function AsSeenIn() {
  return (
    <div className="flex flex-col items-center gap-2.5 py-4 w-full bg-white/10">
      <p className="text-black text-xl font-light leading-6 tracking-[1px] font-pp_fragment">AS SEEN IN</p>
      {/* Overflow hidden wrapper — clips the scrolling track */}
      <div className="overflow-hidden w-full">
        {/* Track: logos × 2 so the seam is invisible at the 50% mark */}
        <div className="animate-marquee flex items-center gap-[70px] w-max px-[35px]">
          {[...PRESS_LOGOS, ...PRESS_LOGOS].map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
