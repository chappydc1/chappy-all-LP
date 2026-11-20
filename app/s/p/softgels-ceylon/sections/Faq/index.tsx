"use client"

import { useState } from "react"

import copy from "../../copy.json"
import "./faq.css"

const c = copy.faq

export function Faq(): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="cy-faq">
      <div className="cy-faq__inner">
        <h2 className="cy-faq__heading">
          <span className="cy-faq__heading-first">{c.headingFirst}</span>{" "}
          <span className="cy-faq__heading-rest">{c.headingRest}</span>
        </h2>
        <div
          className="cy-faq__list"
          role="list"
        >
          {c.items.map((item, i) => {
            const isOpen = openIndex === i
            const answerId = `cy-faq-answer-${i + 1}`
            return (
              <div
                key={item.question}
                className={isOpen ? "cy-faq__item is-open" : "cy-faq__item"}
                role="listitem"
              >
                <button
                  type="button"
                  className="cy-faq__btn"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="cy-faq__btn-text">{item.question}</span>
                  <span
                    className="cy-faq__icon-wrap"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div
                  id={answerId}
                  className="cy-faq__answer"
                  aria-hidden={!isOpen}
                >
                  <div className="cy-faq__answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
