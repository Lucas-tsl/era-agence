/**
 * Importe le contenu de secours (src/content/fallback.ts) dans Sanity,
 * pour que Margot démarre avec un Studio déjà rempli.
 *
 * Usage :
 *   NEXT_PUBLIC_SANITY_PROJECT_ID=xxx SANITY_API_WRITE_TOKEN=yyy npm run seed
 *   (ajouter -- --force pour écraser des documents déjà modifiés dans le Studio)
 */
import { createClient } from "next-sanity";
import { faq, home, offers, pages, settings } from "../src/content/fallback.ts";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN;
const force = process.argv.includes("--force");

if (!projectId || !token) {
  console.error("Il manque NEXT_PUBLIC_SANITY_PROJECT_ID ou SANITY_API_WRITE_TOKEN.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2026-11-01", useCdn: false });
const key = (index: number) => `k${index}`;

/** Les lignes commençant par « ## » deviennent des intertitres (h2). */
const paragraphs = (texts: string[] = []) =>
  texts.map((line, index) => {
    const heading = line.startsWith("## ");
    const text = heading ? line.slice(3) : line;
    return {
      _type: "block",
      _key: key(index),
      style: heading ? "h2" : "normal",
      markDefs: [],
      children: [{ _type: "span", _key: `${key(index)}s`, text, marks: [] }],
    };
  });

type SeedDocument = { _id: string; _type: string } & Record<string, unknown>;

const documents: SeedDocument[] = [
  {
    _id: "siteSettings",
    _type: "siteSettings",
    name: settings.name,
    tagline: settings.tagline,
    description: settings.description,
    email: settings.email,
    locations: settings.locations,
    theme: settings.theme,
    social: settings.social,
    seo: settings.seo,
  },
  {
    _id: "homePage",
    _type: "homePage",
    ...home,
    steps: home.steps.map((step, index) => ({ _type: "step", _key: key(index), ...step })),
  },
  ...offers.map((offer, index) => ({
    _id: `offer-${offer.slug}`,
    _type: "offer",
    title: offer.title,
    slug: { _type: "slug", current: offer.slug },
    kicker: offer.kicker,
    audience: offer.audience,
    summary: offer.summary,
    includes: offer.includes,
    format: offer.format,
    seoTitle: (offer as { seoTitle?: string }).seoTitle,
    seoDescription: (offer as { seoDescription?: string }).seoDescription,
    order: index + 1,
  })),
  ...faq.map((item, index) => ({ _id: `faq-${index + 1}`, _type: "faq", ...item, order: index + 1 })),
  ...Object.values(pages).map((page) => ({
    _id: `page-${page.slug}`,
    _type: "page",
    title: page.title,
    slug: { _type: "slug", current: page.slug },
    body: paragraphs(page.fallbackText),
  })),
];

const transaction = client.transaction();
for (const document of documents) {
  if (force) transaction.createOrReplace(document);
  else transaction.createIfNotExists(document);
}

await transaction.commit();
console.log(`${documents.length} documents ${force ? "écrits" : "créés (les documents existants sont conservés)"} dans ${projectId}/${dataset}.`);
