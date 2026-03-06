import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/ascendrix-hero-bg.dim_1920x1080.jpg')`,
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-electric/5 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full blur-3xl animate-float"
        style={{
          background: "oklch(0.75 0.18 200 / 0.06)",
          animationDelay: "3s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric/30 bg-electric/10 text-electric text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric" />
            </span>
            Data-Driven Digital Marketing
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight mb-6"
          >
            Grow Faster.{" "}
            <span className="text-gradient-blue">Market Smarter.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Ascendrix delivers precision digital marketing — from SEO and paid
            ads to social media and 1:1 consulting — engineered for measurable,
            compounding growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              data-ocid="hero.primary_button"
              onClick={() => handleScroll("#contact")}
              size="lg"
              className="bg-electric hover:bg-electric-bright text-white font-bold px-8 py-6 text-base rounded-md glow-blue transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
            >
              Get Started Today
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Button
              data-ocid="hero.secondary_button"
              onClick={() => handleScroll("#services")}
              variant="outline"
              size="lg"
              className="border-border hover:border-electric text-foreground hover:text-electric bg-transparent font-semibold px-8 py-6 text-base rounded-md transition-all duration-300 group w-full sm:w-auto"
            >
              <Play size={16} className="mr-2" />
              Our Services
            </Button>
          </motion.div>

          {/* Social proof bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
          >
            {[
              { value: "200+", label: "Clients Served" },
              { value: "3x", label: "Average ROI" },
              { value: "50M+", label: "Reach Generated" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-display text-2xl font-bold text-electric-bright">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
