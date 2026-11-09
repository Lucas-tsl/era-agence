import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Politique de confidentialité", robots: { index: false } };

export default function ConfidentialitePage() {
  return <LegalPage slug="confidentialite" />;
}
