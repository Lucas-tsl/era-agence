import { defineArrayMember, defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Avis clients",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Prénom et nom", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "role", title: "Activité", type: "string" }),
    defineField({ name: "quote", title: "Avis", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({
      name: "published",
      title: "Accord de publication",
      type: "boolean",
      description: "À cocher seulement si le client a accepté que son avis soit publié.",
      initialValue: false,
    }),
  ],
  preview: { select: { title: "name", subtitle: "role" } },
});

export const faq = defineType({
  name: "faq",
  title: "Questions fréquentes",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "answer", title: "Réponse", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "order", title: "Ordre d'affichage", type: "number" }),
  ],
  preview: { select: { title: "question" } },
});

export const page = defineType({
  name: "page",
  title: "Pages libres",
  type: "document",
  description: "Mentions légales, confidentialité…",
  fields: [
    defineField({ name: "title", title: "Titre", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Adresse de la page",
      type: "slug",
      options: { source: "title" },
      description: "Utiliser « mentions-legales » et « confidentialite » pour les pages légales.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Contenu",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
  ],
  preview: { select: { title: "title", subtitle: "slug.current" } },
});
