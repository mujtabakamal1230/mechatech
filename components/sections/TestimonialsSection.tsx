"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { staggerContainer, viewportConfig } from "@/lib/animations";
import { TESTIMONIALS, PARTNERS, TESTIMONIALS_LOGOS } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <SectionWrapper
      id="testimonials"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #DEFDFF 0%, #FFFFFF 100%)"
      }}
    >
      <div className="container-custom">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary max-w-4xl mx-auto">
            Hear from those who experienced Excellence
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-24"
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>

        {/* Client Logos Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          {TESTIMONIALS_LOGOS.map((logo, idx) => (
            <div key={idx} className="relative h-14 flex items-center justify-center">
              <Image
                src={logo}
                alt={`Client Logo ${idx + 1}`}
                width={160}
                height={64}
                className="object-contain h-14"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
