import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta, Media, OfferCard } from "@/components/ui";
import { getHome, getOffer, getOffers, getSettings } from "@/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const offers = await getOffers();
  return offers.map((offer) => ({ slug: offer.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = await getOffer(slug);
  if (!offer) return {};
  return { title: offer.title, description: `${offer.kicker} ${offer.summary}` };
}

export default async function OfferPage({ params }: Props) {
  const { slug } = await params;
  const [offer, offers, home, settings] = await Promise.all([getOffer(slug), getOffers(), getHome(), getSettings()]);
  if (!offer) notFound();
  const others = offers.filter((item) => item.slug !== offer.slug);

  return (
    <>
      <section className="bg-deep text-on-deep">
        <div className="mx-auto grid max-w-7xl items-end gap-10 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:px-8 md:py-24">
          <div className="flex flex-col gap-6">
            <Link href="/offres" className="kicker text-accent hover:underline">← Toutes les offres</Link>
            <h1 className="font-display text-5xl leading-none md:text-8xl">{offer.title}</h1>
            <p className="font-accent text-2xl text-accent">{offer.kicker}</p>
            <p className="max-w-xl text-lg leading-relaxed opacity-90">{offer.summary}</p>
            <p className="kicker">
              {offer.format}
              {offer.price ? ` · ${offer.price}` : ""}
            </p>
          </div>
          <Media image={offer.image} label={offer.title} className="aspect-[4/5]" sizes="(min-width: 768px) 45vw, 100vw" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.4fr] md:px-8">
        <div className="flex flex-col gap-4">
          <p className="kicker text-brand">Pour qui</p>
          <p className="font-display text-3xl leading-tight md:text-4xl">{offer.audience}</p>
          <Link href="/contact" className="btn btn-primary mt-4 self-start">Je veux cette offre</Link>
        </div>
        <div className="flex flex-col gap-4">
          <p className="kicker text-brand">Ce qui est inclus</p>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {offer.includes.map((item) => (
              <li key={item} className="border-b border-line py-3 text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-soft">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 md:px-8">
          <h2 className="font-display text-3xl md:text-5xl">Les autres offres</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((item, index) => (
              <OfferCard key={item.slug} offer={item} index={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <ContactCta title={home.ctaTitle} text={home.ctaText} email={settings.email} />
    </>
  );
}
