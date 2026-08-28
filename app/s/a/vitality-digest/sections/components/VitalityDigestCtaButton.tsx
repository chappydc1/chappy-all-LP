export type VitalityDigestCtaButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const VitalityDigestCtaButton = ({
  href,
  children,
  className = "",
}: VitalityDigestCtaButtonProps): React.ReactElement => {
  return (
    <a
      href={href}
      className={`block bg-green-600 text-slate-50 text-xl font-bold tracking-[0.4px] leading-5 text-center no-underline w-full m-2.5 py-5 rounded-[10px] pointer-events-auto ${className}`}
    >
      {children}
    </a>
  );
};
