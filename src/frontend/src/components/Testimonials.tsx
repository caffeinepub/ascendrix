import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, Luminary Skincare",
    avatar: "SC",
    avatarColor: "oklch(0.55 0.2 300)",
    quote:
      "Ascendrix took our Instagram from 2,000 to 85,000 followers in eight months — and more importantly, 40% of our revenue now comes from social. Their strategy-first approach is the real deal.",
    stars: 5,
    metric: "42x follower growth",
  },
  {
    name: "Raj Mehta",
    role: "Founder, TechNova SaaS",
    avatar: "RM",
    avatarColor: "oklch(0.55 0.2 255)",
    quote:
      "Our Google Ads were burning money before Ascendrix stepped in. Within 60 days they cut our CPA by 67% and tripled pipeline. The 1:1 consulting sessions alone are worth every rupee.",
    stars: 5,
    metric: "67% lower CPA",
  },
  {
    name: "Priya Nair",
    role: "Marketing Director, Urban Eats",
    avatar: "PN",
    avatarColor: "oklch(0.6 0.2 165)",
    quote:
      "The workshop Ascendrix ran for our team was transformative. We went from having no in-house marketing capability to running high-performing campaigns ourselves. Genuinely life-changing for our business.",
    stars: 5,
    metric: "Team fully self-sufficient",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-electric border border-electric/30 rounded-full mb-4">
            Client Stories
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Brands That <span className="text-gradient-blue">Ascended</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Don't take our word for it. Here's what our clients experienced.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              <div className="h-full rounded-xl border border-border bg-card p-7 flex flex-col gap-5 hover:border-electric/40 transition-all duration-300 hover:shadow-glow-blue">
                {/* Quote icon */}
                <Quote
                  size={32}
                  className="text-electric/40 group-hover:text-electric/70 transition-colors"
                />

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }, (_, j) => (
                    <Star
                      key={`star-${t.name}-${j}`}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground text-[15px] leading-relaxed flex-1 italic">
                  "{t.quote}"
                </p>

                {/* Metric badge */}
                <div className="inline-flex self-start px-3 py-1 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold">
                  ↑ {t.metric}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: t.avatarColor }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
