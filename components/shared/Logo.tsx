import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  scrolled?: boolean;
  className?: string;
}

export function Logo({ variant = "dark", scrolled = false, className }: LogoProps) {
  const isLight = variant === "light" || (!scrolled && variant !== "dark");

  return (
    <a href="#home" className={cn("flex items-center gap-2 group", className)}>
      {
        isLight ? (
          <Image src="/images/logo.png" alt="Logo" className="h-12 object-contain" width={200} height={64} />
        ) : (
          <Image src="/images/logo.png" alt="Logo" className="h-12 object-contain" width={200} height={64} />
        )
      }
    </a>
  );
}
