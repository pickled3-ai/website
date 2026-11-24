"use client";

import { useEffect } from "react";

export default function ScrollReveals() {
  useEffect(() => {
    if (typeof IntersectionObserver !== "function" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Targets stay visible until a delivered intersection starts a one-time animation.
    let observer: IntersectionObserver | undefined;
    try {
      observer = new IntersectionObserver((entries, activeObserver) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("reveal-entered");
          activeObserver.unobserve(entry.target);
        }
      }, { threshold: 0.08 });

      for (const target of document.querySelectorAll("[data-scroll-reveal]")) {
        observer.observe(target);
      }
    } catch {
      observer?.disconnect();
    }
    return () => observer?.disconnect();
  }, []);

  return null;
}
