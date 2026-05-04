import type {
  NavItem,
  Service,
  CaseStudy,
  Testimonial,
  FAQItem,
  StatItem,
  ProcessStep,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
];

export const STATS: StatItem[] = [
  { value: "08+", label: "Years of Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "15+", label: "Industry Awards" },
];

export const SERVICES: Service[] = [
  {
    id: "mechanical-design",
    icon: "/images/icons/mechanical.png",
    title: "Mechanical Design",
    description:
      "Engineering solutions for product and machine development using advanced mechanical design principles.",
  },
  {
    id: "cad-modelling",
    icon: "/images/icons/modeling.png",
    title: "CAD Modelling & DFM",
    description:
      "Precise 3D CAD modelling optimized for efficient and cost-effective manufacturing.",
  },
  {
    id: "simulation-analysis",
    icon: "/images/icons/analysis.png",
    title: "Simulation & Analysis",
    description:
      "Engineering validation through Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD).",
  },
  {
    id: "prototyping-manufacturing",
    icon: "/images/icons/prototyping.png",
    title: "Prototyping & Manufacturing",
    description:
      "Rapid prototyping and manufacturing using 3D printing, CNC machining, and modern fabrication methods.",
  },
  {
    id: "embedded-systems",
    icon: "/images/icons/embedded.png",
    title: "Electrical & Embedded Systems",
    description:
      "Design and development of electrical systems, embedded electronics, and integrated hardware solutions.",
  },
  {
    id: "specialized-engineering",
    icon: "/images/icons/engineering.png",
    title: "Specialized Engineering",
    description:
      "Expert consultancy in drone design, piping systems, and complex engineering projects.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { id: "research", step: 1, title: "Product Research", description: "Deep market and technical analysis" },
  { id: "concept", step: 2, title: "Concept Development", description: "Ideation and feasibility assessment" },
  { id: "preliminary", step: 3, title: "Preliminary Design", description: "Initial sketches and architecture" },
  { id: "prototype", step: 4, title: "Prototyping & Testing", description: "Build, test, iterate rapidly" },
  { id: "detail", step: 5, title: "Final Design & Handover", description: "Engineering drawings and sign-off" },
  { id: "pilot", step: 6, title: "Post Market", description: "Small batch production and launch" },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "squat6stands",
    title: "Squat6Stands",
    subtitle: "End-to-End Gym Equipment Design & Manufacturing Support",
    description:
      "Developed a commercial-grade gym equipment range for Squat6Stands, a Canadian fitness equipment manufacturer. The scope included mechanical design, safety-focused engineering, functional optimization, and preparation of complete manufacturing-ready CAD and technical drawings for production.",
    tags: ["Manufacturing", "Mechanical Design"],
    imageAlt: "Squat6Stands gym equipment setup",
    image: "/images/case-studies/squat6stands.png",
  },
  {
    id: "evolve-vapors",
    title: "Evolve Vapors",
    subtitle: "Grain Oil Cold Press – Design & Manufacturing Support",
    description:
      "Developed a high-efficiency grain cold press system for oil extraction and nutrient retention. The scope included mechanical design, performance testing, manufacturing optimization, and full manufacturing support through production-ready CAD and technical documentation.",
    tags: ["Industrial Design", "Electronics"],
    imageAlt: "Evolve Vapors product",
    image: "/images/case-studies/evolve-vapors.png",
  },
  {
    id: "millat-tractor",
    title: "Millat Tractor Limited",
    subtitle: "64 HP Three-Cylinder Diesel Engine Reverse Engineering & Analysis",
    description:
      "Reverse engineered a 64 HP three-cylinder diesel engine from 3D scan data. Generated detailed CAD models and performed mechanical and thermal analyses to evaluate structural integrity and thermal performance.",
    tags: ["IoT Integration", "Mechanical Engineering"],
    imageAlt: "Millat Tractor project",
    image: "/images/case-studies/millat-tractor-limited.png",
  },
  {
    id: "tdfc",
    title: "Technology Development & Fabrication Company (TDFC)",
    subtitle: "Low Bed Trailer Chassis Design with Foldable Rear Extension",
    description:
      "Designed the complete low bed trailer chassis, including an integrated storage container, foldable rear extension, and suspension system. The scope also included suspension calculations and structural validation using Finite Element Analysis to ensure strength, stability, and reliable performance.",
    tags: ["Fabrication", "Structural Analysis"],
    imageAlt: "TDFC fabrication project",
    image: "/images/case-studies/tdfc.png",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    content:
      "MES Mechatech delivered exceptional design and manufacturing support for our commercial gym equipment. Their attention to detail, functional optimization, and production-ready CAD made the process seamless and efficient.",
    author: "Mike Kauffman",
    role: "CEO",
    company: "Squat6Stands",
    logo: "/images/testimonials/squat6stands.png",
  },
  {
    id: "t2",
    content:
      "Working with Mechatech was exceptional their mechanical design and manufacturing expertise helped us launch a high-efficiency grain oil cold press that exceeded expectations.",
    author: "Nitesh Kumar",
    role: "CEO",
    company: "Evolve Vapors",
    logo: "/images/testimonials/evolve-vapors.png",
  },
  {
    id: "t3",
    content:
      "Mechatech expertly reverse engineered a 64HP diesel engine, delivering detailed CAD models and analyses on time. They were highly responsive throughout—an excellent partner for precision engineering projects.",
    author: "Gamal Abdallah",
    role: "Engineer",
    company: "Millat Tractors",
    logo: "/images/testimonials/millat-tractors.png",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq1",
    question: "What services does Mechatech provide?",
    answer:
      "Mechatech provides comprehensive engineering services including product design, CAD/CAM modeling, CFD analysis, prototyping, CNC machining, 3D printing, embedded systems development, and full manufacturing support from concept to production.",
  },
  {
    id: "faq2",
    question: "Can you help turn my idea into a finished product?",
    answer:
      "Absolutely. We specialize in taking ideas from napkin sketch to market-ready product. Our end-to-end service covers everything from initial feasibility analysis through production-ready engineering packages.",
  },
  {
    id: "faq3",
    question: "Do you work with startups and individual inventors?",
    answer:
      "Yes! We love working with early-stage startups and independent inventors. We offer flexible engagement models to match your budget and timeline, whether you need a full development team or targeted expertise.",
  },
  {
    id: "faq4",
    question: "Do you provide prototypes before manufacturing?",
    answer:
      "Yes, prototyping is a core part of our process. We use rapid prototyping technologies including FDM/SLA 3D printing, CNC machining, and sheet metal fabrication to validate designs before committing to production tooling.",
  },
  {
    id: "faq5",
    question: "Can Mechatech assist with manufacturing and production?",
    answer:
      "Yes. We support full production runs, from setting up manufacturing processes and sourcing components to quality control and final assembly. We work with both local and international manufacturers.",
  },
  {
    id: "faq6",
    question: "How can I start a project with Mechatech?",
    answer:
      "Simply reach out through our contact form or email us with a brief description of your project. We'll schedule a free discovery call to understand your needs and outline a tailored engagement plan.",
  },
];

export const PARTNERS = [
  "/images/clients/1.png",
  "/images/clients/2.png",
  "/images/clients/3.png",
  "/images/clients/4.png",
  "/images/clients/5.png",
  "/images/clients/6.png",
  "/images/clients/7.png",
];

export const TESTIMONIALS_LOGOS = [
  "/images/testimonials/logos/squat6stands.png",
  "/images/testimonials/logos/fatima.png",
  "/images/testimonials/logos/millat-tractors.png",
  "/images/testimonials/logos/tdfc.png",
  "/images/testimonials/logos/verne.png",
  "/images/testimonials/logos/joa-design.png",
];
