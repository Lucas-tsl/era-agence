import { defineQuery } from "next-sanity";

const image = `{ "url": asset->url, alt, "w": asset->metadata.dimensions.width, "h": asset->metadata.dimensions.height }`;

export const settingsQuery = defineQuery(`*[_type == "siteSettings"][0]{
  name, tagline, description, email, locations, theme, bookingUrl,
  social{ instagram, linkedin, pinterest },
  seo{ title, description }
}`);

export const homeQuery = defineQuery(`*[_type == "homePage"][0]{
  heroKicker, heroTitle, heroHighlight, heroText, "heroImage": heroImage${image},
  methodTitle, steps[]{ title, text },
  aboutTitle, aboutText, "aboutImage": aboutImage${image},
  ctaTitle, ctaText
}`);

export const offersQuery = defineQuery(`*[_type == "offer"] | order(order asc){
  title, "slug": slug.current, kicker, audience, summary, includes, format, price,
  "image": image${image}
}`);

export const offerQuery = defineQuery(`*[_type == "offer" && slug.current == $slug][0]{
  title, "slug": slug.current, kicker, audience, summary, includes, format, price,
  "image": image${image}
}`);

export const projectsQuery = defineQuery(`*[_type == "project"] | order(date desc){
  title, "slug": slug.current, client, category, "offerSlug": offer->slug.current,
  "cover": cover${image}
}`);

export const projectQuery = defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  title, "slug": slug.current, client, category, "offerSlug": offer->slug.current,
  "cover": cover${image}, "gallery": gallery[]${image}, context, mission, result, date
}`);

export const testimonialsQuery = defineQuery(`*[_type == "testimonial" && published == true]{ name, role, quote }`);

export const faqQuery = defineQuery(`*[_type == "faq"] | order(order asc){ question, answer }`);

export const pageQuery = defineQuery(`*[_type == "page" && slug.current == $slug][0]{ title, "slug": slug.current, body }`);
