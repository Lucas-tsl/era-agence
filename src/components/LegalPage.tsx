import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { getPage } from "@/content";

export async function LegalPage({ slug }: { slug: string }) {
  const page = await getPage(slug);
  if (!page) notFound();
  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-8 px-5 py-16 md:py-24">
      <h1 className="font-display text-4xl md:text-6xl">{page.title}</h1>
      <div className="flex flex-col gap-4 text-lg leading-relaxed [&_a]:underline [&_h2]:font-display [&_h2]:text-2xl">
        {page.body ? (
          <PortableText value={page.body} />
        ) : (
          page.fallbackText?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
        )}
      </div>
    </section>
  );
}
