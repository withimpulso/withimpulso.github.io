import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Boutique, not generic",
    description: "You work directly with senior consultants — no juniors learning on your dime.",
  },
  {
    number: "02",
    title: "Microsoft-native",
    description: "Deep expertise across the Microsoft ecosystem. No tool sprawl, no vendor lock-in confusion.",
  },
  {
    number: "03",
    title: "Outcome-driven",
    description: "We don't sell hours. We deliver roadmaps, implementations, and measurable progress.",
  },
  {
    number: "04",
    title: "Trusted partner",
    description: "Long-term relationships built on transparency, honest advice, and real results.",
  },
];

const WhySection = () => {
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
              Why Impulso
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
              The consultancy that moves{" "}
              <span className="text-accent">with</span> you
            </h2>
            <p className="text-primary-foreground/60 leading-relaxed mb-8 max-w-md">
              Impulso means "momentum" — and that's exactly what we create. 
              We cut through noise and deliver clarity so your organization can accelerate.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent hover:text-amber-light font-medium transition-colors group"
            >
              Start a conversation
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
                    {reason.title}
                  </h3>
                  <p className="text-primary-foreground/50 text-sm leading-relaxed">
                    {reason.description}
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
