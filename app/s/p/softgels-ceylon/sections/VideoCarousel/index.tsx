"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import copy from "../../copy.json"
import media from "../../media.json"
import { VideoCard } from "./components/VideoCard"
import "./video-carousel.css"

const c = copy.videoCarousel
const m = media.videoCarousel

const SWIPE_THRESHOLD = 40

export function VideoCarousel(): React.JSX.Element {
  const wrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const pointerStartRef = useRef<number | null>(null)
  const draggedRef = useRef(false)
  const [snaps, setSnaps] = useState<number[]>([0])
  const [overflow, setOverflow] = useState(false)
  const [index, setIndex] = useState(0)
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const measure = useCallback((): void => {
    const wrap = wrapRef.current
    const track = trackRef.current
    if (!wrap || !track) return
    const cards = Array.from(track.children) as HTMLElement[]
    if (!cards.length) return
    const wrapW = wrap.clientWidth
    const trackW = track.scrollWidth
    if (trackW <= wrapW) {
      setOverflow(false)
      setSnaps([0])
      setIndex(0)
      return
    }
    const max = trackW - wrapW
    const first = cards[0]?.offsetLeft ?? 0
    const points = cards
      .map((card) => card.offsetLeft - first)
      .filter((x) => x < max)
    points.push(max)
    setOverflow(true)
    setSnaps(points)
    setIndex((i) => Math.min(i, points.length - 1))
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [measure])

  const goTo = (next: number): void => {
    const clamped = Math.max(0, Math.min(next, snaps.length - 1))
    if (clamped !== index) {
      setActiveCard(null)
      setIndex(clamped)
    }
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>): void => {
    pointerStartRef.current = e.clientX
    draggedRef.current = false
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>): void => {
    const start = pointerStartRef.current
    pointerStartRef.current = null
    if (start === null || !overflow) return
    const dx = e.clientX - start
    if (Math.abs(dx) < SWIPE_THRESHOLD) return
    draggedRef.current = true
    goTo(dx < 0 ? index + 1 : index - 1)
  }

  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (draggedRef.current) {
      e.stopPropagation()
      draggedRef.current = false
    }
  }

  const offset = overflow ? (snaps[index] ?? 0) : 0

  return (
    <section className="cy-vc">
      <div className="cy-vc__header">
        <h2 className="cy-vc__heading">{c.heading}</h2>
        <p className="cy-vc__subheading">{c.subheading}</p>
      </div>

      <div
        ref={wrapRef}
        className={overflow ? "cy-vc__track-wrap is-overflow" : "cy-vc__track-wrap"}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onClickCapture={handleClickCapture}
      >
        <div
          ref={trackRef}
          className="cy-vc__track"
          style={{ transform: `translate3d(${-offset}px, 0, 0)` }}
        >
          {m.items.map((item, i) => (
            <VideoCard
              key={item.video}
              video={item.video}
              poster={item.poster}
              thumbAlt={c.thumbAlt}
              soundLabel={c.soundLabel}
              active={activeCard === i}
              onActivate={() => setActiveCard(i)}
            />
          ))}
        </div>
      </div>

      {overflow ? (
        <>
          <div className="cy-vc__dots">
            {snaps.map((snap, i) => (
              <button
                key={snap}
                type="button"
                className={i === index ? "cy-vc__dot is-active" : "cy-vc__dot"}
                aria-label={`${c.slideLabel} ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <div className="cy-vc__arrows">
            <button
              type="button"
              className="cy-vc__arrow"
              aria-label={c.prevLabel}
              disabled={index === 0}
              onClick={() => goTo(index - 1)}
            >
              &lsaquo;
            </button>
            <button
              type="button"
              className="cy-vc__arrow"
              aria-label={c.nextLabel}
              disabled={index === snaps.length - 1}
              onClick={() => goTo(index + 1)}
            >
              &rsaquo;
            </button>
          </div>
        </>
      ) : null}
    </section>
  )
}
