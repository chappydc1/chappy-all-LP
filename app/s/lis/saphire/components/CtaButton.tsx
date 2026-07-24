import type { ReactNode } from "react";

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function CtaButton({ href, children, className = "" }: CtaButtonProps) {
  return (
    <a
      href={href}
      className={`inline-block w-full max-w-[600px] rounded-[5px] bg-adv-orange px-5 py-3.5 text-center text-lg font-semibold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:brightness-110 md:w-auto md:max-w-none md:px-10 md:py-5 md:text-[32px] ${className}`}
    >
      {children}
    </a>
  );
}
