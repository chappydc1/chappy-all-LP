import adv from "../../../../copy.json";

export const NexaComments = () => {
  return (
    <div className="text-lg font-bold box-border caret-transparent leading-[18px] outline-[3px] mt-[55px] font-montserrat">
      <div className="box-border caret-transparent outline-[3px] text-left">
        <span className="box-border caret-transparent outline-[3px]">
          {adv.comments.heading}
        </span>
      </div>
    </div>
  );
};
