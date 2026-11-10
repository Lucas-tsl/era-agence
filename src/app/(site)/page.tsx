import Link from "next/link";
import { Marquee } from "@/components/Marquee";
import { ContactCta, Media, OfferCard, ProjectCard, SectionHeading } from "@/components/ui";
import { getHome, getOffers, getProjects, getSettings, getTestimonials } from "@/content";

/** Décalage d'une animation, en millisecondes. */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;
const words = (text: string) => text.split(/\s+/).filter(Boolean);

/** Pastille au texte circulaire qui tourne lentement sur l'angle de la photo (décorative). */
function HeroBadge({ text }: { text: string }) {
  return (
    <div
      aria-hidden="true"
      className="anim-rise absolute -bottom-8 left-4 h-24 w-24 md:-bottom-10 md:-left-10 md:h-32 md:w-32"
      style={delay(900)}
    >
      <div className="relative h-full w-full rounded-full bg-deep text-accent ring-1 ring-accent/40">
        <svg viewBox="0 0 100 100" className="anim-spin h-full w-full">
          <defs>
            <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
          </defs>
          <text fill="currentColor" style={{ fontFamily: "var(--kicker-font)", fontSize: 8.4, letterSpacing: 1.2, textTransform: "uppercase" }}>
            <textPath href="#badge-circle" textLength="232" lengthAdjust="spacing">
              {text}
            </textPath>
          </text>
        </svg>
        <span className="font-display absolute inset-0 flex items-center justify-center text-xl text-on-deep md:text-2xl">✦</span>
      </div>
    </div>
  );
}

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
            <p className="kicker anim-rise text-accent">{home.heroKicker}</p>
            <h1 className="font-display text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.95]">
              {/* Mot par mot, pour que les lignes se coupent comme un texte normal ; l'accent reste groupé. */}
              {words(home.heroTitle).map((word, index) => (
                <span key={`${word}-${index}`}>
                  <span className="anim-rise inline-block" style={delay(120 + index * 70)}>
                    {word}
                  </span>{" "}
                </span>
              ))}
              <span className="font-accent whitespace-nowrap text-accent">
                {words(home.heroHighlight).map((word, index) => (
                  <span key={`${word}-${index}`}>
                    {index > 0 && " "}
                    <span className="anim-rise inline-block" style={delay(120 + (words(home.heroTitle).length + index) * 70)}>
                      {word}
                    </span>
                  </span>
                ))}
              </span>
            </h1>
            <p className="font-accent anim-rise max-w-xl text-2xl leading-snug" style={delay(420)}>{home.heroText}</p>
            <div className="anim-rise flex flex-wrap gap-4" style={delay(540)}>
              <Link href="/contact" className="btn btn-accent">Parlons de ton projet</Link>
              <Link href="/offres" className="btn btn-outline">Découvrir les offres</Link>
            </div>
          </div>
          <div className="relative">
            <Media
              image={home.heroImage}
              label="Photo principale"
              preload
              className="anim-unveil aspect-[4/5] w-full md:aspect-[3/4]"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
            <HeroBadge text={`${settings.tagline} ✦ ${settings.name} ✦ `} />
          </div>
        </div>
      </section>

      <Marquee items={offers.map((offer) => offer.title)} />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <Media image={home.aboutImage} label="Portrait de Margot" reveal className="aspect-[4/5]" sizes="(min-width: 768px) 50vw, 100vw" />
        <div className="flex flex-col gap-6">
          <SectionHeading kicker="L'agence" title={home.aboutTitle} />
          <p data-reveal style={delay(120)} className="text-lg leading-relaxed text-muted">{home.aboutText}</p>
          <Link href="/agence" data-reveal style={delay(220)} className="group font-accent self-start text-2xl text-brand">
            <span className="link-underline">Lire mon histoire</span> <span aria-hidden="true" className="arrow">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-soft">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-20 md:px-8 md:py-28">
          <SectionHeading kicker="La méthode ERA" title={home.methodTitle} align="center" />
          <ol className="grid gap-10 md:grid-cols-3">
            {home.steps.map((step, index) => (
              <li key={step.title} data-reveal style={delay(index * 140)} className="reveal-line flex flex-col gap-3 pt-6">
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
              <Link href="/realisations" className="group font-accent text-xl">
                <span className="link-underline">Voir tous les projets</span> <span aria-hidden="true" className="arrow">→</span>
              </Link>
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
        <section data-reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 py-20 text-center md:py-28">
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
