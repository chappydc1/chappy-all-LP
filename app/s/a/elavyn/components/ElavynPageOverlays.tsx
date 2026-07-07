export type ElavynPageOverlaysProps = {
  variant: "empty" | "overlay" | "image";
};

export const ElavynPageOverlays = (props: ElavynPageOverlaysProps) => {
  if (props.variant === "image") {
    return (
      <img
        src="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/image-1.png"
        className="fixed text-[15px] aspect-[auto_800_/_600] box-border caret-transparent h-full leading-[27px] outline-[3px] pointer-events-none align-baseline w-full z-[1051] left-0 top-0 md:text-base md:leading-[28.8px]"
      />
    );
  }

  return (
    <div
      className={`text-[15px] box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px] ${props.variant === "overlay" ? "relative block z-[1051]" : ""}`}
    ></div>
  );
};
