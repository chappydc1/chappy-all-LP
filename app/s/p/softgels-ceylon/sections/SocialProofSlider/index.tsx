import copy from "../../copy.json"
import media from "../../media.json"

import "./social-proof-slider.css"

export function SocialProofSlider(): React.JSX.Element {
  const c = copy.socialProofSlider
  const images = media.socialProofSlider.images
  const loop = [...images, ...images]

  return (
    <section className="cy-social">
      <div className="cy-social-container">
        <div
          className="cy-social-stars"
          aria-hidden="true"
        >
          {c.stars}
        </div>
        <h2 className="cy-social-title">
          {c.titleLead} <span>{c.titleAccent}</span>
        </h2>
        <p className="cy-social-description">{c.description}</p>
      </div>

      <div className="cy-social-slider">
        <div className="cy-social-track">
          {loop.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="cy-social-slide"
              aria-hidden={i >= images.length ? true : undefined}
            >
              <img
                src={src}
                alt=""
                width={1024}
                height={1024}
                loading={i % images.length < 4 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
