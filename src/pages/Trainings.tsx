import { motion } from "framer-motion";
import { Clock, Users, ArrowRight, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trainings = [
  {
    title: "Microsoft 365 Fundamentals for IT Pros",
    category: "Modern Workplace",
    duration: "2 days",
    format: "In-person / Virtual",
    description:
      "A hands-on deep dive into the Microsoft 365 ecosystem — covering Exchange Online, SharePoint, Teams administration, and Intune device management.",
    topics: ["Exchange Online", "SharePoint Admin", "Teams Governance", "Intune Basics"],
  },
  {
    title: "Entra ID: From Basics to Zero Trust",
    category: "Identity",
    duration: "3 days",
    format: "In-person / Virtual",
    description:
      "Master Microsoft Entra ID from the ground up. Learn to design conditional access policies, implement MFA, configure identity governance, and build a Zero Trust architecture.",
    topics: ["Conditional Access", "MFA & Passwordless", "Identity Governance", "PIM"],
  },
  {
    title: "Microsoft Defender XDR Workshop",
    category: "Security",
    duration: "2 days",
    format: "In-person / Virtual",
    description:
      "Learn to deploy and operate Microsoft Defender across endpoints, email, identity, and cloud apps. Includes hands-on incident response scenarios.",
    topics: ["Defender for Endpoint", "Defender for Office 365", "Incident Response", "Threat Hunting"],
  },
  {
    title: "Intune & Autopilot Masterclass",
    category: "Modern Workplace",
    duration: "2 days",
    format: "In-person / Virtual",
    description:
      "Go from zero to hero with Microsoft Intune and Windows Autopilot. Design device management strategies, deploy configuration profiles, and automate provisioning.",
    topics: ["Device Compliance", "Configuration Profiles", "Autopilot Deployment", "App Management"],
  },
  {
    title: "Microsoft Sentinel for Security Operations",
    category: "Security",
    duration: "3 days",
    format: "Virtual",
    description:
      "Build a cloud-native SIEM with Microsoft Sentinel. Cover data connectors, analytics rules, automation playbooks, and workbook dashboards.",
    topics: ["Data Connectors", "KQL Queries", "Automation Playbooks", "Workbooks & Dashboards"],
  },
  {
    title: "Identity Governance & Lifecycle Management",
    category: "Identity",
    duration: "1 day",
    format: "Virtual",
    description:
      "Streamline joiner-mover-leaver processes with Entra ID Governance. Cover access reviews, entitlement management, and lifecycle workflows.",
    topics: ["Access Reviews", "Entitlement Management", "Lifecycle Workflows", "Access Packages"],
  },
];

const categoryColor: Record<string, string> = {
  "Modern Workplace": "bg-accent/10 text-accent",
  Identity: "bg-primary/10 text-primary",
  Security: "bg-accent/15 text-accent",
};

const TrainingsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              Trainings
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Level up your team's expertise
            </h1>
            <p className="text-primary-foreground/60 text-lg max-w-2xl leading-relaxed">
              Practical, hands-on trainings delivered by senior consultants who work with these
              technologies every day. No slides-only sessions — real skills, real scenarios.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainings grid */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {trainings.map((training, i) => (
              <motion.article
                key={training.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-card rounded-lg border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="p-7 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColor[training.category] || "bg-muted text-muted-foreground"}`}>
                      {training.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {training.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {training.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {training.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-md"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border px-7 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {training.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      {training.format}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
              Formats
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Typical setup
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Clear outcomes, practical exercises, and take-home material.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: "🏠", label: "Remote or on-site" },
              { icon: "📅", label: "Half-day / full-day / 2-day" },
              { icon: "🧪", label: "Live demos + hands-on labs" },
              { icon: "💬", label: "Q&A and implementation guidance" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <p className="text-sm text-foreground font-medium">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Calendar className="w-10 h-10 text-accent mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">
              Need a custom training?
            </h2>
            <p className="text-primary-foreground/50 mb-8 leading-relaxed">
              We tailor every session to your team's skill level, environment, and goals.
              Get in touch to discuss your requirements.
            </p>
            <a
              href="mailto:hello@impulso.nl"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground font-semibold rounded-md hover:bg-amber-light transition-colors group"
            >
              Request a Training
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingsPage;
