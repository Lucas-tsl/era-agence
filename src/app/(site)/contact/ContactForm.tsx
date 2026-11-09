"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "w-full border-0 border-b border-current/40 bg-transparent py-3 text-lg outline-none focus:border-current";

export function ContactForm({ offers }: { offers: string[] }) {
  const [state, formAction, pending] = useActionState(sendContact, initialState);

  if (state.status === "success") {
    return (
      <p role="status" className="font-accent text-2xl leading-snug">
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-6" noValidate>
      <div className="hidden" aria-hidden="true">
        <label>
          Ne pas remplir
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="kicker flex flex-col gap-2">
        Prénom et nom
        <input name="name" type="text" autoComplete="name" required className={fieldClass} aria-invalid={Boolean(state.errors?.name)} />
        {state.errors?.name && <span className="text-sm normal-case tracking-normal text-accent">{state.errors.name}</span>}
      </label>

      <label className="kicker flex flex-col gap-2">
        Email
        <input name="email" type="email" autoComplete="email" required className={fieldClass} aria-invalid={Boolean(state.errors?.email)} />
        {state.errors?.email && <span className="text-sm normal-case tracking-normal text-accent">{state.errors.email}</span>}
      </label>

      <label className="kicker flex flex-col gap-2">
        L&apos;offre qui t&apos;intéresse
        <select name="offer" className={`${fieldClass} [&>option]:text-ink`} defaultValue="">
          <option value="">Je ne sais pas encore</option>
          {offers.map((offer) => (
            <option key={offer} value={offer}>
              {offer}
            </option>
          ))}
        </select>
      </label>

      <label className="kicker flex flex-col gap-2">
        Ton projet
        <textarea name="message" rows={5} required className={`${fieldClass} resize-y`} aria-invalid={Boolean(state.errors?.message)} />
        {state.errors?.message && <span className="text-sm normal-case tracking-normal text-accent">{state.errors.message}</span>}
      </label>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-accent">
          {state.message}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn btn-accent self-start disabled:opacity-60">
        {pending ? "Envoi…" : "Envoyer"}
      </button>
    </form>
  );
}
