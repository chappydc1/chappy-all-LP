export const HeaderLogo = () => {
  return (
    <div className="items-center caret-transparent flex justify-between">
      <div className="caret-transparent min-h-[auto] min-w-[auto] w-[85px] md:w-[145px]">
        <img
          src="https://c.animaapp.com/mnsctxd6cckxuq/assets/hearcom-v2.svg"
          alt="Hearcom logo"
          className="caret-transparent align-baseline w-full"
        />
      </div>
      <div className="caret-transparent min-h-[auto] min-w-[auto] text-right">
        <p className="text-gray-200 text-[15px] caret-transparent leading-[19.5px] font-archivo md:text-xl md:leading-[26px]">
          advertorial
        </p>
        <p className="text-sky-600 text-xl font-bold caret-transparent leading-[26px] font-archivo md:text-[25px] md:leading-[32.5px]">
          TECHNOLOGY
        </p>
      </div>
    </div>
  );
};
