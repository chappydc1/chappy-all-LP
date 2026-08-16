"use client";

import { useState, useEffect, useRef } from "react";

const CHECKOUT_URL = "https://try.javvycoffee.com/ps";

const CONFETTI_COLORS = [
  "#312e81",
  "#4f46e5",
  "#facc15",
  "#34d399",
  "#f472b6",
  "#fb923c",
  "#60a5fa",
  "#a78bfa",
];

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  shape: "rect" | "circle";
}

function useConfetti(active: boolean): ConfettiPiece[] {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const generated = useRef(false);

  useEffect(() => {
    if (!active || generated.current) return;
    generated.current = true;
    const newPieces: ConfettiPiece[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size: 6 + Math.random() * 8,
      duration: 1.8 + Math.random() * 1.4,
      delay: Math.random() * 0.8,
      rotation: Math.random() * 360,
      shape: Math.random() > 0.5 ? "rect" : "circle",
    }));
    setPieces(newPieces);
  }, [active]);

  return pieces;
}

export const JavySpinWheel = (): JSX.Element => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(-19.99998485209311);
  const [result, setResult] = useState<string | null>(null);
  const confettiPieces = useConfetti(result !== null && !spinning);

  const handleSpin = () => {
    if (spinning || result !== null) return;
    setSpinning(true);
    const extraSpins = 5 + Math.floor(Math.random() * 3);
    const landingOffset = Math.floor(Math.random() * 360);
    const newRotation = rotation + extraSpins * 360 + landingOffset;
    setRotation(newRotation);

    setTimeout(() => {
      setSpinning(false);
      setResult("58% Off");
    }, 3200);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div
        role="button"
        aria-label="Spin to win"
        onClick={handleSpin}
        className={`relative text-[15px] font-semibold items-center box-border h-[330px] leading-[18px] max-h-[350px] max-w-[350px] text-center uppercase w-[330px] border-stone-300 rounded-[99999px] border-[12px] border-solid font-alia_kefir transition-transform duration-100 ${result !== null ? "cursor-default" : spinning ? "cursor-not-allowed" : "cursor-pointer hover:scale-[1.02] active:scale-[0.98]"}`}
        style={{ touchAction: "manipulation" }}
      >
        <div
          className="relative bg-indigo-900 box-border h-full w-full overflow-hidden rounded-full"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: spinning ? "transform 3.2s cubic-bezier(0.17,0.67,0.12,1)" : "none",
          }}
        >
          {/* Segment 0 - 58% Off */}
          <div className="absolute border-t-indigo-900 box-border h-0 origin-[50%_100%] w-0 z-[1] m-auto border-t-[153px] border-b-transparent border-x-transparent border-x-[67px] border-solid inset-x-0">
            <div className="absolute text-white box-border left-[-43.0312px] right-[-43.0312px] top-[-129.094px]">58%<br />Off<br /></div>
          </div>
          {/* Segment 1 - 15% Off */}
          <div className="absolute box-border h-0 rotate-45 origin-[50%_100%] w-0 z-0 m-auto border-t-white border-t-[153px] border-b-transparent border-x-transparent border-x-[67px] border-solid inset-x-0">
            <div className="absolute text-black box-border left-[-28.6875px] right-[-28.6875px] top-[-129.094px]">15%<br />Off<br /></div>
          </div>
          {/* Segment 2 - Free Gift */}
          <div className="absolute border-t-indigo-900 box-border h-0 rotate-90 origin-[50%_100%] w-0 z-[1] m-auto border-t-[153px] border-b-transparent border-x-transparent border-x-[67px] border-solid inset-x-0">
            <div className="absolute text-white box-border left-[-43.0312px] right-[-43.0312px] top-[-129.094px]">Free<br />Gift<br /></div>
          </div>
          {/* Segment 3 - 10% Off */}
          <div className="absolute box-border h-0 rotate-[135deg] origin-[50%_100%] w-0 z-0 m-auto border-t-white border-t-[153px] border-b-transparent border-x-transparent border-x-[67px] border-solid inset-x-0">
            <div className="absolute text-black box-border left-[-28.6875px] right-[-28.6875px] top-[-129.094px]">10%<br />Off<br /></div>
          </div>
          {/* Segment 4 - 38% Off */}
          <div className="absolute border-t-indigo-900 box-border h-0 origin-[50%_100%] w-0 z-[1] m-auto border-t-[153px] border-b-transparent border-x-transparent border-x-[67px] border-solid -scale-100 inset-x-0">
            <div className="absolute text-white box-border left-[-43.0312px] right-[-43.0312px] top-[-129.094px]">38%<br />Off<br /></div>
          </div>
          {/* Segment 5 - 15% Off */}
          <div className="absolute box-border h-0 rotate-[-135deg] origin-[50%_100%] w-0 z-0 m-auto border-t-white border-t-[153px] border-b-transparent border-x-transparent border-x-[67px] border-solid inset-x-0">
            <div className="absolute text-black box-border left-[-28.6875px] right-[-28.6875px] top-[-129.094px]">15%<br />Off<br /></div>
          </div>
          {/* Segment 6 - Free Gift */}
          <div className="absolute border-t-indigo-900 box-border h-0 -rotate-90 origin-[50%_100%] w-0 z-[1] m-auto border-t-[153px] border-b-transparent border-x-transparent border-x-[67px] border-solid inset-x-0">
            <div className="absolute text-white box-border left-[-43.0312px] right-[-43.0312px] top-[-129.094px]">Free<br />Gift<br /></div>
          </div>
          {/* Segment 7 - 10% Off */}
          <div className="absolute box-border h-0 -rotate-45 origin-[50%_100%] w-0 z-0 m-auto border-t-white border-t-[153px] border-b-transparent border-x-transparent border-x-[67px] border-solid inset-x-0">
            <div className="absolute text-black box-border left-[-28.6875px] right-[-28.6875px] top-[-129.094px]">10%<br />Off<br /></div>
          </div>
        </div>

        {/* Pointer indicator */}
        <div className="absolute bg-indigo-950/50 box-border h-[9.5625px] top-[-14.3438px] w-[47.8125px] m-auto inset-x-0">
          <div className="box-border border-t-white border-t-[28px] border-b-transparent border-x-transparent border-x-[23px] border-solid"></div>
        </div>

        {/* Center button */}
        <div className="absolute box-border h-[143.438px] w-[143.438px] z-20 m-auto rounded-full inset-0">
          <div
            className={`absolute text-black text-lg items-center box-border flex h-4/5 justify-center leading-[21.6px] w-4/5 m-auto p-4 rounded-[99999px] border-[6px] border-solid border-white inset-0 transition-colors duration-300 ${spinning ? "bg-indigo-400" : result !== null ? "bg-indigo-300" : "bg-indigo-500"}`}
          >
            <div className="text-white text-[33px] box-border leading-[39.6px] min-h-[auto] min-w-[auto]">
              <p>{spinning ? "…" : result !== null ? "✓" : "Spin"}</p>
            </div>
          </div>
        </div>
      </div>

      {result && !spinning && (
        <div className="relative w-full overflow-hidden">
          <style>{`
            @keyframes confetti-fall {
              0% { transform: translateY(-20px) rotate(var(--r)); opacity: 1; }
              80% { opacity: 1; }
              100% { transform: translateY(280px) rotate(calc(var(--r) + 360deg)); opacity: 0; }
            }
            @keyframes result-pop {
              0% { transform: scale(0.6); opacity: 0; }
              70% { transform: scale(1.08); }
              100% { transform: scale(1); opacity: 1; }
            }
            .confetti-piece {
              position: absolute;
              top: 0;
              animation: confetti-fall linear forwards;
            }
            .result-pop {
              animation: result-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
            }
          `}</style>

          <div className="relative h-0 w-full pointer-events-none" aria-hidden="true">
            {confettiPieces.map((p) => (
              <div
                key={p.id}
                className="confetti-piece"
                style={{
                  left: `${p.x}%`,
                  width: p.shape === "circle" ? p.size : p.size * 1.4,
                  height: p.shape === "circle" ? p.size : p.size * 0.6,
                  borderRadius: p.shape === "circle" ? "50%" : "2px",
                  backgroundColor: p.color,
                  animationDuration: `${p.duration}s`,
                  animationDelay: `${p.delay}s`,
                  ["--r" as string]: `${p.rotation}deg`,
                }}
              />
            ))}
          </div>

          <div className="result-pop bg-green-50 border border-green-300 text-green-800 font-bold text-lg px-6 py-3 rounded-xl text-center">
            🎉 You won <span className="text-indigo-900">{result}</span>!
            <div className="text-sm font-normal mt-1 text-green-700">Discount applied at checkout automatically.</div>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 w-full bg-indigo-900 hover:bg-indigo-800 active:bg-indigo-950 text-white font-bold text-lg rounded-xl px-6 py-4 transition-colors duration-200 shadow-lg"
          >
            <span>Claim My 58% Off →</span>
          </a>
          <p className="text-xs text-gray-400 text-center mt-2">Opens Javvy Coffee checkout</p>
        </div>
      )}

      {!result && !spinning && (
        <p className="text-sm text-gray-500 text-center">Click the wheel to spin and reveal your discount!</p>
      )}
    </div>
  );
};
