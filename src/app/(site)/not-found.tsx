import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-5 py-24">
      <p className="kicker text-brand">Erreur 404</p>
      <h1 className="font-display text-5xl md:text-7xl">Cette page n&apos;existe pas (encore).</h1>
      <Link href="/" className="btn btn-primary">Retour à l&apos;accueil</Link>
    </section>
  );
}
