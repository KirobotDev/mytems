import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './About.css';

const stats = [
  {
    value: '460,587',
    label: 'Prompts Envoyés',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    value: '4',
    label: 'Mois de Recherche',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    value: '96.04%',
    label: 'Taux de Précision',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    value: '15+',
    label: 'Langues Traduites',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const skills = [
  { name: 'Python', level: 90, color: '#000000' },
  { name: 'Machine Learning', level: 75, color: '#374151' },
  { name: 'Data Analysis', level: 85, color: '#6b7280' },
  { name: 'API Development', level: 80, color: '#111827' },
  { name: 'Algorithm Design', level: 88, color: '#4b5563' },
];

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="about__stat glass-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      role="group"
      aria-label={`${stat.value} ${stat.label}`}
    >
      <span className="about__stat-icon">{stat.icon}</span>
      <span className="about__stat-value">{stat.value}</span>
      <span className="about__stat-label">{stat.label}</span>
    </motion.div>
  );
}

function SkillBar({ skill, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="about__skill"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      role="group"
      aria-label={`${skill.name} : ${skill.level}%`}
    >
      <div className="about__skill-header">
        <span className="about__skill-name">{skill.name}</span>
        <span className="about__skill-percent" aria-hidden="true">{skill.level}%</span>
      </div>
      <div className="about__skill-track" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} ${skill.level}%`}>
        <motion.div
          className="about__skill-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
          style={{ background: skill.color }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="bg-glow about__glow" aria-hidden="true" />

      <div className="container" ref={ref}>
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="tag" aria-hidden="true">{t('about.tag')}</span>
          <h2 className="section-title" id="about-title">{t('about.title')}</h2>
          <p className="section-subtitle">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="about__stats" role="list" aria-label="Statistiques clés">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        <div className="about__grid">
          <motion.div
            className="about__text glass-card"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="about__text-title">{t('about.research')}</h3>
            <p>
              {t('about.researchText1')}
            </p>
            <p>
              {t('about.researchText2')}
            </p>
          </motion.div>

          <motion.div
            className="about__skills glass-card"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="about__text-title">{t('about.skills')}</h3>
            <div className="about__skills-list">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
