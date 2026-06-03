export const NavbarActions = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] gap-y-4">
      <button
        title="Notifications"
        className="text-zinc-800 text-lg bg-transparent caret-transparent block leading-[27px] min-h-[auto] min-w-[auto] outline-[3px] text-center p-1"
      >
        <i className="font-black box-border caret-transparent inline-block leading-[18px] outline-[3px] font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-zinc-800 before:text-lg before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[18px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
      </button>
      <button
        title="Search"
        className="text-zinc-800 text-lg bg-transparent caret-transparent block leading-[27px] min-h-[auto] min-w-[auto] outline-[3px] text-center p-1"
      >
        <i className="font-black box-border caret-transparent inline-block leading-[18px] outline-[3px] font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-zinc-800 before:text-lg before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[18px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
      </button>
      <div
        title="Menu"
        className="box-border caret-transparent gap-x-1 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 p-1"
      >
        <span className="bg-zinc-800 box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] outline-[3px] w-5"></span>
        <span className="bg-zinc-800 box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] outline-[3px] w-5"></span>
        <span className="bg-zinc-800 box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] outline-[3px] w-5"></span>
      </div>
    </div>
  );
};
