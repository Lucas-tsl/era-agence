import type { Metadata } from "next";
import { ContactCta, FaqList, OfferCard, SectionHeading } from "@/components/ui";
import { getFaq, getHome, getOffers, getSettings } from "@/content";

export const metadata: Metadata = {
  title: "Offres de personal branding et rebranding",
  description:
    "ERA Identity, ERA Brand, ERA Studio, ERA Brain : personal branding, rebranding, shootings et accompagnement mensuel. Trouve l'offre faite pour toi.",
};

export default async function OffresPage() {
  const [offers, faq, home, settings] = await Promise.all([getOffers(), getFaq(), getHome(), getSettings()]);
  return (
    <>
      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-4">
          <p className="kicker text-brand">Les offres</p>
          <h1 className="font-display text-5xl leading-none md:text-7xl">Choisis ton ère</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Que tu te lances, que ta marque existe déjà ou que tu prépares un projet créatif, il y a une offre ERA pour toi.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer, index) => (
            <OfferCard key={offer.slug} offer={offer} index={index} level={2} />
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-5 pb-20 md:px-8">
        <SectionHeading kicker="Questions fréquentes" title="Quelle offre choisir ?" />
        <FaqList items={faq} />
      </section>

      <ContactCta title={home.ctaTitle} text={home.ctaText} email={settings.email} />
    </>
  );
}
