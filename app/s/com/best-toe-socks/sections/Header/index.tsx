export function BestToeSocksHeader({ logo }: { logo: string }): JSX.Element {
  return (
    <header
      id="main-product"
      className="flex items-center border-b border-[#E8E8E8] bg-white md:h-12"
    >
      <div className="mx-auto w-full max-w-[1032px] px-4 py-2 md:py-0">
        <img
          src={logo}
          alt="PrimePicks"
          className="h-[25px] w-auto max-w-[194px] md:h-[30px]"
        />
      </div>
    </header>
  );
}
