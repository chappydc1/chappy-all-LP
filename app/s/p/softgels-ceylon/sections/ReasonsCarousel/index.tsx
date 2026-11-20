"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import copy from "../../copy.json"
import media from "../../media.json"

import "./reasons-carousel.css"

const SLIDES_PER_VIEW = 1.3
const SPACE_BETWEEN = 16
const SWIPE_THRESHOLD = 40

function getSnaps(width: number, count: number): number[] {
  if (width <= 0) {
    return Array.from({ length: count }, (_, i) => i)
  }
  const slide = (width - (SLIDES_PER_VIEW - 1) * SPACE_BETWEEN) / SLIDES_PER_VIEW
  const step = slide + SPACE_BETWEEN
  const max = Math.max(0, count * slide + (count - 1) * SPACE_BETWEEN - width)
  const snaps: number[] = []
  for (let i = 0; i < count; i += 1) {
    const pos = i * step
    if (pos >= max) {
      snaps.push(max)
      break
    }
    snaps.push(pos)
  }
  return snaps
}

export function ReasonsCarousel(): React.JSX.Element {
  const c = copy.reasonsCarousel
  const images = media.reasonsCarousel.images
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number>(0)
  const [width, setWidth] = useState<number>(0)
  const [isDesktop, setIsDesktop] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) {
      return
    }
    const mq = window.matchMedia("(min-width: 750px)")
    const update = (): void => {
      setWidth(el.clientWidth)
      setIsDesktop(mq.matches)
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    mq.addEventListener("change", update)
    return () => {
      observer.disconnect()
      mq.removeEventListener("change", update)
    }
  }, [])

  const snaps = getSnaps(width, c.cards.length)
  const lastIndex = snaps.length - 1
  const current = Math.min(index, lastIndex)
  const offset = isDesktop || width <= 0 ? 0 : snaps[current] ?? 0

  const goTo = useCallback(
    (next: number) => {
      setIndex(Math.max(0, Math.min(next, lastIndex)))
    },
    [lastIndex],
  )

  return (
    <section className="cy-reasons">
      <div className="cy-reasons-wrapper">
        <h2 className="cy-reasons-title">{c.title}</h2>
        <div
          ref={containerRef}
          className="cy-reasons-scroll-container"
        >
          <div
            className="cy-reasons-row"
            style={{ transform: `translate3d(-${offset}px, 0, 0)` }}
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
            {c.cards.map((card, i) => (
              <div
                key={card.title}
                className="cy-reasons-card"
              >
                <div className="cy-reasons-card-img-wrap">
                  <img
                    src={images[i]}
                    alt={card.alt}
                    loading="lazy"
                    width={400}
                    height={250}
                  />
                </div>
                <div className="cy-reasons-card-info">
                  <h3 className="cy-reasons-card-title">{card.title}</h3>
                  <p className="cy-reasons-card-desc">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cy-reasons-controls">
          <div className="cy-reasons-dots">
            {snaps.map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === current ? "cy-reasons-dot is-active" : "cy-reasons-dot"}
                aria-label={`${c.dotLabel} ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <div className="cy-reasons-nav-arrows">
            <button
              type="button"
              className={current === 0 ? "cy-reasons-nav-btn is-disabled" : "cy-reasons-nav-btn"}
              aria-label={c.prevLabel}
              disabled={current === 0}
              onClick={() => goTo(current - 1)}
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
              className={current === lastIndex ? "cy-reasons-nav-btn is-disabled" : "cy-reasons-nav-btn"}
              aria-label={c.nextLabel}
              disabled={current === lastIndex}
              onClick={() => goTo(current + 1)}
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
    </section>
  )
}
