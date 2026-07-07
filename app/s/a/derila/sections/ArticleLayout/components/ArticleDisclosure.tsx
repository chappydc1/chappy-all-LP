import adv from "../../../copy.json";

export const ArticleDisclosure = () => {
  const { lines } = adv.disclosure;

  return (
    <div className="text-[10px] box-border caret-transparent outline-[3px] text-center mt-12">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent leading-[13.75px] outline-[3px]">
          {lines.map((line, i) => (
            <p key={i} className="box-border caret-transparent outline-[3px]">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
