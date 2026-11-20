"use client"

import { useEffect, useRef, useState } from "react"

import copy from "../../../copy.json"

const DURATION_MS = 1200

export function SoldProgress(): React.JSX.Element {
  const { percent, suffix } = copy.productMain.progress
  const [width, setWidth] = useState(0)
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    let frame = 0
    const start = (): void => {
      setWidth(percent)
      const startedAt = performance.now()
      const tick = (now: number): void => {
        const progress = Math.min(1, (now - startedAt) / DURATION_MS)
        setCount(Math.round(percent * (1 - Math.pow(1 - progress, 3))))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect()
        start()
      }
    })
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [percent])

  return (
    <div
      ref={ref}
      className="cy-pm-progress"
    >
      <div className="cy-pm-progress-bg">
        <div
          className="cy-pm-progress-fill"
          style={{ width: `${width}%` }}
        />
      </div>
      <span className="cy-pm-progress-text">
        <span>{count}</span>
        {suffix}
      </span>
    </div>
  )
}
