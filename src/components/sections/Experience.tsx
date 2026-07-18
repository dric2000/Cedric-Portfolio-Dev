import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../../data/experience";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const Experience = () => {
  const { ref, isInView } = useScrollAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen py-20 border-t border-border"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-sora text-3xl font-bold mb-12"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Parcours
        </motion.h2>

        <div ref={containerRef} className="relative pl-8">
          {/* Ligne de timeline animée */}
          <div className="absolute left-1.75 top-0 bottom-0 w-0.5 bg-border overflow-hidden">
            <motion.div
              className="w-full bg-primary origin-top"
              style={{ scaleY: lineHeight }}
            />
          </div>

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="mb-12 last:mb-0 relative"
              >
                {/* Point de la timeline */}
                <motion.div
                  className="absolute -left-2.25 top-0.5 w-4 h-4 rounded-full border-2 border-background"
                  style={{
                    backgroundColor: isInView ? "#f97316" : "#2a2d35",
                    transition: "background-color 0.6s ease",
                  }}
                />

                <div className="ml-4">
                  <span className="font-mono text-sm text-secondary">
                    {exp.date}
                  </span>
                  <h3 className="font-sora text-xl font-bold mt-1">
                    {exp.title}
                  </h3>
                  {exp.company && (
                    <p className="font-inter text-foreground/60 text-sm">
                      {exp.company}
                    </p>
                  )}
                  <p className="font-inter text-foreground/70 mt-2">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
