// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Services
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Case Studies
export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageAlt: string;
  image: string;
}

// Testimonials
export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  logo: string;
}

// Process Steps
export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

// FAQ
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Stats
export interface StatItem {
  value: string;
  label: string;
}

// Contact Form
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Button variants
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

// Section Props (common)
export interface SectionProps {
  className?: string;
}
