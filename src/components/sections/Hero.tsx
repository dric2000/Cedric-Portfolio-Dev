import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";
import {
  bounceVariants,
  fadeInUp,
  floatVariants,
} from "../../utils/animations";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden py-12 sm:py-16 md:py-20"
    >
      {/* Blob animé - désactivé sur mobile pour les performances */}
      <motion.div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-75 sm:w-100 md:w-150 h-75 sm:h-100 md:h-150 bg-primary/5 rounded-full blur-3xl pointer-events-none hidden sm:block"
        variants={{
          animate: {
            x: [0, 20, -10, 0],
            y: [0, -15, 10, 0],
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: [0.25, 0.1, 0.25, 1],
            },
          },
        }}
        initial="initial"
        animate="animate"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* ===== COLONNE GAUCHE - TEXTE ===== */}
          <div className="text-center md:text-left order-2 md:order-1">
            {/* Eyebrow */}
            <motion.span
              className="font-mono text-xs sm:text-sm text-secondary uppercase tracking-wider inline-block"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              Développeur Fullstack — Front-End
            </motion.span>

            {/* Titre */}
            <motion.h1
              className="font-sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mt-3 leading-tight"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Salut, je suis <span className="text-primary">Cédric.</span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              className="font-inter text-base sm:text-lg text-foreground/70 mt-3 max-w-lg mx-auto md:mx-0"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              React / TypeScript, interfaces soignées, basé à Cotonou. Je
              transforme les idées en applications web performantes.
            </motion.p>

            {/* Boutons */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-3 mt-6"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="#projects"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-black rounded-lg font-semibold text-sm sm:text-base shadow-lg shadow-primary/30"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(249, 115, 22, 0.4)",
                }}
                transition={{ duration: 0.2 }}
              >
                Voir mes projets
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 sm:px-8 py-2.5 sm:py-3 border border-primary text-primary rounded-lg font-semibold text-sm sm:text-base"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(249, 115, 22, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                Me contacter
              </motion.a>
            </motion.div>

            {/* Liens sociaux horizontaux (mobile) */}
            <motion.div
              className="flex md:hidden justify-center gap-6 mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <a
                href="https://github.com/dric2000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <SiGithub size={20} />
              </a>
              <a
                href="www.linkedin.com/in/cédric-bleossi-a7a47337a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <CiLinkedin size={20} />
              </a>
            </motion.div>
          </div>

          {/* ===== COLONNE DROITE - AVATAR ===== */}
          <motion.div
            className="relative flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* Avatar */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-primary/30">
              <span className="font-sora text-3xl sm:text-4xl md:text-5xl text-foreground">
                👨‍💻
              </span>
            </div>

            {/* ===== CARTES FLOTTANTES ===== */}

            {/* Carte 1 - React Developer (en haut à droite) */}
            <motion.div
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 bg-card border border-border rounded-lg p-1.5 sm:p-2 md:p-3 shadow-lg"
              variants={floatVariants(0)}
              initial="initial"
              animate="animate"
            >
              <span className="font-mono text-[9px] sm:text-[10px] md:text-xs text-secondary whitespace-nowrap">
                React Dev
              </span>
            </motion.div>

            {/* Carte 2 - 3+ projets (en bas à gauche) */}
            <motion.div
              className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 bg-card border border-border rounded-lg p-1.5 sm:p-2 md:p-3 shadow-lg"
              variants={floatVariants(1.5)}
              initial="initial"
              animate="animate"
            >
              <span className="font-mono text-[9px] sm:text-[10px] md:text-xs text-secondary whitespace-nowrap">
                3+ projets
              </span>
            </motion.div>

            {/* Carte 3 - UI/UX soigné (à droite, caché sur très petit) */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-4 md:-right-6 lg:-right-8 bg-card border border-border rounded-lg p-1.5 sm:p-2 md:p-3 shadow-lg hidden xs:block"
              variants={floatVariants(3)}
              initial="initial"
              animate="animate"
            >
              <span className="font-mono text-[9px] sm:text-[10px] md:text-xs text-secondary whitespace-nowrap">
                UI/UX soigné
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* ===== LIENS SOCIAUX VERTICAUX (desktop) ===== */}
        <motion.div
          className="hidden md:flex absolute left-4 xl:left-6 top-1/2 -translate-y-1/2 flex-col gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.a
            href="https://github.com/cedric"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            aria-label="GitHub"
          >
            <SiGithub size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/cedric"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            aria-label="LinkedIn"
          >
            <CiLinkedin size={20} />
          </motion.a>
        </motion.div>

        {/* ===== INDICATEUR DE SCROLL ===== */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
          variants={bounceVariants}
          initial="initial"
          animate="animate"
        >
          <ChevronDown size={20} className="text-foreground/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
