export type CopdCartProductCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  price: string;
  description: string;
  buttonText: string;
};

export const CopdCartProductCard = (props: CopdCartProductCardProps) => {
  return (
    <div className="bg-white box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-center pt-[9.5px] pb-3 px-3 rounded-xl">
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className="aspect-[auto_200_/_200] box-border caret-transparent max-w-full outline-[3px] w-[200px] mx-auto"
      />
      <h5 className="text-base font-bold box-border caret-transparent tracking-[-0.8px] leading-[22.4px] outline-[3px] mt-2 mb-1">
        {props.title}
      </h5>
      <div className="items-center box-border caret-transparent gap-x-1 flex flex-row-reverse justify-center leading-[26px] outline-[3px] gap-y-1 mb-1">
        <span className="text-sm font-bold box-border caret-transparent block leading-[19.6px] min-h-[auto] min-w-[auto] opacity-95 outline-[3px]">
          {props.price}
        </span>
      </div>
      <p className="text-xs font-medium box-border caret-transparent inline-block leading-[16.8px] outline-[3px] mb-3">
        {props.description}
      </p>
      <button className="text-white text-sm font-bold bg-green-700 shadow-[rgb(0,38,19)_1px_1px_0px_0px] caret-transparent leading-[14px] outline-[3px] w-full border border-green-950 px-4 py-2 rounded-[100px]">
        {props.buttonText}
      </button>
    </div>
  );
};
