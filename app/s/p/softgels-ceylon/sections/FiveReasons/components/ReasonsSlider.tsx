"use client"

import { useEffect, useRef, useState } from "react"

type Card = {
  badge: string
  title: string
  alt: string
  text: string
  image: string
}

type ReasonsSliderProps = {
  cards: Card[]
  prevLabel: string
  nextLabel: string
  dotLabel: string
}

const SWIPE_THRESHOLD = 40

function getSlidesPerView(width: number): number {
  if (width >= 990) {
    return 3
  }
  if (width >= 750) {
    return 2.3
  }
  return 1
}

export function ReasonsSlider({
  cards,
  prevLabel,
  nextLabel,
  dotLabel,
}: ReasonsSliderProps): React.JSX.Element {
  const [index, setIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(cards.length - 1)
  const dragStart = useRef<number | null>(null)

  useEffect(() => {
    const update = (): void => {
      const next = Math.max(0, Math.ceil(cards.length - getSlidesPerView(window.innerWidth)))
      setMaxIndex(next)
      setIndex((current) => Math.min(current, next))
    }

    update()
    window.addEventListener("resize", update)

    return () => window.removeEventListener("resize", update)
  }, [cards.length])

  const goTo = (target: number): void => {
    setIndex(Math.max(0, Math.min(target, maxIndex)))
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>): void => {
    dragStart.current = e.clientX
  }

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>): void => {
    if (dragStart.current === null) {
      return
    }
    const delta = e.clientX - dragStart.current
    dragStart.current = null
    if (delta <= -SWIPE_THRESHOLD) {
      goTo(index + 1)
    } else if (delta >= SWIPE_THRESHOLD) {
      goTo(index - 1)
    }
  }

  return (
    <>
      <div
        className="cy-fr-scroll"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={() => {
          dragStart.current = null
        }}
      >
        <div
          className="cy-fr-row"
          style={{ "--cy-fr-index": index, "--cy-fr-count": cards.length } as React.CSSProperties}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="cy-fr-card"
            >
              <div className="cy-fr-card-img">
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  width={400}
                  height={250}
                  draggable={false}
                />
              </div>
              <div className="cy-fr-card-info">
                <span className="cy-fr-card-badge">{card.badge}</span>
                <h3 className="cy-fr-card-title">{card.title}</h3>
                <p className="cy-fr-card-desc">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cy-fr-controls">
        <div className="cy-fr-dots">
          {cards.map((card, i) => (
            <button
              key={card.title}
              type="button"
              className={i === index ? "cy-fr-dot cy-fr-dot-active" : "cy-fr-dot"}
              data-dot={i}
              aria-label={`${dotLabel} ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="cy-fr-arrows">
          <button
            type="button"
            className={index === 0 ? "cy-fr-nav cy-fr-nav-disabled" : "cy-fr-nav"}
            aria-label={prevLabel}
            disabled={index === 0}
            onClick={() => goTo(index - 1)}
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
            className={index >= maxIndex ? "cy-fr-nav cy-fr-nav-disabled" : "cy-fr-nav"}
            aria-label={nextLabel}
            disabled={index >= maxIndex}
            onClick={() => goTo(index + 1)}
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
    </>
  )
}
