"use client";

import { motion } from "framer-motion";
import { fadeIn, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  viewport?: any;
}

export function SectionWrapper({ children, className, id, style, viewport }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      style={style}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewport || viewportConfig}
      className={cn("section-padding", className)}
    >
      {children}
    </motion.section>
  );
}
