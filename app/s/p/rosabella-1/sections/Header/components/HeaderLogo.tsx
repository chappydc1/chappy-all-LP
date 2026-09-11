import media from "../../../media.json"

export const HeaderLogo = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] w-full text-center">
      <img
        title=""
        src={media.logo}
        alt=""
        className="text-black box-border caret-transparent inline max-w-full outline-[3px] w-40 md:w-[200px]"
      />
    </div>
  );
};
