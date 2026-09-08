import { Lock } from "lucide-react";

export const ClickbankHeader = (): JSX.Element => {
  return (
    <header
      aria-label="secure checkout"
      className="flex h-10 w-full items-center justify-center bg-[#e3e3e8]"
    >
      <Lock className="mr-2 h-4 w-4 text-[#3f3d5c]" aria-hidden="true" />
      <p className="text-base font-bold text-[#3f3d5c]">Secure Checkout</p>
    </header>
  );
};
