import Image from "next/image";
import Link from "next/link";
import type { Faq, Offer, Project, SiteImage } from "@/content/types";

/**
 * Photo Sanity, ou emplacement légendé tant qu'aucune image n'est fournie.
 * `reveal` : la photo se découvre comme un rideau quand elle arrive à l'écran.
 * `preload` : à réserver à la photo du haut de page, chargée en priorité.
 */
export function Media({
  image,
  label,
  className = "",
  sizes = "100vw",
  reveal = false,
  preload = false,
}: {
  image?: SiteImage;
  label: string;
  className?: string;
  sizes?: string;
  reveal?: boolean;
  preload?: boolean;
}) {
  return (
    <div data-reveal={reveal ? "unveil" : undefined} className={`relative overflow-hidden bg-brand rounded-theme ${className}`}>
      {image?.url ? (
        <Image src={image.url} alt={image.alt ?? ""} fill sizes={sizes} preload={preload} className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-end p-5" role="img" aria-label={label}>
          <span className="kicker text-accent">{label}</span>
        </div>
      )}
    </div>
  );
}

export function SectionHeading({ kicker, title, intro, align = "left" }: { kicker?: string; title: string; intro?: string; align?: "left" | "center" }) {
  return (
    <div data-reveal className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : ""}`}>
      {kicker && <p className="kicker text-brand">{kicker}</p>}
      <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">{title}</h2>
      {intro && <p className="max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

const offerStyles = ["bg-deep text-on-deep", "bg-brand text-on-deep", "bg-accent text-deep", "bg-soft text-ink border border-line"];

/** `level` : niveau du titre de la carte, pour garder une hiérarchie sans saut (h1 → h2 → h3). */
export function OfferCard({ offer, index, level = 3 }: { offer: Offer; index: number; level?: 2 | 3 }) {
  const Heading = level === 2 ? "h2" : "h3";
  return (
    // L'enveloppe porte l'apparition en cascade ; le lien porte le survol, sans délai.
    <div data-reveal style={{ "--d": `${(index % 4) * 90}ms` } as React.CSSProperties}>
      <Link
        href={`/offres/${offer.slug}`}
        className={`group flex h-full min-h-[340px] flex-col gap-4 p-8 rounded-theme transition-[transform,box-shadow] duration-500 ease-[var(--ease-out)] hover:-translate-y-2 hover:shadow-[0_28px_50px_-28px_rgba(43,7,12,0.55)] ${offerStyles[index % offerStyles.length]}`}
      >
        <Heading className="font-display text-3xl md:text-4xl">{offer.title}</Heading>
        <p className="font-accent text-xl opacity-90">{offer.kicker}</p>
        <p className="leading-relaxed opacity-85">{offer.summary}</p>
        <p className="kicker mt-auto">
          {offer.format}
          {offer.price ? ` · ${offer.price}` : ""} <span aria-hidden="true" className="arrow">→</span>
        </p>
      </Link>
    </div>
  );
}

export function ProjectCard({ project, level = 3 }: { project: Project; level?: 2 | 3 }) {
  const Heading = level === 2 ? "h2" : "h3";
  return (
    <Link href={`/realisations/${project.slug}`} data-reveal className="group flex flex-col gap-3">
      <Media
        image={project.cover}
        label={project.title}
        className="aspect-[4/5] [&_img]:transition-transform [&_img]:duration-700 [&_img]:ease-out group-hover:[&_img]:scale-105"
        sizes="(min-width: 768px) 33vw, 100vw"
      />
      <Heading className="font-display text-2xl">
        <span className="link-underline">{project.title}</span>
      </Heading>
      {project.category && <p className="kicker text-muted">{project.category}</p>}
    </Link>
  );
}

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
            {item.question}
            <span aria-hidden="true" className="text-2xl transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function ContactCta({ title, text, email }: { title: string; text: string; email: string }) {
  return (
    <section className="bg-brand text-on-deep">
      <div data-reveal className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-20 md:px-8 md:py-28">
        <h2 className="font-display max-w-3xl text-5xl leading-none md:text-7xl">{title}</h2>
        <p className="max-w-xl text-lg opacity-90">{text}</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn btn-accent">Parlons de ton projet</Link>
          <a href={`mailto:${email}`} className="btn btn-outline">{email}</a>
        </div>
      </div>
    </section>
  );
}
