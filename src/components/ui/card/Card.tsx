import type { HTMLAttributes, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={`text-primary z-10 h-full min-h-40 max-w-[18rem] rounded-4xl bg-white p-6 shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}
