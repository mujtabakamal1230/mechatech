"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { PROCESS_STEPS } from "@/lib/data";

export function ProcessSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const linePattern = [
    { color: "#239AA1" }, // 1-2
    { color: "#239AA1" }, // 2-3
    { color: "#1A1A1A" }, // 3-4 (Dark)
    { color: "#239AA1" }, // 4-5
    { color: "#239AA1" }, // 5-6
    { color: "#1A1A1A" }, // 6-End
  ];

  const dotColors = [
    "#1A1A1A", // 1
    "#239AA1", // 2
    "#239AA1", // 3
    "#1A1A1A", // 4
    "#239AA1", // 5
    "#239AA1", // 6
  ];

  const cardVariants = {
    rest: { y: 0, scale: 1 },
    hover: { 
      y: -8, 
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <SectionWrapper id="process" className="bg-white py-24">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">
            The Mechatech Way
          </h2>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          <div className="w-full">

            {/* Steps Visuals Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-8"
            >
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={step.id}
                  variants={{ ...fadeInUp, ...cardVariants }}
                  animate={hoveredIndex === idx ? "hover" : "rest"}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover="hover"
                >
                  <div className="rounded-[20px] overflow-hidden shadow-sm border border-neutral-100 cursor-pointer">
                    <Image
                      src={`/images/way/${idx + 1}.png`}
                      alt={step.title}
                      width={500}
                      height={300}
                      className="w-full h-auto block"
                    />
                  </div>
                  {/* Title for mobile (hidden on desktop) */}
                  <div className="mt-4 lg:hidden">
                    <h3
                      className={`font-manrope font-semibold transition-colors duration-300 ${
                        hoveredIndex === idx ? "text-[#239AA1]" : "text-secondary"
                      }`}
                      style={{
                        fontSize: "18px",
                        lineHeight: "22px",
                        letterSpacing: "-0.2px"
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Timeline Line & Dots - HIDDEN ON MOBILE */}
            <div className="hidden lg:flex relative h-px w-full mb-10 items-center">
              {/* Full end-to-end line using the segments pattern */}
              <div className="absolute inset-0 flex z-0">
                {linePattern.map((line, idx) => (
                  <div
                    key={idx}
                    className="flex-1 h-full"
                    style={{ backgroundColor: line.color }}
                  />
                ))}
              </div>

              {/* Dots - Positioned at the start of each column */}
              <div className="absolute inset-0 flex items-center z-10">
                <div className="w-full flex justify-between relative">
                  {/* Step Dots */}
                  {dotColors.map((color, idx) => (
                    <div
                      key={idx}
                      className="w-2 h-2 rounded-full absolute -ml-1 transition-all duration-300"
                      style={{
                        backgroundColor: hoveredIndex === idx ? "#239AA1" : color,
                        left: `${(idx * 16.666)}%`,
                        top: "-4px",
                        transform: hoveredIndex === idx ? "scale(1.5)" : "scale(1)",
                        boxShadow: hoveredIndex === idx ? "0 0 10px rgba(35, 154, 161, 0.5)" : "none"
                      }}
                    />
                  ))}
                  {/* Final Point at the end of the last segment */}
                  <div
                    className="w-2 h-2 rounded-full absolute right-0 -mr-1"
                    style={{ backgroundColor: "#1A1A1A", top: "-4px" }}
                  />
                </div>
              </div>
            </div>

            {/* Titles Grid - Desktop Only */}
            <div className="hidden lg:grid grid-cols-6 gap-6">
              {PROCESS_STEPS.map((step, idx) => (
                <div 
                  key={step.id} 
                  className="text-left"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h3
                    className={`font-manrope font-semibold transition-colors duration-300 cursor-pointer ${
                      hoveredIndex === idx ? "text-[#239AA1]" : "text-secondary"
                    }`}
                    style={{
                      fontSize: "20px",
                      lineHeight: "23px",
                      letterSpacing: "-0.29px"
                    }}
                  >
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
