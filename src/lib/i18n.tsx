import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "nl" | "es" | "ca";

type Messages = Record<string, string>;

const messages: Record<Language, Messages> = {
  en: {
    "nav.services": "Services",
    "nav.why": "Why Impulso",
    "nav.trainings": "Trainings",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.getInTouch": "Get in Touch",
    "footer.rights": "All rights reserved.",
    "home.eyebrow": "Boutique IT Consultancy",
    "home.title": "Move Forward with Clarity, Control & Confidence",
    "home.description": "Impulso helps organizations navigate Modern Workplace, Identity, and Security — delivering expert guidance that turns complexity into momentum.",
    "home.services": "Explore Our Services",
    "home.talk": "Let's Talk",
    "services.eyebrow": "What We Do",
    "services.title": "Six Pillars of Expertise",
    "services.tenant.title": "Tenant Review",
    "services.tenant.description": "Get a clear view of your Microsoft 365 tenant. We cross-check your configuration, governance, security, and operational readiness against our best-practice benchmarks to identify risks and practical improvements.",
    "services.licensing.title": "Licensing Review",
    "services.licensing.description": "We review your Microsoft licensing against your actual usage and business needs. The outcome can be better-aligned subscriptions and opportunities to reduce licensing costs.",
    "services.workplace.title": "Modern Workplace",
    "services.workplace.description": "Streamline collaboration with Microsoft 365, Intune, and Autopilot. We design and deploy the digital workplace your teams actually want to use.",
    "services.identity.title": "Identity",
    "services.identity.description": "Zero Trust starts with identity. We architect Entra ID solutions — from conditional access to governance — so the right people reach the right resources.",
    "services.security.title": "Security",
    "services.security.description": "Protect what matters most. We implement Microsoft Defender, Sentinel, and Purview to give you visibility, detection, and response across your estate.",
    "services.training.title": "Trainings",
    "services.training.description": "Upskill your team with hands-on, expert-led trainings. From Microsoft 365 fundamentals to advanced security operations — practical knowledge that sticks.",
    "why.eyebrow": "Why Impulso",
    "why.title": "The consultancy that moves with you",
    "why.description": "Impulso means momentum — and that's exactly what we create. We cut through noise and deliver clarity so your organization can accelerate.",
    "why.cta": "Start a conversation",
    "why.boutique.title": "Boutique, not generic",
    "why.boutique.description": "You work directly with senior consultants — no juniors learning on your dime.",
    "why.microsoft.title": "Microsoft-native",
    "why.microsoft.description": "Deep expertise across the Microsoft ecosystem. No tool sprawl, no vendor lock-in confusion.",
    "why.outcome.title": "Outcome-driven",
    "why.outcome.description": "We don't sell hours. We deliver roadmaps, implementations, and measurable progress.",
    "why.trusted.title": "Trusted partner",
    "why.trusted.description": "Long-term relationships built on transparency, honest advice, and real results.",
    "contact.ready": "Ready to move forward?",
    "contact.description": "Whether you're starting a transformation or need expert hands on a specific challenge — let's have a conversation about what's next.",
    "contact.button": "Get in Touch",
    "trainings.eyebrow": "Trainings",
    "trainings.title": "Level up your team's expertise",
    "trainings.description": "Practical, hands-on trainings delivered by senior consultants who work with these technologies every day. No slides-only sessions — real skills, real scenarios.",
    "trainings.formats": "Formats",
    "trainings.setup": "Typical setup",
    "trainings.setupDescription": "Clear outcomes, practical exercises, and take-home material.",
    "trainings.remote": "Remote or on-site",
    "trainings.schedule": "Half-day / full-day / 2-day",
    "trainings.labs": "Live demos + hands-on labs",
    "trainings.guidance": "Q&A and implementation guidance",
    "trainings.custom.title": "Need a custom training?",
    "trainings.custom.description": "We tailor every session to your team's skill level, environment, and goals. Get in touch to discuss your requirements.",
    "trainings.custom.button": "Request a Training",
    "blog.back": "Back to Impulso",
    "blog.category": "Identity & Security",
    "blog.title": "The hidden cost of identity drift",
    "blog.description": "Why access reviews are more than a compliance exercise, and how a clearer identity lifecycle can make your organization safer.",
    "blog.read": "5 min read",
    "blog.ctaTitle": "Want a second pair of eyes?",
    "blog.ctaDescription": "We help teams turn identity strategy into daily practice.",
    "blog.cta": "Talk to us",
  },
  ca: {
    "nav.services": "Serveis",
    "nav.why": "Per què Impulso",
    "nav.trainings": "Formacions",
    "nav.blog": "Blog",
    "nav.contact": "Contacte",
    "nav.getInTouch": "Parlem-ne",
    "footer.rights": "Tots els drets reservats.",
    "home.eyebrow": "Consultoria informàtica boutique",
    "home.title": "Avança amb claredat, control i confiança",
    "home.description": "Impulso ajuda les organitzacions a avançar en Modern Workplace, identitat i seguretat, amb assessorament expert que transforma la complexitat en impuls.",
    "home.services": "Descobreix els nostres serveis",
    "home.talk": "Parlem-ne",
    "services.eyebrow": "Què fem",
    "services.title": "Sis pilars d'expertesa",
    "services.tenant.title": "Revisió del tenant",
    "services.tenant.description": "Obtingues una visió clara del teu tenant de Microsoft 365. Contrastem la configuració, la governança, la seguretat i la preparació operativa amb les nostres bones pràctiques per identificar riscos i millores concretes.",
    "services.licensing.title": "Revisió de llicències",
    "services.licensing.description": "Revisem les llicències de Microsoft segons l'ús real i les necessitats del negoci. El resultat pot ser una subscripció més ajustada i oportunitats per reduir costos.",
    "services.workplace.title": "Modern Workplace",
    "services.workplace.description": "Agilitza la col·laboració amb Microsoft 365, Intune i Autopilot. Dissenyem i despleguem l'entorn de treball digital que els teus equips volen utilitzar.",
    "services.identity.title": "Identitat",
    "services.identity.description": "Zero Trust comença per la identitat. Dissenyem solucions d'Entra ID, des de l'accés condicional fins a la governança, perquè les persones adequades accedeixin als recursos adequats.",
    "services.security.title": "Seguretat",
    "services.security.description": "Protegim allò que més importa. Implementem Microsoft Defender, Sentinel i Purview per donar-te visibilitat, detecció i resposta a tot l'entorn.",
    "services.training.title": "Formacions",
    "services.training.description": "Impulsa el teu equip amb formacions pràctiques dirigides per experts. Des dels fonaments de Microsoft 365 fins a operacions avançades de seguretat: coneixement que perdura.",
    "why.eyebrow": "Per què Impulso",
    "why.title": "La consultoria que avança amb tu",
    "why.description": "Impulso significa empenta, i això és exactament el que creem. Eliminem el soroll i aportem claredat perquè la teva organització pugui accelerar.",
    "why.cta": "Inicia una conversa",
    "why.boutique.title": "Boutique, no genèrica",
    "why.boutique.description": "Treballes directament amb consultors sèniors, sense júniors aprenent a costa teva.",
    "why.microsoft.title": "Nativa de Microsoft",
    "why.microsoft.description": "Expertesa profunda en l'ecosistema Microsoft. Sense dispersió d'eines ni confusió per dependència de proveïdors.",
    "why.outcome.title": "Orientada a resultats",
    "why.outcome.description": "No venem hores. Oferim fulls de ruta, implementacions i progrés mesurable.",
    "why.trusted.title": "Soci de confiança",
    "why.trusted.description": "Relacions a llarg termini basades en transparència, consells honestos i resultats reals.",
    "contact.ready": "Preparat per avançar?",
    "contact.description": "Tant si comences una transformació com si necessites expertesa per a un repte concret, parlem del que ve després.",
    "contact.button": "Parlem-ne",
    "trainings.eyebrow": "Formacions",
    "trainings.title": "Fes créixer l'expertesa del teu equip",
    "trainings.description": "Formacions pràctiques impartides per consultors sèniors que treballen cada dia amb aquestes tecnologies. Sense sessions basades només en diapositives: habilitats reals i casos reals.",
    "trainings.formats": "Formats",
    "trainings.setup": "Configuració habitual",
    "trainings.setupDescription": "Objectius clars, exercicis pràctics i material per continuar treballant.",
    "trainings.remote": "En remot o presencial",
    "trainings.schedule": "Mitja jornada / jornada completa / 2 dies",
    "trainings.labs": "Demostracions en directe i laboratoris pràctics",
    "trainings.guidance": "Preguntes i respostes i orientació d'implementació",
    "trainings.custom.title": "Necessites una formació a mida?",
    "trainings.custom.description": "Adaptem cada sessió al nivell, l'entorn i els objectius del teu equip. Parlem de les teves necessitats.",
    "trainings.custom.button": "Sol·licita una formació",
    "blog.back": "Torna a Impulso",
    "blog.category": "Identitat i seguretat",
    "blog.title": "El cost ocult de la deriva d'identitats",
    "blog.description": "Per què les revisions d'accés són més que un exercici de compliment, i com un cicle de vida de la identitat més clar pot fer la teva organització més segura.",
    "blog.read": "5 min de lectura",
    "blog.ctaTitle": "Vols una segona opinió?",
    "blog.ctaDescription": "Ajudem els equips a convertir l'estratègia d'identitat en pràctica diària.",
    "blog.cta": "Parlem-ne",
  },
  nl: {},
  es: {},
};

Object.assign(messages.nl, {
  "nav.services": "Diensten", "nav.why": "Waarom Impulso", "nav.trainings": "Trainingen", "nav.blog": "Blog", "nav.contact": "Contact", "nav.getInTouch": "Neem contact op", "footer.rights": "Alle rechten voorbehouden.",
  "home.eyebrow": "Boutique IT-consultancy", "home.title": "Vooruit met helderheid, controle en vertrouwen", "home.description": "Impulso helpt organisaties met Modern Workplace, identiteit en beveiliging, met deskundig advies dat complexiteit omzet in vooruitgang.", "home.services": "Ontdek onze diensten", "home.talk": "Laten we praten",
  "services.eyebrow": "Wat we doen", "services.title": "Zes pijlers van expertise", "services.tenant.title": "Tenant-review", "services.tenant.description": "Krijg een helder beeld van je Microsoft 365-tenant. We toetsen configuratie, governance, beveiliging en operationele gereedheid aan onze best practices om risico's en praktische verbeteringen te vinden.", "services.licensing.title": "Licentie-review", "services.licensing.description": "We beoordelen je Microsoft-licenties op basis van werkelijk gebruik en bedrijfsbehoeften. Dat kan leiden tot beter passende abonnementen en lagere licentiekosten.", "services.workplace.title": "Modern Workplace", "services.workplace.description": "Stroomlijn samenwerking met Microsoft 365, Intune en Autopilot. We ontwerpen en implementeren de digitale werkplek die je teams echt willen gebruiken.", "services.identity.title": "Identiteit", "services.identity.description": "Zero Trust begint bij identiteit. We ontwerpen Entra ID-oplossingen, van voorwaardelijke toegang tot governance, zodat de juiste mensen bij de juiste bronnen komen.", "services.security.title": "Beveiliging", "services.security.description": "Bescherm wat het belangrijkst is. We implementeren Microsoft Defender, Sentinel en Purview voor inzicht, detectie en respons in je hele omgeving.", "services.training.title": "Trainingen", "services.training.description": "Ontwikkel je team met praktische trainingen onder leiding van experts. Van Microsoft 365-fundamentals tot geavanceerde security operations: kennis die blijft hangen.",
  "why.eyebrow": "Waarom Impulso", "why.title": "De consultancy die met je meebeweegt", "why.description": "Impulso betekent momentum, en dat is precies wat we creëren. We brengen helderheid in de ruis zodat je organisatie kan versnellen.", "why.cta": "Start een gesprek", "why.boutique.title": "Boutique, niet generiek", "why.boutique.description": "Je werkt direct met senior consultants, zonder junioren die op jouw kosten leren.", "why.microsoft.title": "Microsoft-native", "why.microsoft.description": "Diepgaande kennis van het Microsoft-ecosysteem. Geen wildgroei aan tools en geen verwarring door leveranciersafhankelijkheid.", "why.outcome.title": "Resultaatgericht", "why.outcome.description": "We verkopen geen uren. We leveren roadmaps, implementaties en meetbare vooruitgang.", "why.trusted.title": "Vertrouwde partner", "why.trusted.description": "Langdurige relaties gebaseerd op transparantie, eerlijk advies en echte resultaten.",
  "contact.ready": "Klaar om vooruit te gaan?", "contact.description": "Of je nu een transformatie start of deskundige hulp nodig hebt bij een specifieke uitdaging, laten we bespreken wat de volgende stap is.", "contact.button": "Neem contact op",
  "trainings.eyebrow": "Trainingen", "trainings.title": "Vergroot de expertise van je team", "trainings.description": "Praktische trainingen door senior consultants die elke dag met deze technologieën werken. Geen sessies met alleen slides, maar echte vaardigheden en scenario's.", "trainings.formats": "Vormen", "trainings.setup": "Typische opzet", "trainings.setupDescription": "Duidelijke resultaten, praktische oefeningen en materiaal om mee verder te werken.", "trainings.remote": "Op afstand of op locatie", "trainings.schedule": "Halve dag / hele dag / 2 dagen", "trainings.labs": "Live demo's en praktijklabs", "trainings.guidance": "Q&A en implementatiebegeleiding", "trainings.custom.title": "Een training op maat nodig?", "trainings.custom.description": "We stemmen elke sessie af op het niveau, de omgeving en de doelen van je team. Neem contact op om je wensen te bespreken.", "trainings.custom.button": "Training aanvragen",
  "blog.back": "Terug naar Impulso", "blog.category": "Identiteit en beveiliging", "blog.title": "De verborgen kosten van identiteitsvervuiling", "blog.description": "Waarom toegangsbeoordelingen meer zijn dan een compliance-oefening, en hoe een heldere identity lifecycle je organisatie veiliger maakt.", "blog.read": "5 min lezen", "blog.ctaTitle": "Wil je een tweede paar ogen?", "blog.ctaDescription": "We helpen teams om identity-strategie om te zetten in dagelijkse praktijk.", "blog.cta": "Praat met ons",
});

Object.assign(messages.es, {
  "nav.services": "Servicios", "nav.why": "Por qué Impulso", "nav.trainings": "Formación", "nav.blog": "Blog", "nav.contact": "Contacto", "nav.getInTouch": "Hablemos", "footer.rights": "Todos los derechos reservados.",
  "home.eyebrow": "Consultoría boutique de TI", "home.title": "Avanza con claridad, control y confianza", "home.description": "Impulso ayuda a las organizaciones a avanzar en Modern Workplace, identidad y seguridad, con asesoramiento experto que convierte la complejidad en impulso.", "home.services": "Descubre nuestros servicios", "home.talk": "Hablemos",
  "services.eyebrow": "Qué hacemos", "services.title": "Seis pilares de experiencia", "services.tenant.title": "Revisión del tenant", "services.tenant.description": "Obtén una visión clara de tu tenant de Microsoft 365. Contrastamos la configuración, la gobernanza, la seguridad y la preparación operativa con nuestras buenas prácticas para identificar riesgos y mejoras prácticas.", "services.licensing.title": "Revisión de licencias", "services.licensing.description": "Revisamos tus licencias de Microsoft según el uso real y las necesidades del negocio. El resultado puede ser una suscripción mejor ajustada y oportunidades para reducir costes.", "services.workplace.title": "Modern Workplace", "services.workplace.description": "Agiliza la colaboración con Microsoft 365, Intune y Autopilot. Diseñamos e implementamos el entorno de trabajo digital que tus equipos quieren utilizar.", "services.identity.title": "Identidad", "services.identity.description": "Zero Trust empieza por la identidad. Diseñamos soluciones de Entra ID, desde el acceso condicional hasta la gobernanza, para que las personas adecuadas accedan a los recursos adecuados.", "services.security.title": "Seguridad", "services.security.description": "Protegemos lo que más importa. Implementamos Microsoft Defender, Sentinel y Purview para ofrecer visibilidad, detección y respuesta en todo tu entorno.", "services.training.title": "Formación", "services.training.description": "Impulsa a tu equipo con formación práctica dirigida por expertos. Desde los fundamentos de Microsoft 365 hasta operaciones avanzadas de seguridad: conocimiento que perdura.",
  "why.eyebrow": "Por qué Impulso", "why.title": "La consultoría que avanza contigo", "why.description": "Impulso significa impulso, y eso es exactamente lo que creamos. Eliminamos el ruido y aportamos claridad para que tu organización pueda acelerar.", "why.cta": "Inicia una conversación", "why.boutique.title": "Boutique, no genérica", "why.boutique.description": "Trabajas directamente con consultores sénior, sin juniors aprendiendo a tu costa.", "why.microsoft.title": "Nativa de Microsoft", "why.microsoft.description": "Experiencia profunda en el ecosistema Microsoft. Sin proliferación de herramientas ni confusión por dependencia de proveedores.", "why.outcome.title": "Orientada a resultados", "why.outcome.description": "No vendemos horas. Entregamos hojas de ruta, implementaciones y avances medibles.", "why.trusted.title": "Socio de confianza", "why.trusted.description": "Relaciones a largo plazo basadas en transparencia, consejos honestos y resultados reales.",
  "contact.ready": "¿Listo para avanzar?", "contact.description": "Tanto si empiezas una transformación como si necesitas experiencia para un reto concreto, hablemos de lo que viene después.", "contact.button": "Hablemos",
  "trainings.eyebrow": "Formación", "trainings.title": "Haz crecer la experiencia de tu equipo", "trainings.description": "Formación práctica impartida por consultores sénior que trabajan cada día con estas tecnologías. Sin sesiones basadas solo en diapositivas: habilidades y escenarios reales.", "trainings.formats": "Formatos", "trainings.setup": "Configuración habitual", "trainings.setupDescription": "Resultados claros, ejercicios prácticos y material para seguir trabajando.", "trainings.remote": "Remoto o presencial", "trainings.schedule": "Media jornada / jornada completa / 2 días", "trainings.labs": "Demos en directo y laboratorios prácticos", "trainings.guidance": "Preguntas y respuestas y orientación de implementación", "trainings.custom.title": "¿Necesitas una formación a medida?", "trainings.custom.description": "Adaptamos cada sesión al nivel, el entorno y los objetivos de tu equipo. Contacta con nosotros para hablar de tus necesidades.", "trainings.custom.button": "Solicita una formación",
  "blog.back": "Volver a Impulso", "blog.category": "Identidad y seguridad", "blog.title": "El coste oculto de la deriva de identidades", "blog.description": "Por qué las revisiones de acceso son más que un ejercicio de cumplimiento y cómo un ciclo de vida de identidad más claro puede hacer más segura tu organización.", "blog.read": "5 min de lectura", "blog.ctaTitle": "¿Quieres una segunda opinión?", "blog.ctaDescription": "Ayudamos a los equipos a convertir la estrategia de identidad en práctica diaria.", "blog.cta": "Habla con nosotros",
});

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "en";

  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  if (queryLanguage === "ca" || queryLanguage === "nl" || queryLanguage === "es") return queryLanguage;

  if (window.location.hostname.endsWith(".cat")) return "ca";
  if (window.location.hostname.endsWith(".nl")) return "nl";
  if (window.location.hostname.endsWith(".es")) return "es";

  const referrer = document.referrer.toLowerCase();
  if (referrer.includes("withimpulso.cat")) return "ca";
  if (referrer.includes("withimpulso.nl")) return "nl";
  if (referrer.includes("withimpulso.es")) return "es";

  const storedLanguage = localStorage.getItem("impulso-language");
  return storedLanguage === "ca" || storedLanguage === "nl" || storedLanguage === "es" ? storedLanguage : "en";
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    localStorage.setItem("impulso-language", nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: (key) => messages[language][key] || messages.en[key] || key }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};