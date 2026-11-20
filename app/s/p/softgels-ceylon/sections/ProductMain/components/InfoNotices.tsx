import { Fragment } from "react"

import copy from "../../../copy.json"
import media from "../../../media.json"

export function InfoNotices(): React.JSX.Element {
  const c = copy.productMain
  const m = media.productMain

  return (
    <>
      <div className="cy-pm-subs">
        <div className="cy-pm-subs-inner">
          {c.subscription.map((item, index) => (
            <Fragment key={item.text}>
              {index > 0 && <span className="cy-pm-subs-divider">|</span>}
              <div className="cy-pm-subs-item">
                <img
                  className="cy-pm-subs-icon"
                  src={m.subscriptionIcons[index]}
                  alt={item.iconAlt}
                  loading="lazy"
                  width={32}
                  height={32}
                />
                <span className="cy-pm-subs-text">{item.text}</span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="cy-pm-gc90">
        <div className="cy-pm-gc90-badge">
          <img
            src={m.guaranteeBadge}
            alt={c.guarantee.badgeAlt}
            loading="lazy"
            width={60}
            height={60}
          />
        </div>
        <div className="cy-pm-gc90-text">
          <p className="cy-pm-gc90-heading">{c.guarantee.heading}</p>
          <p className="cy-pm-gc90-body">
            <span className="cy-pm-gc90-lead">{c.guarantee.lead}</span>
            {c.guarantee.body}
          </p>
        </div>
      </div>
      <div className="cy-pm-sw">
        <div className="cy-pm-sw-box">
          <div
            className="cy-pm-sw-icon"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="#EF4444"
              />
              <path
                d="M12 8V13M12 16H12.01"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="cy-pm-sw-content">
            <h3 className="cy-pm-sw-title">{c.warning.title}</h3>
            <div className="cy-pm-sw-body">{c.warning.body}</div>
          </div>
        </div>
      </div>
    </>
  )
}
