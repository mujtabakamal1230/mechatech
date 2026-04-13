"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, cardHover, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  index: number;
  className?: string;
  bgColor?: string;
}

export function ServiceCard({ service, index, className, bgColor }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      custom={index}
      whileHover="hover"
      animate="rest"
      className="h-full"
    >
      <motion.div
        variants={cardHover}
        className={cn(
          "p-8 md:p-10 h-full flex flex-col items-center text-center",
          "rounded-[18px] shadow-sm hover:shadow-md",
          className
        )}
        style={{ backgroundColor: bgColor || "#EAFEFF" }}
      >
        {/* Icon Frame: Circle with two dots */}
        <div className="relative mb-6">
          <div className="w-[90px] h-[90px] rounded-full border border-neutral-300/50 flex items-center justify-center bg-white/40 backdrop-blur-sm relative">
            {/* The Dots */}
            <div className="absolute top-0 left-2 w-2 h-2 rounded-full bg-[#239AA1]" />
            <div className="absolute bottom-1 right-2 w-2 h-2 rounded-full bg-[#239AA1]" />
            
            <Image
              src={service.icon}
              alt={service.title}
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-secondary mb-4 leading-tight">
          {service.title}
        </h3>
        
        <p className="text-[#666666] text-base font-normal leading-[30px] font-manrope">
          {service.description}
        </p>
      </motion.div>
    </motion.div>
  );
}
