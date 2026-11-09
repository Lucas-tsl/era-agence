import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField } from "./fields";

export const homePage = defineType({
  name: "homePage",
  title: "Page d'accueil",
  type: "document",
  groups: [
    { name: "hero", title: "Haut de page", default: true },
    { name: "method", title: "Méthode" },
    { name: "about", title: "À propos" },
    { name: "cta", title: "Contact" },
  ],
  fields: [
    defineField({ name: "heroKicker", title: "Surtitre", type: "string", group: "hero" }),
    defineField({ name: "heroTitle", title: "Titre", type: "string", group: "hero" }),
    defineField({ name: "heroHighlight", title: "Mots mis en valeur", type: "string", group: "hero", description: "Affichés en couleur à la fin du titre (ex. « new era »)." }),
    defineField({ name: "heroText", title: "Texte d'introduction", type: "text", rows: 3, group: "hero" }),
    { ...imageField("heroImage", "Photo principale"), group: "hero" },
    defineField({ name: "methodTitle", title: "Titre de la méthode", type: "string", group: "method" }),
    defineField({
      name: "steps",
      title: "Étapes",
      type: "array",
      group: "method",
      validation: (rule) => rule.max(4),
      of: [
        defineArrayMember({
          type: "object",
          name: "step",
          fields: [
            defineField({ name: "title", title: "Titre", type: "string" }),
            defineField({ name: "text", title: "Texte", type: "text", rows: 2 }),
          ],
        }),
      ],
    }),
    defineField({ name: "aboutTitle", title: "Titre", type: "string", group: "about" }),
    defineField({ name: "aboutText", title: "Texte", type: "text", rows: 6, group: "about" }),
    { ...imageField("aboutImage", "Portrait"), group: "about" },
    defineField({ name: "ctaTitle", title: "Titre", type: "string", group: "cta" }),
    defineField({ name: "ctaText", title: "Texte", type: "text", rows: 2, group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Page d'accueil" }) },
});
