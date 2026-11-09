import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta, Media } from "@/components/ui";
import { getHome, getProject, getProjects, getSettings } from "@/content";

type Props = { params: Promise<{ slug: string }> };

/** Avec Cache Components, au moins un paramètre est requis : un faux slug sert tant qu'il n'y a pas de projet. */
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.length > 0 ? projects.map((project) => ({ slug: project.slug })) : [{ slug: "exemple" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.context };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const [project, home, settings] = await Promise.all([getProject(slug), getHome(), getSettings()]);
  if (!project) notFound();

  const blocks = [
    { label: "Le contexte", text: project.context },
    { label: "La mission", text: project.mission },
    { label: "Le résultat", text: project.result },
  ].filter((block) => block.text);

  return (
    <>
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-16 md:px-8 md:py-24">
        <Link href="/realisations" className="kicker text-brand hover:underline">← Toutes les réalisations</Link>
        <div className="flex flex-col gap-3">
          {project.category && <p className="kicker text-muted">{project.category}</p>}
          <h1 className="font-display text-5xl leading-none md:text-7xl">{project.title}</h1>
          {project.client && <p className="font-accent text-2xl">{project.client}</p>}
        </div>
        <Media image={project.cover} label={project.title} className="aspect-[16/9]" />
        {blocks.length > 0 && (
          <div className="grid gap-10 md:grid-cols-3">
            {blocks.map((block) => (
              <div key={block.label} className="flex flex-col gap-3 border-t border-brand pt-5">
                <h2 className="kicker text-brand">{block.label}</h2>
                <p className="leading-relaxed">{block.text}</p>
              </div>
            ))}
          </div>
        )}
        {project.gallery && project.gallery.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <Media key={image.url} image={image} label={`Image ${index + 1}`} className="aspect-[4/5]" sizes="(min-width: 768px) 50vw, 100vw" />
            ))}
          </div>
        )}
      </section>
      <ContactCta title={home.ctaTitle} text={home.ctaText} email={settings.email} />
    </>
  );
}
