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

        <section className="py-14 md:py-20 bg-surface">
          <div className="container max-w-5xl mx-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              src="/hero-bg.jpg"
              alt="A consultant reviewing a cloud security architecture"
              className="w-full aspect-[2/1] object-cover rounded-lg"
            />
          </div>
        </section>

        <article className="container max-w-3xl mx-auto py-4 pb-20 md:pb-28">
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
      </main>

      <Footer />
    </div>
  );
};

export default Blog;