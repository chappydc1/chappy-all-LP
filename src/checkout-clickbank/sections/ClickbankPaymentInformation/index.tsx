"use client";

import { Info, Lock } from "lucide-react";
import { FloatingInput } from "@/checkout-clickbank/components/FloatingInput";
import {
  AmexIcon,
  DinersIcon,
  DiscoverIcon,
  MastercardIcon,
  PayPalIcon,
  VisaIcon,
} from "@/checkout-clickbank/components/PaymentBrandIcons";
import { useCheckout } from "@/checkout-clickbank/components/CheckoutContext";

export const ClickbankPaymentInformation = (): JSX.Element => {
  const { paymentMethod: method, setPaymentMethod: setMethod } = useCheckout();

  return (
    <div className="mt-4 w-full bg-white shadow-[0_4px_8px_0_rgba(14,13,38,0.16)]">
      <div className="px-6 py-4">
        <h4 className="hyphens-auto break-words text-xl font-semibold tracking-[0.08px] text-[#3f3d5c] [word-break:break-word]">
          Payment Information
        </h4>
        <p className="mb-4 mt-0 text-sm leading-[21px] tracking-[0.08px] text-[#3f3d5c]">
          All transactions are secure and encrypted.
        </p>

        <div className="border-t border-gray-200">
          <label className="flex h-14 cursor-pointer items-center gap-3 border-b border-gray-200">
            <input
              type="radio"
              name="paymentMethod"
              checked={method === "paypal"}
              onChange={() => setMethod("paypal")}
              className="ml-1 h-4 w-4"
            />
            <PayPalIcon />
          </label>

          <label className="flex h-14 cursor-pointer items-center justify-between">
            <span className="flex items-center gap-3">
              <input
                type="radio"
                name="paymentMethod"
                checked={method === "card"}
                onChange={() => setMethod("card")}
                className="ml-1 h-4 w-4"
              />
              <span className="flex cursor-pointer select-none items-center text-lg font-semibold leading-[23.94px] tracking-[0.08px] text-[#3f3d5c]">
                Credit Card
              </span>
            </span>
            <span className="mr-2 flex items-center gap-1.5">
              <VisaIcon />
              <MastercardIcon />
              <AmexIcon />
              <DinersIcon />
              <DiscoverIcon />
            </span>
          </label>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateRows: method === "card" ? "1fr" : "0fr",
            transition: "grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="overflow-hidden">
            <div className="mt-4 grid grid-cols-1 gap-4 px-2 md:grid-cols-2">
              <div className="md:col-span-2">
                <FloatingInput
                  id="cardNumber"
                  label="Card Number"
                  name="cardNumber"
                  required={method === "card"}
                  disabled={method !== "card"}
                  icon={<Lock className="h-5 w-5" aria-hidden="true" />}
                />
              </div>

              <FloatingInput
                id="expirationDate"
                label="Expiration Date"
                name="expirationDate"
                placeholder="MM/YY"
                required={method === "card"}
                disabled={method !== "card"}
              />

              <FloatingInput
                id="securityCode"
                label="Security Code"
                name="securityCode"
                required={method === "card"}
                disabled={method !== "card"}
                icon={<Info className="h-5 w-5" aria-hidden="true" />}
              />

              <div className="md:col-span-2">
                <FloatingInput
                  id="cardHolderName"
                  label="Cardholder Name"
                  name="cardHolderName"
                  required={method === "card"}
                  disabled={method !== "card"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
