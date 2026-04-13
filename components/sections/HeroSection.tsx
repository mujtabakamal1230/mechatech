"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  heroTextVariants,
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "@/lib/animations";
import { PARTNERS } from "@/lib/data";

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const logos = [
    "/images/clients/1.png",
    "/images/clients/2.png",
    "/images/clients/3.png",
    "/images/clients/4.png",
    "/images/clients/5.png",
    "/images/clients/6.png",
    "/images/clients/7.png",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white pt-28 pb-12 md:py-20 lg:py-24">
      <div className="container-custom w-full">
        <div
          className="relative rounded-3xl md:rounded-[40px] overflow-hidden flex items-center"
          style={{
            background: "radial-gradient(51.08% 69.73% at 26.91% 17.72%, #0B4041 0%, #1A1A1A 100%)"
          }}
        >
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_456px] gap-8 lg:gap-9 items-center w-full px-6 md:px-12 lg:px-16 py-12 md:py-16">

            {/* Left Column: Text & Logos */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1"
            >
              <motion.h1
                variants={heroTextVariants}
                className="text-4xl md:text-5xl lg:text-[60px] leading-[1.1] text-white font-sans text-balance"
              >
                Where Ideas Become <br className="hidden md:block" />
                Engineered Reality
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-white/70 text-base md:text-lg leading-relaxed max-w-lg"
              >
                End-to-end product development backed by deep engineering and hands-on manufacturing experience.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <Button
                  variant="primary"
                  size="xl"
                  onClick={() => handleScroll("#contact")}
                  className="rounded-xl px-10 w-full sm:w-auto"
                >
                  Lets Innovate
                </Button>
              </motion.div>

              {/* Logo Marquee */}
              <motion.div variants={fadeInUp} className="mt-8 md:mt-12 overflow-hidden relative">
                <div className="flex gap-12 items-center w-full">
                  <div className="flex gap-12 shrink-0 items-center animate-marquee">
                    {[...logos, ...logos].map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt="Client Logo"
                        className="h-7 md:h-9 w-auto opacity-40 hover:opacity-100 transition-opacity brightness-0 invert"
                      />
                    ))}
                  </div>
                  <div className="flex gap-12 shrink-0 items-center animate-marquee">
                    {[...logos, ...logos].map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt="Client Logo"
                        className="h-7 md:h-9 w-auto opacity-40 hover:opacity-100 transition-opacity brightness-0 invert"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full lg:max-w-[456px] order-1 lg:order-2"
            >
              <div className="rounded-2xl md:rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/hero.png"
                  alt="Mechatech Hero"
                  width={912}
                  height={684}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="relative"
            >
              {/* Semi-Circle Shape */}
              <div className="bg-white px-10 pt-4 pb-2 rounded-t-full flex flex-col items-center gap-1 shadow-md">
                <motion.button
                  onClick={() => handleScroll("#about")}
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-secondary hover:text-primary transition-colors flex flex-col items-center"
                >
                  <ChevronDown size={24} strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-widest font-bold mt-1">Scroll Down</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
