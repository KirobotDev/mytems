import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const projects = [
  {
    name: 'Ai-Algorithme',
    description: "Étude sur la prédictibilité de l'algorithme OpenAI. Analyse de patterns avec précision de 96.04%.",
    url: 'https://github.com/kirobotdev/Ai-Algorithme',
    language: 'Python',
    languageColor: '#3572A5',
    stars: 0,
  },
  {
    name: 'random-password',
    description: 'Générateur de mots de passe sécurisés avec paramètres hautement personnalisables.',
    url: 'https://github.com/kirobotdev/random-password',
    language: 'Python',
    languageColor: '#3572A5',
    stars: 0,
  },
  {
    name: 'fsk-lang',
    description: 'Langage de programmation personnalisé et interpréteur développé from scratch.',
    url: 'https://github.com/kirobotdev/fsk-lang',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 1,
  },
];

function RepoCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="repo-card glass-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      aria-label={`Voir le projet ${project.name} sur GitHub`}
    >
      <div className="repo-card__header">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="repo-card__icon" aria-hidden="true">
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        </svg>
        <h3 className="repo-card__name">{project.name}</h3>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="repo-card__arrow" aria-hidden="true">
          <path d="M7 17l10-10M7 7h10v10"/>
        </svg>
      </div>

      <p className="repo-card__description">{project.description}</p>

      <div className="repo-card__meta">
        <div className="repo-card__language">
          <span className="repo-card__language-dot" style={{ background: project.languageColor }} aria-hidden="true" />
          <span>{project.language}</span>
        </div>
        {project.stars > 0 && (
          <div className="repo-card__stars" aria-label={`${project.stars} étoiles`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>28</span>
          </div>
        )}
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="projects section" aria-labelledby="projects-title">
      <div className="bg-glow projects__glow" aria-hidden="true" />

      <div className="container" ref={ref}>
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="tag" aria-hidden="true">{t('projects.tag')}</span>
          <h2 className="section-title" id="projects-title">{t('projects.title')}</h2>
          <p className="section-subtitle">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <RepoCard key={project.name} project={project} index={i} />
          ))}
        </div>

        <motion.div
          className="projects__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://github.com/kirobotdev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-minimal"
            aria-label="Voir tous les projets sur GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {t('projects.btn')}
            <span className="sr-only">(ouvre dans un nouvel onglet)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
