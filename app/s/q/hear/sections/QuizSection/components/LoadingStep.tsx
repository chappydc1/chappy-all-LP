export const LoadingStep = () => {
  return (
    <div className="box-border caret-transparent hidden outline-[3px]">
      <form className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px]">
          <span className="box-border caret-transparent outline-[3px]">
            <div className="box-border caret-transparent outline-[3px] text-center pt-[25px] md:pt-[35px]">
              <div className="bg-[url('https://media.audibene.net/dhqvlsb3l/image/upload/v1/assets/na/loader-hearcom-logo.svg')] bg-no-repeat bg-contain box-border caret-transparent h-[52px] outline-[3px] w-[140px] mb-[35px] mx-auto"></div>
              <div className="relative items-center bg-white shadow-[rgba(0,0,0,0.15)_0px_2px_10px_0px] box-border caret-transparent flex h-[70px] justify-center outline-[3px] w-full z-[1] border-sky-700 overflow-hidden rounded-[70px] border-2 border-solid before:accent-auto before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:rounded-[70px] before:border-separate before:border-[3px] before:border-solid before:border-white before:left-0 before:top-0 before:font-georgia">
                <div className="text-xl font-bold box-border caret-transparent leading-7 outline-[3px] z-10 font-open_sans">
                  Saving...
                </div>
                <div className="absolute bg-blue-300 box-border caret-transparent h-full outline-[3px] w-full z-0 left-0 top-0"></div>
              </div>
            </div>
          </span>
        </div>
      </form>
    </div>
  );
};
