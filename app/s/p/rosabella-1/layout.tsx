import type { Metadata } from "next"
import copy from "./copy.json"

export const metadata: Metadata = {
  title: copy.seo.title,
  description: copy.seo.description,
}

export default function RosabellaPdpLayout({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <div className="text-neutral-800 text-base font-normal bg-white">
      {children}
    </div>
  )
}
