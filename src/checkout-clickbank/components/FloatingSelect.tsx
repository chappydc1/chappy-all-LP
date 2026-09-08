import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

type FloatingSelectProps = {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  defaultValue?: string;
  children: ReactNode;
};

export const FloatingSelect = ({
  id,
  name,
  label,
  required,
  defaultValue,
  children,
}: FloatingSelectProps): JSX.Element => {
  return (
    <div className="group relative border border-gray-400 bg-white focus-within:border-[#2c20df]">
      <label
        htmlFor={id}
        className="absolute left-3 top-2 text-xs font-bold text-[#3f3d5c] group-focus-within:text-[#2c20df]"
      >
        {label}
        {required ? "*" : ""}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="h-14 w-full appearance-none bg-transparent px-3 pb-2 pt-6 text-base text-[#3f3d5c] outline-none"
      >
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#3f3d5c]"
        aria-hidden="true"
      />
    </div>
  );
};
