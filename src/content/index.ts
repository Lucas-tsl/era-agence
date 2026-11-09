import { cacheLife, cacheTag } from "next/cache";
import { client } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";
import * as q from "@/sanity/queries";
import * as fallback from "./fallback";
import type { Faq, Home, Offer, Page, Project, Settings, Testimonial } from "./types";

/**
 * Lecture du contenu Sanity, mise en cache par type de document.
 * Le webhook `/api/revalidate` invalide le tag du type modifié.
 */
async function fetchSanity<T>(query: string, params: Record<string, string>, tag: string): Promise<T | null> {
  "use cache";
  cacheLife("hours");
  cacheTag(tag);
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch<T>(query, params);
  } catch (error) {
    console.error(`[sanity] requête "${tag}" en échec`, error);
    return null;
  }
}

/** Garde les valeurs de secours pour les champs vides côté Sanity. */
function merge<T extends object>(base: T, override: Partial<T> | null): T {
  if (!override) return base;
  const result = { ...base };
  for (const [key, value] of Object.entries(override)) {
    if (value !== null && value !== undefined && value !== "" && !(Array.isArray(value) && value.length === 0)) {
      (result as Record<string, unknown>)[key] = value;
    }
  }
  return result;
}

export async function getSettings(): Promise<Settings> {
  const data = await fetchSanity<Partial<Settings>>(q.settingsQuery, {}, "siteSettings");
  const merged = merge(fallback.settings, data);
  return { ...merged, social: merge(fallback.settings.social, data?.social ?? null) };
}

export async function getHome(): Promise<Home> {
  return merge(fallback.home, await fetchSanity<Partial<Home>>(q.homeQuery, {}, "homePage"));
}

export async function getOffers(): Promise<Offer[]> {
  const data = await fetchSanity<Offer[]>(q.offersQuery, {}, "offer");
  return data && data.length > 0 ? data : fallback.offers;
}

export async function getOffer(slug: string): Promise<Offer | null> {
  const data = await fetchSanity<Offer>(q.offerQuery, { slug }, "offer");
  return data ?? fallback.offers.find((offer) => offer.slug === slug) ?? null;
}

export async function getProjects(): Promise<Project[]> {
  const data = await fetchSanity<Project[]>(q.projectsQuery, {}, "project");
  return data && data.length > 0 ? data : fallback.projects;
}

export async function getProject(slug: string): Promise<Project | null> {
  const data = await fetchSanity<Project>(q.projectQuery, { slug }, "project");
  return data ?? fallback.projects.find((project) => project.slug === slug) ?? null;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await fetchSanity<Testimonial[]>(q.testimonialsQuery, {}, "testimonial");
  return data && data.length > 0 ? data : fallback.testimonials;
}

export async function getFaq(): Promise<Faq[]> {
  const data = await fetchSanity<Faq[]>(q.faqQuery, {}, "faq");
  return data && data.length > 0 ? data : fallback.faq;
}

export async function getPage(slug: string): Promise<Page | null> {
  const data = await fetchSanity<Page>(q.pageQuery, { slug }, "page");
  return data ?? fallback.pages[slug] ?? null;
}
