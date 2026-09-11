import { useState, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-impulso.svg";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Why Impulso", href: "/#why" },
  { label: "Trainings", href: "/trainings" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setOpen(false);

      if (href.startsWith("/#")) {
        const id = href.slice(2); // e.g. "services"
        if (location.pathname === "/") {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
          // Navigate home first, then let it scroll to the section once mounted.
          navigate("/", { state: { scrollTo: id } });
        }
      } else if (href.startsWith("#")) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(href);
      }
    },
    [navigate, location.pathname]
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-navy-light/30">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Impulso" className="h-8 md:h-10" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, "/contact")}
            className="px-5 py-2.5 text-sm font-semibold bg-accent text-accent-foreground rounded-md hover:bg-amber-light transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-navy-light/30 pb-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-6 py-3 text-primary-foreground/70 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              className="inline-block px-5 py-2.5 text-sm font-semibold bg-accent text-accent-foreground rounded-md"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
