export const VideoPlayer = () => {
  return (
    <div className="items-center box-border caret-transparent flex h-full justify-center outline-[3px] w-full z-[9999]">
      <div className="relative aspect-[9_/_16] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-[78%] overflow-hidden rounded-lg md:w-[24%]">
        <img
          src="https://c.animaapp.com/mp1so458wGF4jN/assets/vertical_modelo.png"
          alt="Thumbnail"
          className="absolute box-border caret-transparent h-full max-w-full object-contain outline-[3px] w-full z-[2] left-0 top-0"
        />
        <video
          poster="https://c.animaapp.com/mp1so458wGF4jN/assets/thumbnail.jpg"
          playsInline
          preload="metadata"
          src="blob://https://sugarhealthnotice.com/36a15415-5021-44dd-b6db-71268e39cf3d"
          className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full z-[1] left-0 top-0"
        ></video>
        <div className="absolute bg-white/30 box-border caret-transparent h-4 outline-[3px] w-full z-[3] overflow-hidden left-[0%] bottom-0">
          <div className="bg-orange-600 box-border caret-transparent h-full outline-[3px] w-0"></div>
        </div>
        <div className="absolute text-white items-center bg-sky-400 box-border caret-transparent gap-x-2.5 hidden flex-col h-full justify-center outline-[3px] gap-y-2.5 text-center w-full z-[4] left-0 top-0">
          <p className="text-gray-700 text-base font-bold box-border caret-transparent leading-6 max-w-[600px] outline-[3px] w-[90%] mb-4 mx-auto px-5 py-2.5 rounded-lg md:text-xl md:leading-[30px] md:w-4/5 md:px-[15px] md:py-2">
            Have you already started watching this video?
          </p>
          <button className="text-black text-base font-bold items-center bg-white caret-transparent gap-x-2.5 flex leading-6 outline-[3px] gap-y-2.5 px-[15px] py-2.5 rounded-lg md:text-[14.4px] md:leading-[21.6px] md:px-4 md:py-2 hover:text-white hover:bg-black">
            <i className="text-base font-black box-border caret-transparent block leading-4 outline-[3px] align-middle mr-[15px] font-font_awesome_6_free md:text-[14.4px] md:leading-[14.4px] before:accent-auto before:box-border before:caret-transparent before:text-black before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free before:md:text-[14.4px] before:md:leading-[14.4px]"></i>
            Continue watching?
          </button>
          <button className="text-black text-base font-bold items-center bg-white caret-transparent gap-x-2.5 flex leading-6 outline-[3px] gap-y-2.5 px-[15px] py-2.5 rounded-lg md:text-[14.4px] md:leading-[21.6px] md:px-4 md:py-2 hover:text-white hover:bg-black">
            <i className="text-base font-black box-border caret-transparent block leading-4 outline-[3px] align-middle mr-[15px] font-font_awesome_6_free md:text-[14.4px] md:leading-[14.4px] before:accent-auto before:box-border before:caret-transparent before:text-black before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free before:md:text-[14.4px] before:md:leading-[14.4px]"></i>
            Watch from the beginning?
          </button>
        </div>
        <div className="absolute text-white items-center bg-black/70 box-border caret-transparent gap-x-2.5 hidden flex-col h-full justify-center outline-[3px] gap-y-2.5 text-center w-full z-[4] left-0 top-0">
          <img
            src="https://c.animaapp.com/mp1so458wGF4jN/assets/pause-9_16-1771189608084.gif"
            alt="Pause Image"
            className="box-border caret-transparent h-full max-w-full object-contain outline-[3px]"
          />
        </div>
      </div>
    </div>
  );
};
