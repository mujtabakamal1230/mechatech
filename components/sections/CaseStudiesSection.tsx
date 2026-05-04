"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { CASE_STUDIES } from "@/lib/data";
import { cn } from "@/lib/utils";

export function CaseStudiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  return (
    <SectionWrapper id="case-studies" className="bg-white py-24" viewport={{ once: true, amount: 0 }}>
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">
            Our Case Studies
          </h2>
        </div>

        <div ref={containerRef} className="relative">
          {CASE_STUDIES.map((study, index) => {
            const targetScale = 1 - ((CASE_STUDIES.length - index) * 0.05);
            return (
              <StickyCard
                key={study.id}
                study={study}
                index={index}
                progress={scrollYProgress}
                range={[index * (1 / CASE_STUDIES.length), 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

interface StickyCardProps {
  study: typeof CASE_STUDIES[0];
  index: number;
  progress: any;
  range: [number, number];
  targetScale: number;
}

function StickyCard({ study, index, progress, range, targetScale }: StickyCardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Sticky position offset for stacking effect
  const stickyTop = 20 + index * 40;

  return (
    <div 
      className="sticky w-full flex justify-center h-screen items-start pt-12 md:pt-20"
      style={{ top: stickyTop }}
    >
      <motion.div
        style={{ scale }}
        className={cn(
          "bg-[#F0FDFF] rounded-[26px] overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-200",
          "w-full max-w-[1240px] relative"
        )}
      >
        <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] items-center">
          {/* Content Area */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col items-start text-left max-w-4xl">
            {/* Project Title (H4 styled as H2) */}
            <h4 className="text-4xl md:text-[40px] font-bold text-secondary mb-6 leading-tight">
              {study.title}
            </h4>

            {/* Category Tag (White pill with teal dot) */}
            <div className="bg-white px-5 py-2 rounded-full flex items-center gap-3 mb-8 shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#239AA1]" />
              <span
                className="font-manrope font-medium text-secondary"
                style={{
                  fontSize: "16px",
                  lineHeight: "29.79px"
                }}
              >
                {study.subtitle}
              </span>
            </div>

            {/* Description Paragraph */}
            <p
              className="text-[#4D4D4D] font-normal font-manrope mb-8"
              style={{
                fontSize: "16px",
                lineHeight: "30px"
              }}
            >
              {study.description}
            </p>
          </div>

          {/* Image Area */}
          <div className="p-8 lg:pr-12 lg:pl-0 flex justify-center lg:justify-end">
            <div className="w-full max-w-[485px] lg:min-w-[430px] rounded-[20px] overflow-hidden">
              <Image
                src={study.image}
                alt={study.imageAlt}
                width={485}
                height={364}
                className="w-full h-auto block object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
