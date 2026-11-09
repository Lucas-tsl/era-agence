import type { Faq, Home, Offer, Page, Project, Settings, Testimonial } from "./types";

/**
 * Contenu de secours, repris des textes d'ERA (Instagram, novembre 2026).
 * Utilisé tant que Sanity n'est pas configuré, ou si un champ est vide.
 * Les éléments entre crochets sont à valider avec Margot.
 */

export const settings: Settings = {
  name: "ERA Agency",
  tagline: "Every brand has a new era",
  description:
    "Agence d'image de marque créative et humaine. Personal branding, rebranding, shootings et accompagnement mensuel.",
  email: "contact@era-agence.com",
  locations: "Angers · La Rochelle · partout en France",
  theme: "velours",
  social: {
    instagram: "https://www.instagram.com/era.agence/",
    linkedin: "https://www.linkedin.com/in/margot-charrier-bellanger-614761178/",
    pinterest: "https://fr.pinterest.com/margotcr/",
  },
  seo: {
    title: "ERA Agency · Agence d'image de marque à Angers et La Rochelle",
    description:
      "ERA construit l'identité qui te ressemble : personal branding, rebranding, direction artistique, shootings et stratégie Instagram.",
  },
};

export const home: Home = {
  heroKicker: "Agence d'image de marque",
  heroTitle: "Every brand has a",
  heroHighlight: "new era",
  heroText:
    "Ton agence créative et humaine. On construit l'identité qui te ressemble, et on t'aide à l'appliquer partout.",
  methodTitle: "Trois temps, une nouvelle ère",
  steps: [
    { title: "On comprend ton besoin", text: "Grâce à un questionnaire personnalisé, on part de toi, de ton histoire et de tes envies." },
    { title: "On imagine ton image", text: "On crée une image de marque qui te ressemble : positionnement, univers, ton, direction artistique." },
    { title: "Tu prends ta place", text: "Tu affirmes ton identité et tu oses te montrer, avec un plan d'action clair." },
  ],
  aboutTitle: "Une enfant rêveuse devenue fondatrice",
  aboutText:
    "Je m'appelle Margot. Formée à la communication, au marketing et au management de la mode et du luxe chez Mod'Art International, j'ai vécu mille vies : défilés de la Fashion Week Haute Couture, Festival de Cannes, Milan, création d'événements. ERA réunit tout ce que j'aime : la créativité, la mode, l'organisation et la communication.",
  ctaTitle: "Prête pour ta new era ?",
  ctaText: "Pour toute question ou un rendez-vous découverte, écris-moi.",
};

export const offers: Offer[] = [
  {
    title: "ERA Identity",
    slug: "era-identity",
    kicker: "Tu es entrepreneur, créatif, ambitieux ?",
    audience: "Entrepreneurs, indépendants et créatifs",
    summary: "Ici, on construit ton propre personal branding grâce à une méthode personnalisée.",
    includes: [
      "Positionnement",
      "Définition de la cible",
      "Proposition de valeur",
      "Vision de marque",
      "Direction artistique",
      "Moodboard",
      "Palette de l'univers",
      "Ton de communication",
      "Stratégie Instagram",
      "Recommandations de contenus",
      "Plan d'action",
    ],
    format: "Prestation unique",
  },
  {
    title: "ERA Brand",
    slug: "era-brand",
    kicker: "Tu as déjà une marque, une boutique, un restaurant ?",
    audience: "Marques, commerces et entreprises",
    summary: "Ici, on réécrit ton histoire avec un rebranding et un suivi haut de gamme.",
    includes: [
      "Audit de marque",
      "Analyse de marché",
      "Positionnement",
      "Expérience de marque",
      "Direction artistique",
      "Storytelling",
      "Univers visuel",
      "Ton de communication",
      "Stratégie réseaux sociaux",
      "Recommandations de contenus",
      "Plan de développement",
    ],
    format: "Prestation unique",
  },
  {
    title: "ERA Studio",
    slug: "era-studio",
    kicker: "Un shooting, un lancement de produit ?",
    audience: "Marques et porteurs de projets créatifs",
    summary: "ERA t'accompagne sur tous tes projets créatifs, de l'idée à l'organisation.",
    includes: [
      "Échange d'idées",
      "Concept créatif",
      "Moodboard",
      "Direction artistique",
      "Stylisme",
      "Organisation",
      "Recherche de prestataires",
    ],
    format: "Sur devis",
  },
  {
    title: "ERA Brain",
    slug: "era-brain",
    kicker: "Ton image existe, mais comment l'appliquer ?",
    audience: "Marques déjà construites",
    summary: "ERA t'accompagne tous les mois dans l'application de ton image de marque, pour que tu sois inoubliable.",
    includes: [
      "Une visio stratégique",
      "Calendrier éditorial",
      "Idées de contenus",
      "Recommandations Instagram",
      "Validation d'idées",
      "Audit Instagram",
      "Idées de communication hors média",
    ],
    format: "Accompagnement mensuel",
  },
];

export const projects: Project[] = [];

export const testimonials: Testimonial[] = [];

export const faq: Faq[] = [
  {
    question: "Comment se passe le premier rendez-vous ?",
    answer: "Un appel découverte gratuit pour comprendre ton projet, puis un questionnaire personnalisé avant de commencer.",
  },
  {
    question: "Tu travailles uniquement à Angers et La Rochelle ?",
    answer: "Non, la plupart des accompagnements se font à distance, partout en France. Les shootings se font sur place.",
  },
  {
    question: "Quelle offre choisir ?",
    answer: "Si tu te lances : ERA Identity. Si ta marque existe déjà : ERA Brand. Pour un projet ponctuel : ERA Studio. Pour un suivi régulier : ERA Brain.",
  },
];

export const pages: Record<string, Page> = {
  "mentions-legales": {
    title: "Mentions légales",
    slug: "mentions-legales",
    fallbackText: [
      "Éditeur du site : [raison sociale], [forme juridique], [adresse du siège]. SIRET : [numéro].",
      "Responsable de la publication : Margot Charrier-Bellanger.",
      "Hébergement : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.",
      "Contact : contact@era-agence.com.",
    ],
  },
  confidentialite: {
    title: "Politique de confidentialité",
    slug: "confidentialite",
    fallbackText: [
      "Les informations envoyées via le formulaire de contact servent uniquement à répondre à ta demande. Elles ne sont ni revendues ni utilisées à d'autres fins.",
      "Tu peux demander l'accès, la rectification ou la suppression de tes données en écrivant à contact@era-agence.com.",
      "[Texte complet à valider avant la mise en ligne.]",
    ],
  },
};
