import { motion } from "framer-motion";
import { aboutData } from "../../data/about";
import { useCountUp } from "../../hooks/useCountUp";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center py-20 border-t border-border"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-sora text-3xl font-bold mb-12"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          À propos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Texte */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 1 }}
          >
            <p className="font-inter text-foreground/80 text-lg leading-relaxed">
              {aboutData.text}
            </p>
          </motion.div>

          {/* Chiffres clés */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {aboutData.stats.map((stat) => {
              const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ""));
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const { count } = useCountUp(numericValue || 0, 1200, false);

              return (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="bg-card border border-border rounded-lg p-6 text-center"
                >
                  <div className="font-sora text-3xl font-bold text-primary">
                    {isInView ? count : 0}
                    {stat.value.includes("+") && "+"}
                  </div>
                  <div className="font-mono text-xs text-foreground/60 mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
