import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", href, className, children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300 relative group overflow-hidden px-8 py-4";
  
  const variants = {
    primary: "bg-primary text-white hover:pl-10 before:absolute before:left-0 before:top-0 before:h-full before:w-0 hover:before:w-2 before:bg-tertiary before:transition-all before:duration-300",
    secondary: "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-primary hover:text-tertiary px-0 py-2",
  };

  const combinedStyles = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};
