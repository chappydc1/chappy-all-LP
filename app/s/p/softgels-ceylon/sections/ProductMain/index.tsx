import copy from "../../copy.json"
import { PRODUCT_ANCHOR_ID } from "../../lib/checkout"
import media from "../../media.json"
import { Gallery } from "./components/Gallery"
import { InfoNotices } from "./components/InfoNotices"
import { ProductAccordions } from "./components/ProductAccordions"
import { PurchasePanel } from "./components/PurchasePanel"
import { SoldProgress } from "./components/SoldProgress"
import { TrustCard } from "./components/TrustCard"
import { VideoTestimonials } from "./components/VideoTestimonials"

import "./product-main.css"

export function ProductMain(): React.JSX.Element {
  const c = copy.productMain
  const m = media.productMain

  return (
    <section
      id={PRODUCT_ANCHOR_ID}
      className="cy-pm"
    >
      <div className="cy-pm-page">
        <div className="cy-pm-grid">
          <div className="cy-pm-media-col">
            <Gallery />
            <div className="cy-pm-desktop-only">
              <ProductAccordions items={c.accordions} />
              <VideoTestimonials />
            </div>
          </div>
          <div className="cy-pm-info-col">
            <div className="cy-pm-info">
              <div className="cy-pm-rating">
                <div className="cy-pm-stars">{c.rating.stars}</div>
                <div className="cy-pm-rating-text">{c.rating.text}</div>
              </div>
              <h1 className="cy-pm-title">{c.title}</h1>
              <div className="cy-pm-points">
                {c.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="cy-pm-point"
                  >
                    <img
                      className="cy-pm-point-icon"
                      src={m.checkIcon}
                      alt=""
                    />
                    <span className="cy-pm-point-text">{bullet}</span>
                  </div>
                ))}
              </div>
              <SoldProgress />
              <PurchasePanel />
              <InfoNotices />
              <div className="cy-pm-mobile-only">
                <ProductAccordions items={c.accordions} />
              </div>
              <div className="cy-pm-mobile-only">
                <VideoTestimonials />
              </div>
              <TrustCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
