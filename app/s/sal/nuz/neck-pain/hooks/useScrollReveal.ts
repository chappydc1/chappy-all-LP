import { useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(_threshold = 0.15) {
  const ref = useRef<T>(null);
  return { ref, visible: true };
}
