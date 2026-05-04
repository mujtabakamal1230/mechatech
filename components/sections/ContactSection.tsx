"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { fadeInUp, staggerContainer, viewportConfig, fadeInLeft, fadeInRight } from "@/lib/animations";
import { sendEmail } from "@/app/actions/email";
import { cn } from "@/lib/utils";

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    // Name validation: letters only, max 100
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!nameRegex.test(form.firstName)) {
      newErrors.firstName = "Letters only";
    } else if (form.firstName.length > 100) {
      newErrors.firstName = "Max 100 characters";
    }
    
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!nameRegex.test(form.lastName)) {
      newErrors.lastName = "Letters only";
    } else if (form.lastName.length > 100) {
      newErrors.lastName = "Max 100 characters";
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    
    // Phone validation: numbers and +
    const phoneRegex = /^[+0-9\s-]+$/;
    if (form.phone && !phoneRegex.test(form.phone)) {
      newErrors.phone = "Only numbers and + allowed";
    }
    
    // Message validation: max 500, security risk check
    const harmfulChars = /[<>{}()[\]\\/|;]/;
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length > 500) {
      newErrors.message = "Max 500 characters";
    } else if (harmfulChars.test(form.message)) {
      newErrors.message = "Invalid special characters detected";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setLoading(true);
    
    try {
      const result = await sendEmail(form);

      if (result.success) {
        setSuccess(true);
        setForm(INITIAL_FORM);
        setErrors({});
      } else {
        alert(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      className="relative overflow-hidden lg:overflow-visible py-24 lg:py-32"
      style={{
        backgroundImage: "url('/images/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

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
                fontSize: "clamp(32px, 8vw, 68px)",
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

            {/* <motion.div variants={fadeInLeft}>
              <button className="bg-[#239AA1] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1d8085] transition-colors duration-300">
                Contact Us
              </button>
            </motion.div> */}
          </motion.div>

          {/* Right Column — Floating Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative lg:-mt-52 z-20"
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
                      <label className="text-[12px] font-manrope text-secondary/40 pl-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        maxLength={100}
                        required
                        className={cn(
                          "w-full bg-neutral-100 border-none rounded-xl px-4 py-3 text-secondary focus:ring-2 focus:ring-[#239AA1] transition-all",
                          errors.firstName && "ring-2 ring-red-500 focus:ring-red-500"
                        )}
                      />
                      {errors.firstName && <p className="text-[10px] text-red-500 pl-2">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-manrope text-secondary/40 pl-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={handleChange}
                        maxLength={100}
                        required
                        className={cn(
                          "w-full bg-neutral-100 border-none rounded-xl px-4 py-3 text-secondary focus:ring-2 focus:ring-[#239AA1] transition-all",
                          errors.lastName && "ring-2 ring-red-500 focus:ring-red-500"
                        )}
                      />
                      {errors.lastName && <p className="text-[10px] text-red-500 pl-2">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[12px] font-manrope text-secondary/40 pl-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={cn(
                          "w-full bg-neutral-100 border-none rounded-xl px-4 py-3 text-secondary focus:ring-2 focus:ring-[#239AA1] transition-all",
                          errors.email && "ring-2 ring-red-500 focus:ring-red-500"
                        )}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 pl-2">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-manrope text-secondary/40 pl-2">Phone No</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone No"
                        value={form.phone}
                        onChange={handleChange}
                        className={cn(
                          "w-full bg-neutral-100 border-none rounded-xl px-4 py-3 text-secondary focus:ring-2 focus:ring-[#239AA1] transition-all",
                          errors.phone && "ring-2 ring-red-500 focus:ring-red-500"
                        )}
                      />
                      {errors.phone && <p className="text-[10px] text-red-500 pl-2">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Message Row */}
                  <div className="space-y-2">
                    <label className="text-[12px] font-manrope text-secondary/40 pl-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Message"
                      maxLength={500}
                      className={cn(
                        "w-full bg-neutral-100 border-none rounded-xl px-4 py-3 text-secondary focus:ring-2 focus:ring-[#239AA1] transition-all resize-none",
                        errors.message && "ring-2 ring-red-500 focus:ring-red-500"
                      )}
                    />
                    {errors.message && <p className="text-[10px] text-red-500 pl-2">{errors.message}</p>}
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
