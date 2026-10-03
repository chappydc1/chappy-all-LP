"use client";

import { useEffect, useState } from "react";

function formatDaysAgo(daysAgo: number): string {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function DaysAgoDate({ daysAgo }: { daysAgo: number }): JSX.Element {
  const [label, setLabel] = useState("");

  useEffect(() => {
    setLabel(formatDaysAgo(daysAgo));
  }, [daysAgo]);

  return <span>{label}</span>;
}
