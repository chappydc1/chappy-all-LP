import { ClickbankHeader } from "@/checkout-clickbank/sections/ClickbankHeader";
import { ClickbankCheckoutForm } from "@/checkout-clickbank/sections/ClickbankCheckoutForm";
import { ClickbankCustomerInformation } from "@/checkout-clickbank/sections/ClickbankCustomerInformation";
import { ClickbankPaymentInformation } from "@/checkout-clickbank/sections/ClickbankPaymentInformation";
import { ClickbankShippingInformation } from "@/checkout-clickbank/sections/ClickbankShippingInformation";
import { ClickbankCartSummary } from "@/checkout-clickbank/sections/ClickbankCartSummary";
import { ClickbankFooter } from "@/checkout-clickbank/sections/ClickbankFooter";

export default function ClickbankCheckoutPage(): JSX.Element {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white text-[#3f3d5c]">
      <ClickbankHeader />

      <main className="mx-auto w-full max-w-[994px] flex-1 px-4 py-6">
        <ClickbankCheckoutForm>
          <div className="w-full md:w-1/2">
            <ClickbankCustomerInformation />
            <ClickbankPaymentInformation />
            <ClickbankShippingInformation />
          </div>
          <div className="w-full md:w-1/2">
            <ClickbankCartSummary />
          </div>
        </ClickbankCheckoutForm>
      </main>

      <ClickbankFooter />
    </div>
  );
}
