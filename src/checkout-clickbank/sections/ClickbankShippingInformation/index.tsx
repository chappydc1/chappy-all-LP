"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { FloatingInput } from "@/checkout-clickbank/components/FloatingInput";
import { FloatingSelect } from "@/checkout-clickbank/components/FloatingSelect";

const COUNTRIES = [
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "CA", label: "Canada" },
  { value: "AU", label: "Australia" },
  { value: "NZ", label: "New Zealand" },
  { value: "MX", label: "Mexico" },
  { value: "IE", label: "Ireland" },
];

export const ClickbankShippingInformation = (): JSX.Element => {
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

  return (
    <div className="mt-4 w-full bg-white shadow-[0_4px_8px_0_rgba(14,13,38,0.16)]">
      <div className="px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold text-[#3f3d5c]">Shipping Information</h4>

        <div className="space-y-4">
          <FloatingSelect id="shipping-country" name="shipping.countryCode" label="Country" required defaultValue="US">
            {COUNTRIES.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </FloatingSelect>

          <FloatingInput id="fullName" label="Full Name" name="fullName" required />

          <FloatingInput id="address1" label="Street Address" name="shipping.address1" required />

          <FloatingInput id="address2" label="Apt / Suite / Other" name="shipping.address2" />

          <div className="grid grid-cols-3 gap-4">
            <FloatingInput id="zip" label="Zip Code" name="shipping.zip" required />
            <FloatingInput id="city" label="City" name="shipping.city" required />
            <FloatingInput id="state" label="State" name="shipping.state" required />
          </div>

          <label className="flex cursor-pointer items-center gap-2">
            <span className="relative flex h-[14px] w-[14px] shrink-0 items-center justify-center">
              <input
                type="checkbox"
                name="billingSameAsShipping"
                checked={billingSameAsShipping}
                onChange={(e) => setBillingSameAsShipping(e.target.checked)}
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
            <span className="cursor-pointer text-sm text-[#3f3d5c]">Billing same as Shipping</span>
          </label>
        </div>

        {!billingSameAsShipping && (
          <div className="mt-6 space-y-4">
            <h4 className="text-xl font-semibold text-[#3f3d5c]">Billing Information</h4>

            <FloatingSelect id="billing-country" name="billing.countryCode" label="Country" required defaultValue="US">
              {COUNTRIES.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </FloatingSelect>

            <FloatingInput id="billing-address1" label="Street Address" name="billing.address1" required />

            <FloatingInput id="billing-address2" label="Apt / Suite / Other" name="billing.address2" />

            <div className="grid grid-cols-3 gap-4">
              <FloatingInput id="billing-zip" label="Zip Code" name="billing.zip" required />
              <FloatingInput id="billing-city" label="City" name="billing.city" required />
              <FloatingInput id="billing-state" label="State" name="billing.state" required />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
