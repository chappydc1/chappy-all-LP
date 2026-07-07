"use client"

import { useState, useEffect, useRef } from "react"
import type advRaw from "./adv.json"
import type mediaRaw from "./media.json"

type Adv = typeof advRaw
type Media = typeof mediaRaw

function Countdown() {
  const [time, setTime] = useState({ h: 3, m: 47, s: 22 })
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev
        s--
        if (s < 0) { s = 59; m-- }
        if (m < 0) { m = 59; h-- }
        if (h < 0) return { h: 3, m: 59, s: 59 }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])
  const pad = (n: number) => String(n).padStart(2, "0")
  return (
    <div className="flex items-center gap-1 text-white font-bold font-poppins text-sm">
      <span className="bg-blue-900 rounded px-2 py-1">{pad(time.h)}</span>:
      <span className="bg-blue-900 rounded px-2 py-1">{pad(time.m)}</span>:
      <span className="bg-blue-900 rounded px-2 py-1">{pad(time.s)}</span>
    </div>
  )
}

function MobileCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length)
  const next = () => setIdx((i) => (i + 1) % images.length)
  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt="" className="w-full flex-shrink-0 rounded-xl object-cover" />
        ))}
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full w-8 h-8 flex items-center justify-center shadow transition" aria-label="Previous">‹</button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full w-8 h-8 flex items-center justify-center shadow transition" aria-label="Next">›</button>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full transition ${i === idx ? "bg-blue-600" : "bg-white/60"}`} />
        ))}
      </div>
    </div>
  )
}

function DesktopGallery({ images }: { images: string[] }) {
  const [main, setMain] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setMain((i) => (i + 1) % images.length), 3500)
    return () => clearInterval(id)
  }, [images.length])
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-xl mb-2">
        <img key={main} src={images[main]} alt="" className="w-full object-cover" />
      </div>
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            onClick={() => setMain(i)}
            className={`w-16 h-16 object-cover rounded-lg flex-shrink-0 cursor-pointer border-2 transition ${i === main ? "border-blue-600" : "border-transparent"}`}
          />
        ))}
      </div>
    </div>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-zinc-200 rounded-lg overflow-hidden mb-3">
      <button
        className="w-full flex items-center justify-between p-4 text-left bg-white transition"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-semibold text-[15px] font-poppins pr-4">{q}</span>
        <span className={`text-blue-600 text-xl transition-transform duration-300 flex-shrink-0 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: open ? "600px" : "0px" }}>
        <div className="p-4 pt-0 text-[15px] text-neutral-700 font-poppins leading-relaxed border-t border-zinc-100">{a}</div>
      </div>
    </div>
  )
}

function ReviewCard({ title, body, date }: { title: string; body: string; date: string }) {
  return (
    <div className="review-card bg-white rounded-2xl shadow-sm p-5 border border-zinc-100 flex flex-col min-h-[200px] w-[300px] flex-shrink-0 md:w-[280px]">
      <img src="/images/smoothspine/54.png" alt="5 stars" className="h-5 mb-2" />
      <p className="font-semibold text-[15px] mb-2">{title}</p>
      <p className="text-neutral-600 text-[14px] leading-relaxed flex-1">{body}</p>
      <p className="text-xs text-stone-400 mt-3">Date of experience: <span className="font-medium">{date}</span></p>
    </div>
  )
}

function CTAButton({ label, href, className = "" }: { label: string; href: string; className?: string }) {
  return (
    <a
      href={href}
      className={`cta-btn animate-pulse-cta block w-full text-center bg-blue-700 text-white font-bold rounded-lg px-6 py-4 text-lg font-open_sans shadow-lg cursor-pointer ${className}`}
    >
      {label}
    </a>
  )
}

function StickyBar({ adv }: { adv: Adv }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-neutral-200 px-4 py-3 transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}>
      <div className="max-w-xl mx-auto">
        <a
          href="#offer"
          className="block w-full text-center bg-blue-700 text-white font-bold rounded-lg px-4 py-3 text-base font-open_sans"
        >
          {adv.stickyBar.ctaLabel}&nbsp;<span className="text-xs font-normal opacity-80">Sale ends: {adv.stickyBar.saleNote}</span>
        </a>
      </div>
    </div>
  )
}

export function SmoothspineSalesPage({ adv, media }: { adv: Adv; media: Media }): React.ReactElement {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" })
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" })

  const trustBadgeImgs = [media.trustBadgeGuarantee, media.trustBadgeShipping, media.trustBadgeQuality]

  return (
    <div className="bg-white text-neutral-800 font-poppins overflow-x-hidden">

      {/* ANNOUNCEMENT BAR */}
      <div className="bg-blue-700 text-white text-center py-2 px-4 text-sm font-poppins font-semibold flex flex-wrap items-center justify-center gap-3">
        <span dangerouslySetInnerHTML={{ __html: adv.announcementBar.text }} />
        <Countdown />
      </div>

      {/* BANNER */}
      <div className="w-full">
        <img src={media.bannerDesktop} alt="Spring Sale Banner" className="hidden md:block w-full" />
        <img src={media.bannerMobile} alt="Spring Sale Banner" className="block md:hidden w-full" />
      </div>

      {/* LOGO */}
      <div className="flex justify-start px-4 py-3 max-w-[1400px] mx-auto">
        <img src={media.logo} alt="SmoothSpine" className="w-[160px] md:w-[200px]" />
      </div>

      {/* HERO */}
      <section id="hero" className="max-w-[1200px] mx-auto px-4 pb-10 pt-2">
        <div className="flex flex-col-reverse md:flex-row-reverse gap-6 md:gap-8">
          <div className="w-full md:w-1/2">
            <div className="hidden md:block"><DesktopGallery images={media.galleryImages} /></div>
            <div className="block md:hidden"><MobileCarousel images={media.galleryImages} /></div>
            <div className="hidden md:block bg-sky-50 rounded-xl p-4 mt-4">
              <div className="flex gap-3 items-start">
                <img src={media.testimonialAvatar} alt="" className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
                <div>
                  <p className="text-sm font-poppins leading-relaxed">{adv.hero.testimonialQuote}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <img src={media.starsImage} alt="5 stars" className="w-16" />
                    <span className="text-xs font-bold font-poppins">{adv.hero.testimonialAuthor}</span>
                    <span className="text-neutral-400 text-xs">{adv.hero.testimonialVerified}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="inline-block bg-black text-white text-sm font-semibold font-open_sans px-3 py-1.5 rounded mb-3">
              {adv.hero.badge}
            </div>
            <h1 className="text-2xl md:text-[32px] font-bold font-poppins leading-tight mb-3 text-black">
              {adv.hero.h1}
            </h1>
            <p className="text-[16px] font-poppins text-neutral-700 mb-4">{adv.hero.subtitle}</p>
            {adv.hero.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-2 mb-2">
                <img src={media.checkIcon} alt="✓" className="w-5 mt-0.5 flex-shrink-0" />
                <span className="text-[15px] font-semibold font-poppins" dangerouslySetInnerHTML={{ __html: b }} />
              </div>
            ))}
            <div className="mt-5">
              <CTAButton label={adv.hero.ctaLabel} href={adv.ctaUrl} />
              <div className="flex items-center justify-center gap-2 mt-2">
                <img src={media.checkIcon} alt="✓" className="w-5" />
                <span className="font-bold font-poppins text-[15px]">{adv.hero.riskFreeNote}</span>
              </div>
              <div className="items-center bg-yellow-50 flex justify-center w-full md:w-4/5 mx-auto border border-neutral-300 my-3 px-3 py-2.5 rounded-xl gap-2">
                <img src={media.usFlag} alt="" className="h-5 w-8 object-contain" />
                <span className="text-rose-700 text-[13px] font-bold font-montserrat">{adv.hero.shippingNote}</span>
              </div>
              <div className="text-center text-sm font-montserrat">
                <b><u>NOTE:</u> <span className="text-green-600">{adv.hero.amazonNote}</span></b>
              </div>
            </div>
            <p className="text-neutral-400 font-bold text-center mt-5 mb-1 font-montserrat text-sm">{adv.hero.asSeenOnLabel}</p>
            <img src={media.mediaLogos} alt="Media logos" className="max-w-full" />
            <div className="bg-sky-50 rounded-xl p-3 mt-4 md:hidden">
              <div className="flex gap-2 items-start">
                <img src={media.testimonialAvatar} alt="" className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                <div>
                  <p className="text-xs font-poppins leading-relaxed">{adv.hero.testimonialQuoteMobile}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <img src={media.starsImage} alt="5 stars" className="w-12" />
                    <span className="text-xs font-bold font-poppins">{adv.hero.testimonialAuthorMobile}</span>
                    <span className="text-neutral-400 text-xs">{adv.hero.testimonialVerifiedMobile}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-sky-50 py-6 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-5">
          {adv.trustBadges.map((b, i) => (
            <div key={i} className="flex items-start gap-3 w-full">
              <img src={trustBadgeImgs[i]} alt={b.title} className="w-[80px] flex-shrink-0" />
              <div>
                <p className="font-bold text-black font-poppins text-sm">{b.title}</p>
                <p className="text-[13px] text-neutral-700 font-poppins mt-1">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPINE SECTION */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-blue-700 text-xl md:text-2xl font-bold font-poppins text-center mb-1">
            {adv.spineSection.heading}
          </h2>
          <div className="w-12 h-1.5 bg-blue-700 mx-auto rounded-full mb-8" />

          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold font-poppins text-black mb-3 md:hidden">{adv.spineSection.row1.heading}</h3>
              <video loop autoPlay playsInline muted src={media.spineVideo} className="w-full rounded-2xl" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-xl font-bold font-poppins text-black mb-3 hidden md:block">{adv.spineSection.row1.heading}</h3>
              <div className="text-[15px] font-poppins text-black leading-relaxed space-y-3">
                {adv.spineSection.row1.paragraphs.map((p, i) => (
                  <p key={i} className={i === 4 ? "font-semibold" : ""}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-8 mb-10">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold font-poppins text-black mb-3 md:hidden">{adv.spineSection.row2.heading}</h3>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-xl font-bold font-poppins text-black mb-3 hidden md:block">{adv.spineSection.row2.heading}</h3>
              <p className="text-[15px] font-poppins text-black leading-relaxed mb-4">{adv.spineSection.row2.intro}</p>
              <div className="bg-sky-50 border border-neutral-200 rounded-xl p-4 text-[14px] font-poppins text-black leading-relaxed space-y-3">
                {adv.spineSection.row2.phases.map((ph, i) => (
                  <p key={i}><strong><u>{ph.time}</u> {ph.label}</strong> {ph.desc}</p>
                ))}
              </div>
              <p className="text-[15px] font-poppins text-black mt-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: adv.spineSection.row2.outro }} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-10 bg-sky-50 rounded-2xl p-6">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-xl font-bold font-poppins text-black mb-4">{adv.spineSection.row3.heading}</h3>
              <div className="text-[15px] font-poppins text-black leading-relaxed space-y-2 italic mb-4">
                {adv.spineSection.row3.quotes.map((q, i) => (
                  <p key={i}><strong>{q.quote}</strong><br /><span className="not-italic text-xs">{q.author}</span></p>
                ))}
              </div>
              <ul className="bg-white border border-neutral-200 rounded-xl p-4 space-y-2 text-[14px] font-bold font-poppins">
                {adv.spineSection.row3.stats.map((s, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-green-500">✓</span>{s}</li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img src={media.scientificImage} alt="" className="w-full max-w-sm rounded-xl" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-8 mb-10">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img src={media.mechanismsImage} alt="" className="w-full max-w-sm rounded-xl" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-xl font-bold font-poppins text-black mb-4">{adv.spineSection.row4.heading}</h3>
              <p className="text-[15px] font-poppins text-black mb-4">{adv.spineSection.row4.intro}</p>
              {adv.spineSection.row4.steps.map((s, i) => (
                <div key={i} className="flex items-start gap-3 mb-3">
                  <span className="bg-blue-700 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</span>
                  <p className="text-[15px] font-poppins">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-blue-50 py-10 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold font-poppins text-black text-center mb-2">{adv.comparison.heading}</h2>
          <p className="text-center text-[15px] font-poppins text-black mb-8">{adv.comparison.subtitle}</p>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-white rounded-t-2xl md:rounded-l-2xl md:rounded-r-none p-6 border border-neutral-200">
              <h3 className="text-xl font-bold font-poppins text-black text-center mb-4">{adv.comparison.smoothspineHeading}</h3>
              {adv.comparison.smoothspineRows.map((r, i) => (
                <div key={i} className="flex items-start gap-3 mt-6">
                  <img src={media.goodCheckIcon} alt="✓" className="w-8 flex-shrink-0 mt-0.5" />
                  <p className="font-bold text-black font-poppins text-[15px]">{r}</p>
                </div>
              ))}
            </div>
            <div className="w-full md:w-1/2 bg-neutral-50 rounded-b-2xl md:rounded-r-2xl md:rounded-l-none p-6 border border-neutral-200 md:border-l-0">
              <h3 className="text-xl font-bold font-poppins text-black text-center mb-4">{adv.comparison.othersHeading}</h3>
              {adv.comparison.otherRows.map((r, i) => (
                <div key={i} className="flex items-start gap-3 mt-6">
                  <img src={media.badCheckIcon} alt="✗" className="w-8 flex-shrink-0 mt-0.5" />
                  <p className="font-bold text-black font-poppins text-[15px]">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-blue-50 py-10 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-xl md:text-2xl font-bold font-poppins text-black text-center mb-1">{adv.steps.heading}</h2>
          <p className="text-center text-[15px] font-poppins text-black mb-8">{adv.steps.subtitle}</p>
          <div className="flex flex-col md:flex-row gap-6">
            {adv.steps.items.map((s, i) => (
              <div key={i} className="bg-indigo-100 rounded-2xl p-5 flex-1">
                <p className="font-bold text-black font-open_sans text-lg mb-1">{s.step}</p>
                <div className="w-10 h-1 bg-blue-700 rounded-full mb-3" />
                <p className="text-[15px] font-poppins font-semibold text-black leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS GRID */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-xl md:text-2xl font-bold font-poppins text-black text-center mb-2">{adv.testimonials.heading}</h2>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            {adv.testimonials.items.map((t, i) => (
              <div key={i} className="flex-1 bg-indigo-100 rounded-2xl overflow-hidden">
                <div className="p-5">
                  <p className="font-bold font-poppins text-[15px] mb-2">{t.title}</p>
                  <img src={media.starsImage} alt="5 stars" className="w-20 mb-2" />
                  <p className="text-[14px] font-poppins leading-relaxed">{t.body}</p>
                  <p className="font-bold font-poppins text-sm mt-3">— {t.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="offer" className="bg-white py-10 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-xl md:text-[26px] font-bold font-poppins text-center mb-6">{adv.offer.heading}</h2>
          <div className="bg-blue-50 border-2 border-indigo-200 rounded-2xl p-5 md:p-8 flex flex-col md:flex-row gap-8">
            <div className="flex items-center justify-center md:w-5/12">
              <img src={media.bundleImage} alt="SmoothSpine bundle" className="max-w-full w-full md:max-w-[340px]" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold font-poppins mb-1">{adv.offer.productName}</h3>
              <p className="text-[15px] font-poppins mb-4" dangerouslySetInnerHTML={{ __html: adv.offer.subtitle }} />
              <p className="font-bold text-[15px] font-poppins mb-3"><u>{adv.offer.listHeading}</u></p>
              <ul className="space-y-2">
                {adv.offer.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <img src={media.checkIcon} alt="✓" className="w-5 flex-shrink-0 mt-0.5" />
                    <span className="text-[14px] font-poppins"><strong>{item.bold}</strong>{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CTAButton label={adv.offer.ctaLabel} href={adv.ctaUrl} className="md:w-[90%]" />
                <div className="flex items-center justify-center gap-2 mt-2 bg-yellow-50 border border-neutral-200 rounded-xl px-4 py-2 md:w-[90%]">
                  <img src={media.usFlag} alt="" className="h-5 w-7 object-contain" />
                  <span className="text-rose-700 text-xs font-bold font-montserrat">{adv.offer.shippingNote}</span>
                </div>
                <p className="text-center text-sm font-montserrat mt-2">
                  <b><u>NOTE:</u> <span className="text-green-600">{adv.offer.amazonNote}</span></b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-xl font-bold font-poppins mb-4 whitespace-pre-line">{adv.guarantee.heading}</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img src={media.moneyBackImage} alt="Money back guarantee" className="w-[200px] flex-shrink-0 mx-auto md:mx-0" />
            <div className="text-[15px] font-poppins leading-relaxed text-neutral-700">
              <p className="mb-3" dangerouslySetInnerHTML={{ __html: adv.guarantee.body }} />
              <p>{adv.guarantee.supportNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex flex-row md:flex-col items-center gap-4 md:min-w-[160px]">
              <img src={media.trustpilotLogo} alt="Trustpilot" className="max-w-[140px]" />
              <img src={media.fiveStarsBadge} alt="5 stars" className="h-5" />
              <span className="text-xs font-medium text-zinc-700">{adv.reviews.trustpilotLabel}</span>
            </div>
            <div className="relative flex-1 overflow-hidden">
              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none"
                style={{ scrollbarWidth: "none" }}
              >
                {adv.reviews.items.map((r, i) => (
                  <div key={i} className="snap-start flex-shrink-0">
                    <ReviewCard {...r} />
                  </div>
                ))}
              </div>
              <button onClick={scrollLeft} aria-label="Scroll left" className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-neutral-200 shadow rounded-full w-7 h-7 flex items-center justify-center text-neutral-500 transition z-10">‹</button>
              <button onClick={scrollRight} aria-label="Scroll right" className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-neutral-200 shadow rounded-full w-7 h-7 flex items-center justify-center text-neutral-500 transition z-10">›</button>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-bold font-poppins text-center mt-8">{adv.reviews.heading}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-10 px-4 border-t border-zinc-100" id="faq">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[22px] font-bold font-poppins mb-6">{adv.faqs.heading}</h2>
          {adv.faqs.items.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-black/20 px-4 py-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            <strong>MEDICAL &amp; HEALTH DISCLAIMER:</strong> {adv.footer.disclaimer}
          </p>
          <div className="text-xs text-zinc-600">
            {adv.footer.links.map((l, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2">|</span>}
                <a href={l.href} className="text-gray-400 transition">{l.label}</a>
              </span>
            ))}
          </div>
        </div>
      </footer>

      <StickyBar adv={adv} />
    </div>
  )
}
