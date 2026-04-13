"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { FAQ_ITEMS } from "@/lib/data";
import type { FAQItem } from "@/types";

interface FAQItemComponentProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItemComponent({ item, isOpen, onToggle }: FAQItemComponentProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="border border-neutral-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-card transition-shadow duration-200"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-sans font-semibold text-secondary text-sm md:text-base leading-snug">
          {item.question}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center text-primary-500 transition-transform duration-200">
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <div className="h-px bg-neutral-100 mb-4" />
              <p className="text-neutral-500 text-sm leading-relaxed">
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
    <SectionWrapper id="faq" className="bg-neutral-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left — Header */}
          <div className="lg:col-span-2">
            <SectionHeader
              tag="FAQs"
              title="Frequently Asked"
              titleHighlight="Questions"
              description="Everything you need to know about working with Mechatech."
              align="left"
              className="mb-8"
            />

            {/* Contact nudge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.3 }}
              className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-card"
            >
              <p className="font-sans font-semibold text-secondary text-sm mb-1">
                Still have questions?
              </p>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                Our team is happy to walk you through any details before you commit.
              </p>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary-500 text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-primary-600 transition-colors duration-200 w-full"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </div>

          {/* Right — Accordion */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-3 space-y-3"
          >
            {FAQ_ITEMS.map((item) => (
              <FAQItemComponent
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
