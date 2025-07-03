import type { ButtonHTMLAttributes } from "react";

type CustomButtonProps = {
  label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ label, ...props }: CustomButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-[25px] bg-[#EEF4EE] px-10 py-1 text-lg text-[#094d28] ${props.className}`}
    >
      {label}
    </button>
  );
}
