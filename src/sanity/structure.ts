import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenu du site")
    .items([
      S.listItem().title("Page d'accueil").child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem().title("Réglages du site").child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("offer").title("Offres"),
      S.documentTypeListItem("project").title("Réalisations"),
      S.documentTypeListItem("testimonial").title("Avis clients"),
      S.documentTypeListItem("faq").title("Questions fréquentes"),
      S.divider(),
      S.documentTypeListItem("page").title("Pages libres"),
    ]);
