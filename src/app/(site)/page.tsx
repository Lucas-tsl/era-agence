import Link from "next/link";
import { ContactCta, Media, OfferCard, ProjectCard, SectionHeading } from "@/components/ui";
import { getHome, getOffers, getProjects, getSettings, getTestimonials } from "@/content";

export default async function HomePage() {
  const [home, offers, projects, testimonials, settings] = await Promise.all([
    getHome(),
    getOffers(),
    getProjects(),
    getTestimonials(),
    getSettings(),
  ]);

  return (
    <>
      <section className="bg-deep text-on-deep">
        <div className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-16 pt-10 md:grid-cols-[1.2fr_1fr] md:px-8 md:pb-24 md:pt-16">
          <div className="flex flex-col gap-7">
            <p className="kicker text-accent">{home.heroKicker}</p>
            <h1 className="font-display text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.95]">
              {home.heroTitle} <span className="font-accent text-accent">{home.heroHighlight}</span>
            </h1>
            <p className="font-accent max-w-xl text-2xl leading-snug">{home.heroText}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-accent">Parlons de ton projet</Link>
              <Link href="/offres" className="btn btn-outline">Découvrir les offres</Link>
            </div>
          </div>
          <Media image={home.heroImage} label="Photo principale" className="aspect-[4/5] w-full md:aspect-[3/4]" sizes="(min-width: 768px) 45vw, 100vw" />
        </div>
      </section>

      <div className="bg-brand px-5 py-4 text-center text-on-deep">
        <p className="font-display text-lg tracking-[0.12em] md:text-2xl">
          {offers.map((offer) => offer.title).join("  ·  ")}
        </p>
      </div>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <Media image={home.aboutImage} label="Portrait de Margot" className="aspect-[4/5]" sizes="(min-width: 768px) 50vw, 100vw" />
        <div className="flex flex-col gap-6">
          <SectionHeading kicker="L'agence" title={home.aboutTitle} />
          <p className="text-lg leading-relaxed text-muted">{home.aboutText}</p>
          <Link href="/agence" className="font-accent self-start text-2xl text-brand hover:underline">
            Lire mon histoire →
          </Link>
        </div>
      </section>

      <section className="bg-soft">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-20 md:px-8 md:py-28">
          <SectionHeading kicker="La méthode ERA" title={home.methodTitle} align="center" />
          <ol className="grid gap-10 md:grid-cols-3">
            {home.steps.map((step, index) => (
              <li key={step.title} className="flex flex-col gap-3 border-t border-brand pt-6">
                <span className="font-display text-6xl text-brand">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-accent text-2xl">{step.title}</h3>
                <p className="leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-20 md:px-8 md:py-28">
        <SectionHeading kicker="Les offres" title="Choisis ton ère" intro="Du personal branding au suivi mensuel, chaque offre est construite sur-mesure." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer, index) => (
            <OfferCard key={offer.slug} offer={offer} index={index} />
          ))}
        </div>
      </section>

      {projects.length > 0 && (
        <section className="bg-ink text-paper">
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-20 md:px-8 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-4xl md:text-6xl">Réalisations</h2>
              <Link href="/realisations" className="font-accent text-xl hover:underline">Voir tous les projets →</Link>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 py-20 text-center md:py-28">
          <p className="kicker text-brand">Ils m&apos;ont fait confiance</p>
          <blockquote className="font-accent text-3xl leading-snug md:text-4xl">« {testimonials[0].quote} »</blockquote>
          <p className="kicker">
            {testimonials[0].name}
            {testimonials[0].role ? ` · ${testimonials[0].role}` : ""}
          </p>
        </section>
      )}

      <ContactCta title={home.ctaTitle} text={home.ctaText} email={settings.email} />
    </>
  );
}
