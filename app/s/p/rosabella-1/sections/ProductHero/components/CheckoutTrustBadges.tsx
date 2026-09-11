import media from "../../../media.json"

export const CheckoutTrustBadges = () => {
  return (
    <div className="bg-stone-50 box-border caret-transparent outline-[3px] w-full mt-5 p-[18px] rounded-sm">
      <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
        <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px]">
          <img
            title=""
            src={media.icons.fastDelivery}
            alt=""
            className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[13px] mr-2"
          />
          <div className="text-black text-[15px] font-medium box-border caret-transparent tracking-[-0.32px] leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat">
            Fast Delivery
          </div>
        </div>
        <div className="text-black text-lg box-border caret-transparent tracking-[-0.32px] leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] px-4 font-montserrat">
          |
        </div>
        <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px]">
          <img
            title=""
            src={media.icons.secureCheckout}
            alt=""
            className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[13px] mr-2"
          />
          <div className="text-black text-[15px] font-medium box-border caret-transparent tracking-[-0.32px] leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat">
            Secure Checkout
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent outline-[3px] w-full mt-2.5 text-center">
        <img
          title=""
          src={media.checkout.paymentBadges}
          alt=""
          className="text-black box-border caret-transparent inline max-w-full outline-[3px] w-[308px]"
        />
      </div>
    </div>
  );
};
