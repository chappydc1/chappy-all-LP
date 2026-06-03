export const ShowMoreButton = () => {
  return (
    <div className="relative box-border caret-transparent text-center mt-5 after:accent-auto after:bg-stone-300 after:box-border after:caret-transparent after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-px after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:-mt-0.5 after:border-separate after:left-0 after:top-2/4 after:font-open_sans">
      <button className="appearance-none bg-transparent caret-transparent w-full mx-auto p-0">
        <i className="relative text-stone-300 italic bg-stone-50 box-border caret-transparent block h-12 leading-[44px] w-12 z-[100] border border-stone-300 mx-auto rounded-[50%] border-solid">
          <img
            src="/assets/primepicks/icon-2.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 w-6 mt-3 mx-auto"
          />
        </i>
      </button>
    </div>
  );
};
