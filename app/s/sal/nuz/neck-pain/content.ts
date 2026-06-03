import copyJson from "./copy/copy.json";
import contentJson from "./content/content.json";
import type { LandingPageContent } from "./types";

// Source of truth is split across two sibling JSON files:
//   copy/copy.json       — user-visible text strings
//   content/content.json — asset URLs, video IDs, numbers, structural classes
// They are deep-merged below into the single shape every section consumes.
// Arrays are merged element-wise (zip) so mixed-leaf arrays like
// `hero.shippingBadges: [{ icon, label }]` work transparently.
function deepMerge<T>(a: unknown, b: unknown): T {
  if (a === undefined) return b as T;
  if (b === undefined) return a as T;
  if (Array.isArray(a) && Array.isArray(b)) {
    const len = Math.max(a.length, b.length);
    return Array.from({ length: len }, (_, i) => deepMerge(a[i], b[i])) as T;
  }
  if (
    typeof a === "object" && a !== null &&
    typeof b === "object" && b !== null
  ) {
    const out: Record<string, unknown> = {};
    const keys = new Set([
      ...Object.keys(a as Record<string, unknown>),
      ...Object.keys(b as Record<string, unknown>),
    ]);
    for (const k of keys) {
      out[k] = deepMerge(
        (a as Record<string, unknown>)[k],
        (b as Record<string, unknown>)[k],
      );
    }
    return out as T;
  }
  return (b ?? a) as T;
}

export const content = deepMerge<LandingPageContent>(contentJson, copyJson);
export type { LandingPageContent } from "./types";

// Tiny markdown helper used by sections whose JSON strings contain inline
// `**bold**` spans (e.g. video body paragraphs, pain-points bullets).
// Splits the string on `**` pairs and wraps odd-indexed fragments in <strong>.
import { Fragment, createElement, type ReactNode } from "react";

export function renderInlineBold(text: string): ReactNode {
  const parts = text.split("**");
  return parts.map((part, i) =>
    i % 2 === 1
      ? createElement("strong", { key: i, className: "font-bold" }, part)
      : createElement(Fragment, { key: i }, part),
  );
}
