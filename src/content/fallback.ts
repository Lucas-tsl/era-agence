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
    title: "ERA · Agence d'image de marque à Angers et La Rochelle",
    description:
      "ERA construit l'identité qui te ressemble : personal branding, rebranding, direction artistique, shootings et stratégie Instagram, à Angers et La Rochelle.",
  },
};

export const home: Home = {
  heroKicker: "Agence d'image de marque",
  heroTitle: "Every brand has a",
  heroHighlight: "new era",
  heroText:
    "Ton agence créative et humaine. On construit l'identité qui te ressemble, et on t'aide à l'appliquer partout.",
  // Photos tirées des comptes Instagram de Margot, à remplacer par les photos HD dans Sanity.
  heroImage: { url: "/images/margot-detouree.png", alt: "Margot en chemise blanche, bras levés", w: 433, h: 577 },
  methodTitle: "Trois temps, une nouvelle ère",
  steps: [
    { title: "On comprend ton besoin", text: "Grâce à un questionnaire personnalisé, on part de toi, de ton histoire et de tes envies." },
    { title: "On imagine ton image", text: "On crée une image de marque qui te ressemble : positionnement, univers, ton, direction artistique." },
    { title: "Tu prends ta place", text: "Tu affirmes ton identité et tu oses te montrer, avec un plan d'action clair." },
  ],
  aboutTitle: "Une enfant rêveuse devenue fondatrice",
  aboutText:
    "Je m'appelle Margot. Formée à la communication, au marketing et au management de la mode et du luxe chez Mod'Art International, j'ai vécu mille vies : défilés de la Fashion Week Haute Couture, Festival de Cannes, Milan, création d'événements. ERA réunit tout ce que j'aime : la créativité, la mode, l'organisation et la communication.",
  aboutImage: { url: "/images/margot-bras-croises.jpg", alt: "Portrait de Margot, fondatrice d'ERA, bras croisés près d'une fenêtre", w: 640, h: 800 },
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
    seoTitle: "ERA Identity : personal branding sur-mesure",
    seoDescription:
      "ERA Identity : construis ton personal branding avec une méthode sur-mesure. Positionnement, direction artistique, stratégie Instagram et plan d'action.",
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
    seoTitle: "ERA Brand : rebranding de marques et commerces",
    seoDescription:
      "ERA Brand : le rebranding haut de gamme pour ta marque, ta boutique ou ton restaurant. Audit, storytelling, univers visuel et stratégie réseaux sociaux.",
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
    seoTitle: "ERA Studio : shooting photo et projets créatifs",
    seoDescription:
      "ERA Studio : un shooting photo ou un lancement de produit ? Concept créatif, moodboard, direction artistique, stylisme et organisation, sur devis.",
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
    seoTitle: "ERA Brain : accompagnement mensuel de ta marque",
    seoDescription:
      "ERA Brain : chaque mois, une visio stratégique, un calendrier éditorial et des idées de contenus pour appliquer ton image de marque et rester inoubliable.",
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
  accessibilite: {
    title: "Déclaration d'accessibilité",
    slug: "accessibilite",
    fallbackText: [
      "ERA s'engage à rendre son site internet accessible à toutes et à tous, quels que soient le matériel, le logiciel, la langue ou les capacités de chacun.",
      "Cette déclaration d'accessibilité s'applique au site era-agence.com [adresse définitive à confirmer].",
      "## État de conformité",
      "Le site n'a pas encore fait l'objet d'un audit de conformité. Il est donc, à ce jour, non conforme au sens du référentiel général d'amélioration de l'accessibilité (RGAA), version 4.1.2. Un audit est prévu après la mise en ligne.",
      "## Normes de référence",
      "RGAA 4.1.2 : référentiel français d'accessibilité numérique, fondé sur les WCAG 2.1.",
      "WCAG 2.2, niveau AA : règles pour l'accessibilité des contenus web du W3C, publiées comme norme internationale ISO/IEC 40500:2025.",
      "EN 301 549 : norme européenne d'exigences d'accessibilité pour les produits et services numériques.",
      "## Ce qui est déjà mis en place",
      "Structure des titres hiérarchisée (un seul titre principal par page), lien d'évitement « Aller au contenu », navigation possible au clavier avec un indicateur de focus visible, menu mobile annoncé aux lecteurs d'écran, textes alternatifs obligatoires sur les images, contrastes de couleurs vérifiés, formulaire avec étiquettes et messages d'erreur explicites, respect du réglage « réduire les animations » du système, langue de la page déclarée en français.",
      "## Technologies utilisées",
      "HTML5, CSS, JavaScript (React et Next.js).",
      "## Établissement de cette déclaration",
      "Cette déclaration a été établie le 9 novembre 2026. Elle sera mise à jour après l'audit de conformité.",
      "## Retour d'information et contact",
      "Si tu n'arrives pas à accéder à un contenu ou à un service, écris à contact@era-agence.com : nous te proposerons une alternative accessible ou le contenu sous une autre forme.",
      "## Voies de recours",
      "Si tu as signalé un défaut d'accessibilité sans obtenir de réponse satisfaisante, tu peux contacter le Défenseur des droits : par le formulaire en ligne sur defenseurdesdroits.fr, par un délégué près de chez toi, ou par courrier gratuit sans affranchissement à Défenseur des droits, Libre réponse 71120, 75342 Paris CEDEX 07.",
    ],
  },
};
