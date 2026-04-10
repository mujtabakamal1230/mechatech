"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { CASE_STUDIES } from "@/lib/data";

export function CaseStudiesSection() {
  return (
    <SectionWrapper id="case-studies" className="bg-white py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">
            Our Case Studies
          </h2>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="bg-[#F0FDFF] rounded-[26px] overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] items-center">
                {/* Content Area (approx 65%) */}
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

                  {/* <motion.button
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-3 text-secondary font-bold text-lg group/btn mt-auto"
                  >
                    Read More Case Study
                    <div className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center group-hover/btn:bg-secondary group-hover/btn:text-white transition-all">
                      <ArrowRight size={20} />
                    </div>
                  </motion.button> */}
                </div>

                {/* Image Area (max-width 485px) */}
                <div className="p-8 lg:pr-12 lg:pl-0 flex justify-center lg:justify-end">
                  <div className="w-full max-w-[485px] rounded-[20px] overflow-hidden">
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
          ))}
        </div>

        {/* View all CTA (optional, but keeping it styled simply) */}
        {/* <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-16"
        >
          <button className="text-secondary font-bold text-lg hover:underline transition-all">
            View All Projects
          </button>
        </motion.div> */}
      </div>
    </SectionWrapper>
  );
}
