import copy from "../../copy.json"
import media from "../../media.json"

import "./feel-better.css"

export function FeelBetter(): React.JSX.Element {
  const c = copy.feelBetter
  const m = media.feelBetter

  return (
    <section className="cy-fb">
      <div className="cy-fb-container">
        <div className="cy-fb-top-text">
          <h2>{c.heading}</h2>
          <p>{c.subheading}</p>
        </div>
        <div className="cy-fb-content">
          <div className="cy-fb-grid">
            {c.features.map((feature, i) => (
              <div
                key={feature}
                className="cy-fb-box"
              >
                <img
                  src={m.icons[i]}
                  width={100}
                  height={100}
                  alt={feature}
                  className="cy-fb-icon"
                  loading="lazy"
                />
                <h4>{feature}</h4>
              </div>
            ))}
          </div>
          <div className="cy-fb-image">
            <img
              src={m.product}
              width={800}
              height={800}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
