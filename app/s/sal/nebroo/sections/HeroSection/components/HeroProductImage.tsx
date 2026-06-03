export type HeroProductImageProps = {
  src: string;
  className: string;
};

export const HeroProductImage = (props: HeroProductImageProps) => {
  return (
    <img
      alt="0 Gloria Jenkins.webp"
      title=""
      src={props.src}
      
      className={`box-border caret-transparent max-w-full mt-2.5 ${props.className}`}
    />
  );
};
