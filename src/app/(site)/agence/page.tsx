import type { Metadata } from "next";
import { ContactCta, FaqList, Media, SectionHeading } from "@/components/ui";
import { getFaq, getHome, getSettings } from "@/content";

export const metadata: Metadata = {
  title: "Qui est Margot, fondatrice de l'agence ERA",
  description:
    "Découvre Margot, fondatrice d'ERA : un parcours dans la mode et le luxe, entre Paris, Milan et Cannes, au service de ton image de marque et de ta stratégie.",
};

const timeline = [
  { label: "L'enfance", text: "Une enfant rêveuse, passionnée de mode grâce à une maman couturière." },
  { label: "Paris", text: "Bachelor et Master en communication et marketing de la mode et du luxe, Mod'Art International." },
  { label: "Fashion Week · Cannes", text: "Défilés Haute Couture, un podcast, le Festival de Cannes." },
  { label: "Milan · Angers", text: "Trois mois en Italie, puis l'événement To Do et une première entreprise." },
  { label: "Octobre 2026", text: "ERA voit le jour." },
];

export default async function AgencePage() {
  const [home, faq, settings] = await Promise.all([getHome(), getFaq(), getSettings()]);
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div className="flex flex-col gap-6">
          <p className="kicker text-brand">L&apos;agence</p>
          <h1 className="font-display text-5xl leading-none md:text-7xl">{home.aboutTitle}</h1>
          <p className="text-lg leading-relaxed text-muted">{home.aboutText}</p>
        </div>
        <Media image={home.aboutImage} label="Portrait de Margot" className="aspect-[4/5]" sizes="(min-width: 768px) 50vw, 100vw" />
      </section>

      <section className="bg-soft">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-20 md:px-8">
          <SectionHeading kicker="Mon parcours" title="Mes 1000 vies" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {timeline.map((item) => (
              <li key={item.label} className="flex flex-col gap-2 border-t-2 border-ink pt-4">
                <span className="kicker text-brand">{item.label}</span>
                <p className="leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ol>
          <p className="font-accent max-w-3xl text-2xl leading-snug">
            « Hypersensible, j&apos;en ai fait ma force : elle me rend bienveillante, empathique et attentive aux détails. »
          </p>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-20 md:px-8">
        <SectionHeading kicker="La méthode ERA" title={home.methodTitle} />
        <ol className="grid gap-10 md:grid-cols-3">
          {home.steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3 border-t border-brand pt-6">
              <span className="font-display text-6xl text-brand">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-accent text-2xl">{step.title}</h3>
              <p className="leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-5 pb-20 md:px-8">
        <SectionHeading kicker="Questions fréquentes" title="On se pose souvent ces questions" />
        <FaqList items={faq} />
      </section>

      <ContactCta title={home.ctaTitle} text={home.ctaText} email={settings.email} />
    </>
  );
}
