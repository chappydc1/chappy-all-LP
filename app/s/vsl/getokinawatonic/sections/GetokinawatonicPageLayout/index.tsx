"use client"

import { useState, useEffect } from "react"
import { GetokinawatonicHeroSection } from "../GetokinawatonicHeroSection"
import { GetokinawatonicSalesSection } from "../GetokinawatonicSalesSection"
import { GetokinawatonicStickyCta } from "../../components/GetokinawatonicStickyCta"
import { GetokinawatonicFooter } from "../GetokinawatonicFooter"

// ── Timed reveal config ────────────────────────────────────────────────────
// Each entry controls when a section appears after the page loads.
// Change `delaySeconds` to adjust the reveal time.
// Set to 0 to show immediately.
const REVEAL_SCHEDULE = [
  { id: "salesSection", delaySeconds: 30 },
  { id: "footer",       delaySeconds: 30 },
] as const
// ──────────────────────────────────────────────────────────────────────────

type RevealId = (typeof REVEAL_SCHEDULE)[number]["id"]

export const GetokinawatonicPageLayout = (): JSX.Element => {
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
    <>
      <div className="bg-white bg-cover box-border caret-transparent outline-[3px]">
        <div className="bg-red-400 box-border caret-transparent min-h-[5px] outline-[3px]" />
        <GetokinawatonicHeroSection />
        {revealed.has("salesSection") && <GetokinawatonicSalesSection />}
      </div>
      <GetokinawatonicStickyCta />
      {revealed.has("footer") && <GetokinawatonicFooter />}
    </>
  )
}
