"use client"

import { useEffect, useState } from "react"

import copy from "../../../copy.json"
import media from "../../../media.json"

type StickyAtcProps = {
  anchorRef: React.RefObject<HTMLElement | null>
  href: string
  price: string
}

export function StickyAtc({ anchorRef, href, price }: StickyAtcProps): React.JSX.Element {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const anchor = anchorRef.current
    if (!anchor) {
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0)
    })
    observer.observe(anchor)
    return () => observer.disconnect()
  }, [anchorRef])

  return (
    <div
      className={isVisible ? "cy-pm-sticky is-visible" : "cy-pm-sticky"}
      aria-hidden={!isVisible}
    >
      <div className="cy-pm-sticky-content">
        <img
          className="cy-pm-sticky-image"
          src={media.productMain.gallery[0]}
          alt=""
        />
        <div className="cy-pm-sticky-title">
          <span className="cy-pm-sticky-name">{copy.productMain.title}</span>
          <span className="cy-pm-sticky-price">{price}</span>
        </div>
        <a
          href={href}
          className="cy-pm-sticky-button"
          tabIndex={isVisible ? 0 : -1}
        >
          {copy.productMain.stickyAtc.buttonText}
        </a>
      </div>
    </div>
  )
}
