import copy from "../../copy.json"
import { PRODUCT_ANCHOR_ID } from "../../lib/checkout"
import media from "../../media.json"
import { StatCounter } from "./components/StatCounter"

import "./stats-hero.css"

export function StatsHero(): React.JSX.Element {
  const c = copy.statsHero
  const backgroundImage = `linear-gradient(0deg, rgba(196, 114, 69, 0.75), rgba(196, 114, 69, 0.75)), url("${media.statsHero.background}")`

  return (
    <section
      className="cy-stats"
      style={{ backgroundImage }}
    >
      <div className="cy-stats-container">
        <div className="cy-stats-left-col">
          <div className="cy-stats-grid">
            {c.stats.map((stat) => (
              <div
                key={stat.value}
                className="cy-stats-card"
              >
                <StatCounter value={stat.value} />
                <p
                  className="cy-stats-card-desc"
                  dangerouslySetInnerHTML={{ __html: stat.text }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="cy-stats-right-col">
          <div className="cy-stats-heading-desc">
            <h2 className="cy-stats-heading">{c.heading}</h2>
          </div>

          <div className="cy-stats-cta-wrap">
            <a
              className="cy-stats-cta-btn"
              href={`#${PRODUCT_ANCHOR_ID}`}
            >
              {c.cta}
            </a>
            <div className="cy-stats-subtext">
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
                <polyline points="9 11 11 13 15 9" />
              </svg>
              <span>{c.guarantee}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
