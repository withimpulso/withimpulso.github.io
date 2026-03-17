import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const businessDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "Keizersgracht 520, 1017 EK Amsterdam",
    href: "https://maps.google.com/?q=Keizersgracht+520+1017+EK+Amsterdam",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@impulso.nl",
    href: "mailto:hello@impulso.nl",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+31 20 123 4567",
    href: "tel:+31201234567",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri, 09:00 – 17:30",
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you within one business day.",
    });
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              Contact
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Let's start a conversation
            </h1>
            <p className="text-primary-foreground/60 text-lg max-w-2xl leading-relaxed">
              Whether you're starting a transformation or need expert hands on a
              specific challenge — we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact form — 3 cols */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                Send us a message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill in the form and we'll get back to you within one business
                day.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      maxLength={100}
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      maxLength={200}
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    maxLength={2000}
                    rows={5}
                    placeholder="Tell us about your project or challenge…"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 h-auto text-base font-semibold group"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </form>
            </motion.div>

            {/* Business details — 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                  Get in touch
                </h2>
                <div className="space-y-5">
                  {businessDetails.map((detail) => (
                    <div key={detail.label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <detail.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            target={
                              detail.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-accent transition-colors text-sm"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-foreground text-sm">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  title="Office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.117!2d4.8875!3d52.3645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609e943cc08d1%3A0x5b4a37f4f2c0a8a0!2sKeizersgracht%20520%2C%201017%20EK%20Amsterdam!5e0!3m2!1sen!2snl!4v1710000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
