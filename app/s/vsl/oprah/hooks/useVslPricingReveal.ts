"use client";

import { useState, useEffect } from "react";

/** Show pricing when this many seconds remain in the VSL. */
const REVEAL_AT_SECONDS_REMAINING = 300; // 5 minutes

/**
 * Returns `true` once the VSL player reports ≤ 5 minutes remaining.
 *
 * Listens for postMessage events from VTurb (and standard HTML5 video
 * timeupdate events bubbled through the iframe). When VTurb is wired up it
 * emits messages in the shape:
 *   { currentTime: number, duration: number }          — generic timeupdate
 *   { type: "timeupdate", currentTime, duration }      — explicit type field
 *   { type: "vtb:progress", currentTime, duration }    — VTurb branded
 *
 * To test locally without a real video, open the browser console and run:
 *   window.postMessage({ currentTime: 100, duration: 400 }, "*")
 * (duration - currentTime = 300 → exactly 5 min remaining → reveals pricing)
 */
export function useVslPricingReveal(): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return; // already revealed — no need to keep listening

    const handle = (e: MessageEvent) => {
      const d = e.data;
      if (!d || typeof d !== "object") return;

      let currentTime: number | undefined;
      let duration: number | undefined;

      if (typeof d.currentTime === "number" && typeof d.duration === "number") {
        currentTime = d.currentTime;
        duration = d.duration;
      }

      if (currentTime === undefined || duration === undefined) return;

      const remaining = duration - currentTime;
      if (remaining <= REVEAL_AT_SECONDS_REMAINING) {
        setVisible(true);
      }
    };

    window.addEventListener("message", handle);
    return () => window.removeEventListener("message", handle);
  }, [visible]);

  return visible;
}
