import { AnimatePresence, motion } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";

import { Copy, Mail } from "lucide-react";
import { useState } from "react";
import { SiGithub } from "react-icons/si";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { fadeInUp } from "../../utils/animations";

const Contact = () => {
  const { ref, isInView } = useScrollAnimation();
  const [showToast, setShowToast] = useState(false);
  const email = "ccedricbbleossi@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center py-20 border-t border-border relative"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="font-sora text-3xl md:text-4xl font-bold"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Discutons de votre projet
        </motion.h2>

        <motion.p
          className="font-inter text-foreground/70 mt-4 max-w-md mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
        >
          Vous avez une idée, un projet ou une opportunité ? N'hésitez pas à me
          contacter.
        </motion.p>

        {/* Email avec hover */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-2"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 bg-card border border-border rounded-lg px-3 py-4">
            <Mail size={20} className="text-secondary" />
            <motion.span
              className="font-mono text-md text-foreground"
              whileHover={{
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationColor: "#f97316",
              }}
            >
              {email}
            </motion.span>
            <motion.button
              onClick={handleCopy}
              className="text-foreground/40 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Copier l'email"
            >
              <Copy size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* Réseaux sociaux */}
        <motion.div
          className="flex justify-center gap-6 mt-8"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="https://github.com/dric2000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
          >
            <SiGithub size={24} />
          </motion.a>
          <motion.a
            href="www.linkedin.com/in/cédric-bleossi-a7a47337a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
          >
            <CiLinkedin size={24} />
          </motion.a>
        </motion.div>
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-card border border-primary/30 rounded-lg px-6 py-3 shadow-xl shadow-primary/10"
          >
            <span className="font-inter text-sm text-foreground">
              ✉️ Email copié !
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
