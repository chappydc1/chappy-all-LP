type NavbarLogoProps = {
  src: string;
  alt: string;
};

export function KachavaNavbarLogo({ src, alt }: NavbarLogoProps) {
  return (
    <div className="items-center self-center box-border caret-transparent flex h-full min-h-[auto] min-w-[auto] outline-[3px] w-6/12 md:w-[33.3333%]">
      <a
        href="/"
        aria-label="Go to Home Page"
        className="relative box-border caret-transparent block max-w-[95px] min-h-[auto] min-w-[auto] outline-[3px] md:max-w-[155px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="box-border caret-transparent inline outline-[3px] w-full"
        />
        <span className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0" />
      </a>
    </div>
  );
}
