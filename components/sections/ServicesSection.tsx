"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { staggerContainer, viewportConfig } from "@/lib/animations";
import { SERVICES } from "@/lib/data";

export function ServicesSection() {
  return (
    <SectionWrapper id="services" className="bg-white py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">
            What We Offer
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              bgColor={index % 3 === 1 ? "#F7F7F7" : "#EAFEFF"}
            />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
