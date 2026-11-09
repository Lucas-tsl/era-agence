import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField } from "./fields";

export const project = defineType({
  name: "project",
  title: "Réalisations",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre du projet", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Adresse de la page", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "client", title: "Client", type: "string" }),
    defineField({ name: "category", title: "Catégorie", type: "string", description: "Ex. « Rebranding », « Shooting »" }),
    defineField({ name: "offer", title: "Offre liée", type: "reference", to: [{ type: "offer" }] }),
    imageField("cover", "Image de couverture"),
    defineField({
      name: "gallery",
      title: "Galerie",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Description de l'image", type: "string" })],
        }),
      ],
    }),
    defineField({ name: "context", title: "Contexte", type: "text", rows: 3 }),
    defineField({ name: "mission", title: "Mission", type: "text", rows: 3 }),
    defineField({ name: "result", title: "Résultat", type: "text", rows: 3 }),
    defineField({ name: "date", title: "Date", type: "date" }),
  ],
  preview: { select: { title: "title", subtitle: "client", media: "cover" } },
});
