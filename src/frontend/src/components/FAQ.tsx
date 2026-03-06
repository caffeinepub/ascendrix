import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const faqs = [
  {
    question: "How long before we see results from digital marketing?",
    answer:
      "It depends on the channel. Paid ads (Google/Meta) can generate leads within days of launch. SEO typically shows meaningful traction in 3–6 months and compounds from there. Social media growth varies, but you'll see engagement improvements within 30 days of a strategic overhaul. We set honest expectations upfront and track progress weekly so you're never in the dark.",
    ocid: "faq.item.1",
  },
  {
    question: "What makes Ascendrix different from other marketing agencies?",
    answer:
      "Most agencies are channel specialists — they're good at one thing but leave gaps elsewhere. Ascendrix is built as a full-funnel growth partner. We start with strategy, build integrated campaigns across all relevant channels, and measure everything against business outcomes — not vanity metrics. Every client gets a dedicated senior strategist, not a rotating team of juniors.",
    ocid: "faq.item.2",
  },
  {
    question: "What's the minimum budget required to work with you?",
    answer:
      "Our services start from ₹20,000 only. This makes professional digital marketing accessible to startups, small businesses, and growing brands. For 1:1 consulting and workshops, pricing is scoped based on session format and team size. Book a free strategy call and we'll give you a clear breakdown.",
    ocid: "faq.item.3",
  },
  {
    question:
      "Do you offer workshops for teams with no prior marketing knowledge?",
    answer:
      "Absolutely. Our workshops are designed for all levels — from founders who need a marketing 101 foundation to experienced teams looking to master performance channels. We tailor every workshop to your industry, current capabilities, and goals. After the session, participants leave with actionable frameworks and a custom playbook for their business.",
    ocid: "faq.item.4",
  },
  {
    question: "How does the 1:1 consulting work?",
    answer:
      "You get dedicated sessions with a senior Ascendrix strategist who deep-dives into your business. We audit your current marketing, identify the highest-leverage opportunities, and build a detailed roadmap. Sessions are typically 90 minutes, and you'll receive a written strategy document after each one. Most clients do monthly or bi-weekly sessions, but we offer flexible packages based on your needs.",
    ocid: "faq.item.5",
  },
];

export default function FAQ() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/3 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-electric border border-electric/30 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-4">
              Questions <span className="text-gradient-blue">Answered</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know before making a decision.
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.ocid}
                  data-ocid={faq.ocid}
                  value={`item-${i + 1}`}
                  className="border border-border rounded-xl bg-card overflow-hidden data-[state=open]:border-electric/40 transition-all duration-200"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-display font-semibold text-base text-foreground hover:no-underline hover:text-electric transition-colors [&[data-state=open]]:text-electric">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10"
          >
            <p className="text-muted-foreground text-sm">
              Still have questions?{" "}
              <button
                type="button"
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-electric hover:text-electric-bright underline underline-offset-2 transition-colors"
              >
                Message us directly
              </button>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
