import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales et informations éditeur",
  description:
    "Mentions légales du site ERA Agency : éditeur, responsable de la publication, hébergeur et contact de l'agence d'image de marque à Angers et La Rochelle.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return <LegalPage slug="mentions-legales" />;
}
