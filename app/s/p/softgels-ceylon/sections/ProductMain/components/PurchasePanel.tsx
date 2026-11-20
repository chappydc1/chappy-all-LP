"use client"

import { useRef, useState } from "react"

import copy from "../../../copy.json"
import { getCartUrl } from "../../../lib/checkout"
import { BundlePicker } from "./BundlePicker"
import { StickyAtc } from "./StickyAtc"

function toCents(value: string): number {
  return Math.round(parseFloat(value.replace(/[^0-9.]/g, "")) * 100)
}

export function PurchasePanel(): React.JSX.Element {
  const c = copy.productMain
  const variants = copy.checkout.variants
  const [selectedId, setSelectedId] = useState(copy.checkout.defaultVariantId)
  const atcRef = useRef<HTMLDivElement>(null)
  const selected = variants.find((variant) => variant.id === selectedId) ?? variants[0]
  const priceCents = toCents(selected.price)
  const compareCents = toCents(selected.compareAtPrice)
  const pct = compareCents > priceCents
    ? Math.round(((compareCents - priceCents) / compareCents) * 100)
    : 0

  return (
    <>
      <div
        className="cy-pm-bsw"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="cy-pm-bsw-prices">
          <span className="cy-pm-bsw-price">{selected.price}</span>
          {pct > 0 && <span className="cy-pm-bsw-compare">{selected.compareAtPrice}</span>}
        </div>
        {pct > 0 && (
          <span className="cy-pm-bsw-pill">
            {c.priceBadge.label}
            {" "}
            {pct}
            %
          </span>
        )}
      </div>
      <BundlePicker
        selectedId={selected.id}
        onSelect={setSelectedId}
      />
      <div
        ref={atcRef}
        className="cy-pm-atc-wrap"
      >
        <a
          href={getCartUrl(selected.id)}
          className="cy-pm-atc"
        >
          <span className="cy-pm-atc-inner">
            <span className="cy-pm-atc-top">
              <span className="cy-pm-atc-label">{c.atc.label}</span>
              <span
                className="cy-pm-atc-sep"
                aria-hidden="true"
              >
                |
              </span>
              <span className="cy-pm-atc-prices">
                <span className="cy-pm-atc-price">{selected.price}</span>
                <s className="cy-pm-atc-compare">{selected.compareAtPrice}</s>
              </span>
            </span>
            <span className="cy-pm-atc-guarantee">{c.atc.guarantee}</span>
          </span>
        </a>
      </div>
      <StickyAtc
        anchorRef={atcRef}
        href={getCartUrl(selected.id)}
        price={selected.price}
      />
    </>
  )
}
