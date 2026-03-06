import {
  BarChart3,
  GraduationCap,
  Megaphone,
  Search,
  Share2,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Strategic content creation, scheduling, and community management across Instagram, LinkedIn, X, and TikTok. Build an audience that converts.",
    color: "from-blue-500/20 to-cyan-500/10",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Technical audits, keyword strategy, on-page optimization, and authority building to dominate search rankings and drive organic traffic that lasts.",
    color: "from-emerald-500/20 to-teal-500/10",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
  },
  {
    icon: Megaphone,
    title: "Paid Ads",
    description:
      "High-ROI Meta, Instagram, and programmatic ad campaigns with precision targeting, creative testing, and relentless optimization.",
    color: "from-violet-500/20 to-purple-500/10",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-400",
  },
  {
    icon: BarChart3,
    title: "Google Ads",
    description:
      "Search, Display, Shopping, and YouTube campaigns engineered to capture high-intent demand and outperform your competition in every auction.",
    color: "from-amber-500/20 to-orange-500/10",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
  },
  {
    icon: Users,
    title: "1:1 Marketing Consulting",
    description:
      "Personalized strategy sessions with senior marketers who deep-dive into your funnel, identify gaps, and build a custom growth roadmap.",
    color: "from-rose-500/20 to-pink-500/10",
    iconBg: "bg-rose-500/15",
    iconColor: "text-rose-400",
  },
  {
    icon: GraduationCap,
    title: "Marketing Workshops",
    description:
      "Intensive hands-on workshops for teams and founders — covering growth marketing, ad strategy, analytics, and building in-house capability.",
    color: "from-sky-500/20 to-indigo-500/10",
    iconBg: "bg-sky-500/15",
    iconColor: "text-sky-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-electric/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-electric/3 blur-3xl" />

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
            What We Do
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Services Built for{" "}
            <span className="text-gradient-blue">Serious Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every service we offer is tied directly to business outcomes. No
            vanity metrics — just results that move the needle.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative rounded-xl border border-border bg-card p-6 lg:p-8 overflow-hidden cursor-default"
              >
                {/* Gradient bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Shimmer top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 rounded-lg ${service.iconBg} mb-5`}
                  >
                    <Icon size={24} className={service.iconColor} />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
