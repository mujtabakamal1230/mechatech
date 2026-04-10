import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from style guide
        primary: {
          DEFAULT: "#239AA1",
          50: "#e8f8f9",
          100: "#c5ecee",
          200: "#9ddde0",
          300: "#6dced2",
          400: "#3db8be",
          500: "#239AA1",
          600: "#1a7a80",
          700: "#125c61",
          800: "#0b3e42",
          900: "#042023",
        },
        secondary: {
          DEFAULT: "#2B2B2B",
          light: "#3d3d3d",
          dark: "#1a1a1a",
        },
        accent: {
          DEFAULT: "#C5F0F3",
          light: "#e0f9fb",
          dark: "#9ae4e9",
        },
        neutral: {
          DEFAULT: "#F3F3F3",
          50: "#fafafa",
          100: "#F3F3F3",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        background: "#FFFFFF",
        foreground: "#2B2B2B",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h1: ["60px", { lineHeight: "65px", letterSpacing: "0px" }],
        h2: ["40px", { lineHeight: "45px", letterSpacing: "-1.1px" }],
        h3: ["20px", { lineHeight: "25px", letterSpacing: "-0.39px" }],
        h4: ["16px", { lineHeight: "30px", letterSpacing: "0px" }],
        h5: ["1.125rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.6" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        xs: ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        section: "5rem",
        "section-lg": "8rem",
        container: "1280px",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        pill: "9999px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(35, 154, 161, 0.08)",
        "card-hover": "0 8px 40px rgba(35, 154, 161, 0.16)",
        glow: "0 0 40px rgba(35, 154, 161, 0.3)",
        "glow-sm": "0 0 20px rgba(35, 154, 161, 0.2)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #239AA1 0%, #1a7a80 100%)",
        "gradient-hero": "linear-gradient(135deg, #0f2a2c 0%, #1a4a4e 50%, #239AA1 100%)",
        "gradient-accent": "linear-gradient(135deg, #C5F0F3 0%, #9ae4e9 100%)",
        "gradient-dark": "linear-gradient(180deg, #2B2B2B 0%, #1a1a1a 100%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      transitionDuration: {
        DEFAULT: "200ms",
        fast: "100ms",
        slow: "400ms",
        "extra-slow": "700ms",
      },
    },
  },
  plugins: [],
};

export default config;
