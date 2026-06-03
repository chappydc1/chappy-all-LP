import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe direct children with reveal class
    const targets = el.querySelectorAll<HTMLElement>(".reveal, .reveal-left");
    targets.forEach((t) => observer.observe(t));

    // Also observe the element itself if it has reveal class
    if (el.classList.contains("reveal") || el.classList.contains("reveal-left")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
