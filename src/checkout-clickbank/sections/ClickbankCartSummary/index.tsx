"use client";

import { Check } from "lucide-react";
import { useCheckout } from "@/checkout-clickbank/components/CheckoutContext";
import { PayPalIcon } from "@/checkout-clickbank/components/PaymentBrandIcons";

const TRUST_BADGE_BASE = "/images/clickbank-checkout";

const CART_ITEM = {
  name: "Gruns Superfood Gummies – 3 Bottle Bundle",
  price: "$79.99",
  image: "/images/clickbank-checkout/product.webp",
};

const TOTALS = {
  subtotal: "$79.99",
  shipping: "FREE",
  tax: "$0.00",
  total: "$79.99",
};

export const ClickbankCartSummary = (): JSX.Element => {
  const { paymentMethod } = useCheckout();
  const isPayPal = paymentMethod === "paypal";

  return (
    <div className="w-full bg-white shadow-[0_4px_8px_0_rgba(14,13,38,0.16)]">
      <div className="px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold text-[#3f3d5c]">Cart Summary</h4>

        <div className="mb-4 flex items-center border-b border-gray-200 pb-4">
          <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden bg-gray-100">
            <img
              src={CART_ITEM.image}
              alt={CART_ITEM.name}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h5 className="text-sm font-semibold leading-snug text-[#3f3d5c]">
              {CART_ITEM.name}
            </h5>
            <span className="text-sm text-[#3f3d5c]">{CART_ITEM.price}</span>
          </div>
        </div>

        <div className="space-y-1 border-b border-gray-200 pb-4">
          <div className="flex items-center justify-between">
            <p className="text-base font-normal tracking-[0.08px] text-[#54527a]">Subtotal</p>
            <p className="text-base font-normal tracking-[0.08px] text-[#54527a]">{TOTALS.subtotal}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base font-normal tracking-[0.08px] text-[#54527a]">Shipping &amp; Handling</p>
            <p className="text-base font-normal tracking-[0.08px] text-[#54527a]">{TOTALS.shipping}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base font-normal tracking-[0.08px] text-[#54527a]">Tax</p>
            <p className="text-base font-normal tracking-[0.08px] text-[#54527a]">{TOTALS.tax}</p>
          </div>
          <div className="flex items-center justify-between font-bold">
            <p className="text-base tracking-[0.08px] text-[#54527a]">TOTAL</p>
            <p className="text-base tracking-[0.08px] text-[#54527a]">{TOTALS.total}</p>
          </div>
        </div>

        <label className="flex cursor-pointer items-start gap-2 border-b border-gray-200 py-4">
          <span className="relative mt-0.5 flex h-[14px] w-[14px] shrink-0 items-center justify-center">
            <input
              type="checkbox"
              name="marketingOptIn"
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
          <span className="relative top-[-3px] text-base font-normal leading-[21.28px] tracking-[0.08px] text-[#54527a]">
            Yes, I&apos;d like to receive exclusive content and promotions from this vendor
          </span>
        </label>

        <div className="pt-4">
          <div className="relative mb-3 h-[32px]">
            <p
              className="absolute inset-0 text-center text-[12.8px] leading-[15.36px] tracking-[0.08px] text-[#54527a] transition-opacity duration-200"
              style={{ opacity: isPayPal ? 1 : 0, pointerEvents: isPayPal ? "auto" : "none" }}
            >
              By clicking Continue to PayPal below, I agree to the{" "}
              <a href="#" className="text-blue-700 underline">Terms of Sale</a>.
            </p>
            <p
              className="absolute inset-0 text-center text-[12.8px] leading-[15.36px] tracking-[0.08px] text-[#54527a] transition-opacity duration-200"
              style={{ opacity: isPayPal ? 0 : 1, pointerEvents: isPayPal ? "none" : "auto" }}
            >
              By clicking Pay Now below, I agree to the{" "}
              <a href="#" className="text-blue-700 underline">Terms of Sale</a>.
            </p>
          </div>
          <div className="relative h-14">
            <button
              type="submit"
              aria-hidden={!isPayPal}
              className="absolute inset-0 flex w-full items-center justify-center bg-[#FFC439] transition-opacity duration-200"
              style={{ opacity: isPayPal ? 1 : 0, pointerEvents: isPayPal ? "auto" : "none" }}
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4="
                alt="PayPal"
                className="h-6 w-auto"
              />
            </button>
            <button
              type="submit"
              aria-hidden={isPayPal}
              className="absolute inset-0 flex w-full items-center justify-center bg-[#e5202e] text-2xl font-bold text-white transition-opacity duration-200"
              style={{ opacity: isPayPal ? 0 : 1, pointerEvents: isPayPal ? "none" : "auto" }}
            >
              Pay Now
            </button>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <img
              src={`${TRUST_BADGE_BASE}/digicert.png`}
              alt="DigiCert Secured"
              className="h-8 w-auto"
            />
            <img
              src={`${TRUST_BADGE_BASE}/blue-seal-160-82-bbb-5004291.png`}
              alt="BBB Accredited Business"
              className="h-10 w-auto"
            />
            <img
              src={`${TRUST_BADGE_BASE}/trustedsite.svg`}
              alt="TrustedSite Certified"
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
