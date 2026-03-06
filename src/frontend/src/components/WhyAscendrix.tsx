import { Layers, Target, TrendingUp, UserCheck } from "lucide-react";
import { motion } from "motion/react";

const differentiators = [
  {
    icon: Target,
    title: "Strategy First",
    description:
      "We don't run campaigns blindly. Every dollar spent is backed by audience research, competitive analysis, and a documented growth plan with clear KPIs before we touch ad spend.",
    number: "01",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Execution",
    description:
      "Analytics isn't an afterthought — it's the foundation. We instrument everything, test continuously, and let data dictate direction rather than gut feeling.",
    number: "02",
  },
  {
    icon: Layers,
    title: "Full-Funnel Coverage",
    description:
      "From awareness to conversion to retention, we build integrated marketing systems where every channel amplifies the others — creating compounding momentum.",
    number: "03",
  },
  {
    icon: UserCheck,
    title: "Dedicated Expert Team",
    description:
      "You get a senior specialist, not a rotating junior team. Your account has a dedicated strategist who knows your brand, your market, and your customers deeply.",
    number: "04",
  },
];

export default function WhyAscendrix() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-electric/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-electric border border-electric/30 rounded-full mb-5">
              Why Ascendrix
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              We Don't Just Run{" "}
              <span className="text-gradient-blue">Campaigns.</span>
              <br />
              We Build Growth Engines.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Most agencies optimize for activity. We optimize for outcomes. The
              difference is everything — and it shows in the results our clients
              achieve.
            </p>

            {/* Visual accent */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {["CE", "MR", "PK", "AL"].map((init, i) => (
                  <div
                    key={init}
                    className="w-10 h-10 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: `oklch(${0.45 + i * 0.07} 0.2 ${250 + i * 15})`,
                      zIndex: 4 - i,
                    }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold text-sm text-foreground">
                  200+ Happy Clients
                </div>
                <div className="text-xs text-muted-foreground">
                  Join brands already scaling with us
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - differentiators */}
          <div className="space-y-5">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex gap-5 p-5 rounded-xl border border-border bg-card hover:border-electric/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center group-hover:bg-electric/20 transition-colors">
                        <Icon size={20} className="text-electric" />
                      </div>
                      <span className="absolute -top-2 -right-2 text-xs font-bold text-electric/50 font-display">
                        {item.number}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
