import { ChevronUp, Mail } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-background/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Cédric. Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/dric2000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <SiGithub size={18} />
            </a>
            <a
              href="www.linkedin.com/in/cédric-bleossi-a7a47337a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <CiLinkedin size={18} />
            </a>
            <a
              href="mailto:cedric@email.com"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="text-foreground/60 hover:text-primary transition-colors"
            aria-label="Retour en haut"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
