"use client"

import { useEffect, useRef, useState } from "react"

import copy from "../../copy.json"
import media from "../../media.json"
import { ReviewCard } from "./components/ReviewCard"

import "./reviews-carousel.css"

const CARDS_DESKTOP = 3
const SWIPE_THRESHOLD = 50

export function ReviewsCarousel(): React.JSX.Element {
  const c = copy.reviewsCarousel
  const avatars = media.reviewsCarousel.avatars
  const total = c.reviews.length
  const touchStartX = useRef<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [current, setCurrent] = useState<number>(0)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)")
    const update = (): void => {
      setIsMobile(mq.matches)
      setCurrent(0)
    }
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  const pages = Math.ceil(total / (isMobile ? 1 : CARDS_DESKTOP))
  const goTo = (idx: number): void => {
    setCurrent(Math.max(0, Math.min(idx, pages - 1)))
  }

  return (
    <section
      className="cy-rc"
      aria-label={c.ariaLabel}
    >
      <div className="cy-rc-container">
        <div className="cy-rc-viewport">
          <div
            className="cy-rc-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0]?.clientX ?? 0
            }}
            onTouchEnd={(e) => {
              const diff = touchStartX.current - (e.changedTouches[0]?.clientX ?? 0)
              if (Math.abs(diff) > SWIPE_THRESHOLD) {
                goTo(current + (diff > 0 ? 1 : -1))
              }
            }}
          >
            {c.reviews.map((review, i) => (
              <div
                key={review.title}
                className="cy-rc-slide"
              >
                <ReviewCard
                  review={review}
                  avatar={avatars[i]}
                  verifiedLabel={c.verified}
                  starsLabel={c.starsLabel}
                />
              </div>
            ))}
          </div>
        </div>

        {pages > 1 ? (
          <div
            className="cy-rc-controls"
            role="navigation"
            aria-label={c.navLabel}
          >
            <div
              className="cy-rc-dots"
              role="tablist"
            >
              {Array.from({ length: pages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  className={i === current ? "cy-rc-dot is-active" : "cy-rc-dot"}
                  aria-label={`${c.pageLabel} ${i + 1}`}
                  aria-selected={i === current}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <div className="cy-rc-nav-arrows">
              <button
                type="button"
                className={current === 0 ? "cy-rc-arrow is-disabled" : "cy-rc-arrow"}
                aria-label={c.prevLabel}
                disabled={current === 0}
                onClick={() => goTo(current - 1)}
              >
                &#8249;
              </button>
              <button
                type="button"
                className={current === pages - 1 ? "cy-rc-arrow is-disabled" : "cy-rc-arrow"}
                aria-label={c.nextLabel}
                disabled={current === pages - 1}
                onClick={() => goTo(current + 1)}
              >
                &#8250;
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
