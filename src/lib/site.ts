export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const navigation = [
  { href: "/agence", label: "L'agence" },
  { href: "/offres", label: "Les offres" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
] as const;
