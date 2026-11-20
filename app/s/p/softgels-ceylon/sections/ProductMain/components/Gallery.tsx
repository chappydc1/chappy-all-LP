"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import copy from "../../../copy.json"
import media from "../../../media.json"

const DESKTOP_QUERY = "(min-width: 750px)"

function Caret(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 10 6"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function Gallery(): React.JSX.Element {
  const c = copy.productMain.gallery
  const images = media.productMain.gallery
  const [active, setActive] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const trackRef = useRef<HTMLUListElement>(null)
  const thumbsRef = useRef<HTMLUListElement>(null)

  const isDesktop = (): boolean => window.matchMedia(DESKTOP_QUERY).matches

  const goTo = useCallback(
    (index: number, smooth: boolean) => {
      const next = Math.max(0, Math.min(images.length - 1, index))
      setActive(next)
      const track = trackRef.current
      if (track) {
        track.scrollTo({
          left: next * track.clientWidth,
          behavior: smooth ? "smooth" : "auto",
        })
      }
    },
    [images.length],
  )

  const updateEdges = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    if (isDesktop()) {
      setAtStart(active <= 0)
      setAtEnd(active >= images.length - 1)
      return
    }
    const maxScroll = track.scrollWidth - track.clientWidth
    setAtStart(track.scrollLeft <= 40)
    setAtEnd(track.scrollLeft >= maxScroll - 40)
  }, [active, images.length])

  useEffect(() => {
    const handleResize = (): void => {
      const track = trackRef.current
      if (track) track.scrollLeft = active * track.clientWidth
      updateEdges()
    }
    updateEdges()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [active, updateEdges])

  useEffect(() => {
    const list = thumbsRef.current
    const item = list?.children[active] as HTMLElement | undefined
    if (!list || !item) return
    const left = item.offsetLeft
    const outOfView = left < list.scrollLeft
      || left + item.offsetWidth > list.scrollLeft + list.clientWidth
    if (outOfView) {
      list.scrollTo({ left: left - 16, behavior: "smooth" })
    }
  }, [active])

  const handleScroll = (): void => {
    const track = trackRef.current
    if (!track || isDesktop()) return
    const index = Math.round(track.scrollLeft / track.clientWidth)
    if (index !== active) setActive(index)
    updateEdges()
  }

  const step = (delta: number): void => {
    goTo(active + delta, !isDesktop())
  }

  return (
    <div className="cy-pm-gallery">
      <div className="cy-pm-viewer">
        <ul
          ref={trackRef}
          className="cy-pm-track"
          onScroll={handleScroll}
        >
          {images.map((src, index) => (
            <li
              key={src}
              className={index === active ? "cy-pm-slide is-active" : "cy-pm-slide"}
            >
              <img
                src={src}
                alt={c.imageAlt}
                width={1040}
                height={1040}
                loading={index === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            </li>
          ))}
        </ul>
        <div className="cy-pm-slider-buttons">
          <button
            type="button"
            className="cy-pm-slider-button cy-pm-slider-button--prev"
            aria-label={c.prevLabel}
            data-inactive={atStart ? "true" : undefined}
            onClick={() => step(-1)}
          >
            <Caret />
          </button>
          <button
            type="button"
            className="cy-pm-slider-button cy-pm-slider-button--next"
            aria-label={c.nextLabel}
            data-inactive={atEnd ? "true" : undefined}
            onClick={() => step(1)}
          >
            <Caret />
          </button>
        </div>
      </div>
      <div className="cy-pm-thumbs">
        <ul
          ref={thumbsRef}
          className="cy-pm-thumb-list"
        >
          {images.map((src, index) => (
            <li
              key={src}
              className="cy-pm-thumb-item"
            >
              <button
                type="button"
                className="cy-pm-thumb"
                aria-label={c.thumbLabel.replace("{n}", String(index + 1))}
                aria-current={index === active ? "true" : undefined}
                onClick={() => goTo(index, !isDesktop())}
              >
                <img
                  src={src}
                  alt={c.imageAlt}
                  width={416}
                  height={416}
                  loading="lazy"
                  draggable={false}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
