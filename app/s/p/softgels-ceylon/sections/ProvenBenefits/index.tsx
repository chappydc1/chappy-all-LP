"use client"

import { useState } from "react"

import copy from "../../copy.json"
import { PRODUCT_ANCHOR_ID } from "../../lib/checkout"
import media from "../../media.json"

import "./proven-benefits.css"

export function ProvenBenefits(): React.JSX.Element {
  const c = copy.provenBenefits
  const m = media.provenBenefits
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="cy-pb">
      <div className="cy-pb-container">
        <div className="cy-pb-heading">
          <div className="cy-pb-title">
            <span className="cy-pb-title-accent">{c.titleAccent}</span>
            <span className="cy-pb-title-rest">{c.titleRest}</span>
          </div>
          <div className="cy-pb-subtitle">
            <p dangerouslySetInnerHTML={{ __html: c.subtitleHtml }} />
          </div>
        </div>
        <div className="cy-pb-grid">
          {c.cards.map((card, i) => {
            const isOpen = openIndex === i

            return (
              <div
                key={card.title}
                className={isOpen ? "cy-pb-card cy-pb-flip" : "cy-pb-card"}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setOpenIndex(isOpen ? null : i)
                  }
                }}
              >
                <div className="cy-pb-inner">
                  <div className="cy-pb-front">
                    <div className="cy-pb-left">
                      <img
                        src={m.cards[i]}
                        width={240}
                        height={240}
                        alt={card.title}
                      />
                    </div>
                    <div className="cy-pb-center">
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                    <div className="cy-pb-right">
                      <span className="cy-pb-toggle">{isOpen ? "–" : "+"}</span>
                    </div>
                  </div>
                  <div className="cy-pb-back">
                    <div className="cy-pb-back-icon">–</div>
                    <p>{card.back}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="cy-pb-cta-wrap">
          <a
            href={"#" + PRODUCT_ANCHOR_ID}
            className="cy-pb-cta"
          >
            {c.cta}
          </a>
          <div className="cy-pb-cta-sub">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 11 2 2 4-4" />
            </svg>
            {c.guarantee}
          </div>
        </div>
      </div>
    </section>
  )
}
