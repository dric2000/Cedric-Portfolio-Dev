import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const navLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/dric2000", icon: SiGithub, label: "GitHub" },
  {
    href: "www.linkedin.com/in/cédric-bleossi-a7a47337a",
    icon: CiLinkedin,
    label: "LinkedIn",
  },
  { href: "mailto:cedric@email.com", icon: Mail, label: "Email" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeId = useScrollSpy(
    navLinks.map((link) => link.href.replace("#", "")),
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-background/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-sora text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Cédric<span className="text-primary">.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative font-inter text-sm font-medium transition-colors hover:text-primary"
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Contact button desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-4 py-2 bg-primary text-black rounded-lg font-medium text-sm hover:bg-primary-light transition-colors"
            >
              Me contacter
            </a>
          </div>

          {/* Burger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU - SANS VARIANTS */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center px-8 pt-16"
          >
            {/* Liens avec stagger manuel */}
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="font-sora text-3xl font-bold text-foreground hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
              className="flex gap-6 mt-12"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </motion.div>

            {/* Bouton Me contacter */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
              href="#contact"
              onClick={handleLinkClick}
              className="mt-8 px-8 py-3 bg-primary text-black rounded-lg font-semibold hover:bg-primary-light transition-colors"
            >
              Me contacter
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky contact button mobile */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <a
          href="#contact"
          className="px-6 py-3 bg-primary text-black rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
        >
          Me contacter
        </a>
      </div>
    </>
  );
};

export default Navbar;
