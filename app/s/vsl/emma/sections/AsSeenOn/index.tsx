export const AsSeenOn = () => {
  return (
    <div className="box-border caret-transparent max-w-[780px] w-full m-auto">
      <div className="border-l-neutral-800 border-r-neutral-800 box-border caret-transparent text-center mt-6 py-3 border-y-black/50 border-b border-t border-solid">
        <span className="text-black/50 text-xl font-bold box-border caret-transparent leading-[30px] font-myriad_pro">
          As Seen On
        </span>
        <div className="box-border caret-transparent flex flex-wrap -mx-3 pt-6">
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] w-full px-3">
            <img
              src="/images/emma/asseenond.webp"
              className="box-border caret-transparent hidden max-w-[772px] w-full m-auto md:block"
            />
            <img
              src="/images/emma/asseenonm.webp"
              className="box-border caret-transparent block max-w-[343px] w-full m-auto md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
