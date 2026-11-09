import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Déclaration d'accessibilité numérique",
  description:
    "Déclaration d'accessibilité du site ERA Agency : état de conformité au RGAA 4.1.2 et aux WCAG 2.2 (ISO/IEC 40500:2025), contact et voies de recours.",
};

export default function AccessibilitePage() {
  return <LegalPage slug="accessibilite" />;
}
