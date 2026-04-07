import { Link } from "react-router-dom";
import { Zap, Bird, Briefcase, Camera, Code, ArrowUpRight} from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ],
  Services: [
    { label: "Web Development", path: "/services" },
    { label: "SEO Optimization", path: "/services" },
    { label: "Online Advertising", path: "/services" },
    { label: "Booking Systems", path: "/services" },
  ],
  Legal: [
    { label: "Privacy Policy", path: "#" },
    { label: "Terms of Service", path: "#" },
    { label: "Cookie Policy", path: "#" },
  ],
};

const socials = [
  { icon: Bird, label: "Twitter", href: "#" },
  { icon: Briefcase, label: "LinkedIn", href: "#" },
  { icon: Camera, label: "Instagram", href: "#" },
  { icon: Code, label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-dark-800/40">
      <div className="container-max section-padding">
        {/* Top CTA strip */}
        <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 glow-accent">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to grow your business?
            </h3>
            <p className="text-white/50 text-sm">
              Get a free strategy consultation — no commitment required.
            </p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Start today <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <Zap className="w-4 h-4 text-dark-900 fill-dark-900" />
              </div>
              <span className="text-white font-bold text-lg">
                Nexa<span className="text-accent">Growth</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              We help businesses grow online through smart strategy, beautiful
              design, and data-driven execution.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/40 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-white/70 font-semibold text-sm mb-4">
                {section}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-white/40 hover:text-white/80 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} NexaGrowth. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
