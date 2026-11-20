"use client"

import { useRef, useState } from "react"

import copy from "../../copy.json"
import "./reviews-list.css"

const c = copy.reviewsList

const MOBILE_VISIBLE = 2
const DESKTOP_VISIBLE = 4

export function ReviewsList(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(false)

  const toggle = (): void => {
    if (expanded) {
      setExpanded(false)
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }
    setExpanded(true)
  }

  const cardClass = (i: number): string => {
    const classes = ["cy-rl__card"]
    if (expanded) classes.push("is-shown")
    if (!expanded && i >= MOBILE_VISIBLE) classes.push("is-mobile-hidden")
    if (!expanded && i >= DESKTOP_VISIBLE) classes.push("is-desktop-hidden")
    return classes.join(" ")
  }

  return (
    <div className="cy-rl">
      <div className="cy-rl__wrapper">
        <div className="cy-rl__stars-top">
          <div className="cy-rl__stars-row">
            <span className="cy-rl__stars">{c.stars}</span>
            <span>{c.rated}</span>
          </div>
          <div className="cy-rl__trusted-row">
            <span>|</span>
            <span dangerouslySetInnerHTML={{ __html: c.trustedHtml }} />
          </div>
        </div>
        <h2 className="cy-rl__heading">{c.heading}</h2>
        <div
          ref={containerRef}
          className="cy-rl__cards"
        >
          {c.reviews.map((review, i) => (
            <div
              key={review.text}
              className={cardClass(i)}
            >
              <div className="cy-rl__card-stars-line">
                <span>{review.rating}</span>
                <span className="cy-rl__stars">{c.stars}</span>
              </div>
              <p className="cy-rl__card-text">{review.text}</p>
              <div className="cy-rl__card-tags">
                {review.tags.map((tag) => (
                  <span
                    key={tag}
                    className="cy-rl__card-tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="cy-rl__toggle-wrap">
          <button
            type="button"
            className="cy-rl__toggle-btn"
            onClick={toggle}
          >
            {expanded ? c.readLess : c.readMore}
          </button>
        </div>
      </div>
    </div>
  )
}
