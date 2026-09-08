"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";

const FLAG_SPRITE = "/images/clickbank-checkout/flags.png";

type Country = { code: string; name: string; dial: string; pos: number };

const COUNTRIES: Country[] = [
  { code: "US", name: "United States", dial: "+1", pos: -5373 },
  { code: "GB", name: "United Kingdom", dial: "+44", pos: -1841 },
  { code: "CA", name: "Canada", dial: "+1", pos: -834 },
  { code: "AU", name: "Australia", dial: "+61", pos: -286 },
  { code: "NZ", name: "New Zealand", dial: "+64", pos: -3921 },
  { code: "IE", name: "Ireland", dial: "+353", pos: -2413 },
  { code: "MX", name: "Mexico", dial: "+52", pos: -3622 },
  { code: "FR", name: "France", dial: "+33", pos: -1775 },
  { code: "DE", name: "Germany", dial: "+49", pos: -1291 },
  { code: "IT", name: "Italy", dial: "+39", pos: -2589 },
  { code: "ES", name: "Spain", dial: "+34", pos: -1577 },
  { code: "BR", name: "Brazil", dial: "+55", pos: -680 },
  { code: "IN", name: "India", dial: "+91", pos: -2479 },
  { code: "CN", name: "China", dial: "+86", pos: -1049 },
  { code: "JP", name: "Japan", dial: "+81", pos: -2677 },
  { code: "KR", name: "South Korea", dial: "+82", pos: -2853 },
  { code: "SG", name: "Singapore", dial: "+65", pos: -4515 },
  { code: "HK", name: "Hong Kong SAR China", dial: "+852", pos: -2237 },
  { code: "ZA", name: "South Africa", dial: "+27", pos: -5698 },
  { code: "NG", name: "Nigeria", dial: "+234", pos: -3774 },
  { code: "PH", name: "Philippines", dial: "+63", pos: -4053 },
  { code: "PK", name: "Pakistan", dial: "+92", pos: -4075 },
  { code: "BD", name: "Bangladesh", dial: "+880", pos: -418 },
  { code: "ID", name: "Indonesia", dial: "+62", pos: -2391 },
  { code: "MY", name: "Malaysia", dial: "+60", pos: -3644 },
  { code: "TH", name: "Thailand", dial: "+66", pos: -4999 },
  { code: "VN", name: "Vietnam", dial: "+84", pos: -5544 },
  { code: "AR", name: "Argentina", dial: "+54", pos: -220 },
  { code: "CO", name: "Colombia", dial: "+57", pos: -1071 },
  { code: "CL", name: "Chile", dial: "+56", pos: -1005 },
  { code: "PE", name: "Peru", dial: "+51", pos: -3987 },
  { code: "NL", name: "Netherlands", dial: "+31", pos: -3818 },
  { code: "BE", name: "Belgium", dial: "+32", pos: -440 },
  { code: "SE", name: "Sweden", dial: "+46", pos: -4493 },
  { code: "NO", name: "Norway", dial: "+47", pos: -3840 },
  { code: "DK", name: "Denmark", dial: "+45", pos: -1357 },
  { code: "FI", name: "Finland", dial: "+358", pos: -1665 },
  { code: "PL", name: "Poland", dial: "+48", pos: -4097 },
  { code: "PT", name: "Portugal", dial: "+351", pos: -4207 },
  { code: "CH", name: "Switzerland", dial: "+41", pos: -944 },
  { code: "AT", name: "Austria", dial: "+43", pos: -264 },
  { code: "RU", name: "Russia", dial: "+7", pos: -4361 },
  { code: "TR", name: "Turkey", dial: "+90", pos: -5153 },
  { code: "SA", name: "Saudi Arabia", dial: "+966", pos: -4405 },
  { code: "AE", name: "United Arab Emirates", dial: "+971", pos: -44 },
  { code: "EG", name: "Egypt", dial: "+20", pos: -1511 },
  { code: "IL", name: "Israel", dial: "+972", pos: -2435 },
  { code: "GH", name: "Ghana", dial: "+233", pos: -1951 },
  { code: "KE", name: "Kenya", dial: "+254", pos: -2699 },
  { code: "UA", name: "Ukraine", dial: "+380", pos: -5263 },
];

function FlagSprite({ pos }: { pos: number }) {
  return (
    <div
      style={{
        width: 20,
        height: 15,
        backgroundImage: `url('${FLAG_SPRITE}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "5762px 15px",
        backgroundPosition: `${pos}px 0px`,
        display: "inline-block",
        flexShrink: 0,
      }}
    />
  );
}

type Props = { id?: string; required?: boolean };

export const ClickbankPhoneInput = ({ id = "phone", required }: Props): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Country>(COUNTRIES[0]);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filtered = search
    ? COUNTRIES.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dial.includes(search)
      )
    : COUNTRIES;

  useEffect(() => {
    if (open && searchRef.current) {
      searchRef.current.focus();
      setFocusedIndex(filtered.findIndex((c) => c.code === selected.code));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Scroll focused item into view
  useEffect(() => {
    if (!open || !listRef.current) return;
    const item = listRef.current.children[focusedIndex] as HTMLElement | undefined;
    item?.scrollIntoView({ block: "nearest" });
  }, [focusedIndex, open]);

  const selectCountry = (country: Country): void => {
    setSelected(country);
    setOpen(false);
    setSearch("");
  };

  const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[focusedIndex]) selectCountry(filtered[focusedIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
      setSearch("");
    }
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div
        className={`group relative flex border bg-white ${
          focused ? "border-[#2c20df]" : "border-gray-400"
        }`}
      >
        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-3 top-2 z-10 text-xs font-bold ${
            focused ? "text-[#2c20df]" : "text-[#3f3d5c]"
          }`}
        >
          Phone Number{required ? "*" : ""}
        </label>

        <button
          type="button"
          aria-label="Selected country"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex shrink-0 cursor-pointer items-center gap-1.5 pb-2 pl-3 pr-3 pt-6 focus:outline-none"
        >
          <FlagSprite pos={selected.pos} />
          <svg
            className="h-2 w-2 text-[#3f3d5c]"
            viewBox="0 0 10 6"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M0 0l5 6 5-6H0z" />
          </svg>
        </button>

        <div className="flex h-14 flex-1 items-end pb-2 pr-3 pt-6">
          <input
            id={id}
            type="tel"
            name="phone"
            required={required}
            placeholder="(201) 555-0123"
            autoComplete="tel-national"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent text-base text-[#3f3d5c] placeholder:text-gray-400 caret-[#3f3d5c] outline-none"
          />
        </div>
      </div>

      {open && (
        <div className="absolute left-0 top-full z-50 w-full border border-gray-300 bg-white shadow-md">
          <input
            ref={searchRef}
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setFocusedIndex(0); }}
            onKeyDown={handleSearchKeyDown}
            aria-autocomplete="list"
            aria-controls="cb-country-listbox"
            className="block w-full border-b border-gray-200 px-3 py-2 text-sm text-[#3f3d5c] outline-none"
          />
          <ul
            ref={listRef}
            id="cb-country-listbox"
            role="listbox"
            aria-label="List of countries"
            className="max-h-[200px] overflow-y-auto"
          >
            {filtered.map((country, idx) => (
              <li
                key={country.code}
                role="option"
                tabIndex={0}
                aria-selected={selected.code === country.code}
                onClick={() => selectCountry(country)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectCountry(country); }
                  else if (e.key === "ArrowDown") { e.preventDefault(); setFocusedIndex(Math.min(idx + 1, filtered.length - 1)); (listRef.current?.children[idx + 1] as HTMLElement | undefined)?.focus(); }
                  else if (e.key === "ArrowUp") { e.preventDefault(); if (idx === 0) { searchRef.current?.focus(); } else { setFocusedIndex(idx - 1); (listRef.current?.children[idx - 1] as HTMLElement | undefined)?.focus(); } }
                  else if (e.key === "Escape") { setOpen(false); setSearch(""); }
                }}
                className={`flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${
                  idx === focusedIndex || selected.code === country.code ? "bg-gray-50 font-semibold" : ""
                }`}
              >
                <FlagSprite pos={country.pos} />
                <span className="flex-1 text-[#3f3d5c]">{country.name}</span>
                <span className="text-gray-400">{country.dial}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
