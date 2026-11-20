import copy from "../../copy.json"
import { PRODUCT_ANCHOR_ID } from "../../lib/checkout"
import media from "../../media.json"
import { Timeline } from "./components/Timeline"

import "./wellness-journey.css"

export function WellnessJourney(): React.JSX.Element {
  const c = copy.wellnessJourney
  const m = media.wellnessJourney

  return (
    <section className="cy-wj">
      <div className="cy-wj-inner">
        <div className="cy-wj-left">
          <div className="cy-wj-info">
            <img
              className="cy-wj-logo"
              src={m.logo}
              alt={c.logoAlt}
              loading="lazy"
              width={480}
            />
            <p className="cy-wj-subtitle">{c.subtitle}</p>
            <h2 className="cy-wj-heading">{c.heading}</h2>
            <p className="cy-wj-desc">{c.description}</p>
          </div>
          <div className="cy-wj-cta-wrap">
            <a
              href={"#" + PRODUCT_ANCHOR_ID}
              className="cy-wj-cta"
            >
              {c.cta}
            </a>
            <div className="cy-wj-guarantee">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 2L3 7v5c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinejoin="round"
                />
                <polyline
                  points="8,12 11,15 16,9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {c.guarantee}
            </div>
          </div>
        </div>
        <div className="cy-wj-right">
          <Timeline steps={c.steps} />
        </div>
      </div>
    </section>
  )
}
