import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 border-t border-navy-light/30">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-serif text-xl text-primary-foreground tracking-tight">
            Impulso
          </a>
          <div className="flex items-center gap-8">
            <a href="/#services" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              Services
            </a>
            <a href="/#why" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              Why Impulso
            </a>
            <a href="/trainings" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              Trainings
            </a>
            <a href="/#contact" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <p className="text-xs text-primary-foreground/30">
              © {new Date().getFullYear()} Impulso. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
