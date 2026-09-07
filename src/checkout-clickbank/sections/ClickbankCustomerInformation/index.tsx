import { Check } from "lucide-react";
import { ClickbankPhoneInput } from "@/checkout-clickbank/components/ClickbankPhoneInput";
import { FloatingInput } from "@/checkout-clickbank/components/FloatingInput";

export const ClickbankCustomerInformation = (): JSX.Element => {
  return (
    <div className="w-full bg-white shadow-[0_4px_8px_0_rgba(14,13,38,0.16)]">
      <div className="px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold text-[#3f3d5c]">Customer Information</h4>

        <div className="mb-4">
          <FloatingInput id="email" label="Email Address" type="email" name="email" required />
          <p className="mt-[3px] text-sm leading-[18.62px] tracking-[0.112px] text-[#54527a]">
            To receive an email order confirmation.
          </p>
        </div>

        <div className="mb-2">
          <ClickbankPhoneInput id="phone" required />
          <p className="mx-3 mt-[3px] text-sm leading-[18.62px] tracking-[0.112px] text-[#54527a]">
            In case we need to call about the order.
          </p>
        </div>

        <label className="mt-2 flex cursor-pointer items-start gap-2">
          <span className="relative mt-0.5 flex h-[14px] w-[14px] shrink-0 items-center justify-center">
            <input
              type="checkbox"
              name="smsCheckbox"
              className="peer absolute inset-0 h-[14px] w-[14px] cursor-pointer opacity-0"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[2px] border border-[#54527a] transition-colors duration-200 peer-checked:hidden"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden items-center justify-center rounded-[2px] bg-[#54527a] transition-colors duration-200 peer-checked:flex"
            >
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} aria-hidden="true" />
            </span>
          </span>
          <span className="cursor-pointer text-sm font-semibold leading-[18.62px] tracking-[0.08px] text-[#54527a]">
            Get SMS alerts for order and shipping confirmations.
          </span>
        </label>
        <p className="ml-[21.5px] text-xs leading-[15.96px] tracking-[0.08px] text-[#54527a]">
          Consent is not required for purchase.
        </p>
      </div>
    </div>
  );
};
