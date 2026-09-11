import { motion } from "framer-motion";
import {
  Monitor,
  ShieldCheck,
  Fingerprint,
  GraduationCap,
  Building2,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Tenant Review",
    description:
      "Get a clear view of your Microsoft 365 tenant. We cross-check your configuration, governance, security, and operational readiness against our best-practice benchmarks to identify risks and practical improvements.",
  },
  {
    icon: ClipboardCheck,
    title: "Licensing Review",
    description:
      "We review your Microsoft licensing against your actual usage and business needs. The outcome can be better-aligned subscriptions and opportunities to reduce licensing costs.",
  },
  {
    icon: Monitor,
    title: "Modern Workplace",
    description:
      "Streamline collaboration with Microsoft 365, Intune, and Autopilot. We design and deploy the digital workplace your teams actually want to use.",
  },
  {
    icon: Fingerprint,
    title: "Identity",
    description:
      "Zero Trust starts with identity. We architect Entra ID solutions — from conditional access to governance — so the right people reach the right resources.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Protect what matters most. We implement Microsoft Defender, Sentinel, and Purview to give you visibility, detection, and response across your estate.",
  },
  {
    icon: GraduationCap,
    title: "Trainings",
    description:
      "Upskill your team with hands-on, expert-led trainings. From Microsoft 365 fundamentals to advanced security operations — practical knowledge that sticks.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Six Pillars of Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-lg p-8 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
