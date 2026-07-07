"use client"
export const PipiteaChatWidget = () => {
  return (
    <div className="fixed text-slate-500 text-base box-border caret-transparent leading-6 outline-[3px] z-[2147483646] left-4 bottom-4 font-roboto">
      <button
        aria-label="Open privacy widget."
        className="text-white items-center bg-black shadow-[rgba(0,0,0,0.25)_0px_2px_16px_0px] caret-transparent flex h-[52px] justify-center max-w-full outline-[3px] text-center w-[52px] border overflow-hidden p-0 rounded-[50%] border-black"
      >
        <img
          src="https://c.animaapp.com/mq03tlhwPsu7gY/assets/icon-4.svg"
          alt="Icon"
          className="box-border caret-transparent h-7 outline-[3px] w-7"
        />
      </button>
    </div>
  );
};
