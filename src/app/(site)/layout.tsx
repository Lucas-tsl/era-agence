import type { Metadata } from "next";
import "../globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getOffers, getSettings } from "@/content";
import { siteUrl } from "@/lib/site";
import { fontVariables } from "../fonts";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  const title = settings.seo?.title ?? settings.name;
  const description = settings.seo?.description ?? settings.description;
  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s · ${settings.name}` },
    description,
    openGraph: { type: "website", locale: "fr_FR", siteName: settings.name, title, description },
  };
}

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const [settings, offers] = await Promise.all([getSettings(), getOffers()]);
  return (
    <html lang="fr" data-theme={settings.theme} className={fontVariables}>
      <body className="flex min-h-screen flex-col">
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:p-3">
          Aller au contenu
        </a>
        <Header name={settings.name} social={settings.social} />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer settings={settings} offers={offers} />
      </body>
    </html>
  );
}
