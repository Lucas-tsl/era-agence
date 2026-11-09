import type { Settings } from "@/content/types";

const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5v6M8 7.5v.01M12 16.5v-3.5a2 2 0 0 1 4 0v3.5M12 10.5v6" />
    </svg>
  ),
  pinterest: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M10.6 20.5l1.9-8.3M9.3 13.6c-.9-.5-1.4-1.4-1.4-2.6 0-2.4 1.9-4.2 4.4-4.2 2.4 0 4.1 1.7 4.1 3.9 0 2.6-1.4 4.6-3.4 4.6-.9 0-1.6-.5-1.8-1.2" />
    </svg>
  ),
};

const labels = { instagram: "Instagram", linkedin: "LinkedIn", pinterest: "Pinterest" };

export function SocialLinks({ social, className = "" }: { social: Settings["social"]; className?: string }) {
  const entries = (Object.keys(icons) as (keyof typeof icons)[]).filter((key) => social[key]);
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {entries.map((key) => (
        <li key={key}>
          <a
            href={social[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${labels[key]} (nouvel onglet)`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/30 transition-colors hover:border-current"
          >
            {icons[key]}
          </a>
        </li>
      ))}
    </ul>
  );
}
