"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonTap } from "@/lib/animations";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-white hover:bg-primary-600 shadow-glow-sm hover:shadow-glow active:bg-primary-700",
        secondary:
          "bg-secondary text-white hover:bg-secondary-light active:bg-secondary-dark",
        outline:
          "border-2 border-primary-500 text-primary-500 bg-transparent hover:bg-primary-50 active:bg-primary-100",
        ghost:
          "text-secondary hover:text-primary-500 hover:bg-neutral-100 bg-transparent",
        "outline-white":
          "border-2 border-white text-white bg-transparent hover:bg-white hover:text-secondary",
      },
      size: {
        sm: "text-sm px-4 py-2 h-9",
        md: "text-sm px-6 py-2.5 h-11",
        lg: "text-base px-8 py-3 h-12",
        xl: "text-base px-10 py-4 h-14",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={buttonTap}
        className={cn(buttonVariants({ variant, size, className }))}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
