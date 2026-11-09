import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/ui";
import { getProjects } from "@/content";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Les projets accompagnés par ERA : personal branding, rebranding, shootings.",
};

export default async function RealisationsPage() {
  const projects = await getProjects();
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-16 md:px-8 md:py-24">
      <div className="flex flex-col gap-4">
        <p className="kicker text-brand">Réalisations</p>
        <h1 className="font-display text-5xl leading-none md:text-7xl">Ils ont commencé leur new era</h1>
      </div>
      {projects.length > 0 ? (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-start gap-6 border border-line p-8 rounded-theme">
          <p className="font-accent text-2xl">Les premières réalisations arrivent très bientôt.</p>
          <p className="max-w-xl text-muted">En attendant, découvre les offres ou suis les coulisses de l&apos;agence sur Instagram.</p>
          <Link href="/offres" className="btn btn-primary">Voir les offres</Link>
        </div>
      )}
    </section>
  );
}
