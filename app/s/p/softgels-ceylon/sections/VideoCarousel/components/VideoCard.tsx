"use client"

import { useEffect, useRef, useState } from "react"

type VideoCardProps = {
  video: string
  poster: string
  thumbAlt: string
  soundLabel: string
  active: boolean
  onActivate: () => void
}

export function VideoCard({
  video,
  poster,
  thumbAlt,
  soundLabel,
  active,
  onActivate,
}: VideoCardProps): React.JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null)
  const fadeRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [muted, setMuted] = useState(false)
  const [paused, setPaused] = useState(false)
  const [overlayVisible, setOverlayVisible] = useState(false)

  useEffect(() => {
    if (!active) {
      setMuted(false)
      setPaused(false)
      setOverlayVisible(false)
      return
    }
    const el = videoRef.current
    if (!el) return
    el.muted = false
    el.play().catch(() => {
      el.muted = true
      setMuted(true)
      void el.play().catch(() => undefined)
    })
  }, [active])

  useEffect(() => {
    return () => {
      if (fadeRef.current) clearTimeout(fadeRef.current)
    }
  }, [])

  const flashIcon = (isPaused: boolean): void => {
    if (fadeRef.current) clearTimeout(fadeRef.current)
    setPaused(isPaused)
    setOverlayVisible(true)
    if (!isPaused) {
      fadeRef.current = setTimeout(() => setOverlayVisible(false), 800)
    }
  }

  const handleClick = (): void => {
    if (!active) {
      onActivate()
      return
    }
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      void el.play().catch(() => undefined)
      flashIcon(false)
    } else {
      el.pause()
      flashIcon(true)
    }
  }

  const toggleMute = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation()
    const el = videoRef.current
    if (!el) return
    el.muted = !el.muted
    setMuted(el.muted)
  }

  return (
    <div
      className={active ? "cy-vc__card is-playing" : "cy-vc__card"}
      onClick={handleClick}
    >
      <div className="cy-vc__card-inner">
        {active ? (
          <>
            <video
              ref={videoRef}
              className="cy-vc__inline-video"
              src={video}
              autoPlay
              loop
              playsInline
              preload="metadata"
              onPlaying={() => flashIcon(false)}
            />
            <div className="cy-vc__inline-controls">
              <div
                className="cy-vc__inline-play-overlay"
                style={{ opacity: overlayVisible ? 1 : 0 }}
              >
                {paused ? (
                  <svg viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                )}
              </div>
              <button
                type="button"
                className="cy-vc__inline-mute-btn"
                aria-label={soundLabel}
                onClick={toggleMute}
              >
                {muted ? (
                  <svg viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                  </svg>
                )}
              </button>
            </div>
          </>
        ) : (
          <>
            <img
              className="cy-vc__thumb"
              src={poster}
              alt={thumbAlt}
              loading="lazy"
              width={400}
            />
            <div className="cy-vc__overlay" />
            <div className="cy-vc__play">
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
