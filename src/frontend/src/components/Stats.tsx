import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

const stats = [
  {
    value: 200,
    suffix: "+",
    label: "Clients Served",
    desc: "Brands scaled across industries",
  },
  {
    value: 3,
    suffix: "x",
    label: "Average ROI",
    desc: "Return on marketing investment",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of Mastery",
    desc: "Deep expertise, proven processes",
  },
  {
    value: 50,
    suffix: "M+",
    label: "Reach Generated",
    desc: "Impressions driven for clients",
  },
];

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + suffix;
      }
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section id="results" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Full-width accent band */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric/8 via-electric/12 to-electric/8" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Numbers That Define Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block">
                <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gradient-blue leading-none mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                {/* Glow beneath number */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-electric rounded-full blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-4">
                <div className="font-display text-lg font-bold text-foreground">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
