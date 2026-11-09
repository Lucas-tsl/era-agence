import Image from "next/image";
import Link from "next/link";
import type { Faq, Offer, Project, SiteImage } from "@/content/types";

/** Photo Sanity, ou emplacement légendé tant qu'aucune image n'est fournie. */
export function Media({ image, label, className = "", sizes = "100vw" }: { image?: SiteImage; label: string; className?: string; sizes?: string }) {
  return (
    <div className={`relative overflow-hidden bg-brand rounded-theme ${className}`}>
      {image?.url ? (
        <Image src={image.url} alt={image.alt ?? ""} fill sizes={sizes} className="object-cover" />
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
    <div className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : ""}`}>
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
    <Link
      href={`/offres/${offer.slug}`}
      className={`group flex min-h-[340px] flex-col gap-4 p-8 transition-transform hover:-translate-y-1 rounded-theme ${offerStyles[index % offerStyles.length]}`}
    >
      <Heading className="font-display text-3xl md:text-4xl">{offer.title}</Heading>
      <p className="font-accent text-xl opacity-90">{offer.kicker}</p>
      <p className="leading-relaxed opacity-85">{offer.summary}</p>
      <p className="kicker mt-auto">
        {offer.format}
        {offer.price ? ` · ${offer.price}` : ""} <span aria-hidden="true">→</span>
      </p>
    </Link>
  );
}

export function ProjectCard({ project, level = 3 }: { project: Project; level?: 2 | 3 }) {
  const Heading = level === 2 ? "h2" : "h3";
  return (
    <Link href={`/realisations/${project.slug}`} className="group flex flex-col gap-3">
      <Media image={project.cover} label={project.title} className="aspect-[4/5]" sizes="(min-width: 768px) 33vw, 100vw" />
      <Heading className="font-display text-2xl group-hover:underline">{project.title}</Heading>
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
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-20 md:px-8 md:py-28">
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
