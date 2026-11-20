"use client"

import { useEffect, useRef, useState } from "react"

const DURATION_MS = 1200

type Parsed = {
  prefix: string
  target: number
  suffix: string
  isFloat: boolean
}

function parseValue(raw: string): Parsed | null {
  const match = raw.match(/^([^0-9.]*)([0-9.]+)(.*)$/)
  if (!match) {
    return null
  }
  return {
    prefix: match[1] ?? "",
    target: parseFloat(match[2] ?? "0"),
    suffix: match[3] ?? "",
    isFloat: (match[2] ?? "").includes("."),
  }
}

function format(parsed: Parsed, value: number): string {
  const num = parsed.isFloat ? value.toFixed(1) : Math.floor(value).toString()
  return parsed.prefix + num + parsed.suffix
}

export function StatCounter({ value }: { value: string }): React.JSX.Element {
  const ref = useRef<HTMLSpanElement>(null)
  const parsed = parseValue(value)
  const [text, setText] = useState<string>(parsed ? format(parsed, 0) : value)

  useEffect(() => {
    const el = ref.current
    const stat = parseValue(value)
    if (!el || !stat) {
      return
    }
    let frame = 0
    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return
        }
        obs.disconnect()
        const start = performance.now()
        const step = (now: number): void => {
          const progress = Math.min((now - start) / DURATION_MS, 1)
          const eased = progress * (2 - progress)
          if (progress < 1) {
            setText(format(stat, eased * stat.target))
            frame = requestAnimationFrame(step)
          } else {
            setText(value)
          }
        }
        frame = requestAnimationFrame(step)
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <span
      ref={ref}
      className="cy-stats-card-percentage"
    >
      {text}
    </span>
  )
}
