import type { Metadata } from "next"
import localFont from "next/font/local"

import copy from "./copy.json"
import media from "./media.json"

import "./ceylon.css"

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  icons: { icon: media.favicon },
}

const plusJakartaSans = localFont({
  src: "../../../../public/lp-images-files-videos-fonts/fonts/google/PlusJakartaSans-latin-variable.woff2",
  weight: "200 800",
  display: "swap",
  variable: "--font-ceylon-body",
})

const poppins = localFont({
  src: [
    {
      path: "../../../../public/lp-images-files-videos-fonts/fonts/google/Poppins-400-latin.woff2",
      weight: "400",
    },
    {
      path: "../../../../public/lp-images-files-videos-fonts/fonts/google/Poppins-500-latin.woff2",
      weight: "500",
    },
    {
      path: "../../../../public/lp-images-files-videos-fonts/fonts/google/Poppins-600-latin.woff2",
      weight: "600",
    },
    {
      path: "../../../../public/lp-images-files-videos-fonts/fonts/google/Poppins-700-latin.woff2",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-ceylon-heading",
})

export default function SoftgelsCeylonLayout({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <div className={`ceylon-lp ${plusJakartaSans.variable} ${poppins.variable}`}>
      {children}
    </div>
  )
}
