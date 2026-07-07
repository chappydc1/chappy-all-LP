"use client"

import { useState, useEffect, useRef, createContext, useContext } from "react"
import type { HearAdvertorialContent, HearAdvertorialMedia } from "./types"

type AdvertorialData = {
  content: HearAdvertorialContent
  media: HearAdvertorialMedia
}

const AdvertorialContext = createContext<AdvertorialData | null>(null)

function useAdvertorialData(): AdvertorialData {
  const ctx = useContext(AdvertorialContext)
  if (!ctx) throw new Error("TopBar advertorial data is missing.")
  return ctx
}

function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    el.querySelectorAll<HTMLElement>(".reveal, .reveal-left").forEach((t) => observer.observe(t))
    if (el.classList.contains("reveal") || el.classList.contains("reveal-left")) {
      observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])
  return ref
}

function HtmlParagraph({ html, className }: { html: string; className?: string }): React.JSX.Element {
  return (
    <p
      className={className ?? "text-[26px] leading-[39px]"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

function HeaderSection(): React.JSX.Element {
  const { content, media } = useAdvertorialData()
  const ref = useScrollReveal()
  return (
    <div className="max-w-[1040px] mx-auto px-5 md:px-8" ref={ref}>
      <header className="bg-white z-[1000] pt-2.5 pb-5 md:pt-[30px] animate-fade-in">
        <div className="items-center flex justify-between">
          <div className="min-w-[auto] w-[85px] md:w-[145px]">
            <img src={media.header.logoSrc} alt={content.header.logoAlt} className="align-baseline w-full" />
          </div>
          <div className="min-w-[auto] text-right">
            <p className="text-gray-200 text-[15px] leading-[19.5px] font-archivo md:text-xl md:leading-[26px]">
              {content.header.advertorialLabel}
            </p>
            <p className="text-sky-600 text-xl font-bold leading-[26px] font-archivo md:text-[25px] md:leading-[32.5px]">
              {content.header.sectionLabel}
            </p>
          </div>
        </div>
      </header>
      <div className="mb-5 md:mb-10">
        <div className="-mx-5 md:mx-0">
          <picture className="block overflow-hidden">
            <img
              src={media.header.heroImageSrc}
              alt={media.header.heroImageAlt}
              className="align-baseline w-full"
            />
          </picture>
          <div className="relative items-center bg-white flex overflow-hidden">
            <div className="text-base font-bold bg-amber-300 min-w-[auto] text-nowrap z-[2] pl-3 pr-[15px] py-3 font-archivo md:text-xl md:px-5 md:py-[15px]">
              {content.header.featuredOnLabel}
            </div>
            <div className="min-w-[auto] mx-auto px-2.5 md:px-5">
              <picture>
                <img
                  src={media.header.featuredOnLogosSrc}
                  alt={content.header.featuredOnLogosAlt}
                  className="align-baseline w-full"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ArticleIntroSection(): React.JSX.Element {
  const { content } = useAdvertorialData()
  const ref = useScrollReveal()
  return (
    <div className="max-w-[830px] mx-auto px-5 md:px-8" ref={ref}>
      <div className="reveal mb-[30px] md:mb-10">
        <h1 className="text-[32px] font-bold leading-[37.44px] font-archivo md:text-[50px] md:leading-[58.5px]">
          {content.articleIntro.heading}
        </h1>
      </div>
      <div className="reveal reveal-delay-1 mb-2.5">
        <p className="text-stone-500 text-sm leading-[18.2px] md:text-lg md:leading-[23.4px]">
          {content.articleIntro.byline}
        </p>
      </div>
      {content.articleIntro.paragraphs.map((p, i) => (
        <div key={i} className={`reveal reveal-delay-${Math.min(i + 2, 5)} mb-[30px]`}>
          <HtmlParagraph html={p} />
        </div>
      ))}
    </div>
  )
}

function MediaBlockSection(): React.JSX.Element {
  const { content, media } = useAdvertorialData()
  const ref = useScrollReveal()
  return (
    <div className="max-w-[1040px] mx-auto px-5 md:px-8" ref={ref}>
      <div className="reveal mb-10">
        <div className="accent-left">
          <picture className="block overflow-hidden">
            <img
              alt={content.mediaBlock.imageAlt}
              src={media.mediaBlock.imageSrc}
              className="align-baseline w-full transition-transform duration-700 hover:scale-[1.01]"
            />
          </picture>
          <div className="pl-5 pr-[13px] pt-[13px] md:pl-[35px]">
            <p className="text-xl leading-[26px] md:text-[22px] md:leading-[37.4px]">
              {content.mediaBlock.caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ArticleSection(): React.JSX.Element {
  const { content } = useAdvertorialData()
  const ref = useScrollReveal()
  return (
    <div className="max-w-[830px] mx-auto px-5 md:px-8" ref={ref}>
      <div className="reveal mb-[30px] md:mb-10">
        <h2 className="text-[32px] font-bold leading-[41.6px] font-archivo md:text-4xl md:leading-[46.8px]">
          {content.articleSection.heading}
        </h2>
      </div>
      {content.articleSection.paragraphs.map((p, i) => (
        <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 5)} mb-[30px]${i === content.articleSection.paragraphs.length - 1 ? " md:mb-10" : ""}`}>
          <HtmlParagraph html={p} />
        </div>
      ))}
    </div>
  )
}

function VideoBlockSection({ videoIndex }: { videoIndex: number }): React.JSX.Element {
  const { content, media } = useAdvertorialData()
  const ref = useScrollReveal()
  const video = media.videos[videoIndex]
  const desc = content.videos[videoIndex]?.description ?? ""
  return (
    <div className="max-w-[1040px] mx-auto px-5 md:px-8" ref={ref}>
      <div className="reveal mb-10">
        <div className="accent-left">
          <video
            poster={video.poster}
            autoPlay
            loop
            playsInline
            muted
            src={video.src}
            className="align-baseline w-full"
          />
          <div className="pl-5 pr-[13px] pt-[13px] md:pl-[35px]">
            <p className="text-xl leading-[26px] md:text-[22px] md:leading-[37.4px]">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeaturesListSection(): React.JSX.Element {
  const { content, media } = useAdvertorialData()
  const ref = useScrollReveal()
  const { featuresList } = content
  return (
    <div className="max-w-[830px] mx-auto px-5 md:px-8" ref={ref}>
      <div className="reveal mb-[30px] md:mb-10">
        <h2 className="text-[32px] font-bold leading-[41.6px] font-archivo md:text-4xl md:leading-[46.8px]">
          {featuresList.heading}
        </h2>
      </div>
      {featuresList.paragraphs.map((p, i) => (
        <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 5)} mb-[30px]${i === featuresList.paragraphs.length - 1 ? " md:mb-10" : ""}`}>
          <HtmlParagraph html={p} />
        </div>
      ))}
      <div className="reveal mb-[30px]">
        <h2 className="text-[32px] font-bold leading-[41.6px] font-archivo md:text-4xl md:leading-[46.8px]">
          {featuresList.featuresSubheading}
        </h2>
      </div>
      <div className="reveal mb-[30px]">
        <p className="text-[26px] leading-[39px]">{featuresList.featuresSubheadingBody}</p>
      </div>
      <ul className="text-[26px] leading-[34.58px] list-none pl-5">
        {featuresList.features.map((f, i) => (
          <li
            key={i}
            className={`reveal reveal-delay-${Math.min(i + 1, 5)} bg-no-repeat bg-size-[39px_28px] bg-[position:left_0%] pl-16 pb-[35px] md:bg-size-[44px_32px] md:bg-[position:left_5px] md:pl-[74px]`}
            style={{ backgroundImage: `url('${media.featuresList.checkmarkIconSrc}')` }}
          >
            <strong className="font-bold">
              {f.title}
              {f.sup && <sup className="text-xs leading-[15.96px]">{f.sup}</sup>}
            </strong>
            <span className="hidden md:block text-[22px] leading-[33px] font-normal">{f.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function StateSelectorSection(): React.JSX.Element {
  const { content, media } = useAdvertorialData()
  const [selected, setSelected] = useState<string | null>(null)
  const ref = useScrollReveal()
  const { stateSelector } = content
  const stateMedia = media.stateSelector

  return (
    <div className="max-w-[830px] mx-auto px-5 md:px-8" ref={ref}>
      <div className="mb-[60px]">
        <div className="reveal mb-[30px] md:mb-10">
          <h2 className="text-[32px] font-bold leading-[41.6px] font-archivo md:text-4xl md:leading-[46.8px]">
            {stateSelector.heading}
          </h2>
        </div>
        {stateSelector.paragraphs.map((p, i) => (
          <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)} mb-[30px]${i === stateSelector.paragraphs.length - 1 ? " md:mb-10" : ""}`}>
            <HtmlParagraph html={p} />
          </div>
        ))}

        <div className="reveal mb-[30px] md:mb-10">
          <div className="mb-[30px] md:mb-[35px]">
            <div className="bg-sky-50 -mx-5 px-5 py-[30px] md:mx-0 md:px-[55px] md:py-10">
              <div className="mb-5">
                <p className="text-[26px] font-bold leading-[39px] font-archivo md:text-3xl md:leading-[45px]">
                  {stateSelector.stateSelectorLabel}
                </p>
              </div>
              {selected && (
                <div className="mb-5 px-4 py-3 bg-green-50 border border-green-300 rounded-lg text-green-800 text-xl animate-fade-in">
                  ✅ <strong>{selected}</strong> {stateSelector.stateAvailableMessage}
                  <a href="#" className="block mt-2 text-sky-600 font-bold underline hover:text-sky-800 transition-colors">
                    {stateSelector.stateAvailableCta}
                  </a>
                </div>
              )}
              <div className="mb-5">
                <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3">
                  {stateMedia.states.map((s) => (
                    <button
                      key={s.name}
                      onClick={() => setSelected(s.name)}
                      className={`items-center bg-white flex justify-between border p-[7px] rounded-[10px] border-solid transition-all duration-200 cursor-pointer ${
                        selected === s.name
                          ? "border-amber-500 bg-amber-100 shadow-md"
                          : "border-blue-300 hover:bg-amber-400 hover:border-amber-400 hover:shadow-sm"
                      }`}
                    >
                      <img src={s.imgSrc} alt={`${s.name} state`} className="min-w-[auto] align-baseline" />
                      <p className="text-[20px] md:text-[25px] grow min-w-[auto] text-left font-archivo">{s.name}</p>
                    </button>
                  ))}
                </div>
              </div>
              <a href="#" className="text-[22px] font-bold block text-center underline hover:text-sky-600 transition-colors duration-200">
                {stateSelector.dontSeeStateText}{" "}
                <img src={stateMedia.doubleArrowSrc} alt="" className="inline align-baseline" />
              </a>
            </div>
          </div>
          <div className="mb-10">
            <picture>
              <img src={stateMedia.trustLogosSrc} alt={stateMedia.trustLogosAlt} className="align-baseline w-full" />
            </picture>
          </div>
        </div>

        <div className="reveal mb-[30px]">
          <div className="bg-neutral-400 h-px" />
        </div>
        <div className="reveal mb-[25px]">
          <h2 className="text-[32px] font-bold leading-[41.6px] font-archivo md:text-4xl md:leading-[46.8px]">
            {stateSelector.reviewsHeading}
          </h2>
        </div>
        <div className="reveal reveal-delay-1 mb-[30px] md:mb-10">
          <p className="text-[26px] leading-[39px]">
            <mark className="font-bold bg-orange-200">{stateSelector.reviewsSubheadingHighlight}</mark>{" "}
            {stateSelector.reviewsSubheadingBody}
          </p>
        </div>
        <div>
          {stateSelector.reviews.map((review, index) => (
            <div key={index}>
              <div className={`reveal reveal-delay-${index + 1}`}>
                <div className="items-baseline gap-x-2.5 flex flex-wrap gap-y-2.5 mb-5">
                  <p className="text-[26px] font-bold leading-[33.8px]">{review.title}</p>
                  <img src={stateMedia.starsImageSrc} alt="5 stars" className="max-w-[100px] align-baseline w-full" />
                </div>
                <div className="mb-5">
                  <p className="text-[26px] leading-[39px]">{review.body}</p>
                </div>
                <div className="mb-[30px]">
                  <p className="text-xl leading-[26px]">
                    {review.author} | <strong className="font-bold">Verified Buyer</strong>
                  </p>
                </div>
              </div>
              {index < stateSelector.reviews.length - 1 && (
                <div className="mb-[30px]">
                  <div className="bg-neutral-400 h-px" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function RelatedStoriesSection(): React.JSX.Element {
  const { content, media } = useAdvertorialData()
  const ref = useScrollReveal()
  return (
    <div className="max-w-[1180px] mx-auto px-5 md:px-8" ref={ref}>
      <div className="reveal mb-[25px]">
        <p className="text-white text-[27px] font-bold bg-sky-600 leading-[32.4px] max-w-[200px] text-nowrap -mb-px px-[17px] py-1.5">
          {content.relatedStories.label}
        </p>
        <div className="bg-sky-600 h-[3px]" />
      </div>
      <div className="reveal reveal-delay-1 mb-[50px]">
        <div className="gap-x-[30px] flex flex-col gap-y-[30px] md:gap-x-2.5 md:flex-row md:gap-y-2.5">
          {content.relatedStories.stories.map((story, i) => {
            const storyMedia = media.relatedStories.stories[i]
            return (
              <div
                key={i}
                className="bg-white flex basis-auto grow-0 overflow-hidden md:basis-[calc(33.333%_-_14px)] md:grow group transition-shadow duration-300 hover:shadow-md rounded-sm"
              >
                <div className="relative shrink-0 h-fit max-w-[130px] overflow-hidden md:max-w-[170px] accent-left">
                  <img
                    src={storyMedia?.imageSrc ?? ""}
                    alt=""
                    className="align-baseline w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="gap-x-2 flex basis-[0%] flex-col grow gap-y-2 ml-3 md:gap-x-2.5 md:gap-y-2.5">
                  <span className="text-sky-600 font-bold block tracking-[2px] font-archivo">{story.category}</span>
                  <p className="text-[17px] font-bold grow leading-[22.1px] font-archivo md:text-xl md:leading-[26px]">
                    {story.description}
                  </p>
                  <a href={story.linkHref} className="text-xs font-bold block underline font-archivo hover:text-sky-600 transition-colors duration-200">
                    READ MORE
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function NewsletterSection(): React.JSX.Element {
  const { content, media } = useAdvertorialData()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [loading, setLoading] = useState(false)
  const ref = useScrollReveal()
  const { newsletter } = content

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      setStatus("error")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStatus("success")
      setEmail("")
    }, 1200)
  }

  return (
    <div className="bg-blue-950 py-[30px]" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        <div className="reveal mb-[30px]">
          <div className="gap-x-2.5 flex flex-col justify-between gap-y-2.5 md:flex-row">
            <img
              src={media.newsletter.logoSrc}
              alt={newsletter.logoAlt}
              className="max-w-[130px] align-baseline mb-[30px] md:max-w-[200px] md:mb-0 md:pb-5"
            />
            <div className="block md:items-center md:gap-x-10 md:flex">
              <div className="text-left mr-0 mb-5 md:text-start md:mr-2.5">
                <p className="text-neutral-300 leading-[20.8px] capitalize mb-1">{newsletter.curiosityLabel}</p>
                <p className="text-neutral-300 text-sm leading-[18.2px]">
                  Get your <span className="italic font-bold">free guide</span> today:
                </p>
              </div>
              <div className="max-w-[375px]">
                {status === "success" ? (
                  <div className="text-green-400 text-lg font-semibold py-4 animate-fade-in">
                    {newsletter.successMessage}
                  </div>
                ) : (
                  <form className="relative flex justify-normal max-w-full mb-[5px] md:justify-center md:max-w-none" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setStatus("idle") }}
                      placeholder={newsletter.emailPlaceholder}
                      className={`text-[17px] block max-w-[50%] text-ellipsis w-auto px-[22px] py-[15px] rounded-l-[13px] border-r-0 border md:max-w-none md:w-full outline-none transition-colors duration-200 focus:ring-2 focus:ring-sky-400 ${
                        status === "error" ? "border-red-400" : "border-neutral-300"
                      }`}
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className={`relative text-white text-lg font-semibold bg-sky-600 block min-w-[91px] text-center text-nowrap border border-neutral-300 p-[15px] rounded-r-[13px] md:min-w-[auto] transition-all duration-200 cursor-pointer ${
                        loading ? "opacity-70 cursor-not-allowed" : "hover:bg-sky-700 active:scale-95"
                      }`}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2 justify-center">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending
                        </span>
                      ) : (
                        newsletter.subscribeLabel
                      )}
                    </button>
                  </form>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm mt-1 animate-fade-in">{newsletter.errorMessage}</p>
                )}
                <p className="text-stone-300 text-[11px] leading-[14.3px] mt-1">{newsletter.disclaimer}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="reveal reveal-delay-1 mb-[30px]">
          <p className="text-white leading-[20.8px]">{newsletter.companyDescription}</p>
        </div>
        {newsletter.footnotes.map((note, i) => (
          <div key={i} className={`reveal reveal-delay-${i + 2} mb-2.5`}>
            <p className="text-stone-300 text-xs leading-[15.6px]">{note}</p>
          </div>
        ))}
        <div className="reveal reveal-delay-4 mb-2.5">
          <footer className="text-neutral-300 flex flex-wrap gap-x-1 gap-y-1">
            {newsletter.footerLinks.map((link, i, arr) => (
              <span key={link.label} className="inline-flex items-center gap-1">
                <a href={link.href} className="text-stone-300 text-xs hover:text-white transition-colors duration-200 underline-offset-2 hover:underline">
                  {link.label}
                </a>
                {i < arr.length - 1 && <span className="text-stone-500 text-xs">|</span>}
              </span>
            ))}
          </footer>
        </div>
        <p className="text-stone-300 text-xs leading-[15.6px]">
          © {newsletter.copyrightYear} All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

function FooterSection(): React.JSX.Element {
  const { content } = useAdvertorialData()
  return (
    <div className="bg-sky-700 py-4 text-center">
      <p className="text-white text-sm opacity-80">{content.footer.text}</p>
    </div>
  )
}

export type HearTopBarProps = {
  content: HearAdvertorialContent
  media: HearAdvertorialMedia
}

export function HearTopBar({ content, media }: HearTopBarProps): React.JSX.Element {
  return (
    <AdvertorialContext.Provider value={{ content, media }}>
      <div className="bg-sky-600 h-[30px]" />
      <HeaderSection />
      <ArticleIntroSection />
      <MediaBlockSection />
      <ArticleSection />
      <VideoBlockSection videoIndex={0} />
      <FeaturesListSection />
      <VideoBlockSection videoIndex={1} />
      <StateSelectorSection />
      <RelatedStoriesSection />
      <NewsletterSection />
      <FooterSection />
    </AdvertorialContext.Provider>
  )
}
