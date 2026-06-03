"use client";

import { useState } from "react";

const SEGMENTS = [
  { label: "58%\nOff", color: "indigo-900", textColor: "white" },
  { label: "15%\nOff", color: "white", textColor: "black" },
  { label: "Free\nGift", color: "indigo-900", textColor: "white" },
  { label: "10%\nOff", color: "white", textColor: "black" },
  { label: "38%\nOff", color: "indigo-900", textColor: "white" },
  { label: "15%\nOff", color: "white", textColor: "black" },
  { label: "Free\nGift", color: "indigo-900", textColor: "white" },
  { label: "10%\nOff", color: "white", textColor: "black" },
];

export const SpinWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(-19.99998485209311);
  const [result, setResult] = useState<string | null>(null);

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);
    const extraSpins = 5 + Math.floor(Math.random() * 3);
    const landingOffset = Math.floor(Math.random() * 360);
    const newRotation = rotation + extraSpins * 360 + landingOffset;
    setRotation(newRotation);

    setTimeout(() => {
      setSpinning(false);
      // Always land on 58% Off (first segment)
      setResult("58% Off");
    }, 3200);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        role="button"
        aria-label="Spin to win"
        onClick={handleSpin}
        className={`relative text-[15px] font-semibold items-center box-border h-[330px] leading-[18px] max-h-[350px] max-w-[350px] text-center uppercase w-[330px] border-stone-300 rounded-[99999px] border-[12px] border-solid font-alia_kefir cursor-pointer transition-transform duration-100 ${!spinning ? "hover:scale-[1.02] active:scale-[0.98]" : "cursor-not-allowed"}`}
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
            className={`absolute text-black text-lg items-center box-border flex h-4/5 justify-center leading-[21.6px] w-4/5 m-auto p-4 rounded-[99999px] border-[6px] border-solid border-white inset-0 transition-colors duration-300 ${spinning ? "bg-indigo-400" : "bg-indigo-500"}`}
          >
            <div className="text-white text-[33px] box-border leading-[39.6px] min-h-[auto] min-w-[auto]">
              <p>{spinning ? "…" : "Spin"}</p>
            </div>
          </div>
        </div>
      </div>

      {result && !spinning && (
        <div className="animate-bounce-in bg-green-50 border border-green-300 text-green-800 font-bold text-lg px-6 py-3 rounded-xl text-center">
          🎉 You won <span className="text-indigo-900">{result}</span>!
          <div className="text-sm font-normal mt-1 text-green-700">Discount applied at checkout automatically.</div>
        </div>
      )}

      {!result && !spinning && (
        <p className="text-sm text-gray-500 text-center">Click the wheel to spin and reveal your discount!</p>
      )}
    </div>
  );
};
