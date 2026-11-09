import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité et données",
  description:
    "Comment ERA Agency utilise et protège les informations envoyées par le formulaire de contact, et comment exercer tes droits d'accès ou de suppression.",
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return <LegalPage slug="confidentialite" />;
}
