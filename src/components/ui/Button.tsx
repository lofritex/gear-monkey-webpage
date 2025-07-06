import type { ButtonHTMLAttributes } from "react";

type CustomButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  label,
  variant,
  ...props
}: CustomButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-[25px] px-2 py-1 text-lg lg:px-10 ${props.className} ${variant === "secondary" ? "bg-primary text-white" : "bg-[#EEF4EE] text-[#094d28]"}`}
    >
      {label}
    </button>
  );
}
