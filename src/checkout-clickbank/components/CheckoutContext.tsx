"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type PaymentMethod = "card" | "paypal";

type CheckoutContextValue = {
  paymentMethod: PaymentMethod;
  setPaymentMethod: (m: PaymentMethod) => void;
};

const CheckoutContext = createContext<CheckoutContextValue>({
  paymentMethod: "card",
  setPaymentMethod: () => {},
});

export const CheckoutProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  return (
    <CheckoutContext.Provider value={{ paymentMethod, setPaymentMethod }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = (): CheckoutContextValue => useContext(CheckoutContext);
