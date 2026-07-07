export const DerilaStickyBottomCta = ({
  label,
  productUrl,
}: {
  label: string;
  productUrl: string;
}) => {
  return (
    <div className="sticky box-border caret-transparent outline-[3px] bottom-0">
      <a
        href={productUrl}
        className="text-white text-[19px] font-extrabold bg-[linear-gradient(rgb(75,166,20),rgb(0,140,0))] box-border caret-transparent block leading-[22.8px] outline-[3px] text-center align-middle border border-lime-800 mt-6 px-5 py-4 border-solid md:hidden hover:bg-lime-700 hover:border-lime-900"
      >
        {label}
      </a>
    </div>
  );
};
