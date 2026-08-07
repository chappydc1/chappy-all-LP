export const DiabetesHeader = () => {
  return (
    <header className="items-center bg-red-800 box-border caret-transparent flex justify-between outline-[3px] px-5 py-2.5">
      <h1 className="text-white text-[27.2px] box-border caret-transparent grow leading-[32.64px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-[32px] md:leading-[38.4px]">
        HEALTH
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        className="shrink-0"
      >
        <rect y="3" width="23" height="2.5" rx="1.25" fill="white" />
        <rect y="10" width="23" height="2.5" rx="1.25" fill="white" />
        <rect y="17" width="23" height="2.5" rx="1.25" fill="white" />
      </svg>
    </header>
  );
};
