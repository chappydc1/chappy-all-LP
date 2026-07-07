"use client"
import { createContext, useContext } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PipiteaCopyJson = Record<string, any>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PipiteaMediaJson = Record<string, any>

interface LpContextValue {
  copy: PipiteaCopyJson
  media: PipiteaMediaJson
}

export const PipiteaLpContext = createContext<LpContextValue | null>(null)

export function useLpContent(): LpContextValue {
  const ctx = useContext(PipiteaLpContext)
  if (!ctx) throw new Error("useLpContent must be used within LpContext.Provider")
  return ctx
}
