import { motion } from "motion/react";
import { SiInstagram, SiLinkedin } from "react-icons/si";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Social Media Management",
  "SEO",
  "Paid Ads",
  "Google Ads",
  "1:1 Consulting",
  "Workshops",
];

const handleNavClick = (href: string) => {
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-64 rounded-full bg-electric/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16"
        >
          {/* Brand column */}
          <div className="lg:col-span-2 md:col-span-2">
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="block"
            >
              <img
                src="/assets/uploads/ascendrix_logo_fixed-1.png"
                alt="Ascendrix"
                className="h-16 w-auto mb-4"
              />
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              Ascendrix is a full-service digital marketing agency built for
              brands that want to grow faster and market smarter. Strategy
              first, results always.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                {
                  icon: SiLinkedin,
                  href: "https://www.linkedin.com/company/ascendrix-in/?viewAsMember=true",
                  label: "LinkedIn",
                },
                {
                  icon: SiInstagram,
                  href: "https://www.instagram.com/_ascendrix/",
                  label: "Instagram",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-electric hover:border-electric/50 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-foreground mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-electric transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-foreground mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc}>
                  <button
                    type="button"
                    onClick={() => handleNavClick("#services")}
                    className="text-sm text-muted-foreground hover:text-electric transition-colors text-left"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-foreground mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919352494668"
                  className="text-sm text-muted-foreground hover:text-electric transition-colors"
                >
                  +91 93524 94668
                </a>
              </li>
              <li>
                <a
                  href="mailto:ascendrix.jpr@gmail.com"
                  className="text-sm text-muted-foreground hover:text-electric transition-colors"
                >
                  ascendrix.jpr@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/_ascendrix/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-electric transition-colors"
                >
                  @_ascendrix
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {year} Ascendrix. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric hover:text-electric-bright transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
