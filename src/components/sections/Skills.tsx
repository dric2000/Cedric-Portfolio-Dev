import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const Skills = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="skills"
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
          Compétences
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={fadeInUp}>
              <h3 className="font-sora text-xl font-semibold text-secondary mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    className="font-mono text-sm px-3 py-1.5 bg-card border border-border rounded-md text-foreground/80 cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{
                      duration: 0.25,
                      delay: i * 0.04 + 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      borderColor: "#14b8a6",
                      scale: 1.05,
                      transition: { duration: 0.15 },
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
