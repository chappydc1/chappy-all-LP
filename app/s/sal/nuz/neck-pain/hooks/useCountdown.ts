import { useEffect, useState } from "react";

export function useCountdown(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const pad = (n: number) => String(n).padStart(2, "0");

  return {
    hrs: pad(hrs),
    mins: pad(mins),
    secs: pad(secs),
    formatted: `${pad(hrs)}:${pad(mins)}:${pad(secs)}`,
  };
}
