export function HeaderLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="box-border caret-transparent shrink-0 max-w-full outline-[3px]">
      <div className="text-[0px] box-border caret-transparent flex leading-[0px] outline-[3px]">
        <div className="box-border caret-transparent h-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="box-border caret-transparent h-10 outline-[3px] text-center w-full py-2.5 md:h-[60px]">
            <picture className="box-border caret-transparent outline-[3px]">
              <img
                src={src}
                alt={alt}
                className="box-border caret-transparent inline h-full max-w-full outline-[3px] align-baseline rounded-[5px]"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}
