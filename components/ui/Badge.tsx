import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export function Badge({ children, variant = "primary", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-sans",
        {
          "bg-accent text-primary-600": variant === "primary",
          "bg-neutral-100 text-neutral-600": variant === "secondary",
          "bg-primary-500 text-white": variant === "accent",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
