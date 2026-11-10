/** Bandeau défilant des offres. Le texte lisible par les lecteurs d'écran n'est donné qu'une fois. */
export function Marquee({ items }: { items: string[] }) {
  const repeated = [...items, ...items, ...items];
  const row = (key: string) => (
    <ul key={key} className="marquee-row" aria-hidden="true">
      {repeated.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-center gap-10">
          <span>{item}</span>
          <span className="text-accent">✦</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee bg-brand py-4 text-on-deep md:py-5">
      <p className="sr-only">{items.join(", ")}</p>
      <div>
        <div className="marquee-track font-display text-lg tracking-[0.12em] md:text-2xl">
          {row("a")}
          {row("b")}
        </div>
      </div>
    </div>
  );
}
