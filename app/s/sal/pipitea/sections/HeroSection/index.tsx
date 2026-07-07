"use client"

import { useState } from "react"
import { useLpContent } from "../../context/LpContext"
import { PipiteaProductGallery } from "./components/ProductGallery"
import { PipiteaDesktopTestimonial } from "./components/DesktopTestimonial"
import { PipiteaHeroContent } from "./components/HeroContent"

export const PipiteaHeroSection = (): JSX.Element => {
  const { media } = useLpContent()
  const images = media.hero.productGalleryImages
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <section className="w-full pt-0 pb-[45px] md:pt-[30px] md:pb-[60px] md:px-[15px]">
      <div className="flex flex-col md:flex-row max-w-[1170px] mx-auto text-zinc-800">
        <div className="flex-1 min-w-0">
          <PipiteaProductGallery
            images={images}
            currentImage={currentImage}
            onImageChange={setCurrentImage}
            variant="main"
          />
          <PipiteaProductGallery
            images={images}
            currentImage={currentImage}
            onImageChange={setCurrentImage}
            variant="thumbnails"
          />
          <PipiteaDesktopTestimonial />
        </div>
        <div className="w-10 shrink-0 hidden md:block" />
        <div className="flex-1 min-w-0">
          <PipiteaHeroContent />
        </div>
      </div>
    </section>
  )
}
