import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rosabella Beetroot Capsules",
  description: "Supports healthy blood flow and circulation - naturally, every day.",
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
