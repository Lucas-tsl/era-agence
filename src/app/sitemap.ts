import type { MetadataRoute } from "next";
import { getOffers, getProjects } from "@/content";
import { siteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [offers, projects] = await Promise.all([getOffers(), getProjects()]);
  const staticRoutes = ["", "/agence", "/offres", "/realisations", "/contact"];
  return [
    ...staticRoutes.map((path) => ({ url: `${siteUrl}${path}` })),
    ...offers.map((offer) => ({ url: `${siteUrl}/offres/${offer.slug}` })),
    ...projects.map((project) => ({ url: `${siteUrl}/realisations/${project.slug}` })),
  ];
}
