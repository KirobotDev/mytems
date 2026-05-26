import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      "nav": {
        "home": "Accueil",
        "about": "À propos",
        "projects": "Projets",
        "code": "Code",
        "blog": "Aller sur le blog"
      },
      "hero": {
        "tag": "Portfolio Étudiant & Chercheur IA",
        "title1": "Bienvenue sur ",
        "subtitle": "Je déchiffre les algorithmes d'IA et je construis des outils pour l'avenir. Étudiant à Chulalongkorn University.",
        "btn": "Voir mes projets"
      },
      "about": {
        "tag": "À propos",
        "title": "Qui suis-je ?",
        "subtitle": "Je suis Yanis, étudiant à Chulalongkorn University à Bangkok. Passionné par l'IA et les algorithmes, j'étudie comment fonctionne vraiment ChatGPT.",
        "research": "Ma Recherche",
        "researchText1": "L'algorithme de ChatGPT peut paraître aléatoire, mais en réalité ce n'est pas le cas. Demandez-lui 'donne-moi un numéro entre 0 et 100' — il donnera 73. Dites 'Encore' — il répondra 42. Puis 'Encore' — 88 dans 96,04% des cas.",
        "researchText2": "J'ai envoyé plus de 460,000 prompts pour prouver cette théorie et comprendre les patterns cachés dans les réponses de l'IA.",
        "skills": "Compétences"
      },
      "projects": {
        "tag": "Projets",
        "title": "Mes Projets",
        "subtitle": "Mes dépôts GitHub épinglés. Cliquez sur un projet pour voir le code source.",
        "btn": "Voir tout sur GitHub"
      }
    }
  },
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About",
        "projects": "Projects",
        "code": "Code",
        "blog": "Go to blog"
      },
      "hero": {
        "tag": "Student & AI Researcher Portfolio",
        "title1": "Welcome to ",
        "subtitle": "I decode AI algorithms and build tools for the future. Student at Chulalongkorn University.",
        "btn": "See my projects"
      },
      "about": {
        "tag": "About",
        "title": "Who am I?",
        "subtitle": "I am Yanis, a student at Chulalongkorn University in Bangkok. Passionate about AI and algorithms, I study how ChatGPT really works.",
        "research": "My Research",
        "researchText1": "ChatGPT's algorithm may seem random, but in reality, it is not. Ask it 'give me a number between 0 and 100' — it will give 73. Say 'Again' — it will answer 42. Then 'Again' — 88 in 96.04% of cases.",
        "researchText2": "I sent over 460,000 prompts to prove this theory and understand the hidden patterns in AI responses.",
        "skills": "Skills"
      },
      "projects": {
        "tag": "Projects",
        "title": "My Projects",
        "subtitle": "My pinned GitHub repositories. Click on a project to see the source code.",
        "btn": "See all on GitHub"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
