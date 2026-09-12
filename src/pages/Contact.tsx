import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/i18n";

const businessDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "Emmalaan 2, 2421 CP Nieuwkoop, The Netherlands",
    href: "https://maps.google.com/?q=Emmalaan+2+2421+CP+Nieuwkoop",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@withimpulso.com",
    href: "mailto:hello@withimpulso.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri, 09:00 – 17:30",
  },
];

const ContactPage = () => {
  const { language } = useLanguage();
  const copy = language === "ca"
    ? {
        eyebrow: "Contacte",
        title: "Comencem una conversa",
        intro: "Tant si comences una transformació com si necessites expertesa per a un repte concret, som aquí per ajudar-te.",
        formTitle: "Envia'ns un missatge",
        formIntro: "Omple el formulari i et respondrem en un dia laborable.",
        name: "Nom *",
        namePlaceholder: "El teu nom",
        email: "Correu electrònic *",
        company: "Empresa",
        companyPlaceholder: "Nom de l'empresa",
        subject: "Assumpte *",
        subjectPlaceholder: "Com et podem ajudar?",
        message: "Missatge *",
        messagePlaceholder: "Explica'ns el teu projecte o repte...",
        sending: "Enviant...",
        send: "Envia el missatge",
        detailsTitle: "Contacta amb nosaltres",
        address: "Adreça",
        emailLabel: "Correu electrònic",
        hours: "Horari d'atenció",
        businessHours: "Dilluns - divendres, 09:00 - 17:30",
        sent: "Missatge enviat correctament",
        sentDescription: "Revisa el teu correu per veure la resposta automàtica. Et respondrem en un dia laborable.",
        error: "Error",
        failed: "No s'ha pogut enviar el missatge. Torna-ho a provar.",
        unexpected: "S'ha produït un error. Torna-ho a provar.",
      }
    : language === "nl"
    ? {
        eyebrow: "Contact",
        title: "Laten we kennismaken",
        intro: "Of je nu een transformatie start of deskundige hulp nodig hebt bij een specifieke uitdaging, we helpen je graag.",
        formTitle: "Stuur ons een bericht",
        formIntro: "Vul het formulier in en we nemen binnen één werkdag contact met je op.",
        name: "Naam *", namePlaceholder: "Je naam", email: "E-mail *", company: "Bedrijf", companyPlaceholder: "Naam van het bedrijf", subject: "Onderwerp *", subjectPlaceholder: "Hoe kunnen we helpen?", message: "Bericht *", messagePlaceholder: "Vertel ons over je project of uitdaging...", sending: "Verzenden...", send: "Bericht verzenden", detailsTitle: "Neem contact op", address: "Adres", emailLabel: "E-mail", hours: "Openingstijden", businessHours: "Maandag - vrijdag, 09:00 - 17:30", sent: "Bericht succesvol verzonden", sentDescription: "Controleer je e-mail voor onze automatische reactie. We nemen binnen één werkdag contact met je op.", error: "Fout", failed: "Het bericht kon niet worden verzonden. Probeer het opnieuw.", unexpected: "Er is een fout opgetreden. Probeer het opnieuw.",
      }
    : language === "es"
    ? {
        eyebrow: "Contacto",
        title: "Empecemos una conversación",
        intro: "Tanto si inicias una transformación como si necesitas experiencia para un reto concreto, estamos aquí para ayudarte.",
        formTitle: "Envíanos un mensaje",
        formIntro: "Completa el formulario y te responderemos en un día laborable.",
        name: "Nombre *", namePlaceholder: "Tu nombre", email: "Correo electrónico *", company: "Empresa", companyPlaceholder: "Nombre de la empresa", subject: "Asunto *", subjectPlaceholder: "¿Cómo podemos ayudarte?", message: "Mensaje *", messagePlaceholder: "Cuéntanos tu proyecto o reto...", sending: "Enviando...", send: "Enviar mensaje", detailsTitle: "Contacta con nosotros", address: "Dirección", emailLabel: "Correo electrónico", hours: "Horario", businessHours: "Lunes - viernes, 09:00 - 17:30", sent: "Mensaje enviado correctamente", sentDescription: "Revisa tu correo para ver la respuesta automática. Te responderemos en un día laborable.", error: "Error", failed: "No se ha podido enviar el mensaje. Inténtalo de nuevo.", unexpected: "Se ha producido un error. Inténtalo de nuevo.",
      }
    : {
        eyebrow: "Contact",
        title: "Let's start a conversation",
        intro: "Whether you're starting a transformation or need expert hands on a specific challenge — we're here to help.",
        formTitle: "Send us a message",
        formIntro: "Fill in the form and we'll get back to you within one business day.",
        name: "Name *",
        namePlaceholder: "Your name",
        email: "Email *",
        company: "Company",
        companyPlaceholder: "Company name",
        subject: "Subject *",
        subjectPlaceholder: "How can we help?",
        message: "Message *",
        messagePlaceholder: "Tell us about your project or challenge...",
        sending: "Sending...",
        send: "Send Message",
        detailsTitle: "Get in touch",
        address: "Address",
        emailLabel: "Email",
        hours: "Business Hours",
        businessHours: "Mon - Fri, 09:00 - 17:30",
        sent: "Message sent successfully",
        sentDescription: "Check your email for our auto-reply. We'll get back to you within one business day.",
        error: "Error",
        failed: "Failed to send message. Please try again.",
        unexpected: "An error occurred. Please try again.",
      };
  const localizedDetails = [copy.address, copy.emailLabel, copy.hours];
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('company', formData.company);
      formDataToSubmit.append('subject', formData.subject);
      formDataToSubmit.append('message', formData.message);
      
      // FormSubmit.co advanced features
      formDataToSubmit.append('_captcha', 'false'); // reCAPTCHA v3 enabled
      formDataToSubmit.append('_autoresponse', `Hi ${formData.name},\n\nThank you for reaching out to Impulso. We've received your message and will get back to you within one business day.\n\nBest regards,\nThe Impulso Team`);
      formDataToSubmit.append('_next', `${window.location.origin}/thank-you`); // Redirect after submission
      formDataToSubmit.append('_subject', `New Contact Form Submission: ${formData.subject}`); // Custom subject line

      // Send to FormSubmit.co
      const response = await fetch('https://formsubmit.co/hello@withimpulso.com', {
        method: 'POST',
        body: formDataToSubmit,
      });

      // Send to Teams webhook (Power Automate)
      const teamsWebhookUrl = import.meta.env.VITE_TEAMS_WEBHOOK_URL;
      if (teamsWebhookUrl) {
        try {
          await fetch(teamsWebhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              company: formData.company,
              subject: formData.subject,
              message: formData.message,
              submittedAt: new Date().toISOString(),
            }),
          });
        } catch (webhookError) {
          console.error('Teams webhook error:', webhookError);
          // Don't show error to user - webhook failure shouldn't block form submission
        }
      }

      if (response.ok) {
        toast({
          title: copy.sent,
          description: copy.sentDescription,
        });
        setFormData({ name: "", email: "", company: "", subject: "", message: "" });
        // Redirect after a short delay
        setTimeout(() => {
          window.location.href = `${window.location.origin}/thank-you`;
        }, 1500);
      } else {
        toast({
          title: copy.error,
          description: copy.failed,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: copy.error,
        description: copy.unexpected,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              {copy.eyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              {copy.title}
            </h1>
            <p className="text-primary-foreground/60 text-lg max-w-2xl leading-relaxed">
              {copy.intro}
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
                {copy.formTitle}
              </h2>
              <p className="text-muted-foreground mb-8">
                {copy.formIntro}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      {copy.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      placeholder={copy.namePlaceholder}
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      {copy.email}
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
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      {copy.company}
                    </label>
                    <Input
                      id="company"
                      name="company"
                      maxLength={100}
                      placeholder={copy.companyPlaceholder}
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      {copy.subject}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      maxLength={200}
                      placeholder={copy.subjectPlaceholder}
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    {copy.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    maxLength={2000}
                    rows={5}
                    placeholder={copy.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 h-auto text-base font-semibold group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? copy.sending : copy.send}
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
                  {copy.detailsTitle}
                </h2>
                <div className="space-y-5">
                  {businessDetails.map((detail) => (
                    <div key={detail.label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <detail.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                          {localizedDetails[businessDetails.indexOf(detail)]}
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
                            {businessDetails.indexOf(detail) === 2 ? copy.businessHours : detail.value}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.742736152942!2d4.78126751245123!3d52.1571881629106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5d8e0bc11345b%3A0xead1ed204385b571!2sEmmalaan%202%2C%202421%20CP%20Nieuwkoop%2C%20Nederland!5e0!3m2!1snl!2sus!4v1774473127129!5m2!1snl!2sus"
                  width="300"
                  height="200"
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
