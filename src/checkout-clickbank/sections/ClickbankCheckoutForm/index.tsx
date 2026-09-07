"use client";

import type { FormEvent, ReactNode } from "react";
import { CheckoutProvider } from "@/checkout-clickbank/components/CheckoutContext";

type ClickbankCheckoutFormProps = {
  children: ReactNode;
};

export const ClickbankCheckoutForm = ({ children }: ClickbankCheckoutFormProps): JSX.Element => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <CheckoutProvider>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 md:flex-nowrap">
        {children}
      </form>
    </CheckoutProvider>
  );
};
