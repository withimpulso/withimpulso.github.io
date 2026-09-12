import { motion } from "framer-motion";
import {
  Monitor,
  ShieldCheck,
  Fingerprint,
  GraduationCap,
  Building2,
  ClipboardCheck,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const services = [
  {
    icon: Building2,
    titleKey: "services.tenant.title",
    descriptionKey: "services.tenant.description",
  },
  {
    icon: ClipboardCheck,
    titleKey: "services.licensing.title",
    descriptionKey: "services.licensing.description",
  },
  {
    icon: Monitor,
    titleKey: "services.workplace.title",
    descriptionKey: "services.workplace.description",
  },
  {
    icon: Fingerprint,
    titleKey: "services.identity.title",
    descriptionKey: "services.identity.description",
  },
  {
    icon: ShieldCheck,
    titleKey: "services.security.title",
    descriptionKey: "services.security.description",
  },
  {
    icon: GraduationCap,
    titleKey: "services.training.title",
    descriptionKey: "services.training.description",
  },
];

const ServicesSection = () => {
  const { t } = useLanguage();

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
            {t("services.eyebrow")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            {t("services.title")}
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
                  {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(service.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
