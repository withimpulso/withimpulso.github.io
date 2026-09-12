import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const reasons = [
  {
    number: "01",
    titleKey: "why.boutique.title",
    descriptionKey: "why.boutique.description",
  },
  {
    number: "02",
    titleKey: "why.microsoft.title",
    descriptionKey: "why.microsoft.description",
  },
  {
    number: "03",
    titleKey: "why.outcome.title",
    descriptionKey: "why.outcome.description",
  },
  {
    number: "04",
    titleKey: "why.trusted.title",
    descriptionKey: "why.trusted.description",
  },
];

const WhySection = () => {
  const { t } = useLanguage();

  return (
    <section id="why" className="py-24 md:py-32 bg-primary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
              {t("why.eyebrow")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
              {t("why.title")}
            </h2>
            <p className="text-primary-foreground/60 leading-relaxed mb-8 max-w-md">
              {t("why.description")}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent hover:text-amber-light font-medium transition-colors group"
            >
              {t("why.cta")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5 group"
              >
                <span className="text-accent/40 font-serif text-2xl font-bold shrink-0 group-hover:text-accent transition-colors">
                  {reason.number}
                </span>
                <div>
                  <h3 className="text-primary-foreground font-semibold mb-1">
                    {t(reason.titleKey)}
                  </h3>
                  <p className="text-primary-foreground/50 text-sm leading-relaxed">
                    {t(reason.descriptionKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
