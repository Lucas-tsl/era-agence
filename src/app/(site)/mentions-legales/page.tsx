import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Mentions légales", robots: { index: false } };

export default function MentionsLegalesPage() {
  return <LegalPage slug="mentions-legales" />;
}
