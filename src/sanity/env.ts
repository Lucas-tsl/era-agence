export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-11-01";

/**
 * Tant que le projet Sanity n'est pas créé, le site utilise le contenu
 * de secours de `src/content/fallback.ts`. Il reste donc déployable.
 */
export const isSanityConfigured = /^[a-z0-9-]+$/.test(projectId);
