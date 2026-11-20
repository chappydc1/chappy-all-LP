import copy from "../../copy.json"
import media from "../../media.json"
import { PRODUCT_ANCHOR_ID } from "../../lib/checkout"
import "./risk-free-trial.css"

const c = copy.riskFreeTrial
const m = media.riskFreeTrial

export function RiskFreeTrial(): React.JSX.Element {
  return (
    <div className="cy-rft">
      <div className="cy-rft__inner">
        <div className="cy-rft__content">
          <img
            className="cy-rft__badge"
            src={m.badge}
            alt={c.badgeAlt}
            loading="lazy"
            width={152}
          />
          <p className="cy-rft__eyebrow">{c.eyebrow}</p>
          <h2 className="cy-rft__heading">{c.heading}</h2>
          <p className="cy-rft__desc">{c.description}</p>
          <div className="cy-rft__cta-wrapper">
            <a
              href={"#" + PRODUCT_ANCHOR_ID}
              className="cy-rft__cta-btn"
            >
              {c.cta}
            </a>
          </div>
        </div>
        <div className="cy-rft__image-wrap">
          <img
            className="cy-rft__person-img"
            src={m.person}
            alt={c.personAlt}
            loading="lazy"
            width={400}
          />
        </div>
      </div>
    </div>
  )
}
