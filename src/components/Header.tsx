"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Settings } from "@/content/types";
import { navigation } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";

export function Header({ name, social }: { name: string; social: Settings["social"] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 bg-deep text-on-deep">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" onClick={close} className="font-display text-2xl tracking-[0.06em] md:text-3xl">
          {name}
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className="kicker underline-offset-8 hover:underline aria-[current=page]:underline"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-accent">
            Rendez-vous
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className="fixed inset-x-0 bottom-0 top-[80px] z-40 flex flex-col gap-10 overflow-y-auto bg-deep px-5 pb-10 pt-6 md:hidden">
          <nav aria-label="Menu mobile" className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="font-display text-4xl leading-tight aria-[current=page]:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-6">
            <Link href="/contact" onClick={close} className="btn btn-accent w-full justify-center">
              Prendre rendez-vous
            </Link>
            <SocialLinks social={social} />
          </div>
        </div>
      )}
    </header>
  );
}
