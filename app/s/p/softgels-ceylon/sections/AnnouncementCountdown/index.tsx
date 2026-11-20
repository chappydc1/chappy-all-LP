"use client"

import { useEffect, useState } from "react"

import copy from "../../copy.json"

import "./announcement-countdown.css"

type CountdownState = {
  days: string
  hrs: string
  mins: string
  secs: string
  showDays: boolean
  ended: boolean
}

const INITIAL_STATE: CountdownState = {
  days: "00",
  hrs: "00",
  mins: "00",
  secs: "00",
  showDays: false,
  ended: false,
}

function zoneOffset(ms: number, timeZone: string): number {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).formatToParts(new Date(ms))
    const v: Record<string, number> = {}
    parts.forEach((p) => {
      v[p.type] = parseInt(p.value, 10)
    })
    const asUtc = Date.UTC(
      v.year ?? 0,
      (v.month ?? 1) - 1,
      v.day ?? 1,
      (v.hour ?? 0) % 24,
      v.minute ?? 0,
      v.second ?? 0,
    )
    return asUtc - Math.floor(ms / 1000) * 1000
  } catch {
    return 0
  }
}

function getTarget(
  dateStr: string,
  timeStr: string,
  timeZone: string,
): number | null {
  const d = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(dateStr)
  const t = /^(\d{1,2}):(\d{2})$/.exec(timeStr)
  if (!d) {
    return null
  }
  const wallClock = Date.UTC(
    Number(d[1]),
    Number(d[2]) - 1,
    Number(d[3]),
    Number(t?.[1] ?? 23),
    Number(t?.[2] ?? 59),
    0,
  )
  const first = wallClock - zoneOffset(wallClock, timeZone)
  return wallClock - zoneOffset(first, timeZone)
}

function pad(n: number): string {
  return String(n).padStart(2, "0")
}

export function AnnouncementCountdown(): React.JSX.Element {
  const c = copy.announcementCountdown
  const [state, setState] = useState<CountdownState>(INITIAL_STATE)

  useEffect(() => {
    const target = getTarget(c.endDate, c.endTime, c.timezone)
    if (target === null) {
      return
    }
    let interval: ReturnType<typeof setInterval> | null = null

    const tick = (): void => {
      const left = Math.floor((target - Date.now()) / 1000)
      if (left <= 0) {
        if (interval) {
          clearInterval(interval)
        }
        setState({ ...INITIAL_STATE, ended: true })
        return
      }
      const days = Math.floor(left / 86400)
      setState({
        days: pad(days),
        hrs: pad(Math.floor((left % 86400) / 3600)),
        mins: pad(Math.floor((left % 3600) / 60)),
        secs: pad(left % 60),
        showDays: days > 0,
        ended: false,
      })
    }

    tick()
    interval = setInterval(tick, 1000)
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [c.endDate, c.endTime, c.timezone])

  const hidden = state.ended && c.whenEnded === "hide"
  const showMessage = state.ended && c.whenEnded === "message"
  const units = [
    ...(state.showDays ? [{ value: state.days, label: c.labels.days }] : []),
    { value: state.hrs, label: c.labels.hrs },
    { value: state.mins, label: c.labels.mins },
    { value: state.secs, label: c.labels.secs },
  ]

  return (
    <div
      className="cy-cd"
      hidden={hidden}
    >
      <div className="cy-cd-wrapper">
        <div className="cy-cd-left">
          <h2>{c.heading}</h2>
          <p>{c.subheading}</p>
        </div>
        {!showMessage && (
          <div className="cy-cd-timer">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="cy-cd-unit"
              >
                <span className="cy-cd-num">{unit.value}</span>
                <span className="cy-cd-label">{unit.label}</span>
              </div>
            ))}
          </div>
        )}
        {showMessage && <div className="cy-cd-ended">{c.endedText}</div>}
      </div>
    </div>
  )
}
