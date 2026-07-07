"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// ── Design tokens ─────────────────────────────────────────────────────────────

const G = "#3a9c3a";
const GD = "#2a7a2a";
const GL = "#e6f4e6";
const BG = "#ede8e0";
const BORDER = "#ddd7cf";
const BADGE = "#ccc6be";
const WHITE = "#ffffff";
const TEXT = "#1a1a1a";
const TMED = "#555555";
const TLIT = "#888888";

// ── Assets ────────────────────────────────────────────────────────────────────

const LOGO =
  "/images/chappy2/52e09de0-original.webp";
const IMG_SUM_A =
  "/images/chappy2/fae28bb8-original.webp";
const IMG_SUM_B =
  "/images/chappy2/1ca733b1-original.webp";
const IMG_PRODUCT =
  "/images/chappy2/82bed9cf-original.webp";
const IMG_OFFER =
  "/images/chappy2/6e36d176-original.webp";

// ── Flow definition ───────────────────────────────────────────────────────────

type Opt = { emoji?: string; text: string };

type Screen =
  | { type: "welcome" }
  | { type: "question"; title: string; subtitle?: string; opts: Opt[] }
  | { type: "multi"; title: string; opts: Opt[] }
  | { type: "info"; title: string; body: string }
  | { type: "analyzing" }
  | { type: "finalizing" }
  | { type: "summary" }
  | { type: "product" }
  | { type: "offer" };

const FLOW: Screen[] = [
  { type: "welcome" },
  {
    type: "question",
    title: "How old are you?",
    opts: [
      { text: "18–29 Years Old" },
      { text: "30–39 Years Old" },
      { text: "40–49 Years Old" },
      { text: "50+ Years Old" },
      { text: "Skip Question" },
    ],
  },
  {
    type: "multi",
    title: "Which of these gut or fiber-related concerns do you experience?",
    opts: [
      { emoji: "🤢", text: "Bloating or gas" },
      { emoji: "💩", text: "Irregular bathroom habits" },
      { emoji: "😮‍💨", text: "Afternoon energy crashes" },
      { emoji: "🍪", text: "Cravings that are hard to control" },
      { emoji: "🫠", text: "Feeling sluggish after meals" },
      { emoji: "🏋", text: "Trouble losing weight" },
    ],
  },
  {
    type: "question",
    title: "How does poor digestion show up for you?",
    opts: [
      { emoji: "⬇️", text: "Energy tanks" },
      { emoji: "😶‍🌫️", text: "Trouble focusing or mental clarity" },
      { emoji: "😡", text: "Mood dips or irritability" },
      { emoji: "😵‍💫", text: 'I feel "off" but can\'t pinpoint it' },
      { text: "Other" },
    ],
  },
  {
    type: "question",
    title: "How does your body usually feel a few hours after lunch?",
    opts: [
      { emoji: "🫠", text: "Bloated or sluggish" },
      { emoji: "😐", text: "Heavy, but still functional" },
      { emoji: "🙂", text: "Pretty normal" },
      { emoji: "😁", text: "Light and energized" },
      { text: "I skip lunch" },
    ],
  },
  {
    type: "question",
    title: "When did you first notice your digestion or energy wasn't what it used to be?",
    opts: [
      { text: "Recently (last few months)" },
      { text: "Sometime in the past year" },
      { text: "It's been building for a while" },
      { text: "Honestly, I can't remember feeling different" },
    ],
  },
  {
    type: "info",
    title: "This is a common way fiber gaps show up!",
    body: "Not dramatically.\n\nJust slowly — through digestion issues, energy dips, and that low-level \"something's off\" feeling in your gut.\n\nYou're not alone — and you're in the right place.\n\nMore than 1 million people have turned to Grüns as part of a daily gut-support routine.",
  },
  {
    type: "question",
    title: "How often do you eat high-fiber foods that support your digestion?",
    subtitle: "(Foods like vegetables, legumes, whole grains are high in fiber)",
    opts: [
      { text: "Rarely" },
      { text: "A few times per week" },
      { text: "Most days" },
      { text: "At nearly every meal" },
      { text: "Almost Never" },
    ],
  },
  {
    type: "multi",
    title: "Have you tried addressing your gut health issues with any of the following?",
    opts: [
      { emoji: "💊", text: "Fiber supplements (Metamucil, etc.)" },
      { emoji: "🍵", text: "Greens powders" },
      { emoji: "🦠", text: "Probiotics" },
      { emoji: "🥦", text: "Eating more vegetables" },
      { text: "Nothing yet" },
    ],
  },
  {
    type: "question",
    title: "How would you describe your daily lifestyle?",
    opts: [
      { emoji: "🫨", text: "High stress, low recovery" },
      { emoji: "😕", text: "Moderate stress" },
      { emoji: "🙂", text: "Active and balanced" },
      { emoji: "😁", text: "Very health-focused" },
    ],
  },
  {
    type: "question",
    title: "How many hours of quality sleep do you get per night?",
    opts: [
      { text: "Less than 5 hours" },
      { text: "5–6 hours" },
      { text: "7–8 hours" },
      { text: "More than 8 hours" },
    ],
  },
  { type: "analyzing" },
  {
    type: "question",
    title: "Has anyone in your immediate family struggled with digestion or gut issues?",
    opts: [
      { text: "Yes" },
      { text: "No" },
      { text: "Not sure" },
    ],
  },
  { type: "finalizing" },
  { type: "summary" },
  { type: "product" },
  { type: "offer" },
];

const Q_COUNT = FLOW.filter((s) => s.type === "question" || s.type === "multi").length;

const FIN_STAGES = [
  { label: "Evaluating diet quality", popupAt: 0, question: "" },
  { label: "Looking at digestion and energy patterns", popupAt: 0, question: "" },
  { label: "Comparing intake vs. recommended levels", popupAt: 0, question: "" },
  {
    label: "Finalizing calculations",
    popupAt: 55,
    question: "Do you want a routine that takes under 30 seconds a day?",
  },
  {
    label: "Almost There",
    popupAt: 40,
    question: "Are you open to a subscription for the best savings?",
  },
  { label: "Success", popupAt: 0, question: "" },
] as const;

// ── Shared components ─────────────────────────────────────────────────────────

function CtaBtn({
  label,
  onClick,
  disabled,
  href,
}: {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
}) {
  const [hov, setHov] = useState(false);
  const base: React.CSSProperties = {
    display: "block",
    width: "100%",
    backgroundColor: disabled ? "#bbb" : hov ? GD : G,
    color: WHITE,
    border: "none",
    borderRadius: "999px",
    padding: "17px 32px",
    fontSize: "17px",
    fontWeight: 700,
    cursor: disabled ? "default" : "pointer",
    transition: "background-color 0.15s, transform 0.1s",
    transform: hov && !disabled ? "translateY(-1px)" : "translateY(0)",
    fontFamily: '"Open Sans", sans-serif',
    textAlign: "center",
    textDecoration: "none",
    boxSizing: "border-box",
    letterSpacing: "0.01em",
  };
  if (href) {
    return (
      <a href={href} style={base} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
        {label}
      </a>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={base}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {label}
    </button>
  );
}

function BackBtn({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        background: "none",
        border: "none",
        fontSize: "14px",
        fontWeight: 600,
        color: disabled ? "#bbb" : hov ? GD : TMED,
        cursor: disabled ? "default" : "pointer",
        padding: 0,
        fontFamily: '"Open Sans", sans-serif',
        transition: "color 0.15s",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      ← Back
    </button>
  );
}

function OptBtn({
  opt,
  num,
  selected,
  flashing,
  onClick,
  isMulti,
}: {
  opt: Opt;
  num: number;
  selected?: boolean;
  flashing?: boolean;
  onClick: () => void;
  isMulti?: boolean;
}) {
  const [hov, setHov] = useState(false);
  const active = hov || selected || flashing;

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: opt.emoji ? "12px" : "14px",
        width: "100%",
        minHeight: "58px",
        padding: "12px 16px 12px 14px",
        backgroundColor: active ? GL : WHITE,
        border: `2px solid ${active ? G : BORDER}`,
        borderRadius: "12px",
        cursor: "pointer",
        textAlign: "left",
        transition: "background-color 0.15s, border-color 0.15s",
        boxSizing: "border-box",
      }}
    >
      {isMulti ? (
        <div
          style={{
            width: "22px",
            height: "22px",
            borderRadius: "5px",
            border: `2px solid ${selected ? G : BADGE}`,
            backgroundColor: selected ? G : "transparent",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.15s",
          }}
        >
          {selected && (
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
              <path d="M1 4.5l3.5 3.5 6.5-7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ) : (
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: active ? G : BADGE,
            color: active ? WHITE : "#666",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "13px",
            fontWeight: 700,
            flexShrink: 0,
            transition: "background-color 0.15s, color 0.15s",
            fontFamily: '"Open Sans", sans-serif',
          }}
        >
          {num}
        </div>
      )}
      {opt.emoji && (
        <span style={{ fontSize: "20px", flexShrink: 0, lineHeight: 1 }}>{opt.emoji}</span>
      )}
      <span
        style={{
          fontSize: "15px",
          fontWeight: 500,
          color: TEXT,
          lineHeight: 1.4,
          fontFamily: '"Open Sans", sans-serif',
        }}
      >
        {opt.text}
      </span>
    </button>
  );
}

// ── Individual screens ────────────────────────────────────────────────────────

function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div style={{ paddingTop: "24px", textAlign: "center" }}>
      <h1
        style={{
          fontSize: "clamp(22px, 5vw, 34px)",
          fontWeight: 800,
          color: TEXT,
          lineHeight: 1.2,
          margin: "0 0 18px",
          fontFamily: '"Open Sans", sans-serif',
        }}
      >
        Find out if low fiber is behind your bloating, irregularity, &amp; low energy
      </h1>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: WHITE,
          border: `1.5px solid ${BORDER}`,
          borderRadius: "999px",
          padding: "10px 18px",
          marginBottom: "32px",
        }}
      >
        <span style={{ fontSize: "16px" }}>✅</span>
        <span style={{ fontSize: "13px", fontWeight: 600, color: TMED, fontFamily: '"Open Sans", sans-serif' }}>
          Trusted by 1M+ customers
        </span>
      </div>
      <CtaBtn label="Take the assessment →" onClick={onStart} />
    </div>
  );
}

function QuestionScreen({
  screen, flash, onAnswer, onBack, canBack,
}: {
  screen: Extract<Screen, { type: "question" }>;
  flash: string | null;
  onAnswer: (opt: string) => void;
  onBack: () => void;
  canBack: boolean;
}) {
  return (
    <div>
      <h2 style={{ fontSize: "clamp(19px, 4vw, 26px)", fontWeight: 700, color: TEXT, margin: "0 0 6px", lineHeight: 1.3, fontFamily: '"Open Sans", sans-serif' }}>
        {screen.title}
      </h2>
      {screen.subtitle ? (
        <p style={{ fontSize: "13px", color: TLIT, margin: "0 0 18px", fontStyle: "italic", fontFamily: '"Open Sans", sans-serif' }}>
          {screen.subtitle}
        </p>
      ) : (
        <div style={{ height: "14px" }} />
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
        {screen.opts.map((opt, i) => (
          <OptBtn key={opt.text} opt={opt} num={i + 1} flashing={flash === opt.text} onClick={() => onAnswer(opt.text)} />
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <BackBtn onClick={onBack} disabled={!canBack} />
      </div>
    </div>
  );
}

function MultiScreen({
  screen, selected, onToggle, onContinue, onBack, canBack,
}: {
  screen: Extract<Screen, { type: "multi" }>;
  selected: string[];
  onToggle: (t: string) => void;
  onContinue: () => void;
  onBack: () => void;
  canBack: boolean;
}) {
  return (
    <div>
      <h2 style={{ fontSize: "clamp(19px, 4vw, 24px)", fontWeight: 700, color: TEXT, margin: "0 0 6px", lineHeight: 1.3, fontFamily: '"Open Sans", sans-serif' }}>
        {screen.title}
      </h2>
      <p style={{ fontSize: "13px", color: TLIT, margin: "0 0 14px", fontFamily: '"Open Sans", sans-serif' }}>
        Select all that apply
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginBottom: "18px" }}>
        {screen.opts.map((opt, i) => (
          <OptBtn key={opt.text} opt={opt} num={i + 1} selected={selected.includes(opt.text)} onClick={() => onToggle(opt.text)} isMulti />
        ))}
      </div>
      <CtaBtn label="Continue" onClick={onContinue} />
      <div style={{ marginTop: "16px" }}>
        <BackBtn onClick={onBack} disabled={!canBack} />
      </div>
    </div>
  );
}

function InfoScreen({ screen, onContinue }: { screen: Extract<Screen, { type: "info" }>; onContinue: () => void }) {
  return (
    <div style={{ paddingTop: "8px" }}>
      <div style={{ backgroundColor: WHITE, borderRadius: "20px", padding: "32px 26px", marginBottom: "22px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
        <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: GL, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 4v5m0 2.5v.5" stroke={G} strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
        <h2 style={{ fontSize: "clamp(20px, 4vw, 26px)", fontWeight: 700, color: TEXT, margin: "0 0 18px", lineHeight: 1.3, fontFamily: '"Open Sans", sans-serif' }}>
          {screen.title}
        </h2>
        {screen.body.split("\n\n").map((para, i, arr) => (
          <p key={i} style={{ fontSize: "15px", color: TMED, margin: i < arr.length - 1 ? "0 0 14px" : "0", lineHeight: 1.7, fontFamily: '"Open Sans", sans-serif' }}>
            {para}
          </p>
        ))}
      </div>
      <CtaBtn label="Continue" onClick={onContinue} />
    </div>
  );
}

function AnalyzingScreen({ progress }: { progress: number }) {
  return (
    <div style={{ paddingTop: "48px", textAlign: "center" }}>
      <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: GL, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <circle cx="15" cy="15" r="12" stroke={G} strokeWidth="2.5" strokeDasharray="6 3" />
          <circle cx="15" cy="15" r="5" fill={G} />
        </svg>
      </div>
      <h2 style={{ fontSize: "clamp(20px, 4vw, 28px)", fontWeight: 700, color: TEXT, margin: "0 0 14px", lineHeight: 1.3, fontFamily: '"Open Sans", sans-serif' }}>
        Analyzing your fiber intake profile…
      </h2>
      <p style={{ fontSize: "15px", color: TMED, margin: "0 0 36px", lineHeight: 1.65, fontFamily: '"Open Sans", sans-serif', maxWidth: "420px", marginLeft: "auto", marginRight: "auto" }}>
        Based on your answers so far, we're looking at patterns in digestion, energy, and daily habits to understand how consistently your body is getting fiber.
      </p>
      <div style={{ height: "10px", backgroundColor: "#d9d3cb", borderRadius: "999px", overflow: "hidden", maxWidth: "360px", margin: "0 auto" }}>
        <div style={{ height: "100%", width: `${progress}%`, backgroundColor: G, borderRadius: "999px", transition: "width 0.05s linear" }} />
      </div>
      <p style={{ fontSize: "13px", color: TLIT, marginTop: "10px", fontFamily: '"Open Sans", sans-serif' }}>
        {Math.round(progress)}%
      </p>
    </div>
  );
}

function FinalizingScreen({ progress, done, activeStage }: { progress: number[]; done: boolean[]; activeStage: number }) {
  return (
    <div style={{ paddingTop: "32px" }}>
      <h2 style={{ fontSize: "clamp(22px, 4.5vw, 32px)", fontWeight: 800, color: TEXT, margin: "0 0 2px", lineHeight: 1.2, fontFamily: '"Open Sans", sans-serif' }}>
        Building your fiber
      </h2>
      <h2 style={{ fontSize: "clamp(22px, 4.5vw, 32px)", fontWeight: 800, color: G, margin: "0 0 36px", lineHeight: 1.2, fontFamily: '"Open Sans", sans-serif' }}>
        intake profile…
      </h2>
      {FIN_STAGES.map((stage, i) => {
        const prog = progress[i];
        const isDone = done[i];
        const isActive = i === activeStage;
        const isPending = !isDone && !isActive;
        return (
          <div key={stage.label} style={{ marginBottom: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ fontSize: "14px", fontWeight: isDone ? 600 : isActive ? 600 : 400, color: isDone ? GD : isActive ? TEXT : "#aaa8a3", fontFamily: '"Open Sans", sans-serif', transition: "color 0.4s" }}>
                {stage.label}
              </span>
              {isDone ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" fill={G} />
                  <path d="M6 10.5l3 3 5.5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : isActive && prog > 0 ? (
                <span style={{ fontSize: "12px", fontWeight: 700, color: G, fontFamily: '"Open Sans", sans-serif' }}>
                  {Math.round(prog)}%
                </span>
              ) : null}
            </div>
            <div style={{ height: "9px", backgroundColor: isPending ? "#e8e3dc" : "#d9d3cb", borderRadius: "999px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${prog}%`, backgroundColor: isDone ? GD : G, borderRadius: "999px", transition: "width 0.05s linear" }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SummaryScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <div style={{ paddingTop: "12px", textAlign: "center" }}>
      <h2 style={{ fontSize: "clamp(22px, 4.5vw, 30px)", fontWeight: 800, color: TEXT, margin: "0 0 24px", fontFamily: '"Open Sans", sans-serif' }}>
        Summary of your profile
      </h2>
      {[IMG_SUM_A, IMG_SUM_B].map((src, i) => (
        <img key={i} src={src} alt="" style={{ width: "100%", maxWidth: "440px", borderRadius: "16px", display: "block", margin: "0 auto 14px" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
      ))}
      <div style={{ height: "10px" }} />
      <CtaBtn label="Continue" onClick={onContinue} />
    </div>
  );
}

function ProductScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <div style={{ paddingTop: "12px" }}>
      <h2 style={{ fontSize: "clamp(20px, 4vw, 26px)", fontWeight: 700, color: TEXT, margin: "0 0 20px", lineHeight: 1.3, fontFamily: '"Open Sans", sans-serif' }}>
        Grüns gummies: the simplest way to close your fiber gap and improve your gut health.
      </h2>
      <img src={IMG_PRODUCT} alt="Grüns gummies" style={{ width: "100%", borderRadius: "16px", marginBottom: "18px", display: "block" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
      <div style={{ backgroundColor: WHITE, borderRadius: "16px", padding: "22px 20px", marginBottom: "22px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
        <p style={{ fontSize: "15px", color: TMED, margin: 0, lineHeight: 1.7, fontFamily: '"Open Sans", sans-serif' }}>
          <strong style={{ color: TEXT }}>Progress doesn't happen overnight.</strong>
          <br /><br />
          But when fiber intake becomes consistent, digestion and energy tend to stabilize gradually — often sooner than people expect.
        </p>
      </div>
      <CtaBtn label="Continue" onClick={onContinue} />
    </div>
  );
}

function OfferScreen() {
  return (
    <div style={{ paddingTop: "12px", textAlign: "center" }}>
      <img src={LOGO} alt="Grüns" style={{ height: "36px", objectFit: "contain", marginBottom: "20px" }} />
      <h2 style={{ fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 800, color: TEXT, margin: "0 0 14px", lineHeight: 1.25, fontFamily: '"Open Sans", sans-serif' }}>
        Transform Your Gut Health With Daily Fiber from Grüns
      </h2>
      <p style={{ fontSize: "15px", color: TMED, margin: "0 0 8px", lineHeight: 1.65, fontFamily: '"Open Sans", sans-serif' }}>
        <strong>Based on your profile, you qualify for up to 52% off your first order. Try it risk-free with our 30-day guarantee*.</strong>
      </p>
      <p style={{ fontSize: "14px", color: TMED, margin: "0 0 6px", fontFamily: '"Open Sans", sans-serif' }}>No extremes. No complicated routines.</p>
      <p style={{ fontSize: "14px", color: TMED, margin: "0 0 22px", fontFamily: '"Open Sans", sans-serif' }}>
        <strong>85k+ 5-star reviews, 4.8/5.0 on TrustPilot.</strong>
      </p>
      <img src={IMG_OFFER} alt="Grüns product" style={{ width: "100%", maxWidth: "400px", borderRadius: "16px", display: "block", margin: "0 auto 24px" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
      <CtaBtn label="Claim Your Discount →" href="/products/gruns-superfood-gummies#buybox" />
      <p style={{ fontSize: "11px", color: TLIT, marginTop: "14px", fontFamily: '"Open Sans", sans-serif' }}>
        *30-day money-back guarantee applies to first orders only.
      </p>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function GrunsQuizChappy2Page() {
  const [idx, setIdx] = useState(0);
  const [multiSel, setMultiSel] = useState<string[]>([]);
  const [flash, setFlash] = useState<string | null>(null);

  const [analyzingProg, setAnalyzingProg] = useState(0);
  const analyzingDone = useRef(false);

  const [finStage, setFinStage] = useState(0);
  const [finProg, setFinProg] = useState([0, 0, 0, 0, 0, 0]);
  const [finDone, setFinDone] = useState([false, false, false, false, false, false]);
  const [popup, setPopup] = useState<string | null>(null);
  const popupAnswered = useRef(false);
  const finInt = useRef<ReturnType<typeof setInterval> | null>(null);
  const finActive = useRef(false);

  const screen = FLOW[idx];

  const qAnswered = FLOW.slice(0, idx).filter((s) => s.type === "question" || s.type === "multi").length;
  const showBar = screen.type === "question" || screen.type === "multi" || screen.type === "info" || screen.type === "analyzing";
  const progress = showBar ? qAnswered / Q_COUNT : 0;

  const advance = useCallback(() => {
    setMultiSel([]);
    setFlash(null);
    setIdx((i) => Math.min(i + 1, FLOW.length - 1));
  }, []);

  const goBack = () => { setMultiSel([]); setFlash(null); setIdx((i) => Math.max(1, i - 1)); };
  const answerQ = (opt: string) => { setFlash(opt); setTimeout(() => advance(), 260); };
  const toggleMulti = (t: string) => setMultiSel((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));

  useEffect(() => {
    if (screen.type !== "analyzing") { analyzingDone.current = false; return; }
    setAnalyzingProg(0);
    analyzingDone.current = false;
    const iv = setInterval(() => {
      setAnalyzingProg((p) => {
        const n = p + 1.8;
        if (n >= 100 && !analyzingDone.current) {
          analyzingDone.current = true;
          clearInterval(iv);
          setTimeout(advance, 350);
          return 100;
        }
        return Math.min(n, 100);
      });
    }, 50);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  const runStage = useCallback((si: number) => {
    setFinStage(si);
    popupAnswered.current = false;
    const s = FIN_STAGES[si];
    let p = 0;
    finInt.current = setInterval(() => {
      if (s.popupAt && p >= s.popupAt && !popupAnswered.current) { setPopup(s.question); return; }
      p += 0.9;
      setFinProg((prev) => { const next = [...prev]; next[si] = Math.min(p, 100); return next; });
      if (p >= 100) {
        clearInterval(finInt.current!);
        setFinDone((prev) => { const next = [...prev]; next[si] = true; return next; });
        setTimeout(() => {
          if (si < FIN_STAGES.length - 1) { runStage(si + 1); } else { finActive.current = false; setTimeout(advance, 500); }
        }, 350);
      }
    }, 50);
  }, [advance]);

  useEffect(() => {
    if (screen.type !== "finalizing") {
      if (finInt.current) clearInterval(finInt.current);
      if (finActive.current) { finActive.current = false; setFinStage(0); setFinProg([0, 0, 0, 0, 0, 0]); setFinDone([false, false, false, false, false, false]); setPopup(null); popupAnswered.current = false; }
      return;
    }
    if (finActive.current) return;
    finActive.current = true;
    setTimeout(() => runStage(0), 300);
    return () => { if (finInt.current) clearInterval(finInt.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  const answerPopup = () => { popupAnswered.current = true; setPopup(null); };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: BG, fontFamily: '"Open Sans", sans-serif' }}>
      <style>{`
        @keyframes gruns-in {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gruns-screen { animation: gruns-in 0.28s ease both; }
      `}</style>

      {showBar && (
        <div style={{ height: "3px", backgroundColor: "#d0c9c0" }}>
          <div style={{ height: "100%", width: `${progress * 100}%`, backgroundColor: G, transition: "width 0.5s ease" }} />
        </div>
      )}

      {popup && <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.45)", zIndex: 50 }} />}

      {screen.type !== "offer" && (
        <div style={{ paddingTop: showBar ? "18px" : "24px", paddingBottom: "6px", display: "flex", justifyContent: "center" }}>
          <img src={LOGO} alt="Grüns" style={{ height: "36px", objectFit: "contain" }} />
        </div>
      )}

      <div key={idx} className="gruns-screen" style={{ maxWidth: "540px", margin: "0 auto", padding: "14px 20px 56px" }}>
        {screen.type === "welcome" && <WelcomeScreen onStart={advance} />}
        {screen.type === "question" && <QuestionScreen screen={screen} flash={flash} onAnswer={answerQ} canBack={idx > 1} onBack={goBack} />}
        {screen.type === "multi" && <MultiScreen screen={screen} selected={multiSel} onToggle={toggleMulti} onContinue={advance} canBack={idx > 1} onBack={goBack} />}
        {screen.type === "info" && <InfoScreen screen={screen} onContinue={advance} />}
        {screen.type === "analyzing" && <AnalyzingScreen progress={analyzingProg} />}
        {screen.type === "finalizing" && <FinalizingScreen progress={finProg} done={finDone} activeStage={finStage} />}
        {screen.type === "summary" && <SummaryScreen onContinue={advance} />}
        {screen.type === "product" && <ProductScreen onContinue={advance} />}
        {screen.type === "offer" && <OfferScreen />}
      </div>

      {popup && (
        <div style={{ position: "fixed", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 60, padding: "24px" }}>
          <div style={{ backgroundColor: WHITE, borderRadius: "22px", padding: "40px 30px", maxWidth: "400px", width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.22)", animation: "gruns-in 0.22s ease both" }}>
            <p style={{ fontSize: "11px", color: TLIT, margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: '"Open Sans", sans-serif' }}>
              To continue, please specify
            </p>
            <p style={{ fontSize: "20px", fontWeight: 700, color: TEXT, margin: "0 0 30px", lineHeight: 1.4, fontFamily: '"Open Sans", sans-serif' }}>
              {popup}
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {["No", "Yes"].map((lbl) => (
                <PopupBtn key={lbl} label={lbl} onClick={answerPopup} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PopupBtn({ label, onClick }: { label: string; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: 1,
        backgroundColor: hov ? GD : G,
        color: WHITE,
        border: "none",
        borderRadius: "999px",
        padding: "14px 0",
        fontSize: "16px",
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: '"Open Sans", sans-serif',
        transition: "background-color 0.15s",
      }}
    >
      {label}
    </button>
  );
}
