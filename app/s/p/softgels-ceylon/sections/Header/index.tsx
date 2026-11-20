"use client"

import { useEffect, useRef, useState } from "react"

import copy from "../../copy.json"
import { DEFAULT_CART_URL } from "../../lib/checkout"
import media from "../../media.json"
import {
  AccountIcon,
  CartIcon,
  CloseIcon,
  HamburgerIcon,
  SearchIcon,
} from "./components/icons"

import "./header.css"

export function Header(): React.JSX.Element {
  const c = copy.header
  const m = media.header
  const wrapperRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [drawerHeight, setDrawerHeight] = useState("100vh")
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastScroll = window.scrollY
    const onScroll = (): void => {
      const section = sectionRef.current
      if (!section) {
        return
      }
      const scrollTop = window.scrollY
      const offsetTop = section.offsetTop
      const bottom = offsetTop + section.offsetHeight
      if (scrollTop > lastScroll && scrollTop > bottom) {
        setHidden(true)
      } else if (scrollTop < lastScroll || scrollTop <= offsetTop) {
        setHidden(false)
      }
      lastScroll = scrollTop
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) {
      return
    }
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setOpen(false)
      }
    }
    const onResize = (): void => {
      if (window.innerWidth >= 990) {
        setOpen(false)
      }
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    window.addEventListener("resize", onResize)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("resize", onResize)
    }
  }, [open])

  const toggleMenu = (): void => {
    const bottom = wrapperRef.current?.getBoundingClientRect().bottom ?? 0
    setDrawerHeight(`calc(100dvh - ${Math.max(bottom, 0)}px)`)
    setHidden(false)
    setOpen((v) => !v)
  }

  return (
    <div
      ref={sectionRef}
      className={`cy-hd-section${hidden && !open ? " cy-hd-section--hidden" : ""}`}
    >
      <div
        ref={wrapperRef}
        className="cy-hd-wrapper"
      >
        <header className="cy-hd">
          <div className="cy-hd-drawer">
            <button
              type="button"
              className={`cy-hd-icon cy-hd-icon--menu${open ? " is-open" : ""}`}
              aria-label={c.menuLabel}
              aria-expanded={open}
              aria-controls="cy-hd-menu-drawer"
              onClick={toggleMenu}
            >
              <span>
                <HamburgerIcon />
                <CloseIcon />
              </span>
            </button>
          </div>

          <nav className="cy-hd-inline-menu">
            <ul
              className="cy-hd-list-menu"
              role="list"
            >
              {c.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="cy-hd-menu-item"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={c.homeUrl}
            className="cy-hd-heading-link"
          >
            <div className="cy-hd-logo-wrapper">
              <img
                src={m.logo}
                alt={c.logoAlt}
                width={180}
                height={60}
                className="cy-hd-logo"
              />
            </div>
          </a>

          <div className="cy-hd-icons">
            <button
              type="button"
              className="cy-hd-icon cy-hd-icon--search"
              aria-label={c.searchLabel}
            >
              <span className="cy-hd-svg-wrapper">
                <SearchIcon />
              </span>
            </button>
            <a
              href={c.accountUrl}
              className="cy-hd-icon cy-hd-icon--account"
              rel="nofollow"
            >
              <span className="cy-hd-svg-wrapper">
                <AccountIcon />
              </span>
              <span className="ceylon-visually-hidden">{c.accountLabel}</span>
            </a>
            <a
              href={DEFAULT_CART_URL}
              className="cy-hd-icon cy-hd-icon--cart"
            >
              <span className="cy-hd-svg-wrapper">
                <CartIcon />
              </span>
              <span className="ceylon-visually-hidden">{c.cartLabel}</span>
            </a>
          </div>
        </header>

        {open && (
          <button
            type="button"
            className="cy-hd-overlay"
            aria-label={c.menuLabel}
            style={{ height: drawerHeight }}
            onClick={() => setOpen(false)}
          />
        )}

        <div
          id="cy-hd-menu-drawer"
          className={`cy-hd-menu-drawer${open ? " is-open" : ""}`}
          style={{ height: drawerHeight }}
          aria-hidden={!open}
        >
          <div className="cy-hd-drawer-inner">
            <nav className="cy-hd-drawer-nav">
              <ul
                className="cy-hd-drawer-menu"
                role="list"
              >
                {c.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="cy-hd-drawer-item"
                      tabIndex={open ? undefined : -1}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="cy-hd-utility-links">
              <a
                href={c.accountUrl}
                className="cy-hd-drawer-account"
                rel="nofollow"
                tabIndex={open ? undefined : -1}
              >
                <span className="cy-hd-drawer-account-icon">
                  <AccountIcon />
                </span>
                {c.accountLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
