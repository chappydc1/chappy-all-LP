export const DerilaNavbarLogo = ({
  homeUrl,
  logo,
}: {
  homeUrl: string;
  logo: { src: string; alt: string };
}) => {
  return (
    <a
      href={homeUrl}
      className="box-border caret-transparent block max-w-[130px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={logo.alt}
        className="box-border caret-transparent max-w-[130px] outline-[3px] mx-auto md:mx-0"
      />
    </a>
  );
};
