import copy from "../../../copy.json"

const icons = [
  <path
    key="refill"
    d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"
  />,
  <g key="clock">
    <circle
      cx="12"
      cy="12"
      r="10"
    />
    <polyline points="12 6 12 12 16 14" />
  </g>,
]

export function TrustBadges(): React.JSX.Element {
  return (
    <div className="cy-pc__trust">
      <div className="cy-pc__trust-wrap">
        {copy.pricingCards.trustBadges.map((label, i) => (
          <div
            key={label}
            className="cy-pc__trust-item"
          >
            <div className="cy-pc__trust-icon-wrap">
              <svg
                className="cy-pc__trust-icon"
                viewBox="0 0 24 24"
              >
                {icons[i]}
              </svg>
            </div>
            <div className="cy-pc__trust-text">
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
