"use client"
import { createContext, useContext } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CopyJson = Record<string, any>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MediaJson = Record<string, any>

interface LpContextValue {
  copy: CopyJson
  media: MediaJson
}

export const LpContext = createContext<LpContextValue | null>(null)

export function useLpContent(): LpContextValue {
  const ctx = useContext(LpContext)
  if (!ctx) throw new Error("useLpContent must be used within LpContext.Provider")
  return ctx
}
