"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type QuizQuestion = {
  id: number;
  category: string;
  prompt: string;
  options: string[];
};

const questions: QuizQuestion[] = [
  { id: 1, category: "Start", prompt: "What pulled you here today?", options: ["More energy", "Gut support", "Immunity", "Cleaner routine"] },
  { id: 2, category: "Routine", prompt: "How consistent is your current supplement routine?", options: ["Daily", "A few times a week", "When I remember", "I avoid supplements"] },
  { id: 3, category: "Friction", prompt: "What usually makes nutrition hard?", options: ["Too many pills", "Powders are messy", "I forget", "Taste"] },
  { id: 4, category: "Energy", prompt: "When does your energy dip hardest?", options: ["Morning", "Afternoon", "Evening", "All day"] },
  { id: 5, category: "Mood", prompt: "What do you want your day to feel like?", options: ["Steady", "Focused", "Calm", "Lighter"] },
  { id: 6, category: "Gut", prompt: "How often does digestion feel off?", options: ["Daily", "Weekly", "Occasionally", "Rarely"] },
  { id: 7, category: "Taste", prompt: "Which taste profile wins fastest?", options: ["Fresh berry", "Mango", "Citrus", "Not too sweet"] },
  { id: 8, category: "Format", prompt: "What format do you actually stick with?", options: ["Gummies", "Capsules", "Powder", "Drinks"] },
  { id: 9, category: "Time", prompt: "How much time do you want this to take?", options: ["Under 10 seconds", "Under a minute", "A few minutes", "I don't care"] },
  { id: 10, category: "Goal", prompt: "Pick the most important outcome.", options: ["Energy", "Digestion", "Nutrients", "All-in-one"] },
  { id: 11, category: "Sleep", prompt: "How do mornings usually feel?", options: ["Ready", "Slow", "Foggy", "Exhausted"] },
  { id: 12, category: "Stress", prompt: "How does stress show up most?", options: ["Low energy", "Snacking", "Gut issues", "Poor focus"] },
  { id: 13, category: "Food", prompt: "How many servings of greens do you get most days?", options: ["0–1", "2–3", "4+", "No idea"] },
  { id: 14, category: "Travel", prompt: "Do routines fall apart when life gets busy?", options: ["Always", "Often", "Sometimes", "Not really"] },
  { id: 15, category: "Sweet", prompt: "How do you feel about sugar?", options: ["Keep it low", "Sugar-free only", "Flexible", "Taste first"] },
  { id: 16, category: "Decision", prompt: "What makes you trust a product?", options: ["Ingredients", "Reviews", "Testing", "Guarantee"] },
  { id: 17, category: "Body", prompt: "What needs the most support right now?", options: ["Energy", "Immunity", "Gut", "Skin"] },
  { id: 18, category: "Habit", prompt: "Where would you keep daily packs?", options: ["Kitchen", "Desk", "Bag", "Car"] },
  { id: 19, category: "Memory", prompt: "What reminder works best?", options: ["Morning cue", "With coffee", "After lunch", "Before leaving"] },
  { id: 20, category: "Preference", prompt: "Pick your non-negotiable.", options: ["Tastes good", "Easy", "Clean ingredients", "No crash"] },
  { id: 21, category: "Frequency", prompt: "How often do you want delivery?", options: ["Every 4 weeks", "Every 6 weeks", "One time", "Not sure"] },
  { id: 22, category: "Value", prompt: "What offer feels easiest to say yes to?", options: ["Subscribe discount", "Buy 2 get 1 free", "Starter pack", "Guarantee"] },
  { id: 23, category: "Family", prompt: "Who is this for?", options: ["Me", "Partner", "Family", "Kids"] },
  { id: 24, category: "Lifestyle", prompt: "What best describes your week?", options: ["Desk-heavy", "Active", "Traveling", "Chaotic"] },
  { id: 25, category: "Craving", prompt: "When do cravings usually hit?", options: ["Morning", "Afternoon", "Night", "Rarely"] },
  { id: 26, category: "Caffeine", prompt: "How much do you rely on caffeine?", options: ["A lot", "Some", "Barely", "None"] },
  { id: 27, category: "Immune", prompt: "How often do you want immune support?", options: ["Daily", "Seasonally", "When run down", "Not a focus"] },
  { id: 28, category: "Texture", prompt: "What texture is most appealing?", options: ["Soft gummy", "Chewy gummy", "Drink", "Capsule"] },
  { id: 29, category: "Ingredient", prompt: "Which ingredient category matters most?", options: ["Vitamins", "Prebiotics", "Greens", "Adaptogens"] },
  { id: 30, category: "Clarity", prompt: "How often does focus fade?", options: ["Daily", "A few days a week", "Sometimes", "Rarely"] },
  { id: 31, category: "Barrier", prompt: "What stops repeat purchase?", options: ["Price", "Taste", "Complexity", "Not feeling it"] },
  { id: 32, category: "Proof", prompt: "What proof do you scan first?", options: ["Reviews", "Facts label", "Before/after", "Certifications"] },
  { id: 33, category: "Pace", prompt: "How fast do you want to choose?", options: ["Now", "After summary", "After details", "I compare a lot"] },
  { id: 34, category: "Identity", prompt: "Which sounds most like you?", options: ["Busy optimizer", "Health reset", "Low-maintenance", "Taste-driven"] },
  { id: 35, category: "Nutrition", prompt: "What do you want covered?", options: ["Basics", "Greens", "Whole-body", "Family routine"] },
  { id: 36, category: "Budget", prompt: "What price framing feels better?", options: ["Daily cost", "Monthly cost", "Bundle savings", "Compare-at discount"] },
  { id: 37, category: "Shipping", prompt: "How important is free shipping?", options: ["Essential", "Nice", "Depends", "Not important"] },
  { id: 38, category: "Risk", prompt: "What reduces purchase hesitation?", options: ["Guarantee", "Reviews", "Clear label", "Low first price"] },
  { id: 39, category: "Use", prompt: "When would you take gummies?", options: ["With breakfast", "On the go", "After workout", "Afternoon"] },
  { id: 40, category: "Flavor", prompt: "Choose the first pack you would try.", options: ["Original", "Mango Sorbet", "Low Sugar", "Sugar-Free"] },
  { id: 41, category: "Stack", prompt: "Do you want to replace other supplements?", options: ["Yes", "Some", "No", "Not sure"] },
  { id: 42, category: "Feeling", prompt: "What would make this feel worth it?", options: ["More consistent energy", "Better gut", "Easy habit", "Peace of mind"] },
  { id: 43, category: "Quantity", prompt: "Which bundle sounds right?", options: ["Buy 1", "Buy 2 get 1 free", "Buy 3 get 2 free", "Subscription"] },
  { id: 44, category: "Commitment", prompt: "How do you feel about subscriptions?", options: ["Love savings", "Only if flexible", "Prefer one-time", "Unsure"] },
  { id: 45, category: "Outcome", prompt: "Which result would you notice first?", options: ["Energy", "Regularity", "Less snacking", "Routine consistency"] },
  { id: 46, category: "Social", prompt: "Who would notice your change?", options: ["Me", "Partner", "Coworkers", "Family"] },
  { id: 47, category: "Confidence", prompt: "How ready are you to start?", options: ["Very ready", "Almost", "Need details", "Browsing"] },
  { id: 48, category: "Close", prompt: "What should your plan optimize for?", options: ["Best savings", "Lowest commitment", "Fastest start", "Family coverage"] },
  { id: 49, category: "Match", prompt: "What should we recommend first?", options: ["Original", "Mango", "Bundle", "Subscription"] },
  { id: 50, category: "Final", prompt: "Ready to see your routine?", options: ["Show my match", "Show best deal", "Show bundle", "Start with one"] },
];

// Finalizing stages shown after quiz completes
const STAGES = [
  { label: "Analyzing your goals", popupAt: null },
  { label: "Building your nutrition profile", popupAt: 55, question: "Do you want a routine that takes under 30 seconds a day?" },
  { label: "Selecting your match", popupAt: 40, question: "Are you open to a subscription for the best savings?" },
] as const;

type Phase = "quiz" | "finalizing" | "result";

export default function QuizChappyPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  // Finalizing state
  const [phase, setPhase] = useState<Phase>("quiz");
  const [activeStage, setActiveStage] = useState(0);
  const [stageProgress, setStageProgress] = useState<number[]>([0, 0, 0]);
  const [doneStages, setDoneStages] = useState<boolean[]>([false, false, false]);
  const [popup, setPopup] = useState<string | null>(null);
  const popupAnswered = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const isComplete = step >= questions.length;
  const question = questions[step];

  const topAnswer = useMemo(() => {
    const counts = answers.reduce<Record<string, number>>((acc, a) => {
      acc[a] = (acc[a] ?? 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "All-in-one";
  }, [answers]);

  const chooseAnswer = (answer: string) => {
    const newAnswers = [...answers.slice(0, step), answer];
    setAnswers(newAnswers);
    const nextStep = step + 1;
    setStep(nextStep);
    if (nextStep >= questions.length) {
      setPhase("finalizing");
    }
  };

  const goBack = () => setStep((c) => Math.max(0, c - 1));
  const restart = () => { setAnswers([]); setStep(0); setPhase("quiz"); setActiveStage(0); setStageProgress([0, 0, 0]); setDoneStages([false, false, false]); setPopup(null); popupAnswered.current = false; };


  // Animate the active stage bar
  const advanceStage = useCallback((stageIdx: number) => {
    setActiveStage(stageIdx);
    popupAnswered.current = false;
    const stage = STAGES[stageIdx];
    let progress = 0;

    intervalRef.current = setInterval(() => {
      progress += 0.6;

      // Pause at popup trigger point until answered
      if (stage.popupAt && progress >= stage.popupAt && !popupAnswered.current) {
        setPopup(stage.question);
        return; // hold here
      }

      setStageProgress((prev) => {
        const next = [...prev];
        next[stageIdx] = Math.min(progress, 100);
        return next;
      });

      if (progress >= 100) {
        clearInterval(intervalRef.current!);
        setDoneStages((prev) => { const next = [...prev]; next[stageIdx] = true; return next; });
        setTimeout(() => {
          if (stageIdx < STAGES.length - 1) {
            advanceStage(stageIdx + 1);
          } else {
            setPhase("result");
          }
        }, 500);
      }
    }, 50);
  }, []);

  useEffect(() => {
    if (phase === "finalizing") {
      setTimeout(() => advanceStage(0), 200);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [phase, advanceStage]);

  const answerPopup = () => {
    popupAnswered.current = true;
    setPopup(null);
  };

  // ── Render ──

  if (phase === "finalizing") {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#ede8e0", display: "flex", flexDirection: "column" }}>
        {/* Dimmed overlay when popup is showing */}
        {popup && (
          <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.35)", zIndex: 10 }} />
        )}

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 24px", position: "relative", zIndex: 1 }}>
          <div style={{ width: "100%", maxWidth: "560px" }}>
            {STAGES.map((stage, i) => {
              const prog = stageProgress[i];
              const done = doneStages[i];
              const isActive = i === activeStage;

              return (
                <div key={stage.label} style={{ marginBottom: "32px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <span style={{ fontSize: "16px", fontWeight: 400, color: "#333333", fontFamily: '"Open Sans", sans-serif' }}>
                      {stage.label}
                    </span>
                    {done ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-label="complete">
                        <path d="M4 10.5l4.5 4.5 7.5-9" stroke="#3d9e3d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : isActive && prog > 0 ? (
                      <span style={{ fontSize: "14px", fontWeight: 600, color: "#555555", fontFamily: '"Open Sans", sans-serif' }}>
                        {Math.round(prog)}%
                      </span>
                    ) : null}
                  </div>
                  {/* Track */}
                  <div style={{ height: "14px", backgroundColor: "#d8d1c7", borderRadius: "8px", overflow: "hidden" }}>
                    <div style={{
                      height: "100%",
                      width: `${prog}%`,
                      backgroundColor: "#3d9e3d",
                      borderRadius: "8px",
                      transition: "width 0.05s linear",
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Popup modal */}
        {popup && (
          <div style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
            padding: "24px",
          }}>
            <div style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "36px 32px",
              maxWidth: "380px",
              width: "100%",
              textAlign: "center",
              boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            }}>
              <p style={{ fontSize: "13px", color: "#888888", margin: "0 0 12px", fontFamily: '"Open Sans", sans-serif' }}>
                To move forward, please specify
              </p>
              <p style={{ fontSize: "20px", fontWeight: 700, color: "#111111", margin: "0 0 28px", lineHeight: 1.35, fontFamily: '"Open Sans", sans-serif' }}>
                {popup}
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                {["No", "Yes"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={answerPopup}
                    style={{
                      backgroundColor: "#3d9e3d",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "999px",
                      padding: "12px 36px",
                      fontSize: "16px",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontFamily: '"Open Sans", sans-serif',
                      minWidth: "96px",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (phase === "result") {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#fafafa", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 24px", position: "relative", overflow: "hidden" }}>
        <Confetti />
        <div style={{ maxWidth: "560px", width: "100%", textAlign: "center" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "#e8f5e9", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M6 17l7 7L26 9" stroke="#005c9e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#0c2c53", margin: "0 0 8px" }}>Great news!</p>
          <h1 style={{ fontSize: "36px", fontWeight: 700, color: "#000000", margin: "0 0 16px", lineHeight: 1.15 }}>We found your match.</h1>
          <p style={{ fontSize: "18px", fontWeight: 400, color: "#333333", margin: "0 0 8px", lineHeight: 1.55 }}><strong>Grüns Superfood Gummies</strong></p>
          <p style={{ fontSize: "16px", color: "#555555", margin: "0 0 32px", lineHeight: 1.6 }}>
            Based on your answers — especially <strong>{topAnswer}</strong> — Grüns daily packs are built for you. Start with one pack or unlock bundle savings at checkout.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
            <a href="/products/gruns-superfood-gummies#buybox" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "#005c9e", color: "#ffffff", fontSize: "18px", fontWeight: 700, borderRadius: "15px", padding: "20px 40px", textDecoration: "none", width: "100%", maxWidth: "400px", boxSizing: "border-box" }}>
              Shop my match →
            </a>
            <button type="button" onClick={restart} style={{ background: "none", border: "2px solid rgba(0,92,158,0.5)", borderRadius: "15px", color: "#005c9e", fontSize: "16px", fontWeight: 700, padding: "16px 40px", cursor: "pointer", width: "100%", maxWidth: "400px" }}>
              Retake quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Quiz screen ──
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fafafa", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px 24px", backgroundColor: "#fafafa" }}>
        <div style={{ width: "100%", maxWidth: "620px" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 400, color: "#000000", margin: "0 0 6px", lineHeight: 1.3 }}>
            {question.prompt}
          </h2>
          <p style={{ fontSize: "14px", color: "#666666", fontStyle: "italic", margin: "0 0 24px" }}>
            (Please select one answer only)
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {question.options.map((option) => (
              <AnswerButton key={option} label={option} onClick={() => chooseAnswer(option)} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "28px" }}>
            <button type="button" onClick={goBack} disabled={step === 0} style={{ background: "none", border: "none", fontSize: "14px", fontWeight: 600, color: step === 0 ? "#cccccc" : "#005c9e", cursor: step === 0 ? "default" : "pointer", padding: 0 }}>
              ← Back
            </button>
            <button type="button" onClick={restart} style={{ background: "none", border: "none", fontSize: "14px", fontWeight: 600, color: "#005c9e", cursor: "pointer", padding: 0 }}>
              Start over
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const COLORS = ["#005c9e", "#3a9c3a", "#f5a623", "#e74c3c", "#9b59b6", "#f1c40f"];
    const pieces = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      w: 8 + Math.random() * 8,
      h: 4 + Math.random() * 4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.15,
      vx: (Math.random() - 0.5) * 2,
      vy: 2.5 + Math.random() * 3,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((p) => {
        ctx.save();
        ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        if (p.y > canvas.height) {
          p.y = -p.h;
          p.x = Math.random() * canvas.width;
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const stop = setTimeout(() => cancelAnimationFrame(raf), 4000);
    return () => { cancelAnimationFrame(raf); clearTimeout(stop); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 99 }} />;
}

function AnswerButton({ label, onClick }: { label: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        width: "100%", minHeight: "74px",
        backgroundColor: hovered ? "#dceeff" : "#f3f8ff",
        border: hovered ? "2px solid #005c9e" : "2px solid rgba(0,92,158,0.5)",
        borderRadius: "15px", padding: "20px 30px 20px 25px",
        fontSize: "20px", fontWeight: 700, color: "#000000",
        cursor: "pointer", textAlign: "left", lineHeight: "26px",
        transition: "background-color 0.15s ease, border-color 0.15s ease",
        boxSizing: "border-box",
      }}
    >
      <span>{label}</span>
      <span style={{ color: "#005c9e", fontSize: "20px", opacity: hovered ? 1 : 0, transition: "opacity 0.15s ease", marginLeft: "16px", flexShrink: 0 }}>→</span>
    </button>
  );
}
