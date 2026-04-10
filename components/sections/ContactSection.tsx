"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { fadeInUp, staggerContainer, viewportConfig, fadeInLeft, fadeInRight } from "@/lib/animations";

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
    setForm(INITIAL_FORM);
  };

  return (
    <SectionWrapper
      id="contact"
      className="relative overflow-visible py-24 lg:py-32"
      style={{
        backgroundImage: "url('/images/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column — Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col items-start gap-8"
          >
            <motion.h3
              variants={fadeInLeft}
              className="text-secondary font-bold leading-tight"
              style={{
                fontSize: "clamp(40px, 8vw, 68px)",
                textTransform: "uppercase"
              }}
            >
              Let&apos;s Bring Your<br />Idea to Reality
            </motion.h3>

            <motion.p
              variants={fadeInLeft}
              className="font-manrope font-medium text-secondary max-w-lg"
              style={{
                fontSize: "20px",
                lineHeight: "27px"
              }}
            >
              Have a project in mind or just want to say hello? We&apos;re always open to new ideas, collaborations, or creative challenges. Reach out — let&apos;s turn your vision into reality.
            </motion.p>

            <motion.div variants={fadeInLeft}>
              <button className="bg-[#239AA1] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1d8085] transition-colors duration-300">
                Contact Us
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column — Floating Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative lg:-mt-64 z-20"
          >
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl border border-neutral-100">
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-bold text-secondary uppercase tracking-tight">
                  Get in Touch
                </h3>
              </div>

              {success ? (
                <div className="py-12 text-center">
                  <h4 className="text-2xl font-bold text-[#239AA1] mb-2">Message Received!</h4>
                  <p className="text-secondary/60">We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 text-[#239AA1] font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[12px] font-manrope text-secondary/40 pl-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                        className="w-full bg-neutral-100 border-none rounded-xl px-4 py-3 text-secondary focus:ring-2 focus:ring-[#239AA1] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-manrope text-secondary/40 pl-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        className="w-full bg-neutral-100 border-none rounded-xl px-4 py-3 text-secondary focus:ring-2 focus:ring-[#239AA1] transition-all"
                      />
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[12px] font-manrope text-secondary/40 pl-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-neutral-100 border-none rounded-xl px-4 py-3 text-secondary focus:ring-2 focus:ring-[#239AA1] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-manrope text-secondary/40 pl-2">Phone No</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone No"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full bg-neutral-100 border-none rounded-xl px-4 py-3 text-secondary focus:ring-2 focus:ring-[#239AA1] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Row */}
                  <div className="space-y-2">
                    <label className="text-[12px] font-manrope text-secondary/40 pl-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Message"
                      className="w-full bg-neutral-100 border-none rounded-xl px-4 py-3 text-secondary focus:ring-2 focus:ring-[#239AA1] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#239AA1] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1d8085] transition-all duration-300 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
