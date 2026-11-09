import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Réglages du site",
  type: "document",
  groups: [
    { name: "general", title: "Général", default: true },
    { name: "social", title: "Réseaux" },
    { name: "seo", title: "Référencement" },
  ],
  fields: [
    defineField({ name: "name", title: "Nom de l'agence", type: "string", group: "general" }),
    defineField({ name: "tagline", title: "Accroche", type: "string", group: "general" }),
    defineField({ name: "description", title: "Présentation courte (footer)", type: "text", rows: 3, group: "general" }),
    defineField({ name: "email", title: "Email de contact", type: "string", group: "general", validation: (rule) => rule.email() }),
    defineField({ name: "locations", title: "Villes / zone d'intervention", type: "string", group: "general" }),
    defineField({ name: "bookingUrl", title: "Lien de prise de rendez-vous (Calendly…)", type: "url", group: "general" }),
    defineField({
      name: "theme",
      title: "Direction artistique",
      type: "string",
      group: "general",
      options: {
        list: [
          { title: "A · Velours (éditorial luxe)", value: "velours" },
          { title: "B · Cherry Pop (pop)", value: "cherry" },
          { title: "C · Carnet (intime)", value: "carnet" },
        ],
        layout: "radio",
      },
      initialValue: "velours",
    }),
    defineField({
      name: "social",
      title: "Réseaux sociaux",
      type: "object",
      group: "social",
      fields: [
        defineField({ name: "instagram", title: "Instagram", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
        defineField({ name: "pinterest", title: "Pinterest", type: "url" }),
      ],
    }),
    defineField({
      name: "seo",
      title: "Référencement par défaut",
      type: "object",
      group: "seo",
      fields: [
        defineField({ name: "title", title: "Titre Google", type: "string", description: "Idéalement 50 à 60 caractères.", validation: (rule) => [rule.min(30).warning("Un peu court."), rule.max(60).warning("Au-delà de 60 caractères, Google coupe le titre.")] }),
        defineField({ name: "description", title: "Description Google", type: "text", rows: 3, description: "Idéalement 140 à 160 caractères.", validation: (rule) => [rule.min(120).warning("Un peu court."), rule.max(160).warning("Au-delà de 160 caractères, Google coupe la description.")] }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Réglages du site" }) },
});
