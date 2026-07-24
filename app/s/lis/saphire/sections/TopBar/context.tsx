"use client";

import { createContext, useContext } from "react";
import type { AdvertorialData } from "./types";

export const AdvertorialContext = createContext<AdvertorialData | null>(null);

export function useAdvertorialData(): AdvertorialData {
  const context = useContext(AdvertorialContext);
  if (!context) {
    throw new Error("TopBar advertorial data is missing.");
  }
  return context;
}
