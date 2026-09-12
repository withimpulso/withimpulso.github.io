import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";

const Blog = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <section className="bg-primary pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors mb-10"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("blog.back")}
              </Link>
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-5">
                {t("blog.category")}
              </p>
              <h1 className="font-serif text-4xl md:text-6xl text-primary-foreground leading-tight mb-6">
                {t("blog.title")}
              </h1>
              <p className="text-primary-foreground/65 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                {t("blog.description")}
              </p>
              <div className="flex flex-wrap items-center gap-5 text-sm text-primary-foreground/50">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-accent" />
                  September 12, 2026
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="w-4 h-4 text-accent" />
                  {t("blog.read")}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <article className="container max-w-3xl mx-auto py-16 pb-20 md:py-20 md:pb-28">
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground">
            <p className="lead">
              {language === "ca"
                ? "La majoria d'organitzacions saben qui són els seus empleats. Moltes menys poden respondre amb confiança una pregunta més important: qui encara té accés a què, i per què?"
                : "Most organizations know who their employees are. Far fewer can confidently answer a more important question: who still has access to what, and why?"}
            </p>

            <h2>{language === "ca" ? "L'accés creix en silenci" : "Access grows quietly"}</h2>
            <p>
              {language === "ca"
                ? "Un nou rol afegeix un grup. Un projecte afegeix una bústia compartida. Una adquisició incorpora un segon directori. Cap d'aquests canvis sembla perillós per si sol, però junts creen deriva d'identitats: permisos que sobreviuen al motiu pel qual es van concedir."
                : "A new role adds a group. A project adds a shared mailbox. An acquisition brings a second directory. None of these changes feels dangerous in isolation, but together they create identity drift: permissions that outlive the reason they were granted."}
            </p>
            <p>
              {language === "ca"
                ? "El resultat no és només un directori desordenat. És una superfície d'atac que creix i una resposta més lenta quan alguna cosa falla. Els equips de seguretat dediquen temps a reconstruir el context en lloc d'actuar-hi."
                : "The result is not just an untidy directory. It is a growing attack surface and a slower response when something goes wrong. Security teams spend time reconstructing context instead of acting on it."}
            </p>

            <blockquote>
              {language === "ca" ? "La política d'accés més sòlida és la que el teu equip pot explicar sis mesos després." : "The strongest access policy is the one your team can explain six months later."}
            </blockquote>

            <h2>{language === "ca" ? "Fes visible el cicle de vida" : "Make the lifecycle visible"}</h2>
            <p>
              {language === "ca"
                ? "Comença pels moments en què canvia la identitat: incorporacions, canvis de rol i sortides. Dona a cada moment un responsable, un senyal i un resultat mesurable. A Microsoft Entra ID, això pot significar combinar fluxos de treball del cicle de vida, revisions d'accés, gestió d'autoritzacions i gestió d'identitats privilegiades en un únic ritme operatiu."
                : "Start with the moments where identity changes: joiner, mover, and leaver. Give each moment an owner, a signal, and a measurable outcome. In Microsoft Entra ID, that can mean combining lifecycle workflows, access reviews, entitlement management, and privileged identity management into one operating rhythm."}
            </p>
            <p>
              {language === "ca"
                ? "L'objectiu no és eliminar totes les excepcions. És fer que siguin deliberades, temporals i fàcils de trobar. Aquest canvi converteix la governança de la identitat d'una urgència trimestral en una capacitat quotidiana."
                : "The goal is not to remove every exception. It is to make exceptions deliberate, temporary, and easy to find. That shift turns identity governance from a quarterly scramble into an everyday capability."}
            </p>

            <h2>{language === "ca" ? "Tres preguntes útils per fer aquesta setmana" : "Three useful questions to ask this week"}</h2>
            <ul>
              {language === "ca" ? <><li>Quins paquets d'accés no tenen un responsable de negoci clar?</li><li>On depenen els canvis de rol d'una transferència manual?</li><li>Pot un auditor entendre per què un compte privilegiat té accés avui?</li></> : <><li>Which access packages have no clear business owner?</li><li>Where do role changes depend on a manual handoff?</li><li>Can an auditor understand why a privileged account has access today?</li></>}
            </ul>

            <p>
              {language === "ca"
                ? "Les respostes clares indiquen que la identitat dona suport al negoci en lloc de frenar-lo silenciosament. Comença petit, documenta la decisió i avança des dels punts on coincideixen el risc i la fricció."
                : "Clear answers are a sign that identity is supporting the business rather than quietly slowing it down. Start small, document the decision, and build from the places where risk and friction meet."}
            </p>
          </div>

          <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <p className="text-sm font-semibold text-foreground">{t("blog.ctaTitle")}</p>
              <p className="text-sm text-muted-foreground mt-1">{t("blog.ctaDescription")}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-accent-foreground font-semibold rounded-md hover:bg-amber-light transition-colors"
            >
              {t("blog.cta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>

        <section className="py-20 md:py-28 bg-surface border-t border-border">
          <div className="container max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-5">
                <span className="text-accent font-semibold tracking-widest uppercase">
                  {language === "ca" ? "Modern Workplace" : "Modern Workplace"}
                </span>
                <span>September 5, 2026</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="w-4 h-4 text-accent" />
                  {language === "ca" ? "4 min de lectura" : "4 min read"}
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-5">
                {language === "ca"
                  ? "Com convertir una revisió del tenant en un full de ruta pràctic"
                  : language === "nl"
                    ? "Van tenant review naar een praktische roadmap"
                    : language === "es"
                      ? "Cómo convertir una revisión del tenant en una hoja de ruta práctica"
                      : "How to turn a tenant review into a practical roadmap"}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {language === "ca"
                  ? "Una bona revisió de Microsoft 365 no hauria d'acabar en una llista de troballes. Ha d'ajudar el teu equip a decidir què cal fer, en quin ordre i per què."
                  : language === "nl"
                    ? "Een goede review van je Microsoft 365 tenant hoort niet te eindigen als een lijst met bevindingen. Je team moet weten wat het eerst moet gebeuren, wat kan wachten en waarom."
                    : language === "es"
                      ? "Una buena revisión del tenant de Microsoft 365 no debería terminar en una lista de hallazgos. Tu equipo debe saber qué hacer primero, qué puede esperar y por qué."
                      : "A good Microsoft 365 tenant review should not end as a list of findings. Your team should know what to do first, what can wait, and why."}
              </p>

              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground">
                <h3>{language === "ca" ? "Comença pel risc" : language === "nl" ? "Begin bij het risico" : language === "es" ? "Empieza por el riesgo" : "Start with the risk"}</h3>
                <p>
                  {language === "ca"
                    ? "La primera pregunta no és quina configuració pots canviar, sinó quin risc vols reduir. Quan cada recomanació està relacionada amb l'impacte en el negoci, és més fàcil explicar-la i posar-la en pràctica."
                    : language === "nl"
                      ? "De eerste vraag is niet welke instelling je kunt wijzigen, maar welk risico je wilt verkleinen. Als je de aanbeveling koppelt aan de gevolgen voor het bedrijf, wordt de beslissing eenvoudiger."
                      : language === "es"
                        ? "La primera pregunta no es qué configuración puedes cambiar, sino qué riesgo quieres reducir. Cuando relacionas cada recomendación con el impacto en el negocio, la decisión resulta más fácil de explicar."
                        : "The first question is not which setting you can change. It is which risk you want to reduce. When a recommendation is tied to business impact, the decision is easier to explain."}
                </p>
                <h3>{language === "ca" ? "Converteix les troballes en decisions" : language === "nl" ? "Maak van bevindingen acties" : language === "es" ? "Convierte los hallazgos en acciones" : "Turn findings into action"}</h3>
                <p>
                  {language === "ca"
                    ? "Agrupa les troballes en accions immediates, millores planificades i decisions que necessiten més context. Això evita que les recomanacions urgents quedin amagades entre canvis de menor impacte."
                    : language === "nl"
                      ? "Verdeel de bevindingen in directe acties, geplande verbeteringen en beslissingen die meer context nodig hebben. Zo blijven urgente aanbevelingen zichtbaar."
                      : language === "es"
                        ? "Separa los hallazgos en acciones inmediatas, mejoras planificadas y decisiones que necesitan más contexto. Así, las recomendaciones urgentes siguen siendo visibles."
                        : "Put the findings into three groups: actions to take now, improvements to plan, and decisions that need more context. This keeps urgent work visible."}
                </p>
                <p>
                  {language === "ca"
                    ? "El millor full de ruta és prou concret per començar demà i prou flexible per adaptar-se al teu equip. Defineix un responsable, una data i una manera de saber quan l'acció està acabada."
                    : language === "nl"
                      ? "De beste roadmap is concreet genoeg om morgen te starten en flexibel genoeg voor je team. Bepaal een eigenaar, een datum en wanneer de actie klaar is."
                      : language === "es"
                        ? "La mejor hoja de ruta debe permitir empezar mañana y ser flexible para tu equipo. Define un responsable, una fecha y cómo saber cuándo termina la acción."
                        : "The best roadmap should be practical enough to start tomorrow and flexible enough for your team. Give each action an owner, a date, and a clear finish line."}
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent hover:text-amber-light font-semibold transition-colors"
                >
                  {language === "ca" ? "Parlem del teu entorn Microsoft 365" : language === "nl" ? "Praat met ons over je Microsoft 365-omgeving" : language === "es" ? "Hablemos de tu entorno de Microsoft 365" : "Talk to us about your Microsoft 365 environment"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;