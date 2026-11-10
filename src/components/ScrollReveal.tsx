"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fait apparaître en douceur les éléments marqués `data-reveal` quand ils entrent à l'écran.
 * Sans JavaScript, ou si la personne a demandé de réduire les animations, tout reste visible.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    for (const element of document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")) {
      // Ce qui est déjà à l'écran au chargement reste affiché : pas de clignotement.
      if (element.getBoundingClientRect().top < window.innerHeight * 0.92) element.classList.add("is-visible");
      else observer.observe(element);
    }
    document.documentElement.classList.add("reveal-ready");

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
