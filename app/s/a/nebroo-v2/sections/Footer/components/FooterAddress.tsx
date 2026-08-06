type Props = { address: string; paymentMethodsSrc: string };

export const FooterAddress = ({ address, paymentMethodsSrc }: Props) => {
  return (
    <div className="text-neutral-500 box-border caret-transparent outline-[3px] text-center w-full px-2.5">
      <div className="text-[13px] box-border caret-transparent basis-[0%] shrink-0 leading-[19.5px] outline-[3px] mb-[5px] rounded-[1px] font-montserrat">
        {address}
      </div>
      <img
        alt="Payment Methods"
        title=""
        src={paymentMethodsSrc}
        className="box-border caret-transparent inline max-w-[95%] outline-[3px] w-[280px]"
      />
    </div>
  );
};
