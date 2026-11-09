import type { PortableTextBlock } from "next-sanity";

export type ThemeName = "velours" | "cherry" | "carnet";

export type SiteImage = { url: string; alt?: string; w?: number; h?: number };

export type Settings = {
  name: string;
  tagline: string;
  description: string;
  email: string;
  locations: string;
  theme: ThemeName;
  bookingUrl?: string;
  social: { instagram?: string; linkedin?: string; pinterest?: string };
  seo?: { title?: string; description?: string };
};

export type Step = { title: string; text: string };

export type Home = {
  heroKicker: string;
  heroTitle: string;
  heroHighlight: string;
  heroText: string;
  heroImage?: SiteImage;
  methodTitle: string;
  steps: Step[];
  aboutTitle: string;
  aboutText: string;
  aboutImage?: SiteImage;
  ctaTitle: string;
  ctaText: string;
};

export type Offer = {
  title: string;
  slug: string;
  kicker: string;
  audience: string;
  summary: string;
  includes: string[];
  format: string;
  price?: string;
  image?: SiteImage;
  seoTitle?: string;
  seoDescription?: string;
};

export type Project = {
  title: string;
  slug: string;
  client?: string;
  category?: string;
  offerSlug?: string;
  cover?: SiteImage;
  gallery?: SiteImage[];
  context?: string;
  mission?: string;
  result?: string;
  date?: string;
};

export type Testimonial = { name: string; role?: string; quote: string };

export type Faq = { question: string; answer: string };

export type Page = { title: string; slug: string; body?: PortableTextBlock[]; fallbackText?: string[] };
