const TICK = "/images/nebroo/1729048495546_bluetick_1_.webp";

const Item = ({ children }: { children: React.ReactNode }) => (
  <div className="items-center flex justify-start mt-5 first:mt-4">
    <div className="shrink-0 mr-2">
      <img src={TICK} alt="" className="inline h-[25px]" />
    </div>
    <div className="text-[17px] leading-[27px] font-montserrat">{children}</div>
  </div>
);

export const HeroFeatureList = () => {
  return (
    <div className="pl-2.5 pt-0 md:pt-2.5">
      <Item><b className="font-bold">Immediately improve your hearing,</b> inexpensively</Item>
      <Item><b className="font-bold">Bluetooth,</b> stream calls, videos, and music directly to your ears</Item>
      <Item><b className="font-bold">Nearly Invisible,</b> no one will notice</Item>
      <Item><b className="font-bold">Rechargeable -</b> 19 Hours of battery life</Item>
      <Item><b className="font-bold">Crystal clear audio</b> or your money back</Item>
      <Item><b className="font-bold">HSA/FSA Eligible</b></Item>
    </div>
  );
};
