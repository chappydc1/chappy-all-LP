import { content } from "../../../content";

export const TrustScore = () => {
  return (
    <div className="items-center box-border caret-transparent flex justify-center mb-0 md:justify-start md:mb-[11px]">
      <div className="text-[rgb(30,42,50)] text-[14.32px] font-normal box-border caret-transparent leading-[20.048px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        {content.hero.trustLabel}
      </div>
      <div className="box-border caret-transparent min-h-0 min-w-0 w-[70px] ml-[11px] mr-[9px] md:min-h-[auto] md:min-w-[auto]">
        <img
          src={content.hero.trustpilotStarsUrl}
          alt=""
          className="box-border caret-transparent inline-block h-full max-w-full w-full -top-0.5"
        />
      </div>
      <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <div className="text-[rgb(30,42,50)] text-[14.32px] font-normal box-border caret-transparent leading-[20.048px]">
          {content.hero.trustScoreLabel}{" "}
          <strong className="font-bold">{content.hero.trustScoreValue}</strong>
        </div>
      </div>
      <div className="relative box-border caret-transparent min-h-0 min-w-0 w-20 ml-3 md:min-h-[auto] md:min-w-[auto]">
        <img
          src={content.hero.trustpilotLogoUrl}
          alt=""
          className="box-border caret-transparent inline-block h-full max-w-full w-full"
        />
      </div>
    </div>
  );
};
