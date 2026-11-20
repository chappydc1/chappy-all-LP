import copy from "../../copy.json"
import { PRODUCT_ANCHOR_ID } from "../../lib/checkout"
import media from "../../media.json"
import { ReasonsSlider } from "./components/ReasonsSlider"

import "./five-reasons.css"

export function FiveReasons(): React.JSX.Element {
  const c = copy.fiveReasons
  const m = media.fiveReasons
  const cards = c.cards.map((card, i) => ({ ...card, image: m.cards[i] ?? "" }))

  return (
    <section className="cy-fr">
      <div className="cy-fr-wrapper">
        <div className="cy-fr-badge">{c.badge}</div>
        <h2 className="cy-fr-title">{c.heading}</h2>
        <ReasonsSlider
          cards={cards}
          prevLabel={c.prevLabel}
          nextLabel={c.nextLabel}
          dotLabel={c.dotLabel}
        />
        <div className="cy-fr-cta-wrap">
          <a
            href={"#" + PRODUCT_ANCHOR_ID}
            className="cy-fr-cta"
          >
            {c.cta}
          </a>
          <div className="cy-fr-cta-sub">
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
