"use client";

import { useEffect } from "react";

export function ReadProgressBar() {
  useEffect(() => {
    const bar = document.createElement("div");
    bar.id = "read-progress";
    document.body.appendChild(bar);

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${pct}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      bar.remove();
    };
  }, []);

  return null;
}
