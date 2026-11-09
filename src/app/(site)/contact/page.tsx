import type { Metadata } from "next";
import { SocialLinks } from "@/components/SocialLinks";
import { getOffers, getSettings } from "@/content";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact et rendez-vous découverte gratuit",
  description:
    "Une question, un projet de personal branding ou de rebranding ? Écris à ERA ou réserve ton appel découverte gratuit. Réponse sous 48 h, partout en France.",
};

export default async function ContactPage() {
  const [settings, offers] = await Promise.all([getSettings(), getOffers()]);
  return (
    <section className="bg-brand text-on-deep">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div className="flex flex-col gap-6">
          <p className="kicker text-accent">Contact</p>
          <h1 className="font-display text-5xl leading-none md:text-7xl">
            Prête pour ta <span className="font-accent text-accent">new era</span> ?
          </h1>
          <p className="max-w-md text-lg opacity-90">
            Pour toute question ou un rendez-vous découverte, écris-moi. Je réponds sous 48 h.
          </p>
          <a href={`mailto:${settings.email}`} className="font-accent text-2xl hover:underline">
            {settings.email}
          </a>
          {settings.bookingUrl && (
            <a href={settings.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent self-start">
              Réserver un appel découverte
            </a>
          )}
          <p className="opacity-85">{settings.locations}</p>
          <SocialLinks social={settings.social} />
        </div>
        <ContactForm offers={offers.map((offer) => offer.title)} />
      </div>
    </section>
  );
}
