"use client";

import { useEffect, useRef, useState } from "react";

const IFRAME_ID = "getokinawatonic-vsl-iframe";
const VIDEO_SRC =
  "https://www.youtube.com/embed/MzwFM8hh2SA?autoplay=1&cc_load_policy=0&controls=0&disablekb=1&fs=0&playsinline=1&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0&host=https%3A%2F%2Fwww.youtube.com&enablejsapi=1&origin=https%3A%2F%2Fgetokinawatonic.com&widgetid=1&forigin=https%3A%2F%2Fgetokinawatonic.com%2Fsp%2Fvsl-1%2F%3FhopId%3D4be8dca2-401a-49f0-83a1-6c74b127cae6&aoriginsup=1&vf=1";

const AUTO_PLAY_DELAY_MS = 10_000;
/** Show CTA when this many seconds remain in the video */
const CTA_REMAINING_SECONDS = 300; // 5 minutes

// Minimal types so we don't need @types/youtube
type YTPlayer = {
  getCurrentTime: () => number;
  getDuration: () => number;
  destroy: () => void;
};
type YTEvent = { data: number };

declare global {
  interface Window {
    YT?: { Player: new (id: string, opts: object) => YTPlayer };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export const GetokinawatonicVideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef<YTPlayer | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const ctaFiredRef = useRef(false);

  // 10-second auto-play fallback
  useEffect(() => {
    const timer = setTimeout(() => setPlaying(true), AUTO_PLAY_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // YouTube IFrame API — initialise once the iframe is in the DOM
  useEffect(() => {
    if (!playing) return;

    const stopPolling = () => {
      if (pollRef.current) {
        clearInterval(pollRef.current);
        pollRef.current = null;
      }
    };

    const startPolling = () => {
      if (pollRef.current) return;
      pollRef.current = setInterval(() => {
        const p = playerRef.current;
        if (!p) return;
        const duration = p.getDuration();
        const remaining = duration - p.getCurrentTime();
        if (!ctaFiredRef.current && duration > 0 && remaining <= CTA_REMAINING_SECONDS) {
          ctaFiredRef.current = true;
          window.dispatchEvent(new CustomEvent("vsl-cta-show"));
          stopPolling();
        }
      }, 1_000);
    };

    const initPlayer = () => {
      if (!window.YT?.Player) return;
      playerRef.current = new window.YT.Player(IFRAME_ID, {
        events: {
          onStateChange: (e: YTEvent) => {
            if (e.data === 1 /* PLAYING */) startPolling();
            else stopPolling();
          },
        },
      });
    };

    // Load the IFrame API script if not already present
    if (window.YT?.Player) {
      initPlayer();
    } else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        initPlayer();
      };
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
    }

    return () => {
      stopPolling();
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [playing]);

  return (
    <div className="relative box-border caret-transparent outline-[3px] overflow-hidden pb-[56.25%]">
      {!playing && (
        <button
          onClick={() => setPlaying(true)}
          aria-label="Click to play video"
          className="absolute inset-0 w-full h-full z-10 cursor-pointer
            bg-[url('/images/getokinawatonic/alt-player-continue-2-m.png')]
            md:bg-[url('/images/getokinawatonic/video-cover.png            bg-cover bg-center"
        />
      )}
      {playing && (
        <iframe
          id={IFRAME_ID}
          title="Okinawa Flat Belly Tonic"
          src={VIDEO_SRC}
          className="absolute box-border caret-transparent h-full outline-[3px] align-baseline w-full left-0 top-0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};
