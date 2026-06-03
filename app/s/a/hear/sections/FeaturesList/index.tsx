import { useScrollReveal } from "../../hooks/useScrollReveal";

const features = [
  {
    title: "Amazing Speech Clarity™",
    desc: "Effortlessly understand even with background noise, thanks to dual-processing",
    sup: null,
  },
  {
    title: "Bluetooth connectivity",
    desc: "Stream music and phone calls directly to your hearing aids",
    sup: "[1]",
  },
  {
    title: "Rechargeable lithium-ion batteries",
    desc: "No expensive batteries needed, simply charge overnight",
    sup: null,
  },
  {
    title: "Virtually invisible design",
    desc: "Disappears inside or behind the ear",
    sup: null,
  },
  {
    title: "Backed by audiologists",
    desc: "Recommended by thousands of hearing specialists across the U.S.",
    sup: null,
  },
  {
    title: "Loved by long-time hearing aid wearers",
    desc: "Significant improvements in speech clarity with IX technology platform",
    sup: "[2]",
  },
  {
    title: "Easy, comfortable fit",
    desc: "All-day wearing comfort, easy to combine with glasses",
    sup: null,
  },
  {
    title: "Free smartphone app",
    desc: "Adjust settings for every listening situation easily via smartphone",
    sup: null,
  },
  {
    title: "Ultra HD sound",
    desc: "For maximum sound quality & clarity",
    sup: null,
  },
  {
    title: "German technology",
    desc: "Developed by top audio engineers from Signia (formerly Siemens)",
    sup: null,
  },
];

export const FeaturesList = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div className="caret-transparent max-w-[830px] mx-auto px-5 md:px-8" ref={ref}>
      <div className="reveal caret-transparent mb-[30px] md:mb-10">
        <h1 className="text-[32px] font-bold caret-transparent leading-[41.6px] font-archivo md:text-4xl md:leading-[46.8px]">
          What makes Horizon IX so special?
        </h1>
      </div>
      <div className="reveal reveal-delay-1 caret-transparent mb-[30px]">
        <p className="text-[26px] caret-transparent leading-[39px]">
          It's one of the{" "}
          <mark className="font-bold bg-orange-200 caret-transparent">
            world's first hearing aids with dual processing.
          </mark>
        </p>
      </div>
      <div className="reveal reveal-delay-2 caret-transparent mb-[30px]">
        <p className="text-[26px] caret-transparent leading-[39px]">
          This is special because it's the first time engineers have been able
          to pack not one, but two state-of-the-art computer chips into a device
          this small.
        </p>
      </div>
      <div className="reveal reveal-delay-3 caret-transparent mb-[30px]">
        <p className="text-[26px] caret-transparent leading-[39px]">
          The result?{" "}
          <strong className="font-bold caret-transparent">
            An unprecedented amount of power and clarity.
          </strong>
        </p>
      </div>
      <div className="reveal reveal-delay-4 caret-transparent mb-[30px]">
        <p className="text-[26px] caret-transparent leading-[39px]">
          This means that Horizon IX offers all of the usual benefits of modern
          hearing aids—from smartphone connectivity to Bluetooth streaming—with
          the added bonus of something completely new: they can process speech
          and background noise independently, then recombine them for{" "}
          <strong className="font-bold caret-transparent">
            unparalleled, crystal clear sound.
          </strong>
        </p>
      </div>
      <div className="reveal caret-transparent mb-[30px]">
        <p className="text-[26px] caret-transparent leading-[39px]">
          &ldquo;It&#39;s not just about volume,&rdquo; explains hear.com founder Paul Crusius.
          &ldquo;It&#39;s about speech clarity. And that&#39;s precisely what Horizon IX is
          designed to optimize.&rdquo;
        </p>
      </div>
      <div className="reveal caret-transparent mb-10">
        <p className="text-[26px] caret-transparent leading-[39px]">
          In other words:{" "}
          <mark className="font-bold bg-orange-200 caret-transparent">
            with double the power comes double the clarity—and all that in a
            virtually invisible design!
          </mark>
        </p>
      </div>
      <div className="reveal caret-transparent mb-[30px]">
        <h2 className="text-[32px] font-bold caret-transparent leading-[41.6px] font-archivo md:text-4xl md:leading-[46.8px]">
          What exactly does Horizon IX have to offer?
        </h2>
      </div>
      <div className="reveal caret-transparent mb-[30px]">
        <p className="text-[26px] caret-transparent leading-[39px]">
          More than you think!
        </p>
      </div>
      <ul className="text-[26px] caret-transparent leading-[34.58px] list-none pl-5">
        {features.map((f, i) => (
          <li
            key={i}
            className={`reveal reveal-delay-${Math.min(i + 1, 5)} bg-no-repeat caret-transparent pl-16 pb-[35px] md:pl-[74px]`}
            style={{ backgroundImage: "url('https://media.audibene.net/dhqvlsb3l/image/upload/f_auto,fl_lossy,q_auto:eco,w_auto,dpr_auto/v1/assets/na/assets/miracle.png')", backgroundSize: "39px 28px", backgroundPosition: "left 0%", }}>
            <strong className="font-bold caret-transparent">
              {f.title}
              {f.sup && <sup className="text-xs caret-transparent leading-[15.96px]">{f.sup}</sup>}
            </strong>
            <span className="caret-transparent hidden md:block text-[22px] leading-[33px] font-normal">
              {f.desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
