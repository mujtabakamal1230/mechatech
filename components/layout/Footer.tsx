import { Logo } from "@/components/shared/Logo";
import { NAV_ITEMS } from "@/lib/data";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo variant="light" className="brightness-0 invert-[100]" />
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              Transforming innovative ideas into engineered reality. 8+ years of
              precision engineering excellence.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            {/* <h4 className="font-sans font-semibold text-sm tracking-widest uppercase text-primary-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>

          {/* Services */}
          <div>
            {/* <h4 className="font-sans font-semibold text-sm tracking-widest uppercase text-primary-400 mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              {["Manufacturing", "CAD/CAM & CFD", "Simulation Analysis", "Prototyping", "Embedded Systems", "Specialized Engineering"].map(
                (s) => (
                  <li key={s}>
                    <a href="#services" className="hover:text-white transition-colors duration-200">
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul> */}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-sm tracking-widest uppercase text-primary-400 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Mail, label: "hello@mechatech.io" },
                { icon: Phone, label: "+92 300 000 0000" },
                { icon: MapPin, label: "Karachi, Pakistan" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3 text-sm text-neutral-400">
                  <Icon size={15} className="text-primary-400 mt-0.5 shrink-0" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {currentYear} Mechatech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
