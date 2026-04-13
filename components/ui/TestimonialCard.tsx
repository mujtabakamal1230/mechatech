import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, cardHover, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <motion.div
      variants={{ ...fadeInUp, ...cardHover }}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      animate="rest"
      viewport={viewportConfig}
      className={cn(
        "bg-[#239194] rounded-[24px] p-8 flex flex-col gap-4 h-full shadow-sm hover:shadow-md transition-shadow duration-200",
        className
      )}
    >
      {/* Client Logo */}
      <div className="relative w-full h-[64px] flex items-start">
        <Image
          src={testimonial.logo}
          alt={testimonial.company}
          width={180}
          height={72}
          className="object-contain object-left filter brightness-0 invert opacity-90 max-h-[64px]"
        />
      </div>

      {/* Testimonial Content */}
      <p className="text-white text-sm md:text-[16px] font-normal leading-loose flex-1">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Author Info */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[1px] bg-white opacity-60" />
          <h4 className="text-white font-bold text-lg md:text-xl">
            {testimonial.author}
          </h4>
        </div>
        <div className="flex flex-col pl-16">
          <span
            className="font-manrope font-normal text-[#44E5E9]"
            style={{
              fontSize: "12px",
              lineHeight: "10.43px",
              letterSpacing: "-0.19px"
            }}
          >
            {testimonial.role}, {testimonial.company}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
