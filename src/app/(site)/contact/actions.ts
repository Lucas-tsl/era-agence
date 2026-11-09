"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(_previous: ContactState, formData: FormData): Promise<ContactState> {
  // Champ piège invisible : les robots le remplissent, les humains non.
  if (String(formData.get("website") ?? "")) {
    return { status: "success", message: "Merci, ton message est bien parti." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const offer = String(formData.get("offer") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Indique ton prénom et ton nom.";
  if (!emailPattern.test(email)) errors.email = "Cette adresse email ne semble pas valide.";
  if (message.length < 10) errors.message = "Dis-m'en un peu plus sur ton projet.";
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Quelques champs sont à compléter.", errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.info(`[contact] nouvelle demande (offre : ${offer || "non précisée"}) — envoi d'email non configuré`);
    return {
      status: "success",
      message: "Merci, ton message est bien reçu. (Version de démonstration : l'envoi par email sera activé à la mise en ligne.)",
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Site ERA <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Nouvelle demande · ${offer || "site ERA"}`,
      text: `Nom : ${name}\nEmail : ${email}\nOffre : ${offer || "non précisée"}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    console.error(`[contact] échec de l'envoi (${response.status})`);
    return { status: "error", message: "Oups, le message n'est pas parti. Écris directement à contact@era-agence.com." };
  }

  return { status: "success", message: "Merci, ton message est bien parti. Je te réponds très vite !" };
}
