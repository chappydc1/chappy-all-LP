import { useState, useEffect } from "react";

const messages = [
  "90-DAY 100% MONEYBACK GUARANTEE",
  "Free shipping On all orders over $50+",
];

export const AmalaTopBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % messages.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="items-center bg-gray-800 bg-no-repeat box-border caret-transparent flex flex-col justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center px-[15px] py-[7px] md:py-2.5">
      <div className="w-full max-w-[400px] overflow-hidden text-center">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className="shrink-0 w-full text-white text-xs font-semibold tracking-[0.5px] uppercase md:text-sm"
            >
              {msg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
