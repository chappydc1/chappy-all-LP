export type NebrooHeroProductImageProps = {
  src: string;
  className: string;
};

export const NebrooHeroProductImage = (props: NebrooHeroProductImageProps) => {
  return (
    <img
      alt="0 Gloria Jenkins.webp"
      title=""
      src={props.src}
      
      className={`box-border caret-transparent max-w-full mt-2.5 ${props.className}`}
    />
  );
};
