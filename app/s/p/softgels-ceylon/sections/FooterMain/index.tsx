"use client"

import { useState } from "react"

import copy from "../../copy.json"
import media from "../../media.json"

import "./footer-main.css"

function MailIcon(): React.JSX.Element {
  return (
    <svg
      className="cy-fm-contact-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        d="M4 4h16v16H4z"
        stroke="none"
        fill="none"
      />
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  )
}

function ClockIcon(): React.JSX.Element {
  return (
    <svg
      className="cy-fm-contact-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
      />
      <path d="M12 7v5l3 3" />
    </svg>
  )
}

function PhoneIcon(): React.JSX.Element {
  return (
    <svg
      className="cy-fm-contact-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function FooterMain(): React.JSX.Element {
  const c = copy.footerMain
  const m = media.footerMain
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
  }

  return (
    <footer className="cy-fm">
      <div className="cy-fm-inner">
        <div className="cy-fm-grid">
          <div className="cy-fm-brand">
            <img
              className="cy-fm-logo"
              src={m.logo}
              alt={c.logoAlt}
              loading="lazy"
              width={220}
              height={73}
            />
            <div className="cy-fm-tagline">
              <p>{c.tagline}</p>
            </div>
            <hr className="cy-fm-brand-divider" />
            <div className="cy-fm-contact">
              <div className="cy-fm-contact-row">
                <MailIcon />
                <a href={`mailto:${c.email}`}>{c.email}</a>
              </div>
              <div className="cy-fm-contact-row">
                <ClockIcon />
                <div className="cy-fm-contact-hours">
                  <p>{c.hours}</p>
                </div>
              </div>
            </div>
            <div className="cy-fm-contact-row cy-fm-callback">
              <PhoneIcon />
              <div>
                <p dangerouslySetInnerHTML={{ __html: c.callbackHtml }} />
              </div>
            </div>
          </div>

          {c.columns.map((col) => (
            <div
              key={col.heading}
              className={`cy-fm-col cy-fm-col--${col.area}`}
            >
              <div className="cy-fm-link-heading">
                <p>{col.heading}</p>
              </div>
              <div className="cy-fm-rich-links">
                {col.links.map((link) => (
                  <p key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="cy-fm-subscribe">
            <div className="cy-fm-newsletter-heading">
              <p>{c.newsletter.heading}</p>
            </div>
            <div className="cy-fm-newsletter-subtext">
              <p>{c.newsletter.subtext}</p>
            </div>
            <form onSubmit={onSubmit}>
              <div className="cy-fm-newsletter-form">
                <input
                  type="email"
                  name="email"
                  placeholder={c.newsletter.placeholder}
                  required
                  aria-label={c.newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="cy-fm-newsletter-btn"
                >
                  {c.newsletter.button}
                </button>
              </div>
            </form>
            {submitted && (
              <div
                className="cy-fm-newsletter-success"
                role="status"
              >
                <p>{c.newsletter.success}</p>
              </div>
            )}
            <div className="cy-fm-newsletter-fineprint">
              <p>{c.newsletter.fineprint}</p>
            </div>
          </div>
        </div>
        <hr className="cy-fm-divider" />
        <div className="cy-fm-disclosure">
          <p dangerouslySetInnerHTML={{ __html: c.disclosureHtml }} />
        </div>
      </div>
    </footer>
  )
}
