import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Stagger animation delay helper
 */
export function getStaggerDelay(index: number, base = 0.1): number {
  return index * base;
}

/**
 * Format number with suffix
 */
export function formatStat(value: number): string {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k+`;
  }
  return `${value}+`;
}
