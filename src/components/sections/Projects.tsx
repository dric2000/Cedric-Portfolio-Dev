import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "../../data/projects";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const Projects = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="projects"
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
          Projets
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={fadeInUp}
              className={`group bg-card border border-border rounded-xl overflow-hidden ${
                project.featured ? "md:col-span-2" : ""
              }`}
              whileHover={{
                y: -6,
                borderColor: "#f97316",
                boxShadow: "0 20px 60px rgba(249, 115, 22, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Image avec zoom */}
              <motion.div
                className="aspect-video bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-foreground/40 font-mono text-sm">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span>📸 {project.title}</span>
                  )}
                </div>
              </motion.div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="font-sora text-xl font-bold">{project.title}</h3>
                <p className="font-inter text-foreground/70 text-sm mt-1">
                  {project.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-1 bg-border rounded text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="font-mono text-xs px-2 py-1 bg-border rounded text-foreground/40">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Lien */}
                <motion.a
                  href={`/projets/${project.slug}`}
                  className="inline-flex items-center gap-2 mt-4 font-mono text-sm text-secondary hover:text-secondary-light transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Voir l'étude de cas
                  <ArrowRight size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
