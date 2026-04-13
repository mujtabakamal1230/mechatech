"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { StatItem } from "@/types";

interface StatCounterProps {
  stat: StatItem;
  className?: string;
}

export function StatCounter({ stat, className }: StatCounterProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn("text-center group", className)}
    >
      <div className="font-sans font-bold text-4xl md:text-5xl text-primary-500 mb-1 group-hover:scale-110 transition-transform duration-200">
        {stat.value}
      </div>
      <div className="text-sm text-neutral-500 font-medium">{stat.label}</div>
    </motion.div>
  );
}
