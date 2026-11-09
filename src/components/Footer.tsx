import Link from "next/link";
import type { Offer, Settings } from "@/content/types";
import { navigation } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";

export function Footer({ settings, offers }: { settings: Settings; offers: Offer[] }) {
  const year = 2026;
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 pb-8 pt-16 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          <div className="flex flex-col gap-4">
            <p className="font-display text-4xl">{settings.name}</p>
            <p className="max-w-sm text-[15px] leading-relaxed opacity-85">{settings.description}</p>
            <SocialLinks social={settings.social} />
          </div>

          <nav aria-label="Pied de page" className="flex flex-col gap-3">
            <p className="kicker text-accent">Navigation</p>
            <Link href="/" className="hover:underline">Accueil</Link>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="kicker text-accent">Les offres</p>
            {offers.map((offer) => (
              <Link key={offer.slug} href={`/offres/${offer.slug}`} className="hover:underline">
                {offer.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="kicker text-accent">Contact</p>
            <a href={`mailto:${settings.email}`} className="hover:underline">
              {settings.email}
            </a>
            <p className="opacity-85">{settings.locations}</p>
            <Link href="/contact" className="btn btn-accent mt-2 self-start">
              Rendez-vous découverte
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-paper/20 pt-6 text-sm opacity-80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {settings.name} · {settings.tagline}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/mentions-legales" className="hover:underline">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:underline">Confidentialité</Link>
            <Link href="/accessibilite" className="hover:underline">Accessibilité : non conforme</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
