"use client"

import { useState } from "react"

import copy from "../../copy.json"
import { getCartUrl } from "../../lib/checkout"
import { pricingOptions } from "./components/pricing-data"
import { TrustBadges } from "./components/TrustBadges"
import "./pricing-cards.css"

const c = copy.pricingCards

export function PricingCards(): React.JSX.Element {
  const defaultIndex = Math.max(
    0,
    pricingOptions.findIndex((o) => o.variantId === copy.checkout.defaultVariantId),
  )
  const [selected, setSelected] = useState(defaultIndex)
  const current = pricingOptions[selected] ?? pricingOptions[0]

  return (
    <div className="cy-pc">
      <div className="cy-pc__wrapper">
        <div className="cy-pc__subheading">{c.subheading}</div>
        <h2 className="cy-pc__heading">{c.heading}</h2>
        <div className="cy-pc__desc">{c.description}</div>

        <div className="cy-pc__grid">
          {pricingOptions.map((option, i) => (
            <div
              key={option.variantId}
              className={[
                "cy-pc__card",
                option.badge ? "is-featured" : "",
                i === selected ? "is-active" : "",
              ].join(" ")}
              onClick={() => setSelected(i)}
            >
              {option.badge ? <div className="cy-pc__card-badge">{option.badge}</div> : null}
              <div className="cy-pc__card-img-wrap">
                <img
                  src={option.image}
                  alt={option.title}
                  loading="lazy"
                  width={120}
                  height={120}
                />
              </div>
              <h3 className="cy-pc__card-title">{option.title}</h3>
              <div className="cy-pc__card-price-row">
                <span className="cy-pc__card-price">{option.price}</span>
                <span className="cy-pc__card-compare">{option.compareAtPrice}</span>
              </div>
              <div className="cy-pc__card-save">{option.save}</div>
              <a
                className="cy-pc__card-cta"
                href={getCartUrl(option.variantId)}
                onClick={(e) => e.stopPropagation()}
              >
                {c.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="cy-pc__rows">
          {pricingOptions.map((option, i) => (
            <div
              key={option.variantId}
              className={i === selected ? "cy-pc__row is-active" : "cy-pc__row"}
              role="radio"
              aria-checked={i === selected}
              tabIndex={0}
              onClick={() => setSelected(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setSelected(i)
                }
              }}
            >
              {option.badge ? <div className="cy-pc__row-badge">{option.badge}</div> : null}
              <div className="cy-pc__row-img-wrap">
                <img
                  src={option.image}
                  alt={option.title}
                  loading="lazy"
                  width={50}
                  height={50}
                />
              </div>
              <div className="cy-pc__row-info">
                <div className="cy-pc__row-title">{option.title}</div>
                <div className="cy-pc__row-save">{option.save}</div>
              </div>
              <div className="cy-pc__row-pricing">
                <div className="cy-pc__row-price">{option.price}</div>
                <div className="cy-pc__row-compare">{option.compareAtPrice}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="cy-pc__mobile-cta-wrap">
          <a
            className="cy-pc__mobile-cta"
            href={getCartUrl(current?.variantId ?? copy.checkout.defaultVariantId)}
          >
            <span className="cy-pc__mobile-cta-main">
              <span>{c.cta}</span>
              <span>{c.mobileCtaSeparator}</span>
              <span>{current?.price}</span>
              <span className="cy-pc__mobile-cta-compare">{current?.compareAtPrice}</span>
            </span>
            <span className="cy-pc__mobile-cta-sub">{c.mobileCtaSub}</span>
          </a>
        </div>

        <TrustBadges />
      </div>
    </div>
  )
}
