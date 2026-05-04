"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  fadeInUp,
  viewportConfig,
} from "@/lib/animations";

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-white overflow-hidden py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <h3 className="text-[#239AA1] text-lg font-semibold tracking-wide">
                About Us
              </h3>
              <div className="w-16 h-[2px] bg-[#239AA1]/30" />
            </div>

            <h2 className="text-4xl md:text-[40px] font-semibold text-secondary leading-[1.2] tracking-[-1.1px]">
              Engineering Innovative <br />
              Products for the Future
            </h2>

            <div className="flex flex-col gap-6">
              <p className="text-[#666666] text-base font-normal leading-[30px] font-manrope">
                We are Mechatech, your partner in transforming ideas into market-ready products.
              </p>

              <p className="text-[#666666] text-base font-normal leading-[30px] font-manrope">
                A product engineering studio focused on building technically sound,
                production ready products. We work with startups and established companies
                to transform ideas into reliable, manufacturable solutions through disciplined
                engineering, rapid prototyping, and real-world manufacturing insight.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual Assembly */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            {/* Background Dots */}
            <div className="absolute -top-10 -right-10 w-48 h-48 z-0">
              <Image
                src="/images/about-dots.png"
                alt="Decorative Dots"
                width={192}
                height={192}
                className="opacity-60"
              />
            </div>

            {/* Main Image with Arch */}
            <div className="relative z-10 rounded-t-full overflow-hidden border-[12px] border-white shadow-xl">
              <Image
                src="/images/about.png"
                alt="Mechatech Team Working"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Experience Card */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={viewportConfig}
              className="absolute -bottom-6 -left-6 lg:-left-12 z-20 bg-[#239AA1] p-8 md:p-10 shadow-2xl max-w-[310px]"
              style={{ clipPath: "polygon(0% 0%, 94% 0%, 100% 100%, 0% 100%, 8% 0%)" }}
            >
              <div className="flex flex-col gap-2">
                <span className="text-white text-4xl md:text-5xl font-bold">
                  08 Years
                </span>
                <p className="text-white/90 text-sm md:text-base leading-tight">
                  of experience in this industry
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
}
