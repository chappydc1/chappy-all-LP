"use client"

import { useEffect, useRef, useState } from "react"

import copy from "../../../copy.json"
import media from "../../../media.json"

function CheckBadgeIcon(): React.JSX.Element {
  return (
    <svg
      className="cy-pm-wt-item-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.7 3.1 5.51l.34 3.69L1 12l2.44 2.79-.34 3.69 3.61.82 1.89 3.2 3.4-1.46 3.4 1.46 1.89-3.2 3.61-.82-.34-3.69L23 12z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TrustCard(): React.JSX.Element {
  const c = copy.productMain.trust
  const m = media.productMain.trust
  const [revealed, setRevealed] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={revealed ? "cy-pm-wt is-revealed" : "cy-pm-wt"}
    >
      <div className="cy-pm-wt-card">
        <img
          className="cy-pm-wt-bg"
          src={m.background}
          alt=""
          loading="lazy"
          width={1400}
          height={933}
        />
        <div
          className="cy-pm-wt-overlay"
          aria-hidden="true"
        />
        <div className="cy-pm-wt-inner">
          <h2 className="cy-pm-wt-heading">{c.heading}</h2>
          <div className="cy-pm-wt-badges">
            {c.badges.map((badge, index) => (
              <div
                key={badge}
                className="cy-pm-wt-badge"
              >
                <div className="cy-pm-wt-badge-icon">
                  <img
                    src={m.badges[index]}
                    alt={badge}
                    loading="lazy"
                    width={88}
                    height={83}
                  />
                </div>
                <div className="cy-pm-wt-badge-text">{badge}</div>
              </div>
            ))}
          </div>
          <div className="cy-pm-wt-grid">
            {c.items.map((item) => (
              <div
                key={item}
                className="cy-pm-wt-item"
              >
                <CheckBadgeIcon />
                <span className="cy-pm-wt-item-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
