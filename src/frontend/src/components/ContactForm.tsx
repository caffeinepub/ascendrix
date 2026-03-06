import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  Send,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ServiceInterest } from "../backend";
import { useSubmitContactForm } from "../hooks/useQueries";

const serviceOptions: { value: ServiceInterest; label: string }[] = [
  {
    value: ServiceInterest.socialMediaManagement,
    label: "Social Media Management",
  },
  { value: ServiceInterest.seo, label: "SEO (Search Engine Optimization)" },
  { value: ServiceInterest.paidAds, label: "Paid Ads" },
  { value: ServiceInterest.googleAds, label: "Google Ads" },
  { value: ServiceInterest.consulting, label: "1:1 Marketing Consulting" },
  { value: ServiceInterest.workshop, label: "Workshops" },
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState<ServiceInterest | "">("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { mutate, isPending, isError, error } = useSubmitContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!service) return;

    mutate(
      { name, email, message, serviceInterest: service },
      {
        onSuccess: () => {
          setSubmitted(true);
          setName("");
          setEmail("");
          setService("");
          setMessage("");
        },
      },
    );
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-15" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-electric/8 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-electric border border-electric/30 rounded-full mb-4">
              Let's Talk
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
              Ready to <span className="text-gradient-blue">Ascend?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Drop us a message and a senior strategist will respond within 24
              hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-electric/15 flex items-center justify-center">
                    <Mail size={18} className="text-electric" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                      Email Us
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      ascendrix.jpr@gmail.com
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-electric/15 flex items-center justify-center">
                    <Phone size={18} className="text-electric" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                      Call Us
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      +91 93524 94668
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-electric/20 bg-electric/8 p-6">
                <h3 className="font-display font-bold text-foreground mb-2">
                  Free Strategy Call
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Not sure where to start? Book a no-obligation 30-minute
                  strategy call with one of our growth experts.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="rounded-xl border border-border bg-card p-7 lg:p-8">
                {submitted ? (
                  <motion.div
                    data-ocid="contact.success_state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-emerald-400" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground max-w-xs">
                      We've received your inquiry. Expect a response from our
                      team within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="mt-2 border-border hover:border-electric"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label
                          htmlFor="contact-name"
                          className="text-sm text-muted-foreground font-medium"
                        >
                          Your Name *
                        </Label>
                        <Input
                          id="contact-name"
                          data-ocid="contact.name.input"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Sarah Chen"
                          required
                          className="bg-secondary border-border focus:border-electric focus-visible:ring-electric/30 text-foreground placeholder:text-muted-foreground/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="contact-email"
                          className="text-sm text-muted-foreground font-medium"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="contact-email"
                          data-ocid="contact.email.input"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          required
                          className="bg-secondary border-border focus:border-electric focus-visible:ring-electric/30 text-foreground placeholder:text-muted-foreground/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm text-muted-foreground font-medium">
                        Service of Interest *
                      </Label>
                      <Select
                        value={service}
                        onValueChange={(v) => setService(v as ServiceInterest)}
                        required
                      >
                        <SelectTrigger
                          data-ocid="contact.service.select"
                          className="bg-secondary border-border focus:border-electric focus:ring-electric/30 text-foreground"
                        >
                          <SelectValue placeholder="Select a service..." />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border">
                          {serviceOptions.map((opt) => (
                            <SelectItem
                              key={opt.value}
                              value={opt.value}
                              className="text-foreground hover:bg-secondary focus:bg-secondary"
                            >
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-message"
                        className="text-sm text-muted-foreground font-medium"
                      >
                        Tell Us About Your Goals *
                      </Label>
                      <Textarea
                        id="contact-message"
                        data-ocid="contact.message.textarea"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your business, current challenges, and what success looks like..."
                        required
                        rows={4}
                        className="bg-secondary border-border focus:border-electric focus-visible:ring-electric/30 text-foreground placeholder:text-muted-foreground/50 resize-none"
                      />
                    </div>

                    {isError && (
                      <div
                        data-ocid="contact.error_state"
                        className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm"
                      >
                        <XCircle size={16} />
                        <span>
                          {error instanceof Error
                            ? error.message
                            : "Something went wrong. Please try again."}
                        </span>
                      </div>
                    )}

                    <Button
                      data-ocid="contact.submit_button"
                      type="submit"
                      disabled={isPending || !service}
                      className="w-full bg-electric hover:bg-electric-bright text-white font-bold py-5 text-sm rounded-md glow-blue-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isPending ? (
                        <>
                          <span
                            data-ocid="contact.loading_state"
                            className="flex items-center gap-2"
                          >
                            <Loader2 size={16} className="animate-spin" />
                            Sending Message...
                          </span>
                        </>
                      ) : (
                        <>
                          <Send size={16} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
