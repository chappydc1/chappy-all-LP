import { content } from "../../../content";

export const NuzVideoDesktop = () => {
  const v = content.video;
  return (
    <div className="items-start box-border caret-transparent hidden flex-col justify-start max-w-full min-h-0 min-w-0 w-full md:flex md:max-w-[46%] md:min-h-[auto] md:min-w-[auto]">
      <div className="relative box-border caret-transparent min-h-0 min-w-0 w-full pt-[56.25%] md:min-h-[auto] md:min-w-[auto]">
        <iframe
          src={`https://customer-sw7km7bonaql0e2y.cloudflarestream.com/${v.videoId}/iframe?muted=true&autoplay=false&controls=true`}
          title="Preview Video"
          className="absolute box-border caret-transparent h-full pointer-events-none align-baseline w-full left-0 top-0"
        ></iframe>
        <div className="absolute box-border caret-transparent transform-none z-[1] left-2/4 top-2/4 md:translate-x-[-50.0%] md:translate-y-[-50.0%]">
          <img
            src={v.playIconUrl}
            alt="Icon"
            className="box-border caret-transparent inline h-16 align-baseline w-16"
          />
        </div>
      </div>
    </div>
  );
};
