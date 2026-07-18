import {
  AlertCircle,
  ArrowLeft,
  Briefcase,
  Calendar,
  CheckCircle,
  ExternalLink,
  Lightbulb,
  Mail,
  User,
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  // Si projet non trouvé, rediriger vers 404
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Bouton retour */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 font-mono text-sm text-secondary hover:text-secondary-light transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Retour aux projets
        </Link>

        {/* ===== HEADER ===== */}
        <div className="border-b border-border pb-8 mb-12">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold">
                {project.title}
              </h1>
              <p className="font-inter text-xl text-foreground/70 mt-2">
                {project.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg font-medium hover:bg-primary-light transition-colors"
                >
                  <ExternalLink size={16} />
                  Démo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <Mail size={16} />
                  Code
                </a>
              )}
            </div>
          </div>

          {/* Métadonnées */}
          <div className="flex flex-wrap gap-6 mt-6 font-mono text-sm">
            {project.client && (
              <div className="flex items-center gap-2 text-foreground/60">
                <User size={14} />
                <span>{project.client}</span>
              </div>
            )}
            {project.period && (
              <div className="flex items-center gap-2 text-foreground/60">
                <Calendar size={14} />
                <span>{project.period}</span>
              </div>
            )}
            {project.role && (
              <div className="flex items-center gap-2 text-foreground/60">
                <Briefcase size={14} />
                <span>{project.role}</span>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1 bg-card border border-border rounded-full text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ===== IMAGE PRINCIPALE ===== */}
        <div className="rounded-xl overflow-hidden border border-border mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover bg-border"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        {/* ===== CONTENU ===== */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description / Contexte */}
            <section>
              <h2 className="font-sora text-2xl font-bold mb-4">Contexte</h2>
              <p className="font-inter text-foreground/80 leading-relaxed">
                {project.problem || project.description}
              </p>
            </section>

            {/* Solution */}
            {project.solution && (
              <section>
                <h2 className="font-sora text-2xl font-bold mb-4">Solution</h2>
                <p className="font-inter text-foreground/80 leading-relaxed">
                  {project.solution}
                </p>
              </section>
            )}

            {/* Décisions techniques */}
            {project.decisions && (
              <section>
                <h2 className="font-sora text-2xl font-bold mb-4">
                  Décisions techniques
                </h2>
                <ul className="space-y-3">
                  {project.decisions.map((decision, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-inter text-foreground/80"
                    >
                      <Lightbulb
                        size={18}
                        className="text-secondary shrink-0 mt-0.5"
                      />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Défis */}
            {project.challenges && (
              <section>
                <h2 className="font-sora text-2xl font-bold mb-4">
                  Défis rencontrés
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-inter text-foreground/80"
                    >
                      <AlertCircle
                        size={18}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Résultats */}
            {project.results && (
              <section>
                <h2 className="font-sora text-2xl font-bold mb-4">Résultats</h2>
                <ul className="space-y-3">
                  {project.results.map((result, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-inter text-foreground/80"
                    >
                      <CheckCircle
                        size={18}
                        className="text-secondary shrink-0 mt-0.5"
                      />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar - résumé */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <h3 className="font-sora text-lg font-bold mb-4">
                À propos du projet
              </h3>
              <dl className="space-y-4 font-mono text-sm">
                <div>
                  <dt className="text-foreground/40">Client</dt>
                  <dd className="font-semibold">
                    {project.client || "Non spécifié"}
                  </dd>
                </div>
                <div>
                  <dt className="text-foreground/40">Période</dt>
                  <dd className="font-semibold">
                    {project.period || "Non spécifiée"}
                  </dd>
                </div>
                <div>
                  <dt className="text-foreground/40">Rôle</dt>
                  <dd className="font-semibold">
                    {project.role || "Non spécifié"}
                  </dd>
                </div>
                <div>
                  <dt className="text-foreground/40">Stack</dt>
                  <dd className="font-semibold flex flex-wrap gap-1 mt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-0.5 bg-border rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
