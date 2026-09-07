"use client";

import type { FormEvent, ReactNode } from "react";
import { CheckoutProvider } from "@/checkout-clickbank/components/CheckoutContext";

// Replace with the actual Clickbank order URL for this product.
const CLICKBANK_ORDER_URL = "https://order.clickbank.net/";

type ClickbankCheckoutFormProps = {
  children: ReactNode;
};

export const ClickbankCheckoutForm = ({ children }: ClickbankCheckoutFormProps): JSX.Element => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    window.location.href = CLICKBANK_ORDER_URL;
  };

  return (
    <CheckoutProvider>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 md:flex-nowrap">
        {children}
      </form>
    </CheckoutProvider>
  );
};
