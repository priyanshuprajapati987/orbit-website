import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer",
          "focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-red-600 text-white hover:bg-red-700 glow-red glow-red-hover": variant === "primary",
            "bg-zinc-800 text-white hover:bg-zinc-700": variant === "secondary",
            "border border-zinc-700 text-white hover:bg-zinc-800": variant === "outline",
            "text-zinc-400 hover:text-white hover:bg-zinc-800": variant === "ghost",
          },
          {
            "text-sm px-3 py-1.5": size === "sm",
            "text-sm px-4 py-2": size === "md",
            "text-base px-6 py-3": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
