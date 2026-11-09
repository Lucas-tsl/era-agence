import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField } from "./fields";

export const offer = defineType({
  name: "offer",
  title: "Offres",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Nom de l'offre", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Adresse de la page", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "kicker", title: "Question d'accroche", type: "string", description: "Ex. « Tu es entrepreneur, créatif, ambitieux ? »" }),
    defineField({ name: "audience", title: "Pour qui", type: "string" }),
    defineField({ name: "summary", title: "Résumé", type: "text", rows: 3 }),
    defineField({ name: "includes", title: "Ce qui est inclus", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "format", title: "Format", type: "string", description: "Ex. « Prestation unique », « Sur devis », « Mensuel »" }),
    defineField({ name: "price", title: "Prix affiché", type: "string", description: "Texte libre, ex. « À partir de 490 € ». Laisser vide pour ne rien afficher." }),
    imageField("image", "Image"),
    defineField({ name: "order", title: "Ordre d'affichage", type: "number" }),
  ],
  orderings: [{ title: "Ordre d'affichage", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "format", media: "image" } },
});
