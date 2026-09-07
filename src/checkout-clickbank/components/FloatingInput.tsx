"use client";

import {
  useState,
  type AnimationEvent,
  type ChangeEvent,
  type FocusEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

type FloatingInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  id: string;
  label: string;
  icon?: ReactNode;
};

export const FloatingInput = ({
  id,
  label,
  icon,
  required,
  placeholder,
  value,
  defaultValue,
  onFocus,
  onBlur,
  onChange,
  className,
  ...props
}: FloatingInputProps): JSX.Element => {
  const [invalid, setInvalid] = useState(false);
  const [focused, setFocused] = useState(false);
  const [empty, setEmpty] = useState(
    (value ?? defaultValue ?? "").toString().length === 0
  );

  const floated = focused || !empty;

  const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
    setFocused(false);
    setEmpty(event.target.value.length === 0);
    setInvalid(!event.target.checkValidity());
    onBlur?.(event);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmpty(event.target.value.length === 0);
    onChange?.(event);
  };

  const handleAnimationStart = (event: AnimationEvent<HTMLInputElement>): void => {
    if (event.animationName === "cb-autofill-detect") {
      setEmpty(event.currentTarget.value.length === 0);
    }
  };

  return (
    <div>
      <div
        className={`group relative border bg-white ${
          invalid ? "border-red-600" : "border-gray-400 focus-within:border-[#2c20df]"
        }`}
      >
        <label
          htmlFor={id}
          className={`absolute left-3 font-bold transition-all duration-150 ${
            floated ? "top-2 text-xs" : "top-1/2 -translate-y-1/2 text-base"
          } ${invalid ? "text-red-700" : "text-[#3f3d5c] group-focus-within:text-[#2c20df]"}`}
        >
          {label}
          {required ? "*" : ""}
        </label>
        <input
          id={id}
          required={required}
          value={value}
          defaultValue={defaultValue}
          placeholder={floated ? placeholder : undefined}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onAnimationStart={handleAnimationStart}
          className={`cb-floating-input h-14 w-full bg-transparent px-3 pb-2 pt-6 text-base text-[#3f3d5c] caret-[#3f3d5c] outline-none ${
            icon ? "pr-10" : ""
          } ${className ?? ""}`}
          {...props}
        />
        {icon ? (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#3f3d5c]">
            {icon}
          </span>
        ) : null}
      </div>
      {invalid ? (
        <p className="mt-1 text-xs text-red-600">
          {label} is {empty ? "required" : "invalid"}
        </p>
      ) : null}
    </div>
  );
};
