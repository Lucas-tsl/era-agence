# ERA Agency · site internet

Site de l'agence d'image de marque **ERA** (Margot Charrier-Bellanger), construit avec **Next.js 16**, **Sanity** (CMS) et déployé sur **Vercel**.

- Site : pages Accueil, L'agence, Offres (une page par offre), Réalisations, Contact, mentions légales
- Espace d'administration de Margot : `/studio` (Sanity Studio intégré)
- Mobile d'abord : menu burger, boutons accessibles au pouce
- Trois directions artistiques (Velours, Cherry Pop, Carnet) interchangeables depuis le Studio

## Démarrer en local

```bash
npm install
cp .env.example .env.local   # puis compléter les valeurs
npm run dev                   # http://localhost:3000
```

Sans projet Sanity configuré, le site fonctionne avec le **contenu de secours** de `src/content/fallback.ts` (textes repris d'Instagram). Il est donc déployable dès maintenant.

## Brancher Sanity

1. Créer le projet : `npx sanity@latest init --env .env.local` (ou sur [sanity.io/manage](https://www.sanity.io/manage)), dataset `production`.
2. Renseigner `NEXT_PUBLIC_SANITY_PROJECT_ID` et `NEXT_PUBLIC_SANITY_DATASET` dans `.env.local` et dans les variables d'environnement Vercel.
3. Dans Sanity › API › CORS origins, ajouter `http://localhost:3000` et l'URL du site (avec « Allow credentials »).
4. Ouvrir `/studio`, remplir **Réglages du site**, **Page d'accueil** et les **Offres**.
5. Webhook de mise à jour instantanée : Sanity › API › Webhooks › URL `https://<site>/api/revalidate`, déclencheur création/mise à jour/suppression, projection `{_type}`, secret = `SANITY_REVALIDATE_SECRET`.

Sans webhook, le contenu se met à jour au plus tard au bout d'une heure (cache `hours`).

## Structure

```
sanity.config.ts            Configuration du Studio (/studio)
src/sanity/                 Client, requêtes GROQ, schémas du CMS
src/content/                Lecture du contenu (cache + contenu de secours)
src/app/(site)/             Pages publiques
src/app/studio/             Studio Sanity
src/app/api/revalidate/     Webhook Sanity → invalidation du cache
src/components/             Header, Footer, cartes, médias…
src/app/globals.css         Les 3 thèmes (variables CSS)
src/app/fonts.ts            Polices auto-hébergées (@fontsource)
```

## Modèle de contenu (Studio)

| Document | Rôle |
|---|---|
| Réglages du site | Nom, accroche, email, villes, lien de réservation, réseaux, SEO, direction artistique |
| Page d'accueil | Haut de page, méthode, à propos, appel à l'action |
| Offres | ERA Identity, Brand, Studio, Brain (inclus, format, prix) |
| Réalisations | Projets clients avec couverture, galerie, contexte, mission, résultat |
| Avis clients | Publiés seulement si l'accord est coché |
| Questions fréquentes | FAQ des pages L'agence et Offres |
| Pages libres | Mentions légales (`mentions-legales`), confidentialité (`confidentialite`) |

## Formulaire de contact

Sans configuration, le formulaire valide et confirme l'envoi (mode démonstration, rien n'est envoyé). Pour recevoir les emails : créer un compte [Resend](https://resend.com), vérifier le domaine, puis renseigner `RESEND_API_KEY`, `CONTACT_TO_EMAIL` et `CONTACT_FROM_EMAIL`.

## Scripts

- `npm run dev` : développement
- `npm run build` : build de production
- `npm run lint` : ESLint

## Déploiement

Chaque push sur `main` déploie la production sur Vercel ; chaque branche ou pull request a son aperçu.
