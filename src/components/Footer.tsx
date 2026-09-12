import { Linkedin } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n";
import logo from "@/assets/logo-impulso.svg";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary py-12 border-t border-navy-light/30">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Impulso" className="h-8 md:h-10" />
          </a>
          <div className="flex items-center gap-8">
            <a href="/#services" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              {t("nav.services")}
            </a>
            <a href="/#why" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              {t("nav.why")}
            </a>
            <a href="/trainings" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              {t("nav.trainings")}
            </a>
            <a href="/blog" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              {t("nav.blog")}
            </a>
            <a href="/#contact" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              {t("nav.contact")}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href="https://www.linkedin.com/company/impulsonl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <p className="text-xs text-primary-foreground/30">
              © {new Date().getFullYear()} Impulso. {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
