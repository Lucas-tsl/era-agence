import { defineField } from "sanity";

/** Image avec texte alternatif obligatoire (accessibilité et SEO). */
export const imageField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Description de l'image",
        type: "string",
        description: "Décris l'image en quelques mots (lu par Google et les lecteurs d'écran).",
        validation: (rule) => rule.required(),
      }),
    ],
  });
