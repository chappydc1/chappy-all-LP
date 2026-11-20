"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import copy from "../../../copy.json"
import media from "../../../media.json"

export function VideoTestimonials(): React.JSX.Element {
  const c = copy.productMain.ugc
  const videos = media.productMain.ugc
  const [playing, setPlaying] = useState<number | null>(null)
  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const pauseAll = useCallback(() => {
    videoRefs.current.forEach((video) => {
      if (video && !video.paused) {
        video.pause()
        video.currentTime = 0
      }
    })
    setPlaying(null)
  }, [])

  const updateNav = useCallback(() => {
    const slider = sliderRef.current
    if (!slider) return
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth
    setPrevDisabled(slider.scrollLeft <= 5)
    setNextDisabled(slider.scrollLeft >= maxScrollLeft - 5)
  }, [])

  useEffect(() => {
    updateNav()
    const timer = window.setTimeout(updateNav, 500)
    window.addEventListener("resize", updateNav)
    const slider = sliderRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) pauseAll()
        })
      },
      { threshold: 0.1 },
    )
    if (slider) observer.observe(slider)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("resize", updateNav)
      observer.disconnect()
    }
  }, [pauseAll, updateNav])

  const scrollByStep = (direction: number): void => {
    const slider = sliderRef.current
    if (!slider) return
    pauseAll()
    const first = slider.firstElementChild as HTMLElement | null
    const stepSize = first ? first.clientWidth + 16 : 168
    slider.scrollBy({ left: direction * stepSize, behavior: "smooth" })
  }

  const handleScroll = (): void => {
    if (playing !== null) pauseAll()
    updateNav()
  }

  const toggle = (index: number): void => {
    const video = videoRefs.current[index]
    if (!video) return
    if (playing === index) {
      pauseAll()
      return
    }
    pauseAll()
    setPlaying(index)
    void video.play().catch(() => setPlaying(null))
  }

  return (
    <div className="cy-pm-ugc">
      <p className="cy-pm-ugc-heading">{c.heading}</p>
      <div
        ref={sliderRef}
        className="cy-pm-ugc-row"
        onScroll={handleScroll}
      >
        {videos.map((item, index) => (
          <div
            key={item.video}
            className="cy-pm-ugc-wrapper"
            onClick={() => toggle(index)}
          >
            <div className="cy-pm-ugc-thumb">
              <img
                src={item.poster}
                alt={c.alts[index] ?? ""}
                loading="lazy"
                width={140}
                height={249}
                style={{ display: playing === index ? "none" : "block" }}
              />
              <video
                ref={(el) => {
                  videoRefs.current[index] = el
                }}
                src={item.video}
                playsInline
                preload="metadata"
                onEnded={pauseAll}
                style={{ display: playing === index ? "block" : "none" }}
              />
              <div
                className="cy-pm-ugc-play"
                style={{ display: playing === index ? "none" : "flex" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cy-pm-ugc-controls">
        <div className="cy-pm-ugc-arrows">
          <button
            type="button"
            className="cy-pm-ugc-nav"
            aria-label={c.prevLabel}
            disabled={prevDisabled}
            onClick={() => scrollByStep(-1)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className="cy-pm-ugc-nav"
            aria-label={c.nextLabel}
            disabled={nextDisabled}
            onClick={() => scrollByStep(1)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
