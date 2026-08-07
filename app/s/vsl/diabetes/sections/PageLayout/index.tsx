"use client"

import { useState, useEffect } from "react"
import { DiabetesHeader } from "../Header"
import { DiabetesNewsTicker } from "../NewsTicker"
import { DiabetesHeroSection } from "../HeroSection"
import { DiabetesSalesPage } from "../SalesPage"

// ── Timed reveal config ────────────────────────────────────────────────────
// Each entry controls when a section appears after the page loads.
// Change `delaySeconds` to adjust the reveal time.
// Set to 0 to show immediately.
const REVEAL_SCHEDULE = [
  { id: "salesPage", delaySeconds: 30 },
] as const
// ──────────────────────────────────────────────────────────────────────────

type RevealId = (typeof REVEAL_SCHEDULE)[number]["id"]

export const DiabetesPageLayout = (): JSX.Element => {
  const [revealed, setRevealed] = useState<Set<RevealId>>(new Set())

  useEffect(() => {
    const timers = REVEAL_SCHEDULE.map(({ id, delaySeconds }) =>
      setTimeout(() => {
        setRevealed((prev) => new Set([...prev, id]))
      }, delaySeconds * 1000)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <main className="box-border caret-transparent outline-[3px] w-full mx-auto font-nunito_sans">
      <DiabetesHeader />
      <DiabetesNewsTicker />
      <DiabetesHeroSection />
      {revealed.has("salesPage") && <DiabetesSalesPage />}
    </main>
  )
}
