import copy from "../../copy.json"
import media from "../../media.json"
import { PRODUCT_ANCHOR_ID } from "../../lib/checkout"
import "./comparison-table.css"

const c = copy.comparisonTable
const m = media.comparisonTable

export function ComparisonTable(): React.JSX.Element {
  return (
    <section className="cy-cmp">
      <div className="cy-cmp__inner">
        <div className="cy-cmp__table-wrap">
          <table className="cy-cmp__table">
            <thead>
              <tr>
                <th className="cy-cmp__thead-left">
                  <img
                    className="cy-cmp__header-img"
                    src={m.brandImage}
                    alt={c.brandLabel}
                    loading="lazy"
                    width={120}
                  />
                  <span className="cy-cmp__col-label">{c.brandLabel}</span>
                </th>
                <th className="cy-cmp__thead-right">
                  <img
                    className="cy-cmp__header-img"
                    src={m.competitorImage}
                    alt={c.competitorLabel}
                    loading="lazy"
                    width={100}
                  />
                  <span className="cy-cmp__col-label">{c.competitorLabel}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map((row, i) => (
                <tr key={row.brand}>
                  <td className="cy-cmp__td-left">
                    <img
                      className="cy-cmp__icon"
                      src={m.rowIcons[i]}
                      alt={row.brand}
                      loading="lazy"
                      width={26}
                    />
                    {row.brand}
                  </td>
                  <td className="cy-cmp__td-right">
                    <span className="cy-cmp__cross">
                      <svg
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                    <br />
                    {row.competitor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cy-cmp__info">
          <h2 className="cy-cmp__info-heading">{c.heading}</h2>
          <ul className="cy-cmp__checklist">
            {c.checklist.map((item) => (
              <li
                key={item.bold}
                className="cy-cmp__check-item"
              >
                <span className="cy-cmp__check-icon">
                  <svg
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="cy-cmp__check-label">
                  <strong>{item.bold}</strong>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
          <div className="cy-cmp__cta-wrap">
            <a
              className="cy-cmp__cta-btn"
              href={"#" + PRODUCT_ANCHOR_ID}
            >
              {c.cta}
            </a>
            <div className="cy-cmp__guarantee">
              <svg viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 15l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8l-8 8z" />
              </svg>
              {c.guarantee}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
