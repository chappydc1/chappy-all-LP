export const TodayReplyComment = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2 border-gray-100 ml-4 mt-3 pl-3 border-l-2 border-solid">
      <img
        src="/images/today/foto1_1.jpg"
        alt="Bonnie Walker verified user"
        className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] object-contain outline-[3px] w-8 rounded-sm"
      />
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
        <div className="bg-gray-100 box-border caret-transparent outline-[3px] p-2 rounded-[15px]">
          <p className="text-gray-700 text-base font-bold box-border caret-transparent leading-5 outline-[3px] mb-4 md:text-xl md:leading-[25px]">
            Bonnie Walker
          </p>
          <p className="text-gray-700 text-base box-border caret-transparent leading-5 outline-[3px] mb-4 md:text-xl md:leading-[25px]">
            finally, someone who doesn&#39;t beat around the bush! thank youuuu!
            i started today
          </p>
        </div>
        <div className="text-gray-500 text-[11px] font-bold items-center box-border caret-transparent gap-x-2 flex leading-[16.5px] outline-[3px] gap-y-2 ml-2 mt-1">
          <span className="text-indigo-800 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] hover:underline">
            Like
          </span>
          ·{" "}
          <span className="text-gray-400 font-normal box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
            1 h
          </span>
        </div>
      </div>
    </div>
  );
};
