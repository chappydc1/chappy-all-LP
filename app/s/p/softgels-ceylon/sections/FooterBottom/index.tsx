import copy from "../../copy.json"
import { PAYMENT_ICONS } from "./components/payment-icons"

import "./footer-bottom.css"

export function FooterBottom(): React.JSX.Element {
  const c = copy.footerBottom

  return (
    <footer className="cy-fbt">
      <div className="cy-fbt-content">
        <div className="cy-fbt-wrapper">
          <div className="cy-fbt-column">
            <div className="cy-fbt-payment">
              <span className="ceylon-visually-hidden">{c.paymentLabel}</span>
              <ul
                className="cy-fbt-list-payment"
                role="list"
              >
                {c.payments.map((p) => (
                  <li
                    key={p.key}
                    className="cy-fbt-list-payment-item"
                    title={p.label}
                  >
                    {PAYMENT_ICONS[p.key]}
                    <span className="ceylon-visually-hidden">{p.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="cy-fbt-wrapper cy-fbt-wrapper--center">
          <div className="cy-fbt-copyright">
            <small className="cy-fbt-copyright-content">
              {c.copyrightPrefix} <a href={c.brandUrl}>{c.brand}</a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}
