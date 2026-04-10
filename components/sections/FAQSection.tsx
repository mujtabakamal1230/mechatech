"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { FAQ_ITEMS } from "@/lib/data";
import type { FAQItem } from "@/types";

interface FAQItemComponentProps {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItemComponent({ item, index, isOpen, onToggle }: FAQItemComponentProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="border-b border-neutral-200"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-8 md:py-10 text-left group"
        aria-expanded={isOpen}
      >
        <h3 
          className="font-manrope font-medium text-secondary"
          style={{
            fontSize: "30px",
            lineHeight: "43.96px",
            verticalAlign: "middle"
          }}
        >
          {index + 1}. {item.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-secondary opacity-60 group-hover:opacity-100 transition-opacity"
        >
          <ChevronDown size={28} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pb-10">
              <p 
                className="font-manrope font-semibold text-[#616161]"
                style={{
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "-0.39px"
                }}
              >
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <SectionWrapper id="faq" className="bg-white py-24">
      <div className="container-custom max-w-6xl mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">
            Frequently Asked Questions
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col"
        >
          {FAQ_ITEMS.map((item, index) => (
            <FAQItemComponent
              key={item.id}
              index={index}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
