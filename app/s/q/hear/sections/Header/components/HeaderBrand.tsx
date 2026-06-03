export const HeaderBrand = () => {
  return (
    <div className="items-center caret-transparent flex justify-between outline-[3px] pl-10 pr-[25px] md:px-[65px]">
      <div className="caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-[85px] md:w-[145px]">
        <img
          src="https://c.animaapp.com/mpgprp8nfS9gmT/assets/hearcom-v2.svg"
          alt="hear.com logo"
          className="caret-transparent inline outline-[3px] align-bottom w-full"
        />
      </div>
      <div className="bg-[linear-gradient(90deg,rgb(149,210,255)_0px,rgb(5,96,161)_314.81%)] caret-transparent h-[19px] min-h-[auto] min-w-[auto] outline-[3px] w-[110px] overflow-hidden rounded-[25px] md:w-[220px]">
        <div className="bg-slate-200 caret-transparent h-full outline-[3px] w-full"></div>
      </div>
    </div>
  );
};
